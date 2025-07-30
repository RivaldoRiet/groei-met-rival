import { createClient } from 'npm:@supabase/supabase-js@2.53.0';
import Stripe from 'npm:stripe@18.3.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Get the user from the request
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("Authorization header missing");
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    
    if (userError || !userData.user?.email) {
      throw new Error("User not authenticated or email not available");
    }

    const userEmail = userData.user.email;
    console.log(`Creating checkout for user: ${userEmail}`);

    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    });

    const { orderId, amount, currency = 'eur', description } = await req.json();

    if (!orderId || !amount) {
      throw new Error("Missing required parameters: orderId and amount");
    }

    // Check if customer already exists in Stripe
    const existingCustomers = await stripe.customers.list({
      email: userEmail,
      limit: 1
    });

    let customerId;
    if (existingCustomers.data.length > 0) {
      customerId = existingCustomers.data[0].id;
      console.log(`Using existing Stripe customer: ${customerId}`);
    } else {
      // Create new customer
      const customer = await stripe.customers.create({
        email: userEmail,
        metadata: {
          supabase_user_id: userData.user.id
        }
      });
      customerId = customer.id;
      console.log(`Created new Stripe customer: ${customerId}`);
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card', 'ideal'],
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: description || 'BoostDirect Social Media Services',
              description: `Bestelling ${orderId}`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}&order_id=${orderId}`,
      cancel_url: `${req.headers.get('origin')}/checkout`,
      customer_update: {
        name: 'never',
        address: 'never',
      },
      metadata: {
        orderId,
        user_email: userEmail,
        user_id: userData.user.id,
      },
      billing_address_collection: 'auto',
      shipping_address_collection: undefined,
    });

    console.log(`Checkout session created: ${session.id}`);

    return new Response(
      JSON.stringify({ 
        sessionUrl: session.url,
        sessionId: session.id 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: 'Failed to create checkout session'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});