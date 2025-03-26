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
        description : "Project to provide a REST API to the project Exhibition Curation Project. With the API, the user can interact with a digital collection of artworks. It enables CRUD (Create, Read, Update, Delete) operations for collections and artworks.",
    },
    {
        name:"Exhibition Curation Platform",
        author: "CarmenChapi",
        avatar : platform,
        link: "https://curationplatform.netlify.app/",
        github : "https://github.com/CarmenChapi/SE-Exhibition-Curation-Platform-FE.git",
        techStack : ["React", "CSS", "JS", "Vite", "Firebase", "Tailwind"],
        description : "React.js application that allows users to explore artworks from various museums and universities. Users can view their exhibitions and the saved items within each collection. It includes Firebase Authentication, integrates with multiple artwork APIs, and provides an excellent experience for searching, creating curation collections and saving artworks",
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