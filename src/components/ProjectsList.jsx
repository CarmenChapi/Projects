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
        author: "CarmenChapi and Ibrahim Ahmed",
        avatar : "src/assets/Question.png",
        link: "https://questionairecarmenchapi.netlify.app",
        github : "https://github.com/CarmenChapi/Questions.git",
        techStack : ["HTML", "CSS"],
        description : "Little questionaire using DOM manipulation methods",
    },
    {
        name: "Calculator",
        author: "CarmenChapi and Indigo Moorcroft",
        avatar : "src/assets/Calculator.png",
        link: "https://calculator-carmenchapi.netlify.app/",
        github : "https://github.com/CarmenChapi/Calculator.git",
        techStack : ["React", "CSS"],
        description : "Planning, creating and building a calculator React app",
    },
    {
        name: "TV Guide",
        author: "CarmenChapi and Martin Sutch",
        avatar : "src/assets/TVGuide.png",
        link: "https://tv-guide-carmen-chapi.netlify.app",
        github : "https://github.com/CarmenChapi/fe-react-data-visualisation",
        techStack : ["React", "CSS"],
        description : "Visualise data in React using third-party library, in this case TV Guide",
    },
    {
        name: "NC News Front End",
        author: "CarmenChapi",
        avatar : "src/assets/NCNews.png",
        link: "https://ncnewscarmenchapi.netlify.app/",
        github : "https://github.com/CarmenChapi/nc-news",
        techStack : ["React", "CSS", "Axios"],
        description : "News Website C.R.U.D from the Front End perpective using the API create in the BE-News",
    },
    {
        name: "ReadShare App Back End",
        author: "the group Array of Sunshine as Final Project",
        avatar : "src/assets/firebase.png",
        link: "https://github.com/Array-of-Sunshine-Library-App/library-api",
        github : "https://github.com/Array-of-Sunshine-Library-App/library-api",
        techStack : ["Firebase", "JavaScript", "TDD"],
        description : "Final Project. We planned and designed it as a group. In the back end, I developed some API endpoints and set up the project in Firebase.",
    },
    {
        name: "ReadShare App Front End",
        author: "the group Array of Sunshine as Final Project",
        avatar : "src/assets/react.svg",
        link: "",
        techStack : ["TypeScript", "React-Native", "Axios"],
        github : "https://github.com/Array-of-Sunshine-Library-App/library-app",
        description : "Final Project : Front End. I participate developing the user sign in, register new user, etc. User Context. And bugging the deleting request using optimistic renderitation",
    }
]



const ProjectsList = () => {
    return<div>

            <ul key="ListProjects"  className="containerSide">

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