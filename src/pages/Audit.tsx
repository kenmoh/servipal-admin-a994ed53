
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Download, Calendar, Filter } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface AuditLog {
  id: string;
  adminUser: string;
  action: string;
  details: string;
  resourceType: string;
  resourceId: string;
  timestamp: string;
  ipAddress: string;
}

const Audit = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock audit logs data
  const auditLogs: AuditLog[] = [
    {
      id: 'LOG-001',
      adminUser: 'admin@example.com',
      action: 'USER_SUSPEND',
      details: 'User account suspended due to violation of terms',
      resourceType: 'User',
      resourceId: 'USR-006',
      timestamp: '2023-06-15 14:30:25',
      ipAddress: '192.168.1.1',
    },
    {
      id: 'LOG-002',
      adminUser: 'admin@example.com',
      action: 'DISPUTE_RESOLVE',
      details: 'Dispute resolved in favor of customer with partial refund',
      resourceType: 'Dispute',
      resourceId: 'DSP-002',
      timestamp: '2023-06-15 13:45:12',
      ipAddress: '192.168.1.1',
    },
    {
      id: 'LOG-003',
      adminUser: 'support@example.com',
      action: 'ESCROW_RELEASE',
      details: 'Manual release of escrow funds to vendor after delivery confirmation',
      resourceType: 'Transaction',
      resourceId: 'TRX-005',
      timestamp: '2023-06-15 12:22:05',
      ipAddress: '192.168.1.2',
    },
    {
      id: 'LOG-004',
      adminUser: 'admin@example.com',
      action: 'SETTINGS_UPDATE',
      details: 'Commission rate updated from 8% to 10% for laundry services',
      resourceType: 'Settings',
      resourceId: 'SET-001',
      timestamp: '2023-06-15 10:15:33',
      ipAddress: '192.168.1.1',
    },
    {
      id: 'LOG-005',
      adminUser: 'support@example.com',
      action: 'ORDER_CANCEL',
      details: 'Order cancelled with full refund due to vendor unavailability',
      resourceType: 'Order',
      resourceId: 'ORD-004',
      timestamp: '2023-06-15 09:05:17',
      ipAddress: '192.168.1.2',
    },
  ];

  // Filter logs based on search query
  const filteredLogs = searchQuery
    ? auditLogs.filter((log) =>
        Object.values(log).some((value) =>
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : auditLogs;

  return (
    <Layout title="Audit Logs">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Audit Logs</CardTitle>
            <CardDescription>
              Track all administrative actions for accountability and compliance
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar size={16} />
              Date Range
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              Filter
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download size={16} />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search audit logs..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Admin User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Resource</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>IP Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.id}</TableCell>
                  <TableCell>{log.adminUser}</TableCell>
                  <TableCell>{log.action.replace(/_/g, ' ')}</TableCell>
                  <TableCell>{`${log.resourceType} (${log.resourceId})`}</TableCell>
                  <TableCell className="max-w-[300px] truncate">{log.details}</TableCell>
                  <TableCell>{log.timestamp}</TableCell>
                  <TableCell>{log.ipAddress}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Audit;
