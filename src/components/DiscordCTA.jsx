import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function DiscordCTA() {
  return (
    <section className="section" style={{ padding: '4rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, #5865F2 0%, #4752C4 100%)',
            borderRadius: '24px',
            padding: '4rem 2rem',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(88,101,242,0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative shapes */}
          <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '300px', height: '300px', background: 'rgba(0,0,0,0.1)', borderRadius: '50%' }}></div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <MessageSquare size={64} color="#fff" style={{ margin: '0 auto 1.5rem', opacity: 0.9 }} />
            <h2 style={{ fontSize: '3rem', color: '#fff', marginBottom: '1rem' }}>
              Join Our Community
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Connect with thousands of other server owners, get instant support, and participate in exclusive giveaways on our Discord server.
            </p>
            <a href="#" className="btn" style={{ background: '#fff', color: '#5865F2', padding: '1rem 3rem', fontSize: '1.2rem', borderRadius: '99px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
              Join Discord
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
