
import { Button } from '@/components/ui/button';
import { Check, X, Edit, MoreHorizontal } from 'lucide-react';
import DataTable from '@/components/common/DataTable';
import StatusBadge from '@/components/common/StatusBadge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'vendor' | 'customer' | 'dispatch_company' | 'rider';
  registrationDate: string;
  status: 'active' | 'pending' | 'suspended';
};

interface UserTableProps {
  users: User[];
}

const UserTable = ({ users }: UserTableProps) => {
  const columns = [
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    { key: 'phone', title: 'Phone' },
    { 
      key: 'type', 
      title: 'User Type',
      render: (value: string) => (
        <span className="capitalize">{value.replace('_', ' ')}</span>
      )
    },
    { key: 'registrationDate', title: 'Registered' },
    { 
      key: 'status', 
      title: 'Status',
      render: (value: 'active' | 'pending' | 'suspended') => (
        <StatusBadge status={value} />
      )
    },
    {
      key: 'actions',
      title: 'Actions',
      render: (_: any, record: User) => (
        <div className="flex justify-end">
          {record.status === 'pending' ? (
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" className="text-green-600">
                <Check size={16} />
              </Button>
              <Button size="icon" variant="ghost" className="text-red-600">
                <X size={16} />
              </Button>
            </div>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Edit size={14} className="mr-2" />
                  Edit details
                </DropdownMenuItem>
                <DropdownMenuItem>View profile</DropdownMenuItem>
                {record.status === 'active' ? (
                  <DropdownMenuItem className="text-red-600">
                    Suspend user
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem className="text-green-600">
                    Activate user
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      ),
    },
  ];

  return <DataTable columns={columns} data={users} />;
};

export default UserTable;
