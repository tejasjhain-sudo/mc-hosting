import { Check } from 'lucide-react';

const plans = [
  { name: "Starter", ram: "2GB", price: "₹23", color: "#06b6d4" },
  { name: "Basic",   ram: "4GB", price: "₹46", color: "#3b82f6" },
  { name: "Premium", ram: "8GB", price: "₹92", color: "#8b5cf6", popular: true },
  { name: "Extreme", ram: "16GB",price: "₹184",color: "#ec4899" }
];

const features = ["NVMe SSD Storage", "DDoS Protection", "Free Subdomain", "Automated Backups", "Full FTP Access", "24/7 Support"];

export default function Pricing() {
  return (
    <section id="pricing" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="pill-badge" style={{ margin: '0 auto 1.5rem' }}>💎 Transparent Pricing</div>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {plans.map((plan, i) => (
            <div key={i} style={{
              background: 'rgba(10,12,30,0.9)',
              border: `1px solid ${plan.popular ? plan.color + '60' : 'rgba(255,255,255,0.07)'}`,
              borderRadius: '16px', padding: '2rem',
              position: 'relative',
              transform: plan.popular ? 'scale(1.04)' : 'none',
              boxShadow: plan.popular ? `0 0 40px ${plan.color}25` : 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              {plan.popular && (
                <div style={{
                  position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                  background: `linear-gradient(135deg, #8b5cf6, #06b6d4)`,
                  padding: '4px 16px', borderRadius: '99px',
                  fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap'
                }}>Most Popular</div>
              )}
              <div style={{ display: 'inline-block', background: plan.color + '18', color: plan.color, border: `1px solid ${plan.color}35`, padding: '0.3rem 0.9rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                {plan.name}
              </div>
              <div style={{ fontSize: '2.8rem', fontWeight: 900, lineHeight: 1, marginBottom: '0.25rem' }}>
                {plan.price}<span style={{ fontSize: '1rem', color: '#64748b', fontWeight: 400 }}>/mo</span>
              </div>
              <div style={{ color: '#64748b', marginBottom: '1.5rem', fontWeight: 600 }}>{plan.ram} RAM | Unlimited Slots</div>
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1.5rem' }}></div>
              <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                {features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem', color: '#94a3b8', fontSize: '0.95rem' }}>
                    <div style={{ background: plan.color + '20', borderRadius: '50%', padding: '3px', display: 'flex' }}>
                      <Check size={13} color={plan.color} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-dark'}`} style={{ width: '100%', padding: '0.85rem' }}>
                Deploy Server
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
