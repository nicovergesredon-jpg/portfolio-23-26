import { motion } from 'framer-motion';
import {
  Users, Shuffle, Map, Cpu, UserCheck,
  FileText, Building, Megaphone, Handshake,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { skills } from '../data/portfolioData';

const iconMap = {
  Users, Shuffle, Map, Cpu, UserCheck,
  FileText, Building, Megaphone, Handshake,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24"
      style={{ background: '#F6F8FA' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Competencias"
          title="Competencias"
          subtitle="Habilidades desarrolladas en proyectos reales, clientes reales y contextos reales."
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={i}
                className="p-5 rounded-2xl flex gap-4 transition-all duration-200"
                style={{
                  background: 'white',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{
                  y: -3,
                  boxShadow: '0 12px 32px rgba(0,209,193,0.1)',
                  borderColor: 'rgba(0,209,193,0.3)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,209,193,0.1)' }}
                >
                  <Icon size={18} color="#00D1C1" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: '#071827' }}>
                    {skill.name}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>
                    {skill.text}
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
