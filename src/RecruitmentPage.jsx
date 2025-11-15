// RecruitmentPage.tsx
import './InfoPage.css'
import './RecruitmentPage.css'

const RECRUITMENT_OPEN = true // toggle when cycle is live

const RecruitmentPage = () => {
  return (
    <main>
      {/* HERO / ALWAYS-ON SECTION */}
      <section
        className="info-page info-page--recruitment"
        aria-labelledby="recruitment-title"
      >
        <div className="info-page__content">
          <p className="info-page__eyebrow">Join The Mission</p>
          <h1 className="info-page__title" id="recruitment-title">
            Recruitment
          </h1>
          <p className="info-page__body">
            We welcome engineers, makers, and storytellers who want to build
            next-generation UAS. Applications open each September and January.
            Share your interest and we&rsquo;ll send the next briefing.
          </p>
          <a className="info-page__cta" href="mailto:recruitment@ubcuas.com">
            Contact Recruitment
          </a>
        </div>
      </section>

      {/* DETAILS SECTION – ONLY WHEN CYCLE IS OPEN */}
      {RECRUITMENT_OPEN && (
        <section
          className="recruitment-details"
          aria-label="Current recruitment cycle information"
        >
          <div className="recruitment-panel">
            <header className="recruitment-panel__header">
              <p className="recruitment-panel__eyebrow">Now Recruiting</p>
              <h2 className="recruitment-panel__title">
                Fall Recruitment Cycle
              </h2>
              <p className="recruitment-panel__body">
                We&rsquo;re recruiting for Aircraft, Payload, Electrical, and
                Software. Scroll to see the full timeline and team descriptions.
              </p>
              <a
                className="recruitment-panel__cta"
                href="https://forms.gle/your-application-form"
                target="_blank"
                rel="noreferrer"
              >
                Apply Now
              </a>
            </header>

            {/* RECRUITMENT TIMELINE */}
            <section
              className="recruitment-section recruitment-timeline"
              aria-labelledby="recruitment-timeline-title"
            >
              <h3
                id="recruitment-timeline-title"
                className="recruitment-section__heading"
              >
                Recruitment Timeline
              </h3>

              <div className="recruitment-timeline__canvas">
                {/* Curved blue dashed path */}
                <svg
                  className="recruitment-timeline__path"
                  viewBox="0 0 600 360"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    className="recruitment-timeline__path-line"
                    d="
                    M 80 35
                    Q 170 10 270 70
                    T 420 110
                    T 500 165
                    T 420 220
                    T 280 260
                    T 55 325
                    "
                  />
                  {/* Dots roughly aligned with events */}
                  n <circle cx="80"  cy="35"  r="5" className="recruitment-timeline__dot" />
                    <circle cx="270" cy="70"  r="5" className="recruitment-timeline__dot" />
                    <circle cx="420" cy="110" r="5" className="recruitment-timeline__dot" />
                    <circle cx="500" cy="165" r="5" className="recruitment-timeline__dot" />
                    <circle cx="420" cy="220" r="5" className="recruitment-timeline__dot" />
                    <circle cx="280" cy="260" r="5" className="recruitment-timeline__dot" />
                    <rect  x="55"  y="325" width="10" height="10" rx="2"
                        className="recruitment-timeline__flag" />
                </svg>

                {/* Events positioned near the path */}
                <ol className="recruitment-timeline__list">
                  <li className="recruitment-timeline__item recruitment-timeline__item--1">
                    <p className="recruitment-timeline__label">Imagine Day</p>
                    <p className="recruitment-timeline__meta">
                      September 2 · 13:00–17:00
                    </p>
                  </li>

                  <li className="recruitment-timeline__item recruitment-timeline__item--2">
                    <p className="recruitment-timeline__label">
                      Applications Open
                    </p>
                    <p className="recruitment-timeline__meta">August 22</p>
                  </li>

                  <li className="recruitment-timeline__item recruitment-timeline__item--3">
                    <p className="recruitment-timeline__label">
                      In-Person Info Session
                    </p>
                    <p className="recruitment-timeline__meta">
                      September 3 · 19:00 · ANGU 339
                    </p>
                  </li>

                  <li className="recruitment-timeline__item recruitment-timeline__item--4">
                    <p className="recruitment-timeline__label">
                      Online Info Session
                    </p>
                    <p className="recruitment-timeline__meta">
                      September 7 · 19:00
                    </p>
                  </li>

                  <li className="recruitment-timeline__item recruitment-timeline__item--5">
                    <p className="recruitment-timeline__label">
                      Applications Close
                    </p>
                    <p className="recruitment-timeline__meta">
                      September 14 · 23:59
                    </p>
                  </li>

                  <li className="recruitment-timeline__item recruitment-timeline__item--6">
                    <p className="recruitment-timeline__label">
                      Results Released
                    </p>
                    <p className="recruitment-timeline__meta">
                      September 21
                    </p>
                  </li>

                  <li className="recruitment-timeline__item recruitment-timeline__item--7">
                    <p className="recruitment-timeline__label">
                      First Meeting
                    </p>
                    <p className="recruitment-timeline__meta">
                      September 27
                    </p>
                  </li>
                </ol>
              </div>
            </section>

            {/* TEAM INFO */}
            <section
              className="recruitment-section recruitment-teams"
              aria-labelledby="recruitment-teams-title"
            >
              <h3
                id="recruitment-teams-title"
                className="recruitment-section__heading"
              >
                Team Information
              </h3>
              <p className="recruitment-teams__intro">
                Our team competes twice annually at AEAC and SUAS. Each year we
                develop aircraft from the ground up to complete new missions. To
                divide the work, our team is split into the following sub-teams:
                Aircraft, Payload, Electrical, and Software.
              </p>

              <div className="recruitment-teams__grid">
                <article className="recruitment-team">
                  <h4 className="recruitment-team__name">Aircraft</h4>
                  <p className="recruitment-team__body">
                    Mechanical-focused team. Designs and manufactures the
                    airframe to accommodate the payload, electronics, and
                    anything else the mission needs.
                  </p>
                </article>

                <article className="recruitment-team">
                  <h4 className="recruitment-team__name">Payload</h4>
                  <p className="recruitment-team__body">
                    Mechanical-focused team. Designs and builds mechanisms that
                    carry out competition tasks such as payload drops and other
                    moving systems.
                  </p>
                </article>

                <article className="recruitment-team">
                  <h4 className="recruitment-team__name">Electrical</h4>
                  <p className="recruitment-team__body">
                    Works on avionics and power systems, including PCBs for
                    power distribution, payload interfaces, sensors, and other
                    electronics.
                  </p>
                </article>

                <article className="recruitment-team">
                  <h4 className="recruitment-team__name">Software</h4>
                  <p className="recruitment-team__body">
                    Handles mission software, including UTM tools, vision/M&amp;L
                    pipelines, and ground-station interfaces that keep flights
                    safe and autonomous.
                  </p>
                </article>
              </div>
            </section>
          </div>
        </section>
      )}
    </main>
  )
}

export default RecruitmentPage
