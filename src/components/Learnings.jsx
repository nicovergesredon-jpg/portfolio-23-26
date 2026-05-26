import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { learnings } from '../data/portfolioData';

// Accent colors cycling for variety
const ACCENTS = [
  '#00D1C1',
  '#7FF7EC',
  '#60A5FA',
  '#C084FC',
  '#00D1C1',
  '#7FF7EC',
  '#60A5FA',
  '#C084FC',
];

export default function Learnings() {
  return (
    <section
      id="aprendizajes"
      className="py-24"
      style={{ background: '#071827' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="Reflexiones"
          title="Aprendizajes que me llevo"
          subtitle="Lo que he entendido construyendo proyectos, liderando equipos y viajando por el mundo."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {learnings.map((item, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            const num = String(i + 1).padStart(2, '0');

            return (
              <motion.div
                key={i}
                className="relative rounded-2xl p-6 overflow-hidden"
                style={{
                  background: 'rgba(11,37,69,0.5)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderLeft: `3px solid ${accent}`,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                whileHover={{
                  background: 'rgba(11,37,69,0.75)',
                  borderColor: `${accent}50`,
                  y: -2,
                }}
              >
                {/* Large number watermark */}
                <div
                  className="absolute top-3 right-5 text-7xl font-black select-none pointer-events-none"
                  style={{ color: accent, opacity: 0.07, lineHeight: 1 }}
                >
                  {num}
                </div>

                {/* Number badge */}
                <div
                  className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-black mb-3"
                  style={{
                    background: `${accent}18`,
                    color: accent,
                    border: `1px solid ${accent}30`,
                  }}
                >
                  {num}
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-base mb-2 leading-snug"
                  style={{ color: '#ffffff' }}
                >
                  {item.title}
                </h3>

                {/* Text */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#A7B0BA' }}
                >
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
