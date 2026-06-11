import { Gamepad2 } from 'lucide-react';

const games = [
  "Rust", "ARK: Survival Ascended", "Terraria", "Valheim", "CS2", 
  "Garry's Mod", "Enshrouded", "Project Zomboid", "Unturned", "DayZ"
];

export default function GameMarquee() {
  return (
    <div className="marquee-container">
      {/* We duplicate the items to make the infinite scroll seamless */}
      <div className="marquee-content">
        {[...games, ...games].map((game, i) => (
          <div key={i} className="marquee-item">
            <Gamepad2 size={24} color="#8b5cf6" />
            {game}
          </div>
        ))}
      </div>
    </div>
  );
}
