
import Layout from '@/components/layout/Layout';
import UserTable from '@/components/users/UserTable';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Filter, Download, UserPlus, Eye, Edit, ArrowLeft, User, Package } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose, SheetFooter } from '@/components/ui/sheet';
import { useState } from 'react';
import StatusBadge from '@/components/common/StatusBadge';
import { toast } from '@/hooks/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import AddUserForm from '@/components/users/AddUserForm';
import EditUserForm from '@/components/users/EditUserForm';

type UserType = 'customer' | 'vendor' | 'dispatch_company' | 'rider';
type UserStatus = 'active' | 'pending' | 'suspended';
type OrderStatus = 'pending' | 'in_progress' | 'completed' | 'cancelled';
type OrderType = 'food' | 'package' | 'laundry' | 'marketplace';
type TransactionStatus = 'success' | 'pending' | 'error';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: UserType;
  registrationDate: string;
  status: UserStatus;
}

interface Rider {
  id: string;
  name: string;
  phone: string;
  status: 'available' | 'busy' | 'offline';
  rating: number;
}

interface DispatchCompany {
  id: string;
  name: string;
  contactPerson: string;
  phone: string;
  totalRiders: number;
}

interface Order {
  id: string;
  customer: string;
  vendor: string;
  type: OrderType;
  amount: string;
  status: OrderStatus;
  date: string;
  riderId?: string;
  dispatchCompanyId?: string;
}

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
  balance: string;
  escrowBalance: string;
  pendingWithdrawals: string;
}

interface MarketplaceItem {
  id: string;
  seller: string;
  name: string;
  price: string;
  category: string;
  status: 'active' | 'pending' | 'sold' | 'removed';
  dateListed: string;
}

const Users = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [openSheet, setOpenSheet] = useState(false);
  const [viewMode, setViewMode] = useState<'details' | 'orders' | 'wallet' | 'listings'>('details');
  const [addUserDialogOpen, setAddUserDialogOpen] = useState(false);
  const [editUserDialogOpen, setEditUserDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [orderDetailSheetOpen, setOrderDetailSheetOpen] = useState(false);
  
  // Mock user data
  const users: User[] = [
    {
      id: 'USR-001',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      type: 'customer',
      registrationDate: '2023-01-15',
      status: 'active',
    },
    {
      id: 'USR-002',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1987654321',
      type: 'vendor',
      registrationDate: '2023-02-20',
      status: 'active',
    },
    {
      id: 'USR-003',
      name: 'Quick Delivery Co.',
      email: 'info@quickdelivery.com',
      phone: '+1122334455',
      type: 'dispatch_company',
      registrationDate: '2023-03-10',
      status: 'active',
    },
    {
      id: 'USR-004',
      name: 'Mike Wilson',
      email: 'mike@example.com',
      phone: '+1555666777',
      type: 'rider',
      registrationDate: '2023-04-05',
      status: 'active',
    },
    {
      id: 'USR-005',
      name: 'Tasty Burger',
      email: 'orders@tastyburger.com',
      phone: '+1444555666',
      type: 'vendor',
      registrationDate: '2023-05-12',
      status: 'pending',
    },
    {
      id: 'USR-006',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+1333444555',
      type: 'customer',
      registrationDate: '2023-06-18',
      status: 'suspended',
    },
    {
      id: 'USR-007',
      name: 'Fast Riders Inc',
      email: 'contact@fastriders.com',
      phone: '+1222333444',
      type: 'dispatch_company',
      registrationDate: '2023-07-20',
      status: 'pending',
    },
  ];

  // Mock riders data
  const riders: Record<string, Rider> = {
    'RDR-001': {
      id: 'RDR-001',
      name: 'Alex Johnson',
      phone: '+1234567890',
      status: 'available',
      rating: 4.8
    },
    'RDR-002': {
      id: 'RDR-002',
      name: 'Maria Garcia',
      phone: '+1987654321',
      status: 'busy',
      rating: 4.5
    }
  };

  const dispatchCompanies: Record<string, DispatchCompany> = {
    'DSP-001': {
      id: 'DSP-001',
      name: 'Quick Delivery Co.',
      contactPerson: 'James Smith',
      phone: '+1122334455',
      totalRiders: 15
    },
    'DSP-002': {
      id: 'DSP-002',
      name: 'Fast Riders Inc',
      contactPerson: 'Emma Wilson',
      phone: '+1222333444',
      totalRiders: 8
    }
  };

  // Mock orders for users
  const userOrders: Record<string, Order[]> = {
    'USR-001': [
      {
        id: 'ORD-001',
        customer: 'John Doe',
        vendor: 'Tasty Burger',
        type: 'food',
        amount: '$24.99',
        status: 'completed',
        date: '2023-05-15',
        riderId: 'RDR-001',
        dispatchCompanyId: 'DSP-001'
      },
      {
        id: 'ORD-002',
        customer: 'John Doe',
        vendor: 'Quick Market',
        type: 'marketplace',
        amount: '$56.75',
        status: 'in_progress',
        date: '2023-05-17',
        riderId: 'RDR-002',
        dispatchCompanyId: 'DSP-001'
      }
    ],
    'USR-002': [
      {
        id: 'ORD-003',
        customer: 'Jane Smith',
        vendor: 'Fresh Groceries',
        type: 'food',
        amount: '$32.50',
        status: 'completed',
        date: '2023-05-10',
        riderId: 'RDR-001',
        dispatchCompanyId: 'DSP-002'
      }
    ]
  };

  // Mock wallet data for users
  const userWallets: Record<string, WalletData> = {
    'USR-001': {
      id: 'WAL-001',
      user: 'John Doe',
      balance: '$120.50',
      escrowBalance: '$0.00',
      pendingWithdrawals: '$0.00'
    },
    'USR-002': {
      id: 'WAL-002',
      user: 'Jane Smith',
      balance: '$85.25',
      escrowBalance: '$15.00',
      pendingWithdrawals: '$0.00'
    }
  };

  // Mock transactions for users
  const userTransactions: Record<string, Transaction[]> = {
    'USR-001': [
      {
        id: 'TRX-001',
        user: 'John Doe',
        type: 'Payment',
        amount: '$24.99',
        status: 'success',
        date: '2023-05-15 12:30:45',
      },
      {
        id: 'TRX-002',
        user: 'John Doe',
        type: 'Refund',
        amount: '$12.50',
        status: 'success',
        date: '2023-05-10 15:22:30',
      }
    ],
    'USR-002': [
      {
        id: 'TRX-003',
        user: 'Jane Smith',
        type: 'Payment',
        amount: '$32.50',
        status: 'success',
        date: '2023-05-10 09:15:22',
      },
      {
        id: 'TRX-004',
        user: 'Jane Smith',
        type: 'Withdrawal',
        amount: '$50.00',
        status: 'pending',
        date: '2023-05-18 16:45:10',
      }
    ]
  };

  // Mock marketplace listings for users
  const userListings: Record<string, MarketplaceItem[]> = {
    'USR-001': [
      {
        id: 'ITM-001',
        seller: 'John Doe',
        name: 'Vintage Camera',
        price: '$199.99',
        category: 'Electronics',
        status: 'active',
        dateListed: '2023-06-10',
      },
      {
        id: 'ITM-005',
        seller: 'John Doe',
        name: 'Old Bicycle',
        price: '$80.00',
        category: 'Sports',
        status: 'sold',
        dateListed: '2023-05-20',
      }
    ],
    'USR-006': [
      {
        id: 'ITM-003',
        seller: 'Sarah Johnson',
        name: 'Designer Handbag',
        price: '$150.00',
        category: 'Fashion',
        status: 'active',
        dateListed: '2023-06-15',
      }
    ]
  };

  const viewUserDetails = (user: User) => {
    setSelectedUser(user);
    setViewMode('details');
    setOpenSheet(true);
  };

  const viewUserOrders = () => {
    if (selectedUser) {
      setViewMode('orders');
    }
  };

  const viewUserWallet = () => {
    if (selectedUser) {
      setViewMode('wallet');
    }
  };

  const viewUserListings = () => {
    if (selectedUser) {
      setViewMode('listings');
    }
  };

  const viewOrderDetails = (order: Order) => {
    setSelectedOrder(order);
    setOrderDetailSheetOpen(true);
  };

  const backToDetails = () => {
    setViewMode('details');
  };

  const handleEditUser = () => {
    setOpenSheet(false);
    setTimeout(() => setEditUserDialogOpen(true), 300);
  };

  // Handler functions for the buttons
  const handleFilter = () => {
    toast({
      title: "Filter",
      description: "Filter modal would open here",
    });
  };

  const handleExport = () => {
    toast({
      title: "Export",
      description: "Exporting user data...",
    });
  };

  const handleUserAction = (action: string) => {
    toast({
      title: "Action Triggered",
      description: `${action} action for ${selectedUser?.name}`,
    });
  };

  // Function to map marketplace status to StatusBadge-compatible status
  const getStatusBadgeVariant = (status: string): "pending" | "success" | "error" | "warning" => {
    switch(status) {
      case 'active': return 'success';
      case 'pending': return 'pending';
      case 'sold': return 'warning';
      case 'removed': return 'error';
      default: return 'pending';
    }
  };

  return (
    <Layout title="User Management">
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Users</CardTitle>
            <CardDescription>
              Manage your application users, vendors, dispatch companies, and riders.
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
            <Button 
              className="flex items-center gap-2"
              onClick={() => setAddUserDialogOpen(true)}
            >
              <UserPlus size={16} />
              Add User
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <UserTable users={users} onViewUser={viewUserDetails} />
        </CardContent>
      </Card>

      {/* Add User Dialog */}
      <Dialog open={addUserDialogOpen} onOpenChange={setAddUserDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              Create a new user account in the system.
            </DialogDescription>
          </DialogHeader>
          <AddUserForm onSuccess={() => setAddUserDialogOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* Edit User Dialog */}
      <Dialog open={editUserDialogOpen} onOpenChange={setEditUserDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Update user information.
            </DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <EditUserForm 
              user={selectedUser} 
              onSuccess={() => setEditUserDialogOpen(false)} 
            />
          )}
        </DialogContent>
      </Dialog>

      {/* User Detail Sheet */}
      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetContent className="w-full sm:max-w-[540px] overflow-y-auto">
          <SheetHeader className="border-b pb-4 mb-4">
            {viewMode !== 'details' && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="mb-2 -ml-2" 
                onClick={backToDetails}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to details
              </Button>
            )}
            <SheetTitle>
              {viewMode === 'details' && "User Details"}
              {viewMode === 'orders' && "User Orders"}
              {viewMode === 'wallet' && "User Wallet"}
              {viewMode === 'listings' && "User Listings"}
            </SheetTitle>
            <SheetDescription>
              {selectedUser?.id} - {selectedUser?.type.replace('_', ' ')}
            </SheetDescription>
          </SheetHeader>

          {/* User details view */}
          {selectedUser && viewMode === 'details' && (
            <div className="mt-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Basic Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Name</p>
                    <p className="text-sm text-muted-foreground">{selectedUser.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Status</p>
                    <StatusBadge status={selectedUser.status} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{selectedUser.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">{selectedUser.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Registration Date</p>
                    <p className="text-sm text-muted-foreground">{selectedUser.registrationDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">User Type</p>
                    <p className="text-sm text-muted-foreground capitalize">
                      {selectedUser.type.replace('_', ' ')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Actions</h3>
                <div className="flex flex-col gap-2">
                  {selectedUser.status === 'active' && (
                    <Button 
                      variant="destructive" 
                      className="justify-start"
                      onClick={() => handleUserAction('Suspend User')}
                    >
                      <span>Suspend User</span>
                    </Button>
                  )}
                  {selectedUser.status === 'suspended' && (
                    <Button 
                      variant="default" 
                      className="justify-start"
                      onClick={() => handleUserAction('Activate User')}
                    >
                      <span>Activate User</span>
                    </Button>
                  )}
                  {selectedUser.status === 'pending' && (
                    <>
                      <Button 
                        variant="default" 
                        className="justify-start"
                        onClick={() => handleUserAction('Approve User')}
                      >
                        <span>Approve User</span>
                      </Button>
                      <Button 
                        variant="destructive" 
                        className="justify-start"
                        onClick={() => handleUserAction('Reject User')}
                      >
                        <span>Reject User</span>
                      </Button>
                    </>
                  )}
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={handleEditUser}
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    <span>Edit User</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={viewUserOrders}
                  >
                    <span>View Orders</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={viewUserWallet}
                  >
                    <span>View Wallet</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={viewUserListings}
                  >
                    <Package className="mr-2 h-4 w-4" />
                    <span>View Listings</span>
                  </Button>
                </div>
              </div>

              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline" className="w-full">Close</Button>
                </SheetClose>
              </SheetFooter>
            </div>
          )}

          {/* User orders view */}
          {selectedUser && viewMode === 'orders' && (
            <div className="mt-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground">Order History</h3>
                
                {userOrders[selectedUser.id] ? (
                  <div className="rounded-md border overflow-hidden">
                    <Table className="w-full">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Order ID</TableHead>
                          <TableHead>Vendor</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {userOrders[selectedUser.id].map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.vendor}</TableCell>
                            <TableCell className="capitalize">{order.type}</TableCell>
                            <TableCell>{order.amount}</TableCell>
                            <TableCell>
                              <StatusBadge status={order.status} />
                            </TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => viewOrderDetails(order)}
                              >
                                <Eye size={16} />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="py-8 text-center">
                    <p className="text-muted-foreground">No orders found for this user</p>
                  </div>
                )}
              </div>
              
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline" className="w-full sm:w-auto">Close</Button>
                </SheetClose>
              </SheetFooter>
            </div>
          )}

          {/* User wallet view */}
          {selectedUser && viewMode === 'wallet' && (
            <div className="mt-6 space-y-6">
              {userWallets[selectedUser.id] ? (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Available Balance</CardDescription>
                        <CardTitle className="text-2xl">{userWallets[selectedUser.id].balance}</CardTitle>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Escrow Balance</CardDescription>
                        <CardTitle className="text-2xl">{userWallets[selectedUser.id].escrowBalance}</CardTitle>
                      </CardHeader>
                    </Card>
                  </div>
                  
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">Transaction History</h3>
                  
                  {userTransactions[selectedUser.id] ? (
                    <div className="rounded-md border overflow-hidden">
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
                          {userTransactions[selectedUser.id].map((transaction) => (
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
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="py-8 text-center">
                      <p className="text-muted-foreground">No transactions found for this user</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="py-8 text-center">
                  <p className="text-muted-foreground">No wallet information found for this user</p>
                </div>
              )}
              
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline" className="w-full sm:w-auto">Close</Button>
                </SheetClose>
              </SheetFooter>
            </div>
          )}

          {/* User listings view */}
          {selectedUser && viewMode === 'listings' && (
            <div className="mt-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground">Marketplace Listings</h3>
                
                {userListings[selectedUser.id] ? (
                  <div className="rounded-md border overflow-hidden">
                    <Table className="w-full">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Item ID</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Date Listed</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {userListings[selectedUser.id].map((item) => (
                          <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell>{item.category}</TableCell>
                            <TableCell>
                              <StatusBadge status={getStatusBadgeVariant(item.status)} />
                            </TableCell>
                            <TableCell>{item.dateListed}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="py-8 text-center">
                    <Package className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No marketplace listings found for this user</p>
                  </div>
                )}
              </div>
              
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline" className="w-full sm:w-auto">Close</Button>
                </SheetClose>
              </SheetFooter>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Order Detail Sheet with Rider/Dispatch info */}
      <Sheet open={orderDetailSheetOpen} onOpenChange={setOrderDetailSheetOpen}>
        <SheetContent className="w-full sm:max-w-[540px] overflow-y-auto">
          <SheetHeader className="border-b pb-4 mb-4">
            <SheetTitle>Order Details</SheetTitle>
            <SheetDescription>
              {selectedOrder?.id}
            </SheetDescription>
          </SheetHeader>
          
          {selectedOrder && (
            <div className="mt-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Order Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Customer</p>
                    <p className="text-sm text-muted-foreground">{selectedOrder.customer}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Vendor</p>
                    <p className="text-sm text-muted-foreground">{selectedOrder.vendor}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Type</p>
                    <p className="text-sm text-muted-foreground capitalize">{selectedOrder.type}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Amount</p>
                    <p className="text-sm text-muted-foreground">{selectedOrder.amount}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Status</p>
                    <StatusBadge status={selectedOrder.status} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Date</p>
                    <p className="text-sm text-muted-foreground">{selectedOrder.date}</p>
                  </div>
                </div>
              </div>

              {/* Rider information (if assigned) */}
              {selectedOrder.riderId && riders[selectedOrder.riderId] && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Rider Information</h3>
                  <Card className="bg-muted/30">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <User size={24} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{riders[selectedOrder.riderId].name}</h4>
                          <p className="text-sm text-muted-foreground">Rider</p>
                        </div>
                        <StatusBadge status={riders[selectedOrder.riderId].status === 'available' ? 'success' : riders[selectedOrder.riderId].status === 'busy' ? 'warning' : 'error'} className="ml-auto" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">Phone</p>
                          <p className="text-sm text-muted-foreground">{riders[selectedOrder.riderId].phone}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Rating</p>
                          <p className="text-sm text-muted-foreground">⭐ {riders[selectedOrder.riderId].rating}/5</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Dispatch Company information (if assigned) */}
              {selectedOrder.dispatchCompanyId && dispatchCompanies[selectedOrder.dispatchCompanyId] && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Dispatch Company</h3>
                  <Card className="bg-muted/30">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">Company</p>
                          <p className="text-sm text-muted-foreground">{dispatchCompanies[selectedOrder.dispatchCompanyId].name}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Contact Person</p>
                          <p className="text-sm text-muted-foreground">{dispatchCompanies[selectedOrder.dispatchCompanyId].contactPerson}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Phone</p>
                          <p className="text-sm text-muted-foreground">{dispatchCompanies[selectedOrder.dispatchCompanyId].phone}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Total Riders</p>
                          <p className="text-sm text-muted-foreground">{dispatchCompanies[selectedOrder.dispatchCompanyId].totalRiders}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline" className="w-full sm:w-auto">Close</Button>
                </SheetClose>
              </SheetFooter>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </Layout>
  );
};

export default Users;
