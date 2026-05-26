import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer
      className="py-8 text-center"
      style={{
        background: '#050505',
        borderTop: '1px solid rgba(0,209,193,0.08)',
      }}
    >
      <motion.p
        className="text-sm"
        style={{ color: '#A7B0BA' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        © 2026{' '}
        <span className="font-semibold text-white">Nico Vergés Redón</span>
        {' '}—{' '}
        <span style={{ color: '#00D1C1' }}>Portfolio Emprendedor (2023-2026)</span>
      </motion.p>
    </footer>
  );
}
