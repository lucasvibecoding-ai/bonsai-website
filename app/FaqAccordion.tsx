'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Do I need any experience with plants or bonsai?',
    a: "None at all. This course is built for complete beginners, including people who've killed every houseplant they've owned. Module 1 starts by matching you with the right tree for your specific environment and teaches you the exact care routine to keep it alive from day one.",
  },
  {
    q: 'How much does everything cost to get started?',
    a: "Under $35 total. A starter tree ($12-15 from any nursery or online), a pair of shears ($8-12), and some aluminum bonsai wire ($5-10). The course includes a complete shopping guide with links. You do NOT need expensive Japanese tools or a premium specimen tree.",
  },
  {
    q: 'Will you tell me which tree to buy and where to get it?',
    a: "Yes. Module 1 walks you through exactly which species to pick based on your climate, light, and whether you're growing indoors or outdoors. It also includes a shopping guide with specific links so you know exactly where to buy your first tree and what to look for.",
  },
  {
    q: 'Can I grow bonsai indoors?',
    a: "Yes, with the right species. Tropical species like ficus, Chinese elm, and jade thrive indoors year-round near a bright window. The course covers both indoor and outdoor species and helps you choose based on your living situation and climate. You do not need a garden.",
  },
  {
    q: 'How much time does bonsai take daily?',
    a: "Daily care is 2-3 minutes: checking soil moisture and watering when needed. Pruning and shaping sessions happen every few weeks and take 15-30 minutes. It's one of the lowest time-commitment hobbies that still feels deeply rewarding.",
  },
  {
    q: 'How long until my bonsai actually looks good?',
    a: 'Your first pruning session creates a dramatic transformation, often within the first weekend. Going from "overgrown nursery plant" to "that\'s clearly a bonsai" can happen in one afternoon with the right cuts. Deeper refinement builds over months and years, but the initial "wow" moment is immediate.',
  },
  {
    q: 'What if my tree dies?',
    a: "The Troubleshooting Guide covers every warning sign so you can intervene before it's too late. But honestly, even masters lose trees. It's part of learning. That's exactly why we start you with affordable nursery stock ($12-15). A dead $12 tree is a lesson, not a disaster. And the next one will be better because of what you learned.",
  },
  {
    q: "What's the refund policy?",
    a: "90-day money-back guarantee. Try the entire course. Pick your tree. Make your first cuts. If you don't love it, email us within 90 days and we'll refund you in full. No questions asked. No hoops.",
  },
  {
    q: 'How is the content delivered?',
    a: "Instant access to our private course platform. All video lessons and downloadable PDFs organized by module. Watch on any device: phone, tablet, or computer. Lifetime access, so go at your own pace. There's no schedule and no expiration.",
  },
  {
    q: 'Is it safe to purchase online?',
    a: "Yes. Payments are processed through Stripe, the same secure payment platform used by millions of businesses worldwide (including Amazon, Google, and Shopify). We never see your card details.",
  },
  {
    q: 'Have a specific question?',
    a: "Email us at hello@thebonsaipath.com and we'll get back to you as soon as possible.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-q"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            type="button"
          >
            <span className="faq-badge">Q</span>
            <span className="faq-q-text">{faq.q}</span>
            <span className={`faq-icon ${openIndex === i ? 'open' : ''}`}>+</span>
          </button>
          <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
            <div className="faq-answer-inner">
              <p className="faq-a">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
