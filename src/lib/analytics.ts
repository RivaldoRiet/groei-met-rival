// Google Analytics and Google Ads tracking utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
  // Load Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  // Configure GA
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href,
  });

  console.log('Google Analytics initialized with ID:', measurementId);
};

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: path,
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track events
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters,
    });
    console.log('Event tracked:', eventName, parameters);
  }
};

// Track Google Ads conversions
export const trackConversion = (conversionId: string, conversionLabel: string, value?: number, currency: string = 'EUR') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
      value: value,
      currency: currency,
      transaction_id: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    });
    console.log('Google Ads conversion tracked:', { conversionId, conversionLabel, value, currency });
  }
};

// Enhanced Ecommerce - Purchase Event
export const trackPurchase = (orderData: {
  orderId: string;
  value: number;
  currency: string;
  items: Array<{
    item_id: string;
    item_name: string;
    category: string;
    quantity: number;
    price: number;
  }>;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Track GA4 Enhanced Ecommerce Purchase
    window.gtag('event', 'purchase', {
      transaction_id: orderData.orderId,
      value: orderData.value,
      currency: orderData.currency,
      items: orderData.items.map(item => ({
        item_id: item.item_id,
        item_name: item.item_name,
        item_category: item.category,
        quantity: item.quantity,
        price: item.price,
      })),
    });

    // Track Google Ads conversion (you'll need to replace with your actual conversion ID)
    trackConversion('AW-XXXXXXXXX', 'conversion_label_here', orderData.value, orderData.currency);
    
    console.log('Purchase tracked:', orderData);
  }
};

// Track service page views
export const trackServiceView = (serviceName: string, platform: string, price: number) => {
  trackEvent('view_item', {
    currency: 'EUR',
    value: price,
    items: [{
      item_id: serviceName.toLowerCase().replace(/\s+/g, '_'),
      item_name: serviceName,
      item_category: platform,
      price: price,
      quantity: 1,
    }],
  });
};

// Track when user starts order process
export const trackBeginCheckout = (serviceName: string, value: number, currency: string = 'EUR') => {
  trackEvent('begin_checkout', {
    currency: currency,
    value: value,
    items: [{
      item_id: serviceName.toLowerCase().replace(/\s+/g, '_'),
      item_name: serviceName,
      price: value,
      quantity: 1,
    }],
  });
};

// Track add to cart (when user clicks order button)
export const trackAddToCart = (serviceName: string, platform: string, value: number) => {
  trackEvent('add_to_cart', {
    currency: 'EUR',
    value: value,
    items: [{
      item_id: serviceName.toLowerCase().replace(/\s+/g, '_'),
      item_name: serviceName,
      item_category: platform,
      price: value,
      quantity: 1,
    }],
  });
};

// Track leads (form submissions, sign-ups)
export const trackLead = (method: string = 'unknown') => {
  trackEvent('generate_lead', {
    method: method,
    event_category: 'engagement',
  });
};

// Track search events
export const trackSearch = (searchTerm: string) => {
  trackEvent('search', {
    search_term: searchTerm,
    event_category: 'engagement',
  });
};