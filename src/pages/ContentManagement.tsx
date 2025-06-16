
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
import { FileText, Image, HelpCircle, Megaphone, Plus, Edit, Eye } from 'lucide-react';
import StatusBadge from '@/components/common/StatusBadge';

const ContentManagement = () => {
  const [banners] = useState([
    { id: 'BAN-001', title: 'Summer Special Offer', type: 'Promotional', status: 'active', views: 12500, clicks: 890 },
    { id: 'BAN-002', title: 'New Vendor Welcome', type: 'Onboarding', status: 'active', views: 8200, clicks: 340 },
    { id: 'BAN-003', title: 'Maintenance Notice', type: 'Announcement', status: 'inactive', views: 5600, clicks: 120 },
    { id: 'BAN-004', title: 'Holiday Hours', type: 'Information', status: 'scheduled', views: 0, clicks: 0 },
  ]);

  const [faqItems] = useState([
    { id: 'FAQ-001', question: 'How do I track my order?', category: 'Orders', views: 2340, helpful: 89 },
    { id: 'FAQ-002', question: 'What are the delivery fees?', category: 'Pricing', views: 1890, helpful: 92 },
    { id: 'FAQ-003', question: 'How to become a vendor?', category: 'Vendor', views: 1560, helpful: 85 },
    { id: 'FAQ-004', question: 'Payment methods accepted', category: 'Payments', views: 1220, helpful: 88 },
  ]);

  const [helpArticles] = useState([
    { id: 'ART-001', title: 'Getting Started Guide', category: 'Onboarding', status: 'published', views: 4500 },
    { id: 'ART-002', title: 'Vendor Guidelines', category: 'Vendor', status: 'published', views: 3200 },
    { id: 'ART-003', title: 'Delivery Partner Manual', category: 'Delivery', status: 'draft', views: 0 },
    { id: 'ART-004', title: 'Safety Protocols', category: 'Safety', status: 'review', views: 1800 },
  ]);

  const [promotionalContent] = useState([
    { id: 'PROMO-001', title: 'Weekly Newsletter', type: 'Email', status: 'sent', recipients: 15000, opens: 8500 },
    { id: 'PROMO-002', title: 'Push Notification Campaign', type: 'Push', status: 'scheduled', recipients: 25000, opens: 0 },
    { id: 'PROMO-003', title: 'Social Media Post', type: 'Social', status: 'draft', recipients: 0, opens: 0 },
    { id: 'PROMO-004', title: 'SMS Campaign', type: 'SMS', status: 'active', recipients: 12000, opens: 9600 },
  ]);

  const getStatusBadgeVariant = (status) => {
    const variants = {
      'active': 'success',
      'inactive': 'error',
      'scheduled': 'pending',
      'published': 'success',
      'draft': 'pending',
      'review': 'pending',
      'sent': 'success'
    };
    return variants[status] || 'pending';
  };

  return (
    <Layout title="Content Management">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Content Management</h1>
            <p className="text-muted-foreground">Manage app content, banners, help documentation, and promotional materials</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus size={16} />
            Create Content
          </Button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Active Banners</CardDescription>
              <Megaphone size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Currently displayed</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>FAQ Articles</CardDescription>
              <HelpCircle size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">Published articles</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Help Documents</CardDescription>
              <FileText size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">Total documents</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>Promotions</CardDescription>
              <Image size={16} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">Active campaigns</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="banners" className="w-full">
          <TabsList>
            <TabsTrigger value="banners">App Banners</TabsTrigger>
            <TabsTrigger value="faq">FAQ Management</TabsTrigger>
            <TabsTrigger value="help">Help Articles</TabsTrigger>
            <TabsTrigger value="promotions">Promotional Content</TabsTrigger>
          </TabsList>

          <TabsContent value="banners">
            <Card>
              <CardHeader>
                <CardTitle>App Banners & Announcements</CardTitle>
                <CardDescription>Manage promotional banners and system announcements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Banner Title</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Views</TableHead>
                        <TableHead>Clicks</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {banners.map((banner) => (
                        <TableRow key={banner.id}>
                          <TableCell className="font-medium">{banner.title}</TableCell>
                          <TableCell>{banner.type}</TableCell>
                          <TableCell>
                            <StatusBadge status={getStatusBadgeVariant(banner.status)} />
                          </TableCell>
                          <TableCell>{banner.views.toLocaleString()}</TableCell>
                          <TableCell>{banner.clicks}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-1">
                              <Button variant="ghost" size="sm">
                                <Eye size={16} />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit size={16} />
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

          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>FAQ Management</CardTitle>
                <CardDescription>Manage frequently asked questions and answers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Question</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Views</TableHead>
                        <TableHead>Helpful %</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {faqItems.map((faq) => (
                        <TableRow key={faq.id}>
                          <TableCell className="font-medium">{faq.question}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{faq.category}</Badge>
                          </TableCell>
                          <TableCell>{faq.views}</TableCell>
                          <TableCell>{faq.helpful}%</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-1">
                              <Button variant="ghost" size="sm">
                                <Eye size={16} />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit size={16} />
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

          <TabsContent value="help">
            <Card>
              <CardHeader>
                <CardTitle>Help Documentation</CardTitle>
                <CardDescription>Manage user guides and help articles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Article Title</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Views</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {helpArticles.map((article) => (
                        <TableRow key={article.id}>
                          <TableCell className="font-medium">{article.title}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{article.category}</Badge>
                          </TableCell>
                          <TableCell>
                            <StatusBadge status={getStatusBadgeVariant(article.status)} />
                          </TableCell>
                          <TableCell>{article.views}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-1">
                              <Button variant="ghost" size="sm">
                                <Eye size={16} />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit size={16} />
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

          <TabsContent value="promotions">
            <Card>
              <CardHeader>
                <CardTitle>Promotional Content</CardTitle>
                <CardDescription>Manage marketing campaigns and promotional materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Campaign Title</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Recipients</TableHead>
                        <TableHead>Opens</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {promotionalContent.map((promo) => (
                        <TableRow key={promo.id}>
                          <TableCell className="font-medium">{promo.title}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{promo.type}</Badge>
                          </TableCell>
                          <TableCell>
                            <StatusBadge status={getStatusBadgeVariant(promo.status)} />
                          </TableCell>
                          <TableCell>{promo.recipients.toLocaleString()}</TableCell>
                          <TableCell>{promo.opens.toLocaleString()}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-1">
                              <Button variant="ghost" size="sm">
                                <Eye size={16} />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit size={16} />
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
        </Tabs>
      </div>
    </Layout>
  );
};

export default ContentManagement;
