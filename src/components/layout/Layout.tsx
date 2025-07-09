
import { ReactNode } from 'react';
import Header from './Header';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar';

import { 
  Home, Users, Package, 
  Wallet, MessageSquare, 
  Settings, FileKey, 
  BarChart, Calendar,
  MapPin, DollarSign,
  FileText, Shield,
  Mail, Crown, UserCheck
} from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  const location = useLocation();

  const navItems = [
    { to: '/dashboard', icon: Home, label: 'Dashboard' },
    { to: '/users', icon: Users, label: 'User Management' },
    { to: '/orders', icon: Package, label: 'Orders & Delivery' },
    { to: '/wallet', icon: Wallet, label: 'Wallet & Transactions' },
    { to: '/disputes', icon: Users, label: 'Dispute Resolution' },
    { to: '/marketplace', icon: Calendar, label: 'Marketplace' },
    { to: '/analytics', icon: BarChart, label: 'Analytics & BI' },
    { to: '/service-areas', icon: MapPin, label: 'Service Areas' },
    { to: '/commission-fees', icon: DollarSign, label: 'Commission & Fees' },
    { to: '/content-management', icon: FileText, label: 'Content Management' },
    { to: '/quality-safety', icon: Shield, label: 'Quality & Safety' },
    { to: '/communications', icon: Mail, label: 'Communications' },
    { to: '/role-management', icon: Crown, label: 'Role Management' },
    { to: '/vendor-onboarding', icon: UserCheck, label: 'Vendor Onboarding' },
    { to: '/reports', icon: BarChart, label: 'Reports' },
    { to: '/messages', icon: MessageSquare, label: 'Messaging' },
    { to: '/audit', icon: FileKey, label: 'Audit Logs' },
    { to: '/settings', icon: Settings, label: 'Platform Settings' },
  ];

  return (
    <div className="min-h-screen flex w-full">
      <SidebarProvider defaultOpen={true}>
        <Sidebar collapsible="icon">
          <SidebarHeader className="flex items-center h-16 px-4">
            <div className="font-semibold text-xl">Admin Portal</div>
            <SidebarTrigger className="ml-auto" />
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = item.to === '/dashboard' 
                  ? location.pathname === '/' || location.pathname === '/dashboard'
                  : location.pathname.startsWith(item.to);
                
                return (
                  <SidebarMenuItem key={item.to}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={isActive}
                      tooltip={item.label}
                      onClick={(e) => {
                        // Prevent the default behavior that would open the sidebar
                        e.stopPropagation();
                      }}
                    >
                      <Link to={item.to}>
                        <item.icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter>
            <div className="p-4 text-xs text-sidebar-foreground group-data-[collapsible=icon]:hidden">
              <div>Admin Portal v1.0</div>
              <div className="mt-1">© 2025 Your Company</div>
            </div>
            <div className="hidden p-4 text-xs text-sidebar-foreground group-data-[collapsible=icon]:block group-data-[collapsible=icon]:text-center">
              <div>v1.0</div>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header title={title} />
          <main className="flex-1 overflow-y-auto dashboard-background">
            <div className="p-4 md:p-6 relative z-10">
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
