import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

const products = [
  {
    tag: "GAME SERVERS",
    title: "Minecraft Java",
    desc: "Vanilla & modded Java edition servers",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    link: "/game/minecraft"
  },
  {
    tag: "GAME SERVERS",
    title: "Palworld Hosting",
    desc: "Co-op worlds with Budget, Power, and Ultimate tiers",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/capsule_616x353.jpg",
    link: "/game/palworld"
  },
  {
    tag: "GAME SERVERS",
    title: "FiveM Hosting",
    desc: "RP communities with matching RAM, NVMe, and vCore plans",
    image: "https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=800&q=80",
    link: "/game/fivem"
  },
  {
    tag: "BOTS",
    title: "Discord Bots",
    desc: "24/7 bot hosting with auto-restart",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=800&q=80",
    link: "/game/discord-bots"
  }
];

export default function ProductsGrid() {
  return (
    <section className="section" id="products">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="pill-badge" style={{ margin: '0 auto 1.5rem' }}>Premium Hardware</div>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Unleash Your <span className="text-gradient">Community</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto 0' }}>
            High-performance servers tailored for the most popular games and communities.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {products.map((p, i) => (
            <Tilt key={i} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
              <Link to={p.link} style={{ textDecoration: 'none' }}>
                <div className="glass hover-card" style={{ 
                  borderRadius: '20px', 
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ position: 'relative', height: '200px', background: '#0a0c1e' }}>
                    <img
                      src={p.image}
                      alt={p.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => { e.target.style.display = 'none'; }}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(7,9,26,1), transparent)'
                    }}></div>
                  </div>
                  <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#06b6d4', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                      {p.tag}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>
                      {p.title}
                    </h3>
                    <p style={{ color: '#94a3b8', lineHeight: 1.6, flex: 1 }}>{p.desc}</p>
                    <div style={{ marginTop: '1.5rem', fontWeight: 700, color: '#8b5cf6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      View Plans →
                    </div>
                  </div>
                </div>
              </Link>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
