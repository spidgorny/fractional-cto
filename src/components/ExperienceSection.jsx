const experienceItems = [
  {
    pill: '20+ years',
    title: 'Hands-on across every stage of growth',
    description:
      'From early product definition and architecture to scaling delivery and modernizing teams under pressure.',
  },
  {
    pill: 'SkarAudio.com',
    title: 'High-performance commerce and operations',
    description:
      'Consulting and software leadership engagement focused on reliability, speed, customer experience, and revenue-impacting systems.',
  },
  {
    pill: 'Startups',
    title: 'Operator mindset for fast-moving teams',
    description:
      'Helped startup teams make better technical bets, ship faster, and stay focused on the highest-leverage work.',
  },
  {
    pill: 'Fractional model',
    title: 'Senior leadership without full-time overhead',
    description:
      'A flexible way to add CTO-level judgment, execution, and founder support exactly when it is needed.',
  },
]

function ExperienceSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="pill">Experience</span>
          <h2>Built across startups, commerce, and digital products.</h2>
          <p>
            Deep technical range, business fluency, and a bias for shipping work that moves the
            company forward.
          </p>
        </div>

        <div className="grid-2">
          {experienceItems.map((item) => (
            <article className="card timeline-card" key={item.title}>
              <span className="pill">{item.pill}</span>
              <h3>{item.title}</h3>
              <p className="muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
