import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Internacional', href: '#internacional' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(7, 24, 39, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,209,193,0.1)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleClick('#inicio')}
          className="text-white font-bold text-sm tracking-wider hover:text-teal transition-colors"
          style={{ color: '#00D1C1' }}
        >
          NVR
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleClick(l.href)}
                className="text-sm font-medium transition-colors"
                style={{ color: '#A7B0BA' }}
                onMouseEnter={(e) => (e.target.style.color = '#00D1C1')}
                onMouseLeave={(e) => (e.target.style.color = '#A7B0BA')}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleClick('#contacto')}
          className="hidden md:block text-sm font-semibold px-5 py-2 rounded-full transition-all"
          style={{
            background: 'rgba(0,209,193,0.1)',
            border: '1px solid rgba(0,209,193,0.3)',
            color: '#00D1C1',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(0,209,193,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(0,209,193,0.1)';
          }}
        >
          Contactar
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(7,24,39,0.98)',
              borderTop: '1px solid rgba(0,209,193,0.1)',
            }}
          >
            <ul className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleClick(l.href)}
                    className="w-full text-left text-base font-medium py-2"
                    style={{ color: '#A7B0BA' }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
