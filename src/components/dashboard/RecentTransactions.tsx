
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatusBadge from '@/components/common/StatusBadge';

type Transaction = {
  id: string;
  user: string;
  type: string;
  amount: string;
  status: 'success' | 'pending' | 'error';
  date: string;
};

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions = ({ transactions }: RecentTransactionsProps) => {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="text-lg">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between border-b pb-4 last:border-0"
            >
              <div className="flex flex-col">
                <span className="font-medium">{transaction.user}</span>
                <span className="text-sm text-muted-foreground">{transaction.type}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-medium">{transaction.amount}</span>
                <div className="flex items-center gap-2">
                  <StatusBadge status={transaction.status} />
                  <span className="text-xs text-muted-foreground">{transaction.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
