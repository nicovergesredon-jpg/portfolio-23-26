import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { timeline } from '../data/portfolioData';

// ── Photos for each timeline entry (by index) ────────────────────────────────
import imgFinlandia   from '../assets/tl-finlandia.jpg';
import imgUrsus       from '../assets/tl-ursus.png';
import imgIntra       from '../assets/tl-intra.jpg';
import imgCostaRica   from '../assets/tl-costarica.jpg';
import imgAurea       from '../assets/tl-aurea.jpg';
import imgSeniorLabs  from '../assets/tl-seniorlabs.png';
import imgAsia        from '../assets/tl-asia.jpg';
import imgConstitucion from '../assets/tl-constitucion.jpg';

// index → { src, fit, position }
// fit: 'cover' for photos, 'contain' for logos
const PHOTOS = {
  0: { src: imgConstitucion, fit: 'contain',  pos: 'center', bg: '#0B2545' },
  1: { src: imgFinlandia,    fit: 'cover',    pos: 'center 80%' },
  2: { src: imgUrsus,        fit: 'contain',  pos: 'center', bg: 'white' },
  3: { src: imgIntra,        fit: 'contain',  pos: 'center', bg: '#071827' },
  4: { src: imgCostaRica,    fit: 'cover',    pos: 'center' },
  5: { src: imgAurea,        fit: 'cover',    pos: 'center top' },
  6: { src: imgSeniorLabs,   fit: 'contain',  pos: 'center', bg: '#071827' },
  7: { src: imgAsia,         fit: 'contain',  pos: 'center', bg: '#0B2545' },
};

const tagColors = {
  LEINN:         { bg: 'rgba(0,209,193,0.1)',   color: '#00D1C1', border: 'rgba(0,209,193,0.2)' },
  INTERNACIONAL: { bg: 'rgba(127,247,236,0.1)', color: '#7FF7EC', border: 'rgba(127,247,236,0.2)' },
  PROYECTO:      { bg: 'rgba(59,130,246,0.1)',  color: '#60A5FA', border: 'rgba(59,130,246,0.2)' },
  LIDERAZGO:     { bg: 'rgba(168,85,247,0.1)',  color: '#C084FC', border: 'rgba(168,85,247,0.2)' },
  IMPACTO:       { bg: 'rgba(34,197,94,0.1)',   color: '#4ADE80', border: 'rgba(34,197,94,0.2)' },
  HITO:          { bg: 'rgba(251,191,36,0.1)',  color: '#FCD34D', border: 'rgba(251,191,36,0.2)' },
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
              const isRight = i % 2 === 0; // card on left → photo on right
              const photo = PHOTOS[i];

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

                  {/* ── Text card ── */}
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

                      {/* Photo on mobile — below the card text */}
                      {photo && (
                        <div className="md:hidden mt-4 rounded-xl overflow-hidden" style={{ height: '160px' }}>
                          <img
                            src={photo.src}
                            alt={item.title}
                            className="w-full h-full"
                            style={{
                              objectFit: photo.fit,
                              objectPosition: photo.pos,
                              background: photo.bg || 'transparent',
                              padding: photo.fit === 'contain' ? '12px' : 0,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ── Photo panel — desktop only, opposite side ── */}
                  {photo && (
                    <div
                      className={`hidden md:flex absolute top-0 h-full w-[46%] items-center ${
                        isRight ? 'right-0 pl-8' : 'left-0 pr-8'
                      }`}
                    >
                      <motion.div
                        className="w-full rounded-2xl overflow-hidden"
                        style={{
                          height: '190px',
                          background: photo.bg || 'rgba(11,37,69,0.6)',
                          border: '1px solid rgba(0,209,193,0.1)',
                        }}
                        initial={{ opacity: 0, x: isRight ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <img
                          src={photo.src}
                          alt={item.title}
                          className="w-full h-full"
                          style={{
                            objectFit: photo.fit,
                            objectPosition: photo.pos,
                            padding: photo.fit === 'contain' ? '16px' : 0,
                          }}
                        />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
