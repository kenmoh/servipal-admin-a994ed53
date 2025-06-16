
import { useState } from 'react';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { MapPin, Plus, Edit, Trash2 } from 'lucide-react';
import StatusBadge from '@/components/common/StatusBadge';

const ServiceAreas = () => {
  const [areas, setAreas] = useState([
    {
      id: 'SA-001',
      name: 'Downtown Core',
      radius: '5 km',
      baseFee: '$2.99',
      deliveryRate: '$0.50/km',
      status: 'active',
      zones: 15,
      avgDeliveryTime: '25 min'
    },
    {
      id: 'SA-002',
      name: 'University District',
      radius: '3 km',
      baseFee: '$1.99',
      deliveryRate: '$0.40/km',
      status: 'active',
      zones: 8,
      avgDeliveryTime: '20 min'
    },
    {
      id: 'SA-003',
      name: 'Suburban Area',
      radius: '8 km',
      baseFee: '$3.99',
      deliveryRate: '$0.60/km',
      status: 'active',
      zones: 22,
      avgDeliveryTime: '35 min'
    },
    {
      id: 'SA-004',
      name: 'Business District',
      radius: '4 km',
      baseFee: '$2.49',
      deliveryRate: '$0.45/km',
      status: 'inactive',
      zones: 12,
      avgDeliveryTime: '28 min'
    },
  ]);

  const [selectedArea, setSelectedArea] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAddArea = () => {
    setSelectedArea(null);
    setDialogOpen(true);
  };

  const handleEditArea = (area) => {
    setSelectedArea(area);
    setDialogOpen(true);
  };

  const getStatusVariant = (status) => {
    return status === 'active' ? 'success' : 'error';
  };

  return (
    <Layout title="Service Area Management">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Service Areas</h1>
            <p className="text-muted-foreground">Manage delivery zones and pricing by location</p>
          </div>
          <Button onClick={handleAddArea} className="flex items-center gap-2">
            <Plus size={16} />
            Add Service Area
          </Button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Areas</CardDescription>
              <CardTitle className="text-2xl">4</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Active Areas</CardDescription>
              <CardTitle className="text-2xl">3</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Zones</CardDescription>
              <CardTitle className="text-2xl">57</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Avg Delivery Time</CardDescription>
              <CardTitle className="text-2xl">27 min</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Service Areas Table */}
        <Card>
          <CardHeader>
            <CardTitle>Service Areas</CardTitle>
            <CardDescription>Manage delivery coverage and pricing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Area Name</TableHead>
                    <TableHead>Coverage</TableHead>
                    <TableHead>Base Fee</TableHead>
                    <TableHead>Delivery Rate</TableHead>
                    <TableHead>Zones</TableHead>
                    <TableHead>Avg Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {areas.map((area) => (
                    <TableRow key={area.id}>
                      <TableCell className="font-medium">{area.name}</TableCell>
                      <TableCell>{area.radius}</TableCell>
                      <TableCell>{area.baseFee}</TableCell>
                      <TableCell>{area.deliveryRate}</TableCell>
                      <TableCell>{area.zones}</TableCell>
                      <TableCell>{area.avgDeliveryTime}</TableCell>
                      <TableCell>
                        <StatusBadge status={getStatusVariant(area.status)} />
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditArea(area)}
                          >
                            <Edit size={16} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Add/Edit Area Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>
                {selectedArea ? 'Edit Service Area' : 'Add New Service Area'}
              </DialogTitle>
              <DialogDescription>
                Configure delivery zone coverage and pricing
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Area Name</Label>
                <Input id="name" defaultValue={selectedArea?.name} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="radius" className="text-right">Coverage Radius</Label>
                <Input id="radius" defaultValue={selectedArea?.radius} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="baseFee" className="text-right">Base Fee</Label>
                <Input id="baseFee" defaultValue={selectedArea?.baseFee} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="deliveryRate" className="text-right">Delivery Rate</Label>
                <Input id="deliveryRate" defaultValue={selectedArea?.deliveryRate} className="col-span-3" />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button>Save Changes</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default ServiceAreas;
