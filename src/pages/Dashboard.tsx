
import Layout from '@/components/layout/Layout';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import { Users, Package, DollarSign, MessageSquare, CreditCard } from 'lucide-react';

const Dashboard = () => {
  // Mock data for stats
  const stats = [
    {
      title: 'Total Users',
      value: '12,458',
      icon: <Users size={18} />,
      trend: { value: 12, positive: true },
    },
    {
      title: 'Active Orders',
      value: '243',
      icon: <Package size={18} />,
      trend: { value: 8, positive: true },
    },
    {
      title: 'Revenue (Monthly)',
      value: '$24,500',
      icon: <DollarSign size={18} />,
      trend: { value: 5, positive: true },
    },
    {
      title: 'Pending Disputes',
      value: '12',
      icon: <MessageSquare size={18} />,
      trend: { value: 3, positive: false },
    },
  ];

  // Mock data for charts
  const revenueData = [
    { name: 'Jan', value: 12000 },
    { name: 'Feb', value: 15000 },
    { name: 'Mar', value: 18000 },
    { name: 'Apr', value: 16000 },
    { name: 'May', value: 21000 },
    { name: 'Jun', value: 24500 },
  ];

  const orderDistributionData = [
    { name: 'Food', value: 45 },
    { name: 'Package', value: 30 },
    { name: 'Laundry', value: 15 },
    { name: 'Marketplace', value: 10 },
  ];

  const userGrowthData = [
    { name: 'Customers', value: 8500 },
    { name: 'Vendors', value: 2100 },
    { name: 'Riders', value: 1400 },
    { name: 'Dispatch', value: 458 },
  ];

  // Mock data for recent transactions
  const recentTransactions = [
    {
      id: 'TRX-001',
      user: 'John Doe',
      type: 'Food Order Payment',
      amount: '$24.99',
      status: 'success' as const,
      date: '10 mins ago',
    },
    {
      id: 'TRX-002',
      user: 'Pizza Place',
      type: 'Escrow Release',
      amount: '$22.49',
      status: 'success' as const,
      date: '35 mins ago',
    },
    {
      id: 'TRX-003',
      user: 'Sarah Wilson',
      type: 'Marketplace Purchase',
      amount: '$199.99',
      status: 'pending' as const,
      date: '1 hour ago',
    },
    {
      id: 'TRX-004',
      user: 'Quick Delivery Co.',
      type: 'Commission Payment',
      amount: '$5.50',
      status: 'success' as const,
      date: '2 hours ago',
    },
    {
      id: 'TRX-005',
      user: 'Mike Johnson',
      type: 'Withdrawal Request',
      amount: '$120.00',
      status: 'error' as const,
      date: '3 hours ago',
    },
  ];

  return (
    <Layout title="Dashboard">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Revenue Trends"
            type="line"
            data={revenueData}
            dataKey="value"
          />
          <ChartCard
            title="Order Distribution"
            type="pie"
            data={orderDistributionData}
            dataKey="value"
          />
        </div>

        <ChartCard
          title="User Growth by Type"
          type="bar"
          data={userGrowthData}
          dataKey="value"
        />

        <RecentTransactions transactions={recentTransactions} />
      </div>
    </Layout>
  );
};

export default Dashboard;
