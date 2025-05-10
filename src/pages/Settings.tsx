
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from '@/components/ui/table';
import { Plus, X, Edit, Check, Upload } from 'lucide-react';

const Settings = () => {
  const [commissionRates, setCommissionRates] = useState({
    food: 5,
    package: 8,
    laundry: 8,
    marketplace: 10,
  });

  const [serviceAreas, setServiceAreas] = useState([
    { id: 1, name: 'Downtown', active: true, dispatchCompany: 'Fast Delivery Co.', minDeliveryTime: '15-20 min' },
    { id: 2, name: 'North Side', active: true, dispatchCompany: 'Express Logistics', minDeliveryTime: '25-30 min' },
    { id: 3, name: 'South District', active: true, dispatchCompany: 'Quick Dash', minDeliveryTime: '20-25 min' },
    { id: 4, name: 'West End', active: false, dispatchCompany: 'City Courier', minDeliveryTime: '30-40 min' },
  ]);

  const [banners, setBanners] = useState([
    { id: 1, title: 'Summer Sale', status: 'active', startDate: '2023-06-01', endDate: '2023-08-31' },
    { id: 2, title: 'New User Promotion', status: 'scheduled', startDate: '2023-07-15', endDate: '2023-08-15' },
    { id: 3, title: 'Flash Deals', status: 'draft', startDate: '', endDate: '' },
  ]);

  const [policies, setPolicies] = useState([
    { id: 1, title: 'Terms of Service', lastUpdated: '2023-05-15' },
    { id: 2, title: 'Privacy Policy', lastUpdated: '2023-05-15' },
    { id: 3, title: 'Refund Policy', lastUpdated: '2023-04-22' },
  ]);

  const handleCommissionChange = (service: keyof typeof commissionRates) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommissionRates({
      ...commissionRates,
      [service]: parseInt(e.target.value) || 0,
    });
  };

  const handleAddServiceArea = () => {
    toast({
      title: "Add Service Area",
      description: "Service area modal would open here",
    });
  };

  const handleEditServiceArea = (id: number) => {
    toast({
      title: "Edit Service Area",
      description: `Editing service area ${id}`,
    });
  };

  const handleToggleServiceArea = (id: number) => {
    setServiceAreas(areas => 
      areas.map(area => 
        area.id === id ? { ...area, active: !area.active } : area
      )
    );
    toast({
      title: "Service Area Updated",
      description: `Service area status updated successfully`,
    });
  };

  const handleAddBanner = () => {
    toast({
      title: "Add Banner",
      description: "Banner creation form would open here",
    });
  };

  const handleEditBanner = (id: number) => {
    toast({
      title: "Edit Banner",
      description: `Editing banner ${id}`,
    });
  };

  const handleEditPolicy = (id: number) => {
    toast({
      title: "Edit Policy",
      description: `Editing policy ${id}`,
    });
  };

  return (
    <Layout title="Platform Settings">
      <Tabs defaultValue="commissions" className="w-full">
        <TabsList className="mb-6 grid grid-cols-4 w-[600px]">
          <TabsTrigger value="commissions">Commission Rates</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="areas">Service Areas</TabsTrigger>
          <TabsTrigger value="content">Content Management</TabsTrigger>
        </TabsList>
        
        <TabsContent value="commissions">
          <Card>
            <CardHeader>
              <CardTitle>Commission Rates</CardTitle>
              <CardDescription>
                Configure platform commission percentages for each service type
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="food-commission">Food Delivery Commission (%)</Label>
                    <Input
                      id="food-commission"
                      type="number"
                      min="0"
                      max="100"
                      value={commissionRates.food}
                      onChange={handleCommissionChange('food')}
                    />
                    <p className="text-sm text-muted-foreground">
                      Current rate: {commissionRates.food}%
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="package-commission">Package Delivery Commission (%)</Label>
                    <Input
                      id="package-commission"
                      type="number"
                      min="0"
                      max="100"
                      value={commissionRates.package}
                      onChange={handleCommissionChange('package')}
                    />
                    <p className="text-sm text-muted-foreground">
                      Current rate: {commissionRates.package}%
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="laundry-commission">Laundry Service Commission (%)</Label>
                    <Input
                      id="laundry-commission"
                      type="number"
                      min="0"
                      max="100"
                      value={commissionRates.laundry}
                      onChange={handleCommissionChange('laundry')}
                    />
                    <p className="text-sm text-muted-foreground">
                      Current rate: {commissionRates.laundry}%
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="marketplace-commission">Marketplace Commission (%)</Label>
                    <Input
                      id="marketplace-commission"
                      type="number"
                      min="0"
                      max="100"
                      value={commissionRates.marketplace}
                      onChange={handleCommissionChange('marketplace')}
                    />
                    <p className="text-sm text-muted-foreground">
                      Current rate: {commissionRates.marketplace}%
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Special Rates</Label>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">Promotional Offers</CardTitle>
                    <CardDescription>Configure special commission rates for promotions</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="new-vendor-promo">New Vendor (3% for first month)</Label>
                        <Switch id="new-vendor-promo" />
                      </div>
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="holiday-promo">Holiday Special (2% off)</Label>
                        <Switch id="holiday-promo" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure automated notifications and announcement templates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="order-confirmation">Order Confirmation</Label>
                    <Switch id="order-confirmation" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="payment-receipt">Payment Receipt</Label>
                    <Switch id="payment-receipt" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="dispute-notification">Dispute Notification</Label>
                    <Switch id="dispute-notification" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="account-suspension">Account Suspension</Label>
                    <Switch id="account-suspension" defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">SMS Notifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="sms-order-status">Order Status Updates</Label>
                    <Switch id="sms-order-status" />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="sms-delivery">Delivery Alerts</Label>
                    <Switch id="sms-delivery" defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="announcement-template">Announcement Template</Label>
                <Input
                  id="announcement-template"
                  placeholder="Enter announcement subject"
                  className="mb-2"
                />
                <textarea
                  placeholder="Enter announcement message body"
                  className="w-full min-h-[150px] p-2 border rounded-md"
                ></textarea>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="areas">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Service Areas</CardTitle>
                <CardDescription>
                  Define operational regions and assign dispatch companies
                </CardDescription>
              </div>
              <Button onClick={handleAddServiceArea}>
                <Plus className="mr-2 h-4 w-4" /> Add Service Area
              </Button>
            </CardHeader>
            <CardContent>
              <Table className="compact-table">
                <TableHeader>
                  <TableRow>
                    <TableHead>Area Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Dispatch Company</TableHead>
                    <TableHead>Min. Delivery Time</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {serviceAreas.map((area) => (
                    <TableRow key={area.id}>
                      <TableCell className="font-medium">{area.name}</TableCell>
                      <TableCell>
                        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          area.active 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                        }`}>
                          {area.active ? 'Active' : 'Inactive'}
                        </div>
                      </TableCell>
                      <TableCell>{area.dispatchCompany}</TableCell>
                      <TableCell>{area.minDeliveryTime}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={() => handleToggleServiceArea(area.id)} 
                            title={area.active ? 'Deactivate' : 'Activate'}
                          >
                            {area.active ? <X className="h-4 w-4" /> : <Check className="h-4 w-4" />}
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={() => handleEditServiceArea(area.id)}
                            title="Edit"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="content">
          <div className="grid gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Banner Management</CardTitle>
                  <CardDescription>
                    Manage promotional banners and advertisements
                  </CardDescription>
                </div>
                <Button onClick={handleAddBanner}>
                  <Plus className="mr-2 h-4 w-4" /> Add Banner
                </Button>
              </CardHeader>
              <CardContent>
                <Table className="compact-table">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Banner Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {banners.map((banner) => (
                      <TableRow key={banner.id}>
                        <TableCell className="font-medium">{banner.title}</TableCell>
                        <TableCell>
                          <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            banner.status === 'active' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                              : banner.status === 'scheduled'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                          }`}>
                            {banner.status.charAt(0).toUpperCase() + banner.status.slice(1)}
                          </div>
                        </TableCell>
                        <TableCell>{banner.startDate || 'N/A'}</TableCell>
                        <TableCell>{banner.endDate || 'N/A'}</TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleEditBanner(banner.id)}
                            className="h-8"
                          >
                            <Edit className="h-3.5 w-3.5 mr-1" /> Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Policy Management</CardTitle>
                <CardDescription>
                  Update platform policies and legal documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table className="compact-table">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Policy</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {policies.map((policy) => (
                      <TableRow key={policy.id}>
                        <TableCell className="font-medium">{policy.title}</TableCell>
                        <TableCell>{policy.lastUpdated}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => handleEditPolicy(policy.id)}
                              className="h-8"
                            >
                              <Edit className="h-3.5 w-3.5 mr-1" /> Edit
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="text-sm text-muted-foreground">All policies should be reviewed by legal before publishing</p>
                <Button variant="outline" className="flex items-center gap-2">
                  <Upload className="h-4 w-4" /> Upload New Policy
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Settings;
