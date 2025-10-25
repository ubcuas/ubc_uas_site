import "./TeamPage.css";
import ImageCarousel from "./ImageCarousel";
import TeamSection from "./TeamSection";
import { teamData } from "./TeamData"; 

export default function TeamPage() {
  // Separate images specifically for the header carousel
  const carouselImages = [
    { src: "src/assets/carousel/carousel1.jpg", alt: "Team banquet – table selfie" },
    { src: "src/assets/carousel/carousel2.jpg", alt: "Flight test day" },
    { src: "src/assets/carousel/carousel3.jpg", alt: "Avionics workshop" },
    { src: "src/assets/carousel/carousel4.jpg", alt: "4th Image" },
  ];

  return (
    <section className="team-page" aria-label="UBC UAS Team">
      <div className="team-page__title-banner" aria-hidden="true" />

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
