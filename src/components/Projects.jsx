import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { projects } from '../data/portfolioData';

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: 'rgba(11,37,69,0.6)',
        border: project.highlight
          ? '1px solid rgba(0,209,193,0.3)'
          : '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(8px)',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        borderColor: 'rgba(0,209,193,0.25)',
        boxShadow: '0 8px 32px rgba(0,209,193,0.08)',
      }}
    >
      {project.highlight && (
        <div
          className="px-6 py-2 text-xs font-bold uppercase tracking-wider"
          style={{ background: 'rgba(0,209,193,0.1)', color: '#00D1C1', borderBottom: '1px solid rgba(0,209,193,0.15)' }}
        >
          Proyecto principal
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
          <div>
            <span className="tag block mb-2">{project.category}</span>
            <h3 className="text-xl font-black text-white">{project.name}</h3>
          </div>
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0"
            style={{ background: 'rgba(0,209,193,0.1)', color: '#00D1C1', border: '1px solid rgba(0,209,193,0.2)' }}
          >
            {project.role}
          </span>
        </div>

        <p className="text-sm leading-relaxed mb-4" style={{ color: '#A7B0BA' }}>
          {project.description}
        </p>

        {/* Toggle details */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-xs font-semibold transition-colors"
          style={{ color: '#00D1C1' }}
        >
          {expanded ? (
            <>Ver menos <ChevronUp size={14} /></>
          ) : (
            <>Ver detalle <ChevronDown size={14} /></>
          )}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                {/* Actions */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#A7B0BA' }}>
                    Qué hice
                  </p>
                  <ul className="space-y-1">
                    {project.actions.map((a, i) => (
                      <li key={i} className="text-sm flex items-start gap-2" style={{ color: '#A7B0BA' }}>
                        <span style={{ color: '#00D1C1', flexShrink: 0 }}>→</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                {project.result && (
                  <div
                    className="p-3 rounded-xl text-sm"
                    style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)' }}
                  >
                    <span className="font-semibold" style={{ color: '#60A5FA' }}>Resultado: </span>
                    <span style={{ color: '#A7B0BA' }}>{project.result}</span>
                  </div>
                )}

                {/* Learning */}
                <div
                  className="p-3 rounded-xl text-sm"
                  style={{ background: 'rgba(0,209,193,0.05)', border: '1px solid rgba(0,209,193,0.1)' }}
                >
                  <span className="font-semibold" style={{ color: '#00D1C1' }}>Aprendizaje clave: </span>
                  <span style={{ color: '#A7B0BA' }}>{project.learning}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="py-24"
      style={{ background: '#071827' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Proyectos"
          title="Proyectos destacados"
          subtitle="Proyectos donde he aprendido vendiendo, liderando, comunicando, financiando, investigando y construyendo."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
