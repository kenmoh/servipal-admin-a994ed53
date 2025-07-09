
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
    <Card className="dashboard-card col-span-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold tracking-tight">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between border-b border-border/50 pb-4 last:border-0 hover:bg-muted/30 rounded-lg px-3 py-2 -mx-3 -my-2 transition-colors"
            >
              <div className="flex flex-col">
                <span className="font-medium text-foreground">{transaction.user}</span>
                <span className="text-sm text-muted-foreground">{transaction.type}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-semibold text-foreground">{transaction.amount}</span>
                <div className="flex items-center gap-2 mt-1">
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
