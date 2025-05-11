
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import PolicyForm from '@/components/settings/PolicyForm';

const Policies = () => {
  const [activeTab, setActiveTab] = useState('terms');
  
  const policyTypes = {
    terms: {
      title: 'Terms of Service',
      description: 'Platform terms of service and user agreements',
      defaultContent: `# Terms of Service\n\nEffective Date: May 11, 2025\n\n## 1. Introduction\n\nWelcome to our platform. By accessing or using our services, you agree to be bound by these Terms of Service.`
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'Data handling and user privacy guidelines',
      defaultContent: `# Privacy Policy\n\nEffective Date: May 11, 2025\n\n## 1. Information Collection\n\nWe collect information in the following ways: information you provide to us, information we collect from your use of our services.`
    },
    payment: {
      title: 'Payment Policy',
      description: 'Transaction fees and payment processing guidelines',
      defaultContent: `# Payment Policy\n\nEffective Date: May 11, 2025\n\n## 1. Payment Methods\n\nWe accept the following payment methods: Credit/Debit Cards, Mobile Money, Bank Transfers.`
    },
    refund: {
      title: 'Refund Policy',
      description: 'Return, refund, and cancellation policies',
      defaultContent: `# Refund Policy\n\nEffective Date: May 11, 2025\n\n## 1. Refund Eligibility\n\nRefunds are processed based on the following criteria: order status, time since purchase, and product condition.`
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Policy Management</CardTitle>
        <CardDescription>
          Create and manage platform policies, terms of service, and legal documents
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="terms">Terms of Service</TabsTrigger>
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            <TabsTrigger value="payment">Payment Policy</TabsTrigger>
            <TabsTrigger value="refund">Refund Policy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="terms">
            <PolicyForm 
              policyType="Terms of Service" 
              defaultValues={{
                title: policyTypes.terms.title,
                content: policyTypes.terms.defaultContent,
                version: '1.0',
                effectiveDate: new Date().toISOString().split('T')[0],
                isPublished: true,
              }}
            />
          </TabsContent>
          
          <TabsContent value="privacy">
            <PolicyForm 
              policyType="Privacy Policy" 
              defaultValues={{
                title: policyTypes.privacy.title,
                content: policyTypes.privacy.defaultContent,
                version: '1.0',
                effectiveDate: new Date().toISOString().split('T')[0],
                isPublished: true,
              }}
            />
          </TabsContent>
          
          <TabsContent value="payment">
            <PolicyForm 
              policyType="Payment Policy" 
              defaultValues={{
                title: policyTypes.payment.title,
                content: policyTypes.payment.defaultContent,
                version: '1.0',
                effectiveDate: new Date().toISOString().split('T')[0],
                isPublished: true,
              }}
            />
          </TabsContent>
          
          <TabsContent value="refund">
            <PolicyForm 
              policyType="Refund Policy" 
              defaultValues={{
                title: policyTypes.refund.title,
                content: policyTypes.refund.defaultContent,
                version: '1.0',
                effectiveDate: new Date().toISOString().split('T')[0],
                isPublished: false,
              }}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Policies;
