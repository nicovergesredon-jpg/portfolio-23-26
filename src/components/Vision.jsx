import { motion } from 'framer-motion';
import { ArrowRight, Target } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Vision() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="vision"
      className="py-24"
      style={{ background: 'linear-gradient(135deg, #0B2545 0%, #071827 60%, #0B2545 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          tag="Visión actual"
          title="Dónde estoy ahora"
        />

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <motion.p
              className="text-base leading-relaxed mb-4"
              style={{ color: '#A7B0BA' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Actualmente estoy centrado en la construcción y expansión de{' '}
              <span className="font-semibold text-white">Senior Labs</span>, un proyecto que une
              tecnología, personas mayores, formación digital e impacto social.
            </motion.p>
            <motion.p
              className="text-base leading-relaxed mb-4"
              style={{ color: '#A7B0BA' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Tras su constitución en mayo de 2026, el objetivo es llevar Senior Labs a varias
              comunidades autónomas de España, colaborando con entidades, instituciones,
              administraciones públicas y agentes del sector senior.
            </motion.p>
            <motion.p
              className="text-base leading-relaxed"
              style={{ color: '#A7B0BA' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Mi foco está en construir una organización capaz de escalar sin perder cercanía:
              con procesos claros, talento adecuado, tecnología útil y una propuesta que responda
              a uno de los grandes retos sociales de los próximos años.
            </motion.p>

            <motion.button
              onClick={() => scrollTo('#contacto')}
              className="mt-6 flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
              style={{
                background: '#00D1C1',
                color: '#071827',
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ background: '#7FF7EC', scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Hablar de un proyecto <ArrowRight size={14} />
            </motion.button>
          </div>

          {/* Highlight card */}
          <motion.div
            className="p-6 rounded-2xl"
            style={{
              background: 'rgba(0,209,193,0.08)',
              border: '1px solid rgba(0,209,193,0.25)',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ boxShadow: '0 0 40px rgba(0,209,193,0.15)' }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ background: 'rgba(0,209,193,0.15)' }}
            >
              <Target size={20} color="#00D1C1" />
            </div>
            <div className="tag mb-2">Objetivo Senior Labs</div>
            <p className="text-sm leading-relaxed text-white">
              Estar presentes en varias comunidades autónomas de España, impulsando la autonomía
              digital de las personas mayores.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
