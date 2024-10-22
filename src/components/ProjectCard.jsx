import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  return (
    <div className="containerProject">
      <div className="topCard">
        <a href={project.github}>
          <AiFillGithub />
        </a>
        <p>
          <b>{project.name}</b>
        </p>
      </div>

      <div className="bodyCard">
        <a href={project.link}>
          <img
            className="previewLink"
            tab={project.name + " preview"}
            src={project.avatar}
          />
        </a>
        <div className="lateralFoto">
        <p className="description"> Made by {project.author}</p>
        <p className="description"> Using {project.techStack.join()}</p>
        <p className="description">{project.description}</p>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;
