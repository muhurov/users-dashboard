export const UserCardSkeleton = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm h-full">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4" />
          <div className="h-3 bg-gray-100 animate-pulse rounded w-1/2" />
        </div>
        <div className="w-16 h-5 bg-gray-100 animate-pulse rounded-full" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-50 pt-4">
        <div className="space-y-2">
          <div className="h-2 bg-gray-50 animate-pulse rounded w-1/2" />
          <div className="h-3 bg-gray-100 animate-pulse rounded w-3/4" />
        </div>
        <div className="space-y-2 text-right">
          <div className="h-2 bg-gray-50 animate-pulse rounded w-1/2 ml-auto" />
          <div className="h-3 bg-gray-100 animate-pulse rounded w-3/4 ml-auto" />
        </div>
      </div>
    </div>
  );
};
