
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Eye, Filter, Download } from 'lucide-react';
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

interface Dispute {
  id: string;
  orderId: string;
  customer: string;
  vendor: string;
  reason: string;
  status: 'open' | 'in_progress' | 'resolved' | 'rejected';
  dateFiled: string;
}

const Disputes = () => {
  const [selectedDispute, setSelectedDispute] = useState<Dispute | null>(null);
  const [openSheet, setOpenSheet] = useState(false);
  
  // Mock disputes data
  const disputes: Dispute[] = [
    {
      id: 'DSP-001',
      orderId: 'ORD-006',
      customer: 'Emily Davis',
      vendor: 'Sushi Spot',
      reason: 'Order was cold on arrival',
      status: 'open',
      dateFiled: '2023-06-13',
    },
    {
      id: 'DSP-002',
      orderId: 'ORD-003',
      customer: 'Mike Wilson',
      vendor: 'Fast Couriers',
      reason: 'Package damaged during delivery',
      status: 'in_progress',
      dateFiled: '2023-06-14',
    },
    {
      id: 'DSP-003',
      orderId: 'ORD-005',
      customer: 'Robert Brown',
      vendor: 'Sarah Johnson',
      reason: 'Item not as described',
      status: 'resolved',
      dateFiled: '2023-06-10',
    },
    {
      id: 'DSP-004',
      orderId: 'ORD-002',
      customer: 'Jane Smith',
      vendor: 'Burger Joint',
      reason: 'Missing items in order',
      status: 'rejected',
      dateFiled: '2023-06-09',
    },
  ];

  const viewDisputeDetails = (dispute: Dispute) => {
    setSelectedDispute(dispute);
    setOpenSheet(true);
  };

  return (
    <Layout title="Dispute Resolution">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Disputes</CardTitle>
            <CardDescription>
              Manage and resolve disputes between customers, vendors, and delivery services
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dispute ID</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Vendor/Seller</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Filed</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {disputes.map((dispute) => (
                <TableRow key={dispute.id}>
                  <TableCell className="font-medium">{dispute.id}</TableCell>
                  <TableCell>{dispute.orderId}</TableCell>
                  <TableCell>{dispute.customer}</TableCell>
                  <TableCell>{dispute.vendor}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{dispute.reason}</TableCell>
                  <TableCell>
                    <StatusBadge status={dispute.status} />
                  </TableCell>
                  <TableCell>{dispute.dateFiled}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => viewDisputeDetails(dispute)}
                    >
                      <Eye size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Dispute Details</SheetTitle>
            <SheetDescription>
              {selectedDispute?.id} - Filed on {selectedDispute?.dateFiled}
            </SheetDescription>
          </SheetHeader>
          
          {selectedDispute && (
            <div className="mt-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Basic Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Order ID</p>
                    <p className="text-sm text-gray-500">{selectedDispute.orderId}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Status</p>
                    <StatusBadge status={selectedDispute.status} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Customer</p>
                    <p className="text-sm text-gray-500">{selectedDispute.customer}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Vendor/Seller</p>
                    <p className="text-sm text-gray-500">{selectedDispute.vendor}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Dispute Details</h3>
                <div className="rounded-md border border-gray-200 p-4">
                  <p className="text-sm">{selectedDispute.reason}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Resolution Actions</h3>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="justify-start">
                    <span>Contact Customer</span>
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <span>Contact Vendor</span>
                  </Button>
                  {selectedDispute.status === 'open' || selectedDispute.status === 'in_progress' ? (
                    <>
                      <Button variant="default" className="justify-start">
                        <span>Mark as Resolved</span>
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <span>Reject Dispute</span>
                      </Button>
                      <Button variant="destructive" className="justify-start">
                        <span>Issue Refund</span>
                      </Button>
                    </>
                  ) : null}
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

export default Disputes;
