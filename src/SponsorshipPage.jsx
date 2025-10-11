import './InfoPage.css'

const SponsorshipPage = () => {
  return (
    <section className="info-page info-page--sponsorship" aria-labelledby="sponsorship-title">
      <div className="info-page__content">
        <p className="info-page__eyebrow">Partner With Us</p>
        <h1 className="info-page__title" id="sponsorship-title">
          Sponsorship
        </h1>
        <p className="info-page__body">
          Strategic sponsorship keeps UBC UAS on the leading edge of autonomy research and
          competition readiness. Connect with us to explore partnership tiers, demo days, and
          student talent pipelines.
        </p>
        <a className="info-page__cta" href="mailto:sponsorship@ubcuas.com">
          Discuss Sponsorship
        </a>
      </div>
    </section>
  )
}

export default SponsorshipPage
