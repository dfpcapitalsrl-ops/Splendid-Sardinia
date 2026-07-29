const experiences = [
  {
    title: "Private Yacht",
    text: "Sail through hidden coves, crystalline waters and the most exclusive corners of the Costa Smeralda.",
    label: "Explore by sea",
  },
  {
    title: "Private Chauffeur",
    text: "Travel across Sardinia aboard a black Mercedes-Benz S-Class with discreet, professional and fully tailored chauffeur service.",
    label: "Move in style",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Mercedes-Benz_S-Class_W223_black.jpg",
  },
  {
    title: "Luxury Villas",
    text: "Stay in handpicked private residences selected for privacy, architecture, service and exceptional locations.",
    label: "Live beautifully",
  },
  {
    title: "Bespoke Concierge",
    text: "From restaurants and beach clubs to private events and last-minute requests, every detail is personally curated.",
    label: "Designed around you",
  },
];

const logoStyle = {
  display: "block",
  width: "clamp(250px, 26vw, 390px)",
  height: "auto",
} as const;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Splendid Sardinia home">
          <img
            src="/splendid-sardinia-logo.svg"
            alt="Splendid Sardinia — Your Luxury Travel Experience"
            style={logoStyle}
          />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#experiences">Experiences</a>
          <a href="#about">About</a>
          <a href="#destinations">Destinations</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="#contact">Plan your journey</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Private travel, exquisitely curated</p>
          <h1>Experience Sardinia<br />Beyond Luxury</h1>
          <p className="hero-copy">
            Private yachts, chauffeur services, exceptional villas and a personal concierge dedicated to every detail.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experiences">Discover experiences</a>
            <a className="button button-secondary" href="#contact">Speak with our concierge</a>
          </div>
        </div>
        <a className="scroll-hint" href="#intro" aria-label="Scroll to discover">
          <span>Discover</span>
          <i />
        </a>
      </section>

      <section className="intro section" id="intro">
        <p className="section-kicker">The art of effortless travel</p>
        <h2>A private vision of Sardinia, created exclusively for you.</h2>
        <p className="lead">
          Splendid Sardinia designs seamless journeys for guests who value privacy, authenticity and exceptional service. Every itinerary is built around your rhythm, your interests and your idea of luxury.
        </p>
      </section>

      <section className="experiences section" id="experiences">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Signature experiences</p>
            <h2>One island.<br />Endless possibilities.</h2>
          </div>
          <p>
            From the first airport welcome to the final sunset at sea, every moment is coordinated by one dedicated team.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((experience, index) => (
            <article
              className={`experience-card card-${index + 1}`}
              key={experience.title}
              style={
                experience.image
                  ? {
                      backgroundImage: `linear-gradient(180deg, rgba(3, 12, 18, 0.02) 10%, rgba(3, 12, 18, 0.28) 100%), url("${experience.image}")`,
                      backgroundPosition: "center 58%",
                    }
                  : undefined
              }
            >
              <div className="card-shade" />
              <div className="card-content">
                <span>0{index + 1}</span>
                <p>{experience.label}</p>
                <h3>{experience.title}</h3>
                <div className="card-detail">
                  <p>{experience.text}</p>
                  <a href="#contact" aria-label={`Learn more about ${experience.title}`}>Discover</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="story section" id="about">
        <div className="story-visual" aria-hidden="true">
          <div className="story-frame" />
        </div>
        <div className="story-copy">
          <p className="section-kicker">More than a destination</p>
          <h2>Access the Sardinia few travellers ever discover.</h2>
          <p>
            Our local knowledge opens doors to private beaches, exceptional hosts, celebrated chefs, iconic coastlines and authentic places beyond the usual routes.
          </p>
          <p>
            Discreet service, impeccable timing and trusted local relationships allow you to enjoy the island without friction.
          </p>
          <a className="text-link" href="#contact">Create your private itinerary</a>
        </div>
      </section>

      <section className="destinations section" id="destinations">
        <div className="destination-copy">
          <p className="section-kicker">Selected destinations</p>
          <h2>From Costa Smeralda to the soul of the island.</h2>
        </div>
        <div className="destination-list">
          {[
            "Costa Smeralda",
            "Porto Cervo",
            "La Maddalena",
            "Cagliari",
            "Alghero",
            "Barbagia",
          ].map((destination, index) => (
            <div className="destination-row" key={destination}>
              <span>0{index + 1}</span>
              <h3>{destination}</h3>
              <p>Private itineraries, tailored stays and privileged local access.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <p className="section-kicker">Begin your journey</p>
          <h2>Tell us how you would like to experience Sardinia.</h2>
          <p>
            Share your travel dates, interests and preferred level of service. Our concierge will design a personalised proposal around you.
          </p>
          <a className="button button-primary" href="mailto:concierge@splendidsardinia.com">Contact our concierge</a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <img
            src="/splendid-sardinia-logo.svg"
            alt="Splendid Sardinia"
            style={{ ...logoStyle, width: "clamp(220px, 22vw, 330px)" }}
          />
        </div>
        <div className="footer-links">
          <a href="#experiences">Experiences</a>
          <a href="#about">About</a>
          <a href="#destinations">Destinations</a>
          <a href="#contact">Contact</a>
        </div>
        <p>
          © 2026 Splendid Sardinia. All rights reserved.<br />
          Chauffeur image: Damian B Oh, CC BY-SA 4.0.
        </p>
      </footer>
    </main>
  );
}
