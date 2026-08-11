import "./App.css";

function App() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="/">
          <span className="mark">h</span>
          <span>our household™</span>
        </a>

        <a className="nav-link" href="#why">
          Why Household
        </a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">HOUSEHOLD</p>

          <h1>
            The family operating system
            <br />
            for a calmer home.
          </h1>

          <p className="hero-sub">
            Know what matters. Understand where you stand.
            <br />
            Then get back to life.
          </p>

          <p className="signature">
            20 seconds. Clarity. Back to life.
          </p>

          <a className="button" href="#why">
            Discover Household
          </a>
        </div>
      </section>

      <section className="story" id="why">
        <div className="section-inner narrow">
          <p className="eyebrow">WHY WE BUILT IT</p>

          <h2>It began at our kitchen table.</h2>

          <p>
            We did not need another budgeting tool.
            We needed a calmer way to run our life together.
          </p>

          <p>
            Household brings the information a family depends on into one
            understandable place — so less time is spent searching, organizing
            and worrying about what might have been forgotten.
          </p>
        </div>
      </section>

      <section className="principle">
        <div className="section-inner">
          <p className="eyebrow">A DIFFERENT IDEA</p>

          <h2>Everyone belongs on the household team.</h2>

          <p>
            Household is designed around the family, not the individual.
            The people who live life together should be able to understand
            life together.
          </p>
        </div>
      </section>

      <section className="companions">
        <div className="section-inner">
          <p className="eyebrow">WHEN LIFE CHANGES</p>

          <h2>Prepared before you need it.</h2>

          <div className="cards">
            <article className="card">
              <p className="card-label">RECOVERY COMPANION</p>
              <h3>Know how your household keeps going.</h3>
              <p>
                Important contacts, obligations, documents and next steps
                can already be organized before an emergency happens.
              </p>
            </article>

            <article className="card">
              <p className="card-label">ESTATE PLANNING COMPANION</p>
              <h3>The attorney prepares the plan. Household helps you use it.</h3>
              <p>
                Bring the information your estate-planning attorney needs
                together ahead of time and keep the operational pieces of
                the finished plan within reach.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="network">
        <div className="section-inner narrow">
          <p className="eyebrow">HOUSEHOLD NETWORK</p>

          <h2>The people you depend on are part of the picture.</h2>

          <p>
            Families do not live as isolated accounts. Household is being
            designed around the relationships, responsibilities and people
            that make a home work.
          </p>
        </div>
      </section>

      <section className="trust">
        <div className="section-inner narrow">
          <p className="eyebrow">BUILT DIFFERENTLY</p>

          <h2>Awareness without obsession.</h2>

          <p>
            Household is not designed to keep you scrolling.
            It is designed to help you understand what matters,
            take care of it and leave.
          </p>

          <p className="signature">
            Organize less. Understand more.
          </p>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="brand">
            <span className="mark">h</span>
            <span>our household™</span>
          </div>

          <p>The family operating system for a calmer home.</p>

          <p className="copyright">
            © 2026 Household. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;