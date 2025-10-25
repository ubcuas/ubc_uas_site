export default function MemberCard({ heading, name, role, img, linkedinUrl }) {
    return (
      <div className="member-col">
        {heading && <div className="member-heading">{heading}</div>}
  
        <div className="member-card">
          <img src={img} alt={name} />
          <div className="name-row">
  <p className="name">{name}</p>
  {linkedinUrl && (
    <a
      className="linkedin-btn"
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on LinkedIn`}
      title="LinkedIn"
    />
  )}
</div>
          {role && <p className="role">{role}</p>}
        </div>
      </div>
    );
  }
  