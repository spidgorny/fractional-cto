const stats = [
  {
    value: '20+',
    label: 'Years shipping software, leading engineering, and guiding product decisions across startups, e-commerce, and enterprise.',
  },
  {
    value: 'CTO × 2',
    label: 'Led as CTO for Skar Audio and multiple startups, plus 20+ internal applications at Nintendo of Europe.',
  },
  {
    value: 'Full stack',
    label: 'Deep hands-on work in React, Next.js, PHP, Python, Node.js, SQL/NoSQL, AWS, and AI/ML.',
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
              Track record includes CTO roles at <strong>SkarAudio.com</strong> and multiple
              startups, plus senior leadership for <strong>20+ internal applications at Nintendo of
              Europe</strong> with teams up to 6 and budget responsibility. Fluent in React, Next.js,
              PHP, Python, Node.js, SQL/NoSQL, AWS, and AI/ML.
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
