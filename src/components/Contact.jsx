import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Link2, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email personal',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      action: 'Enviar email',
    },
    {
      icon: Mail,
      label: 'Email Senior Labs',
      value: personalInfo.emailPro,
      href: `mailto:${personalInfo.emailPro}`,
      action: 'Email profesional',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
      action: 'Llamar',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: personalInfo.location,
      href: null,
      action: null,
    },
  ];

  const links = [
    {
      icon: Link2,
      label: 'LinkedIn',
      href: personalInfo.linkedin,
      placeholder: true,
    },
    {
      icon: ExternalLink,
      label: 'Senior Labs',
      href: personalInfo.seniorLabsUrl,
      placeholder: true,
    },
  ];

  return (
    <section
      id="contacto"
      className="py-24"
      style={{ background: '#071827' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          tag="Contacto"
          title="Contacto"
        />

        <motion.p
          className="text-center text-base leading-relaxed max-w-2xl mx-auto mb-12"
          style={{ color: '#A7B0BA' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Este portfolio recoge lo que he construido, aprendido y vivido desde que empecé LEINN en
          septiembre de 2023. Si quieres conocer más sobre mi recorrido, mis proyectos o Senior Labs,
          puedes contactarme aquí.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                className="flex items-center gap-4 p-4 rounded-2xl"
                style={{
                  background: 'rgba(11,37,69,0.6)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{
                  borderColor: 'rgba(0,209,193,0.2)',
                  boxShadow: '0 4px 16px rgba(0,209,193,0.06)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,209,193,0.1)' }}
                >
                  <Icon size={16} color="#00D1C1" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold mb-0.5" style={{ color: '#A7B0BA' }}>
                    {c.label}
                  </div>
                  <div className="text-sm font-medium text-white truncate">{c.value}</div>
                </div>
                {c.href && c.action && (
                  <a
                    href={c.href}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full flex-shrink-0 transition-all"
                    style={{
                      background: 'rgba(0,209,193,0.1)',
                      color: '#00D1C1',
                      border: '1px solid rgba(0,209,193,0.2)',
                    }}
                  >
                    {c.action}
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* External links */}
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l, i) => {
            const Icon = l.icon;
            const isPlaceholder = l.placeholder && l.href === '#';
            return (
              <motion.a
                key={i}
                href={l.href}
                target={isPlaceholder ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all"
                style={{
                  background: 'rgba(0,209,193,0.1)',
                  border: '1px solid rgba(0,209,193,0.25)',
                  color: '#00D1C1',
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{
                  background: 'rgba(0,209,193,0.2)',
                  borderColor: 'rgba(0,209,193,0.4)',
                }}
              >
                <Icon size={15} />
                {l.label}
                {isPlaceholder && (
                  <span className="text-xs opacity-60">(próximamente)</span>
                )}
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
