function BookingSection() {
  return (
    <section className="section" id="book-call" aria-labelledby="booking-heading">
      <div className="container">
        <div className="card cta-banner">
          <div>
            <span className="pill">Book a call</span>
            <h2 id="booking-heading">Book a Calendly strategy call.</h2>
            <p>
              Discuss your roadmap, engineering bottlenecks, platform decisions, or AI strategy in
              a focused intro session.
            </p>
          </div>
          <a
            className="button button-primary"
            href="https://calendly.com/spidgorny"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book your Calendly call ↗
          </a>
        </div>
      </div>
    </section>
  )
}

export default BookingSection
