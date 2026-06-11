import { motion } from 'framer-motion';
import { Shield, ShieldAlert, ShieldCheck } from 'lucide-react';

export default function Security() {
  return (
    <section className="section" style={{ background: 'linear-gradient(to bottom, rgba(7,9,26,0), rgba(139,92,246,0.05), rgba(7,9,26,0))' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="pill-badge" style={{ borderColor: 'rgba(239,68,68,0.3)', color: '#ef4444', background: 'rgba(239,68,68,0.1)' }}>
              <ShieldAlert size={16} /> Enterprise Security
            </div>
            <h2 style={{ textAlign: 'left', fontSize: '3.2rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              480Gbps+ Always-On <br />
              <span className="text-gradient">DDoS Protection</span>
            </h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '2rem' }}>
              We don't take chances with your community. Our custom Layer 3/4 and Layer 7 mitigation rules are specifically tuned for gaming protocols like Minecraft and Source engine, blocking attacks before they ever reach your node.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {["No null-routing during attacks", "Custom game-specific filters", "Instant automated mitigation"].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
                  <div style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', padding: '0.4rem', borderRadius: '50%' }}>
                    <ShieldCheck size={18} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'absolute', inset: '-2rem', background: 'radial-gradient(circle at center, rgba(239,68,68,0.15) 0%, transparent 70%)', zIndex: -1 }}></div>
            <div className="glass" style={{ padding: '3rem', borderRadius: '24px', border: '1px solid rgba(239,68,68,0.2)', textAlign: 'center' }}>
              <Shield size={100} color="#ef4444" style={{ marginBottom: '2rem', filter: 'drop-shadow(0 0 20px rgba(239,68,68,0.5))' }} />
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Zero Downtime</h3>
              <p className="text-muted" style={{ fontSize: '1.1rem' }}>
                Our scrubbing centers clean malicious traffic globally, passing only legitimate player connections to your server with zero added latency.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
