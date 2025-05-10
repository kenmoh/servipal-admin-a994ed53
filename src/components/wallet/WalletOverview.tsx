
import StatusBadge from '@/components/common/StatusBadge';
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
import { Eye } from 'lucide-react';

interface Transaction {
  id: string;
  user: string;
  type: string;
  amount: string;
  status: 'success' | 'pending' | 'error';
  date: string;
}

interface WalletOverviewProps {
  totalBalance: string;
  escrowBalance: string;
  transactions: Transaction[];
  onViewWallet?: (user: string, type: string) => void;
}

const WalletOverview = ({
  totalBalance,
  escrowBalance,
  transactions,
  onViewWallet,
}: WalletOverviewProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Platform Balance</CardDescription>
            <CardTitle className="text-3xl">{totalBalance}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              All funds across the platform including user wallets, escrow, and
              commissions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Escrow Balance</CardDescription>
            <CardTitle className="text-3xl">{escrowBalance}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Funds held in escrow for pending transactions across all service
              types.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-lg font-semibold">Recent Transactions</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            {onViewWallet && <TableHead className="text-right">Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.slice(0, 5).map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.id}</TableCell>
              <TableCell>{transaction.user}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>
                <StatusBadge status={transaction.status} />
              </TableCell>
              <TableCell>{transaction.date}</TableCell>
              {onViewWallet && (
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onViewWallet(transaction.user, transaction.type)}
                    title="View wallet details"
                  >
                    <Eye size={16} />
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WalletOverview;
