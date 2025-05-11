
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  BarChart as RechartsBarChart, 
  LineChart as RechartsLineChart,
  PieChart as RechartsPieChart,
  Bar, Line, Pie,
  XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, Cell, 
  ResponsiveContainer,
  TooltipProps
} from 'recharts';
import { Download, Filter, Calendar } from 'lucide-react';

const Reports = () => {
  const [timeRange, setTimeRange] = useState('30days');
  
  // Mock data for charts
  const revenueData = [
    { name: 'Jan', revenue: 12500 },
    { name: 'Feb', revenue: 13200 },
    { name: 'Mar', revenue: 15000 },
    { name: 'Apr', revenue: 16800 },
    { name: 'May', revenue: 14500 },
    { name: 'Jun', revenue: 19000 },
  ];

  const orderTypeData = [
    { name: 'Food', value: 540 },
    { name: 'Package', value: 320 },
    { name: 'Laundry', value: 150 },
    { name: 'Marketplace', value: 280 },
  ];

  const userGrowthData = [
    { name: 'Jan', customers: 320, vendors: 45, riders: 120 },
    { name: 'Feb', customers: 380, vendors: 52, riders: 135 },
    { name: 'Mar', customers: 450, vendors: 58, riders: 142 },
    { name: 'Apr', customers: 520, vendors: 65, riders: 158 },
    { name: 'May', customers: 610, vendors: 72, riders: 175 },
    { name: 'Jun', customers: 670, vendors: 78, riders: 190 },
  ];

  // Performance analytics data
  const performanceData = {
    deliveryTime: '28 min',
    orderCompletion: '94.7%',
    customerRetention: '76.2%',
    activeUsers: '15.4k',
    averageOrderValue: '$32.75',
  };

  // Mock data for revenue sources
  const revenueSources = [
    { source: 'Commission', percentage: 65, amount: '$156,750' },
    { source: 'Delivery Fee', percentage: 20, amount: '$48,230' },
    { source: 'Subscription', percentage: 10, amount: '$24,115' },
    { source: 'Other', percentage: 5, amount: '$12,057' },
  ];

  // Colors for pie chart
  const COLORS = ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9'];

  return (
    <Layout title="Analytics & Reports">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} />
            Filter
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download size={16} />
            Export
          </Button>
        </div>
      </div>

      {/* Key Performance Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {Object.entries(performanceData).map(([key, value], index) => (
          <Card key={key} className="shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="p-4 pb-2">
              <CardDescription className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-2xl font-bold">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Revenue Trend Chart */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
              </RechartsLineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Order Distribution Chart */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Order Distribution</CardTitle>
            <CardDescription>Breakdown by order types</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={orderTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {orderTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [value, 'Orders']} />
                <Legend />
              </RechartsPieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* User Growth Chart */}
        <Card className="shadow-sm md:col-span-2">
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>Growth by user type over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="customers" fill="#8B5CF6" name="Customers" />
                <Bar dataKey="vendors" fill="#D946EF" name="Vendors" />
                <Bar dataKey="riders" fill="#F97316" name="Riders" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Sources */}
      <Card className="mt-6 shadow-sm">
        <CardHeader>
          <CardTitle>Revenue Sources</CardTitle>
          <CardDescription>Breakdown of revenue by source</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {revenueSources.map((source) => (
              <div key={source.source} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>{source.source}</span>
                  <span className="font-medium">{source.amount} ({source.percentage}%)</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full" 
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mt-8 mb-6">Available Reports</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Financial Reports Card */}
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardHeader>
            <CardTitle>Financial Reports</CardTitle>
            <CardDescription>Revenue, commissions, refunds</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0 h-auto">Monthly Revenue Report</Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto">Commission Breakdown</Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto">Refund Analysis</Button>
              </li>
            </ul>
            <div className="mt-4">
              <Button variant="outline" className="w-full flex items-center gap-2">
                <Download size={16} />
                Download All
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* User Reports Card */}
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardHeader>
            <CardTitle>User Reports</CardTitle>
            <CardDescription>Registrations, activity patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0 h-auto">New User Registration</Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto">User Retention Analysis</Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto">Active User Metrics</Button>
              </li>
            </ul>
            <div className="mt-4">
              <Button variant="outline" className="w-full flex items-center gap-2">
                <Download size={16} />
                Download All
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Operations Reports Card */}
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardHeader>
            <CardTitle>Operations Reports</CardTitle>
            <CardDescription>Orders, disputes, delivery metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0 h-auto">Order Volume Analysis</Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto">Dispute Resolution Times</Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto">Delivery Performance</Button>
              </li>
            </ul>
            <div className="mt-4">
              <Button variant="outline" className="w-full flex items-center gap-2">
                <Download size={16} />
                Download All
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Reports;
