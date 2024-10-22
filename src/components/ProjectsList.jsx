import ProjectCard from "./ProjectCard"
//import LinkPreview from 

const projectListArray = [
    {
        name:"NC News Back End",
        author: "CarmenChapi",
        avatar : "src/assets/newsApi.png",
        link: "https://newscarmen.onrender.com/api",
        github : "https://github.com/CarmenChapi/NewsCarmen",
        techStack : ["JavaScript", "Express", "Postgres", "TDD"],
        description : "A RESTful API to access and use data in a back end service for a news website",
    },
    {
        name: "Questionaire",
        author: "Pair programming: CarmenChapi and Ibrahim Ahmed",
        avatar : "src/assets/Question.png",
        link: "https://questionairecarmenchapi.netlify.app",
        github : "https://github.com/CarmenChapi/Questions.git",
        techStack : ["HTML", "CSS"],
        description : "Little questionaire using DOM manipulation methods",
    },
    {
        name: "Calculator",
        author: "Pair programming: CarmenChapi and Indigo Moorcroft",
        avatar : "src/assets/Calculator.png",
        link: "https://calculator-carmenchapi.netlify.app/",
        github : "https://github.com/CarmenChapi/Calculator.git",
        techStack : ["React", "CSS"],
        description : "Planning, creating and building a calculator React app",
    },
    {
        name: "TV Guide",
        author: "Pair programming: CarmenChapi and Martin Sutch",
        avatar : "src/assets/TVGuide.png",
        link: "https://tv-guide-carmen-chapi.netlify.app",
        github : "https://github.com/CarmenChapi/fe-react-data-visualisation",
        techStack : ["React", "CSS"],
        description : "Be able to visualise data in React using third-party library in this case TV Guide",
    },
    {
        name: "NC News Front End",
        author: "CarmenChapi",
        avatar : "src/assets/NCNews.png",
        link: "https://ncnewscarmenchapi.netlify.app/",
        github : "https://github.com/CarmenChapi/nc-news",
        techStack : ["React", "CSS"],
        description : "News Website C.R.U.D from the Front End perpective",
    },
    {
        name: "ReadShare App Back End",
        author: "Array of Sunshine",
        avatar : "src/assets/TVGuide.png",
        link: "https://hosting-api-yiyu.onrender.com/api/endpoints",
        github : "https://github.com/Array-of-Sunshine-Library-App/library-api",
        description : "Final Project. ",
    },
    {
        name: "ReadShare App Front End",
        author: "Array of Sunshine",
        avatar : "src/assets/TVGuide.png",
        link: "",
        github : "https://github.com/Array-of-Sunshine-Library-App/library-app",
        description : "",
    }
]



const ProjectsList = () => {
    return<div>

            <ul key="ListProjects"  className="containerSide">
            <p>Projects List</p>
            {projectListArray.map((project, index) => {
               { console.log(project.name)}
                return <li key="index">
                 <ProjectCard project={project}/>
                </li>
            })}
            </ul>
        
    </div>
}

export default ProjectsList