import ProjectCard from "./ProjectCard"

import newsapi from "/src/assets/newsapi.png";
import Question from "/src/assets/Question.png";
import Calculator from "/src/assets/Calculator.png";
import TVGuide from "/src/assets/TVGuide.png";
import NCNews from "/src/assets/NCNews.png";
import firebase from "/src/assets/firebase.png";
import react from "/src/assets/react.svg";

const projectListArray = [
    {
        name:"NC News Back End",
        author: "CarmenChapi",
        avatar : newsapi,
        link: "https://newscarmen.onrender.com/api",
        github : "https://github.com/CarmenChapi/NewsCarmen",
        techStack : ["JavaScript", "Express", "Postgres", "TDD"],
        description : "A RESTful API to access and use data in a back end service for a news website",
    },
    {
        name: "Questionaire",
        author: "CarmenChapi and Ibrahim Ahmed",
        avatar : Question,
        link: "https://questionairecarmenchapi.netlify.app",
        github : "https://github.com/CarmenChapi/Questions.git",
        techStack : ["HTML", "CSS"],
        description : "Little questionaire using DOM manipulation methods",
    },
    {
        name: "Calculator",
        author: "CarmenChapi and Indigo Moorcroft",
        avatar : Calculator,
        link: "https://calculator-carmenchapi.netlify.app/",
        github : "https://github.com/CarmenChapi/Calculator.git",
        techStack : ["React", "CSS", "JS"],
        description : "Calculator React app, planning, creating and building from 0",
    },
    {
        name: "TV Guide",
        author: "CarmenChapi and Martin Sutch",
        avatar : TVGuide,
        link: "https://tv-guide-carmen-chapi.netlify.app",
        github : "https://github.com/CarmenChapi/fe-react-data-visualisation",
        techStack : ["React", "CSS", "JS"],
        description : "App to visualise data in React using third-party library, TV Guide in this case",
    },
    {
        name: "NC News Front End",
        author: "CarmenChapi",
        avatar : NCNews,
        link: "https://ncnewscarmenchapi.netlify.app/",
        github : "https://github.com/CarmenChapi/nc-news",
        techStack : ["React", "CSS", "JS","Axios"],
        description : "News Website C.R.U.D from the Front End perpective using the News API created in the Back End block",
    },
    {
        name: "ReadShare App Back End",
        author: "the group Array of Sunshine",
        avatar : firebase,
        link: "https://github.com/Array-of-Sunshine-Library-App/library-api",
        github : "https://github.com/Array-of-Sunshine-Library-App/library-api",
        techStack : ["Firebase", "JavaScript", "TDD"],
        description : "Final Project. We planned and designed it as a group. In the back end I developed some API endpoints and set up the project in Firebase.",
    },
    {
        name: "ReadShare App Front End",
        author: "the group Array of Sunshine",
        avatar : react,
        link: "",
        techStack : ["TypeScript", "React-Native", "Axios"],
        github : "https://github.com/Array-of-Sunshine-Library-App/library-app",
        description : "Final Project. In the Front End I participate developing the user sign in, register new user, etc. User Context. And bugging the accepting, deleting requests using optimistic renderitation",
    }
]



const ProjectsList = () => {
    return<div>

            <ul key="ListProjects"  className="containerSide">

            {projectListArray.map((project, index) => {
                return <li key={index}>
                 <ProjectCard project={project}/>
                </li>
            })}
            </ul>
        
    </div>
}

export default ProjectsList