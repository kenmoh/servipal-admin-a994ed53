
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
  SheetClose,
  SheetFooter
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
import { toast } from '@/hooks/use-toast';
import { Download, Eye, Filter, User } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

type TransactionStatus = 'success' | 'pending' | 'error';

interface Transaction {
  id: string;
  user: string;
  type: string;
  amount: string;
  status: TransactionStatus;
  date: string;
}

interface WalletData {
  id: string;
  user: string;
  type: string;
  balance: string;
  escrowBalance: string;
  pendingWithdrawals: string;
}

interface UserDetails {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  registrationDate: string;
  status: string;
}

const Wallet = () => {
  const [selectedWallet, setSelectedWallet] = useState<WalletData | null>(null);
  const [openSheet, setOpenSheet] = useState(false);
  const [userProfileDialogOpen, setUserProfileDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserDetails | null>(null);
  
  // Mock wallets data with escrow balances
  const wallets: WalletData[] = [
    { 
      id: 'WAL-001', 
      user: 'John Doe', 
      type: 'Customer', 
      balance: '$120.50', 
      escrowBalance: '$0.00', 
      pendingWithdrawals: '$0.00'
    },
    { 
      id: 'WAL-002', 
      user: 'Pizza Place', 
      type: 'Vendor', 
      balance: '$2,450.75',
      escrowBalance: '$350.25',
      pendingWithdrawals: '$200.00'
    },
    { 
      id: 'WAL-003', 
      user: 'Quick Delivery Co.', 
      type: 'Dispatch Company', 
      balance: '$890.25',
      escrowBalance: '$120.00',
      pendingWithdrawals: '$0.00'
    },
    { 
      id: 'WAL-004', 
      user: 'Mike Wilson', 
      type: 'Rider', 
      balance: '$78.50',
      escrowBalance: '$0.00',
      pendingWithdrawals: '$25.00'
    },
  ];

  // Mock user data for profile view
  const users: Record<string, UserDetails> = {
    'John Doe': {
      id: 'USR-001',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      type: 'Customer',
      registrationDate: '2023-01-15',
      status: 'active',
    },
    'Pizza Place': {
      id: 'USR-002',
      name: 'Pizza Place',
      email: 'info@pizzaplace.com',
      phone: '+1987654321',
      type: 'Vendor',
      registrationDate: '2023-02-20',
      status: 'active',
    },
    'Quick Delivery Co.': {
      id: 'USR-003',
      name: 'Quick Delivery Co.',
      email: 'info@quickdelivery.com',
      phone: '+1122334455',
      type: 'Dispatch Company',
      registrationDate: '2023-03-10',
      status: 'active',
    },
    'Mike Wilson': {
      id: 'USR-004',
      name: 'Mike Wilson',
      email: 'mike@example.com',
      phone: '+1555666777',
      type: 'Rider',
      registrationDate: '2023-04-05',
      status: 'active',
    },
  };

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

  const viewWalletDetails = (wallet: WalletData) => {
    setSelectedWallet(wallet);
    setOpenSheet(true);
  };

  // Get transactions for the selected wallet
  const getWalletTransactions = (userName: string) => {
    return transactions.filter(transaction => transaction.user === userName);
  };

  // Handle user profile view
  const handleViewUserProfile = () => {
    if (selectedWallet && users[selectedWallet.user]) {
      setSelectedUser(users[selectedWallet.user]);
      setOpenSheet(false);
      setTimeout(() => setUserProfileDialogOpen(true), 300);
    }
  };

  // Handle withdrawal requests view
  const handleViewWithdrawals = () => {
    toast({
      title: "Action Triggered",
      description: "Viewing withdrawal requests",
    });
  };

  // Handle escrow funds view
  const handleViewEscrow = () => {
    toast({
      title: "Action Triggered",
      description: "Viewing escrow funds details",
    });
  };

  // Handle filter button
  const handleFilter = () => {
    toast({
      title: "Filter",
      description: "Filter functionality would open here",
    });
  };

  // Handle export button
  const handleExport = () => {
    toast({
      title: "Export",
      description: "Exporting data...",
    });
  };

  return (
    <Layout title="Wallet & Transactions">
      <Tabs defaultValue="wallets" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="wallets">Wallets</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="wallets">
          <Card>
            <CardHeader>
              <CardTitle>Wallet Management</CardTitle>
              <CardDescription>
                Monitor platform funds, escrow balances, and user wallets
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
                    viewWalletDetails(wallet);
                  }
                }}
              />

              <h2 className="text-lg font-semibold mt-8 mb-4">User Wallets</h2>
              <div className="flex justify-end mb-4 gap-2">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={handleFilter}
                >
                  <Filter size={16} />
                  Filter
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={handleExport}
                >
                  <Download size={16} />
                  Export
                </Button>
              </div>
              <div className="rounded-md border overflow-hidden">
                <Table className="w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Wallet ID</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Balance</TableHead>
                      <TableHead>Escrow</TableHead>
                      <TableHead>Pending Withdrawals</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {wallets.map((wallet) => (
                      <TableRow key={wallet.id} className="hover:bg-muted/40">
                        <TableCell>{wallet.id}</TableCell>
                        <TableCell>{wallet.user}</TableCell>
                        <TableCell>{wallet.type}</TableCell>
                        <TableCell>{wallet.balance}</TableCell>
                        <TableCell>{wallet.escrowBalance}</TableCell>
                        <TableCell>{wallet.pendingWithdrawals}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="gap-1"
                            onClick={() => viewWalletDetails(wallet)}
                          >
                            <Eye size={16} />
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="transactions">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>
                  View and manage all financial transactions across the platform
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={handleFilter}
                >
                  <Filter size={16} />
                  Filter
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={handleExport}
                >
                  <Download size={16} />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-hidden">
                <Table className="w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id} className="hover:bg-muted/40">
                        <TableCell className="font-medium">{transaction.id}</TableCell>
                        <TableCell>{transaction.user}</TableCell>
                        <TableCell>{transaction.type}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                        <TableCell>
                          <StatusBadge status={transaction.status} />
                        </TableCell>
                        <TableCell>{transaction.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Wallet Detail Sheet */}
      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Wallet Details</SheetTitle>
            <SheetDescription>
              {selectedWallet?.id} - {selectedWallet?.user} ({selectedWallet?.type})
            </SheetDescription>
          </SheetHeader>
          
          {selectedWallet && (
            <div className="mt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Available Balance</CardDescription>
                    <CardTitle className="text-2xl">{selectedWallet.balance}</CardTitle>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Escrow Balance</CardDescription>
                    <CardTitle className="text-2xl">{selectedWallet.escrowBalance}</CardTitle>
                  </CardHeader>
                </Card>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Transaction History</h3>
                
                <div className="rounded-md border overflow-hidden">
                  <Table className="compact-table">
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
                        <TableRow key={transaction.id} className="hover:bg-muted/40">
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
                          <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                            No transactions found
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Actions</h3>
                <div className="flex flex-col gap-2">
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={handleViewUserProfile}
                  >
                    <span>View User Profile</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={handleViewWithdrawals}
                  >
                    <span>View Withdrawal Requests</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={handleViewEscrow}
                  >
                    <span>View Escrow Funds</span>
                  </Button>
                </div>
              </div>

              <SheetFooter className="pt-4">
                <SheetClose asChild>
                  <Button variant="outline" className="w-full sm:w-auto">Close</Button>
                </SheetClose>
              </SheetFooter>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* User Profile Dialog */}
      <Dialog open={userProfileDialogOpen} onOpenChange={setUserProfileDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>User Profile</DialogTitle>
            <DialogDescription>
              Details for {selectedUser?.name}
            </DialogDescription>
          </DialogHeader>
          
          {selectedUser && (
            <div className="py-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <User size={36} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{selectedUser.name}</h3>
                  <p className="text-muted-foreground">{selectedUser.type}</p>
                </div>
                <StatusBadge status={selectedUser.status as any} className="ml-auto" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">User ID</p>
                  <p className="text-sm text-muted-foreground">{selectedUser.id}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Registration Date</p>
                  <p className="text-sm text-muted-foreground">{selectedUser.registrationDate}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">{selectedUser.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">{selectedUser.phone}</p>
                </div>
              </div>
              
              <div className="flex justify-end gap-2 mt-6">
                <Button variant="outline" onClick={() => setUserProfileDialogOpen(false)}>
                  Close
                </Button>
                <Button>View Full Details</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Wallet;
