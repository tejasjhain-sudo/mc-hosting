import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const services = [
  {
    name: "Minecraft",
    desc: "Budget to Ultimate game servers.",
    price: "₹23",
    thumb: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"
  },
  {
    name: "Palworld",
    desc: "Co-op survival hosting.",
    price: "₹48",
    thumb: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/capsule_231x87.jpg"
  },
  {
    name: "FiveM",
    desc: "RP communities and scripts.",
    price: "₹48",
    thumb: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/capsule_231x87.jpg"
  },
  {
    name: "Discord Bots",
    desc: "24/7 bot hosting with auto-restart.",
    price: "₹200",
    thumb: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=200"
  }
];

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-world-bg" />

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', alignItems: 'center', width: '100%', zIndex: 1, position: 'relative' }}>

        {/* ── LEFT ── */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

          {/* Stars */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={18} color="#f59e0b" fill="#f59e0b" />
            ))}
            <span style={{ color: '#94a3b8', fontSize: '0.9rem', marginLeft: '0.25rem' }}>
              4.7 rating with 4,000+ active users
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: '4.2rem', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
            Unleash the Power<br />
            of Reliable Game<br />
            Hosting
          </h1>
          <h1 style={{ fontSize: '4.2rem', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '2rem' }}>
            <span className="text-gradient">with LifeCloud</span>
          </h1>

          {/* Description box */}
          <div style={{
            background: 'rgba(10,12,30,0.6)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
            backdropFilter: 'blur(12px)',
            maxWidth: '480px'
          }}>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
              Operating since 2023, LifeCloud is trusted by gaming creators, Minecraft networks, and growing communities. We operate 2,000+ active servers with low-latency infrastructure, DDoS protection, and reliable uptime.
            </p>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="#pricing" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem', borderRadius: '10px' }}>
              View Plans <ArrowRight size={18} />
            </a>
            <a href="https://panel.zyrocloud.in" target="_blank" rel="noopener noreferrer" className="btn btn-dark" style={{ padding: '0.9rem 2rem', fontSize: '1rem', borderRadius: '10px' }}>
              Get Started
            </a>
          </div>
        </motion.div>

        {/* ── RIGHT — Service Card ── */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <Tilt glareEnable glareMaxOpacity={0.08} scale={1.015} transitionSpeed={3000} tiltMaxAngleX={5} tiltMaxAngleY={5}
            style={{ transformStyle: 'preserve-3d' }}>
            <div className="service-card">

              {/* Header */}
              <div className="service-header">
                <span style={{ fontWeight: 700, fontSize: '1rem' }}>Our Service</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <ChevronLeft size={18} color="#64748b" style={{ cursor: 'pointer' }} />
                  <ChevronRight size={18} color="#64748b" style={{ cursor: 'pointer' }} />
                  <span style={{ color: '#8b5cf6', fontWeight: 700, fontSize: '0.85rem', marginLeft: '0.5rem' }}>
                    #1 | Hosting
                  </span>
                </div>
              </div>

              {/* Items */}
              {services.map((s, i) => (
                <div key={i} className="service-item">
                  <img
                    src={s.thumb}
                    alt={s.name}
                    className="service-thumb"
                    onError={e => { e.target.style.background = '#1e1b4b'; e.target.src = ''; }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.15rem' }}>{s.name}</div>
                    <div style={{ color: '#64748b', fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.desc}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.15rem' }}>Starting at</div>
                    <div style={{ color: '#06b6d4', fontWeight: 800, fontSize: '1.1rem', lineHeight: 1 }}>
                      {s.price}<span style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 400 }}>/mo</span>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </Tilt>
        </motion.div>

      </div>
    </section>
  );
}
