// components/UserCardSkeleton.tsx
export default function UserCardSkeleton() {
  return (
    <div className="animate-pulse flex space-x-4 p-4 bg-white rounded shadow w-[70%] m-auto">
      <div className="rounded-full bg-gray-300 w-16 h-16" />
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
}
