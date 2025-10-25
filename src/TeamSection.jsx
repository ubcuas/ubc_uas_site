import MemberCard from "./MemberCard";

export default function TeamSection({
  title,
  subtitle,
  theme,
  members = [],
  groupImg,
  caption,
}) {
  return (
    <section className={`team-section ${theme ? `team-section--${theme}` : ""}`}>
      {title && <h2 className="team-section__title">{title}</h2>}
      {subtitle && <p className="team-section__subtitle">{subtitle}</p>}

      <div className="team-members">
        {members.map((m, i) => (
          <MemberCard key={i} {...m} />
        ))}
      </div>

      {groupImg && (
        <figure className="group-photo group-photo--framed">
          <img src={groupImg} alt={`${title ?? "Team"} group`} />
          {caption && <figcaption className="group-photo__caption">{caption}</figcaption>}
        </figure>
      )}
    </section>
  );
}
