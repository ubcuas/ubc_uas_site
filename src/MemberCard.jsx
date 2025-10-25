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
              >
                {/* inline SVG — inherits color via currentColor */}
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="currentColor"
                    d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.63 4.75 6.06V24h-4v-7.1c0-1.7-.03-3.9-2.37-3.9-2.38 0-2.75 1.85-2.75 3.78V24h-4V8z"
                  />
                </svg>
              </a>
            )}
          </div>
          {role && <p className="role">{role}</p>}
        </div>
      </div>
    );
  }
  