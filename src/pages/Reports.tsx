
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Bar, Line, Pie } from 'recharts';
import { Download, Filter, Calendar } from 'lucide-react';

const Reports = () => {
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

  return (
    <Layout title="Analytics & Reports">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar size={16} />
            Last 30 Days
          </Button>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            {/* This would be a Line Chart from Recharts */}
            <div className="text-center text-gray-500 h-full flex items-center justify-center">
              Line Chart Visualization Placeholder
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order Distribution</CardTitle>
            <CardDescription>Breakdown by order types</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            {/* This would be a Pie Chart from Recharts */}
            <div className="text-center text-gray-500 h-full flex items-center justify-center">
              Pie Chart Visualization Placeholder
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>Growth by user type over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            {/* This would be a Bar Chart from Recharts */}
            <div className="text-center text-gray-500 h-full flex items-center justify-center">
              Bar Chart Visualization Placeholder
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-6">Available Reports</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
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

        <Card>
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

        <Card>
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
