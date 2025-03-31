import ProjectCard from "./ProjectCard"
import curator from "/src/assets/curator.png";
import platform from "/src/assets/platform.png";

const projectList = [
    {
        name:"Exhibition Curation Platform Back End",
        author: "CarmenChapi",
        avatar : curator,
        link: "https://se-curator-be.onrender.com/api",
        github : "https://github.com/CarmenChapi/SE-ExhibitionCurationP-BE.git",
        techStack : ["JavaScript", "Express", "Postgres", "TDD", "Node.js"],
        description : "The Exhibition Curation Project will receive a REST API from this project. The user can engage with a digital collection of artworks using the API. For collections and artworks, it makes CRUD (Create, Read, Update, Delete) operations possible",
    },
    {
        name:"Exhibition Curation Platform",
        author: "CarmenChapi",
        avatar : platform,
        link: "https://curationplatform.netlify.app/",
        github : "https://github.com/CarmenChapi/SE-Exhibition-Curation-Platform-FE.git",
        techStack : ["React", "CSS", "JS", "Vite", "Firebase", "Tailwind"],
        description : "A React.js application that enables users to see artwork from various museums and institutions.  Users may view both their exhibitions and the stored things in their collections.  It features Firebase authentication, interacts with several art APIs, and provides an excellent experience for finding, creating collections, and saving artwork",
    }
]



const WorksList = () => {
    return<div>
           <ul key="ListProjects" >
            {projectList.map((project, index) => {
                return <li key={index}>
                 <ProjectCard project={project}/>
                </li>
            })}
            </ul>
    </div>
}

export default WorksList