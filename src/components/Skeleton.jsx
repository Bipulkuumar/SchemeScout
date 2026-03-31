const Skeleton = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 animate-pulse grow h-full flex flex-col gap-4">
      <div className="flex gap-2 mb-2">
        <div className="h-6 w-20 bg-slate-200 rounded-full"></div>
        <div className="h-6 w-24 bg-slate-200 rounded-full"></div>
      </div>
      <div className="h-7 w-3/4 bg-slate-200 rounded-lg"></div>
      
      <div className="space-y-2 flex-grow mt-2">
        <div className="h-4 w-full bg-slate-200 rounded"></div>
        <div className="h-4 w-full bg-slate-200 rounded"></div>
        <div className="h-4 w-5/6 bg-slate-200 rounded"></div>
      </div>

      <div className="h-10 w-48 bg-slate-200 rounded-lg my-4"></div>

      <div className="flex gap-3 mt-auto">
        <div className="h-12 flex-1 bg-slate-200 rounded-xl"></div>
        <div className="h-12 flex-1 bg-slate-200 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Skeleton;
