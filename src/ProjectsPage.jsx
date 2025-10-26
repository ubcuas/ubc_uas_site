import React, { useRef } from 'react';
import './ProjectsPage.css';
import heropic from './assets/pages/projects/hero-background.png';
import img2 from './assets/pages/projects/image.png';

// --- Mock Data ---
const heroImage = heropic;
const cardImage1 = img2;
const cardImage2 = img2;
const cardImage3 = img2;
const cardImage4 = img2;

const aircraftProjects = [
  { id: 1, title: 'ALBATROSS', subtitle: 'VTOL / 3rd at AEAC', year: '2023/24', img: cardImage1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.' },
  { id: 2, title: 'HUMMINGBIRD', subtitle: 'QUAD', year: '2023/24', img: cardImage2, description: 'The Hummingbird Project was the team\'s response to the need for a more precise and quickly configurable aircraft many years ago. The Wasp series of Unmanned Systems allows us to quickly change the payload and layout of the aircraft and fly different style missions within minutes of one another.' },
  { id: 3, title: 'HYDRONE', subtitle: 'QUAD / 2nd at AEAC', year: '2024/25', img: cardImage3, description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.' }
];

const payloadProjects = [
  { id: 4, title: 'ALBATROSS', subtitle: 'VTOL / 3rd at AEAC', year: '2023/24', img: cardImage1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.' },
  { id: 5, title: 'HUMMINGBIRD', subtitle: 'QUAD', year: '2023/24', img: cardImage2, description: 'The Hummingbird Project was the team\'s response to the need for a more precise and quickly configurable aircraft many years ago. The Wasp series of Unmanned Systems allows us to quickly change the payload and layout of the aircraft and fly different style missions within minutes of one another.' },
  { id: 6, title: 'HYDRONE', subtitle: 'QUAD / 2nd at AEAC', year: '2024/25', img: cardImage3, description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.' }
];

const softwareProjects = [
  { id: 7, title: 'ODLC', subtitle: 'Machine Learning', year: '2023/24', img: cardImage4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.' },
  { id: 8, title: 'HUMMINGBIRD', subtitle: 'QUAD', year: '2023/24', img: cardImage2, description: 'The Hummingbird Project was the team\'s response to the need for a more precise and quickly configurable aircraft many years ago. The Wasp series of Unmanned Systems allows us to quickly change the payload and layout of the aircraft and fly different style missions within minutes of one another.' },
  { id: 9, title: 'HYDRONE', subtitle: 'QUAD / 2nd at AEAC', year: '2024/25', img: cardImage3, description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.' }
];

const legacyProjects = [
  { id: 10, title: 'ODLC', subtitle: 'Machine Learning', year: '2023/24', img: cardImage4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.' },
  { id: 11, title: 'HUMMINGBIRD', subtitle: 'QUAD', year: '2023/24', img: cardImage2, description: 'The Hummingbird Project was the team\'s response to the need for a more precise and quickly configurable aircraft many years ago. The Wasp series of Unmanned Systems allows us to quickly change the payload and layout of the aircraft and fly different style missions within minutes of one another.' },
  { id: 12, title: 'HYDRONE', subtitle: 'QUAD / 2nd at AEAC', year: '2024/25', img: cardImage3, description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.' }
];

/**
 * A reusable card for a single project
 */
const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="card-image-container">
      <img src={project.img} alt={project.title} className="card-image" />
      <span className="year-badge">{project.year}</span>
    </div>
    <div className="card-content">
      <h4 className="card-title">{project.title}</h4>
      <h5 className="card-subtitle">{project.subtitle}</h5>
      <p className="card-description">{project.description}</p>
      <a href="#" className="read-more">Read More...</a>
    </div>
  </div>
);

/**
 * A reusable row component with functional carousel
 */
const ProjectRow = ({ title, projects }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 370; // card width + gap
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="project-row">
      <button
        className="carousel-arrow left"
        aria-label="Scroll left"
        onClick={() => scroll('left')}
      >
        &lt;
      </button>
      <div className="row-content">
        {title && <h3 className="category-title">{title}</h3>}
        <div className="cards-wrapper" ref={scrollRef}>
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
      <button
        className="carousel-arrow right"
        aria-label="Scroll right"
        onClick={() => scroll('right')}
      >
        &gt;
      </button>
    </div>
  );
};

/**
 * The main Projects page component
 */
const Projects = () => {
  return (
    <main className="projects-page">
      {/* --- Hero Section --- */}
      <section
        className="projects-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>PROJECTS</h1>
          <p>
            Our projects are split into three distinct categories: aircraft, payload and software.  Aircraft is the blah lbah lbalh. Payload is the attachments we design to fulfill the tasks set out by our competitions. Software deals with balh lbahlba.
          </p>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <div className="projects-content-wrapper">
        <section className="project-section">
          <h2 className="section-timeline">2019 - 2025</h2>
          <ProjectRow title="AIRCRAFT" projects={aircraftProjects} />
          <ProjectRow title="PAYLOAD" projects={payloadProjects} />
          <ProjectRow title="SOFTWARE" projects={softwareProjects} />
        </section>

        <section className="project-section">
          <h2 className="section-timeline">2013 - 2019 LEGACY PROJECTS</h2>
          <ProjectRow projects={legacyProjects} />
        </section>
      </div>
    </main>
  );
};

export default Projects;
