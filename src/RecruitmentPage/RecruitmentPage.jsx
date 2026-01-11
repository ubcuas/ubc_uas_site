// RecruitmentPage.jsx
import "../styles/info-page.css";
import "./RecruitmentPage.css";
import heroBackground from "../assets/pages/Recruitment/team.png";

import TimelinePin from "../assets/icons/pin.png";
import TimelineFlag from "../assets/icons/flag.png";

import recruitmentData from "./recruitmentData.json";

const RecruitmentPage = () => {
  const { open, cycle, email, applyUrl, hero, panel, cycles } = recruitmentData;
  const currentCycle = cycles?.[cycle];

  const heroCtaHref = open ? "#recruitment-cycle" : `mailto:${email}`;
  const heroCtaText = open ? "Applications are open | Learn More" : "Contact Recruitment";

  return (
    <main>
      {/* HERO / ALWAYS-ON SECTION */}
      <section
        className="info-page info-page--recruitment"
        aria-labelledby="recruitment-title"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="info-page__content">
          <p className="info-page__eyebrow">{hero?.eyebrow}</p>

          <h1 className="info-page__title" id="recruitment-title">
            {hero?.title}
          </h1>

          <p className="info-page__body">{hero?.body}</p>

          <a
            className={`info-page__cta ${open ? "info-page__cta--scroll" : ""}`}
            href={heroCtaHref}
          >
            {heroCtaText}
          </a>
        </div>
      </section>

      {/* DETAILS SECTION – ONLY WHEN RECRUITMENT IS OPEN */}
      {open && (
        <section
          className="recruitment-details"
          aria-label="Current recruitment cycle information"
        >
          <div className="recruitment-panel">
            <header className="recruitment-panel__header">
              <h2 className="recruitment-panel__title-main">{panel?.title}</h2>
              <p className="recruitment-panel__body">{panel?.body}</p>

              <a
                className="recruitment-panel__cta"
                href={applyUrl}
                target="_blank"
                rel="noreferrer"
              >
                {panel?.ctaText ?? "Apply Now"}
              </a>
            </header>

            {/* Anchor target for the HERO button */}
            <div id="recruitment-cycle" className="recruitment-cycle" />

            {/* FALL */}
            {cycle === "fall" && currentCycle && (
              <section
                className="recruitment-section recruitment-timeline"
                aria-labelledby="recruitment-timeline-title"
              >
                <h3
                  id="recruitment-timeline-title"
                  className="recruitment-section__heading recruitment-section__heading--timeline"
                >
                  {currentCycle.label}
                </h3>

                <div className="recruitment-timeline__canvas">
                  <svg
                    className="recruitment-timeline__path"
                    viewBox="0 0 600 360"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                  >
                    <path
                      className="recruitment-timeline__path-line recruitment-timeline__path-line--animated"
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

                    <image
                      href={TimelinePin}
                      x={62}
                      y={20}
                      width="18"
                      height="18"
                      className="recruitment-timeline__icon"
                    />
                    <image
                      href={TimelinePin}
                      x={250}
                      y={50}
                      width="18"
                      height="18"
                      className="recruitment-timeline__icon"
                    />
                    <image
                      href={TimelinePin}
                      x={322}
                      y={85}
                      width="18"
                      height="18"
                      className="recruitment-timeline__icon"
                    />
                    <image
                      href={TimelinePin}
                      x={491}
                      y={150}
                      width="18"
                      height="18"
                      className="recruitment-timeline__icon"
                    />
                    <image
                      href={TimelinePin}
                      x={390}
                      y={200}
                      width="18"
                      height="18"
                      className="recruitment-timeline__icon"
                    />
                    <image
                      href={TimelinePin}
                      x={222}
                      y={282}
                      width="18"
                      height="18"
                      className="recruitment-timeline__icon"
                    />

                    <image
                      href={TimelineFlag}
                      x={55 - 10}
                      y={325 - 10}
                      width="20"
                      height="20"
                      className="recruitment-timeline__flag-icon"
                    />
                  </svg>

                  <ol className="recruitment-timeline__list">
                    <li className="recruitment-timeline__item recruitment-timeline__item--imagine">
                      <p className="recruitment-timeline__label">
                        {currentCycle.events?.imagineDay?.label}
                      </p>
                      <p className="recruitment-timeline__meta">
                        {currentCycle.events?.imagineDay?.meta}
                      </p>
                    </li>

                    <li className="recruitment-timeline__item recruitment-timeline__item--apps-open">
                      <p className="recruitment-timeline__label">
                        {currentCycle.events?.applicationsOpen?.label}
                      </p>
                      <p className="recruitment-timeline__meta">
                        {currentCycle.events?.applicationsOpen?.meta}
                      </p>
                    </li>

                    <li className="recruitment-timeline__item recruitment-timeline__item--in-person">
                      <p className="recruitment-timeline__label">
                        {currentCycle.events?.inPersonInfo?.label}
                      </p>
                      <p className="recruitment-timeline__meta">
                        {currentCycle.events?.inPersonInfo?.meta}
                      </p>
                    </li>

                    <li className="recruitment-timeline__item recruitment-timeline__item--online">
                      <p className="recruitment-timeline__label">
                        {currentCycle.events?.onlineInfo?.label}
                      </p>
                      <p className="recruitment-timeline__meta">
                        {currentCycle.events?.onlineInfo?.meta}
                      </p>
                    </li>

                    <li className="recruitment-timeline__item recruitment-timeline__item--close">
                      <p className="recruitment-timeline__label">
                        {currentCycle.events?.applicationsClose?.label}
                      </p>
                      <p className="recruitment-timeline__meta">
                        {currentCycle.events?.applicationsClose?.meta}
                      </p>
                    </li>

                    <li className="recruitment-timeline__item recruitment-timeline__item--results">
                      <p className="recruitment-timeline__label">
                        {currentCycle.events?.appsClose?.label}
                      </p>
                      <p className="recruitment-timeline__meta">
                        {currentCycle.events?.appsClose?.meta}
                      </p>
                    </li>

                    <li className="recruitment-timeline__item recruitment-timeline__item--meeting">
                      <p className="recruitment-timeline__label">
                        {currentCycle.events?.firstMeeting?.label}
                      </p>
                      <p className="recruitment-timeline__meta">
                        {currentCycle.events?.firstMeeting?.meta}
                      </p>
                    </li>
                  </ol>
                </div>
              </section>
            )}

            {/* WINTER */}
            {cycle === "winter" && currentCycle && (
              <section
                className="recruitment-section recruitment-winter"
                aria-labelledby="recruitment-winter-title"
              >
                <h3
                  id="recruitment-winter-title"
                  className="recruitment-section__heading recruitment-section__heading--timeline"
                >
                  {currentCycle.label}
                </h3>

                <div className="recruitment-winter__wrap">
                  <div className="recruitment-winter__card">
                    <svg
                      className="recruitment-winter__path"
                      viewBox="0 0 600 220"
                      preserveAspectRatio="xMidYMid meet"
                      aria-hidden="true"
                    >
                      <path
                        className="recruitment-winter__path-line"
                        d="
                          M 70 170
                          Q 210 60 300 105
                          T 530 70
                        "
                      />

                      <image
                        href={TimelinePin}
                        x={60}
                        y={158}
                        width="18"
                        height="18"
                        className="recruitment-winter__icon"
                      />
                      <image
                        href={TimelinePin}
                        x={288}
                        y={93}
                        width="18"
                        height="18"
                        className="recruitment-winter__icon"
                      />
                      <image
                        href={TimelineFlag}
                        x={520}
                        y={58}
                        width="20"
                        height="20"
                        className="recruitment-winter__flag"
                      />
                    </svg>

                    <ol className="recruitment-winter__list">
                      <li className="recruitment-winter__item recruitment-winter__item--open">
                        <p className="recruitment-winter__label">
                          {currentCycle.events?.applicationsOpen?.label}
                        </p>
                        <p className="recruitment-winter__meta">
                          {currentCycle.events?.applicationsOpen?.meta}
                        </p>
                      </li>

                      <li className="recruitment-winter__item recruitment-winter__item--results">
                        <p className="recruitment-winter__label">
                          {currentCycle.events?.appsClose?.label}
                        </p>
                        <p className="recruitment-winter__meta">
                          {currentCycle.events?.appsClose?.meta}
                        </p>
                      </li>

                      <li className="recruitment-winter__item recruitment-winter__item--meeting">
                        <p className="recruitment-winter__label">
                          {currentCycle.events?.firstMeeting?.label}
                        </p>
                        <p className="recruitment-winter__meta">
                          {currentCycle.events?.firstMeeting?.meta}
                        </p>
                      </li>
                    </ol>
                  </div>

                  {currentCycle.note && (
                    <p className="recruitment-winter__note">{currentCycle.note}</p>
                  )}
                </div>
              </section>
            )}

            {/* TEAM INFO */}
            <section
              className="recruitment-section recruitment-teams"
              aria-labelledby="recruitment-teams-title"
            >
              <h3 id="recruitment-teams-title" className="recruitment-section__heading">
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
  );
};

export default RecruitmentPage;
