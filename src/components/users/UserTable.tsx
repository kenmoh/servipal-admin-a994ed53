
import DataTable from '@/components/common/DataTable';
import StatusBadge from '@/components/common/StatusBadge';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

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

interface UserTableProps {
  users: User[];
  onViewUser?: (user: User) => void;
}

const UserTable = ({ users, onViewUser }: UserTableProps) => {
  const columns = [
    { key: 'id', title: 'ID' },
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    { 
      key: 'type', 
      title: 'User Type',
      render: (value: string) => (
        <span className="capitalize">{value.replace('_', ' ')}</span>
      )
    },
    { 
      key: 'status', 
      title: 'Status',
      render: (value: UserStatus) => (
        <StatusBadge status={value} />
      )
    },
    { key: 'registrationDate', title: 'Registration Date' },
    {
      key: 'actions',
      title: 'Actions',
      render: (_: any, record: User) => (
        <div className="flex justify-end">
          {onViewUser && (
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1"
              onClick={() => onViewUser(record)}
            >
              <Eye size={16} />
              <span>View</span>
            </Button>
          )}
        </div>
      ),
    },
  ];

  return <DataTable columns={columns} data={users} />;
};

export default UserTable;
