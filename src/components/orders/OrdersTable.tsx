
import { Button } from '@/components/ui/button';
import { Eye, MoreHorizontal } from 'lucide-react';
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

type OrderType = 'food' | 'package' | 'laundry' | 'marketplace';
type OrderStatus = 'pending' | 'in_progress' | 'completed' | 'cancelled';

interface Order {
  id: string;
  customer: string;
  vendor: string;
  type: OrderType;
  amount: string;
  status: OrderStatus;
  date: string;
}

interface OrdersTableProps {
  orders: Order[];
  onViewOrder?: (order: Order) => void;
}

const OrdersTable = ({ orders, onViewOrder }: OrdersTableProps) => {
  const columns = [
    { key: 'id', title: 'Order ID' },
    { key: 'customer', title: 'Customer' },
    { key: 'vendor', title: 'Vendor/Seller' },
    { 
      key: 'type', 
      title: 'Type',
      render: (value: string) => (
        <span className="capitalize">{value}</span>
      )
    },
    { key: 'amount', title: 'Amount' },
    { 
      key: 'status', 
      title: 'Status',
      render: (value: OrderStatus) => (
        <StatusBadge status={value} />
      )
    },
    { key: 'date', title: 'Date' },
    {
      key: 'actions',
      title: 'Actions',
      render: (_: any, record: Order) => (
        <div className="flex justify-end">
          {onViewOrder ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onViewOrder(record)}
            >
              <Eye size={16} />
            </Button>
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
                  <Eye size={14} className="mr-2" />
                  View details
                </DropdownMenuItem>
                {record.status === 'pending' && (
                  <DropdownMenuItem>Assign rider</DropdownMenuItem>
                )}
                {(record.status === 'pending' || record.status === 'in_progress') && (
                  <DropdownMenuItem className="text-red-600">
                    Cancel order
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      ),
    },
  ];

  return <DataTable columns={columns} data={orders} />;
};

export default OrdersTable;
