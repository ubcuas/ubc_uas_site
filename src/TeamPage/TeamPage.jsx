import "./TeamPage.css";
import ImageCarousel from "./ImageCarousel";
import TeamSection from "./TeamSection";
import { teamData } from "./TeamData";


export default function TeamPage() {
  // Separate images specifically for the header carousel
  const carouselImages = [
    {
      src: "src/assets/carousel/teamCarousel/carousel1.jpg",
    },
    { src: "src/assets/carousel/teamCarousel/carousel2.jpg", }, 
    { src: "src/assets/carousel/teamCarousel/carousel3.png", },
    { src: "src/assets/carousel/teamCarousel/carousel4.jpg", },
    { src: "src/assets/carousel/teamCarousel/carousel5.jpg", },
    { src: "src/assets/carousel/teamCarousel/carousel6.jpg", },
    { src: "src/assets/carousel/teamCarousel/carousel7.jpg", },

  ];

  return (
    <section className="team-page" aria-label="UBC UAS Team">
      <div className="team-page__title-banner" aria-hidden="true" />
      {/* Team page heading (no background image) */}
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
