import "./App.css";

function App() {
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

          <a className="sign-in" href="#">
            Sign in
          </a>
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