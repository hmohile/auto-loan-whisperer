
import { useState, useMemo } from 'react';
import { Database } from 'lucide-react';
import { mockLenders } from '@/data/mockLenders';
import { Lender } from '@/types/lender';
import LenderCard from '@/components/LenderCard';
import LenderDetails from '@/components/LenderDetails';
import SearchFilters from '@/components/SearchFilters';
import StatsOverview from '@/components/StatsOverview';
import { toast } from 'sonner';

const Index = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Qualifi AI Auto Loan Research Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive auto loan data extraction and comparison platform for major US lenders. 
            Powering intelligent matching and prequalification workflows.
          </p>
        </div>

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
