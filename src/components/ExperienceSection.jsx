const experienceItems = [
  {
    pill: '20+ years',
    title: 'Hands-on across every stage of growth',
    description:
      'From early product definition and architecture to scaling delivery, team leadership, and modernizing systems under pressure.',
  },
  {
    pill: 'SkarAudio.com',
    title: 'CTO for e-commerce and operations',
    description:
      'Built a Next.js/React shop, integrated dozens of REST and GraphQL APIs, and built backend systems for orders, warehouse, supply, and QuickBooks automation.',
  },
  {
    pill: 'Nintendo of Europe',
    title: 'Senior leader for 20+ enterprise applications',
    description:
      'Managed teams up to 6, owned budgets, and delivered knowledge bases, booking systems, repair workflows, and inventory platforms used across Europe.',
  },
  {
    pill: 'Startups & side projects',
    title: 'Operator mindset for fast-moving teams',
    description:
      'Hands-on founder/CTO experience, 5★ CodeMentor mentor, crypto-bot, ML/AI prototypes, and mobile apps built with Flutter.',
  },
]

function ExperienceSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="pill">Experience</span>
          <h2>Built across startups, commerce, and enterprise.</h2>
          <p>
            Deep technical range, business fluency, and a bias for shipping work that moves the
            company forward — from MVPs to platforms used by thousands.
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
