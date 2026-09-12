const results = [
  {
    title: 'Fast diagnosis',
    description:
      'Quickly identify what is slowing delivery, inflating cost, or increasing technical risk across the full stack.',
  },
  {
    title: 'Credible execution',
    description:
      'Hands-on enough to ship React, Next.js, PHP, Python, and Node.js code; senior enough to lead teams and align stakeholders.',
  },
  {
    title: 'Pragmatic leverage',
    description:
      'Use the right tooling, automation, and machine learning where it matters without adding complexity.',
  },
]

function ResultsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="pill">Why founders hire me</span>
          <h2>Because clarity and momentum are worth more than meetings.</h2>
        </div>

        <div className="grid-3">
          {results.map((result) => (
            <article className="card result-card" key={result.title}>
              <h3>{result.title}</h3>
              <p className="muted">{result.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResultsSection
