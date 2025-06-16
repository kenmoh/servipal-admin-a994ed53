
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
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
  ResponsiveContainer
} from 'recharts';
import { TrendingUp, Users, DollarSign, MapPin } from 'lucide-react';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30days');

  // Mock performance data
  const performanceMetrics = [
    { title: 'Avg Delivery Time', value: '28 min', trend: '+5%', positive: true, icon: <TrendingUp size={18} /> },
    { title: 'Customer Retention', value: '76.2%', trend: '+12%', positive: true, icon: <Users size={18} /> },
    { title: 'Revenue Growth', value: '+23.5%', trend: '+8%', positive: true, icon: <DollarSign size={18} /> },
    { title: 'Service Coverage', value: '89%', trend: '+3%', positive: true, icon: <MapPin size={18} /> },
  ];

  // User behavior data
  const userBehaviorData = [
    { metric: 'Session Duration', value: '12.5 min', change: '+15%' },
    { metric: 'Page Views per Session', value: '8.3', change: '+8%' },
    { metric: 'Bounce Rate', value: '24%', change: '-12%' },
    { metric: 'Conversion Rate', value: '3.8%', change: '+20%' },
  ];

  // Revenue trends by service
  const serviceRevenueData = [
    { name: 'Food Delivery', jan: 45000, feb: 52000, mar: 48000, apr: 61000, may: 58000, jun: 67000 },
    { name: 'Package Delivery', jan: 28000, feb: 31000, mar: 35000, apr: 32000, may: 38000, jun: 42000 },
    { name: 'Laundry Service', jan: 15000, feb: 18000, mar: 20000, apr: 22000, may: 25000, jun: 28000 },
    { name: 'Marketplace', jan: 22000, feb: 26000, mar: 30000, apr: 34000, may: 38000, jun: 45000 },
  ];

  // Geographic distribution
  const geoData = [
    { area: 'Downtown', orders: 1240, revenue: 62000, coverage: 95 },
    { area: 'Uptown', orders: 980, revenue: 48500, coverage: 88 },
    { area: 'Suburbs', orders: 750, revenue: 35200, coverage: 72 },
    { area: 'University Area', orders: 1100, revenue: 41800, coverage: 85 },
    { area: 'Business District', orders: 890, revenue: 53400, coverage: 90 },
  ];

  const COLORS = ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9'];

  return (
    <Layout title="Analytics & Business Intelligence">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Performance Analytics</h1>
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
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {performanceMetrics.map((metric, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardDescription>{metric.title}</CardDescription>
                {metric.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className={`text-xs ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.trend} from last period
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Service Revenue Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue by Service Type</CardTitle>
              <CardDescription>Monthly revenue breakdown across services</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={serviceRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                  <Legend />
                  <Bar dataKey="jun" fill="#8B5CF6" name="Current Month" />
                  <Bar dataKey="may" fill="#D946EF" name="Previous Month" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* User Behavior Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>User Behavior Analytics</CardTitle>
              <CardDescription>Key engagement metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userBehaviorData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm font-medium">{item.metric}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">{item.value}</span>
                      <span className="text-xs text-green-600">{item.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Geographic Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Geographic Performance</CardTitle>
            <CardDescription>Orders and revenue by service area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm font-medium text-muted-foreground mb-2">
                <div>Service Area</div>
                <div>Total Orders</div>
                <div>Revenue</div>
                <div>Coverage %</div>
                <div>Performance</div>
              </div>
              {geoData.map((area, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 py-2 border-b">
                  <div className="font-medium">{area.area}</div>
                  <div>{area.orders}</div>
                  <div>${area.revenue.toLocaleString()}</div>
                  <div>{area.coverage}%</div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${area.coverage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Analytics;
