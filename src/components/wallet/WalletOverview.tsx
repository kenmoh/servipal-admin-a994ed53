
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatusBadge from '@/components/common/StatusBadge';
import DataTable from '@/components/common/DataTable';

type Transaction = {
  id: string;
  user: string;
  type: string;
  amount: string;
  status: 'success' | 'pending' | 'error';
  date: string;
};

interface WalletOverviewProps {
  totalBalance: string;
  escrowBalance: string;
  transactions: Transaction[];
}

const WalletOverview = ({ totalBalance, escrowBalance, transactions }: WalletOverviewProps) => {
  const columns = [
    { key: 'id', title: 'Transaction ID' },
    { key: 'user', title: 'User' },
    { key: 'type', title: 'Type' },
    { key: 'amount', title: 'Amount' },
    { 
      key: 'status', 
      title: 'Status',
      render: (value: 'success' | 'pending' | 'error') => (
        <StatusBadge status={value} />
      )
    },
    { key: 'date', title: 'Date' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Platform Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalBalance}</div>
            <p className="text-sm text-muted-foreground mt-1">
              All user wallets combined
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Escrow Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{escrowBalance}</div>
            <p className="text-sm text-muted-foreground mt-1">
              Funds held in escrow for pending orders
            </p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-4">Recent Transactions</h2>
        <DataTable columns={columns} data={transactions} />
      </div>
    </div>
  );
};

export default WalletOverview;
