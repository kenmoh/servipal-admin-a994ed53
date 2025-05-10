
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

interface MarketplaceItem {
  id: string;
  seller: string;
  name: string;
  price: string;
  category: string;
  status: 'active' | 'pending' | 'sold' | 'removed';
  dateListed: string;
}

const Marketplace = () => {
  const [selectedItem, setSelectedItem] = useState<MarketplaceItem | null>(null);
  const [openSheet, setOpenSheet] = useState(false);
  
  // Mock marketplace items data
  const items: MarketplaceItem[] = [
    {
      id: 'ITM-001',
      seller: 'Sarah Johnson',
      name: 'Vintage Camera',
      price: '$199.99',
      category: 'Electronics',
      status: 'active',
      dateListed: '2023-06-10',
    },
    {
      id: 'ITM-002',
      seller: 'Mike Wilson',
      name: 'Leather Jacket',
      price: '$89.50',
      category: 'Fashion',
      status: 'sold',
      dateListed: '2023-06-08',
    },
    {
      id: 'ITM-003',
      seller: 'John Doe',
      name: 'Gaming Console',
      price: '$299.99',
      category: 'Electronics',
      status: 'active',
      dateListed: '2023-06-12',
    },
    {
      id: 'ITM-004',
      seller: 'Jane Smith',
      name: 'Antique Desk',
      price: '$450.00',
      category: 'Furniture',
      status: 'pending',
      dateListed: '2023-06-14',
    },
    {
      id: 'ITM-005',
      seller: 'Emily Davis',
      name: 'Bicycle',
      price: '$120.00',
      category: 'Sports',
      status: 'removed',
      dateListed: '2023-06-05',
    },
  ];

  const viewItemDetails = (item: MarketplaceItem) => {
    setSelectedItem(item);
    setOpenSheet(true);
  };

  return (
    <Layout title="Marketplace">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Marketplace Listings</CardTitle>
            <CardDescription>
              Manage P2P marketplace listings, approvals, and transactions
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
                <TableHead>Item ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Seller</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Listed</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.seller}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    <StatusBadge status={item.status} />
                  </TableCell>
                  <TableCell>{item.dateListed}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => viewItemDetails(item)}
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
            <SheetTitle>Item Details</SheetTitle>
            <SheetDescription>
              {selectedItem?.id} - Listed on {selectedItem?.dateListed}
            </SheetDescription>
          </SheetHeader>
          
          {selectedItem && (
            <div className="mt-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Basic Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Item Name</p>
                    <p className="text-sm text-gray-500">{selectedItem.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Price</p>
                    <p className="text-sm text-gray-500">{selectedItem.price}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Category</p>
                    <p className="text-sm text-gray-500">{selectedItem.category}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Status</p>
                    <StatusBadge status={selectedItem.status} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Seller</p>
                    <p className="text-sm text-gray-500">{selectedItem.seller}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Listed Date</p>
                    <p className="text-sm text-gray-500">{selectedItem.dateListed}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Actions</h3>
                <div className="flex flex-col gap-2">
                  {selectedItem.status === 'pending' && (
                    <>
                      <Button variant="default" className="justify-start">
                        <span>Approve Listing</span>
                      </Button>
                      <Button variant="destructive" className="justify-start">
                        <span>Reject Listing</span>
                      </Button>
                    </>
                  )}
                  
                  {selectedItem.status === 'active' && (
                    <Button variant="destructive" className="justify-start">
                      <span>Remove Listing</span>
                    </Button>
                  )}
                  
                  <Button variant="outline" className="justify-start">
                    <span>Contact Seller</span>
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

export default Marketplace;
