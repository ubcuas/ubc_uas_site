import './InfoPage.css'

const SponsorshipPage = () => {
  return (
    <>
      <section className="info-page info-page--sponsorship" aria-labelledby="sponsorship-title">
        <div className="info-page__content">
          <p className="info-page__eyebrow">Partner With Us</p>
          <h1 className="info-page__title" id="sponsorship-title">
            Sponsorship
          </h1>
          <p className="info-page__body">
            Sponsors are a crucial to the success of the team, and we are incredibly grateful for
            everyone who supports us. We are always looking for new sponsors to help us take our
            innovations to new heights. If you are interested in sponsoring us, please contact out
            the details below and contact us at sponsorship@ubcuas.com.
          </p>
          <a className="info-page__cta" href="mailto:sponsorship@ubcuas.com">
            Discuss Sponsorship
          </a>
        </div>
      </section>

      <section className="sponsorship-details" aria-labelledby="sponsorship-details-title">
        <div className="sponsorship-details__container">
          <h2 className="sponsorship-details__title" id="sponsorship-details-title">
            Why Sponsor Us?
          </h2>
          <p className="sponsorship-details__body">
            We reach thousands of Canadians through our active participation in national and
            international autonomous aircraft competitions. Additionally, we facilitate youth
            outreach events, hold info sessions, and host technical workshops that are open to all
            students. We are always delighted to speak with potential sponsors who will make these
            ventures possible.
          </p>
          <p className="sponsorship-details__body">
            The ongoing expansion of our team and projects allows us to broadcast our sponsors on
            national and international stages. We are proud to positively shape brands through our
            platform at UBC UAS.
          </p>
          <p className="sponsorship-details__body">
            Your support allows students to gain the most from their UBC education by creating
            opportunities to apply their classroom knowledge to the field, creating better engineers
            for the future.
          </p>
        </div>
      </section>
    </>
  )
}

export default SponsorshipPage
