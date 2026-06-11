import { useParams } from 'react-router-dom';
import PricingCards from '../components/PricingCards';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

// Define the plans data for all games based on user input
const baseFeatures = [
  "Unlimited Slots",
  "NVMe SSD Storage",
  "DDoS Protection",
  "Free Subdomain",
  "Automated Backups",
  "Full FTP Access",
  "24/7 Support"
];

const gamesData = {
  minecraft: {
    title: "Minecraft Java",
    subtitle: "Vanilla & modded Java edition servers",
    bgImage: "https://wallpapercave.com/wp/wp2754990.jpg",
    plans: [
      { name: "Starter", price: "23", features: ["2GB RAM", ...baseFeatures], popular: false },
      { name: "Basic", price: "46", features: ["4GB RAM", ...baseFeatures], popular: false },
      { name: "Premium", price: "92", features: ["8GB RAM", ...baseFeatures], popular: true },
      { name: "Extreme", price: "184", features: ["16GB RAM", ...baseFeatures], popular: false }
    ]
  },
  palworld: {
    title: "Palworld Hosting",
    subtitle: "Co-op worlds with Budget, Power, and Ultimate tiers",
    bgImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/capsule_616x353.jpg",
    plans: [
      { name: "Budget", price: "35", features: ["4GB RAM", ...baseFeatures], popular: false },
      { name: "Power", price: "65", features: ["8GB RAM", ...baseFeatures], popular: true },
      { name: "Ultimate", price: "110", features: ["16GB RAM", ...baseFeatures], popular: false },
      { name: "Extreme", price: "184", features: ["32GB RAM", ...baseFeatures], popular: false }
    ]
  },
  fivem: {
    title: "FiveM Hosting",
    subtitle: "RP communities with matching RAM, NVMe, and vCore plans",
    bgImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/capsule_616x353.jpg",
    plans: [
      { name: "Starter", price: "23", features: ["2GB RAM", ...baseFeatures], popular: false },
      { name: "Basic", price: "46", features: ["4GB RAM", ...baseFeatures], popular: false },
      { name: "Premium", price: "92", features: ["8GB RAM", ...baseFeatures], popular: true },
      { name: "Extreme", price: "184", features: ["16GB RAM", ...baseFeatures], popular: false }
    ]
  },
  "discord-bots": {
    title: "Discord Bots",
    subtitle: "24/7 bot hosting with auto-restart",
    bgImage: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=1920",
    plans: [
      { name: "Nano", price: "10", features: ["512MB RAM", "Auto-Restart", "Node/Python", "24/7 Uptime"], popular: false },
      { name: "Micro", price: "15", features: ["1GB RAM", "Auto-Restart", "Node/Python", "24/7 Uptime"], popular: true },
      { name: "Mega", price: "25", features: ["2GB RAM", "Auto-Restart", "Node/Python", "24/7 Uptime"], popular: false }
    ]
  }
};

export default function GamePage() {
  const { gameId } = useParams();
  const game = gamesData[gameId];

  if (!game) {
    return (
      <div style={{ paddingTop: '10rem', textAlign: 'center', minHeight: '60vh' }}>
        <h1 style={{ fontSize: '3rem', color: '#fff' }}>Game Not Found</h1>
        <p className="text-muted">The requested service does not exist.</p>
      </div>
    );
  }

  return (
    <>
      {/* Game Header */}
      <section style={{
        padding: '10rem 0 5rem',
        position: 'relative',
        background: `linear-gradient(to bottom, rgba(7,9,26,0.8), rgba(7,9,26,1)), url(${game.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            {game.title}
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            {game.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <div style={{ paddingTop: '3rem' }}>
        <PricingCards gameName={game.title} plans={game.plans} />
      </div>

      <FAQ />
    </>
  );
}
