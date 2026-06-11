export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '4rem 0 2rem', background: '#07091a' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.8rem' }}>ZC</div>
            <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>Zyrocloud</span>
          </div>
          <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6 }}>Premium game server hosting for serious creators.</p>
        </div>
        {[
          { title: 'Services', links: ['Minecraft Hosting', 'Palworld Hosting', 'FiveM Hosting', 'Discord Bots'] },
          { title: 'Resources', links: ['Control Panel', 'Knowledge Base', 'Status Page'] },
          { title: 'Legal', links: ['Terms of Service', 'Privacy Policy', 'Refund Policy'] }
        ].map((col, i) => (
          <div key={i}>
            <h4 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem' }}>{col.title}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {col.links.map((l, j) => (
                <li key={j}><a href="#" style={{ color: '#475569', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseOver={e => e.target.style.color = '#94a3b8'}
                  onMouseOut={e => e.target.style.color = '#475569'}>{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container" style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ color: '#334155', fontSize: '0.85rem' }}>© {new Date().getFullYear()} Zyrocloud. All rights reserved.</p>
        <a href="https://panel.zyrocloud.in" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}>
          Access Panel
        </a>
      </div>
    </footer>
  );
}
