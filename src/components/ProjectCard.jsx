import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  return (
    <div className="projectCard">
      <h3 className="project-title">
        <a href={project.github}
        rel="noopener noreferrer"
        target="_blank"
        title="See the project in GitHub"> 
          <AiFillGithub />{   }{project.name}
        </a></h3>
    

   
        <a href={project.link} 
        target="_blank"
        rel="noopener noreferrer" 
        title="See the project website"> 
          <img
            className="previewLink"
            alt={project.name + " website preview"}
            src={project.avatar}
    
          />
        </a>
        <div className="infoProject">
        <p ><strong>Made by </strong>{project.author}</p>
        <p ><strong>Tech </strong>{project.techStack.join()}</p>
        <p ><strong>Description </strong>{project.description}</p>
      
        </div>
        </div>
  );
};

export default ProjectCard;
