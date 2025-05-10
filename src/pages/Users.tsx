
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
import { Filter, Download, UserPlus, Eye, Edit } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose, SheetFooter } from '@/components/ui/sheet';
import { useState } from 'react';
import StatusBadge from '@/components/common/StatusBadge';
import { toast } from '@/hooks/use-toast';

type UserType = 'customer' | 'vendor' | 'dispatch_company' | 'rider';
type UserStatus = 'active' | 'pending' | 'suspended';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: UserType;
  registrationDate: string;
  status: UserStatus;
}

const Users = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [openSheet, setOpenSheet] = useState(false);
  
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

  const viewUserDetails = (user: User) => {
    setSelectedUser(user);
    setOpenSheet(true);
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

  const handleAddUser = () => {
    toast({
      title: "Add User",
      description: "User creation form would open here",
    });
  };

  const handleUserAction = (action: string) => {
    toast({
      title: "Action Triggered",
      description: `${action} action for ${selectedUser?.name}`,
    });
  };

  return (
    <Layout title="User Management">
      <Card>
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
              onClick={handleAddUser}
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

      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>User Details</SheetTitle>
            <SheetDescription>{selectedUser?.id} - {selectedUser?.type}</SheetDescription>
          </SheetHeader>
          {selectedUser && (
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
                    onClick={() => handleUserAction('Edit User')}
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    <span>Edit User</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={() => handleUserAction('View Orders')}
                  >
                    <span>View Orders</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={() => handleUserAction('View Wallet')}
                  >
                    <span>View Wallet</span>
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
        </SheetContent>
      </Sheet>
    </Layout>
  );
};

export default Users;
