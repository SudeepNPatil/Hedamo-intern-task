export const ProductSkeletonCard = () => (
  <div className="bg-white border border-gray-200 rounded-lg p-24">
    <div className="animate-pulse">
      <div className="h-7 bg-gray-200 rounded w-3/4 mb-12"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-24"></div>
      <div className="border-t border-gray-100 pt-16">
        <div className="flex justify-between items-center">
          <div className="h-7 bg-gray-200 rounded-full w-24"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    </div>
  </div>
);
