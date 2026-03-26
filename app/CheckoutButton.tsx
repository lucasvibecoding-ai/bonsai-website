'use client';

import { useRouter } from 'next/navigation';

export default function CheckoutButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/checkout')}
      type="button"
      className="cta-btn text-white w-full md:w-auto px-6 sm:px-8 md:px-16 py-5 sm:py-7 md:py-9 rounded-lg text-xl sm:text-2xl md:text-3xl font-medium transition-all hover:shadow-lg cursor-pointer disabled:opacity-70 animate-pulse-glow leading-snug"
    >
      Unlock Permanent
      <br />
      Access Now
    </button>
  );
}
