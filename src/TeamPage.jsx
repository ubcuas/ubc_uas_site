import './TeamPage.css'

const TeamPage = () => {
  return (
    <section className="team-page" aria-label="UBC UAS team montage">
      <div className="team-page__title-banner" aria-hidden="true" />
      <div className="team-page__art" aria-hidden="true">
        <div className="team-page__layer team-page__layer--back" />
        <div className="team-page__layer team-page__layer--accent" />
        <div className="team-page__layer team-page__layer--forward" />
      </div>
    </section>
  )
}

export default TeamPage
