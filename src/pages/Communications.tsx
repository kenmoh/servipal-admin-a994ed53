
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Bell, MessageSquare, Mail, Phone, Plus, Send, Eye } from 'lucide-react';
import StatusBadge from '@/components/common/StatusBadge';

const Communications = () => {
  const [notifications] = useState([
    { id: 'NOT-001', title: 'System Maintenance', type: 'System', audience: 'All Users', status: 'sent', recipients: 25000, delivered: 24750 },
    { id: 'NOT-002', title: 'New Feature Launch', type: 'Feature', audience: 'Active Users', status: 'scheduled', recipients: 18000, delivered: 0 },
    { id: 'NOT-003', title: 'Promotional Offer', type: 'Marketing', audience: 'Customers', status: 'draft', recipients: 0, delivered: 0 },
    { id: 'NOT-004', title: 'Security Alert', type: 'Security', audience: 'Vendors', status: 'sending', recipients: 450, delivered: 280 },
  ]);

  const [supportTickets] = useState([
    { id: 'TKT-001', user: 'John Doe', subject: 'Order delivery issue', category: 'Delivery', priority: 'high', status: 'open', agent: 'Sarah Wilson' },
    { id: 'TKT-002', user: 'Pizza Palace', subject: 'Commission calculation error', category: 'Billing', priority: 'medium', status: 'in_progress', agent: 'Mike Johnson' },
    { id: 'TKT-003', user: 'Quick Delivery', subject: 'Account verification help', category: 'Account', priority: 'low', status: 'resolved', agent: 'Emma Davis' },
    { id: 'TKT-004', user: 'Jane Smith', subject: 'Payment refund request', category: 'Payment', priority: 'high', status: 'escalated', agent: 'David Brown' },
  ]);

  const [automatedMessages] = useState([
    { id: 'AUTO-001', trigger: 'Order Placed', template: 'Order Confirmation', status: 'active', sent: 2340 },
    { id: 'AUTO-002', trigger: 'Order Delivered', template: 'Delivery Confirmation', status: 'active', sent: 2180 },
    { id: 'AUTO-003', trigger: 'Payment Failed', template: 'Payment Retry', status: 'active', sent: 45 },
    { id: 'AUTO-004', trigger: 'New Vendor', template: 'Welcome Message', status: 'paused', sent: 0 },
  ]);

  const [broadcastStats] = useState([
    { channel: 'Push Notifications', sent: 15000, delivered: 14250, opened: 8500, ctr: '59.6%' },
    { channel: 'Email', sent: 12000, delivered: 11800, opened: 7080, ctr: '60.0%' },
    { channel: 'SMS', sent: 8000, delivered: 7950, opened: 6360, ctr: '80.0%' },
    { channel: 'In-App', sent: 20000, delivered: 20000, opened: 16000, ctr: '80.0%' },
  ]);

  const getPriorityColor = (priority) => {
    const colors = {
      'high': 'bg-red-100 text-red-800',
      'medium': 'bg-yellow-100 text-yellow-800',
      'low': 'bg-green-100 text-green-800'
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  };

  const getStatusVariant = (status) => {
    const variants = {
      'sent': 'success',
      'scheduled': 'pending',
      'draft': 'error',
      'sending': 'pending',
      'open': 'error',
      'in_progress': 'pending',
      'resolved': 'success',
      'escalated': 'error',
      'active': 'success',
      'paused': 'error'
    };
    return variants[status] || 'pending';
  };

  return (
    <Layout title="Communications & Support">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Communications & Support</h1>
            <p className="text-muted-foreground">Manage notifications, support tickets, and automated messaging</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus size={16} />
            Create Campaign
          </Button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Active Notifications</CardDescription>
              <Bell size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Currently broadcasting</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Open Tickets</CardDescription>
              <MessageSquare size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-red-600">2 high priority</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Messages Sent</CardDescription>
              <Mail size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">55k</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Avg Response Time</CardDescription>
              <Phone size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.5h</div>
              <p className="text-xs text-green-600">-30min from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="notifications" className="w-full">
          <TabsList>
            <TabsTrigger value="notifications">Notification Center</TabsTrigger>
            <TabsTrigger value="support">Support Tickets</TabsTrigger>
            <TabsTrigger value="automated">Automated Messages</TabsTrigger>
            <TabsTrigger value="broadcast">Broadcast Stats</TabsTrigger>
          </TabsList>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Center</CardTitle>
                <CardDescription>Manage system messages and broadcast announcements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Audience</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Recipients</TableHead>
                        <TableHead>Delivered</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {notifications.map((notification) => (
                        <TableRow key={notification.id}>
                          <TableCell className="font-medium">{notification.title}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{notification.type}</Badge>
                          </TableCell>
                          <TableCell>{notification.audience}</TableCell>
                          <TableCell>
                            <StatusBadge status={getStatusVariant(notification.status)} />
                          </TableCell>
                          <TableCell>{notification.recipients.toLocaleString()}</TableCell>
                          <TableCell>{notification.delivered.toLocaleString()}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-1">
                              <Button variant="ghost" size="sm">
                                <Eye size={16} />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Send size={16} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support">
            <Card>
              <CardHeader>
                <CardTitle>Customer Support Tickets</CardTitle>
                <CardDescription>Manage and track customer support requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ticket ID</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Assigned Agent</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {supportTickets.map((ticket) => (
                        <TableRow key={ticket.id}>
                          <TableCell className="font-medium">{ticket.id}</TableCell>
                          <TableCell>{ticket.user}</TableCell>
                          <TableCell>{ticket.subject}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{ticket.category}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={getPriorityColor(ticket.priority)}>
                              {ticket.priority.toUpperCase()}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <StatusBadge status={getStatusVariant(ticket.status)} />
                          </TableCell>
                          <TableCell>{ticket.agent}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              <Eye size={16} />
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

          <TabsContent value="automated">
            <Card>
              <CardHeader>
                <CardTitle>Automated Messaging</CardTitle>
                <CardDescription>Configure automated message triggers and templates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Message ID</TableHead>
                        <TableHead>Trigger Event</TableHead>
                        <TableHead>Template</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Messages Sent</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {automatedMessages.map((message) => (
                        <TableRow key={message.id}>
                          <TableCell className="font-medium">{message.id}</TableCell>
                          <TableCell>{message.trigger}</TableCell>
                          <TableCell>{message.template}</TableCell>
                          <TableCell>
                            <StatusBadge status={getStatusVariant(message.status)} />
                          </TableCell>
                          <TableCell>{message.sent.toLocaleString()}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              <Eye size={16} />
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

          <TabsContent value="broadcast">
            <Card>
              <CardHeader>
                <CardTitle>Broadcast Performance</CardTitle>
                <CardDescription>Communication channel performance and engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Channel</TableHead>
                        <TableHead>Messages Sent</TableHead>
                        <TableHead>Delivered</TableHead>
                        <TableHead>Opened</TableHead>
                        <TableHead>Open Rate</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {broadcastStats.map((stat, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{stat.channel}</TableCell>
                          <TableCell>{stat.sent.toLocaleString()}</TableCell>
                          <TableCell>{stat.delivered.toLocaleString()}</TableCell>
                          <TableCell>{stat.opened.toLocaleString()}</TableCell>
                          <TableCell>{stat.ctr}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Communications;
