import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FlaskConical } from 'lucide-react';
import Home from './pages/Home';
import GamePage from './pages/GamePage';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function BetaBanner() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #8b5cf6, #06b6d4, #8b5cf6)',
      backgroundSize: '200% 100%',
      animation: 'gradientShift 3s linear infinite',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      padding: '0.45rem 0',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 200
    }}>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div style={{
        display: 'inline-flex',
        gap: '4rem',
        animation: 'tickerScroll 18s linear infinite',
        minWidth: '200%'
      }}>
        {Array(10).fill(null).map((_, i) => (
          <span key={i} style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            🧪 Zyrocloud is currently in <strong>BETA</strong> — features are being added. Thank you for being an early supporter! &nbsp; ⭐
          </span>
        ))}
      </div>
    </div>
  );
}

function BetaPopup({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(6px)',
          zIndex: 9000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1rem'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onClick={e => e.stopPropagation()}
          style={{
            background: 'rgba(10, 12, 30, 0.98)',
            border: '1px solid rgba(139,92,246,0.4)',
            borderRadius: '24px',
            padding: '3rem',
            maxWidth: '480px',
            width: '100%',
            textAlign: 'center',
            position: 'relative',
            boxShadow: '0 25px 60px rgba(139,92,246,0.3)'
          }}
        >
          {/* Glow */}
          <div style={{ position: 'absolute', inset: 0, borderRadius: '24px', background: 'radial-gradient(circle at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

          {/* Close */}
          <button onClick={onClose} style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            background: 'rgba(255,255,255,0.07)', border: 'none', color: '#fff',
            width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <X size={16} />
          </button>

          {/* Icon */}
          <div style={{
            width: '72px', height: '72px', borderRadius: '20px',
            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.5rem'
          }}>
            <FlaskConical size={36} color="#fff" />
          </div>

          <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>
            You're in <span style={{ background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Beta</span>!
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Welcome to the early access build of <strong style={{ color: '#fff' }}>Zyrocloud</strong>. We're actively building new features, so you might encounter bugs or incomplete sections. Your feedback matters!
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={onClose} style={{
              background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
              color: '#fff', border: 'none', padding: '0.85rem 2rem',
              borderRadius: '12px', fontWeight: 700, cursor: 'pointer', fontSize: '1rem'
            }}>
              Got it, let's go! 🚀
            </button>
          </div>

          <p style={{ color: '#475569', fontSize: '0.8rem', marginTop: '1.5rem' }}>
            Operating since 2023 · 4,000+ active users
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

        {/* Beta Banner ticker */}
        <BetaBanner />

        {/* Beta Popup on load */}
        {showPopup && <BetaPopup onClose={() => setShowPopup(false)} />}

        {/* ─── Navbar ─── */}
        <nav style={{
          position: 'fixed', top: '30px', width: '100%', zIndex: 100,
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
            <span style={{
              background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
              color: '#fff',
              fontSize: '0.65rem',
              fontWeight: 800,
              padding: '0.2rem 0.55rem',
              borderRadius: '99px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginLeft: '0.25rem',
              verticalAlign: 'middle'
            }}>Beta</span>
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
        <main style={{ flex: 1, paddingTop: '30px' }}>
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
