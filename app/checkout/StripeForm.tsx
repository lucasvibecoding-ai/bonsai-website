'use client';

import { useState } from 'react';
import {
  PaymentElement,
  ExpressCheckoutElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import type { StripeExpressCheckoutElementClickEvent } from '@stripe/stripe-js';

const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

export default function StripeForm({ email, onEmailChange, paypalSlot }: { email: string; onEmailChange: (v: string) => void; paypalSlot?: React.ReactNode }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const emailValid = isValidEmail(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailTouched(true);
    if (!emailValid) {
      setError('Please enter your email address above.');
      return;
    }
    if (!stripe || !elements) return;

    setIsProcessing(true);
    setError('');

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
        receipt_email: email,
      },
    });

    if (submitError) {
      setError(submitError.message || 'Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  const onExpressCheckoutConfirm = async () => {
    if (!emailValid) {
      setError('Please enter your email address above before using express checkout.');
      setEmailTouched(true);
      return;
    }
    if (!stripe || !elements) return;
    setIsProcessing(true);
    setError('');

    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
        receipt_email: email,
      },
    });

    if (confirmError) {
      setError(confirmError.message || 'Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  const onExpressCheckoutClick = (event: StripeExpressCheckoutElementClickEvent) => {
    if (!emailValid) {
      setError('Please enter your email address above before using express checkout.');
      setEmailTouched(true);
      return;
    }
    event.resolve();
  };

  return (
    <div>
      {emailTouched && !emailValid && (
        <p style={{ color: '#df1b41', fontSize: '14px', marginBottom: '12px' }}>
          Please enter a valid email address above to continue.
        </p>
      )}

      <ExpressCheckoutElement
        onConfirm={onExpressCheckoutConfirm}
        onClick={onExpressCheckoutClick}
        options={{
          buttonType: {
            applePay: 'buy',
            googlePay: 'buy',
          },
        }}
      />

      {paypalSlot && <div style={{ marginTop: 12 }}>{paypalSlot}</div>}

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '24px 0' }}>
        <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
        <span style={{ fontSize: 13, color: '#9a9689', whiteSpace: 'nowrap' }}>Or pay with card</span>
        <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
      </div>

      <form onSubmit={handleSubmit}>
        <PaymentElement
          options={{
            wallets: {
              applePay: 'never',
              googlePay: 'never',
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
    </div>
  );
}
