import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { timeline } from '../data/portfolioData';

const tagColors = {
  LEINN: { bg: 'rgba(0,209,193,0.1)', color: '#00D1C1', border: 'rgba(0,209,193,0.2)' },
  INTERNACIONAL: { bg: 'rgba(127,247,236,0.1)', color: '#7FF7EC', border: 'rgba(127,247,236,0.2)' },
  PROYECTO: { bg: 'rgba(59,130,246,0.1)', color: '#60A5FA', border: 'rgba(59,130,246,0.2)' },
  LIDERAZGO: { bg: 'rgba(168,85,247,0.1)', color: '#C084FC', border: 'rgba(168,85,247,0.2)' },
  IMPACTO: { bg: 'rgba(34,197,94,0.1)', color: '#4ADE80', border: 'rgba(34,197,94,0.2)' },
  HITO: { bg: 'rgba(251,191,36,0.1)', color: '#FCD34D', border: 'rgba(251,191,36,0.2)' },
};

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #071827 0%, #0B2545 50%, #071827 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          tag="Recorrido"
          title="Mi camino en LEINN"
          subtitle="De empezar a emprender en equipo a construir proyectos con impacto real, clientes, instituciones y visión internacional."
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(0,209,193,0.4), transparent)' }}
          />

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => {
              const tc = tagColors[item.tag] || tagColors.PROYECTO;
              const isRight = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  className="relative flex items-start gap-6 md:gap-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {/* Dot on the line */}
                  <div
                    className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-5 z-10 flex-shrink-0"
                    style={{ background: '#00D1C1', boxShadow: '0 0 8px rgba(0,209,193,0.6)' }}
                  />

                  {/* Card — on mobile always full width, on desktop alternate */}
                  <div
                    className={`ml-14 md:ml-0 w-full md:w-[46%] ${
                      isRight ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div
                      className="p-5 rounded-2xl transition-all duration-200"
                      style={{
                        background: 'rgba(11,37,69,0.6)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        backdropFilter: 'blur(8px)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.border = '1px solid rgba(0,209,193,0.2)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                        <span className="text-xs font-semibold" style={{ color: '#A7B0BA' }}>
                          {item.date}
                        </span>
                        <span
                          className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                          style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="font-bold text-base text-white mb-2">{item.title}</h3>
                      <p className="text-sm leading-relaxed mb-3" style={{ color: '#A7B0BA' }}>
                        {item.description}
                      </p>
                      <div
                        className="text-xs leading-relaxed p-3 rounded-xl"
                        style={{ background: 'rgba(0,209,193,0.05)', border: '1px solid rgba(0,209,193,0.1)' }}
                      >
                        <span className="font-semibold" style={{ color: '#00D1C1' }}>Aprendizaje: </span>
                        <span style={{ color: '#A7B0BA' }}>{item.learning}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
