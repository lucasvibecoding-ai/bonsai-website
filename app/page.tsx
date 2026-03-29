import type { Metadata } from "next";
import Image from "next/image";
import CheckoutButton from "./CheckoutButton";
import CountdownBar from "./CountdownBar";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "Bonsai: Learn The 1,500-Year-Old Japanese Practice of Calming Down Your Mind",
  description:
    "Bonsai is more than just a tree. It's a 1,500-year-old Japanese art of releasing stress, easing anxiety, and letting go of overthinking.",
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <CountdownBar />

      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --bg: #f9f6f2;
          --bg-warm: #f2ede5;
          --card: #ffffff;
          --ink: #1e1a14;
          --ink-soft: rgb(43, 43, 43);
          --ink-muted: #7d7568;
          --green: #3a6347;
          --green-deep: #264432;
          --green-soft: #5a8f6c;
          --green-pale: rgba(58,99,71,0.06);
          --gold: #b08d3a;
          --gold-light: #d4b35c;
          --gold-pale: rgba(176,141,58,0.08);
          --terra: #946b42;
          --sand: #d9cfc0;
          --stone: #c4b9a8;
          --cream: #fdfbf7;
          --radius: 10px;
        }

        /* BASE TYPOGRAPHY — one size for all body text */
        .bonsai-page { font-family: 'Lora', 'Lora Fallback', serif; color: rgb(43, 43, 43); line-height: 1.8; font-weight: 400; font-size: 18px; }
        .bonsai-page .container { max-width: 1080px; margin: 0 auto; padding: 0 40px; }

        /* Headings */
        .bonsai-page h1, .bonsai-page h2, .bonsai-page h3 { font-family: 'Lora', serif; color: var(--ink); line-height: 1.25; }
        .bonsai-page h1 { font-size: clamp(2.4rem, 6vw, 3.6rem); font-weight: 600; letter-spacing: -0.5px; text-align: center; margin-bottom: 20px; }
        .bonsai-page h2 { font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 500; margin-bottom: 24px; }
        .bonsai-page h3 { font-size: 1.4rem; font-weight: 600; color: var(--green-deep); margin-bottom: 8px; }

        /* Body text */
        .bonsai-page p { margin-bottom: 24px; }
        .bonsai-page strong { color: var(--ink); font-weight: 600; }
        .bonsai-page em { font-style: italic; }
        .bonsai-page a { color: var(--green); text-decoration: none; }

        /* Utilities */
        .bonsai-divider { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, var(--sand), transparent); margin: 20px 0; }
        .sm-divider { width: 36px; height: 2px; background: var(--gold); margin: 0 auto; opacity: 0.5; }
        .bonsai-center { text-align: center; }

        /* Badge */
        .badge { display: inline-block; padding: 6px 16px; border: 1.5px solid var(--green); border-radius: 100px; font-size: 12px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: var(--green); margin-bottom: 20px; }

        /* Hero */
        .hero-img { width: 100%; max-width: 860px; margin: 0 auto; border-radius: 12px; overflow: hidden; aspect-ratio: 16/9; background: var(--bg-warm); border: 1px solid var(--sand); display: flex; align-items: center; justify-content: center; }
        .hero-img-ph { text-align: center; padding: 36px; color: var(--ink-muted); font-size: 14px; line-height: 1.5; }
        .hero-img-ph .em { font-size: 48px; display: block; margin-bottom: 8px; }
        .hero h1 .accent { color: var(--green-deep); font-style: italic; }

        /* Philosophy blocks */
        .phil-block { margin-bottom: 32px; padding: 28px 32px; background: var(--card); border-radius: 12px; border: 1px solid var(--sand); }
        .phil-kanji { font-size: 32px; color: var(--gold); margin-bottom: 6px; }
        .phil-title { font-size: 22px; font-weight: 700; color: var(--ink); margin-bottom: 4px; }
        .phil-rom { font-size: 13px; color: var(--ink-muted); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 14px; font-weight: 600; }
        .phil-block p { margin-bottom: 0; }

        /* Transform quote */
        .transform { padding: 48px 0; text-align: center; }
        .transform-line { font-size: clamp(1rem, 2.2vw, 1.3rem); color: var(--ink); font-weight: 400; font-style: italic; max-width: 560px; margin: 0 auto; line-height: 1.5; }

        /* Instructor */
        .instructor { padding: 56px 0; display: flex; gap: 32px; align-items: flex-start; }
        .instructor-img { width: 160px; height: 200px; border-radius: var(--radius); background: var(--bg-warm); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 36px; border: 1px solid var(--sand); }

        /* Students */
        .students { padding: 48px 0; text-align: center; }
        .students-img { width: 100%; max-width: 860px; margin: 0 auto; border-radius: 12px; aspect-ratio: 2.2/1; background: var(--bg-warm); border: 1px solid var(--sand); display: flex; align-items: center; justify-content: center; color: var(--ink-muted); font-size: 16px; }

        /* Objections */
        .objection { padding: 56px 0; }

        /* Module cards */
        .module-card { background: var(--card); border-radius: 12px; padding: 28px; margin-bottom: 20px; border: 1px solid var(--sand); }
        .module-label { font-size: 12px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; color: var(--green); margin-bottom: 6px; }
        .module-sub { font-size: 18px; color: var(--ink-muted); margin-bottom: 16px; }
        .module-body { display: flex; gap: 28px; align-items: flex-start; }
        .module-card ul { list-style: none; padding: 0; flex: 1; }
        .module-card li { padding: 8px 0; border-bottom: 1px solid rgba(0,0,0,0.04); font-size: 15px; line-height: 1.6; }
        .module-card li:last-child { border: none; }
        .module-img { width: 300px; min-width: 300px; height: 280px; border-radius: 8px; background: linear-gradient(135deg, var(--bg-warm), var(--sand)); display: flex; align-items: center; justify-content: center; font-size: 28px; border: 1px solid var(--sand); overflow: hidden; position: relative; }

        /* CTA */
        .cta-block { text-align: center; padding: 56px 0; }
        .price-old { font-size: 26px; color: var(--ink-muted); text-decoration: line-through; margin-bottom: 4px; }
        .price { font-size: 56px; color: var(--green-deep); margin-bottom: 4px; font-weight: 700; }
        .price-note { font-size: 16px; color: var(--ink-muted); margin-bottom: 24px; font-weight: 400; }
        .guarantee-badge { display: flex; align-items: center; gap: 10px; justify-content: center; margin-top: 20px; font-size: 15px; color: var(--ink-muted); }
        .guarantee-icon { width: 40px; height: 40px; border-radius: 50%; background: var(--cream); border: 1.5px solid var(--gold); display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
        .payment-icons { display: flex; gap: 6px; justify-content: center; margin-top: 14px; opacity: 0.4; }
        .payment-icons span { font-size: 12px; padding: 4px 10px; border: 1px solid var(--stone); border-radius: 3px; color: var(--ink-muted); font-weight: 500; }
        .ps-note { margin-top: 16px; font-size: 14px; color: var(--ink-muted); font-style: italic; }

        /* Guarantee section */
        .guarantee-section { padding: 48px 0; text-align: center; }
        .guarantee-section p { max-width: 640px; margin: 0 auto 16px; }

        /* Bonus cards */
        .bonus-card { background: var(--card); border-radius: 12px; padding: 28px; margin-bottom: 16px; border: 1px solid var(--sand); }
        .bonus-body { display: flex; gap: 28px; align-items: flex-start; }
        .bonus-img { width: 280px; min-width: 280px; height: 260px; border-radius: 8px; background: linear-gradient(135deg, var(--bg-warm), var(--sand)); display: flex; align-items: center; justify-content: center; font-size: 28px; border: 1px solid var(--sand); overflow: hidden; position: relative; }
        .bonus-card ul { flex: 1; }
        .bonus-header { display: flex; align-items: center; gap: 12px; margin-bottom: 6px; }
        .bonus-label { font-size: 12px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; color: var(--gold); }
        .bonus-value { font-size: 12px; color: var(--green); font-weight: 700; background: rgba(58,99,71,0.1); padding: 2px 10px; border-radius: 100px; letter-spacing: 0.5px; }
        .bonus-card h3 { font-size: 1.3rem; color: var(--ink); margin-bottom: 4px; }
        .bonus-desc { font-size: 18px; color: var(--ink-muted); margin-bottom: 14px; }
        .bonus-card ul { list-style: none; padding: 0; }
        .bonus-card li { padding: 6px 0; font-size: 15px; line-height: 1.6; }
        .mega { border-color: rgba(176,141,58,0.3); background: linear-gradient(135deg, var(--card), var(--gold-pale)); }

        /* Stack */
        .stack-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(0,0,0,0.05); max-width: 520px; margin-left: auto; margin-right: auto; }
        .stack-row .label { color: var(--ink-soft); }
        .stack-row .val { color: var(--green-deep); font-weight: 800; font-size: 17px; }
        .stack-total { font-weight: 700; border-bottom: 2px solid var(--green); padding-bottom: 10px; margin-bottom: 6px; }
        .stack-total .label { color: var(--ink); }

        /* FAQ */
        .faq-item { border-bottom: 1px solid rgba(0,0,0,0.06); }
        .faq-q { width: 100%; display: flex; align-items: center; gap: 14px; padding: 18px 0; background: none; border: none; cursor: pointer; text-align: left; font-family: 'Lora', serif; font-size: 20px; }
        .faq-badge { width: 28px; height: 28px; border-radius: 50%; background: var(--green-pale); color: var(--green); font-size: 13px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .faq-q-text { flex: 1; font-weight: 700; color: var(--ink); }
        .faq-icon { color: var(--green); font-size: 20px; transition: transform 0.2s; flex-shrink: 0; }
        .faq-icon.open { transform: rotate(45deg); }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease, padding 0.3s; }
        .faq-answer.open { max-height: 400px; padding-bottom: 18px; }
        .faq-answer-inner { padding-left: 42px; }
        .faq-a { color: var(--ink-muted); line-height: 1.75; margin: 0; }

        /* Closing */
        .closing { padding: 56px 0; text-align: center; }
        .closing-quote { font-size: clamp(1.3rem, 2.5vw, 1.8rem); color: var(--ink); font-style: italic; max-width: 520px; margin: 0 auto 28px; line-height: 1.5; }

        /* Footer */
        .bonsai-footer { padding: 36px 0; text-align: center; font-size: 14px; color: var(--ink-muted); border-top: 1px solid var(--sand); }

        /* Split layout */
        .split { display: flex; gap: 40px; align-items: center; padding: 56px 0; }
        .split-text { flex: 1; }
        .split-text h2 { font-size: clamp(1.6rem, 4vw, 2.4rem); }
        .split-img { flex: 1 1 50%; height: 380px; border-radius: 12px; background: transparent; border: none; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .split-img-ph { text-align: center; padding: 24px; color: var(--ink-muted); font-size: 14px; line-height: 1.5; }
        .split-img-ph .em { font-size: 42px; display: block; margin-bottom: 8px; }

        @media (max-width: 768px) {
          .bonsai-page .container { padding: 0 20px; }
          .split { flex-direction: column; gap: 24px; }
          .split-img { flex: none; width: 100%; height: auto; }
          .split-text { flex: 1 !important; }
          .module-body, .bonus-body { flex-direction: column; }
          .module-img, .bonus-img { width: 100%; min-width: unset; height: 200px; }
          .module-card, .bonus-card { padding: 20px; }
          .instructor { flex-direction: column; text-align: center; align-items: center; }
          .instructor-img { width: 140px; height: 175px; }
          .phil-block { padding: 20px; }
          .stack-row { max-width: 100%; }
          .closing-quote { font-size: 1.2rem; }
          .bonus-header { flex-wrap: wrap; }
        }
        @media (max-width: 480px) {
          .bonsai-page .container { padding: 0 16px; }
          .bonsai-page { font-size: 16px; }
          .module-img, .bonus-img { height: 160px; }
          .badge { font-size: 10px; letter-spacing: 1.5px; padding: 5px 12px; }
          .payment-method-btn { font-size: 13px; padding: 10px 12px; }
        }
      `}} />

      <div className="bonsai-page">
        <div className="container">

          {/* HERO */}
          <section style={{ paddingTop: 64, paddingBottom: 48, textAlign: 'center' }}>
            <div className="badge">No prior experience required</div>
            <h1>Bonsai: Learn the 1,500-Year-Old Japanese Practice of <span className="accent">Calming Down Your Mind</span></h1>

            <div className="split" style={{ paddingTop: 28, paddingBottom: 0 }}>
              <div className="split-text" style={{ textAlign: 'left', flex: '1.5' }}>
                <p style={{ marginBottom: 0, textAlign: 'left' }}>
                  Bonsai is more than just a tree.
                  <br /><br />
                  It&apos;s an ancient Japanese art of releasing stress, easing anxiety, and letting go of overthinking.
                </p>
              </div>
              <div style={{ flex: '1 1 50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image id="hero" src="/hero2.jpg" alt="Beautiful bonsai tree" width={600} height={600} style={{ width: '75%', height: 'auto', borderRadius: 16, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }} />
              </div>
            </div>
          </section>

          <div className="bonsai-divider" />

          {/* SPLIT: CONTROL */}
          <section className="split">
            <div className="split-text">
              <h2 style={{ textAlign: 'center', marginBottom: 64 }}>The Japanese secret to shutting off your brain.</h2>
              <p>You meditate.</p>
              <p>You journal.</p>
              <p>You try breathing exercises.</p>
              <p>But your brain doesn&apos;t seem to stop.</p>
              <p>For 1,500 years, the Japanese have used a different approach.</p>
              <p>Not emptying the mind. <strong>Filling it with a living thing that requires your calm.</strong></p>
              <p>When you&apos;re shaping a tree, there&apos;s no room left for the noise.</p>
              <p>The anxiety stops.</p>
              <p style={{ marginBottom: 80 }}>Not because you forced it out. Because <strong>something better took its place.</strong></p>

            </div>
          </section>


          {/* WHEN MEDITATION DOESN'T WORK */}
          <section style={{ padding: '0 0 56px' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 64 }}>When meditation doesn&apos;t work.</h2>
            <div className="split" style={{ paddingTop: 0, paddingBottom: 0, gap: 64 }}>
              <div className="split-text" style={{ flex: '1.5' }}>
                <p>Some people can sit still and clear their mind.</p>
                <p>Most can&apos;t.</p>
                <p>If you&apos;ve tried meditation and your brain just gets louder, you&apos;re not broken.</p>
                <p>You just need something for your hands to do while your mind learns to be quiet.</p>
                <p>Bonsai is <strong>meditation that doesn&apos;t feel like meditation.</strong></p>
                <p>Your hands are busy. Your eyes are focused. And somewhere between the second and third cut, <strong>the noise stops.</strong></p>
              </div>
              <div style={{ flex: '1.2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/meditation.png" alt="Hands working on a bonsai tree" width={600} height={600} style={{ width: '100%', height: 'auto', borderRadius: 16, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }} />
              </div>
            </div>
          </section>

          <div className="bonsai-divider" />

          {/* PHILOSOPHY */}
          <section style={{ padding: '48px 0' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 8, fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>The Philosophy Behind the Practice</h2>
            <p className="bonsai-center" style={{ margin: '0 auto 28px' }}>Bonsai carries four Japanese principles that quietly change how you see the world and yourself.</p>

            <div className="phil-block">
              <div className="phil-kanji">侘寂</div>
              <div className="phil-title">Wabi-Sabi</div>
              <div className="phil-rom">Beauty in imperfection</div>
              <p>Your bonsai doesn&apos;t need to be perfect. The crooked trunk, the asymmetric branch, the scar where you pruned too aggressively. These aren&apos;t flaws. They&apos;re character. The tree with history looks alive. The one that looks too polished looks fake.</p>
            </div>

            <div className="phil-block">
              <div className="phil-kanji">職人</div>
              <div className="phil-title">Shokunin</div>
              <div className="phil-rom">The craftsman&apos;s lifelong pursuit</div>
              <p>There is no &quot;finished&quot; in bonsai. Your tree will never be &quot;done.&quot; And that&apos;s the point. It grows. You grow. The practice deepens. Year after year, for as long as you choose.</p>
            </div>

            <div className="phil-block">
              <div className="phil-kanji">間</div>
              <div className="phil-title">Ma</div>
              <div className="phil-rom">The power of negative space</div>
              <p>In bonsai, what you REMOVE matters more than what you keep. The empty space between branches gives the tree its shape. Ma teaches you that sometimes the most powerful thing you can do is take away, not add.</p>
            </div>

            <div className="phil-block">
              <div className="phil-kanji">生き甲斐</div>
              <div className="phil-title">Ikigai</div>
              <div className="phil-rom">A reason to wake up</div>
              <p>Some mornings you&apos;ll check your tree before you check your phone. You&apos;ll notice a new bud where you pruned last month. A branch that finally set at the angle you wired. These tiny moments of progress become your morning ritual. Your ikigai.</p>
            </div>
          </section>

          <div className="bonsai-divider" />

          {/* MORE THAN TREES */}
          <section className="transform">
            <div className="sm-divider" style={{ marginBottom: 20 }} />
            <p className="transform-line">&quot;You came here to learn how to shape a tree.<br />You might discover that the tree was shaping you.&quot;</p>
            <div className="sm-divider" style={{ marginTop: 20 }} />
          </section>

          <div className="bonsai-divider" />

          {/* INSTRUCTOR */}
          <section className="instructor">

            <div className="instructor-text">
              <h2>My name is Kenji Murakami (村上健二).</h2>
              <p>I&apos;ve spent years studying bonsai. Not just the technique, but the philosophy behind it.</p>
              <p>I&apos;ve learned from Japanese masters whose trees have been displayed at the Imperial Palace.</p>
              <p>What struck me wasn&apos;t only the craft.</p>
              <p>It was watching people&apos;s faces when they made their first cut.</p>
              <div className="sm-divider" style={{ margin: '32px 0' }} />
              <p>One day, a man brought in a wild juniper he&apos;d dug up from his backyard. Overgrown. Messy.</p>
              <p>&quot;There&apos;s nothing special about this tree,&quot; he said.</p>
              <p>I removed five branches. Wired two. Tilted the pot.</p>
              <p>He stared at it for a full minute. &quot;That was in there the whole time?&quot;</p>
              <p>They always say that.</p>
              <p>That&apos;s when I knew this wasn&apos;t only a craft. It was something that needed to be shared.</p>
            </div>
          </section>



          {/* WHY TEACHING ONLINE */}
          <section style={{ padding: '80px 0 64px' }}>
              <h2 className="bonsai-center" style={{ marginBottom: 32 }}>Why I&apos;m Teaching This Online For The First Time</h2>
              <p>Most people aren&apos;t able to spend thousands of dollars to travel to Japan any time soon.</p>
              <p>They&apos;ll never sit in a studio with a master.</p>
              <p>Never experience the meditative practice of doing bonsai.</p>
              <p>People started asking me to teach them. One woman wrote:</p>
              <blockquote style={{ borderLeft: '3px solid var(--gold)', paddingLeft: 24, margin: '32px 0', fontStyle: 'italic', color: 'var(--ink)', fontWeight: 500, fontSize: 20, lineHeight: 1.7 }}>&quot;I need to learn this. I have severe anxiety, and bonsai reminds me that I need to stay in the present.&quot;</blockquote>
              <p>That&apos;s when I knew I had to share this. Not just the technique, but the philosophy. The meditation. The meaning.</p>
              <p>I put everything I&apos;ve learned into this course. The exact techniques, the philosophy, the materials that cost under $30, not $200 or more. Everything you need to start your first bonsai.</p>
          </section>

          </div></div>{/* close container and bonsai-page */}
          <section className="bonsai-page" style={{ background: '#f2efe8', padding: '80px 0 64px' }}>
            <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ marginBottom: 64 }}>
              <h2 style={{ marginBottom: 44, textAlign: 'center' }}>&quot;It takes years to see results. I&apos;m too impatient.&quot;</h2>
              <p>Your FIRST pruning session transforms a bushy plant into something that&apos;s clearly a bonsai.</p>
              <p>That happens in <strong>one afternoon</strong>. Not one decade.</p>
              <p>The <strong>&quot;holy shit, I made that&quot;</strong> moment? That&apos;s day one.</p>
              <p><strong>Every week, your tree shows you something new.</strong></p>
            </div>

            <div>
              <h2 style={{ marginBottom: 44, textAlign: 'center' }}>&quot;Isn&apos;t this an expensive hobby?&quot;</h2>
              <p><strong>Your first bonsai costs less than lunch.</strong></p>
              <p>A starter tree is <strong>$12-15</strong>. Shears and wire cost <strong>under $20.</strong></p>
              <p>That&apos;s it. No $200 specimen. No Japanese tool kit.</p>
              <p>The course teaches you how to spot <strong>hidden gems</strong> at any nursery.</p>
            </div>
            </div>
          </section>

          <div className="bonsai-page"><div className="container">

          {/* COURSE INTRO */}
          <section className="bonsai-center" style={{ padding: '80px 0 36px' }}>
            <h2 style={{ marginBottom: 4, fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 600 }}>Introducing: The Bonsai Path</h2>
            <p style={{ fontStyle: 'italic', color: 'var(--ink-muted)' }}>盆栽の道: the way of the tray-planted tree</p>
          </section>

          {/* MODULES */}
          <section style={{ padding: '20px 0 40px' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 24 }}>&#10022; What&apos;s Inside &#10022;</h2>

            <div className="module-card">
              <div className="module-label">Module 1</div>
              <h3>Choose Your First Tree, Get the Right Tools &amp; Keep It Alive</h3>
              <div className="module-sub">The right tree, the right tools, and the right setup for your space, your light, and your life. No more dead plants.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module1.jpg" alt="Choose Your First Tree" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; The <strong>exact tools you need to start</strong> (and the ones you don&apos;t) — what to buy, where to buy it, and what&apos;s a waste of money. Plus <strong>exactly which tree to get and where to find it</strong></li>
                  <li>&#10022; The <strong>3 species that are nearly impossible to kill</strong> and the 2 &quot;beginner&quot; species that actually aren&apos;t (one is the most commonly recommended tree on the internet)</li>
                  <li>&#10022; The <strong>watering test that takes 2 seconds</strong> that prevents 90% of bonsai deaths</li>
                  <li>&#10022; <strong>Indoor vs outdoor: the decision that determines everything.</strong> Get this wrong and your tree is dead in 3 months no matter what else you do</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="module-label">Module 2</div>
              <h3>Pruning &amp; Shaping: Your First Transformation</h3>
              <div className="module-sub">This is where a nursery plant starts becoming a bonsai. The moment that hooks you.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module2.jpg" alt="Pruning and Shaping" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; How to <strong>see the &quot;tree inside the bush&quot;</strong> and visualize the finished tree before you make a single cut</li>
                  <li>&#10022; Your first <strong>before-and-after transformation</strong> with 3-5 cuts that turn overgrown nursery stock into something people recognize as a bonsai</li>
                  <li>&#10022; The <strong>one pruning mistake 80% of beginners make</strong> that stunts growth for an entire season (and the simple fix)</li>
                  <li>&#10022; <strong>Maintenance pruning in 2 minutes flat</strong> to keep your bonsai looking intentional, not wild</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="module-label">Module 3</div>
              <h3>Wiring: The Art of Bending Branches</h3>
              <div className="module-sub">The technique that gives bonsai their iconic shapes. Easier than it looks.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module3.jpg" alt="Wiring" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; How to <strong>bend a branch without snapping it</strong> using the pressure-and-patience technique</li>
                  <li>&#10022; Choosing the right <strong>wire gauge</strong> for each branch (too thin = useless, too thick = permanent scars)</li>
                  <li>&#10022; The <strong>wire-scar mistake that permanently damages bark</strong> and the exact timeline for when to remove wire</li>
                  <li>&#10022; Create the <strong>illusion of 100 years of wind and weather</strong> on a tree that&apos;s 3 years old</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="module-label">Module 4</div>
              <h3>Repotting, Soil &amp; Root Health</h3>
              <div className="module-sub">The hidden half of bonsai. What happens below the soil determines everything above it.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module4.jpg" alt="Repotting and Soil" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; Why <strong>regular potting soil will kill your bonsai</strong> within a year and the $5 soil mix that professionals use</li>
                  <li>&#10022; <strong>Root pruning demystified</strong>: the technique that sounds terrifying but is actually the secret to keeping trees small AND healthy for decades</li>
                  <li>&#10022; The <strong>signs your tree is screaming for a repot</strong> that most beginners miss until it&apos;s too late</li>
                  <li>&#10022; Choosing the right <strong>pot size and style</strong> with the proportion rules that make everything click</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="module-label">Module 5</div>
              <h3>The 5 Classical Styles: Shape With Intention</h3>
              <div className="module-sub">Each style tells a story about wind, age, and survival. Choose the one your tree is already telling.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module5.jpg" alt="Classical Styles" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; <strong>Formal Upright (Chokkan)</strong> the classic straight trunk, perfect symmetry. The most forgiving style for first-timers</li>
                  <li>&#10022; <strong>Informal Upright (Moyogi)</strong> gentle S-curves that mimic how real trees grow in nature</li>
                  <li>&#10022; <strong>Slanting (Shakan)</strong> the wind-swept look that adds drama and movement to any desk or shelf</li>
                  <li>&#10022; <strong>Cascade (Kengai)</strong> the tree that grows &quot;over a cliff.&quot; The most striking display piece</li>
                  <li>&#10022; How to <strong>read your tree&apos;s natural shape</strong> and choose the style it&apos;s already leaning toward instead of forcing something it&apos;s not</li>
                </ul>
              </div>
            </div>
          </section>


          {/* CTA after modules */}
          <section style={{ padding: '56px 0' }}>
            <div className="bonsai-center" style={{ marginBottom: 32 }}>
              <p style={{ maxWidth: 600, margin: '0 auto 20px' }}>Five modules. A complete system for choosing, styling, and caring for bonsai trees at home, even if you&apos;ve never kept a plant alive.</p>
              <p>The full price for this course is <strong>$139</strong>.</p>
              <p style={{ maxWidth: 560, margin: '0 auto 20px' }}>You&apos;re not going to pay that today. This is the first time I&apos;ve offered this course publicly. I want <strong>the first 50 people</strong> to go through it, share their progress, and help me make it even better.</p>
            </div>
            <div style={{ maxWidth: 520, margin: '0 auto', padding: '40px 44px', borderRadius: 14, border: '2px solid rgba(58,99,71,0.25)', background: '#ffffff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', textAlign: 'center' }}>
              <div className="price-old">Normally $139</div>
              <p style={{ fontSize: 44, color: 'var(--ink)', fontWeight: 700, marginBottom: 8 }}>Now Only <span style={{ color: 'var(--gold)' }}>$47</span></p>
              <div className="price-note">One-time payment. Lifetime access.</div>
              <div style={{ marginTop: 20 }}><CheckoutButton /></div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 20 }}>
                <Image src="/guarantee1.webp" alt="90-Day Money Back Guarantee" width={52} height={52} style={{ width: 48, height: 48, flexShrink: 0 }} />
                <p style={{ margin: 0, fontWeight: 500 }}>90-Day Money Back Guarantee</p>
              </div>
              <div style={{ width: 48, height: 1, background: 'rgba(0,0,0,0.1)', margin: '20px auto' }} />
              <p style={{ color: 'var(--ink-muted)', marginBottom: 12 }}>🔒 Secure payment with Stripe 🔒</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <Image src="/visa.svg" alt="Visa" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/mastercard.svg" alt="Mastercard" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/american-express.svg" alt="Amex" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/discover.svg" alt="Discover" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/paypal.svg" alt="PayPal" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              </div>
              <p className="ps-note">P.S. If the next page doesn&apos;t load... I&apos;m sorry, but the deal has ended!</p>
            </div>
          </section>

          <div className="bonsai-divider" />

          {/* GUARANTEE */}
          <section className="guarantee-section">
            <Image src="/guarantee1.webp" alt="90-Day Money Back Guarantee" width={160} height={160} style={{ width: 130, height: 130, marginBottom: 16, margin: '0 auto 16px' }} />
            <h2>Try it risk-free</h2>
            <p><strong>You don&apos;t have to make the final decision now.</strong></p>
            <p>Get access to the full course. Pick your first tree. Learn how to water it properly. Make your first pruning cuts. Watch new growth emerge exactly where you guided it.</p>
            <p>If you don&apos;t love it, email hello@thebonsaipath.com within 90 days for a full refund. Within 24 hours. <strong>No questions asked.</strong></p>
          </section>

          <div className="bonsai-divider" />

          {/* BONUSES */}
          <section style={{ padding: '36px 0' }}>
            <p className="bonsai-center" style={{ color: 'var(--ink-muted)', marginBottom: 8 }}>But wait, there&apos;s more</p>
            <h2 className="bonsai-center" style={{ marginBottom: 24 }}>Order today and you also get:</h2>

            <div className="bonus-card">
              <div className="bonus-header"><div className="bonus-label">Bonus 1</div><div className="bonus-value">$47 value</div></div>
              <h3>Mindfulness Through Bonsai</h3>
              <div className="bonus-desc">The practice behind the practice. Where craft becomes calm.</div>
              <div className="bonus-body">
                <div className="bonus-img"><Image src="/bonus1.jpg" alt="Mindfulness Through Bonsai" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; <strong>Breathwork while pruning</strong> the 5-minute meditation that happens naturally while you work</li>
                  <li>&#10022; How to <strong>use your bonsai as a morning ritual</strong> to replace the phone check with a tree check</li>
                  <li>&#10022; <strong>Sitting meditation with your tree</strong> the Japanese practice of contemplating your bonsai from all angles</li>
                  <li>&#10022; Why bonsai growers report <strong>38% greater stress reduction</strong> than other hobby practitioners</li>
                </ul>
              </div>
            </div>

            <div className="bonus-card">
              <div className="bonus-header"><div className="bonus-label">Bonus 2</div><div className="bonus-value">$37 value</div></div>
              <h3>The Seasonal Care Calendar</h3>
              <div className="bonus-desc">Know exactly what to do to your bonsai, every week of every season.</div>
              <div className="bonus-body">
                <div className="bonus-img"><Image src="/bonus2.jpg" alt="Seasonal Care Calendar" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; <strong>Spring:</strong> When to repot, fertilize, and let your tree explode with new growth</li>
                  <li>&#10022; <strong>Summer:</strong> Watering adjustments, sun protection, and the best window for wiring</li>
                  <li>&#10022; <strong>Autumn:</strong> Reducing fertilizer, preparing for dormancy, enjoying fall color on deciduous species</li>
                  <li>&#10022; <strong>Winter:</strong> Cold protection, dormancy care, and indoor overwintering for tender species</li>
                </ul>
              </div>
            </div>

            <div className="bonus-card">
              <div className="bonus-header"><div className="bonus-label">Bonus 3</div><div className="bonus-value">$29 value</div></div>
              <h3>The Bonsai Troubleshooting Guide</h3>
              <div className="bonus-desc">Your tree is trying to talk to you. This guide teaches you to listen.</div>
              <div className="bonus-body">
                <div className="bonus-img"><Image src="/bonus3.jpg" alt="Bonsai Troubleshooting Guide" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; <strong>Yellowing leaves?</strong> It&apos;s not always overwatering: the 4 possible causes and fixes</li>
                  <li>&#10022; <strong>Dropping leaves suddenly?</strong> Seasonal, stress, or dying: how to tell the difference in 30 seconds</li>
                  <li>&#10022; <strong>Leggy, stretched growth?</strong> The light and pruning adjustment that restores compact shape</li>
                  <li>&#10022; <strong>15+ photo-matched symptoms</strong> with clear diagnosis and step-by-step solutions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FIRST STACK + CTA */}
          <section style={{ padding: '36px 0' }} id="pricing">
            <h2 className="bonsai-center" style={{ marginBottom: 18 }}>Here&apos;s everything you get:</h2>
            <div className="stack-row stack-total"><span className="label">&#10003; 5 Core Modules</span><span className="val">$139</span></div>
            <div className="stack-row"><span className="label">&#10003; Mindfulness Through Bonsai</span><span className="val">$47</span></div>
            <div className="stack-row"><span className="label">&#10003; Seasonal Care Calendar</span><span className="val">$37</span></div>
            <div className="stack-row"><span className="label">&#10003; Bonsai Troubleshooting Guide</span><span className="val">$29</span></div>
            <div className="stack-row" style={{ borderBottom: 'none' }}><span className="label" style={{ fontWeight: 700, color: 'var(--ink)' }}>Total Value</span><span className="val" style={{ fontSize: 16 }}>$252</span></div>
          </section>

          <div style={{ maxWidth: 520, margin: '0 auto', padding: '40px 44px', borderRadius: 14, border: '2px solid rgba(58,99,71,0.25)', background: '#ffffff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', textAlign: 'center' }}>
            <div className="price-old">Normally $252</div>
            <p style={{ fontSize: 44, color: 'var(--ink)', fontWeight: 700, marginBottom: 8 }}>Now Only <span style={{ color: 'var(--gold)' }}>$47</span></p>
            <div className="price-note">One-time payment. Lifetime access.</div>
            <div style={{ marginTop: 20 }}><CheckoutButton /></div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 20 }}>
              <Image src="/guarantee1.webp" alt="90-Day Money Back Guarantee" width={52} height={52} style={{ width: 48, height: 48, flexShrink: 0 }} />
              <p style={{ margin: 0, fontWeight: 500 }}>90-Day Money Back Guarantee</p>
            </div>
            <div style={{ width: 48, height: 1, background: 'rgba(0,0,0,0.1)', margin: '20px auto' }} />
            <p style={{ color: 'var(--ink-muted)', marginBottom: 12 }}>🔒 Secure payment with Stripe 🔒</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <Image src="/visa.svg" alt="Visa" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/mastercard.svg" alt="Mastercard" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/american-express.svg" alt="Amex" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/discover.svg" alt="Discover" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/paypal.svg" alt="PayPal" width={40} height={26} style={{ height: 26, width: 'auto' }} />
            </div>
            <p className="ps-note">P.S. If the next page doesn&apos;t load... I&apos;m sorry, but the deal has ended!</p>
          </div>

          <div className="bonsai-divider" />

          {/* MEGA BONUS */}
          <section style={{ padding: '192px 0 64px' }}>
            <p className="bonsai-center" style={{ color: 'var(--ink-muted)', marginBottom: 8 }}>One last thing...</p>
            <h2 className="bonsai-center" style={{ marginBottom: 18 }}>Order today and you also get:</h2>

            <div className="bonus-card mega">
              <div className="bonus-header"><div className="bonus-label">Mega Bonus</div><div className="bonus-value">$79 value</div></div>
              <h3>The Bonsai Display &amp; Styling Masterclass</h3>
              <div className="bonus-desc">Your tree is shaped. Now make it the centerpiece of any room.</div>
              <div className="bonus-body">
                <div className="bonus-img"><Image src="/megabonus.jpg" alt="Display and Styling Masterclass" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; How to choose <strong>the perfect pot</strong> glazed vs unglazed, proportion rules, and color theory that makes everything click</li>
                  <li>&#10022; <strong>Display surfaces and stands</strong> to create a museum-quality presentation on any shelf, desk, or table</li>
                  <li>&#10022; The <strong>accent plant technique</strong> to add moss, companion plants, and stones to create a complete miniature landscape</li>
                  <li>&#10022; <strong>Photography tips</strong> to capture your bonsai so it looks as stunning on screen as it does in person</li>
                  <li>&#10022; Turn your bonsai into the <strong>most-commented thing in any room</strong> you place it in</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bonsai-divider" />

          {/* FAQ */}
          <section style={{ padding: '40px 0' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 24 }}>Frequently Asked Questions</h2>
            <FaqAccordion />
          </section>

          <div className="bonsai-divider" />

          {/* SECOND STACK + CTA */}
          <section style={{ padding: '36px 0' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 18 }}>Here&apos;s everything you get:</h2>
            <div className="stack-row stack-total"><span className="label">&#10003; 5 Core Modules</span><span className="val">$139</span></div>
            <div className="stack-row"><span className="label">&#10003; Mindfulness Through Bonsai</span><span className="val">$47</span></div>
            <div className="stack-row"><span className="label">&#10003; Seasonal Care Calendar</span><span className="val">$37</span></div>
            <div className="stack-row"><span className="label">&#10003; Bonsai Troubleshooting Guide</span><span className="val">$29</span></div>
            <div className="stack-row"><span className="label">&#10003; Display &amp; Styling Masterclass</span><span className="val">$79</span></div>
            <div className="stack-row" style={{ borderBottom: 'none' }}><span className="label" style={{ fontWeight: 700, color: 'var(--ink)' }}>Total Value</span><span className="val" style={{ fontSize: 16 }}>$331</span></div>
          </section>

          <div style={{ maxWidth: 520, margin: '0 auto', padding: '40px 44px', borderRadius: 14, border: '2px solid rgba(58,99,71,0.25)', background: '#ffffff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', textAlign: 'center' }}>
            <div className="price-old">Normally $331</div>
            <p style={{ fontSize: 44, color: 'var(--ink)', fontWeight: 700, marginBottom: 8 }}>Now Only <span style={{ color: 'var(--gold)' }}>$47</span></p>
            <div className="price-note">One-time payment. Lifetime access.</div>
            <div style={{ marginTop: 20 }}><CheckoutButton /></div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 20 }}>
              <Image src="/guarantee1.webp" alt="90-Day Money Back Guarantee" width={52} height={52} style={{ width: 48, height: 48, flexShrink: 0 }} />
              <p style={{ margin: 0, fontWeight: 500 }}>90-Day Money Back Guarantee</p>
            </div>
            <div style={{ width: 48, height: 1, background: 'rgba(0,0,0,0.1)', margin: '20px auto' }} />
            <p style={{ color: 'var(--ink-muted)', marginBottom: 12 }}>🔒 Secure payment with Stripe 🔒</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <Image src="/visa.svg" alt="Visa" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/mastercard.svg" alt="Mastercard" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/american-express.svg" alt="Amex" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/discover.svg" alt="Discover" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/paypal.svg" alt="PayPal" width={40} height={26} style={{ height: 26, width: 'auto' }} />
            </div>
            <p className="ps-note">P.S. If the next page doesn&apos;t load... I&apos;m sorry, but the deal has ended!</p>
          </div>

          <div className="bonsai-divider" />

          {/* CLOSING */}
          <section className="closing">
            <div className="sm-divider" style={{ marginBottom: 20 }} />
            <p className="closing-quote">&quot;In a world that demands speed, bonsai asks you to slow down. And in that slowness, you find something you forgot you had.&quot;</p>
            <p style={{ color: 'var(--ink-muted)', marginBottom: 0 }}>— Kenji Murakami, founder of The Bonsai Path</p>
          </section>

          {/* FOOTER */}
          <footer className="bonsai-footer">
            <p>&copy; 2026 The Bonsai Path. All rights reserved.</p>
            <p style={{ marginTop: 5 }}><a href="/privacy">Privacy</a> &middot; <a href="/terms">Terms</a></p>
            <p style={{ marginTop: 16, fontSize: 11, color: 'var(--ink-muted)', maxWidth: 600, margin: '16px auto 0', lineHeight: 1.5 }}>This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
