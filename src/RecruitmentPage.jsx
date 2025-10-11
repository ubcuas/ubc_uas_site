import './InfoPage.css'

const RecruitmentPage = () => {
  return (
    <section className="info-page info-page--recruitment" aria-labelledby="recruitment-title">
      <div className="info-page__content">
        <p className="info-page__eyebrow">Join The Mission</p>
        <h1 className="info-page__title" id="recruitment-title">
          Recruitment
        </h1>
        <p className="info-page__body">
          We welcome engineers, makers, and storytellers who want to build next-generation UAS.
          Applications open each September and January. Share your interest and we&rsquo;ll send the
          next briefing.
        </p>
        <a className="info-page__cta" href="mailto:recruitment@ubcuas.com">
          Contact Recruitment
        </a>
      </div>
    </section>
  )
}

export default RecruitmentPage
