import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
  <div className="nav-inner">
    <a className="brand" href="/" aria-label="Our Household home">
      <img
        className="brand-logo"
        src="/images/household-logo.png"
        alt=""
      />
      <span className="brand-name">our household™</span>
    </a>

<nav className="nav-links">
  <a href="#story">Our story</a>
  <a href="#prepared">Preparedness</a>
  <a href="#trust">Trust</a>
</nav>

<a className="sign-in desktop-sign-in" href="#">
  Sign in
</a>

<button
  className={`mobile-menu-button ${menuOpen ? "is-open" : ""}`}
  type="button"
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  aria-expanded={menuOpen}
  onClick={() => setMenuOpen(!menuOpen)}
>
  {!menuOpen ? (
  <span className="menu-symbol" aria-hidden="true">
    <span></span>
    <span></span>
  </span>
) : (
  <span className="menu-close">×</span>
)}
</button>
  </div>

  <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
    <div className="mobile-menu-inner">
      <div className="mobile-menu-brand">
        <img
          src="/images/household-logo.png"
          alt=""
        />
        <span>our household™</span>
      </div>

      <nav className="mobile-menu-links">
        <a
          href="#story"
          onClick={() => setMenuOpen(false)}
        >
          Our story
        </a>

        <a
          href="#prepared"
          onClick={() => setMenuOpen(false)}
        >
          Preparedness
        </a>

        <a
          href="#trust"
          onClick={() => setMenuOpen(false)}
        >
          Trust
        </a>
      </nav>

      <a
        className="mobile-enter"
        href="#"
        onClick={() => setMenuOpen(false)}
      >
        Enter Household
      </a>

      <p className="mobile-menu-signature">
        20 seconds. Clarity. Back to life.
      </p>
    </div>
  </div>
</header>

      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow">HOUSEHOLD</p>

          <h1>
            The family operating system
            <br />
            <em>for a calmer home.</em>
          </h1>

          <p className="hero-copy">
            One place to understand what matters at home—
            without spending your life managing it.
          </p>

          <p className="hero-signature">
            20 seconds. Clarity. Back to life.
          </p>

          <a className="hero-link" href="#life">
            See why we built it
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="life" id="life">
        <div className="life-heading">
          <p className="eyebrow dark-eyebrow">WHAT IT'S FOR</p>

          <h2>
            Less time managing life.
            <br />
            <em>More time living it.</em>
          </h2>
        </div>

        <div className="family-image">
          <img
            src="/images/household-family-turtle.png"
            alt="A family sharing a quiet moment together on the beach."
          />
        </div>
      </section>

      <section className="story" id="story">
        <div className="story-inner">
          <div className="story-title">
            <p className="eyebrow dark-eyebrow">OUR STORY</p>

            <h2>
              It began at
              <br />
              <em>our kitchen table.</em>
            </h2>
          </div>

          <div className="story-copy">
            <p className="story-lead">
              We didn't need another budgeting tool.
              We needed a calmer way to run our life together.
            </p>

            <p>
              Bills. Accounts. School. Insurance. Documents.
              The house. The cars. The people we love.
            </p>

            <p>
              None of it was particularly complicated on its own.
              It was complicated because it was everywhere.
            </p>

            <p className="story-close">
              Household brings the pieces together so a family can
              understand what matters—and then get back to living.
            </p>
          </div>
        </div>
      </section>

          <section className="understanding">
        <div className="understanding-inner">
          <p className="eyebrow dark-eyebrow">ONE HOME. ONE PICTURE.</p>

          <div className="understanding-heading">
            <h2>
              Life isn't organized
              <br />
              <em>into apps.</em>
            </h2>

            <p>
              Your home is accounts and bills, but it's also documents,
              responsibilities, people, plans and the unexpected.
              Household brings those pieces into one understandable place.
            </p>
          </div>

          <div className="understanding-list">
            <div className="understanding-item">
              <span>01</span>
              <h3>Know where you stand.</h3>
              <p>
                See the important parts of your household without searching
                across accounts, spreadsheets and apps.
              </p>
            </div>

            <div className="understanding-item">
              <span>02</span>
              <h3>Know what needs attention.</h3>
              <p>
                Household helps surface what matters without demanding that
                you constantly monitor it.
              </p>
            </div>

            <div className="understanding-item">
              <span>03</span>
              <h3>Then go live your life.</h3>
              <p>
                Understanding should give time back to your family—not create
                another system to manage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="prepared" id="prepared">
        <div className="prepared-intro">
          <p className="eyebrow">WHEN LIFE CHANGES</p>

          <h2>
            Some things are easier
            <br />
            <em>to prepare for now.</em>
          </h2>

          <p className="prepared-lead">
            The worst time to figure out what to do is the moment
            your family suddenly needs to do it.
          </p>
        </div>

        <div className="companion">
          <div className="companion-number">01</div>

          <div className="companion-content">
            <p className="companion-label">RECOVERY COMPANION</p>

            <h3>
              When life changes,
              <br />
              know where to begin.
            </h3>

            <p>
              Important contacts, obligations, documents and household
              information can already be organized before an emergency happens.
            </p>

            <p className="companion-thought">
              Less searching. More capacity for what matters.
            </p>
          </div>
        </div>

        <div className="companion">
          <div className="companion-number">02</div>

          <div className="companion-content">
            <p className="companion-label">ESTATE PLANNING COMPANION</p>

            <h3>
              Prepare while
              <br />
              <em>life is calm.</em>
            </h3>

            <p>
              Bring the information your estate-planning attorney needs
              together ahead of time. Once a professional plan is established,
              Household helps your family know what exists, where it is and
              who to contact.
            </p>

            <p className="companion-thought">
              The attorney prepares the legal plan.
              <br />
              Household helps the family be ready to use it.
            </p>
          </div>
        </div>

        <div className="prepared-principle">
          <p>
            Prepare while life is calm,
            <br />
            <em>so the family can remain present when it isn't.</em>
          </p>
        </div>
      </section>

      <section className="network">
        <div className="network-inner">
          <div>
            <p className="eyebrow dark-eyebrow">HOUSEHOLD NETWORK</p>

            <h2>
              A household isn't
              <br />
              <em>one person.</em>
            </h2>
          </div>

          <div className="network-copy">
            <p className="network-lead">
              The people who live life together should be able
              to understand life together.
            </p>

            <p>
              Parents. Partners. Children. Grandparents. The people we
              care for and the people we depend on.
            </p>

            <p>
              Household is designed around the family as a unit—not
              another collection of isolated individual accounts.
            </p>

            <p className="network-statement">
              Everyone belongs on the household team.
            </p>
          </div>
        </div>
      </section>

<section className="product-experience">
  <div className="product-experience-inner">
    <div className="product-intro">
      <p className="eyebrow dark-eyebrow">YOUR HOUSEHOLD, TOGETHER</p>

      <h2>
        Everything that matters at home.
        <br />
        <em>One understandable picture.</em>
      </h2>

      <p>
        Accounts. Bills. Documents. Plans. The people you care for.
        Household brings the important parts of family life together
        without giving you another system to constantly manage.
      </p>
    </div>

    <div className="product-devices">
      <img
        src="/images/household-devices-clean-crop.png"
        alt="Household shown on a laptop and mobile phone."
      />
    </div>

    <p className="product-note">
      Your household when you need it.
      <br />
      <em>Your life when you don't.</em>
    </p>
  </div>
</section>

<section className="membership" id="membership">
  <div className="membership-inner">
    <div className="membership-intro">
      <p className="eyebrow dark-eyebrow">MEMBERSHIP</p>

      <h2>
        One plan for every stage
        <br />
        <em>of family life.</em>
      </h2>

      <p>
        Start free. Upgrade only when Household becomes
        part of your routine.
      </p>
    </div>

    <div className="membership-grid">

      <article className="membership-card">
        <div className="membership-card-top">
          <p className="membership-label">HOUSEHOLD FREE</p>

          <div className="membership-price">
            <span className="price">$0</span>
            <span className="price-period">forever</span>
          </div>

          <p className="membership-description">
            A calm place to begin organizing your household.
          </p>
        </div>

        <ul className="membership-features">
          <li>Personal household overview</li>
          <li>Manual accounts and balances</li>
          <li>Essential household information</li>
          <li>Basic document organization</li>
          <li>One household member</li>
        </ul>

        <a className="membership-button secondary" href="#">
          Start free
        </a>
      </article>

      <article className="membership-card membership-featured">
        <div className="membership-card-top">
          <div className="membership-heading-row">
            <p className="membership-label">HOUSEHOLD PLUS</p>
            <span className="membership-recommended">MOST HOUSEHOLDS</span>
          </div>

          <div className="membership-price">
            <span className="price">$12</span>
            <span className="price-period">/ month</span>
          </div>

          <p className="membership-description">
            For couples and families who want Household
            connected and working with them.
          </p>
        </div>

        <ul className="membership-features">
          <li>Everything in Household Free</li>
          <li>Connected financial accounts</li>
          <li>Bills and household cash flow</li>
          <li>Expanded document organization</li>
          <li>Household insights</li>
          <li>Up to two adults</li>
        </ul>

        <a className="membership-button primary" href="#">
          Choose Plus
        </a>
      </article>

      <article className="membership-card">
        <div className="membership-card-top">
          <p className="membership-label">HOUSEHOLD FAMILY</p>

          <div className="membership-price">
            <span className="price">$25</span>
            <span className="price-period">/ month</span>
          </div>

          <p className="membership-description">
            For the whole family—and the plans that help
            everyone stay prepared.
          </p>
        </div>

        <ul className="membership-features">
          <li>Everything in Household Plus</li>
          <li>Up to ten household members</li>
          <li>Household Network</li>
          <li>Recovery Companion</li>
          <li>Estate Planning Companion</li>
          <li>Long-term household planning</li>
        </ul>

        <a className="membership-button secondary" href="#">
          Choose Family
        </a>
      </article>

    </div>

    <p className="membership-footnote">
      No pressure to upgrade. Household should earn its place in your life.
    </p>
  </div>
</section>

      <section className="presence">
        <div className="presence-inner">
          <p className="eyebrow">BUILT FOR PRESENCE</p>

          <h2>
            Household doesn't want
            <br />
            <em>more of your attention.</em>
          </h2>

          <p>
            It wants to give some back.
          </p>

          <div className="presence-rule"></div>

          <p className="presence-principle">
            Open Household.
            <br />
            Understand what matters.
            <br />
            Go live your life.
          </p>

          <p className="presence-signature">
            20 seconds. Clarity. Back to life.
          </p>
        </div>
      </section>

            <section className="trust-section" id="trust">
  <div className="trust-inner">
    <div>
      <p className="eyebrow dark-eyebrow">TRUST & PRIVACY</p>

      <h2>
        Your household should feel
        <br />
        <em>private by default.</em>
      </h2>
    </div>

    <div className="trust-copy">
      <p className="trust-lead">
        Household is being built around the idea that family information
        deserves restraint, clarity and care.
      </p>

      <div className="trust-points">
        <div className="trust-point">
          <span>01</span>
          <div>
            <h3>Your household is yours.</h3>
            <p>
              Household is designed around clear household boundaries,
              secure access and intentional sharing.
            </p>
          </div>
        </div>

        <div className="trust-point">
          <span>02</span>
          <div>
            <h3>Understanding over surveillance.</h3>
            <p>
              Household should surface what matters without turning family
              life into something that feels constantly monitored.
            </p>
          </div>
        </div>

        <div className="trust-point">
          <span>03</span>
          <div>
            <h3>Useful, then quiet.</h3>
            <p>
              Household is not designed to maximize engagement. It is
              designed to help you understand what matters and move on.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="enter">
        <div className="enter-inner">
          <img
            className="enter-logo"
            src="/images/household-logo.png"
            alt=""
          />

          <p className="eyebrow">OUR HOUSEHOLD™</p>

          <h2>
            A calmer home starts
            <br />
            <em>with understanding.</em>
          </h2>

          <p className="enter-copy">
            Know where you stand. Know what matters.
            Then get back to life.
          </p>

          <a className="enter-button" href="#">
            Enter Household
          </a>

          <p className="enter-signature">
            20 seconds. Clarity. Back to life.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img
              className="footer-logo"
              src="/images/household-logo.png"
              alt=""
            />

            <div>
              <div className="footer-name">our household™</div>
              <div className="footer-tagline">
                The family operating system for a calmer home.
              </div>
            </div>
          </div>

          <div className="footer-links">
            <a href="#story">Our story</a>
            <a href="#prepared">Preparedness</a>
            <a href="#trust">Trust</a>
          </div>

          <div className="footer-meta">
            <span>© 2026 Household</span>
            <span>Built for real family life.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;