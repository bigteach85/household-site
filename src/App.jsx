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
  <a href="#story">Where it started</a>
  <a href="#prepared">Preparedness</a>
  <a href="#membership">Membership</a>
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
          href="#membership"
          onClick={() => setMenuOpen(false)}
        >
          Membership
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
        <div className="hero-inner hero-layout">
          <div className="hero-content">
            <p className="eyebrow">HOUSEHOLD</p>

            <h1>
              The people who depend
              <br />
              <em>on one another.</em>
            </h1>

            <p className="hero-copy">
              One private place to understand and coordinate the important
              parts of life you share—for a calmer home.
            </p>

            <div className="hero-promise">
              <strong>20 seconds. Clarity. Back to life.</strong>
              <p>
                Household is not designed to hold your attention. It is designed
                to give you enough understanding to act, then get out of the way.
              </p>
            </div>

            <a className="hero-link" href="#life">
              See why we built it
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <figure className="hero-photo">
            <img
              src="/images/household-hero-vero.jpg"
              alt="A multigenerational family spending the day together in Vero Beach, Florida."
            />
          </figure>
        </div>
      </section>

      <section className="life" id="life">
        <div className="life-heading">
          <p className="eyebrow dark-eyebrow">WHAT IT'S FOR</p>

          <h2>
            Relationships come first.
            <br />
            <em>Information follows.</em>
          </h2>
        </div>

      </section>

      <section className="story" id="story">
        <div className="story-inner">
          <div className="story-title">
            <p className="eyebrow dark-eyebrow">WHERE IT STARTED</p>

            <h2>
              It started in
              <br />
              <em>our kitchen.</em>
            </h2>

            <figure className="household-illustration household-illustration--coordination" aria-hidden="true">
              <img
                src="/images/illustrations/household-coordination.png"
                alt=""
              />
            </figure>
          </div>

          <div className="story-copy">
            <p className="story-lead">
              My wife and I kept having the same conversations about bills.
            </p>

            <p>
              Everything felt scattered. Accounts in one place. Bills in another.
              Spreadsheets we stopped updating. Dozens of apps that never really
              stuck.
            </p>

            <p>
              And because thinking about all of it felt stressful, it became easier
              to push it out of mind.
            </p>

            <div className="story-realization">
              <p>Then I had a different thought:</p>

              <blockquote>
                What if managing your household didn't make you more anxious?
                <br />
                <em>What if it actually made you feel calmer?</em>
              </blockquote>
            </div>

            <p>That became Household.</p>

            <p className="story-close">
              Not another app asking for more attention. A place to understand
              what matters, see what needs attention, and get back to your life.
            </p>
          </div>
        </div>
      </section>

      <section className="understanding">
        <div className="understanding-inner">
          <p className="eyebrow dark-eyebrow">THE HOUSEHOLD AS A LIVING SOCIAL UNIT</p>

          <div className="understanding-heading">
            <h2>
              Your household is
              <br />
              <em>more than information.</em>
            </h2>

            <p>
              A household is made of people, relationships, responsibilities,
              resources and care. Household helps make those connections
              understandable without reducing family life to accounts, folders
              or users.
            </p>
          </div>

          <div className="understanding-list">
            <div className="understanding-item">
              <span>01</span>
              <h3>Start with people.</h3>
              <p>
                Understand who is part of your household, who matters to it,
                and how people depend on one another.
              </p>
            </div>

            <div className="understanding-item">
              <span>02</span>
              <h3>Understand responsibility.</h3>
              <p>
                Bills, care, documents and plans become clearer when you know
                who needs to know, who needs to act and who is being cared for.
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
          <div className="companion-aside">
            <div className="companion-number">01</div>

            <figure className="household-illustration household-illustration--inverse household-illustration--recovery" aria-hidden="true">
              <img
                src="/images/illustrations/household-care-inverse.png"
                alt=""
              />
            </figure>
          </div>

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

        <div className="companion estate-companion">
  <div className="companion-aside">
    <div className="companion-number">02</div>

    <figure className="household-illustration household-illustration--inverse household-illustration--estate" aria-hidden="true">
      <img
        src="/images/illustrations/household-documents-inverse.png"
        alt=""
      />
    </figure>
  </div>

  <div className="companion-content">
    <p className="companion-label">ESTATE PLANNING COMPANION</p>

    <h3>
      This one started
      <br />
      <em>with my parents.</em>
    </h3>

    <p className="estate-origin-lead">
      Anytime I tried to talk with them about an estate plan,
      it was easy to put off. It felt like something we could
      deal with later.
    </p>

    <p>
      My wife works in estate planning, so I asked her a simple question:
      what would the perfect client already have organized before they
      ever walked into an attorney&apos;s office?
    </p>

    <p>
      What documents would they bring? What information would they
      already have together? What would make that first conversation
      easier and reduce the time spent gathering basic information?
    </p>

    <p className="estate-origin-answer">
      That question became the Estate Planning Companion.
    </p>

    <p>
      Household helps a family organize the information and documents
      that can help them prepare for an estate-planning conversation
      and build a packet they can actually find when they need it.
    </p>

    <div className="estate-boundary">
      <p>
        It doesn&apos;t replace an attorney.
        <br />
        That was never the idea.
      </p>
    </div>

    <p className="companion-thought estate-principle">
      Get the family organized
      <br />
      before life makes it urgent.
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
            <p className="eyebrow dark-eyebrow">PEOPLE & RELATIONSHIPS</p>

            <h2>
              People are not
              <br />
              <em>seats.</em>
            </h2>

            <figure className="household-illustration household-illustration--companionship" aria-hidden="true">
              <img
                src="/images/illustrations/household-companionship.png"
                alt=""
              />
            </figure>
          </div>

          <div className="network-copy">
            <p className="network-lead">
              A household is not a collection of software users.
              It is a living social unit.
            </p>

            <p>
              Partners. Children. Parents. Grandparents. Caregivers. Trusted
              friends. The people we care for and the people we depend on.
            </p>

            <p>
              Household is designed around those relationships. People should
              be able to participate in the parts of life that are appropriate
              to them without being reduced to another account, license or seat.
            </p>

            <p className="network-statement">
              Adding Grandma shouldn't carry a price tag.
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

          <div className="product-devices-premium">
            <div className="device-laptop">
              <div className="device-laptop-screen">
                <img
                  src="/images/household-dashboard-desktop.png"
                  alt="Household Family Picture dashboard on desktop."
                />
              </div>
              <div className="device-laptop-base">
                <div className="device-laptop-notch"></div>
              </div>
            </div>

            <div className="device-phone">
              <div className="device-phone-speaker"></div>
              <div className="device-phone-screen">
                <img
                  src="/images/household-dashboard-mobile.png"
                  alt="Household Family Picture on mobile."
                />
              </div>
            </div>
          </div>

          <p className="product-note">
            Your household when you need it.
            <br />
            <em>Your life when you don't.</em>
          </p>
        </div>
      </section>

<section className="bring-it">
  <div className="bring-it-inner">
    <div className="bring-it-copy">
      <p className="eyebrow dark-eyebrow">DON’T START OVER</p>

      <h2>
        Ditch the spreadsheets.
        <br />
        <em>Keep the information.</em>
      </h2>

      <p className="bring-it-lead">
        You shouldn’t have to rebuild your household from scratch.
        Bring the spreadsheets, documents, and cloud files you already use.
        Household can help turn what you already have into a clearer Household Picture.
      </p>

      <p className="bring-it-principle">
        Household should never require a household to recreate information it already has.
      </p>

      <a className="bring-it-button" href="#membership">
        Try Household free
      </a>
    </div>

    <div className="bring-it-paths">
      <article>
        <span>01</span>
        <div>
          <strong>Upload a spreadsheet</strong>
          <p>
            Bring the budget, bill tracker, debt sheet, or family spreadsheet
            you already use.
          </p>
          <small>Planned import</small>
        </div>
      </article>

      <article>
        <span>02</span>
        <div>
          <strong>Connect cloud storage</strong>
          <p>
            Keep important files where they already live while Household helps
            give them meaning.
          </p>
          <small>Planned integration</small>
        </div>
      </article>

      <article>
        <span>03</span>
        <div>
          <strong>Start fresh</strong>
          <p>
            Nothing to bring? Build your Household gradually, one useful piece
            at a time.
          </p>
          <small>Available with Household</small>
        </div>
      </article>
    </div>
  </div>
</section>

      <section className="membership" id="membership">
  <div className="membership-inner">
    <div className="membership-intro">
      <p className="eyebrow dark-eyebrow">MEMBERSHIP</p>

      <h2>
        Start free.
        <br />
        <em>Stay connected forever.</em>
      </h2>

      <p>
        Bring your household together for free. Upgrade only when you want
        Household to do more.
      </p>
    </div>

    <div className="membership-grid">
      <article className="membership-card">
        <div className="membership-card-top">
          <p className="membership-label">FREE</p>

          <div className="membership-price">
            <span className="price">$0</span>
            <span className="price-period">forever</span>
          </div>

          <p className="membership-description">
            Bring your household together and keep the important parts of life
            understandable.
          </p>
        </div>

        <ul className="membership-features">
          <li>Unlimited household members</li>
          <li>Unlimited connected households</li>
          <li>1 connected financial institution</li>
          <li>Updated morning and evening</li>
          <li>5 GB Household document storage</li>
          <li>Connect 1 cloud storage service</li>
          <li>Basic planning and preparedness</li>
          <li>Private sharing with people you trust</li>
        </ul>

        <a className="membership-button secondary" href="#">
          Start free
        </a>
      </article>

      <article className="membership-card membership-featured">
        <div className="membership-card-top">
          <div className="membership-heading-row">
            <p className="membership-label">PLUS</p>
            <span className="membership-recommended">MOST HOUSEHOLDS</span>
          </div>

          <div className="membership-price">
            <span className="price">$5</span>
            <span className="price-period">/ month</span>
          </div>

          <p className="membership-description">
            Let Household do more of the work of keeping everyday life
            organized.
          </p>
        </div>

        <ul className="membership-features">
          <li>Everything in Free</li>
          <li>Multiple connected financial institutions</li>
          <li>More frequent financial updates</li>
          <li>Expanded document storage</li>
          <li>Multiple cloud storage connections</li>
          <li>Automatic reminders</li>
          <li>Recurring household responsibilities</li>
          <li>Richer household coordination</li>
        </ul>

        <a className="membership-button primary" href="#">
          Choose Plus
        </a>
      </article>

      <article className="membership-card">
        <div className="membership-card-top">
          <p className="membership-label">CARE &amp; PREPARE</p>

          <div className="membership-price">
            <span className="price">$12</span>
            <span className="price-period">/ month</span>
          </div>

          <p className="membership-description">
            More help for the parts of life that need greater care,
            preparation, and coordination.
          </p>
        </div>

        <ul className="membership-features">
          <li>Everything in Plus</li>
          <li>Estate Planning Companion</li>
          <li>Family Care Team</li>
          <li>Advanced preparedness</li>
          <li>Recovery Companion</li>
          <li>Trusted professional collaboration</li>
          <li>Advanced permissions</li>
          <li>Structured care and document workflows</li>
        </ul>

        <a className="membership-button secondary" href="#">
          Choose Care &amp; Prepare
        </a>
      </article>
    </div>

    <div className="membership-principle">
      <p className="membership-principle-eyebrow">PEOPLE AREN'T SEATS.</p>

      <h3>We don't charge you more because more people matter to you.</h3>

      <p>
        Every plan includes unlimited household members, relationships, and
        connected households. Invite your kids. Connect your parents. Add
        Grandma. Stay connected with siblings, cousins, family friends, and
        neighbors.
      </p>

      <div className="membership-principle-points">
        <span>No hidden charges.</span>
        <span>No caregiver seats.</span>
        <span>No professional seats.</span>
      </div>

      <p className="membership-principle-closing">
        Connection is free, forever.
      </p>
    </div>
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

          <figure className="household-illustration household-illustration--inverse household-illustration--laundry" aria-hidden="true">
            <img
              src="/images/illustrations/household-laundry-inverse.png"
              alt=""
            />
          </figure>

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
            <h3>Access follows relationships.</h3>
            <p>
              The people who help your household should be able to access what
              they need for their role—not everything simply because they were invited.
            </p>
          </div>
        </div>

        <div className="trust-point">
          <span>03</span>
          <div>
            <h3>Understanding over surveillance.</h3>
            <p>
              Household should surface what matters without turning family
              life into something that feels constantly monitored.
            </p>
          </div>
        </div>

        <div className="trust-point">
          <span>04</span>
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
                The people who depend on one another. For a calmer home.
              </div>
            </div>
          </div>

          <div className="footer-links">
            <a href="#story">Where it started</a>
            <a href="#prepared">Preparedness</a>
            <a href="#membership">Membership</a>
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
