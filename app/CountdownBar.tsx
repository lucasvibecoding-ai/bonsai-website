'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CountdownBar() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const target = document.getElementById('hero');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{ background: 'rgba(249,246,242,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(58,99,71,0.15)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4" style={{ whiteSpace: 'nowrap' }}>
          <span style={{ fontFamily: "'Lora', Georgia, serif", fontWeight: 700, fontSize: 20, color: '#1e1a14' }}>
            Bonsai
          </span>
          <span style={{ color: 'rgba(58,99,71,0.3)' }}>|</span>
          <span className="hidden sm:inline text-sm" style={{ color: '#7d7568' }}>47/50 Students Signed Up</span>
          <span className="hidden sm:inline" style={{ color: 'rgba(58,99,71,0.3)' }}>|</span>
          <span className="hidden sm:inline text-sm" style={{ color: '#b44', fontWeight: 600 }}>Only 3 Spots Left</span>
          <span className="sm:hidden text-xs" style={{ color: '#b44', fontWeight: 600 }}>3 Spots Left</span>
        </div>
        <button
          onClick={() => router.push('/checkout')}
          type="button"
          className="text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer hover:brightness-110 hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #3a6347, #264432)' }}
        >
          Get Access
        </button>
      </div>
    </div>
  );
}
