import { useState } from "react";
import "./App.css";
import "./StorySection.css";

function HouseholdWordmark({ inverse = false, className = "" }) {
  return (
    <span className={`household-wordmark ${inverse ? "is-inverse" : ""} ${className}`.trim()}>
      <img className="household-wordmark-mark" src="/images/household-logo.png" alt="" aria-hidden="true" />
      <span className="household-wordmark-name">household<sup>™</sup></span>
    </span>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      <header className="site-header">
        <div className="nav-inner">
          <a className="brand" href="/" aria-label="household home"><HouseholdWordmark /></a>
          <nav className="nav-links"><a href="#life">How it works</a><a href="#people">People</a><a href="/our-story">Our Story</a><a href="#trust">Trust</a><a href="#founding-100">Founding 100</a></nav>
          <a className="sign-in desktop-sign-in" href="https://app.householdstudio.com/?mode=signin">Sign in</a>
          <button className={`mobile-menu-button ${menuOpen ? "is-open" : ""}`} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{!menuOpen ? <span className="menu-symbol" aria-hidden="true"><span></span><span></span></span> : <span className="menu-close">×</span>}</button>
        </div>
        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}><div className="mobile-menu-inner"><div className="mobile-menu-brand"><HouseholdWordmark inverse /></div><nav className="mobile-menu-links"><a href="#life" onClick={() => setMenuOpen(false)}>How it works</a><a href="#people" onClick={() => setMenuOpen(false)}>People</a><a href="/our-story" onClick={() => setMenuOpen(false)}>Our Story</a><a href="#trust" onClick={() => setMenuOpen(false)}>Trust</a><a href="#founding-100" onClick={() => setMenuOpen(false)}>Founding 100</a></nav><a className="mobile-enter" href="https://app.householdstudio.com/?mode=signin" onClick={() => setMenuOpen(false)}>Sign in</a><p className="mobile-menu-signature">20 seconds. Clarity. Back to life.</p></div></div>
      </header>

      <section className="hero"><div className="hero-inner hero-layout"><div className="hero-content">
        <p className="eyebrow">The relationship-centered family life platform built for everyday households.</p>
        <h1>The people who depend<br/><em>on one another.</em></h1>
        <p className="hero-copy">One calming place for the people, money, documents, responsibilities, and care your household depends on.</p>
        <a className="bring-it-button" href="https://app.householdstudio.com/?mode=join">Try Household free</a>
        <p className="story-signature">20 seconds. Clarity. Back to life.</p>
      </div><figure className="hero-photo"><img src="/images/household-hero-vero.jpg" alt="A multigenerational family spending the day together in Vero Beach, Florida."/></figure></div></section>

      <section className="life" id="life"><div className="life-heading"><p className="eyebrow dark-eyebrow">ONE SHARED UNDERSTANDING</p><h2>Family life is shared.<br/><em>The understanding should be, too.</em></h2></div><div className="household-promise-grid"><article><span>01</span><h3>What you share</h3><p>People, accounts, documents, plans, and care.</p></article><article><span>02</span><h3>What needs attention</h3><p>See the few things that matter now.</p></article><article><span>03</span><h3>Who is responsible</h3><p>Know who needs to act and who it affects.</p></article></div></section>

      <section className="intelligent-support"><div className="intelligent-support-inner"><div><p className="eyebrow dark-eyebrow">INTELLIGENT HOUSEHOLD SUPPORT</p><h2>Support that understands<br/><em>your household.</em></h2></div><div className="intelligent-support-copy"><p>Household learns the people, relationships, responsibilities, money, documents, and care that shape your family’s life. It notices what may need attention and guides you toward the next manageable step.</p><p className="intelligent-support-close">Because every household is different, Household meets your family where it is.</p></div></div></section>

      <section className="product-experience"><div className="product-experience-inner"><div className="product-intro"><p className="eyebrow dark-eyebrow">YOUR HOUSEHOLD, TOGETHER</p><h2>Everything that matters at home.<br/><em>One understandable picture.</em></h2></div><div className="product-devices-premium"><div className="device-laptop"><div className="device-laptop-screen"><img src="/images/household-dashboard-desktop.png" alt="Household Family Picture dashboard on desktop."/></div><div className="device-laptop-base"><div className="device-laptop-notch"></div></div></div><div className="device-phone"><div className="device-phone-speaker"></div><div className="device-phone-screen"><img src="/images/household-dashboard-mobile.png" alt="Household Family Picture on mobile."/></div></div></div><p className="product-note">Your household when you need it.<br/><em>Your life when you don't.</em></p></div></section>

      <section className="network" id="people"><div className="network-inner"><div><p className="eyebrow dark-eyebrow">THE RELATIONSHIP-CENTERED DIFFERENCE</p><h2>People are not<br/><em>seats.</em></h2><figure className="household-illustration household-illustration--companionship" aria-hidden="true"><img src="/images/illustrations/household-companionship.png" alt=""/></figure></div><div className="network-copy"><p className="network-lead">Most family apps organize what families do. Household is built to understand who depends on whom—and connect responsibilities, money, documents, care and next steps around those relationships.</p><p>Household is not another family organizer or digital filing cabinet. It is an emerging relationship-centered understanding layer for everyday family life.</p><p className="network-statement">Adding Grandma shouldn't carry a price tag.</p></div></div></section>

      <section className="trust-section" id="trust"><div className="trust-inner"><div><p className="eyebrow dark-eyebrow">TRUST & PRIVACY</p><h2>Your household should feel<br/><em>private by default.</em></h2></div><div className="trust-copy"><div className="trust-points"><div className="trust-point"><span>01</span><div><h3>Your household is yours.</h3></div></div><div className="trust-point"><span>02</span><div><h3>Access follows relationships.</h3></div></div><div className="trust-point"><span>03</span><div><h3>Useful, then quiet.</h3></div></div></div></div></div></section>

      <section className="founding-100" id="founding-100"><div className="founding-100-inner"><div className="founding-100-mark" aria-hidden="true"><span>100</span></div><div className="founding-100-copy"><p className="eyebrow">THE FOUNDING 100 HOUSEHOLDS</p><h2>Help shape Household<br/><em>from the beginning.</em></h2><p>We are inviting our first 100 households to use Household in real family life and help shape what comes next.</p><a className="founding-100-button" href="https://app.householdstudio.com/founding-100">Join the Founding 100</a></div></div></section>

      <footer className="site-footer"><div className="footer-inner"><div className="footer-brand"><div><HouseholdWordmark inverse/><div className="footer-tagline">The people who depend on one another. For a calmer home.</div></div></div><div className="footer-links"><a href="#life">How it works</a><a href="#people">People</a><a href="/our-story">Our Story</a><a href="#trust">Trust</a><a href="#founding-100">Founding 100</a></div><div className="footer-meta"><span>© 2026 Household</span><a href="https://thepierpointgroup.com/" target="_blank" rel="noreferrer">A Pierpoint Group LLC product</a><span>Built for real family life.</span></div></div></footer>
    </main>
  );
}

export default App;
