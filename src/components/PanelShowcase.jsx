import { Settings, Terminal, Activity } from 'lucide-react';

export default function PanelShowcase() {
  return (
    <section className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
        <div style={{ flex: '1 1 400px' }}>
          <div className="pill-badge">⚡ Built for Minecraft</div>
          <h2 style={{ textAlign: 'left', fontSize: '2.5rem', marginBottom: '1rem' }}>
            Advanced <span className="text-gradient">Control Panel</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', marginBottom: '2rem' }}>
            Manage your server with ease using our custom-built panel at panel.zyrocloud.in. Access console, manage files, and schedule backups all from one place.
          </p>
          <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
            {[
              { icon: <Terminal size={20} color="#8b5cf6" />, text: "Full Console Access" },
              { icon: <Settings size={20} color="#06b6d4" />, text: "1-Click Modpack Installer" },
              { icon: <Activity size={20} color="#a78bfa" />, text: "Real-time Metrics & Graphs" }
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>
                <div style={{ background: 'rgba(139,92,246,0.1)', padding: '0.5rem', borderRadius: '8px', border: '1px solid rgba(139,92,246,0.2)', display: 'flex' }}>
                  {item.icon}
                </div>
                {item.text}
              </li>
            ))}
          </ul>
          <a href="https://panel.zyrocloud.in" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Login to Panel
          </a>
        </div>

        <div style={{ flex: '1 1 480px' }}>
          <div style={{
            background: '#09090f', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px', padding: '1rem',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(139,92,246,0.1)'
          }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
            </div>
            <div style={{ background: '#000', color: '#22c55e', fontFamily: 'monospace', padding: '1.5rem', borderRadius: '8px', minHeight: '220px', fontSize: '0.85rem', lineHeight: '2' }}>
              <div>[Server] Starting minecraft server version 1.20.4</div>
              <div>[Server] Loading properties</div>
              <div>[Server] Starting Minecraft server on *:25565</div>
              <div>[Server] Preparing level "world"</div>
              <div>[Server] Preparing start region for dimension minecraft:overworld</div>
              <div style={{ color: '#06b6d4' }}>[Server] Done (2.1s)! For help, type "help"</div>
              <span style={{ display: 'inline-block', width: '8px', height: '16px', background: '#22c55e', animation: 'blink 1s step-end infinite', verticalAlign: 'middle' }}></span>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </section>
  );
}
