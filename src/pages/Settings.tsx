
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Banners from './Settings/Banners';
import Policies from './Settings/Policies';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Form components for additional tabs
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('banners');

  return (
    <Layout title="Platform Settings">
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-foreground">Platform Settings</h2>
        <p className="text-muted-foreground">Manage global platform settings and configurations</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full md:w-auto flex flex-wrap">
          <TabsTrigger value="banners" className="flex-1 md:flex-none">
            Banners <Badge className="ml-2 hidden md:inline-flex" variant="outline">4</Badge>
          </TabsTrigger>
          <TabsTrigger value="policies" className="flex-1 md:flex-none">
            Policies <Badge className="ml-2 hidden md:inline-flex" variant="outline">3</Badge>
          </TabsTrigger>
          <TabsTrigger value="commissions" className="flex-1 md:flex-none">
            Commissions
          </TabsTrigger>
          <TabsTrigger value="security" className="flex-1 md:flex-none">
            Security
          </TabsTrigger>
          <TabsTrigger value="user-settings" className="flex-1 md:flex-none">
            User Settings
          </TabsTrigger>
        </TabsList>

        <div className="mt-4">
          <TabsContent value="banners">
            <Banners />
          </TabsContent>
          
          <TabsContent value="policies">
            <Policies />
          </TabsContent>

          <TabsContent value="commissions">
            <CommissionsTab />
          </TabsContent>

          <TabsContent value="security">
            <SecurityTab />
          </TabsContent>

          <TabsContent value="user-settings">
            <UserSettingsTab />
          </TabsContent>
        </div>
      </Tabs>
    </Layout>
  );
};

// Commission Settings Component
const CommissionsTab = () => {
  const commissionFormSchema = z.object({
    platformFee: z.string().min(1, "Platform fee is required"),
    deliveryCommission: z.string().min(1, "Delivery commission is required"),
    sellerCommission: z.string().min(1, "Seller commission is required"),
    paymentMethod: z.string().min(1, "Payment method is required"),
    taxRate: z.string().min(1, "Tax rate is required"),
    isAutoWithdrawal: z.boolean().default(false),
    withdrawalThreshold: z.string().optional(),
    commissionType: z.enum(["percentage", "fixed"]).default("percentage"),
  });

  const form = useForm<z.infer<typeof commissionFormSchema>>({
    resolver: zodResolver(commissionFormSchema),
    defaultValues: {
      platformFee: "5",
      deliveryCommission: "10",
      sellerCommission: "15",
      paymentMethod: "bank_transfer",
      taxRate: "7.5",
      isAutoWithdrawal: false,
      withdrawalThreshold: "1000",
      commissionType: "percentage",
    },
  });

  function onSubmit(values: z.infer<typeof commissionFormSchema>) {
    toast({
      title: "Commission settings updated",
      description: "Your commission settings have been saved successfully."
    });
    console.log(values);
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-medium">Commission Settings</h3>
          <p className="text-sm text-muted-foreground">Configure platform fees and commission rates</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="commissionType"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Commission Type</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="percentage" id="percentage" />
                            <Label htmlFor="percentage">Percentage based</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="fixed" id="fixed" />
                            <Label htmlFor="fixed">Fixed amount</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="platformFee"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Platform Fee {form.watch("commissionType") === "percentage" ? "(%)": "($)"}</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" min="0" />
                      </FormControl>
                      <FormDescription>
                        Base fee charged on all transactions
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="deliveryCommission"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Delivery Partner Commission {form.watch("commissionType") === "percentage" ? "(%)": "($)"}</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" min="0" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sellerCommission"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seller Commission {form.watch("commissionType") === "percentage" ? "(%)": "($)"}</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" min="0" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="taxRate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tax Rate (%)</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" min="0" step="0.1" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Default Payout Method</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select payout method" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                          <SelectItem value="stripe">Stripe</SelectItem>
                          <SelectItem value="wallet">Platform Wallet</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isAutoWithdrawal"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Automatic Withdrawals</FormLabel>
                        <FormDescription>
                          Enable automatic processing of withdrawal requests
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {form.watch("isAutoWithdrawal") && (
                  <FormField
                    control={form.control}
                    name="withdrawalThreshold"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Withdrawal Threshold ($)</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" min="0" />
                        </FormControl>
                        <FormDescription>
                          Minimum balance required for automatic withdrawal
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>

              <Button type="submit">Save Commission Settings</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

// Security Tab Component
const SecurityTab = () => {
  const securityFormSchema = z.object({
    twoFactorAuth: z.boolean().default(false),
    loginAttempts: z.string().min(1, "Number of login attempts is required"),
    sessionTimeout: z.string().min(1, "Session timeout is required"),
    passwordExpiry: z.string().min(1, "Password expiry is required"),
    ipRestriction: z.boolean().default(false),
    allowedIPs: z.string().optional(),
  });

  const form = useForm<z.infer<typeof securityFormSchema>>({
    resolver: zodResolver(securityFormSchema),
    defaultValues: {
      twoFactorAuth: false,
      loginAttempts: "3",
      sessionTimeout: "30",
      passwordExpiry: "90",
      ipRestriction: false,
      allowedIPs: "",
    },
  });

  function onSubmit(values: z.infer<typeof securityFormSchema>) {
    toast({
      title: "Security settings updated",
      description: "Your security settings have been saved successfully."
    });
    console.log(values);
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-medium">Security Settings</h3>
          <p className="text-sm text-muted-foreground">Configure platform security settings</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="twoFactorAuth"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Two-Factor Authentication</FormLabel>
                        <FormDescription>
                          Require 2FA for admin access
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="ipRestriction"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">IP Restriction</FormLabel>
                        <FormDescription>
                          Limit admin access to specific IP addresses
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {form.watch("ipRestriction") && (
                  <FormField
                    control={form.control}
                    name="allowedIPs"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Allowed IP Addresses</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter IP addresses separated by commas" />
                        </FormControl>
                        <FormDescription>
                          Example: 192.168.1.1, 10.0.0.1
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="loginAttempts"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Max Failed Login Attempts</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" min="1" />
                      </FormControl>
                      <FormDescription>
                        Number of failed attempts before account is locked
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sessionTimeout"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Session Timeout (minutes)</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" min="5" />
                      </FormControl>
                      <FormDescription>
                        Automatically log out inactive users
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="passwordExpiry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password Expiry (days)</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" min="0" />
                      </FormControl>
                      <FormDescription>
                        Force password change after specified days (0 = never)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit">Save Security Settings</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

// User Settings Tab Component
const UserSettingsTab = () => {
  const userSettingsFormSchema = z.object({
    requireEmailVerification: z.boolean().default(true),
    allowSelfRegistration: z.boolean().default(true),
    defaultUserRole: z.string().min(1, "Default user role is required"),
    usernamePolicies: z.object({
      minLength: z.string().min(1, "Minimum length is required"),
      allowSpecialChars: z.boolean().default(true)
    }),
    passwordPolicies: z.object({
      minLength: z.string().min(1, "Minimum length is required"),
      requireUppercase: z.boolean().default(true),
      requireNumbers: z.boolean().default(true),
      requireSpecialChars: z.boolean().default(true)
    })
  });

  const form = useForm<z.infer<typeof userSettingsFormSchema>>({
    resolver: zodResolver(userSettingsFormSchema),
    defaultValues: {
      requireEmailVerification: true,
      allowSelfRegistration: true,
      defaultUserRole: "customer",
      usernamePolicies: {
        minLength: "3",
        allowSpecialChars: false
      },
      passwordPolicies: {
        minLength: "8",
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialChars: true
      }
    },
  });

  function onSubmit(values: z.infer<typeof userSettingsFormSchema>) {
    toast({
      title: "User settings updated",
      description: "Your user settings have been saved successfully."
    });
    console.log(values);
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-medium">User Settings</h3>
          <p className="text-sm text-muted-foreground">Configure user registration and account policies</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="requireEmailVerification"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Require Email Verification</FormLabel>
                        <FormDescription>
                          Users must verify email before using the platform
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="allowSelfRegistration"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Allow Self-Registration</FormLabel>
                        <FormDescription>
                          Users can create their own accounts
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="defaultUserRole"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Default User Role</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select default role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="customer">Customer</SelectItem>
                          <SelectItem value="vendor">Vendor</SelectItem>
                          <SelectItem value="driver">Driver</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Default role assigned to new users
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="md:col-span-2">
                  <h4 className="text-sm font-medium mb-4">Username Policies</h4>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="usernamePolicies.minLength"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Minimum Username Length</FormLabel>
                          <FormControl>
                            <Input {...field} type="number" min="1" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="usernamePolicies.allowSpecialChars"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">Allow Special Characters</FormLabel>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h4 className="text-sm font-medium mb-4">Password Policies</h4>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="passwordPolicies.minLength"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Minimum Password Length</FormLabel>
                          <FormControl>
                            <Input {...field} type="number" min="6" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="passwordPolicies.requireUppercase"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              id="require-uppercase"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel htmlFor="require-uppercase">
                              Require Uppercase
                            </FormLabel>
                            <FormDescription>
                              Password must contain at least one uppercase letter
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="passwordPolicies.requireNumbers"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              id="require-numbers"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel htmlFor="require-numbers">
                              Require Numbers
                            </FormLabel>
                            <FormDescription>
                              Password must contain at least one number
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="passwordPolicies.requireSpecialChars"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              id="require-special"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel htmlFor="require-special">
                              Require Special Characters
                            </FormLabel>
                            <FormDescription>
                              Password must contain at least one special character
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              <Button type="submit">Save User Settings</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
