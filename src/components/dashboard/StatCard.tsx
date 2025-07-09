
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    positive: boolean;
  };
  className?: string;
}

const StatCard = ({ title, value, icon, trend, className }: StatCardProps) => {
  return (
    <Card className={cn('dashboard-card overflow-hidden', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && (
          <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tracking-tight">{value}</div>
        {trend && (
          <p className={`text-xs mt-2 flex items-center gap-1 ${
            trend.positive ? 'text-emerald-600' : 'text-red-500'
          }`}>
            <span className="font-medium">
              {trend.positive ? '↗' : '↘'} {Math.abs(trend.value)}%
            </span>
            <span className="text-muted-foreground">from last month</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
