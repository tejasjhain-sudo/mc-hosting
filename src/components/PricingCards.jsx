import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PricingCards({ gameName, plans }) {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
            {gameName} <span className="text-gradient">Plans</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>
            Choose the perfect plan for your community. Upgrade anytime.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass"
              style={{
                padding: '2.5rem 2rem',
                borderRadius: '24px',
                position: 'relative',
                display: 'flex', flexDirection: 'column',
                border: plan.popular ? '1px solid rgba(139,92,246,0.5)' : '1px solid rgba(255,255,255,0.07)',
                background: plan.popular ? 'rgba(139,92,246,0.05)' : 'rgba(10,12,30,0.6)'
              }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(90deg, #06b6d4, #8b5cf6)', color: '#fff',
                  padding: '0.4rem 1.2rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 700,
                  boxShadow: '0 4px 15px rgba(139,92,246,0.4)'
                }}>
                  Most Popular
                </div>
              )}
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 700 }}>{plan.name}</h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>₹{plan.price}</span>
                <span className="text-muted">/mo</span>
              </div>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem', flex: 1 }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#e2e8f0', fontSize: '0.95rem' }}>
                    <div style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', padding: '0.2rem', borderRadius: '50%' }}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              
              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', padding: '1rem', fontSize: '1.05rem', borderRadius: '12px' }}>
                Deploy Server
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
