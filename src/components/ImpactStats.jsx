import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, DollarSign, Users, Globe, Award, Building2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { metrics } from '../data/portfolioData';

const iconMap = { TrendingUp, DollarSign, Users, Globe, Award, Building2 };

function StatCard({ metric, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState('0');

  useEffect(() => {
    if (inView) {
      // Just animate opacity — no numeric extraction to avoid misrepresenting formatted values
      setDisplayed(metric.value);
    }
  }, [inView, metric.value]);

  const Icon = iconMap[metric.icon];

  return (
    <motion.div
      ref={ref}
      className="p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-200"
      style={{
        background: 'rgba(11,37,69,0.6)',
        border: '1px solid rgba(0,209,193,0.15)',
        backdropFilter: 'blur(8px)',
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{
        borderColor: 'rgba(0,209,193,0.4)',
        boxShadow: '0 0 30px rgba(0,209,193,0.15)',
        y: -4,
      }}
    >
      {Icon && (
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
          style={{ background: 'rgba(0,209,193,0.1)' }}
        >
          <Icon size={18} color="#00D1C1" />
        </div>
      )}
      <motion.div
        className="text-3xl md:text-4xl font-black mb-1"
        style={{ color: '#00D1C1' }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
      >
        {displayed}
      </motion.div>
      <div className="text-sm font-medium" style={{ color: '#A7B0BA' }}>
        {metric.label}
      </div>
    </motion.div>
  );
}

export default function ImpactStats() {
  return (
    <section
      id="impacto"
      className="py-24"
      style={{ background: 'linear-gradient(135deg, #0B2545 0%, #071827 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Impacto"
          title="Impacto en números"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 mb-12">
          {metrics.map((m, i) => (
            <StatCard key={i} metric={m} index={i} />
          ))}
        </div>

        {/* Extra metric */}
        <motion.div
          className="mx-auto max-w-2xl p-5 rounded-2xl text-center"
          style={{
            background: 'rgba(0,209,193,0.05)',
            border: '1px solid rgba(0,209,193,0.15)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#00D1C1' }}>
            Próximo objetivo
          </div>
          <div className="text-lg font-semibold text-white">
            Expansión de Senior Labs a varias comunidades autónomas de España
          </div>
        </motion.div>

        <motion.p
          className="mt-10 text-center text-sm leading-relaxed max-w-2xl mx-auto"
          style={{ color: '#A7B0BA' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Los números no explican todo el camino, pero muestran la intensidad del aprendizaje: vender,
          liderar, viajar, equivocarse, construir, financiar, negociar y volver a intentarlo.
        </motion.p>
      </div>
    </section>
  );
}
