import React, { useEffect } from 'react';
import './App.css';
import { initCinematicAnimations } from './script.js';
import {
  ShieldCheck, Calendar, Grid, CreditCard,
  PieChart, CheckCircle2, TrendingUp, Bolt, Users, Clock
} from 'lucide-react';

export default function App() {
  useEffect(() => {
    const cleanup = initCinematicAnimations();
    return cleanup;
  }, []);

  return (
    <div className="app-wrapper">

      {/* ── NAVBAR ── */}
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="/assets/app-logo.png" alt="CommunitySpaces" className="logo-icon" /> CommunitySpaces
          </div>
          <a href="https://www.communityspaces.in/" target="_blank" rel="noopener noreferrer" className="cta-btn">Partner With Us</a>
        </div>
        <div className="scroll-progress-container">
          <div className="scroll-progress" id="scroll-progress"></div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          1️⃣  HERO — Dark Cinematic (KEEP AS-IS)
          ══════════════════════════════════════════ */}
      <section className="cinematic-section hero-section" id="hero">
        <canvas id="cinematic-canvas"></canvas>
        <div className="hero-content">
          <h1 className="hero-title cinematic-reveal">
            Digitising <br />
            <span className="accent">Community &amp;</span><br />
            Exhibition Management
          </h1>
          <p className="hero-subtitle cinematic-reveal" style={{ transitionDelay: '0.2s' }}>
            Smarter Infrastructure for Modern Event Organisers.
          </p>

          <div className="perspective-1000 cinematic-reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="hero-3d-mockup" id="hero-mockup">
              <div className="modern-phone">
                <div className="screen-content" style={{ backgroundImage: "url('/assets/earnings.png')" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2️⃣  PROBLEM — Light bg, 2-col grid (Reference Image Style)
          ══════════════════════════════════════════ */}
      <section className="cinematic-section problem-section" id="problem">
        <div className="section-container">
          <div className="problem-layout">

            {/* Left — heading + grid */}
            <div>
              <p className="section-label cinematic-reveal">THE CHALLENGE</p>
              <h2 className="section-heading cinematic-reveal">
                Managing Events<br />
                <span className="muted">Shouldn't Be This Hard.</span>
              </h2>

              <div className="problem-grid stagger-container cinematic-reveal">

                <div className="problem-card stagger-item">
                  <div className="problem-icon-circle">
                    <Clock size={26} strokeWidth={2} />
                  </div>
                  <span className="problem-card-text">Time-Consuming<br />Coordination</span>
                </div>

                <div className="problem-card stagger-item">
                  <div className="problem-icon-circle">
                    <Calendar size={26} strokeWidth={2} />
                  </div>
                  <span className="problem-card-text">Scattered<br />Communication</span>
                </div>

                <div className="problem-card stagger-item">
                  <div className="problem-icon-circle">
                    <Bolt size={26} strokeWidth={2} />
                  </div>
                  <span className="problem-card-text">Last-Minute<br />Chaos</span>
                </div>

                <div className="problem-card stagger-item">
                  <div className="problem-icon-circle">
                    <CreditCard size={26} strokeWidth={2} />
                  </div>
                  <span className="problem-card-text">Payment<br />Confusion</span>
                </div>

                <div className="problem-card stagger-item">
                  <div className="problem-icon-circle">
                    <Users size={26} strokeWidth={2} />
                  </div>
                  <span className="problem-card-text">Vendor<br />Disputes</span>
                </div>

                <div className="problem-card stagger-item">
                  <div className="problem-icon-circle">
                    <TrendingUp size={26} strokeWidth={2} />
                  </div>
                  <span className="problem-card-text">Spreadsheet<br />Chaos</span>
                </div>

              </div>

              {/* Orange arrow bar like reference */}
              <div className="orange-arrow-bar cinematic-reveal" style={{ marginTop: '2rem', transitionDelay: '0.5s' }}>
                <div className="orange-bar-line"></div>
                <span className="orange-bar-arrow">→</span>
              </div>
            </div>

            {/* Right — phone mockup */}
            <div className="problem-right cinematic-reveal" style={{ transitionDelay: '0.3s' }}>
              <div style={{ width: '240px', height: '533px' }}>
                <div className="modern-phone" style={{ borderRadius: '36px', border: '7px solid #1a1a1a' }}>
                  <div className="screen-content" style={{ backgroundImage: "url('/assets/events-home.png')" }}></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3️⃣  SECURITY — White bg, orange shield
          ══════════════════════════════════════════ */}
      <section className="cinematic-section security-section">
        <div className="section-container">

          <div className="shield-container cinematic-reveal">
            <ShieldCheck size={160} strokeWidth={1} />
          </div>

          <h2 className="section-heading cinematic-reveal" style={{ marginBottom: '1rem' }}>
            Enterprise-Grade <br />
            <span className="accent">Payment Security</span>
          </h2>

          <div className="security-features stagger-container cinematic-reveal">
            <div className="sec-feature stagger-item">
              <CheckCircle2 size={18} style={{ color: '#FF6B35' }} /> Powered by Paytm
            </div>
            <div className="sec-feature stagger-item">
              <ShieldCheck size={18} style={{ color: '#FF6B35' }} /> 256-bit Encrypted
            </div>
            <div className="sec-feature stagger-item">
              <CheckCircle2 size={18} style={{ color: '#FF6B35' }} /> GST-compliant
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          4️⃣  COMMISSION — Light bg, big orange %
          ══════════════════════════════════════════ */}
      <section className="cinematic-section commission-section">
        <div className="section-container">
          <p className="section-label cinematic-reveal">UNBEATABLE VALUE</p>
          <div className="massive-typography cinematic-reveal">1.2%</div>
          <div className="stagger-container cinematic-reveal">
            <p className="commission-sub stagger-item">Per transaction + GST</p>
            <div className="commission-pills stagger-item">
              <span className="commission-pill"><span className="pill-dot"></span>No subscriptions</span>
              <span className="commission-pill"><span className="pill-dot"></span>No hidden charges</span>
              <span className="commission-pill"><span className="pill-dot"></span>Pay as you earn</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5️⃣  SHOWCASE — White bg, floating phones
          ══════════════════════════════════════════ */}
      <section className="cinematic-section showcase-section" id="showcase-section">
        <div className="section-container" style={{ textAlign: 'center', width: '100%' }}>
          <p className="section-label cinematic-reveal">THE EXPERIENCE</p>
          <h2 className="section-heading cinematic-reveal">The Perfect Mobile Experience</h2>
          <p className="hero-subtitle cinematic-reveal" style={{ margin: '0 auto 0', transitionDelay: '0.1s' }}>
            Event discovery, booking, and management — optimized perfectly.
          </p>

          <div className="showcase-grid cinematic-reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="modern-phone showcase-mockup left" id="showcase-left">
              <div className="screen-content" style={{ backgroundImage: "url('/assets/event-detail.png')" }}></div>
            </div>
            <div className="modern-phone showcase-mockup center" id="showcase-center">
              <div className="screen-content" style={{ backgroundImage: "url('/assets/stall-layout.png')" }}></div>
            </div>
            <div className="modern-phone showcase-mockup right" id="showcase-right">
              <div className="screen-content" style={{ backgroundImage: "url('/assets/booking-confirmed.png')" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6️⃣  CTA — Dark Cinematic (KEEP AS-IS)
          ══════════════════════════════════════════ */}
      <section className="cinematic-section hero-section" style={{ minHeight: '60vh', padding: '10rem 2rem' }}>
        <div className="hero-content">
          <h2 className="section-heading cinematic-reveal" style={{ color: '#f8fafc' }}>
            Digitise Your Events.<br />
            <span style={{ color: 'rgba(248,250,252,0.45)' }}>Operate with Confidence.</span>
          </h2>
          <div className="cinematic-reveal" style={{ transitionDelay: '0.2s' }}>
            <a href="https://www.communityspaces.in/" target="_blank" rel="noopener noreferrer" className="cta-btn" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
              Partner with CommunitySpaces
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
