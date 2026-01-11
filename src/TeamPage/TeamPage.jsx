// TeamPage.jsx
import { useEffect } from "react";
import "./TeamPage.css";
import ImageCarousel from "./ImageCarousel";
import TeamSection from "./TeamSection";
import { teamData } from "./TeamData";

// CHANGED: import carousel images (so build rewrites URLs)
import carousel1 from "../assets/carousel/teamCarousel/carousel1.jpg";
import carousel2 from "../assets/carousel/teamCarousel/carousel2.jpg";
import carousel3 from "../assets/carousel/teamCarousel/carousel3.png";
import carousel4 from "../assets/carousel/teamCarousel/carousel4.jpg";
import carousel5 from "../assets/carousel/teamCarousel/carousel5.jpg";
import carousel6 from "../assets/carousel/teamCarousel/carousel6.jpg";
import carousel7 from "../assets/carousel/teamCarousel/carousel7.jpg";

export default function TeamPage() {
  // Separate images specifically for the header carousel
  const carouselImages = [
    { src: carousel1 },
    { src: carousel2 },
    { src: carousel3 },
    { src: carousel4 },
    { src: carousel5 },
    { src: carousel6 },
    { src: carousel7 },
  ];

  // scroll-linked animation (parallax)
  useEffect(() => {
    let latestY = window.scrollY || window.pageYOffset;
    let ticking = false;

    const updateScrollVar = () => {
      document.documentElement.style.setProperty("--team-scroll", `${latestY}px`);
      ticking = false;
    };

    const handleScroll = () => {
      latestY = window.scrollY || window.pageYOffset;

      if (!ticking) {
        window.requestAnimationFrame(updateScrollVar);
        ticking = true;
      }
    };

    // initial value
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="team-page" aria-label="UBC UAS Team">
      <div className="team-page__title-banner" aria-hidden="true" />
      <div className="team-heading-wrap">
        <h1 className="team-heading">Meet Our Team</h1>
      </div>

      <ImageCarousel slides={carouselImages} />

      <div className="team-page__art" aria-hidden="true">
        <div className="team-page__layer team-page__layer--back" />
        <div className="team-page__layer team-page__layer--accent" />
        <div className="team-page__layer team-page__layer--forward" />
      </div>

      <div className="team-content">
        {teamData.map((t, i) => (
          <TeamSection key={i} {...t} />
        ))}
      </div>
    </section>
  );
}
