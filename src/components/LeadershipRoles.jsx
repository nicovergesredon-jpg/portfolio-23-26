import { motion } from 'framer-motion';
import { Users, Handshake, Megaphone, Cpu } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { leadershipRoles } from '../data/portfolioData';

const iconMap = { Users, Handshake, Megaphone, Cpu };

export default function LeadershipRoles() {
  return (
    <section
      id="roles"
      className="py-24"
      style={{ background: '#F6F8FA' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Liderazgo"
          title="Roles de liderazgo"
          subtitle="Responsabilidades que han marcado mi evolución dentro de LEINN y mis proyectos."
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipRoles.map((role, i) => {
            const Icon = iconMap[role.icon];
            return (
              <motion.div
                key={i}
                className="p-6 rounded-2xl flex flex-col gap-4 transition-all duration-200"
                style={{
                  background: 'white',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 12px 32px rgba(0,209,193,0.12)',
                  borderColor: 'rgba(0,209,193,0.3)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0,209,193,0.1)' }}
                >
                  <Icon size={20} color="#00D1C1" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: '#071827' }}>
                    {role.role}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    {role.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
