import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  AlertCircle,
  FileText,
  Calendar,
  Building2,
  CheckCircle,
} from 'lucide-react';

import { ProductdetailSkeletonCard } from '../Components/ProductdetailSkeletonCard';

// Mock product detail data
const mockProductDetail = {
  id: 1,
  name: 'High-Performance Concrete Mix HPC-450',
  category: 'Construction Materials',
  producer: 'BuildCore Materials Ltd.',
  producerContact: 'disclosures@buildcore.com',
  status: 'published',
  disclosureDate: '2025-01-08',
  lastUpdated: '2025-01-08',
  evidenceAttached: true,
  evidenceCount: 3,
  description:
    'A high-performance concrete mixture designed for structural applications requiring superior strength and durability. This product meets industry standards for commercial and industrial construction projects.',
  versionHistory: [
    {
      version: '2.0',
      date: '2025-01-08',
      status: 'published',
      description:
        'Disclosure updated by producer with revised technical specifications and additional environmental data.',
    },
    {
      version: '1.1',
      date: '2024-11-15',
      status: 'published',
      description:
        'Minor corrections to composition data and updated supplier information.',
    },
    {
      version: '1.0',
      date: '2024-09-22',
      status: 'published',
      description: 'Initial product disclosure submitted by producer.',
    },
  ],
  technicalData: {
    composition:
      'Portland cement, aggregates, supplementary cementitious materials',
    compressiveStrength: '450 MPa (28 days)',
    applications: 'High-rise buildings, bridges, industrial structures',
  },
};

const ProductDetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const product = mockProductDetail;

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <ProductdetailSkeletonCard />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <button
        className="fixed left-4 top-5 flex items-center gap-8 text-sm text-slate-600 hover:text-slate-900 mb-16 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-5 py-5"
        onClick={() => window.history.back()}
      >
        <ArrowLeft size={16} />
        Back to Product List
      </button>
      <main className="max-w-5xl mx-auto px-32 py-36">
        <div className="mb-20">
          <div className="flex items-start justify-between mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 leading-tight pr-24">
              {product.name}
            </h2>
            <span
              className={`px-12 py-6 rounded-full text-xs font-semibold border flex-shrink-0 ${getStatusStyles(
                product.status
              )}`}
            >
              {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
            </span>
          </div>
          <p className="text-lg text-gray-800 mb-16 font-semibold">
            {product.category}
          </p>
          {product.description && (
            <p className="text-base text-gray-700 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-12 mb-20">
          <div className="flex items-start gap-8">
            <AlertCircle
              className="text-amber-700 flex-shrink-0 mt-1"
              size={22}
            />
            <div>
              <p className="text-base font-medium text-amber-900 mb-6">
                Important Disclosure Notice
              </p>
              <p className="text-base text-amber-800 leading-relaxed">
                This page presents producer-declared information. It is not
                certification or verification. All data shown has been provided
                by the producer and has not been independently validated.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-white border border-gray-200 rounded-lg p-20 mb-20">
          <h3 className="text-xl font-semibold text-gray-900 mb-14">
            Disclosure Summary
          </h3>

          <div className="space-y-10">
            <div className="flex items-start">
              <Building2
                className="text-gray-400 mt-2 mr-16 flex-shrink-0"
                size={24}
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 mb-4">
                  Declared by
                </p>
                <p className="text-base font-medium text-gray-900">
                  {product.producer}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  {product.producerContact}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100"></div>

            <div className="flex items-start">
              <Calendar
                className="text-gray-400 mt-2 mr-16 flex-shrink-0"
                size={24}
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 mb-4">
                  Disclosure Date
                </p>
                <p className="text-base font-medium text-gray-900">
                  {formatDate(product.disclosureDate)}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Last updated: {formatDate(product.lastUpdated)}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100"></div>

            {/* Evidence Attached */}
            <div className="flex items-start">
              <FileText
                className="text-gray-400 mt-2 mr-16 flex-shrink-0"
                size={24}
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 mb-4">
                  Evidence Attached
                </p>
                {product.evidenceAttached ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600" size={16} />
                    <p className="text-sm font-medium text-gray-900">
                      Yes ({product.evidenceCount}{' '}
                      {product.evidenceCount === 1 ? 'document' : 'documents'})
                    </p>
                  </div>
                ) : (
                  <p className="text-base font-medium text-gray-900">No</p>
                )}
                <p className="text-sm text-gray-600 mt-4">
                  Supporting documentation provided by producer
                </p>
              </div>
            </div>
          </div>
        </section>

        {product.technicalData && (
          <section className="bg-white border border-gray-200 rounded-lg p-20 mb-20">
            <h3 className="text-xl font-semibold text-gray-900 mb-12">
              Technical Information
            </h3>
            <div className="space-y-10">
              <div>
                <p className="text-base font-medium text-gray-800 mb-5">
                  Composition
                </p>
                <p className="text-sm text-gray-700">
                  {product.technicalData.composition}
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-gray-800 mb-6">
                  Compressive Strength
                </p>
                <p className="text-sm text-gray-700">
                  {product.technicalData.compressiveStrength}
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-gray-800 mb-6">
                  Typical Applications
                </p>
                <p className="text-sm text-gray-700">
                  {product.technicalData.applications}
                </p>
              </div>
            </div>
            <div className="mt-16 pt-10 border-t border-gray-100">
              <p className="text-sm text-gray-500 italic">
                Information provided by producer
              </p>
            </div>
          </section>
        )}

        <section className="bg-white border border-gray-200 rounded-lg p-20 mb-20">
          <h3 className="text-xl font-semibold text-gray-900 mb-14">
            Version History
          </h3>

          <div className="space-y-8">
            {product.versionHistory.map((version, index) => (
              <div key={index} className="relative">
                <div className="flex items-start border-b">
                  <div className="flex flex-col items-center mr-10">
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                        version.status === 'published'
                          ? 'bg-blue-100 border-blue-300'
                          : version.status === 'submitted'
                          ? 'bg-amber-100 border-amber-300'
                          : 'bg-gray-100 border-gray-300'
                      }`}
                    ></div>
                    {index < product.versionHistory.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 mt-8"></div>
                    )}
                  </div>

                  <div className="flex-1 pb-6 ">
                    <div className="flex items-start gap-12 mb-8 ">
                      <p className="text-sm font-semibold text-gray-900">
                        Version {version.version}
                      </p>
                      <span
                        className={`px-8 py-3 -mt-3 rounded-full text-xs font-semibold border ${getStatusStyles(
                          version.status
                        )}`}
                      >
                        {version.status.charAt(0).toUpperCase() +
                          version.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-4 ">
                      {formatDate(version.date)}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {version.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-5 border-gray-100">
            <p className="text-sm text-gray-600">
              All versions represent producer-reported information at the time
              of submission.
            </p>
          </div>
        </section>

        <div className="mt-20 pt-20 border-t border-gray-300">
          <div className="flex items-start gap-12 max-w-4xl mx-auto">
            <AlertCircle
              className="text-slate-600 flex-shrink-0 mt-1"
              size={22}
            />
            <div>
              <p className="text-base font-medium text-gray-900 mb-4">
                Platform Disclaimer
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Hedamo displays producer-declared information only. This
                platform does not verify, certify, validate, or endorse any
                claims. Users should conduct their own due diligence when
                evaluating product information.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;
