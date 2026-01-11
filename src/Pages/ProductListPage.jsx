import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductSkeletonCard } from '../Components/ProductSkeletonCard';

// Mock data
const mockProducts = [
  {
    id: 1,
    name: 'High-Performance Concrete Mix HPC-450',
    category: 'Construction Materials',
    producer: 'BuildCore Materials Ltd.',
    status: 'published',
    lastUpdated: '2025-01-08',
  },
  {
    id: 2,
    name: 'Medical-Grade Silicone Tubing MST-200',
    category: 'Medical Supplies',
    producer: 'MediTech Solutions',
    status: 'submitted',
    lastUpdated: '2025-01-05',
  },
  {
    id: 3,
    name: 'Recycled Polyester Fabric RPF-300',
    category: 'Textiles',
    producer: 'EcoTextile Industries',
    status: 'published',
    lastUpdated: '2025-01-03',
  },
  {
    id: 4,
    name: 'Industrial Adhesive Compound IAC-750',
    category: 'Chemicals',
    producer: 'ChemCore International',
    status: 'draft',
    lastUpdated: '2024-12-28',
  },
  {
    id: 5,
    name: 'Corrugated Packaging Board CPB-120',
    category: 'Packaging Materials',
    producer: 'PackSolutions Group',
    status: 'published',
    lastUpdated: '2025-01-07',
  },
  {
    id: 6,
    name: 'Steel Reinforcement Bar SRB-16',
    category: 'Construction Materials',
    producer: 'Industrial Steel Works',
    status: 'submitted',
    lastUpdated: '2025-01-06',
  },
  {
    id: 7,
    name: 'Biodegradable Food Container BFC-500',
    category: 'Packaging Materials',
    producer: 'GreenPack Innovations',
    status: 'published',
    lastUpdated: '2025-01-02',
  },
  {
    id: 8,
    name: 'Antimicrobial Textile Coating ATC-100',
    category: 'Textiles',
    producer: 'TechFabric Solutions',
    status: 'draft',
    lastUpdated: '2024-12-20',
  },
];

const categories = [
  'All Categories',
  'Construction Materials',
  'Medical Supplies',
  'Textiles',
  'Chemicals',
  'Packaging Materials',
];
const statuses = ['All Statuses', 'Published', 'Submitted', 'Draft'];

const ProductListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');
  const [sortBy, setSortBy] = useState('updated');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = mockProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All Categories' ||
        product.category === selectedCategory;
      const matchesStatus =
        selectedStatus === 'All Statuses' ||
        product.status === selectedStatus.toLowerCase();
      return matchesSearch && matchesCategory && matchesStatus;
    });

    if (sortBy === 'alphabetical') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      filtered.sort(
        (a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedStatus, sortBy]);

  const getStatusStyles = (status) => {
    switch (status) {
      case 'published':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'submitted':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'draft':
        return 'bg-gray-200 text-gray-700 border-gray-300';
      default:
        return 'bg-gray-200 text-gray-700 border-gray-300';
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-32 py-20">
          <h1 className="text-5xl font-semibold text-gray-900 mb-4">Hedamo</h1>
          <p className="text-base text-gray-600">Product Disclosure Platform</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-32 py-20">
        <div className="mb-24">
          <h2 className="text-2xl font-semibold text-gray-900 mb-5">
            Product Disclosures
          </h2>
          <p className="text-base text-gray-600">
            Browse producer-declared product information
          </p>
        </div>

        <div className="mb-5">
          <label className="block text-base font-medium text-gray-700 mb-6">
            Search Products
          </label>
          <div className="relative">
            <Search
              className="absolute left-14 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Filter by product name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-44 pr-16 py-5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-16">
          <h3 className="text-base font-semibold text-gray-900 mb-5">
            Filters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-6">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-12 py-5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-6">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-12 py-5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-6">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-12 py-5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
              >
                <option value="updated">Last Updated (Newest First)</option>
                <option value="alphabetical">Alphabetical (A–Z)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <p className="text-sm text-gray-600">
            {filteredAndSortedProducts.length}{' '}
            {filteredAndSortedProducts.length === 1 ? 'product' : 'products'}{' '}
            found
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {[1, 2, 3, 4].map((i) => (
              <ProductSkeletonCard key={i} />
            ))}
          </div>
        ) : filteredAndSortedProducts.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg p-64 text-center">
            <Filter className="mx-auto mb-16 text-gray-400" size={48} />
            <p className="text-gray-700 text-base font-medium mb-8">
              No products match the selected filters.
            </p>
            <p className="text-gray-600 text-sm mb-24">
              Try adjusting your search criteria or clearing filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Categories');
                setSelectedStatus('All Statuses');
              }}
              className="px-20 py-3 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {filteredAndSortedProducts.map((product) => (
              <Link
                to={`/productdetails`}
                key={product.id}
                className="bg-white border border-gray-200 p-24 rounded-lg hover:border-slate-400 hover:shadow-md transition-all duration-200 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-slate-500"
                tabIndex={0}
                role="button"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-10 group-hover:text-slate-700 transition-colors leading-snug">
                  {product.name}
                </h3>

                <div className="text-sm text-gray-600 mb-20">
                  <span className="font-medium">{product.category}</span>
                  <span className="mx-6">•</span>
                  <span>{product.producer}</span>
                </div>

                <div className="border-t border-gray-100 pt-16 ">
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-12 py-6 rounded-full text-xs font-semibold border ${getStatusStyles(
                        product.status
                      )}`}
                    >
                      {product.status.charAt(0).toUpperCase() +
                        product.status.slice(1)}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      Updated {formatDate(product.lastUpdated)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-24 pt-24 border-t border-gray-300">
          <div className="flex items-start gap-12 max-w-4xl mx-auto">
            <AlertCircle
              className="text-slate-600 flex-shrink-0 mt-2"
              size={20}
            />
            <div>
              <p className="text-sm font-medium text-gray-900 mb-4">
                Important Notice
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                This platform displays producer-declared information. It does
                not constitute certification, verification, or endorsement of
                any claims made by producers.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductListPage;
