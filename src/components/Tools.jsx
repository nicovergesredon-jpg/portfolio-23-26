import { motion } from 'framer-motion';
import { Layout, Globe, Cpu, TrendingUp } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { tools } from '../data/portfolioData';

const iconMap = { Layout, Globe, Cpu, TrendingUp };

export default function Tools() {
  return (
    <section
      id="herramientas"
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #0B2545 0%, #071827 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Herramientas"
          title="Herramientas que utilizo"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <motion.div
                key={i}
                className="p-5 rounded-2xl"
                style={{
                  background: 'rgba(11,37,69,0.6)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(8px)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  borderColor: 'rgba(0,209,193,0.2)',
                  boxShadow: '0 8px 24px rgba(0,209,193,0.08)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(0,209,193,0.1)' }}
                  >
                    <Icon size={15} color="#00D1C1" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tool, j) => (
                    <motion.span
                      key={j}
                      className="text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{
                        background: 'rgba(0,209,193,0.08)',
                        border: '1px solid rgba(0,209,193,0.15)',
                        color: '#7FF7EC',
                      }}
                      whileHover={{
                        background: 'rgba(0,209,193,0.15)',
                        borderColor: 'rgba(0,209,193,0.35)',
                      }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
