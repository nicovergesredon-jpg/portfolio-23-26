import { motion } from 'framer-motion';
import { BookOpen, Globe, GraduationCap, Building2, Rocket, MapPin, CalendarDays } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { education } from '../data/portfolioData';

const iconMap = { BookOpen, Globe, GraduationCap, Building2, Rocket };

export default function Education() {
  return (
    <section
      id="formacion"
      className="py-24"
      style={{ background: '#0B2545' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          tag="Formación"
          title="Recorrido académico"
          subtitle="De las aulas a los mercados reales. Cada etapa ha construido la base sobre la que emprender."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, rgba(0,209,193,0.4), rgba(0,209,193,0.05))' }}
          />

          <div className="space-y-4">
            {education.map((item, i) => {
              const Icon = iconMap[item.icon] || BookOpen;
              const isLast = i === education.length - 1;

              return (
                <motion.div
                  key={i}
                  className="relative sm:pl-16"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  {/* Icon bubble on timeline */}
                  <div
                    className="hidden sm:flex absolute left-0 w-12 h-12 rounded-full items-center justify-center flex-shrink-0"
                    style={{
                      background: item.highlight ? 'rgba(0,209,193,0.15)' : 'rgba(11,37,69,0.9)',
                      border: item.highlight
                        ? '2px solid rgba(0,209,193,0.5)'
                        : '1px solid rgba(0,209,193,0.2)',
                      boxShadow: item.highlight ? '0 0 20px rgba(0,209,193,0.15)' : 'none',
                    }}
                  >
                    <Icon size={18} color={item.highlight ? '#00D1C1' : '#A7B0BA'} />
                  </div>

                  {/* Card */}
                  <motion.div
                    className="rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                    style={{
                      background: item.highlight
                        ? 'rgba(0,209,193,0.06)'
                        : 'rgba(7,24,39,0.5)',
                      border: item.highlight
                        ? '1px solid rgba(0,209,193,0.18)'
                        : '1px solid rgba(255,255,255,0.05)',
                    }}
                    whileHover={{
                      background: item.highlight
                        ? 'rgba(0,209,193,0.1)'
                        : 'rgba(7,24,39,0.75)',
                      borderColor: 'rgba(0,209,193,0.2)',
                    }}
                  >
                    {/* Mobile icon */}
                    <div
                      className="sm:hidden w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: item.highlight ? 'rgba(0,209,193,0.12)' : 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(0,209,193,0.2)',
                      }}
                    >
                      <Icon size={16} color={item.highlight ? '#00D1C1' : '#A7B0BA'} />
                    </div>

                    {/* Period badge */}
                    <div
                      className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0"
                      style={{
                        background: 'rgba(0,0,0,0.3)',
                        color: item.current ? '#00D1C1' : '#A7B0BA',
                        border: item.current ? '1px solid rgba(0,209,193,0.25)' : '1px solid rgba(255,255,255,0.06)',
                        minWidth: '130px',
                        justifyContent: 'center',
                      }}
                    >
                      <CalendarDays size={10} />
                      {item.period}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3
                          className="font-bold text-sm leading-snug"
                          style={{ color: item.highlight ? '#ffffff' : '#E5E7EB' }}
                        >
                          {item.stage}
                        </h3>
                        {item.current && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-semibold"
                            style={{
                              background: 'rgba(0,209,193,0.15)',
                              color: '#00D1C1',
                              border: '1px solid rgba(0,209,193,0.3)',
                            }}
                          >
                            En curso
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 mt-1 flex-wrap">
                        <span className="text-xs font-semibold" style={{ color: item.highlight ? '#00D1C1' : '#A7B0BA' }}>
                          {item.school}
                        </span>
                        <span
                          className="flex items-center gap-1 text-xs"
                          style={{ color: 'rgba(167,176,186,0.6)' }}
                        >
                          <MapPin size={10} />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
