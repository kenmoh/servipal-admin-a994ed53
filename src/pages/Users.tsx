
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
import { Filter, Download, UserPlus } from 'lucide-react';

const Users = () => {
  // Mock user data
  const users = [
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
  ] as const;

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
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              Filter
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download size={16} />
              Export
            </Button>
            <Button className="flex items-center gap-2">
              <UserPlus size={16} />
              Add User
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <UserTable users={users} />
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Users;
