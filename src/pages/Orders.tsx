
import Layout from '@/components/layout/Layout';
import OrdersTable from '@/components/orders/OrdersTable';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Filter, Download } from 'lucide-react';

const Orders = () => {
  // Mock orders data
  const orders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      vendor: 'Pizza Place',
      type: 'food',
      amount: '$24.99',
      status: 'completed',
      date: '2023-06-15',
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      vendor: 'Burger Joint',
      type: 'food',
      amount: '$18.50',
      status: 'in_progress',
      date: '2023-06-15',
    },
    {
      id: 'ORD-003',
      customer: 'Mike Wilson',
      vendor: 'Fast Couriers',
      type: 'package',
      amount: '$12.99',
      status: 'in_progress',
      date: '2023-06-14',
    },
    {
      id: 'ORD-004',
      customer: 'Sarah Johnson',
      vendor: 'Clean Laundry',
      type: 'laundry',
      amount: '$35.00',
      status: 'pending',
      date: '2023-06-14',
    },
    {
      id: 'ORD-005',
      customer: 'Robert Brown',
      vendor: 'Sarah Johnson',
      type: 'marketplace',
      amount: '$199.99',
      status: 'pending',
      date: '2023-06-14',
    },
    {
      id: 'ORD-006',
      customer: 'Emily Davis',
      vendor: 'Sushi Spot',
      type: 'food',
      amount: '$32.75',
      status: 'cancelled',
      date: '2023-06-13',
    },
    {
      id: 'ORD-007',
      customer: 'James Wilson',
      vendor: 'Express Delivery',
      type: 'package',
      amount: '$15.25',
      status: 'completed',
      date: '2023-06-13',
    },
  ] as const;

  return (
    <Layout title="Orders & Delivery">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Orders</CardTitle>
            <CardDescription>
              Manage food orders, package deliveries, laundry services, and marketplace transactions.
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              Filter
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download size={16} />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="food">Food</TabsTrigger>
              <TabsTrigger value="package">Package</TabsTrigger>
              <TabsTrigger value="laundry">Laundry</TabsTrigger>
              <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <OrdersTable orders={orders} />
            </TabsContent>
            <TabsContent value="food">
              <OrdersTable
                orders={orders.filter((order) => order.type === 'food')}
              />
            </TabsContent>
            <TabsContent value="package">
              <OrdersTable
                orders={orders.filter((order) => order.type === 'package')}
              />
            </TabsContent>
            <TabsContent value="laundry">
              <OrdersTable
                orders={orders.filter((order) => order.type === 'laundry')}
              />
            </TabsContent>
            <TabsContent value="marketplace">
              <OrdersTable
                orders={orders.filter((order) => order.type === 'marketplace')}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Orders;
