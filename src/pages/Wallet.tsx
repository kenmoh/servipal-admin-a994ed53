
import Layout from '@/components/layout/Layout';
import WalletOverview from '@/components/wallet/WalletOverview';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Wallet = () => {
  // Mock transaction data
  const transactions = [
    {
      id: 'TRX-001',
      user: 'John Doe',
      type: 'Food Order Payment',
      amount: '$24.99',
      status: 'success' as const,
      date: '2023-06-15 14:30:25',
    },
    {
      id: 'TRX-002',
      user: 'Pizza Place',
      type: 'Escrow Release',
      amount: '$22.49',
      status: 'success' as const,
      date: '2023-06-15 13:45:12',
    },
    {
      id: 'TRX-003',
      user: 'Sarah Wilson',
      type: 'Marketplace Purchase',
      amount: '$199.99',
      status: 'pending' as const,
      date: '2023-06-15 12:22:05',
    },
    {
      id: 'TRX-004',
      user: 'Quick Delivery Co.',
      type: 'Commission Payment',
      amount: '$5.50',
      status: 'success' as const,
      date: '2023-06-15 10:15:33',
    },
    {
      id: 'TRX-005',
      user: 'Mike Johnson',
      type: 'Withdrawal Request',
      amount: '$120.00',
      status: 'error' as const,
      date: '2023-06-15 09:05:17',
    },
    {
      id: 'TRX-006',
      user: 'Jane Smith',
      type: 'Food Order Payment',
      amount: '$18.50',
      status: 'success' as const,
      date: '2023-06-14 19:22:41',
    },
    {
      id: 'TRX-007',
      user: 'Burger Joint',
      type: 'Escrow Release',
      amount: '$16.65',
      status: 'success' as const,
      date: '2023-06-14 18:55:03',
    },
  ];

  return (
    <Layout title="Wallet & Transactions">
      <Card>
        <CardHeader>
          <CardTitle>Wallet Management</CardTitle>
          <CardDescription>
            Monitor platform funds, escrow balances, and transaction history
          </CardDescription>
        </CardHeader>
        <CardContent>
          <WalletOverview
            totalBalance="$245,680.50"
            escrowBalance="$12,450.75"
            transactions={transactions}
          />
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Wallet;
