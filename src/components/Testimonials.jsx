import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { name: "AlexMines", role: "Network Owner", text: "Switched from a competitor and instantly noticed a 40% reduction in our TPS lag. Support team migrated all our plugins flawlessly.", rating: 5 },
  { name: "PixelCrafters", role: "SMP Community", text: "Best value for money by far. We run a heavily modded Fabric server with 50+ players and the Ryzen 9 nodes chew right through it.", rating: 5 },
  { name: "DevJohn", role: "Discord Bot Dev", text: "Panel is super responsive, uptime is exactly as advertised. I host 14 different Discord bots here without a single hiccup.", rating: 5 },
  { name: "SurvivalElite", role: "Server Admin", text: "The anti-DDoS actually works. We used to get taken offline every weekend, but since moving to Zyrocloud we haven't had a single drop.", rating: 5 },
  { name: "RustyGamers", role: "Rust Clan Leader", text: "Insane NVMe speeds. Wipes load up in seconds and saving the map doesn't cause rubberbanding anymore.", rating: 5 },
  { name: "BuildTeamPro", role: "Creative Network", text: "Fast setup, great panel, and the prices are unbeatable for the hardware you get.", rating: 5 }
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Trusted by <span className="text-gradient">Thousands</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>Don't just take our word for it.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass hover-card"
              style={{ padding: '2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <div style={{ display: 'flex', gap: '0.2rem' }}>
                {[...Array(rev.rating)].map((_, j) => <Star key={j} size={16} color="#fbbf24" fill="#fbbf24" />)}
              </div>
              <p style={{ color: '#e2e8f0', fontSize: '1rem', lineHeight: 1.6, fontStyle: 'italic', flex: 1 }}>
                "{rev.text}"
              </p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', marginTop: 'auto' }}>
                <div style={{ fontWeight: 700 }}>{rev.name}</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{rev.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
