import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "How long does setup take?", a: "Your server is deployed instantly after payment is confirmed. You can start playing within seconds." },
  { q: "Can I upgrade my plan later?", a: "Yes! You can upgrade or downgrade your plan at any time through our billing portal without losing any data." },
  { q: "Do you support Modpacks?", a: "Our control panel features a 1-click installer for thousands of popular modpacks from CurseForge, FTB, and Modrinth." },
  { q: "Is DDoS protection included?", a: "Yes, all servers come with free enterprise-grade DDoS protection to keep your server online 24/7." }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container" style={{ maxWidth: '780px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faqs.map((f, i) => (
            <div key={i} onClick={() => setOpen(open === i ? null : i)}
              style={{
                background: 'rgba(10,12,30,0.85)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '12px', padding: '1.25rem 1.5rem', cursor: 'pointer',
                borderColor: open === i ? 'rgba(139,92,246,0.3)' : 'rgba(255,255,255,0.07)',
                transition: 'border-color 0.25s ease'
              }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, fontSize: '1rem' }}>
                {f.q}
                {open === i ? <Minus size={18} color="#8b5cf6" /> : <Plus size={18} color="#64748b" />}
              </div>
              {open === i && (
                <div style={{ marginTop: '0.75rem', color: '#64748b', lineHeight: 1.7, fontSize: '0.95rem' }}>{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
