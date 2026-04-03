'use client';

import { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';

export default function CountdownBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      style={{
        background: 'rgba(43,43,43,0.95)',
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(224,122,95,0.3)',
        boxShadow: '0 -2px 12px rgba(0,0,0,0.15)',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '12px 16px', paddingBottom: 'calc(12px + env(safe-area-inset-bottom, 0px))', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        <p className="hidden sm:block" style={{ color: '#FAF8F5', fontSize: 18, fontWeight: 500, margin: 0 }}>
          Offer valid for
        </p>
        <CountdownTimer banner />
      </div>
    </div>
  );
}
