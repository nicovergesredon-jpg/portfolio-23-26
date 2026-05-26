import { motion } from 'framer-motion';
import { User, Zap, Target } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { aboutCards } from '../data/portfolioData';

const iconMap = { User, Zap, Target };

export default function About() {
  return (
    <section id="sobre-mi" style={{ background: '#F6F8FA' }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Sobre mí"
          title="Quién soy"
          light
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
              Soy Nico Vergés Redón, tengo 22 años y soy de Barcelona. Desde septiembre de 2023 curso{' '}
              <strong>LEINN</strong>, el grado universitario en Liderazgo Emprendedor e Innovación, una
              formación basada en aprender emprendiendo, crear proyectos reales, trabajar en equipo y
              exponerse al mercado desde el primer día.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
              Este recorrido me ha permitido liderar equipos, construir proyectos desde cero, validar
              ideas con clientes reales y desarrollar una visión práctica del emprendimiento.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
              Me defino como un <strong>emprendedor adaptable</strong>: puedo entrar en distintos campos,
              entender el reto y aportar estructura, visión y ejecución. Mi perfil combina estrategia de
              negocio, marketing, ventas, tecnología, IA, liderazgo de equipos, financiación pública,
              relaciones institucionales e impacto social.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#374151' }}>
              Mi manera de trabajar se basa en aprender rápido, asumir responsabilidad y convertir la
              incertidumbre en acción.
            </p>
          </motion.div>

          <div className="flex flex-col gap-5">
            {aboutCards.map((card, i) => {
              const Icon = iconMap[card.icon];
              return (
                <motion.div
                  key={i}
                  className="flex gap-4 p-5 rounded-2xl"
                  style={{
                    background: 'white',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(0,209,193,0.1)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,209,193,0.1)' }}
                  >
                    <Icon size={18} color="#00D1C1" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1" style={{ color: '#071827' }}>
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                      {card.text}
                    </p>
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
