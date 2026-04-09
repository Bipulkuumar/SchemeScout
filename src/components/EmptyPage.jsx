import { motion } from 'framer-motion';
import Button from './Button';

const EmptyPage = ({
  icon: Icon,
  title = 'Nothing here yet',
  description = 'Check back later or try adjusting your criteria.',
  actionLabel,
  onAction,
  actionIcon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-16 px-6 bg-white rounded-3xl border border-slate-100 shadow-sm"
    >
      {Icon && (
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
          <Icon className="w-10 h-10 text-slate-300" />
        </div>
      )}
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-500 max-w-md mx-auto mb-8 text-sm leading-relaxed">{description}</p>
      {actionLabel && (
        <Button
          variant="primary"
          size="lg"
          icon={actionIcon}
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </motion.div>
  );
};

export default EmptyPage;
