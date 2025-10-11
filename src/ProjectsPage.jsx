import './ProjectsPage.css'

const ProjectsPage = () => {
  return (
    <section className="projects-page" aria-labelledby="projects-page-title">
      <div className="projects-page__overlay" aria-hidden="true" />
      <div className="projects-page__content">
        <h1 className="projects-page__title" id="projects-page-title">
          Projects
        </h1>
        <p className="projects-page__subtitle">Full case studies coming soon.</p>
      </div>
    </section>
  )
}

export default ProjectsPage
