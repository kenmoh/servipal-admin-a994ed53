
import Layout from '@/components/layout/Layout';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useState } from 'react';
import Policies from './Settings/Policies';
import Banners from './Settings/Banners';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  return (
    <Layout title="Platform Settings">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Platform Settings</h2>
        <p className="text-muted-foreground">
          Configure system-wide settings, integrations, and platform policies
        </p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6 mb-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="users">User Settings</TabsTrigger>
          <TabsTrigger value="commission">Commission</TabsTrigger>
          <TabsTrigger value="service">Service Areas</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <div className="grid gap-6 grid-cols-1">
            <Policies />
          </div>
        </TabsContent>
        
        <TabsContent value="users">
          <div className="flex items-center justify-center h-64 bg-muted/30 rounded-lg border border-dashed">
            <p className="text-muted-foreground">User settings configuration panel</p>
          </div>
        </TabsContent>
        
        <TabsContent value="commission">
          <div className="flex items-center justify-center h-64 bg-muted/30 rounded-lg border border-dashed">
            <p className="text-muted-foreground">Commission rate management panel</p>
          </div>
        </TabsContent>
        
        <TabsContent value="service">
          <div className="space-y-6">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              <div className="bg-white dark:bg-gray-800 rounded-md border shadow-sm p-6">
                <h3 className="text-lg font-medium mb-4">Service Area Coverage</h3>
                <div className="aspect-video bg-gray-100 dark:bg-gray-900 rounded-md mb-4 flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">Interactive Map (Coming Soon)</p>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Configure operational areas and delivery zones</p>
                <div className="flex justify-end">
                  <button className="text-primary hover:underline text-sm">Manage Coverage</button>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-md border shadow-sm p-6">
                <h3 className="text-lg font-medium mb-4">Delivery Pricing</h3>
                <p className="text-sm mb-4">Configure pricing based on zones and distances</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm">Zone 1 (0-5 km)</span>
                    <span className="font-medium">$3.99</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm">Zone 2 (5-10 km)</span>
                    <span className="font-medium">$5.99</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm">Zone 3 (10-15 km)</span>
                    <span className="font-medium">$7.99</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-sm">Zone 4 (15+ km)</span>
                    <span className="font-medium">$9.99 + $0.50/km</span>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="text-primary hover:underline text-sm">Edit Pricing</button>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-md border shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">Operating Hours</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-3 border rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday</span>
                    <span className="text-sm bg-green-100 dark:bg-green-900 px-2 py-0.5 rounded text-green-800 dark:text-green-200">Active</span>
                  </div>
                  <p className="mt-2 text-sm">08:00 AM - 10:00 PM</p>
                </div>
                <div className="p-3 border rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Tuesday</span>
                    <span className="text-sm bg-green-100 dark:bg-green-900 px-2 py-0.5 rounded text-green-800 dark:text-green-200">Active</span>
                  </div>
                  <p className="mt-2 text-sm">08:00 AM - 10:00 PM</p>
                </div>
                <div className="p-3 border rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Wednesday</span>
                    <span className="text-sm bg-green-100 dark:bg-green-900 px-2 py-0.5 rounded text-green-800 dark:text-green-200">Active</span>
                  </div>
                  <p className="mt-2 text-sm">08:00 AM - 10:00 PM</p>
                </div>
                <div className="p-3 border rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Thursday</span>
                    <span className="text-sm bg-green-100 dark:bg-green-900 px-2 py-0.5 rounded text-green-800 dark:text-green-200">Active</span>
                  </div>
                  <p className="mt-2 text-sm">08:00 AM - 10:00 PM</p>
                </div>
                <div className="p-3 border rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Friday</span>
                    <span className="text-sm bg-green-100 dark:bg-green-900 px-2 py-0.5 rounded text-green-800 dark:text-green-200">Active</span>
                  </div>
                  <p className="mt-2 text-sm">08:00 AM - 11:00 PM</p>
                </div>
                <div className="p-3 border rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Saturday</span>
                    <span className="text-sm bg-green-100 dark:bg-green-900 px-2 py-0.5 rounded text-green-800 dark:text-green-200">Active</span>
                  </div>
                  <p className="mt-2 text-sm">09:00 AM - 11:00 PM</p>
                </div>
                <div className="p-3 border rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span className="text-sm bg-green-100 dark:bg-green-900 px-2 py-0.5 rounded text-green-800 dark:text-green-200">Active</span>
                  </div>
                  <p className="mt-2 text-sm">10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="content">
          <div className="space-y-6">
            <Banners />
            
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              <div className="bg-white dark:bg-gray-800 rounded-md border shadow-sm p-6">
                <h3 className="text-lg font-medium mb-4">Featured Categories</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-md mr-3"></div>
                      <span>Food Delivery</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Priority: 1</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-md mr-3"></div>
                      <span>Groceries</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Priority: 2</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-md mr-3"></div>
                      <span>Electronics</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Priority: 3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-md mr-3"></div>
                      <span>Fashion</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Priority: 4</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-md border shadow-sm p-6">
                <h3 className="text-lg font-medium mb-4">Homepage Sections</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b">
                    <span>Hero Banner</span>
                    <div className="flex items-center">
                      <span className="text-sm text-green-600 dark:text-green-400 mr-3">Active</span>
                      <span className="text-sm text-muted-foreground">Order: 1</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b">
                    <span>Featured Categories</span>
                    <div className="flex items-center">
                      <span className="text-sm text-green-600 dark:text-green-400 mr-3">Active</span>
                      <span className="text-sm text-muted-foreground">Order: 2</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b">
                    <span>Popular Items</span>
                    <div className="flex items-center">
                      <span className="text-sm text-green-600 dark:text-green-400 mr-3">Active</span>
                      <span className="text-sm text-muted-foreground">Order: 3</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Promotional Deals</span>
                    <div className="flex items-center">
                      <span className="text-sm text-green-600 dark:text-green-400 mr-3">Active</span>
                      <span className="text-sm text-muted-foreground">Order: 4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="security">
          <div className="flex items-center justify-center h-64 bg-muted/30 rounded-lg border border-dashed">
            <p className="text-muted-foreground">Security settings configuration panel</p>
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Settings;
