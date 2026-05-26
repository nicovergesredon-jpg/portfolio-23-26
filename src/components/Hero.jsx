import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Award, Building2, DollarSign, ChevronDown } from 'lucide-react';
import { metrics } from '../data/portfolioData';
import photoHero from '../assets/photo-hero.jpg';

const iconMap = { TrendingUp, DollarSign, Users, Globe, Award, Building2 };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

// Animated grid background nodes
function GridNodes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid lines */}
      <div
        className="absolute inset-0 grid-bg opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,209,193,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,209,193,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glowing orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: '#00D1C1' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{ background: '#7FF7EC' }}
      />
      {/* Decorative nodes */}
      {[
        { top: '15%', left: '10%' }, { top: '70%', left: '5%' },
        { top: '30%', right: '8%' }, { top: '80%', right: '12%' },
        { top: '50%', left: '2%' }, { top: '20%', right: '20%' },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{ ...pos, background: '#00D1C1', opacity: 0.4 }}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #071827 0%, #0B2545 60%, #071827 100%)' }}
    >
      <GridNodes />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span className="tag">Portfolio Emprendedor 2023-2026</span>
            </motion.div>

            <motion.h1
              className="mt-4 text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight"
              {...fadeUp(0.2)}
            >
              <span className="text-white">Nico</span>{' '}
              <span style={{ color: '#00D1C1' }}>Vergés</span>
              <br />
              <span className="text-white">Redón</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-xl md:text-2xl font-semibold text-white leading-snug"
              {...fadeUp(0.35)}
            >
              Emprendedor adaptable, estratega de negocio y constructor de proyectos reales.
            </motion.p>

            <motion.p
              className="mt-4 text-base leading-relaxed max-w-lg"
              style={{ color: '#A7B0BA' }}
              {...fadeUp(0.45)}
            >
              Desde el grado LEINN y la creación de Intra Barcelona como Junior Empresa, he construido
              un recorrido entre marketing, ventas, liderazgo, tecnología, IA, financiación pública e impacto social.
            </motion.p>

            <motion.div className="mt-8 flex flex-wrap gap-3" {...fadeUp(0.55)}>
              <button
                onClick={() => scrollTo('#timeline')}
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all"
                style={{ background: '#00D1C1', color: '#071827' }}
                onMouseEnter={(e) => (e.target.style.background = '#7FF7EC')}
                onMouseLeave={(e) => (e.target.style.background = '#00D1C1')}
              >
                Ver mi recorrido
              </button>
              <button
                onClick={() => scrollTo('#proyectos')}
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all"
                style={{ border: '1px solid rgba(0,209,193,0.4)', color: '#00D1C1', background: 'transparent' }}
                onMouseEnter={(e) => { e.target.style.background = 'rgba(0,209,193,0.1)'; }}
                onMouseLeave={(e) => { e.target.style.background = 'transparent'; }}
              >
                Ver proyectos
              </button>
              <button
                onClick={() => scrollTo('#contacto')}
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#A7B0BA', background: 'transparent' }}
                onMouseEnter={(e) => { e.target.style.color = '#fff'; e.target.style.borderColor = 'rgba(255,255,255,0.4)'; }}
                onMouseLeave={(e) => { e.target.style.color = '#A7B0BA'; e.target.style.borderColor = 'rgba(255,255,255,0.15)'; }}
              >
                Contactar
              </button>
            </motion.div>
          </div>

          {/* Right: Photo placeholder */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-30"
                style={{ background: '#00D1C1', transform: 'scale(1.1)' }}
              />
              {/* Foto real */}
              <div
                className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full overflow-hidden"
                style={{ border: '2px solid rgba(0,209,193,0.3)' }}
              >
                <img
                  src={photoHero}
                  alt="Nico Vergés Redón en el Taj Mahal, India"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 12%' }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metrics */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {metrics.map((m, i) => {
            const Icon = iconMap[m.icon];
            return (
              <div
                key={i}
                className="rounded-2xl p-4 text-center transition-all duration-200 cursor-default"
                style={{
                  background: 'rgba(11,37,69,0.6)',
                  border: '1px solid rgba(0,209,193,0.15)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(0,209,193,0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(0,209,193,0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {Icon && <Icon size={16} color="#00D1C1" className="mx-auto mb-2" />}
                <div className="text-xl font-black" style={{ color: '#00D1C1' }}>{m.value}</div>
                <div className="text-xs mt-1 leading-tight" style={{ color: '#A7B0BA' }}>{m.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} color="rgba(0,209,193,0.5)" />
      </motion.div>
    </section>
  );
}
