import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  return (
    <div className="projectCard">
      <h3 >
        <a className="titleLink"
        href={project.github}
        rel="noopener noreferrer"
  
        target="_blank"
        title="See the project in GitHub"> 
          <AiFillGithub />{project.name}
        </a></h3>
    

    {"No link" != project.link ?
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
        :    <img
            className="previewLink2"
            alt={project.name + "firebase logo"}
            src={project.avatar}
    
          />}


        <div className="infoProject">
        <p ><strong className="descripColor">Made by </strong>{project.author}</p>
        <p ><strong className="descripColor">Tech </strong>{project.techStack.join()}</p>
        <p ><strong className="descripColor">Description </strong>{project.description}</p>
      
        </div>
        </div>
  );
};

export default ProjectCard;
