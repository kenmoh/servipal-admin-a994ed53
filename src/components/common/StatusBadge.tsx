
import { cn } from '@/lib/utils';
import React from 'react';

type StatusType = 'active' | 'pending' | 'suspended' | 'completed' | 'cancelled' | 'in_progress' | 'approved' | 'rejected' | 'success' | 'warning' | 'error';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
  children?: React.ReactNode;
}

const statusStyles = {
  active: 'bg-green-100 text-green-800 border-green-200',
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  suspended: 'bg-red-100 text-red-800 border-red-200',
  completed: 'bg-green-100 text-green-800 border-green-200',
  cancelled: 'bg-gray-100 text-gray-800 border-gray-200',
  in_progress: 'bg-blue-100 text-blue-800 border-blue-200',
  approved: 'bg-green-100 text-green-800 border-green-200',
  rejected: 'bg-red-100 text-red-800 border-red-200',
  success: 'bg-green-100 text-green-800 border-green-200',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  error: 'bg-red-100 text-red-800 border-red-200',
};

const StatusBadge = ({ status, className, children }: StatusBadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border',
        statusStyles[status],
        className
      )}
    >
      {children || status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' ')}
    </span>
  );
};

export default StatusBadge;
