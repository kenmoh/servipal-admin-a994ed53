
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { UserCheck, FileText, Clock, CheckCircle, XCircle, Eye, MessageSquare } from 'lucide-react';
import StatusBadge from '@/components/common/StatusBadge';

const VendorOnboarding = () => {
  const [applications] = useState([
    { 
      id: 'APP-001', 
      businessName: 'Quick Bites Restaurant', 
      applicantName: 'John Smith', 
      email: 'john@quickbites.com',
      type: 'Food Vendor', 
      submitted: '2024-01-10', 
      status: 'under_review', 
      progress: 75,
      documents: 4,
      requiredDocs: 5
    },
    { 
      id: 'APP-002', 
      businessName: 'Express Laundry Service', 
      applicantName: 'Sarah Johnson', 
      email: 'sarah@expresslaundry.com',
      type: 'Laundry Service', 
      submitted: '2024-01-12', 
      status: 'approved', 
      progress: 100,
      documents: 6,
      requiredDocs: 6
    },
    { 
      id: 'APP-003', 
      businessName: 'City Delivery Co', 
      applicantName: 'Mike Wilson', 
      email: 'mike@citydelivery.com',
      type: 'Delivery Service', 
      submitted: '2024-01-15', 
      status: 'rejected', 
      progress: 45,
      documents: 2,
      requiredDocs: 5
    },
    { 
      id: 'APP-004', 
      businessName: 'Fresh Market Store', 
      applicantName: 'Emma Davis', 
      email: 'emma@freshmarket.com',
      type: 'Marketplace Vendor', 
      submitted: '2024-01-16', 
      status: 'pending', 
      progress: 25,
      documents: 1,
      requiredDocs: 4
    },
  ]);

  const [workflowSteps] = useState([
    { step: 'Application Submitted', description: 'Initial application received', status: 'completed' },
    { step: 'Document Verification', description: 'Review business documents', status: 'in_progress' },
    { step: 'Background Check', description: 'Verify business credentials', status: 'pending' },
    { step: 'Interview/Assessment', description: 'Conduct business assessment', status: 'pending' },
    { step: 'Final Approval', description: 'Complete onboarding process', status: 'pending' },
  ]);

  const [verificationChecks] = useState([
    { check: 'Business License', required: true, status: 'verified', description: 'Valid business registration' },
    { check: 'Tax ID Number', required: true, status: 'verified', description: 'Government tax identification' },
    { check: 'Insurance Coverage', required: true, status: 'pending', description: 'Liability insurance proof' },
    { check: 'Health Permit', required: false, status: 'not_applicable', description: 'Food service permit' },
    { check: 'Bank Account Verification', required: true, status: 'failed', description: 'Valid business bank account' },
  ]);

  const [onboardingStats] = useState([
    { metric: 'Applications This Month', value: 24, change: '+18%' },
    { metric: 'Approval Rate', value: '78%', change: '+5%' },
    { metric: 'Avg Processing Time', value: '5.2 days', change: '-1.2 days' },
    { metric: 'Active Vendors', value: 156, change: '+12' },
  ]);

  const getStatusVariant = (status) => {
    const variants = {
      'under_review': 'pending',
      'approved': 'success',
      'rejected': 'error',
      'pending': 'pending',
      'completed': 'success',
      'in_progress': 'pending',
      'verified': 'success',
      'failed': 'error',
      'not_applicable': 'pending'
    };
    return variants[status] || 'pending';
  };

  const getTypeColor = (type) => {
    const colors = {
      'Food Vendor': 'bg-orange-100 text-orange-800',
      'Laundry Service': 'bg-blue-100 text-blue-800',
      'Delivery Service': 'bg-green-100 text-green-800',
      'Marketplace Vendor': 'bg-purple-100 text-purple-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Layout title="Vendor Onboarding Workflow">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Vendor Onboarding Workflow</h1>
          <p className="text-muted-foreground">Manage vendor applications, verification process, and approval workflow</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {onboardingStats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardDescription>{stat.metric}</CardDescription>
                <CardTitle className="text-2xl">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-green-600">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="applications" className="w-full">
          <TabsList>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="workflow">Workflow Steps</TabsTrigger>
            <TabsTrigger value="verification">Verification</TabsTrigger>
          </TabsList>

          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <CardTitle>Vendor Applications</CardTitle>
                <CardDescription>Review and manage vendor onboarding applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Application ID</TableHead>
                        <TableHead>Business Name</TableHead>
                        <TableHead>Applicant</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Submitted</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {applications.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell className="font-medium">{app.id}</TableCell>
                          <TableCell>
                            <div>
                              <div className="font-medium">{app.businessName}</div>
                              <div className="text-sm text-muted-foreground">{app.email}</div>
                            </div>
                          </TableCell>
                          <TableCell>{app.applicantName}</TableCell>
                          <TableCell>
                            <Badge className={getTypeColor(app.type)}>{app.type}</Badge>
                          </TableCell>
                          <TableCell>{app.submitted}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Progress value={app.progress} className="h-2 w-16" />
                              <span className="text-sm">{app.progress}%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <StatusBadge status={getStatusVariant(app.status)} />
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-1">
                              <Button variant="ghost" size="sm">
                                <Eye size={16} />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MessageSquare size={16} />
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

          <TabsContent value="workflow">
            <Card>
              <CardHeader>
                <CardTitle>Onboarding Workflow</CardTitle>
                <CardDescription>Standard workflow steps for vendor onboarding</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {workflowSteps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="flex-shrink-0">
                        {step.status === 'completed' && <CheckCircle className="h-6 w-6 text-green-600" />}
                        {step.status === 'in_progress' && <Clock className="h-6 w-6 text-yellow-600" />}
                        {step.status === 'pending' && <div className="h-6 w-6 rounded-full border-2 border-gray-300" />}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{step.step}</div>
                        <div className="text-sm text-muted-foreground">{step.description}</div>
                      </div>
                      <div>
                        <StatusBadge status={getStatusVariant(step.status)} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="verification">
            <Card>
              <CardHeader>
                <CardTitle>Document Verification</CardTitle>
                <CardDescription>Required documentation and verification status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Verification Check</TableHead>
                        <TableHead>Required</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {verificationChecks.map((check, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{check.check}</TableCell>
                          <TableCell>
                            {check.required ? (
                              <Badge variant="destructive">Required</Badge>
                            ) : (
                              <Badge variant="outline">Optional</Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            <StatusBadge status={getStatusVariant(check.status)} />
                          </TableCell>
                          <TableCell>{check.description}</TableCell>
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
        </Tabs>
      </div>
    </Layout>
  );
};

export default VendorOnboarding;
