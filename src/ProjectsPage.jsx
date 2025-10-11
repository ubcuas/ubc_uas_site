import { useRef } from 'react';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 360; // width of box (340px) + gap (20px)
    const newPosition = direction === 'left'
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <section className="projects-page" aria-labelledby="projects-page-title">
        <div className="projects-page__overlay" aria-hidden="true" />
        <div className="projects-page__content">
          <h1 className="projects-page__title" id="projects-page-title">
            Projects
          </h1>
          <p className="projects-page__text">
            Our projects are split into three distinct categories: aircraft, payload and software. Aircraft is the blah lbah lbalh. Payload is the attachments we design to fulfill the tasks set out by our competitions. Software deals with balh lbahlba.
          </p>
        </div>
      </section>

      <div className="dateHolder">
        <h1 className="dateTitle">2019-2025</h1>
      </div>

      <div className="projects-scroll-section">
        <button
          className="scroll-arrow scroll-arrow-left"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          &#8249;
        </button>

        <div className="PrevProjs-container" ref={containerRef}>
          <div className="PrevProjs-wrapper">
            <div className="PrevProjSquare">Project 1</div>
            <div className="PrevProjSquare">Project 2</div>
            <div className="PrevProjSquare">Project 3</div>
            <div className="PrevProjSquare">Project 4</div>
            <div className="PrevProjSquare">Project 5</div>
            <div className="PrevProjSquare">Project 6</div>
            <div className="PrevProjSquare">Project 7</div>
            <div className="PrevProjSquare">Project 8</div>
            <div className="PrevProjSquare">Project 9</div>
          </div>
        </div>

        <button
          className="scroll-arrow scroll-arrow-right"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          &#8250;
        </button>
      </div>
    </>
  );
};

export default ProjectsPage;
