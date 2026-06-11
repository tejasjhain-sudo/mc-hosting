import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Bot } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '1rem'
    }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            style={{
              background: 'rgba(10,12,30,0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '1.25rem',
              width: '280px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              position: 'relative'
            }}
          >
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute', top: '0.75rem', right: '0.75rem',
                background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer',
                padding: '0.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
            >
              <X size={16} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={18} color="#fff" />
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>NexterAI</div>
            </div>
            <p style={{ color: '#e2e8f0', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
              Need help? Ask questions and get instant answers here!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px', height: '60px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
          border: 'none', color: '#fff', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(139,92,246,0.4)'
        }}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
}
