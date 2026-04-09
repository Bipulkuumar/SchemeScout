const Skeleton = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 flex flex-col gap-4 h-full overflow-hidden relative">
      {/* Shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent z-10" />
      
      {/* Top bar placeholder */}
      <div className="h-1 w-full bg-slate-100 rounded-full" />

      {/* Tags */}
      <div className="flex gap-2">
        <div className="h-5 w-16 bg-slate-100 rounded-full" />
        <div className="h-5 w-20 bg-slate-100 rounded-full" />
      </div>

      {/* Title */}
      <div className="h-6 w-3/4 bg-slate-100 rounded-lg" />

      {/* Description lines */}
      <div className="space-y-2 flex-grow">
        <div className="h-3.5 w-full bg-slate-100 rounded" />
        <div className="h-3.5 w-5/6 bg-slate-100 rounded" />
      </div>

      {/* Deadline box */}
      <div className="h-11 w-full bg-slate-100 rounded-xl" />

      {/* Action buttons */}
      <div className="flex gap-3 mt-auto">
        <div className="h-10 flex-1 bg-slate-100 rounded-xl" />
        <div className="h-10 flex-1 bg-slate-100 rounded-xl" />
      </div>
    </div>
  );
};

export default Skeleton;
