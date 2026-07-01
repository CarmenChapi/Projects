import { AiFillGithub, AiFillYoutube, AiOutlineGlobal } from "react-icons/ai";

const ProjectCard = ({ project, variant = "standard", accentIndex = 0 }) => {
  const isFeatured = variant === "featured";
  const hasLiveLink = Boolean(project.link);
  const hasYoutubeLink = Boolean(project.youtube);
  const AvatarIcon = project.avatarIcon;
  const accentClass = `projectCard--accent-${accentIndex % 4}`;

  const avatar = AvatarIcon ? (
    <div className="projectAvatarIcon" aria-hidden="true">
      <AvatarIcon />
    </div>
  ) : (
    <img
      className="previewLink"
      alt={`${project.name} preview`}
      src={project.avatar}
    />
  );

  return (
    <article className={`projectCard projectCard--${variant} ${accentClass}`}>
      <div className="projectCard__media">
        {hasLiveLink ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            title={`Open ${project.name}`}
            aria-label={`Open ${project.name}`}
          >
            {avatar}
          </a>
        ) : (
          avatar
        )}
      </div>

      <div className="projectCard__content">
        {project.phase && <p className="projectPhase">{project.phase}</p>}
        <h3 className="projectTitle">{project.name}</h3>

        <div className="projectActions" aria-label={`${project.name} links`}>
          {hasLiveLink && (
            <a
              className="projectAction"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGlobal aria-hidden="true" />
              {project.linkLabel || "Live demo"}
            </a>
          )}
          {hasYoutubeLink && (
            <a
              className="projectAction projectAction--youtube"
              href={project.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube aria-hidden="true" />
              Watch Demo
            </a>
          )}
          <a
            className="projectAction projectAction--secondary"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub aria-hidden="true" />
            GitHub
          </a>
        </div>

        <div className="infoProject">
          <p>
            <strong className="descripColor">Made by </strong>
            {project.author}
          </p>
          <p>
            <strong className="descripColor">Tech </strong>
            {project.techStack.join(", ")}
          </p>
          <p>
            <strong className="descripColor">Description </strong>
            {project.description}
          </p>
        </div>

        {isFeatured && project.highlights && (
          <ul className="projectHighlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}

        {project.note && <p className="projectNote">{project.note}</p>}
      </div>
    </article>
  );
};

export default ProjectCard;
