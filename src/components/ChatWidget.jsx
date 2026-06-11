import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Menu, ThumbsUp, Paperclip, Smile, MessageCircle, X } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompts, setShowPrompts] = useState(true);
  const [inputText, setInputText] = useState('');
  
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: '👋 Hi! Its Me ZyroAI. How can we help you?', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // The custom yellow color from the screenshots
  const primaryYellow = "#ffc107";
  const darkGray = "#2f3136";

  const prompts = [
    "I have a question",
    "Tell me more",
    "How To Purchase any plan?"
  ];

  const handleSend = (text) => {
    if (!text.trim()) return;
    
    // Add user message
    const newMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };
    
    setMessages(prev => [...prev, newMsg]);
    setInputText('');

    // Simulate bot typing then replying
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'bot',
        text: 'Thanks for reaching out! Our support team will be with you shortly.',
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      }]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend(inputText);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '1rem',
      fontFamily: 'Inter, sans-serif'
    }}>
      <AnimatePresence>
        {/* Closed State - Floating Bubbles */}
        {!isOpen && showPrompts && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem', marginBottom: '1rem' }}
          >
            {/* White welcome bubble */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={(e) => { e.stopPropagation(); setShowPrompts(false); }}
                style={{
                  position: 'absolute', top: '-10px', right: '-10px',
                  background: '#ef4444', color: '#fff', border: 'none',
                  borderRadius: '50%', width: '24px', height: '24px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', zIndex: 10
                }}
              >
                <X size={14} strokeWidth={3} />
              </button>
              <div style={{
                background: '#fff', color: '#000', padding: '1.25rem', borderRadius: '16px',
                borderBottomRightRadius: '4px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                maxWidth: '280px', fontSize: '1.05rem', fontWeight: 500, marginBottom: '0.5rem'
              }}>
                👋 Hi! Its Me ZyroAI. How can we help you?
              </div>
            </div>

            {/* Floating prompt buttons */}
            {prompts.map((p, i) => (
              <button key={i} style={{
                background: darkGray, border: `1px solid ${primaryYellow}`, color: primaryYellow,
                padding: '0.6rem 1.25rem', borderRadius: '8px', cursor: 'pointer',
                fontSize: '1rem', fontWeight: 500, boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={e => e.target.style.background = '#3f4148'}
              onMouseOut={e => e.target.style.background = darkGray}
              onClick={() => { setIsOpen(true); handleSend(p); }}>
                {p}
              </button>
            ))}
          </motion.div>
        )}

        {/* Opened State - Full Chat Window */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            style={{
              background: '#fff', borderRadius: '16px', overflow: 'hidden',
              width: '350px', height: '550px', display: 'flex', flexDirection: 'column',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
            }}
          >
            {/* Header */}
            <div style={{
              background: primaryYellow, padding: '1.25rem 1rem', display: 'flex', 
              alignItems: 'center', justifyContent: 'space-between', color: '#111'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={() => setIsOpen(false)}>
                <ChevronLeft size={24} />
                <span style={{ fontWeight: 600, fontSize: '1.2rem' }}>Customer Support</span>
              </div>
              <Menu size={24} style={{ cursor: 'pointer' }} />
            </div>

            {/* Chat Body */}
            <div style={{ flex: 1, padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto', background: '#fafafa' }}>
              <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>Customer Support</div>
              
              {messages.map((msg) => (
                <div key={msg.id} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-end', 
                  gap: '0.75rem',
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row'
                }}>
                  {msg.sender === 'bot' && (
                    <div style={{ 
                      width: '40px', height: '40px', borderRadius: '50%', background: '#e2e8f0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0
                    }}>
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=e2e8f0" alt="avatar" style={{ width: '100%', height: '100%' }} />
                    </div>
                  )}
                  <div style={{
                    background: msg.sender === 'user' ? darkGray : primaryYellow, 
                    color: msg.sender === 'user' ? '#fff' : '#111', 
                    padding: '1rem', 
                    borderRadius: '16px', 
                    borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '16px', 
                    borderBottomRightRadius: msg.sender === 'user' ? '4px' : '16px',
                    maxWidth: '240px',
                    fontSize: '1.05rem', 
                    fontWeight: 500
                  }}>
                    {msg.text}
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.5rem' }}>{msg.time}</span>
                </div>
              ))}

              {/* Chat Prompts inside window (only show if no user messages yet) */}
              {messages.length === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
                  {prompts.map((p, i) => (
                    <button key={i} 
                    onClick={() => handleSend(p)}
                    style={{
                      background: darkGray, border: `1px solid ${primaryYellow}`, color: primaryYellow,
                      padding: '0.6rem 1.25rem', borderRadius: '8px', cursor: 'pointer',
                      fontSize: '1rem', fontWeight: 500
                    }}>
                      {p}
                    </button>
                  ))}
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div style={{ padding: '1rem', background: '#fff', borderTop: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type here and press enter.." 
                style={{ flex: 1, border: 'none', outline: 'none', fontSize: '0.95rem', color: '#333' }} 
              />
              <div style={{ display: 'flex', gap: '0.75rem', color: '#666' }}>
                <ThumbsUp size={20} style={{ cursor: 'pointer' }} onClick={() => handleSend("👍")} />
                <Paperclip size={20} style={{ cursor: 'pointer' }} />
                <Smile size={20} style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { setIsOpen(true); setShowPrompts(false); }}
          style={{
            width: '70px', height: '70px', borderRadius: '50%',
            background: primaryYellow,
            border: 'none', color: darkGray, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 10px 25px rgba(255,193,7,0.3)',
            position: 'relative'
          }}
        >
          {/* Notification Badge */}
          <div style={{
            position: 'absolute', top: '0', right: '0',
            background: '#ef4444', color: '#fff', width: '22px', height: '22px',
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.8rem', fontWeight: 700, border: '2px solid #07091a'
          }}>1</div>
          
          <MessageCircle size={36} color={darkGray} fill={darkGray} />
        </motion.button>
      )}
    </div>
  );
}
