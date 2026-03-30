import { Loader2 } from 'lucide-react';

const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-12">
      <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      <p className="text-slate-500 font-medium animate-pulse">{message}</p>
    </div>
  );
};

export default Loader;
