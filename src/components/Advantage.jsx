import { Database, Rocket, TrendingUp, Headphones, Cpu, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const left = [
  { icon: <Database size={20} color="#8b5cf6" />, title: "High Performance Nodes", desc: "Enterprise NVMe – ultra-low latency" },
  { icon: <Rocket size={20} color="#06b6d4" />, title: "Fast Manual Setup", desc: "Orders reviewed and activated with care" },
  { icon: <TrendingUp size={20} color="#a78bfa" />, title: "Affordable Pricing", desc: "Minecraft plans starting at just ₹23/month" }
];

const right = [
  { icon: <Headphones size={20} color="#06b6d4" />, title: "24/7 Support", desc: "Real team – quick response" },
  { icon: <Cpu size={20} color="#8b5cf6" />, title: "Fast Processors", desc: "Xeon, EPYC, Ryzen, and Platinum tiers" },
  { icon: <Zap size={20} color="#a78bfa" />, title: "High Speed RAM", desc: "ECC memory – up to 32 GB per plan" }
];

export default function Advantage() {
  return (
    <section className="section" style={{ paddingTop: '3rem' }}>
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2 }}>
          Powerful Hosting Features Built for<br />
          <span className="text-gradient">Performance and Reliability</span>
        </h2>
      </div>

      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>

          {/* Left pills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: '1', minWidth: '260px', maxWidth: '340px' }}>
            {left.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="advantage-pill"
              >
                <div className="advantage-icon">{f.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.15rem' }}>{f.title}</div>
                  <div style={{ color: '#64748b', fontSize: '0.82rem' }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Hexagon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hexagon-wrapper"
          >
            <div className="hexagon-border" />
            <div className="hexagon">
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', color: '#94a3b8', marginBottom: '0.4rem' }}>
                EXPERIENCE THE
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '0.4rem' }}>
                LifeCloud
              </div>
              <div className="text-gradient" style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                Advantage
              </div>
            </div>
          </motion.div>

          {/* Right pills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: '1', minWidth: '260px', maxWidth: '340px' }}>
            {right.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="advantage-pill"
              >
                <div className="advantage-icon">{f.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.15rem' }}>{f.title}</div>
                  <div style={{ color: '#64748b', fontSize: '0.82rem' }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
