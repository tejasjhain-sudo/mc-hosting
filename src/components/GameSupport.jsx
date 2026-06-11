export default function GameSupport() {
  const versions = [
    { name: "Vanilla", color: "#82C873" },
    { name: "Paper", color: "#F0F0F0" },
    { name: "Spigot", color: "#FF9900" },
    { name: "Forge", color: "#DFBA6B" },
    { name: "Fabric", color: "#D3CBBE" },
    { name: "Modpacks", color: "#51DBDE" }
  ];

  return (
    <section className="section glass" style={{ margin: '4rem 0', borderRadius: '0', borderLeft: 'none', borderRight: 'none' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '2rem' }}>Supported <span className="text-gradient">Versions</span></h2>
        <p className="text-muted" style={{ marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          One-click install for all your favorite server software and modpacks.
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          {versions.map((v, i) => (
            <div key={i} className="hover-card" style={{
              padding: '1.5rem 3rem',
              background: 'var(--color-bg-deep)',
              borderRadius: '12px',
              border: `1px solid ${v.color}40`,
              fontWeight: 'bold',
              fontSize: '1.2rem',
              color: v.color
            }}>
              {v.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
