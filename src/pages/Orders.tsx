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
import { Filter, Download, Package, Eye } from 'lucide-react';
import { useState } from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription,
  SheetClose
} from '@/components/ui/sheet';
import StatusBadge from '@/components/common/StatusBadge';

type OrderType = 'food' | 'package' | 'laundry' | 'marketplace';
type OrderStatus = 'pending' | 'in_progress' | 'completed' | 'cancelled';

interface Order {
  id: string;
  customer: string;
  vendor: string;
  type: OrderType;
  amount: string;
  status: OrderStatus;
  date: string;
}

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [openSheet, setOpenSheet] = useState(false);
  
  // Mock orders data
  const orders: Order[] = [
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
  ];

  const viewOrderDetails = (order: Order) => {
    setSelectedOrder(order);
    setOpenSheet(true);
  };

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
              <OrdersTable orders={orders} onViewOrder={viewOrderDetails} />
            </TabsContent>
            <TabsContent value="food">
              <OrdersTable
                orders={orders.filter((order) => order.type === 'food')}
                onViewOrder={viewOrderDetails}
              />
            </TabsContent>
            <TabsContent value="package">
              <OrdersTable
                orders={orders.filter((order) => order.type === 'package')}
                onViewOrder={viewOrderDetails}
              />
            </TabsContent>
            <TabsContent value="laundry">
              <OrdersTable
                orders={orders.filter((order) => order.type === 'laundry')}
                onViewOrder={viewOrderDetails}
              />
            </TabsContent>
            <TabsContent value="marketplace">
              <OrdersTable
                orders={orders.filter((order) => order.type === 'marketplace')}
                onViewOrder={viewOrderDetails}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Order Details</SheetTitle>
            <SheetDescription>
              {selectedOrder?.id} - {selectedOrder?.date}
            </SheetDescription>
          </SheetHeader>
          
          {selectedOrder && (
            <div className="mt-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Order Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Type</p>
                    <p className="text-sm text-gray-500 capitalize">{selectedOrder.type}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Status</p>
                    <StatusBadge status={selectedOrder.status} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Customer</p>
                    <p className="text-sm text-gray-500">{selectedOrder.customer}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Vendor</p>
                    <p className="text-sm text-gray-500">{selectedOrder.vendor}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Amount</p>
                    <p className="text-sm text-gray-500">{selectedOrder.amount}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Date</p>
                    <p className="text-sm text-gray-500">{selectedOrder.date}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Timeline</h3>
                <div className="relative pl-6 border-l border-gray-200 py-2">
                  <div className="mb-4">
                    <div className="absolute -left-2 mt-1.5">
                      <div className="bg-primary rounded-full h-3 w-3"></div>
                    </div>
                    <p className="text-sm font-medium">Order Placed</p>
                    <p className="text-xs text-gray-500">{selectedOrder.date} 10:30 AM</p>
                  </div>
                  
                  {selectedOrder.status !== 'cancelled' && (
                    <>
                      <div className="mb-4">
                        <div className="absolute -left-2 mt-1.5">
                          <div className={`rounded-full h-3 w-3 ${
                            selectedOrder.status !== 'pending' ? 'bg-primary' : 'bg-gray-300'
                          }`}></div>
                        </div>
                        <p className={`text-sm font-medium ${
                          selectedOrder.status === 'pending' ? 'text-gray-400' : ''
                        }`}>
                          {selectedOrder.type === 'food' || selectedOrder.type === 'marketplace' 
                            ? 'Accepted by Vendor' 
                            : 'Processing'
                          }
                        </p>
                        {selectedOrder.status !== 'pending' && (
                          <p className="text-xs text-gray-500">{selectedOrder.date} 10:45 AM</p>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <div className="absolute -left-2 mt-1.5">
                          <div className={`rounded-full h-3 w-3 ${
                            selectedOrder.status === 'completed' || selectedOrder.status === 'in_progress' 
                              ? 'bg-primary' 
                              : 'bg-gray-300'
                          }`}></div>
                        </div>
                        <p className={`text-sm font-medium ${
                          selectedOrder.status === 'pending' ? 'text-gray-400' : ''
                        }`}>
                          {selectedOrder.type === 'food' 
                            ? 'Out for Delivery' 
                            : selectedOrder.type === 'package'
                              ? 'In Transit'
                              : selectedOrder.type === 'laundry'
                                ? 'Processing'
                                : 'Processing Order'
                          }
                        </p>
                        {(selectedOrder.status === 'completed' || selectedOrder.status === 'in_progress') && (
                          <p className="text-xs text-gray-500">{selectedOrder.date} 11:15 AM</p>
                        )}
                      </div>
                      
                      <div>
                        <div className="absolute -left-2 mt-1.5">
                          <div className={`rounded-full h-3 w-3 ${
                            selectedOrder.status === 'completed' 
                              ? 'bg-primary' 
                              : 'bg-gray-300'
                          }`}></div>
                        </div>
                        <p className={`text-sm font-medium ${
                          selectedOrder.status !== 'completed' ? 'text-gray-400' : ''
                        }`}>
                          Completed
                        </p>
                        {selectedOrder.status === 'completed' && (
                          <p className="text-xs text-gray-500">{selectedOrder.date} 11:45 AM</p>
                        )}
                      </div>
                    </>
                  )}
                  
                  {selectedOrder.status === 'cancelled' && (
                    <div>
                      <div className="absolute -left-2 mt-1.5">
                        <div className="bg-destructive rounded-full h-3 w-3"></div>
                      </div>
                      <p className="text-sm font-medium text-destructive">Cancelled</p>
                      <p className="text-xs text-gray-500">{selectedOrder.date} 10:45 AM</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Actions</h3>
                <div className="flex flex-wrap gap-2">
                  {(selectedOrder.status === 'pending' || selectedOrder.status === 'in_progress') && (
                    <Button variant="destructive" size="sm">
                      Cancel Order
                    </Button>
                  )}
                  
                  {selectedOrder.status === 'pending' && (
                    <Button variant="default" size="sm">
                      Assign Rider
                    </Button>
                  )}
                  
                  <Button variant="outline" size="sm">
                    <Package size={16} className="mr-2" />
                    Order Details
                  </Button>
                  
                  <Button variant="outline" size="sm">
                    <Eye size={16} className="mr-2" />
                    View Items
                  </Button>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </Layout>
  );
};

export default Orders;
