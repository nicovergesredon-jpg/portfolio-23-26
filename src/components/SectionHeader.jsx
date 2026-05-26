import { motion } from 'framer-motion';

export default function SectionHeader({ tag, title, subtitle, light = false }) {
  return (
    <motion.div
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {tag && (
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
          style={{
            color: '#00D1C1',
            background: 'rgba(0,209,193,0.1)',
            border: '1px solid rgba(0,209,193,0.2)',
          }}
        >
          {tag}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
        style={{ color: light ? '#071827' : '#ffffff' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: light ? '#4B5563' : '#A7B0BA' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
