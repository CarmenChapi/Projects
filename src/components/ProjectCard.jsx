import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  // console.log(project)
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
            tab={project.name}
            src={project.avatar}
          />
        </a>
        <div className="lateralFoto">
        <p className="author"> Made by {project.author}</p>
        <p className="author"> Using {project.techStack.join()}</p>
        </div>
      </div>
      <p className="description">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
