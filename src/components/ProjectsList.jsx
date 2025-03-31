import ProjectCard from "./ProjectCard"

import newsapi from "/src/assets/newsapi.png";
import Question from "/src/assets/Question.png";
import Calculator from "/src/assets/Calculator.png";
import TVGuide from "/src/assets/TVGuide.png";
import NCNews from "/src/assets/NCNews.png";
import firebase from "/src/assets/firebase.png";
import readshare from "/src/assets/readshare.png";

const projectListArray = [
    {
        name:"NC News Back End",
        author: "CarmenChapi",
        avatar : newsapi,
        link: "https://newscarmen.onrender.com/api",
        github : "https://github.com/CarmenChapi/NewsCarmen",
        techStack : ["JavaScript", "Express", "Postgres", "TDD", "Node.js"],
        description : "I implemented a RESTful API to supply  a news website's content. Developed secure endpoints for CRUD operations on news articles, topics, comments, and user preferences. Optimized data delivery with efficient query parameters for improved performance and scalability",
    },
    {
        name: "Questionaire",
        author: "CarmenChapi and Ibrahim Ahmed",
        avatar : Question,
        link: "https://questionairecarmenchapi.netlify.app",
        github : "https://github.com/CarmenChapi/Questions.git",
        techStack : ["HTML", "CSS"],
        description : "This is a questionnaire about animals that utilises DOM manipulation methods and is designed with a 2k aesthetic",
    },
    {
        name: "Calculator",
        author: "CarmenChapi and Indigo Moorcroft",
        avatar : Calculator,
        link: "https://calculator-carmenchapi.netlify.app/",
        github : "https://github.com/indymoorcroft/fe-tiny-react-apps/tree/main/calculator-project",
        techStack : ["React", "CSS", "JS", "Vite"],
        description : "React app calculator, I helped with the planning, development, and construction of this mini-app, providing CSS styling",
    },
    {
        name: "TV Guide",
        author: "CarmenChapi and Martin Sutch",
        avatar : TVGuide,
        link: "https://tv-guide-carmen-chapi.netlify.app",
        github : "https://github.com/CarmenChapi/fe-react-data-visualisation",
        techStack : ["React", "CSS", "JS", "Vite"],
        description : "TV Guide is a React-based web application that allows users to search for TV shows and explore detailed information using real-time data from a public API",
    },
    {
        name: "NC News Front End",
        author: "CarmenChapi",
        avatar : NCNews,
        link: "https://ncnewscarmenchapi.netlify.app/",
        github : "https://github.com/CarmenChapi/nc-news",
        techStack : ["React", "CSS", "JS","Axios", "Vite"],
        description : "React app about a news Website C.R.U.D from the Front End perspective using previously created News API endpoints. Implemented user login/logout functionality. Category filtering to browse news by topics of interest. sorting options (date, likes, comments.) for customized content organization. Comment functionality with real-time display and management (add/delete). Like/dislike reactions for both news articles and user comments",
    },
    {
        name: "ReadShare App Back End",
        author: "the group Array of Sunshine",
        avatar : firebase,
        link: "No link",
        github : "https://github.com/Array-of-Sunshine-Library-App/library-api",
        techStack : ["Firebase", "JavaScript", "TDD"],
        description : "Final Project Back End. I contributed by configuring and deploying the Firebase project infrastructure, including database services. Also, developing some API endpoints",

    },
    {
        name: "ReadShare App Front End",
        author: "the group Array of Sunshine",
        avatar : readshare,
        link: "https://readshare.netlify.app/",
        techStack : ["TypeScript", "React-Native", "Axios", "Expo"],
        github : "https://github.com/Array-of-Sunshine-Library-App/library-app",
        description : "Final Project. ReadShare is a ReactNative application designed to help users track the books they lend to friends and manage their book collections. I participated in developing core user authentication, including sign-in, registration, etc. I implemented a User Context to manage the global state. I identified and resolved critical bugs in the request processing using optimistic UI rendering. I also configured and executed the production deployment of the web application.",
   
    }
]



const ProjectsList = () => {
    return <div  className="containerSide">

        <h3>My project-based learning experience</h3>

            <ul key="ListProjects" >
            {projectListArray.map((project, index) => {
                return <li key={index}>
                 <ProjectCard project={project}/>
                </li>
            })}
            </ul>
        
    </div>
}

export default ProjectsList
