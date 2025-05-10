
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const [notifications] = useState(3);
  const location = useLocation();
  
  // Format path to readable title
  const formatPathname = (pathname: string) => {
    if (pathname === '/') return 'Dashboard';
    return pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
  };

  return (
    <header className="border-b px-6 py-3 flex justify-between items-center bg-background">
      <h1 className="text-2xl font-semibold">{title || formatPathname(location.pathname)}</h1>
      <div className="flex items-center gap-3">
        <ThemeSwitcher />
        <div className="relative">
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {notifications}
              </span>
            )}
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            A
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@example.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
