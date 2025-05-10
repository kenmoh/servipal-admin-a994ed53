
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  BarChart2,
  Calendar,
  CreditCard,
  FileText,
  Gavel,
  Home,
  LogIn,
  MessageSquare,
  Package,
  Settings,
  Users,
  Menu,
  X
} from 'lucide-react';

type NavItemProps = {
  to: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  onClick?: () => void;
};

const NavItem = ({ to, icon: Icon, label, isActive, onClick }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        'flex items-center gap-3 px-3 py-2 rounded-md transition-colors',
        isActive
          ? 'bg-sidebar-primary text-sidebar-primary-foreground'
          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
      )}
      onClick={onClick}
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/users', icon: Users, label: 'User Management' },
    { to: '/orders', icon: Package, label: 'Orders & Delivery' },
    { to: '/wallet', icon: CreditCard, label: 'Wallet & Transactions' },
    { to: '/disputes', icon: Gavel, label: 'Dispute Resolution' },
    { to: '/marketplace', icon: Calendar, label: 'Marketplace' },
    { to: '/reports', icon: BarChart2, label: 'Analytics & Reports' },
    { to: '/messages', icon: MessageSquare, label: 'Messaging' },
    { to: '/audit', icon: LogIn, label: 'Audit Logs' },
    { to: '/settings', icon: Settings, label: 'Platform Settings' },
  ];

  return (
    <aside
      className={cn(
        'bg-sidebar h-screen flex flex-col border-r transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b">
        {!isCollapsed && (
          <div className="text-sidebar-foreground font-semibold text-xl">Admin Portal</div>
        )}
        <button
          onClick={toggleSidebar}
          className="text-sidebar-foreground hover:text-sidebar-primary p-2 rounded-md"
        >
          {isCollapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>

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
            onClick={isCollapsed ? toggleSidebar : undefined}
          />
        ))}
      </nav>

      <div className="p-4 border-t">
        {!isCollapsed && (
          <div className="text-sidebar-foreground text-xs">
            <div>Admin Portal v1.0</div>
            <div className="mt-1">© 2025 Your Company</div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
