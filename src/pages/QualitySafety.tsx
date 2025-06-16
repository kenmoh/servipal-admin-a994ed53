
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
import { Progress } from '@/components/ui/progress';
import { Star, Shield, AlertTriangle, CheckCircle, Eye, Flag } from 'lucide-react';
import StatusBadge from '@/components/common/StatusBadge';

const QualitySafety = () => {
  const [reviews] = useState([
    { id: 'REV-001', user: 'John Doe', vendor: 'Pizza Palace', rating: 4.5, comment: 'Great food, fast delivery!', status: 'approved', flagged: false },
    { id: 'REV-002', user: 'Sarah Wilson', vendor: 'Quick Laundry', rating: 2.0, comment: 'Service was terrible, clothes damaged', status: 'flagged', flagged: true },
    { id: 'REV-003', user: 'Mike Johnson', vendor: 'Fresh Market', rating: 5.0, comment: 'Amazing quality, highly recommend!', status: 'approved', flagged: false },
    { id: 'REV-004', user: 'Emma Davis', vendor: 'Speed Delivery', rating: 1.5, comment: 'Inappropriate behavior from driver', status: 'under_review', flagged: true },
  ]);

  const [complianceItems] = useState([
    { item: 'Food Safety Certificates', required: 145, completed: 142, percentage: 98 },
    { item: 'Driver Background Checks', required: 89, completed: 87, percentage: 98 },
    { item: 'Vendor Business Licenses', required: 67, completed: 65, percentage: 97 },
    { item: 'Insurance Documentation', required: 156, completed: 151, percentage: 97 },
  ]);

  const [riskAlerts] = useState([
    { id: 'RISK-001', type: 'High Risk', description: 'Multiple complaints about vendor hygiene', vendor: 'Quick Bites', severity: 'high' },
    { id: 'RISK-002', type: 'Medium Risk', description: 'Unusual payment pattern detected', vendor: 'Fast Delivery Co', severity: 'medium' },
    { id: 'RISK-003', type: 'Low Risk', description: 'Customer dispute rate slightly elevated', vendor: 'City Market', severity: 'low' },
    { id: 'RISK-004', type: 'High Risk', description: 'Suspicious account activity', vendor: 'Express Services', severity: 'high' },
  ]);

  const [safetyChecks] = useState([
    { check: 'Vehicle Inspection', vendors: 89, passed: 86, failed: 3 },
    { check: 'Driver Training Completion', vendors: 92, passed: 90, failed: 2 },
    { check: 'Equipment Safety Audit', vendors: 67, passed: 64, failed: 3 },
    { check: 'Emergency Procedure Training', vendors: 78, passed: 76, failed: 2 },
  ]);

  const getRatingStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  const getSeverityColor = (severity) => {
    const colors = {
      'high': 'bg-red-100 text-red-800',
      'medium': 'bg-yellow-100 text-yellow-800',
      'low': 'bg-green-100 text-green-800'
    };
    return colors[severity] || 'bg-gray-100 text-gray-800';
  };

  const getStatusVariant = (status) => {
    const variants = {
      'approved': 'success',
      'flagged': 'error',
      'under_review': 'pending'
    };
    return variants[status] || 'pending';
  };

  return (
    <Layout title="Quality & Safety Management">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Quality & Safety Management</h1>
          <p className="text-muted-foreground">Monitor service quality, safety compliance, and risk management</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Average Rating</CardDescription>
              <Star size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2</div>
              <p className="text-xs text-muted-foreground">Platform-wide rating</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Compliance Rate</CardDescription>
              <Shield size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">97.5%</div>
              <p className="text-xs text-green-600">+2% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Active Alerts</CardDescription>
              <AlertTriangle size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-red-600">2 high priority</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Safety Checks</CardDescription>
              <CheckCircle size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">316</div>
              <p className="text-xs text-muted-foreground">Completed this month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="reviews" className="w-full">
          <TabsList>
            <TabsTrigger value="reviews">Reviews & Ratings</TabsTrigger>
            <TabsTrigger value="compliance">Compliance Monitoring</TabsTrigger>
            <TabsTrigger value="risk">Risk Management</TabsTrigger>
            <TabsTrigger value="safety">Safety Checks</TabsTrigger>
          </TabsList>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Reviews & Rating Management</CardTitle>
                <CardDescription>Monitor and moderate customer reviews and ratings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Vendor</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Comment</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {reviews.map((review) => (
                        <TableRow key={review.id}>
                          <TableCell className="font-medium">{review.user}</TableCell>
                          <TableCell>{review.vendor}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              {getRatingStars(review.rating)}
                              <span className="ml-1 text-sm">{review.rating}</span>
                            </div>
                          </TableCell>
                          <TableCell className="max-w-xs truncate">{review.comment}</TableCell>
                          <TableCell>
                            <StatusBadge status={getStatusVariant(review.status)} />
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-1">
                              <Button variant="ghost" size="sm">
                                <Eye size={16} />
                              </Button>
                              {review.flagged && (
                                <Button variant="ghost" size="sm">
                                  <Flag size={16} />
                                </Button>
                              )}
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

          <TabsContent value="compliance">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Monitoring</CardTitle>
                <CardDescription>Track regulatory requirements and compliance status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceItems.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{item.item}</span>
                        <span className="text-sm text-muted-foreground">
                          {item.completed}/{item.required} ({item.percentage}%)
                        </span>
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risk">
            <Card>
              <CardHeader>
                <CardTitle>Risk Management Alerts</CardTitle>
                <CardDescription>Monitor and manage platform risks and security threats</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Alert ID</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Vendor/Entity</TableHead>
                        <TableHead>Severity</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {riskAlerts.map((alert) => (
                        <TableRow key={alert.id}>
                          <TableCell className="font-medium">{alert.id}</TableCell>
                          <TableCell>{alert.type}</TableCell>
                          <TableCell className="max-w-xs">{alert.description}</TableCell>
                          <TableCell>{alert.vendor}</TableCell>
                          <TableCell>
                            <Badge className={getSeverityColor(alert.severity)}>
                              {alert.severity.toUpperCase()}
                            </Badge>
                          </TableCell>
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

          <TabsContent value="safety">
            <Card>
              <CardHeader>
                <CardTitle>Safety Checks & Audits</CardTitle>
                <CardDescription>Track safety compliance and automated checks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Safety Check</TableHead>
                        <TableHead>Total Vendors</TableHead>
                        <TableHead>Passed</TableHead>
                        <TableHead>Failed</TableHead>
                        <TableHead>Success Rate</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {safetyChecks.map((check, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{check.check}</TableCell>
                          <TableCell>{check.vendors}</TableCell>
                          <TableCell className="text-green-600">{check.passed}</TableCell>
                          <TableCell className="text-red-600">{check.failed}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Progress 
                                value={(check.passed / check.vendors) * 100} 
                                className="h-2 w-16" 
                              />
                              <span className="text-sm">
                                {Math.round((check.passed / check.vendors) * 100)}%
                              </span>
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
        </Tabs>
      </div>
    </Layout>
  );
};

export default QualitySafety;
