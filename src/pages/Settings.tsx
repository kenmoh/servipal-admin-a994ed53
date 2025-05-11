
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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Shield, Key, UserCog } from 'lucide-react';
import StatusBadge from '@/components/common/StatusBadge';

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
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <UserCog className="h-5 w-5 text-primary" />
                  <CardTitle>User Registration</CardTitle>
                </div>
                <CardDescription>
                  Configure user registration options and verification requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="allow-registration">Allow Open Registration</Label>
                      <p className="text-sm text-muted-foreground">Allow users to register without invitation</p>
                    </div>
                    <Switch id="allow-registration" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-verification">Require Email Verification</Label>
                      <p className="text-sm text-muted-foreground">Users must verify email before accessing platform</p>
                    </div>
                    <Switch id="email-verification" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="phone-verification">Require Phone Verification</Label>
                      <p className="text-sm text-muted-foreground">Users must verify phone number</p>
                    </div>
                    <Switch id="phone-verification" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Allow users to set up two-factor authentication</p>
                    </div>
                    <Switch id="two-factor" defaultChecked />
                  </div>
                  
                  <div>
                    <Label htmlFor="approval-type">New Account Approval</Label>
                    <Select defaultValue="automatic">
                      <SelectTrigger id="approval-type" className="mt-1">
                        <SelectValue placeholder="Select approval process" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="automatic">Automatic Approval</SelectItem>
                        <SelectItem value="manual">Manual Review</SelectItem>
                        <SelectItem value="domain">Domain-Based Approval</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground mt-1">Defines how new registrations are approved</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save Settings</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Account Restrictions</CardTitle>
                <CardDescription>
                  Set platform-wide account policies and restrictions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="password-policy">Password Policy</Label>
                    <Select defaultValue="strong">
                      <SelectTrigger id="password-policy" className="mt-1">
                        <SelectValue placeholder="Select password policy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                        <SelectItem value="strong">Strong (8+ chars, mixed case, numbers)</SelectItem>
                        <SelectItem value="very-strong">Very Strong (12+ chars, mixed case, numbers, symbols)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                    <Input id="session-timeout" type="number" defaultValue="60" className="mt-1" />
                    <p className="text-xs text-muted-foreground mt-1">Time before inactive users are logged out</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember-me" defaultChecked />
                    <div className="grid gap-1.5">
                      <Label htmlFor="remember-me">Allow Remember Me</Label>
                      <p className="text-sm text-muted-foreground">Enable "Remember Me" option on login</p>
                    </div>
                  </div>
                  
                  <div>
                    <Label>Failed Login Attempts</Label>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <Input type="number" placeholder="Max attempts" defaultValue="5" />
                      <Input type="number" placeholder="Lockout (minutes)" defaultValue="30" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Account lockout after failed login attempts</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save Settings</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="commission">
          <div className="grid gap-6 grid-cols-1">
            <CommissionSettings />
          </div>
        </TabsContent>
        
        <TabsContent value="service">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-md border shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">Service Area Coverage</h3>
              <div className="aspect-video bg-gray-100 dark:bg-gray-900 rounded-md mb-4 flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Interactive Map (Coming Soon)</p>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Configure operational areas and delivery zones</p>
              <div className="flex justify-end">
                <Button variant="outline">Manage Coverage</Button>
              </div>
            </div>
            
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
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
                  <Button variant="outline" size="sm">Edit Pricing</Button>
                </div>
              </div>
              
              <div className="col-span-2 bg-white dark:bg-gray-800 rounded-md border shadow-sm p-6">
                <h3 className="text-lg font-medium mb-4">Operating Hours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-3 border rounded-md">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Monday</span>
                      <StatusBadge status="active" />
                    </div>
                    <p className="mt-2 text-sm">08:00 AM - 10:00 PM</p>
                  </div>
                  <div className="p-3 border rounded-md">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Tuesday</span>
                      <StatusBadge status="active" />
                    </div>
                    <p className="mt-2 text-sm">08:00 AM - 10:00 PM</p>
                  </div>
                  <div className="p-3 border rounded-md">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Wednesday</span>
                      <StatusBadge status="active" />
                    </div>
                    <p className="mt-2 text-sm">08:00 AM - 10:00 PM</p>
                  </div>
                  <div className="p-3 border rounded-md">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Thursday</span>
                      <StatusBadge status="active" />
                    </div>
                    <p className="mt-2 text-sm">08:00 AM - 10:00 PM</p>
                  </div>
                  <div className="p-3 border rounded-md">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Friday</span>
                      <StatusBadge status="active" />
                    </div>
                    <p className="mt-2 text-sm">08:00 AM - 11:00 PM</p>
                  </div>
                  <div className="p-3 border rounded-md">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Saturday</span>
                      <StatusBadge status="active" />
                    </div>
                    <p className="mt-2 text-sm">09:00 AM - 11:00 PM</p>
                  </div>
                  <div className="p-3 border rounded-md">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Sunday</span>
                      <StatusBadge status="active" />
                    </div>
                    <p className="mt-2 text-sm">10:00 AM - 10:00 PM</p>
                  </div>
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
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <CardTitle>Security Controls</CardTitle>
                </div>
                <CardDescription>
                  Configure platform-wide security settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="force-mfa">Force Multi-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Require all admin users to use MFA</p>
                    </div>
                    <Switch id="force-mfa" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="ip-restriction">IP Address Restriction</Label>
                      <p className="text-sm text-muted-foreground">Limit admin access to specific IP ranges</p>
                    </div>
                    <Switch id="ip-restriction" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="suspicious-activity">Suspicious Activity Detection</Label>
                      <p className="text-sm text-muted-foreground">Monitor and alert on suspicious behaviors</p>
                    </div>
                    <Switch id="suspicious-activity" defaultChecked />
                  </div>
                  
                  <div>
                    <Label htmlFor="session-policy">Session Security Policy</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger id="session-policy" className="mt-1">
                        <SelectValue placeholder="Select session security level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Basic (Session timeout only)</SelectItem>
                        <SelectItem value="medium">Medium (IP binding + timeout)</SelectItem>
                        <SelectItem value="high">High (IP + device binding + short timeout)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save Settings</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-primary" />
                  <CardTitle>API Security</CardTitle>
                </div>
                <CardDescription>
                  Manage API keys and access control
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label>API Authentication Method</Label>
                    <div className="grid grid-cols-1 gap-2 mt-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="auth-jwt" defaultChecked />
                        <Label htmlFor="auth-jwt">JWT Authentication</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="auth-oauth" defaultChecked />
                        <Label htmlFor="auth-oauth">OAuth 2.0</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="auth-apikey" />
                        <Label htmlFor="auth-apikey">API Key</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="api-rate-limit">API Rate Limiting (requests per minute)</Label>
                    <Input id="api-rate-limit" type="number" defaultValue="60" className="mt-1" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="cors-enabled">Enable CORS</Label>
                      <p className="text-sm text-muted-foreground">Allow cross-origin requests</p>
                    </div>
                    <Switch id="cors-enabled" defaultChecked />
                  </div>
                  
                  <div>
                    <Label htmlFor="allowed-origins">Allowed Origins</Label>
                    <Input id="allowed-origins" defaultValue="*, localhost:*" className="mt-1" />
                    <p className="text-xs text-muted-foreground mt-1">Comma-separated domains for CORS</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save Settings</Button>
              </CardFooter>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Security Audit Log</CardTitle>
                <CardDescription>
                  Recent security events and system changes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-md">
                    <div className="grid grid-cols-[1fr,auto,auto] gap-4 p-4 items-center text-sm border-b">
                      <div>
                        <div className="font-medium">Security policy updated</div>
                        <div className="text-muted-foreground">Password requirements changed</div>
                      </div>
                      <div className="text-muted-foreground">Admin (admin@example.com)</div>
                      <div className="text-muted-foreground">Today, 10:42 AM</div>
                    </div>
                    <div className="grid grid-cols-[1fr,auto,auto] gap-4 p-4 items-center text-sm border-b">
                      <div>
                        <div className="font-medium">Failed login attempt</div>
                        <div className="text-muted-foreground">5 consecutive failures</div>
                      </div>
                      <div className="text-muted-foreground">user@example.com</div>
                      <div className="text-muted-foreground">Yesterday, 8:17 PM</div>
                    </div>
                    <div className="grid grid-cols-[1fr,auto,auto] gap-4 p-4 items-center text-sm border-b">
                      <div>
                        <div className="font-medium">API key generated</div>
                        <div className="text-muted-foreground">New key for report access</div>
                      </div>
                      <div className="text-muted-foreground">System</div>
                      <div className="text-muted-foreground">May 10, 2025 3:24 PM</div>
                    </div>
                    <div className="grid grid-cols-[1fr,auto,auto] gap-4 p-4 items-center text-sm">
                      <div>
                        <div className="font-medium">Two-factor authentication enabled</div>
                        <div className="text-muted-foreground">Platform-wide requirement</div>
                      </div>
                      <div className="text-muted-foreground">Admin (admin@example.com)</div>
                      <div className="text-muted-foreground">May 8, 2025 11:30 AM</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline">View Full Audit Log</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

// Commission Settings Component
const CommissionSettings = () => {
  const commissionForm = useForm({
    defaultValues: {
      baseRate: 10,
      minimumFee: 2,
      maximumFee: 100,
      volumeDiscount: true,
      newSellerPromotion: false,
      specialCategoryRates: false,
      tieredCommission: true
    }
  });

  const tieredForm = useForm({
    resolver: zodResolver(
      z.object({
        tier1Rate: z.number().min(0).max(100),
        tier1Threshold: z.number().min(0),
        tier2Rate: z.number().min(0).max(100),
        tier2Threshold: z.number().min(0),
        tier3Rate: z.number().min(0).max(100),
      })
    ),
    defaultValues: {
      tier1Rate: 15,
      tier1Threshold: 1000,
      tier2Rate: 10,
      tier2Threshold: 5000,
      tier3Rate: 7.5,
    }
  });

  const specialRatesForm = useForm({
    defaultValues: {
      electronics: 8,
      fashion: 12,
      groceries: 5,
      furniture: 15,
    }
  });

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Base Commission Settings</CardTitle>
          <CardDescription>
            Configure the platform's standard commission rates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...commissionForm}>
            <div className="space-y-4">
              <FormField
                control={commissionForm.control}
                name="baseRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Base Commission Rate (%)</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" max="100" step="0.5" {...field} />
                    </FormControl>
                    <FormDescription>
                      Standard percentage charged on all transactions
                    </FormDescription>
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={commissionForm.control}
                  name="minimumFee"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Minimum Fee ($)</FormLabel>
                      <FormControl>
                        <Input type="number" min="0" step="0.5" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={commissionForm.control}
                  name="maximumFee"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Maximum Fee ($)</FormLabel>
                      <FormControl>
                        <Input type="number" min="0" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="space-y-2">
                <FormField
                  control={commissionForm.control}
                  name="volumeDiscount"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between">
                      <div>
                        <FormLabel>Volume Discount</FormLabel>
                        <FormDescription>
                          Lower rates for sellers with high volume
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch 
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={commissionForm.control}
                  name="tieredCommission"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between">
                      <div>
                        <FormLabel>Tiered Commission Structure</FormLabel>
                        <FormDescription>
                          Use different rates based on sales volume tiers
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch 
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={commissionForm.control}
                  name="newSellerPromotion"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between">
                      <div>
                        <FormLabel>New Seller Promotion</FormLabel>
                        <FormDescription>
                          Reduced rates for new sellers (first 3 months)
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch 
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={commissionForm.control}
                  name="specialCategoryRates"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between">
                      <div>
                        <FormLabel>Category-Specific Rates</FormLabel>
                        <FormDescription>
                          Set different commission rates by product category
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch 
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={() => commissionForm.handleSubmit(() => {})()}>
            Save Commission Settings
          </Button>
        </CardFooter>
      </Card>
      
      <div className="space-y-6">
        {commissionForm.watch("tieredCommission") && (
          <Card>
            <CardHeader>
              <CardTitle>Tiered Commission Structure</CardTitle>
              <CardDescription>
                Configure commission rates based on sales volume tiers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...tieredForm}>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={tieredForm.control}
                      name="tier1Rate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tier 1 Rate (%)</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" max="100" step="0.5" {...field} />
                          </FormControl>
                          <FormDescription>
                            Up to Tier 1 threshold
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={tieredForm.control}
                      name="tier1Threshold"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tier 1 Threshold ($)</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={tieredForm.control}
                      name="tier2Rate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tier 2 Rate (%)</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" max="100" step="0.5" {...field} />
                          </FormControl>
                          <FormDescription>
                            Tier 1 to Tier 2 threshold
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={tieredForm.control}
                      name="tier2Threshold"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tier 2 Threshold ($)</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={tieredForm.control}
                    name="tier3Rate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tier 3 Rate (%)</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" max="100" step="0.5" {...field} />
                        </FormControl>
                        <FormDescription>
                          Above Tier 2 threshold
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                </div>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => tieredForm.handleSubmit(() => {})()}>
                Save Tier Settings
              </Button>
            </CardFooter>
          </Card>
        )}
        
        {commissionForm.watch("specialCategoryRates") && (
          <Card>
            <CardHeader>
              <CardTitle>Category-Specific Rates</CardTitle>
              <CardDescription>
                Set commission rates for specific product categories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...specialRatesForm}>
                <div className="space-y-4">
                  <FormField
                    control={specialRatesForm.control}
                    name="electronics"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Electronics (%)</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" max="100" step="0.5" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={specialRatesForm.control}
                    name="fashion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fashion & Apparel (%)</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" max="100" step="0.5" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={specialRatesForm.control}
                    name="groceries"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Groceries & Food (%)</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" max="100" step="0.5" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={specialRatesForm.control}
                    name="furniture"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Furniture & Home (%)</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" max="100" step="0.5" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => specialRatesForm.handleSubmit(() => {})()}>
                Save Category Rates
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Settings;
