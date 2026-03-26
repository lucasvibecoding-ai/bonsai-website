'use client';

import { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

export default function StripeForm({ email }: { email: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    setError('');

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
        receipt_email: email || undefined,
      },
    });

    if (submitError) {
      setError(submitError.message || 'Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement
        options={{
          wallets: {
            applePay: 'auto',
            googlePay: 'auto',
          },
        }}
      />
      {error && (
        <p style={{ color: '#df1b41', fontSize: '14px', marginTop: '12px' }}>
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        style={{
          width: '100%',
          marginTop: '24px',
          padding: '12px 24px',
          background: isProcessing ? '#a3acb9' : '#635BFF',
          border: 'none',
          borderRadius: '6px',
          color: '#ffffff',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          fontSize: '16px',
          fontWeight: 600,
          cursor: isProcessing ? 'not-allowed' : 'pointer',
          transition: 'all 0.15s ease',
          letterSpacing: '0.01em',
        }}
      >
        {isProcessing ? 'Processing...' : 'Pay $47.00'}
      </button>
    </form>
  );
}
