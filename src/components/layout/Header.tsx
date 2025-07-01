
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { Button } from '@/components/ui/button';
import { Bell, ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const [notifications] = useState([
    { id: 1, message: 'New dispute filed: #DSP-054', time: '2 min ago' },
    { id: 2, message: 'Order #ORD-123 has been completed', time: '15 min ago' },
    { id: 3, message: 'New user registration: John Doe', time: '1 hour ago' }
  ]);
  
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();
  
  // Format path to readable title
  const formatPathname = (pathname: string) => {
    if (pathname === '/') return 'Dashboard';
    return pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
  };

  return (
    <header className="border-b border-border/30 px-4 md:px-6 py-3 flex justify-between items-center bg-background sticky top-0 z-20">
      <div className="flex items-center">
        <h1 className="text-xl md:text-2xl font-semibold">{title || formatPathname(location.pathname)}</h1>
      </div>
      <div className="flex items-center gap-2 md:gap-3">
        <ThemeSwitcher />
        <div className="relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full relative" 
            onClick={() => setShowNotifications(true)}
          >
            <Bell className="h-5 w-5" />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center animate-pulse">
                {notifications.length}
              </span>
            )}
          </Button>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 hover:bg-muted/50">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                A
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@example.com</p>
              </div>
              <ChevronDown className="h-4 w-4 hidden md:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      {/* Notifications Sheet */}
      <Sheet open={showNotifications} onOpenChange={setShowNotifications}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Notifications</SheetTitle>
            <SheetDescription>Recent updates and alerts</SheetDescription>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            {notifications.map(notification => (
              <div key={notification.id} className="p-3 bg-muted/40 rounded-lg border border-border/20">
                <p className="text-sm font-medium">{notification.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
              </div>
            ))}
            
            <Button variant="outline" className="w-full mt-4 border-border/30">View all notifications</Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
