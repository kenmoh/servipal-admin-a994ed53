
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

const Settings = () => {
  const [commissionRates, setCommissionRates] = useState({
    food: 5,
    package: 8,
    laundry: 8,
    marketplace: 10,
  });

  const handleCommissionChange = (service: keyof typeof commissionRates) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommissionRates({
      ...commissionRates,
      [service]: parseInt(e.target.value) || 0,
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
                    <p className="text-sm text-gray-500">
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
                    <p className="text-sm text-gray-500">
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
                    <p className="text-sm text-gray-500">
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
                    <p className="text-sm text-gray-500">
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
            <CardHeader>
              <CardTitle>Service Areas</CardTitle>
              <CardDescription>
                Define operational regions and assign dispatch companies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-6 text-gray-500">
                Service areas management interface will be implemented here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Content Management</CardTitle>
              <CardDescription>
                Manage app content, banners, and policies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-6 text-gray-500">
                Content management interface will be implemented here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Settings;
