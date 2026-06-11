import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import GamePage from './pages/GamePage';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* ─── Navbar ─── */}
        <nav style={{
          position: 'fixed', top: 0, width: '100%', zIndex: 100,
          padding: '1rem 2rem',
          background: 'rgba(7, 9, 26, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: '2rem'
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0, textDecoration: 'none', color: '#fff' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 900, fontSize: '0.9rem', color: '#fff'
            }}>ZC</div>
            <span style={{ fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.01em' }}>Zyrocloud</span>
          </Link>

          {/* Nav Links */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link to="/" style={{ color: '#94a3b8', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseOver={e => e.target.style.color = '#fff'}
              onMouseOut={e => e.target.style.color = '#94a3b8'}>Home</Link>
            <Link to="/game/minecraft" style={{ color: '#94a3b8', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseOver={e => e.target.style.color = '#fff'}
              onMouseOut={e => e.target.style.color = '#94a3b8'}>Minecraft</Link>
            <Link to="/game/palworld" style={{ color: '#94a3b8', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseOver={e => e.target.style.color = '#fff'}
              onMouseOut={e => e.target.style.color = '#94a3b8'}>Palworld</Link>
            <Link to="/game/fivem" style={{ color: '#94a3b8', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseOver={e => e.target.style.color = '#fff'}
              onMouseOut={e => e.target.style.color = '#94a3b8'}>FiveM</Link>
            <Link to="/game/discord-bots" style={{ color: '#94a3b8', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseOver={e => e.target.style.color = '#fff'}
              onMouseOut={e => e.target.style.color = '#94a3b8'}>Bots</Link>
            <a href="https://panel.zyrocloud.in" target="_blank" rel="noopener noreferrer"
              style={{ color: '#94a3b8', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseOver={e => e.target.style.color = '#fff'}
              onMouseOut={e => e.target.style.color = '#94a3b8'}>Panel</a>
          </div>

          {/* Right Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexShrink: 0 }}>
            <a href="https://panel.zyrocloud.in" target="_blank" rel="noopener noreferrer"
              style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none' }}>Log In</a>
            <a href="https://panel.zyrocloud.in" target="_blank" rel="noopener noreferrer"
              className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem', borderRadius: '8px', textDecoration: 'none' }}>
              Get Started
            </a>
          </div>
        </nav>

        {/* ─── Page Content ─── */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:gameId" element={<GamePage />} />
          </Routes>
        </main>

        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
