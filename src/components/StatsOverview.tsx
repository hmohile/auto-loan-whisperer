
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Database, CheckCircle, AlertTriangle } from 'lucide-react';
import { Lender } from '@/types/lender';

interface StatsOverviewProps {
  lenders: Lender[];
}

const StatsOverview = ({ lenders }: StatsOverviewProps) => {
  const activeLenders = lenders.filter(l => l.status === 'active').length;
  const pendingLenders = lenders.filter(l => l.status === 'pending').length;
  const errorLenders = lenders.filter(l => l.status === 'error').length;
  
  const avgApr = lenders.reduce((sum, lender) => {
    const aprRange = lender.rate_card.apr_range;
    const minApr = parseFloat(aprRange.split(' - ')[0].replace('%', ''));
    return sum + minApr;
  }, 0) / lenders.length;

  const stats = [
    {
      title: 'Total Lenders',
      value: lenders.length,
      icon: Database,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Active Lenders',
      value: activeLenders,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Avg Min APR',
      value: `${avgApr.toFixed(2)}%`,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Issues',
      value: pendingLenders + errorLenders,
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${stat.color}`}>
              {stat.value}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsOverview;
