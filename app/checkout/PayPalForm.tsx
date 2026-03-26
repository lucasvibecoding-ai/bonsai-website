'use client';

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export default function PayPalForm() {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  if (!clientId) {
    return <p style={{ color: '#dc2626' }}>PayPal is not configured.</p>;
  }

  return (
    <PayPalScriptProvider
      options={{
        clientId,
        currency: 'USD',
        intent: 'capture',
      }}
    >
      <PayPalButtons
        style={{
          layout: 'vertical',
          color: 'gold',
          shape: 'rect',
          label: 'pay',
        }}
        createOrder={async () => {
          const res = await fetch('/api/paypal/create-order', {
            method: 'POST',
          });
          const data = await res.json();
          return data.id;
        }}
        onApprove={async (data) => {
          const res = await fetch('/api/paypal/capture-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderID: data.orderID }),
          });
          const result = await res.json();
          if (result.success) {
            window.location.href = '/success';
          } else {
            alert('Payment failed. Please try again.');
          }
        }}
        onError={() => {
          alert('Something went wrong with PayPal. Please try again.');
        }}
      />
    </PayPalScriptProvider>
  );
}
