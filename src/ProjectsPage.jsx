import React, { useEffect, useRef } from 'react';
import './styles/info-page.css';
import { createPortal } from 'react-dom';
import './ProjectsPage.css';
import heroBackground from './assets/pages/projects/hero-background.png';
import Hydrone from './assets/carousel/Hydrone.png';
import Ataksak from './assets/carousel/ataksak.webp';
import Beetle from './assets/carousel/beetle.webp';
import DesertHawk from './assets/carousel/DesertHawk.webp';
import Condor from './assets/carousel/condor.webp';
import DragonFly from './assets/carousel/dragonfly.webp';
import HummingBird from './assets/carousel/hummingbird.webp';
import Albatross from './assets/carousel/Albatross.webp';
import GCATS from './assets/carousel/GCATS.jpg';
import GCOM from './assets/carousel/GCOM.webp';
import Raven from './assets/carousel/Raven.webp';
import Sparrow from './assets/carousel/Sparrow.webp';
import FlameWheel from './assets/carousel/FlameWheel.webp';
import Thunderbird from './assets/carousel/Thunderbird.webp';
import CAMVIS from './assets/carousel/Camvis.png';

const aircraftProjects = [
  {
    id: 1,
    title: 'HYDRONE',
    subtitle: 'QUAD / 2nd at AEAC',
    year: '2024/25',
    img: Hydrone,
    description: 'Hydrone was the team’s flagship aircraft for the 2025 season. With modularity in mind, Hydrone was designed to be versatile – allowing for quick and easy payload changes as well as easy disassembly. Hydrone had a great peformance last season during competition, leading to a 2nd place finish in AEAC 2025 and the highest scoring Canadian team for SUAS 2025!'
  },
  {
    id: 2,
    title: 'HUMMINGBIRD',
    subtitle: 'QUAD',
    year: '2023/24',
    img: HummingBird,
    description: 'The Hummingbird Project was the team\'s response to the need for a more precise and quickly configurable aircraft many years ago. The Wasp series of Unmanned Systems allows us to quickly change the payload and layout of the aircraft and fly different style missions within minutes of one another. As the years have progressed, Hummingbird has retained its strong performance and so it continues to be used as a test drone for software and camera systems.'
  },
  {
    id: 3,
    title: 'ALBATROSS',
    subtitle: 'VTOL / 3rd at AEAC',
    year: '2023/24',
    img: Albatross,
    description: 'Albatross was the team’s premier aircraft for the 2023-2024 season. Built based on Dragonfly, Albatross is a VTOL aircraft that is designed to be super modular, allowing for quick and easy payload changes as well as easy disassembly. The team is currently working on Albatross to improve its flight performance and capabilities. Albatross competed in the 2024 AEAC and SUAS competitions. It was able to place 3rd overall at AEAC!'
  },
  {
    id: 4,
    title: 'Dragonfly',
    subtitle: 'VTOL',
    year: '2022/23',
    img: DragonFly,
    description: 'The team’s second VTOL project to date, Dragonfly was built to be a modular drone that allowed for easy upgrades and payload swapping. The team used the knowledge gained from this aircraft to build Albatross after its development concluded in the summer of 2023.'
  },
  {
    id: 5,
    title: 'Beetle',
    subtitle: 'VTOL',
    year: '2024/25',
    img: Beetle,
    description: 'Beetle was UAS’s first attempt at a vertical take-off and landing (VTOL) drone. It was designed with a large main compartment to drop a small rover from with a winch. We learned a lot from this project and it was a great stepping stone to our next VTOL project, Dragonfly.'
  },
  {
    id: 6,
    title: 'Ataksak',
    subtitle: 'QUAD / 2n',
    year: '2019/20',
    img: Ataksak,
    description: 'The Ataksak Project was the team’s response to the 2020 AUVSI challenge. Ataksak was built to have a flight range of up to 8 miles and a payload capacity of 3kg. The tall airframe allows payloads to safely sit within the aircraft; making it ideal to carry expensive payloads for missions such as delivering packages and mapping/ searching areas. Ataksak was also used for many years beyond its competition.'
  },
  {
    id: 7,
    title: 'Condor',
    subtitle: 'QUAD / 2n',
    year: '2018/19',
    img: Condor,
    description: 'As a direct response to the 2019 AUVSI SUAS challenge, Condor was built to complete a long distance payload drop with high accuracy. Speed, high payload capacity, and endurance allowed Condor to successfully complete the given mission with excellent precision. It was continued to be used for many years beyond the competition. Top speed – 120 km/h, MTOW – 12kg, Wing Span – 1500mm, Max elec Power – 7600W'
  }
];

const payloadProjects = [
  {
    id: 8,
    title: 'ALBATROSS',
    subtitle: 'VTOL / 3rd at AEAC',
    year: '2023/24',
    img: Albatross,
    description: 'Albatross was the team’s premier aircraft for the 2023-2024 season. Built based on Dragonfly, Albatross is a VTOL aircraft that is designed to be super modular, allowing for quick and easy payload changes as well as easy disassembly. The team is currently working on Albatross to improve its flight performance and capabilities. Albatross competed in the 2024 AEAC and SUAS competitions. It was able to place 3rd overall at AEAC!'
  },
  {
    id: 9,
    title: 'HUMMINGBIRD',
    subtitle: 'QUAD',
    year: '2023/24',
    img: HummingBird,
    description: 'The Hummingbird Project was the team\'s response to the need for a more precise and quickly configurable aircraft many years ago. The Wasp series of Unmanned Systems allows us to quickly change the payload and layout of the aircraft and fly different style missions within minutes of one another.'
  },
  {
    id: 10,
    title: 'HYDRONE',
    subtitle: 'QUAD / 2nd at AEAC',
    year: '2024/25',
    img: Hydrone,
    description: 'Hydrone was the team’s flagship aircraft for the 2025 season. With modularity in mind, Hydrone was designed to be versatile – allowing for quick and easy payload changes as well as easy disassembly. Hydrone had a great peformance last season during competition, leading to a 2nd place finish in AEAC 2025 and the highest scoring Canadian team for SUAS 2025!'
  }
];

const softwareProjects = [
  {
    id: 11,
    title: 'GCOM',
    subtitle: 'Ground Command',
    year: '2023/24',
    img: GCOM,
    description: 'Over the past years UBC UAS has been working on the next generation ground command software (GCOM). A single suit that acts as a data consolidation platform, it gathers information about the UAS from multiple sources (e.g. Mavlink) and provides the following functionality: - Antenna tracker control - Drone communication and control - Collision avoidance - Reliable Image download - Image object detection - Image geotagging - Analytics on processed images - Autonomously report generation. In addition to the above functionalities, GCOM was designed with reliability and modularity in mind. This allows UBC UAS to achieve higher reliability standards since each module can be independently tested against all possible inputs. Additionally, GCOM operates using a fully reliable communication protocol developed to transmit variable length data between any two devices (UAS Message) that utilize serial, TCP, or UDP communications.'
  },
  {
    id: 12,
    title: 'GCATS',
    subtitle: 'Data Transfer',
    year: '2023/24',
    img: GCATS,
    description: 'The GCATS (Ground Control Antenna Tracking Station) family of projects are custom-developed, long-range data transfer solutions capable of automatically relaying images and videos from drones flying at long ranges back to the ground control station. Their job is to autonomously track our aircraft in flight and point a directional antenna in that exact direction. This allows the team to use higher gain antennas as opposed to less optimal omnidirectional options. Additionally, the ability to modify the height of the antenna tracker counters the Fresnel effect’s impact on our operations.'
  },
  {
    id: 13,
    title: 'Hawkeye',
    subtitle: 'Image Detection',
    year: '2024-2025',
    img: CAMVIS,
    description: 'Development with Infrared Sensing and Camera Vision has become paramount to competitions for both SUAS and AEAC. Identifiying IR emitters, capturing photos and all other applications are done with our custom built Hawkeye system, integrating tech from computer networking to machine learning.'
  }
];

const legacyProjects = [
  {
    id: 14,
    title: 'Advanced Technology Demonstrator: Desert Hawk',
    subtitle: 'VTOL / 3rd at AEAC',
    year: '2017/18',
    img: DesertHawk,
    description: 'Demanding real-world applications like Law Enforcement or Search And Rescue require high performance, multi-mission drones. The Advanced Technology Demonstrator was designed to be both a testbed of new drone technologies and the mission aircraft for the 2018 AUVSI SUAS competition. The Desert Hawk incorporated unique technologies and capabilities such as vortex generators and obstacle avoidance; it was also one of the first projects to include Augmented Reality prototyping to visualize subsystem integration. The project inspired growth and innovation for proceeding UBC UAS projects.'
  },
  {
    id: 15,
    title: 'Raven',
    subtitle: 'VTOL / 3rd at AEAC',
    year: '2018/19',
    img: Raven,
    description: 'Project Raven was born out of a need for a stable, high-endurance multi-rotor platform. It was originally designed for an Australian Medical express competition to serve as an aerial relay station, halfway between the active aircraft and the ground station. Raven was retired in February of 2019 after serving as a versatile aircraft ideal for low altitude mapping of large areas as well as carrying and delivering heavy payloads. The modular payload attachments and option for multiple batteries further expanded its mission envelope.'
  },
  {
    id: 16,
    title: 'Thunderbird',
    subtitle: 'Fixed-Wing and Recon',
    year: '2017/18',
    img: Thunderbird,
    description: 'Project Thunderbird was UBC UAS’s fixed wing and aerial reconnaissance project. The Thunderbird series of Unmanned Aircraft Systems provided the team with a reliable in air system with a high payload capacity, long endurance missions, and large scale survey capabilities. The fixed-wings were based on the Cyclops C airframe which were generously sponsored by AsiaTech Drones. They were capable of carrying several kilograms worth of payload and gave us the ability to use high resolution DSLR cameras, stereo-vision imaging systems, and pack in more batteries to extend flight times.'
  },
  {
    id: 17,
    title: 'Sparrow',
    subtitle: 'VTOL / 3rd at AEAC',
    year: '2017/18',
    img: Sparrow,
    description: 'Project Sparrow was created in an effort to react to recent changes in the UAS industry as well as the Unmanned Systems Canada Student Competition of its time. Due to a new influx of quick launch drones, as well as the recent time limit constraints of the competition, the team created the Sparrow Unmanned Aircraft System. With this aircraft we were able to hand launch from a moment’s notice and be in the air within seconds. The aircraft was equipped with the same surveying equipment as the larger Thunderbird aircraft, however is extremely compact and lightweight in comparison. With this aircraft the team was able to take large area surveys at a high altitude and return to base quickly, efficiently, and smoothly.'
  },
  {
    id: 18,
    title: 'Flame Wheel',
    subtitle: 'VTOL / 3rd at AEAC',
    year: '2017/18',
    img: FlameWheel,
    description: 'As a donation from UBC Studios, the Flame Wheel serves as a filming platform for promotional material as well as a pilot training aircraft. It’s always ready to go and never fails to deliver.'
  }
];

/**
 * Modal component for displaying project details
 */
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Stop propagation on overlay click to handle close logic safely
  const handleOverlayClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  const handleContainerClick = (e) => {
    e.stopPropagation(); // Prevent clicks inside modal from closing it
  };

  return createPortal(
    <div className="project-modal-overlay" onPointerDown={(e) => e.stopPropagation()} onClick={handleOverlayClick}>
      <div className="project-modal-container" onClick={handleContainerClick}>
        <button className="project-modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <div className="project-modal-image-wrapper">
          <img src={project.img} alt={project.title} className="project-modal-image" />
        </div>
        <div className="project-modal-content">
          <span className="project-modal-year">{project.year}</span>
          <h2 className="project-modal-title">{project.title}</h2>
          <h3 className="project-modal-subtitle">{project.subtitle}</h3>
          <p className="project-modal-description">{project.description}</p>
        </div>
      </div>
    </div>,
    document.body
  );
};

/**
 * A reusable card for a single project
 */
const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const textLimit = 100;

  const openModal = (e) => {
    // Stop propagation to prevent carousel drag
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="project-card">
        <div className="card-image-container">
          <img src={project.img} alt={project.title} className="card-image" />
          <span className="year-badge">{project.year}</span>
        </div>
        <div className="card-content">
          <h4 className="card-title">{project.title}</h4>
          <h5 className="card-subtitle">{project.subtitle}</h5>
          <p className="card-description">
            {project.description.length > textLimit
              ? `${project.description.substring(0, textLimit)}...`
              : project.description}
          </p>
          <button
            className="read-more"
            onClick={openModal}
            onPointerDown={(e) => e.stopPropagation()}
            type="button"
          >
            Read More...
          </button>
        </div>
      </div>
      {isModalOpen && <ProjectModal project={project} onClose={closeModal} />}
    </>
  );
};
/**
 * A reusable row component with functional carousel
 */
const ProjectRow = ({ title, projects }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector('.project-card');
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const styles = window.getComputedStyle(container);
    const gapCandidates = [
      parseFloat(styles.columnGap),
      parseFloat(styles.gap),
      parseFloat(styles.getPropertyValue('column-gap')),
      parseFloat(styles.getPropertyValue('gap'))
    ];
    const gap = gapCandidates.find(value => Number.isFinite(value)) || 0;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return undefined;

    let pointerId = null;
    let startX = 0;
    let startScroll = 0;

    const onPointerDown = (event) => {
      if (!event.isPrimary) return;
      if (event.pointerType === 'touch') return;

      // Prevent drag initiation if clicking the Read More button
      if (event.target.closest('.read-more')) return;

      pointerId = event.pointerId;
      startX = event.clientX;
      startScroll = container.scrollLeft;
      container.classList.add('is-dragging');
      container.setPointerCapture?.(pointerId);
    };

    const onPointerMove = (event) => {
      if (pointerId !== event.pointerId) return;
      const deltaX = event.clientX - startX;
      container.scrollLeft = startScroll - deltaX;
    };

    const onPointerRelease = (event) => {
      if (pointerId !== event.pointerId) return;
      container.classList.remove('is-dragging');
      container.releasePointerCapture?.(pointerId);
      pointerId = null;
    };

    container.addEventListener('pointerdown', onPointerDown);
    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerup', onPointerRelease);
    container.addEventListener('pointercancel', onPointerRelease);
    container.addEventListener('pointerleave', onPointerRelease);

    return () => {
      container.removeEventListener('pointerdown', onPointerDown);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerup', onPointerRelease);
      container.removeEventListener('pointercancel', onPointerRelease);
      container.removeEventListener('pointerleave', onPointerRelease);
    };
  }, []);

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

const Projects = () => {
  return (
    <main className="projects-page">
      {/* --- Hero Section --- */}
      <section
        className="info-page info-page--projects"
        aria-labelledby="projects-title"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="info-page__content">
          <p className="info-page__eyebrow">Building Autonomous Systems</p>
          <h1 className="info-page__title" id="projects-title">
            Projects
          </h1>
          <p className="info-page__body">
            Our projects are split into three distinct categories: aircraft, payload, and software.
            Aircraft houses our propulsion and electronics. Payload is the attachments we design to
            fulfill the tasks set out by our competitions. Software is the intelligence that enables
            autonomous mission execution.
          </p>
        </div>
      </section>

      <div className="projects-content-wrapper">
        <section className="project-section">
          <h2 className="section-timeline">2018 - 2025</h2>
          <ProjectRow title="AIRCRAFT" projects={aircraftProjects} />
          {/* <ProjectRow title="PAYLOAD" projects={payloadProjects} /> */}
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
