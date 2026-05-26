import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Sphere,
  Graticule,
} from 'react-simple-maps';
import { MapPin, X, Plane } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { countries } from '../data/portfolioData';

// Loaded asynchronously from public/ (not bundled, faster initial load)
const GEO_URL = '/countries-110m.json';

// ─── Business Missions config ───────────────────────────────────────────────
const BMS = [
  {
    id: 'bm1',
    label: 'BM1 · Europa',
    period: 'Feb – Mar 2024',
    color: '#00D1C1',
    colorBg: 'rgba(0,209,193,0.12)',
    colorBorder: 'rgba(0,209,193,0.35)',
    countryIds: ['finland', 'estonia'],
  },
  {
    id: 'bm2',
    label: 'BM2 · América',
    period: 'Oct – Nov 2024',
    color: '#60A5FA',
    colorBg: 'rgba(96,165,250,0.12)',
    colorBorder: 'rgba(96,165,250,0.35)',
    countryIds: ['costarica'],
  },
  {
    id: 'bm3',
    label: 'BM3 · Asia',
    period: 'Ene – Abr 2026',
    color: '#C084FC',
    colorBg: 'rgba(192,132,252,0.12)',
    colorBorder: 'rgba(192,132,252,0.35)',
    countryIds: ['japan', 'korea', 'philippines', 'thailand', 'india'],
  },
];

// ISO 3166-1 numeric codes → country id mapping
const ISO_TO_ID = {
  '246': 'finland',
  '233': 'estonia',
  '188': 'costarica',
  '392': 'japan',
  '410': 'korea',
  '608': 'philippines',
  '764': 'thailand',
  '356': 'india',
};

// Geographic coordinates [longitude, latitude] for each marker
const COORDS = {
  finland:     [25.7,   61.9],
  estonia:     [25.0,   58.6],
  costarica:   [-84.0,   9.7],
  japan:       [138.3,  36.2],
  korea:       [127.8,  36.0],
  philippines: [121.8,  12.9],
  thailand:    [100.9,  15.9],
  india:       [78.9,   20.6],
};

// ─── Real Geography map ─────────────────────────────────────────────────────
const WorldMapReal = memo(function WorldMapReal({ activeBm, onCountryClick, selectedCountry }) {
  const bmForId = (id) => BMS.find(b => b.countryIds.includes(id));

  const getCountryStyle = (isoNum) => {
    const countryId = ISO_TO_ID[isoNum];
    if (!countryId) {
      return {
        default: { fill: 'rgba(11,37,69,0.85)', stroke: 'rgba(0,209,193,0.12)', strokeWidth: 0.5, outline: 'none' },
        hover: { fill: 'rgba(11,37,69,0.85)', stroke: 'rgba(0,209,193,0.12)', strokeWidth: 0.5, outline: 'none' },
        pressed: { fill: 'rgba(11,37,69,0.85)', stroke: 'rgba(0,209,193,0.12)', strokeWidth: 0.5, outline: 'none' },
      };
    }

    const bm = bmForId(countryId);
    const isActive = activeBm === null || activeBm === bm?.id;
    const isSelected = selectedCountry?.id === countryId;

    const baseFill = isSelected
      ? (bm?.color || '#00D1C1')
      : isActive
        ? `${bm?.color}28` || 'rgba(0,209,193,0.16)'
        : 'rgba(11,37,69,0.85)';

    const baseStroke = isActive ? (bm?.color || '#00D1C1') : 'rgba(0,209,193,0.12)';
    const baseStrokeWidth = isActive ? 1.0 : 0.5;

    return {
      default: {
        fill: baseFill,
        stroke: baseStroke,
        strokeWidth: baseStrokeWidth,
        outline: 'none',
        transition: 'all 0.3s',
      },
      hover: {
        fill: isSelected ? (bm?.color || '#00D1C1') : `${bm?.color}45` || 'rgba(0,209,193,0.27)',
        stroke: bm?.color || '#00D1C1',
        strokeWidth: 1.2,
        outline: 'none',
        cursor: 'pointer',
      },
      pressed: {
        fill: bm?.color || '#00D1C1',
        stroke: '#fff',
        strokeWidth: 1,
        outline: 'none',
      },
    };
  };

  return (
    <ComposableMap
      projection="geoNaturalEarth1"
      projectionConfig={{ scale: 155, center: [15, 10] }}
      style={{ width: '100%', height: '100%' }}
    >
      {/* Ocean background sphere */}
      <Sphere fill="rgba(4,15,30,0.9)" stroke="rgba(0,209,193,0.15)" strokeWidth={0.5} />

      {/* Latitude/longitude grid */}
      <Graticule stroke="rgba(0,209,193,0.05)" strokeWidth={0.5} />

      {/* Country shapes */}
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isoNum = geo.id;
            const countryId = ISO_TO_ID[isoNum];
            const style = getCountryStyle(isoNum);

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={style}
                onClick={() => {
                  if (countryId) {
                    const c = countries.find(c => c.id === countryId);
                    if (c) onCountryClick(c);
                  }
                }}
              />
            );
          })
        }
      </Geographies>

      {/* Country markers / pins */}
      {countries.map((country) => {
        const coords = COORDS[country.id];
        if (!coords) return null;
        const bm = bmForId(country.id);
        const isActive = activeBm === null || activeBm === bm?.id;
        const isSelected = selectedCountry?.id === country.id;
        const pinColor = bm?.color || '#00D1C1';

        return (
          <Marker
            key={country.id}
            coordinates={coords}
            onClick={() => onCountryClick(country)}
          >
            {/* Wrap everything in a <g> for cursor + opacity control */}
            <g
              style={{
                cursor: 'pointer',
                opacity: isActive ? 1 : 0.2,
                transition: 'opacity 0.4s',
              }}
            >
              {/* Pulsing outer ring when selected */}
              {isSelected && (
                <circle r={10} fill="none" stroke={pinColor} strokeWidth={1.5} opacity={0.5} />
              )}

              {/* Soft glow halo */}
              <circle r={isSelected ? 8 : 6} fill={pinColor} opacity={0.12} />

              {/* Pin dot */}
              <circle
                r={isSelected ? 5 : 3.5}
                fill={isSelected ? pinColor : 'rgba(7,24,39,0.95)'}
                stroke={pinColor}
                strokeWidth={1.5}
              />

              {/* Country name label */}
              <text
                y={-10}
                textAnchor="middle"
                fontSize="5.5"
                fontWeight="700"
                fontFamily="Inter, sans-serif"
                fill={isActive ? pinColor : '#A7B0BA'}
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              >
                {country.name}
              </text>
            </g>
          </Marker>
        );
      })}
    </ComposableMap>
  );
});

// ─── Info Card overlay ───────────────────────────────────────────────────────
function InfoCard({ country, onClose }) {
  const bm = BMS.find(b => b.countryIds.includes(country.id));
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className="absolute bottom-4 right-4 w-72 rounded-2xl p-5 z-30"
      style={{
        background: 'rgba(7,24,39,0.97)',
        border: `1px solid ${bm?.colorBorder || 'rgba(0,209,193,0.3)'}`,
        backdropFilter: 'blur(20px)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center"
        style={{ background: 'rgba(255,255,255,0.08)' }}
      >
        <X size={11} color="#A7B0BA" />
      </button>

      <div
        className="text-xs font-bold uppercase tracking-wider mb-1"
        style={{ color: bm?.color || '#00D1C1' }}
      >
        {bm?.label} · {country.date}
      </div>
      <h3 className="text-base font-black text-white mb-3 flex items-center gap-2">
        <MapPin size={14} color={bm?.color || '#00D1C1'} />
        {country.name}
      </h3>

      <div className="space-y-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#A7B0BA' }}>
            Foco
          </p>
          <p className="text-xs leading-relaxed" style={{ color: '#E5E7EB' }}>
            {country.focus}
          </p>
        </div>
        <div
          className="p-3 rounded-xl text-xs leading-relaxed"
          style={{
            background: bm?.colorBg || 'rgba(0,209,193,0.06)',
            border: `1px solid ${bm?.colorBorder || 'rgba(0,209,193,0.12)'}`,
          }}
        >
          <span className="font-semibold" style={{ color: bm?.color || '#00D1C1' }}>Aprendizaje: </span>
          <span style={{ color: '#A7B0BA' }}>{country.learning}</span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Mobile country list ─────────────────────────────────────────────────────
function MobileView({ activeBm, onSelectCountry, selectedCountry }) {
  const filtered = activeBm
    ? countries.filter(c => {
        const bm = BMS.find(b => b.id === activeBm);
        return bm?.countryIds.includes(c.id);
      })
    : countries;

  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {filtered.map((c, i) => {
        const bm = BMS.find(b => b.countryIds.includes(c.id));
        const isSelected = selectedCountry?.id === c.id;
        return (
          <motion.div
            key={c.id}
            className="rounded-2xl overflow-hidden cursor-pointer"
            style={{
              background: isSelected ? bm?.colorBg : 'rgba(11,37,69,0.6)',
              border: isSelected ? `1px solid ${bm?.colorBorder}` : '1px solid rgba(255,255,255,0.06)',
              transition: 'all 0.2s',
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            onClick={() => onSelectCountry(isSelected ? null : c)}
          >
            <div className="flex items-center gap-3 p-4">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: bm?.color || '#00D1C1' }}
              />
              <div className="flex-1 min-w-0">
                <span className="font-bold text-sm text-white">{c.name}</span>
                <span className="text-xs ml-2" style={{ color: '#A7B0BA' }}>{c.date}</span>
              </div>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-semibold"
                style={{ background: bm?.colorBg, color: bm?.color, border: `1px solid ${bm?.colorBorder}` }}
              >
                {bm?.label?.split(' · ')[0]}
              </span>
            </div>
            <AnimatePresence initial={false}>
              {isSelected && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 space-y-2">
                    <p className="text-xs leading-relaxed" style={{ color: '#E5E7EB' }}>{c.focus}</p>
                    <div
                      className="p-2 rounded-xl text-xs"
                      style={{ background: 'rgba(0,0,0,0.2)' }}
                    >
                      <span className="font-semibold" style={{ color: bm?.color }}>Aprendizaje: </span>
                      <span style={{ color: '#A7B0BA' }}>{c.learning}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function InteractiveMap() {
  const [activeBm, setActiveBm] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleBmClick = (bmId) => {
    setActiveBm(prev => prev === bmId ? null : bmId);
    setSelectedCountry(null);
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(prev => prev?.id === country.id ? null : country);
    const bm = BMS.find(b => b.countryIds.includes(country.id));
    if (bm) setActiveBm(bm.id);
  };

  return (
    <section
      id="internacional"
      className="py-24"
      style={{ background: '#071827' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Internacional"
          title="Experiencia internacional"
          subtitle="3 Business Missions, 3 continentes. Cada país ha sido una oportunidad para aprender, adaptarme y entender el emprendimiento desde nuevas perspectivas."
        />

        {/* ── BM Mission tabs ── */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {BMS.map(bm => {
            const isActive = activeBm === bm.id;
            const countriesInBm = countries.filter(c => bm.countryIds.includes(c.id));
            return (
              <motion.button
                key={bm.id}
                onClick={() => handleBmClick(bm.id)}
                className="p-4 rounded-2xl text-left transition-all duration-200"
                style={{
                  background: isActive ? bm.colorBg : 'rgba(11,37,69,0.5)',
                  border: isActive ? `1px solid ${bm.colorBorder}` : '1px solid rgba(255,255,255,0.06)',
                  boxShadow: isActive ? `0 0 24px ${bm.colorBg}` : 'none',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Plane size={14} color={bm.color} />
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: bm.color }}
                  >
                    {bm.label}
                  </span>
                </div>
                <div className="text-xs mb-2" style={{ color: '#A7B0BA' }}>{bm.period}</div>
                <div className="flex flex-wrap gap-1">
                  {countriesInBm.map(c => (
                    <span
                      key={c.id}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(0,0,0,0.3)',
                        color: isActive ? bm.color : '#A7B0BA',
                        border: `1px solid ${isActive ? bm.colorBorder : 'rgba(255,255,255,0.05)'}`,
                        transition: 'all 0.3s',
                      }}
                    >
                      {c.name}
                    </span>
                  ))}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* ── Desktop Map ── */}
        <div className="hidden md:block">
          <motion.div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(4,15,30,0.95)',
              border: '1px solid rgba(0,209,193,0.1)',
              aspectRatio: '2/1',
              boxShadow: '0 0 60px rgba(0,209,193,0.04) inset',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={(e) => {
              if (e.target.tagName === 'svg' || e.target.tagName === 'path') {
                // Only deselect if clicking blank ocean area (no matching country)
              }
            }}
          >
            <WorldMapReal
              activeBm={activeBm}
              onCountryClick={handleCountryClick}
              selectedCountry={selectedCountry}
            />

            {/* Info card overlay */}
            <AnimatePresence>
              {selectedCountry && (
                <InfoCard
                  country={selectedCountry}
                  onClose={() => setSelectedCountry(null)}
                />
              )}
            </AnimatePresence>

            {/* Hint */}
            {!selectedCountry && (
              <div
                className="absolute top-3 left-3 text-xs px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(0,0,0,0.7)',
                  color: '#A7B0BA',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(8px)',
                  pointerEvents: 'none',
                }}
              >
                Selecciona una BM o haz clic en un país
              </div>
            )}
          </motion.div>
        </div>

        {/* ── Mobile view ── */}
        <div className="md:hidden">
          <MobileView
            activeBm={activeBm}
            onSelectCountry={setSelectedCountry}
            selectedCountry={selectedCountry}
          />
        </div>

        {/* ── Stats row ── */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Países visitados', value: '+8' },
            { label: 'Continentes', value: '3' },
            { label: 'Business Missions', value: '3' },
            { label: 'Meses en ruta', value: '+6' },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="p-4 rounded-2xl text-center"
              style={{
                background: 'rgba(11,37,69,0.4)',
                border: '1px solid rgba(0,209,193,0.1)',
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="text-2xl font-black" style={{ color: '#00D1C1' }}>{s.value}</div>
              <div className="text-xs mt-1" style={{ color: '#A7B0BA' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
