export const ProductdetailSkeletonCard = () => (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-32 py-24">
        <div className="h-6 bg-gray-200 rounded w-32 mb-4 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
      </div>
    </header>
    <main className="max-w-5xl mx-auto px-32 py-40">
      <div className="space-y-32">
        <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
        <div className="h-64 bg-white border border-gray-200 rounded-lg animate-pulse"></div>
        <div className="h-96 bg-white border border-gray-200 rounded-lg animate-pulse"></div>
      </div>
    </main>
  </div>
);
