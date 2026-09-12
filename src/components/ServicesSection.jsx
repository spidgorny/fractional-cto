const services = [
  {
    title: 'Technology strategy',
    items: [
      'Architecture and platform direction (React, Next.js, PHP, Python, Node.js)',
      'Roadmap prioritization tied to revenue and operations outcomes',
      'Vendor, cloud (AWS), and machine-learning adoption decisions',
    ],
  },
  {
    title: 'Execution leadership',
    items: [
      'Hands-on engineering process and delivery rhythm',
      'Interim team leadership and senior mentoring',
      'Legacy modernization, DevOps, and secure authentication systems',
    ],
  },
  {
    title: 'Founder partnership',
    items: [
      'Translate business needs into technical plans',
      'Support fundraising, due diligence, and hiring',
      'Reduce risk while preserving speed',
    ],
  },
]

function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="pill">What you get</span>
          <h2>Fractional CTO support designed to unblock growth.</h2>
          <p>
            Practical leadership that aligns business goals, product decisions, engineering systems,
            and automation — backed by 20+ years of hands-on architecture, delivery, and team
            leadership.
          </p>
        </div>

        <div className="grid-3">
          {services.map((service) => (
            <article className="card service-card" key={service.title}>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
