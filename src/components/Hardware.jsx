import { Cpu, HardDrive, MemoryStick } from 'lucide-react';

export default function Hardware() {
  return (
    <section className="section">
      <div className="container">
        <h2>Uncompromised <span className="text-gradient">Hardware</span></h2>
        
        <div className="bento-grid">
          {/* Main feature - Takes up more space */}
          <div className="glass hover-card bento-item bento-item-8" style={{ padding: '4rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'var(--color-primary)', filter: 'blur(120px)', opacity: 0.15, borderRadius: '50%' }}></div>
            
            <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '1rem', borderRadius: '16px', width: 'max-content', marginBottom: '2rem' }}>
              <Cpu size={40} color="var(--color-primary)" />
            </div>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Extreme Performance CPUs</h3>
            <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '500px' }}>
              Powered by the latest AMD Ryzen 9 and Intel Core i9 processors, ensuring your server ticks at 20 TPS even with hundreds of players and heavy modpacks.
            </p>
          </div>

          <div className="bento-item bento-item-4" style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '1.5rem' }}>
            {/* Secondary features stacked */}
            <div className="glass hover-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '0.75rem', borderRadius: '12px' }}>
                  <HardDrive size={24} color="var(--color-secondary)" />
                </div>
                <h3 style={{ fontSize: '1.25rem' }}>Gen4 NVMe SSDs</h3>
              </div>
              <p className="text-muted">Instant world loading. PCIe 4.0 drives are up to 10x faster than standard enterprise SSDs.</p>
            </div>

            <div className="glass hover-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '0.75rem', borderRadius: '12px' }}>
                  <MemoryStick size={24} color="var(--color-accent-brown)" />
                </div>
                <h3 style={{ fontSize: '1.25rem' }}>DDR5 ECC RAM</h3>
              </div>
              <p className="text-muted">Never run out of memory. Blazing fast DDR5 ECC RAM ensures absolute stability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
