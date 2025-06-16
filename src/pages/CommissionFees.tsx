
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DollarSign, Percent, TrendingUp, Edit, Crown } from 'lucide-react';

const CommissionFees = () => {
  const [commissionRates] = useState([
    { category: 'Food Delivery', rate: '15%', minOrder: '$10', maxFee: '$5.00', volume: 'High' },
    { category: 'Package Delivery', rate: '12%', minOrder: '$5', maxFee: '$8.00', volume: 'Medium' },
    { category: 'Laundry Service', rate: '18%', minOrder: '$15', maxFee: '$6.00', volume: 'Low' },
    { category: 'Marketplace', rate: '8%', minOrder: '$20', maxFee: '$12.00', volume: 'High' },
  ]);

  const [vendorTiers] = useState([
    { tier: 'Bronze', minVolume: '$0', rate: '15%', benefits: 'Standard support' },
    { tier: 'Silver', minVolume: '$5,000', rate: '12%', benefits: 'Priority support, Analytics' },
    { tier: 'Gold', minVolume: '$15,000', rate: '10%', benefits: 'Dedicated manager, Marketing tools' },
    { tier: 'Platinum', minVolume: '$50,000', rate: '8%', benefits: 'All benefits + Custom features' },
  ]);

  const [promotionalRates] = useState([
    { name: 'New Vendor Welcome', discount: '50%', duration: '30 days', conditions: 'First-time vendors' },
    { name: 'High Volume Bonus', discount: '25%', duration: 'Ongoing', conditions: '>100 orders/month' },
    { name: 'Peak Hour Incentive', discount: '20%', duration: 'Daily 11-2pm', conditions: 'Food vendors only' },
    { name: 'Weekend Special', discount: '15%', duration: 'Sat-Sun', conditions: 'All categories' },
  ]);

  const getTierColor = (tier) => {
    const colors = {
      'Bronze': 'bg-amber-100 text-amber-800',
      'Silver': 'bg-gray-100 text-gray-800',
      'Gold': 'bg-yellow-100 text-yellow-800',
      'Platinum': 'bg-purple-100 text-purple-800'
    };
    return colors[tier] || 'bg-gray-100 text-gray-800';
  };

  const getVolumeColor = (volume) => {
    const colors = {
      'High': 'bg-green-100 text-green-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'Low': 'bg-red-100 text-red-800'
    };
    return colors[volume] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Layout title="Commission & Fee Structure">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Commission & Fee Structure</h1>
          <p className="text-muted-foreground">Manage pricing structure and vendor commission rates</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Avg Commission Rate</CardDescription>
              <Percent size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">13.25%</div>
              <p className="text-xs text-muted-foreground">Across all categories</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Monthly Commission</CardDescription>
              <DollarSign size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$48,750</div>
              <p className="text-xs text-green-600">+18% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Active Promotions</CardDescription>
              <TrendingUp size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">Currently running</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Vendor Tiers</CardDescription>
              <Crown size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">Commission levels</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="commission" className="w-full">
          <TabsList>
            <TabsTrigger value="commission">Commission Rates</TabsTrigger>
            <TabsTrigger value="tiers">Vendor Tiers</TabsTrigger>
            <TabsTrigger value="promotions">Promotional Rates</TabsTrigger>
          </TabsList>

          <TabsContent value="commission">
            <Card>
              <CardHeader>
                <CardTitle>Commission Rates by Category</CardTitle>
                <CardDescription>Base commission rates for different service categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Service Category</TableHead>
                        <TableHead>Commission Rate</TableHead>
                        <TableHead>Minimum Order</TableHead>
                        <TableHead>Maximum Fee</TableHead>
                        <TableHead>Volume</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {commissionRates.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.category}</TableCell>
                          <TableCell>{item.rate}</TableCell>
                          <TableCell>{item.minOrder}</TableCell>
                          <TableCell>{item.maxFee}</TableCell>
                          <TableCell>
                            <Badge className={getVolumeColor(item.volume)}>{item.volume}</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              <Edit size={16} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tiers">
            <Card>
              <CardHeader>
                <CardTitle>Vendor Commission Tiers</CardTitle>
                <CardDescription>Tiered commission structure based on vendor performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tier</TableHead>
                        <TableHead>Minimum Volume</TableHead>
                        <TableHead>Commission Rate</TableHead>
                        <TableHead>Benefits</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {vendorTiers.map((tier, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Badge className={getTierColor(tier.tier)}>{tier.tier}</Badge>
                          </TableCell>
                          <TableCell>{tier.minVolume}</TableCell>
                          <TableCell>{tier.rate}</TableCell>
                          <TableCell>{tier.benefits}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              <Edit size={16} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="promotions">
            <Card>
              <CardHeader>
                <CardTitle>Promotional Commission Rates</CardTitle>
                <CardDescription>Special discount rates and promotional offers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Promotion Name</TableHead>
                        <TableHead>Discount</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Conditions</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {promotionalRates.map((promo, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{promo.name}</TableCell>
                          <TableCell>{promo.discount}</TableCell>
                          <TableCell>{promo.duration}</TableCell>
                          <TableCell>{promo.conditions}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              <Edit size={16} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default CommissionFees;
