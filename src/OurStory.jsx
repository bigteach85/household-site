import "./OurStory.css";

function HouseholdWordmark() {
  return <span className="story-wordmark">household<sup>™</sup></span>;
}

export default function OurStory() {
  return (
    <main className="our-story-page">
      <header className="our-story-nav">
        <a href="/" aria-label="household home"><HouseholdWordmark /></a>
        <a href="/">Back to Household</a>
      </header>

      <section className="our-story-hero">
        <p className="our-story-eyebrow">OUR STORY · VERO BEACH, FLORIDA</p>
        <h1>We wanted less time managing life.<br/><em>And more time living it.</em></h1>
        <p className="our-story-lede">We’re a family trying to make everyday life a little easier.</p>
      </section>

      <section className="our-story-origin">
        <div>
          <p className="our-story-eyebrow dark">WHERE IT STARTED</p>
          <h2>Our own life was<br/><em>scattered everywhere.</em></h2>
        </div>
        <div className="our-story-copy">
          <p>Bank accounts. Spreadsheets. Documents. Reminders. Responsibilities. And the people depending on us.</p>
          <p>We didn’t want another system that gave us more to manage. We wanted one calm place that could help us understand what needed attention, take care of it, and get back to our lives.</p>
          <p>Some families can hire someone to carry the administrative weight of household life—to remember what is due, coordinate the right people, and notice problems before they grow. Most families carry that work themselves. Household was created to make intelligent household support accessible to more families, while meeting each family where it is.</p>
          <strong>That became Household.</strong>
        </div>
      </section>

      <section className="our-story-family">
        <figure>
          <img src="/images/household-founders-life-together.png" alt="Kenny and Shannon together at the beach in Vero Beach, Florida." />
          <figcaption>Kenny &amp; Shannon · Vero Beach, Florida</figcaption>
        </figure>
      </section>

      <section className="our-story-parents">
        <div>
          <p className="our-story-eyebrow">THEN IT BECAME ABOUT OUR PARENTS</p>
          <h2>What happens when<br/><em>your family suddenly needs it?</em></h2>
        </div>
        <div className="our-story-copy inverse">
          <p>As our parents got older, the question became bigger than bills and organization.</p>
          <p>If something happened, would we know what they have, where it is, what needs to happen, and who needs to know?</p>
          <p>That question became part of Care &amp; Prepare.</p>
        </div>
      </section>

      <section className="our-story-estate">
        <div>
          <p className="our-story-eyebrow dark">ONE QUESTION</p>
          <h2>Then I asked my wife.</h2>
        </div>
        <div className="our-story-copy">
          <p>My wife works in estate planning. As I started thinking more seriously about my parents and their future, I asked her:</p>
          <blockquote>“What would the perfect client already have organized before they sat down with an attorney about their estate?”</blockquote>
          <p>What would they know? What documents would they bring? What would make that first conversation easier?</p>
          <p>That conversation became the beginning of Household’s <strong>Estate Planning Companion.</strong></p>
          <p className="our-story-boundary">Not a replacement for an attorney. A way to help families arrive prepared.</p>
        </div>
      </section>

      <section className="our-story-close">
        <p className="our-story-eyebrow">HOW WE KEEP BUILDING</p>
        <h2>Not by asking what else<br/>we can put in an app.</h2>
        <p>By asking what would make real family life a little easier.</p>
        <a href="https://app.householdstudio.com/founding-100">Join the Founding 100</a>
      </section>

      <footer className="our-story-footer">
        <HouseholdWordmark />
        <span>20 seconds. Clarity. Back to life.</span>
        <span>A Pierpoint Group LLC product</span>
      </footer>
    </main>
  );
}
