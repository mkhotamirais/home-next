export const SkeletonContact = () => {
  return (
    <div className="animate-pulse">
      <div className="border rounded">
        <div className="h-4 w-4 rounded-full bg-gray-100"></div>
        <div className="h-4 w-8 rounded-full bg-gray-100"></div>
        <div className="h-4 w-12 rounded-full bg-gray-100"></div>
        <div className="h-4 w-16 rounded-full bg-gray-100"></div>
        <div>
          <div className="h-4 w-4 rounded-full bg-gray-100"></div>
          <div className="h-4 w-4 rounded-full bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
};
