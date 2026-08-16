export default function MemberCard({ heading, name, role, img, linkedinUrl }) {
    return (
      <div className="member-col">
        {heading && <div className="member-heading">{heading}</div>}
  
        <div className="member-card">
          {img ? (
            <img className="member-portrait" src={img} alt={name} loading="lazy" />
          ) : (
            <div
              className="member-portrait member-portrait--placeholder"
              role="img"
              aria-label={`Profile photo unavailable for ${name}`}
            >
              <span className="member-portrait__silhouette" aria-hidden="true" />
            </div>
          )}
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
  
