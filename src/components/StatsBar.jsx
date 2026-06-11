import { motion } from 'framer-motion';

const stats = [
  { value: "2,000+", label: "Active Servers" },
  { value: "4,000+", label: "Happy Users" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "< 20ms", label: "Average Latency" },
  { value: "480Gbps", label: "DDoS Protection" },
  { value: "24/7", label: "Support Team" }
];

export default function StatsBar() {
  return (
    <section style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(255,255,255,0.015)',
      padding: '2.5rem 0',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      zIndex: 1
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <div style={{
                fontSize: '1.8rem',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                background: 'linear-gradient(90deg, #06b6d4, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.25rem'
              }}>{s.value}</div>
              <div style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 500 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
