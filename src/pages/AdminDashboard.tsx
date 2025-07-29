import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw } from "lucide-react";

interface Order {
  id: string;
  user_id: string;
  service_type: string;
  platform: string;
  quantity: number;
  target_url: string;
  price_cents: number;
  status: string;
  stripe_payment_intent_id: string | null;
  order_notes: string | null;
  created_at: string;
  updated_at: string;
  profiles?: {
    full_name: string | null;
  } | null;
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (!user) {
        setLoading(false);
        return;
      }

      // Check if user has admin role
      const { data: roles, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'admin');

      if (error) throw error;

      const adminAccess = roles && roles.length > 0;
      setIsAdmin(adminAccess);

      if (adminAccess) {
        fetchOrders();
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error checking admin access:', error);
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          profiles (
            full_name
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders((data as any) || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast({
        title: "Fout bij ophalen bestellingen",
        description: "Kon bestellingen niet laden.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    setUpdating(orderId);
    try {
      const { error } = await supabase
        .from('orders')
        .update({ status: newStatus })
        .eq('id', orderId);

      if (error) throw error;

      // Update local state
      setOrders(prev => prev.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      ));

      toast({
        title: "Status bijgewerkt",
        description: `Bestelling status gewijzigd naar ${newStatus}`,
      });
    } catch (error) {
      console.error('Error updating order status:', error);
      toast({
        title: "Fout bij bijwerken",
        description: "Kon status niet bijwerken.",
        variant: "destructive",
      });
    } finally {
      setUpdating(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'processing': return 'bg-blue-500';
      case 'completed': return 'bg-green-500';
      case 'failed': return 'bg-red-500';
      case 'cancelled': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const formatPrice = (cents: number) => {
    return `€${(cents / 100).toFixed(2)}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Toegang controleren...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Inloggen vereist</CardTitle>
            <CardDescription>
              Je moet ingelogd zijn om de admin dashboard te bekijken.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link to="/">Terug naar home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Geen toegang</CardTitle>
            <CardDescription>
              Je hebt geen admin rechten om deze pagina te bekijken.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link to="/">Terug naar home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Terug
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Beheer alle bestellingen</p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={fetchOrders}
            className="ml-auto"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Vernieuwen
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Alle Bestellingen ({orders.length})</CardTitle>
            <CardDescription>
              Overzicht van alle bestellingen met de mogelijkheid om statussen bij te werken
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Bestelling ID</TableHead>
                    <TableHead>Klant</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Platform</TableHead>
                    <TableHead>Hoeveelheid</TableHead>
                    <TableHead>Prijs</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Datum</TableHead>
                    <TableHead>Acties</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-mono text-xs">
                        {order.id.slice(0, 8)}...
                      </TableCell>
                      <TableCell>
                        {order.profiles?.full_name || 'Onbekend'}
                      </TableCell>
                      <TableCell>{order.service_type}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{order.platform}</Badge>
                      </TableCell>
                      <TableCell>{order.quantity.toLocaleString()}</TableCell>
                      <TableCell className="font-medium">
                        {formatPrice(order.price_cents)}
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">
                        {formatDate(order.created_at)}
                      </TableCell>
                      <TableCell>
                        <Select
                          value={order.status}
                          onValueChange={(value) => updateOrderStatus(order.id, value)}
                          disabled={updating === order.id}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="processing">Processing</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="failed">Failed</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              {orders.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  Nog geen bestellingen gevonden.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}