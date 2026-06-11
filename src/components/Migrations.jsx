import { motion } from 'framer-motion';
import { ArrowRight, HardDriveDownload } from 'lucide-react';

export default function Migrations() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(6,182,212,0.1))',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            padding: '4rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Abstract background blobs for the banner */}
          <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: '#8b5cf6', filter: 'blur(100px)', opacity: 0.3 }}></div>
          <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', background: '#06b6d4', filter: 'blur(100px)', opacity: 0.3 }}></div>
          
          <HardDriveDownload size={48} color="#06b6d4" style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 1 }} />
          <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
            Moving from another host?
          </h2>
          <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem', position: 'relative', zIndex: 1 }}>
            Don't let the fear of losing data stop you from upgrading. Our expert team provides free, full-service migrations from any existing host or VPS within 24 hours.
          </p>
          <a href="#" className="btn btn-primary" style={{ position: 'relative', zIndex: 1, padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Request Migration <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
