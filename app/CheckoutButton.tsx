'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    router.push('/checkout');
  };

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        disabled={loading}
        className="cta-btn text-white w-full md:w-auto px-6 sm:px-8 md:px-16 py-5 sm:py-7 md:py-9 rounded-lg text-xl sm:text-2xl md:text-3xl font-medium transition-all hover:shadow-lg cursor-pointer disabled:opacity-70 animate-pulse-glow leading-snug"
      >
        Unlock Permanent
        <br />
        Access Now
      </button>

      {loading && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(249,246,242,0.95)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              border: '3px solid rgba(58,99,71,0.2)',
              borderTopColor: '#3a6347',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }}
          />
          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: 18,
              color: '#1e1a14',
              fontWeight: 500,
            }}
          >
            Secure payment loading…
          </p>
          <style dangerouslySetInnerHTML={{ __html: '@keyframes spin { to { transform: rotate(360deg); } }' }} />
        </div>
      )}
    </>
  );
}
