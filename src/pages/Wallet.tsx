
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import WalletOverview from '@/components/wallet/WalletOverview';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription,
  SheetClose
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import StatusBadge from '@/components/common/StatusBadge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type TransactionStatus = 'success' | 'pending' | 'error';

interface Transaction {
  id: string;
  user: string;
  type: string;
  amount: string;
  status: TransactionStatus;
  date: string;
}

const Wallet = () => {
  const [selectedWallet, setSelectedWallet] = useState<{id: string, user: string, type: string} | null>(null);
  const [openSheet, setOpenSheet] = useState(false);
  
  // Mock wallets data
  const wallets = [
    { id: 'WAL-001', user: 'John Doe', type: 'Customer', balance: '$120.50' },
    { id: 'WAL-002', user: 'Pizza Place', type: 'Vendor', balance: '$2,450.75' },
    { id: 'WAL-003', user: 'Quick Delivery Co.', type: 'Dispatch Company', balance: '$890.25' },
    { id: 'WAL-004', user: 'Mike Wilson', type: 'Rider', balance: '$78.50' },
  ];

  // Mock transaction data
  const transactions: Transaction[] = [
    {
      id: 'TRX-001',
      user: 'John Doe',
      type: 'Food Order Payment',
      amount: '$24.99',
      status: 'success',
      date: '2023-06-15 14:30:25',
    },
    {
      id: 'TRX-002',
      user: 'Pizza Place',
      type: 'Escrow Release',
      amount: '$22.49',
      status: 'success',
      date: '2023-06-15 13:45:12',
    },
    {
      id: 'TRX-003',
      user: 'Sarah Wilson',
      type: 'Marketplace Purchase',
      amount: '$199.99',
      status: 'pending',
      date: '2023-06-15 12:22:05',
    },
    {
      id: 'TRX-004',
      user: 'Quick Delivery Co.',
      type: 'Commission Payment',
      amount: '$5.50',
      status: 'success',
      date: '2023-06-15 10:15:33',
    },
    {
      id: 'TRX-005',
      user: 'Mike Johnson',
      type: 'Withdrawal Request',
      amount: '$120.00',
      status: 'error',
      date: '2023-06-15 09:05:17',
    },
    {
      id: 'TRX-006',
      user: 'Jane Smith',
      type: 'Food Order Payment',
      amount: '$18.50',
      status: 'success',
      date: '2023-06-14 19:22:41',
    },
    {
      id: 'TRX-007',
      user: 'Burger Joint',
      type: 'Escrow Release',
      amount: '$16.65',
      status: 'success',
      date: '2023-06-14 18:55:03',
    },
  ];

  const viewWalletDetails = (wallet: {id: string, user: string, type: string}) => {
    setSelectedWallet(wallet);
    setOpenSheet(true);
  };

  // Get transactions for the selected wallet
  const getWalletTransactions = (userName: string) => {
    return transactions.filter(transaction => transaction.user === userName);
  };

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
            onViewWallet={(user: string, type: string) => {
              const wallet = wallets.find(w => w.user === user);
              if (wallet) {
                viewWalletDetails({
                  id: wallet.id,
                  user: wallet.user,
                  type: wallet.type
                });
              }
            }}
          />

          <h2 className="text-lg font-semibold mt-8 mb-4">User Wallets</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Wallet ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {wallets.map((wallet) => (
                <TableRow key={wallet.id}>
                  <TableCell>{wallet.id}</TableCell>
                  <TableCell>{wallet.user}</TableCell>
                  <TableCell>{wallet.type}</TableCell>
                  <TableCell>{wallet.balance}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => viewWalletDetails(wallet)}
                    >
                      View Transactions
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Wallet Transactions</SheetTitle>
            <SheetDescription>
              {selectedWallet?.id} - {selectedWallet?.user} ({selectedWallet?.type})
            </SheetDescription>
          </SheetHeader>
          
          {selectedWallet && (
            <div className="mt-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Transaction History</h3>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {getWalletTransactions(selectedWallet.user).map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">{transaction.id}</TableCell>
                        <TableCell>{transaction.type}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                        <TableCell>
                          <StatusBadge status={transaction.status} />
                        </TableCell>
                        <TableCell>{transaction.date}</TableCell>
                      </TableRow>
                    ))}
                    {getWalletTransactions(selectedWallet.user).length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                          No transactions found
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Actions</h3>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="justify-start">
                    <span>View User Profile</span>
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <span>View Withdrawal Requests</span>
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <span>View Escrow Funds</span>
                  </Button>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </Layout>
  );
};

export default Wallet;
