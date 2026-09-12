const stats = [
  {
    value: '20+',
    label: 'Years shipping software, leading engineering, and guiding product decisions.',
  },
  {
    value: '0→1 & scale',
    label: 'From MVP architecture to team workflows, quality, delivery, and modernization.',
  },
  {
    value: 'Founder-ready',
    label: 'Ideal for companies that need clarity, velocity, and senior execution right now.',
  },
]

function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>

        <div className="nav">
          <div className="brand">Fractional CTO</div>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              Senior technology leadership for founders who need traction fast
            </span>
            <h1>Build with a CTO who has delivered for 20+ years.</h1>
            <p>
              Get executive-level product and engineering leadership without committing to a
              full-time hire. Turn vision into roadmap, roadmap into execution, and execution into
              growth.
            </p>
            <p>
              Experience spans early-stage startups, scale-up execution, and hands-on delivery —
              including consulting and software leadership work for <strong>SkarAudio.com</strong>{' '}
              and multiple high-growth ventures that needed decisive technical leadership.
            </p>
            <div className="cta-row">
              <a className="button button-primary" href="#book-call">
                Book a strategy call
              </a>
              <a className="button button-secondary" href="#services">
                Explore services
              </a>
            </div>
          </div>

          <div className="hero-stats" aria-label="Highlights">
            {stats.map((stat) => (
              <article className="card" key={stat.value}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
