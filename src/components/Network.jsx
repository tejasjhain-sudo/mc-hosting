import { motion } from 'framer-motion';
import { Globe, Server, Activity } from 'lucide-react';

const regions = [
  { name: "North America", locations: ["Ashburn, VA", "Los Angeles, CA", "Dallas, TX"], ping: "< 15ms" },
  { name: "Europe", locations: ["Frankfurt, DE", "London, UK", "Amsterdam, NL"], ping: "< 20ms" },
  { name: "Asia Pacific", locations: ["Singapore", "Tokyo, JP", "Sydney, AU"], ping: "< 25ms" }
];

export default function Network() {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="pill-badge" style={{ margin: '0 auto 1.5rem' }}>
            <Globe size={16} /> Global Infrastructure
          </div>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Servers Near Your <span className="text-gradient">Players</span>
          </h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Our premium anycast network ensures ultra-low latency routing. Play without lag, no matter where your community is based.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {regions.map((region, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass hover-card"
              style={{ padding: '2.5rem', borderRadius: '16px', background: 'rgba(10,12,30,0.8)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(6,182,212,0.1)', padding: '0.75rem', borderRadius: '12px', color: '#06b6d4' }}>
                  <Server size={24} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>{region.name}</h3>
              </div>
              
              <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                {region.locations.map((loc, j) => (
                  <li key={j} style={{ color: '#94a3b8', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8b5cf6' }}></div>
                    {loc}
                  </li>
                ))}
              </ul>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#06b6d4', fontWeight: 700 }}>
                <Activity size={18} /> Avg Ping: {region.ping}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
