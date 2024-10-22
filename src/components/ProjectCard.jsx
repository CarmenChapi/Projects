import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  // console.log(project)
  return (
    <div className="containerProject">
      <div className="topProject">
        <a href={project.github}>
          <AiFillGithub />
        </a>
        <p className="titleProject">
          <b>{project.name}</b>
        </p>
      </div>

      <div className="topProject">
        <a href={project.link}>
          <img
            className="previewLink"
            tab={project.name}
            src={project.avatar}
          />
        </a>

        <p className="author" >Made by {project.author}</p>
      </div>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
