
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Home,
  Users,
  Package,
  Wallet,
  Calendar,
  Settings,
  Menu,
  BarChart,
  FileKey,
  MessageSquare,
  ChevronLeft
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

type NavItemProps = {
  to: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  isCollapsed: boolean;
  onClick?: () => void;
};

const NavItem = ({ to, icon: Icon, label, isActive, isCollapsed, onClick }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        'flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200',
        isActive
          ? 'bg-primary text-primary-foreground'
          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
      )}
      onClick={onClick}
    >
      <Icon size={20} className="min-w-[20px]" />
      {!isCollapsed && (
        <span className="animate-in slide-in-from-left duration-300">{label}</span>
      )}
    </Link>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const { theme } = useTheme();

  // Check if viewport is mobile
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Auto-collapse sidebar on mobile
  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  // Close mobile sidebar when navigating
  const handleNavigation = () => {
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const navItems = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/users', icon: Users, label: 'User Management' },
    { to: '/orders', icon: Package, label: 'Orders & Delivery' },
    { to: '/wallet', icon: Wallet, label: 'Wallet & Transactions' },
    { to: '/disputes', icon: Users, label: 'Dispute Resolution' },
    { to: '/marketplace', icon: Calendar, label: 'Marketplace' },
    { to: '/reports', icon: BarChart, label: 'Analytics & Reports' },
    { to: '/messages', icon: MessageSquare, label: 'Messaging' },
    { to: '/audit', icon: FileKey, label: 'Audit Logs' },
    { to: '/settings', icon: Settings, label: 'Platform Settings' },
  ];

  const sidebarClasses = cn(
    'fixed left-0 top-0 bottom-0 flex flex-col transition-all duration-300 ease-in-out z-40 border-r',
    {
      'w-64': !isCollapsed && !isMobile,
      'w-16': isCollapsed && !isMobile,
      'w-64 transform': isMobile,
      'translate-x-0': mobileOpen && isMobile,
      '-translate-x-full': !mobileOpen && isMobile,
      'bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800': theme === 'light' || theme === 'dark',
    }
  );

  const overlayClasses = cn(
    'fixed inset-0 z-30 bg-black/50 transition-opacity',
    mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
  );

  return (
    <>
      {/* Mobile overlay */}
      <div className={overlayClasses} onClick={() => setMobileOpen(false)}></div>
      
      {/* Mobile toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          'fixed top-3 left-3 md:hidden z-50 transition-all duration-300',
          mobileOpen ? 'left-[248px]' : 'left-3'
        )}
        onClick={toggleSidebar}
      >
        <Menu size={20} />
      </Button>

      <aside className={sidebarClasses}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b">
          {!isCollapsed && (
            <div className="text-sidebar-foreground font-semibold text-xl">Admin Portal</div>
          )}
          <button
            onClick={toggleSidebar}
            className={cn(
              "text-sidebar-foreground hover:text-sidebar-primary p-1 rounded-md transition-all",
              isCollapsed && !isMobile ? "mx-auto" : "ml-auto"
            )}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <ChevronLeft size={20} className={cn(
              "transition-transform duration-300",
              isCollapsed && "rotate-180"
            )} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              isActive={
                item.to === '/' ? pathname === '/' : pathname.startsWith(item.to)
              }
              isCollapsed={isCollapsed}
              onClick={handleNavigation}
            />
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t">
          {!isCollapsed && (
            <div className="text-sidebar-foreground text-xs">
              <div>Admin Portal v1.0</div>
              <div className="mt-1">© 2025 Your Company</div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
