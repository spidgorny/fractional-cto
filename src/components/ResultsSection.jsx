const results = [
  {
    title: 'Fast diagnosis',
    description:
      'Quickly identify what is slowing delivery, inflating cost, or increasing technical risk.',
  },
  {
    title: 'Credible execution',
    description:
      'Hands-on enough to guide implementation, senior enough to shape strategy and align stakeholders.',
  },
  {
    title: 'AI-aware leverage',
    description:
      'Use modern tooling and automation thoughtfully to increase output without compromising quality.',
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
