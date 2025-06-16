
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Users, Shield, Settings, Plus, Edit, Eye } from 'lucide-react';
import StatusBadge from '@/components/common/StatusBadge';

const RoleManagement = () => {
  const [roles] = useState([
    { id: 'ROLE-001', name: 'Super Admin', description: 'Full system access', users: 2, permissions: 15, status: 'active' },
    { id: 'ROLE-002', name: 'Operations Manager', description: 'Manage daily operations', users: 5, permissions: 12, status: 'active' },
    { id: 'ROLE-003', name: 'Customer Support', description: 'Handle customer inquiries', users: 12, permissions: 8, status: 'active' },
    { id: 'ROLE-004', name: 'Finance Team', description: 'Manage financial operations', users: 3, permissions: 6, status: 'active' },
    { id: 'ROLE-005', name: 'Content Manager', description: 'Manage app content', users: 4, permissions: 5, status: 'inactive' },
  ]);

  const [adminUsers] = useState([
    { id: 'ADM-001', name: 'John Admin', email: 'john@admin.com', role: 'Super Admin', lastLogin: '2024-01-15 14:30', status: 'active' },
    { id: 'ADM-002', name: 'Sarah Manager', email: 'sarah@admin.com', role: 'Operations Manager', lastLogin: '2024-01-15 09:15', status: 'active' },
    { id: 'ADM-003', name: 'Mike Support', email: 'mike@admin.com', role: 'Customer Support', lastLogin: '2024-01-14 16:45', status: 'active' },
    { id: 'ADM-004', name: 'Emma Finance', email: 'emma@admin.com', role: 'Finance Team', lastLogin: '2024-01-13 11:20', status: 'inactive' },
  ]);

  const [permissions] = useState([
    { module: 'User Management', view: true, create: true, edit: true, delete: false },
    { module: 'Order Management', view: true, create: false, edit: true, delete: false },
    { module: 'Financial Reports', view: true, create: false, edit: false, delete: false },
    { module: 'System Settings', view: false, create: false, edit: false, delete: false },
    { module: 'Content Management', view: true, create: true, edit: true, delete: true },
  ]);

  const [accessLogs] = useState([
    { user: 'John Admin', action: 'Login', resource: 'Dashboard', timestamp: '2024-01-15 14:30:25', ip: '192.168.1.100' },
    { user: 'Sarah Manager', action: 'View', resource: 'User List', timestamp: '2024-01-15 14:25:10', ip: '192.168.1.105' },
    { user: 'Mike Support', action: 'Edit', resource: 'Support Ticket', timestamp: '2024-01-15 14:20:45', ip: '192.168.1.110' },
    { user: 'Emma Finance', action: 'Export', resource: 'Financial Report', timestamp: '2024-01-15 14:15:30', ip: '192.168.1.115' },
  ]);

  const getRoleColor = (role) => {
    const colors = {
      'Super Admin': 'bg-purple-100 text-purple-800',
      'Operations Manager': 'bg-blue-100 text-blue-800',
      'Customer Support': 'bg-green-100 text-green-800',
      'Finance Team': 'bg-yellow-100 text-yellow-800',
      'Content Manager': 'bg-pink-100 text-pink-800'
    };
    return colors[role] || 'bg-gray-100 text-gray-800';
  };

  const getStatusVariant = (status) => {
    return status === 'active' ? 'success' : 'error';
  };

  return (
    <Layout title="Role-Based Access Control">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Role-Based Access Control</h1>
            <p className="text-muted-foreground">Manage user roles, permissions, and access control</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus size={16} />
            Add Role
          </Button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Total Roles</CardDescription>
              <Shield size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">4 active roles</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Admin Users</CardDescription>
              <Users size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">26</div>
              <p className="text-xs text-green-600">+3 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Active Sessions</CardDescription>
              <Settings size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">Currently logged in</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Security Events</CardDescription>
              <Eye size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342</div>
              <p className="text-xs text-muted-foreground">Last 24 hours</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Roles Management */}
          <Card>
            <CardHeader>
              <CardTitle>Role Management</CardTitle>
              <CardDescription>Configure user roles and their permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Role Name</TableHead>
                      <TableHead>Users</TableHead>
                      <TableHead>Permissions</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {roles.map((role) => (
                      <TableRow key={role.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{role.name}</div>
                            <div className="text-sm text-muted-foreground">{role.description}</div>
                          </div>
                        </TableCell>
                        <TableCell>{role.users}</TableCell>
                        <TableCell>{role.permissions}</TableCell>
                        <TableCell>
                          <StatusBadge status={getStatusVariant(role.status)} />
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Edit size={16} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Admin Users */}
          <Card>
            <CardHeader>
              <CardTitle>Admin Users</CardTitle>
              <CardDescription>Manage administrative user accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {adminUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                        </TableCell>
                        <TableCell className="text-sm">{user.lastLogin}</TableCell>
                        <TableCell>
                          <StatusBadge status={getStatusVariant(user.status)} />
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Edit size={16} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Permissions Matrix */}
          <Card>
            <CardHeader>
              <CardTitle>Permission Matrix</CardTitle>
              <CardDescription>Configure permissions for selected role</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Module</TableHead>
                      <TableHead>View</TableHead>
                      <TableHead>Create</TableHead>
                      <TableHead>Edit</TableHead>
                      <TableHead>Delete</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {permissions.map((permission, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{permission.module}</TableCell>
                        <TableCell>
                          <Checkbox checked={permission.view} />
                        </TableCell>
                        <TableCell>
                          <Checkbox checked={permission.create} />
                        </TableCell>
                        <TableCell>
                          <Checkbox checked={permission.edit} />
                        </TableCell>
                        <TableCell>
                          <Checkbox checked={permission.delete} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Access Logs */}
          <Card>
            <CardHeader>
              <CardTitle>Access Logs</CardTitle>
              <CardDescription>Recent admin user activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Resource</TableHead>
                      <TableHead>Timestamp</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {accessLogs.map((log, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{log.user}</TableCell>
                        <TableCell>{log.action}</TableCell>
                        <TableCell>{log.resource}</TableCell>
                        <TableCell className="text-sm">{log.timestamp}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default RoleManagement;
