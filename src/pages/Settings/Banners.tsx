
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import BannerForm from '@/components/settings/BannerForm';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import StatusBadge from '@/components/common/StatusBadge';
import { Edit, Plus, Trash } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Banner {
  id: string;
  title: string;
  content: string;
  type: 'info' | 'warning' | 'success' | 'error';
  location: 'home' | 'wallet' | 'marketplace' | 'all';
  isActive: boolean;
  startDate: string;
  endDate: string;
}

const Banners = () => {
  const [addBannerOpen, setAddBannerOpen] = useState(false);
  const [editBannerOpen, setEditBannerOpen] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null);
  
  // Mock banners data
  const [banners, setBanners] = useState<Banner[]>([
    {
      id: 'BNR-001',
      title: 'Platform Maintenance',
      content: 'Scheduled maintenance on May 15, 2025. The platform will be unavailable from 2 AM to 4 AM GMT.',
      type: 'warning',
      location: 'all',
      isActive: true,
      startDate: '2025-05-10',
      endDate: '2025-05-16',
    },
    {
      id: 'BNR-002',
      title: 'New Payment Method',
      content: 'We now support PayPal for all transactions. Try it out today!',
      type: 'info',
      location: 'wallet',
      isActive: true,
      startDate: '2025-05-01',
      endDate: '2025-06-01',
    },
    {
      id: 'BNR-003',
      title: 'Special Promotion',
      content: 'Get 10% off marketplace purchases this weekend!',
      type: 'success',
      location: 'marketplace',
      isActive: false,
      startDate: '2025-05-20',
      endDate: '2025-05-22',
    },
  ]);

  const handleEditBanner = (banner: Banner) => {
    setSelectedBanner(banner);
    setEditBannerOpen(true);
  };

  const handleDeleteBanner = (bannerId: string) => {
    toast({
      title: "Banner deleted",
      description: "The banner has been deleted successfully",
    });
    
    // Here we would delete the banner from the database
    // For the mock, we'll just remove it from our state
    setBanners(banners.filter(banner => banner.id !== bannerId));
  };

  const getBadgeVariantForBannerType = (type: string) => {
    switch(type) {
      case 'info': return 'pending';
      case 'warning': return 'warning';
      case 'success': return 'success';
      case 'error': return 'error';
      default: return 'pending';
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Banner Management</CardTitle>
          <CardDescription>
            Create and manage announcement banners displayed across the platform
          </CardDescription>
        </div>
        <Button 
          className="flex items-center gap-2"
          onClick={() => setAddBannerOpen(true)}
        >
          <Plus size={16} />
          Add Banner
        </Button>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Banner</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {banners.map((banner) => (
                <TableRow key={banner.id} className="hover:bg-muted/40">
                  <TableCell>
                    <div>
                      <p className="font-medium">{banner.title}</p>
                      <p className="text-sm text-muted-foreground truncate max-w-[300px]">
                        {banner.content}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={getBadgeVariantForBannerType(banner.type)} />
                  </TableCell>
                  <TableCell className="capitalize">
                    {banner.location === 'all' ? 'All Pages' : banner.location}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={banner.isActive ? 'success' : 'error'}>
                      {banner.isActive ? 'Active' : 'Inactive'}
                    </StatusBadge>
                  </TableCell>
                  <TableCell>
                    <span className="whitespace-nowrap">{banner.startDate}</span>
                    <span className="mx-1">to</span>
                    <span className="whitespace-nowrap">{banner.endDate}</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditBanner(banner)}
                      >
                        <Edit size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteBanner(banner.id)}
                      >
                        <Trash size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {banners.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6">
                    <p className="text-muted-foreground">No banners found</p>
                    <Button
                      variant="link"
                      onClick={() => setAddBannerOpen(true)}
                      className="mt-2"
                    >
                      Add your first banner
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      {/* Add Banner Dialog */}
      <Dialog open={addBannerOpen} onOpenChange={setAddBannerOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Add New Banner</DialogTitle>
            <DialogDescription>
              Create a new announcement banner to display on the platform
            </DialogDescription>
          </DialogHeader>
          <BannerForm onSuccess={() => setAddBannerOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* Edit Banner Dialog */}
      <Dialog open={editBannerOpen} onOpenChange={setEditBannerOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Edit Banner</DialogTitle>
            <DialogDescription>
              Modify the selected banner
            </DialogDescription>
          </DialogHeader>
          {selectedBanner && (
            <BannerForm 
              defaultValues={{
                title: selectedBanner.title,
                content: selectedBanner.content,
                type: selectedBanner.type,
                location: selectedBanner.location,
                isActive: selectedBanner.isActive,
                startDate: selectedBanner.startDate,
                endDate: selectedBanner.endDate,
              }}
              onSuccess={() => setEditBannerOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default Banners;
