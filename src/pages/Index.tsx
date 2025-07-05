
import { useState, useMemo } from 'react';
import { Database, User, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockLenders } from '@/data/mockLenders';
import { Lender } from '@/types/lender';
import LenderCard from '@/components/LenderCard';
import LenderDetails from '@/components/LenderDetails';
import SearchFilters from '@/components/SearchFilters';
import StatsOverview from '@/components/StatsOverview';
import PersonalizedMatches from '@/components/PersonalizedMatches';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [aprFilter, setAprFilter] = useState('all');
  const [selectedLender, setSelectedLender] = useState<Lender | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const filteredLenders = useMemo(() => {
    return mockLenders.filter(lender => {
      const matchesSearch = lender.lender_name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || lender.status === statusFilter;
      
      let matchesApr = true;
      if (aprFilter !== 'all') {
        const minApr = parseFloat(lender.rate_card.apr_range.split(' - ')[0].replace('%', ''));
        switch (aprFilter) {
          case 'low':
            matchesApr = minApr < 8;
            break;
          case 'medium':
            matchesApr = minApr >= 8 && minApr <= 12;
            break;
          case 'high':
            matchesApr = minApr > 12;
            break;
        }
      }
      
      return matchesSearch && matchesStatus && matchesApr;
    });
  }, [searchTerm, statusFilter, aprFilter]);

  const handleViewDetails = (lender: Lender) => {
    setSelectedLender(lender);
    setIsDetailsOpen(true);
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(filteredLenders, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `auto-loan-lenders-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast.success('Lender data exported successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <CreditCard className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Qualifi AI Auto Loan Research Platform
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Comprehensive auto loan data extraction and comparison platform for major US lenders. 
            Powering intelligent matching and prequalification workflows.
          </p>
          
          {/* Auth Actions */}
          <div className="flex justify-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-green-600">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{user.email}</span>
                </div>
                <Button asChild>
                  <a href="/profile">View Profile</a>
                </Button>
              </div>
            ) : (
              <div className="space-x-4">
                <Button asChild>
                  <a href="/auth">Get Started</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/auth">Sign In</a>
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Personalized Matches for Authenticated Users */}
        {user && (
          <div className="mb-12">
            <PersonalizedMatches />
          </div>
        )}

        {/* Stats Overview */}
        <StatsOverview lenders={mockLenders} />

        {/* Search and Filters */}
        <SearchFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          aprFilter={aprFilter}
          onAprFilterChange={setAprFilter}
          onExport={handleExport}
          resultCount={filteredLenders.length}
        />

        {/* Lender Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLenders.map((lender) => (
            <LenderCard
              key={lender.id}
              lender={lender}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {filteredLenders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Database className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No lenders found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}

        {/* Lender Details Modal */}
        <LenderDetails
          lender={selectedLender}
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
        />
      </div>
    </div>
  );
};

export default Index;
