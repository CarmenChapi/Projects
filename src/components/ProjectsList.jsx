import ProjectCard from "./ProjectCard"
import {
    PiBookOpenTextBold,
    PiCalculatorBold,
    PiDatabaseBold,
    PiFireBold,
    PiNewspaperClippingBold,
    PiQuestionBold,
    PiTelevisionSimpleBold,
} from "react-icons/pi";

const projectListArray = [
    {
        name:"NC News Back End",
        phase: "Northcoders week 7",
        author: "CarmenChapi",
        avatarIcon : PiDatabaseBold,
        link: "https://newscarmen.onrender.com/api",
        linkLabel: "API endpoint",
        github : "https://github.com/CarmenChapi/NewsCarmen",
        techStack : ["JavaScript", "Express", "Postgres", "TDD", "Node.js"],
        description : "RESTful API for a news platform, with endpoints for articles, topics, comments and users.",
        highlights: [
            "Built tested Express endpoints with PostgreSQL",
            "Added filtering, sorting and pagination",
            "Covered success and error paths with TDD",
        ],
    },
    {
        name: "Questionnaire",
        phase: "Early bootcamp project",
        author: "CarmenChapi and Ibrahim Ahmed",
        avatarIcon : PiQuestionBold,
        link: "https://questionairecarmenchapi.netlify.app",
        github : "https://github.com/CarmenChapi/Questions.git",
        techStack : ["HTML", "CSS"],
        description : "Early bootcamp project focused on DOM manipulation, semantic HTML and CSS.",
    },
    {
        name: "Calculator",
        phase: "React foundations",
        author: "CarmenChapi and Indigo Moorcroft",
        avatarIcon : PiCalculatorBold,
        link: "https://calculator-carmenchapi.netlify.app/",
        github : "https://github.com/indymoorcroft/fe-tiny-react-apps/tree/main/calculator-project",
        techStack : ["React", "CSS", "JS", "Vite"],
        description : "React calculator mini-app where I contributed planning, components and CSS.",
    },
    {
        name: "TV Guide",
        phase: "API data visualisation",
        author: "CarmenChapi and Martin Sutch",
        avatarIcon : PiTelevisionSimpleBold,
        link: "https://tv-guide-carmen-chapi.netlify.app",
        github : "https://github.com/CarmenChapi/fe-react-data-visualisation",
        techStack : ["React", "CSS", "JS", "Vite"],
        description : "React app for searching TV shows and exploring programme details from a public API.",
    },
    {
        name: "NC News Front End",
        phase: "Full-stack solo project",
        author: "CarmenChapi",
        avatarIcon : PiNewspaperClippingBold,
        link: "https://ncnewscarmenchapi.netlify.app/",
        linkLabel: "Live demo",
        youtube : "https://www.youtube.com/watch?v=a5SHwSH1TdQ&list=PLi5Ujb8-Rko6dtajZvAg8dM7xWZ-iRz3a",
        github : "https://github.com/CarmenChapi/nc-news",
        featured: true,
        techStack : ["React", "CSS", "JS","Axios", "Vite"],
        description : "Frontend for my NC News API, covering article browsing, comments, voting and topic discovery.",
        highlights: [
            "Connected React to my own REST API with Axios",
            "Implemented topic filters, sorting, comments and optimistic votes",
            "Handled loading, error and interaction states across the app",
        ],
    },
    {
        name: "ReadShare App Back End",
        phase: "Final project backend",
        author: "the group Array of Sunshine",
        avatarIcon : PiFireBold,
        github : "https://github.com/Array-of-Sunshine-Library-App/library-api",
        techStack : ["Firebase", "JavaScript", "TDD"],
        description : "Backend services for the ReadShare final project, including Firebase setup, database services and API endpoints.",
    },
    {
        name: "ReadShare App Front End",
        phase: "Northcoders final project",
        author: "the group Array of Sunshine",
        avatarIcon : PiBookOpenTextBold,
        link: "https://readshare.netlify.app/",
        linkLabel: "Live demo",
        youtube : "https://www.youtube.com/watch?v=r55UKBpPN_I",
        techStack : ["TypeScript", "React Native", "Axios", "Expo"],
        github : "https://github.com/Array-of-Sunshine-Library-App/library-app",
        featured: true,
        description : "Collaborative React Native app for tracking lent books and managing a personal library.",
        highlights: [
            "Built authentication flows and shared user state",
            "Debugged requests and optimistic UI behaviour",
            "Configured the production web deployment",
        ],
        note: "Bootcamp final project delivered collaboratively by Array of Sunshine.",
    }
]

const featuredProjects = projectListArray.filter((project) => project.featured);

const ProjectsList = () => {
    return <div className="containerSide">
        <section className="projectsIntro">
            <p className="sectionKicker">Northcoders portfolio</p>
            <h2>Project-based learning journey</h2>
            <p>
                A timeline of bootcamp work, from early DOM practice to full-stack applications and a collaborative final product.
            </p>
        </section>

        <section className="projectSection">
            <div className="sectionHeader">
                <p className="sectionKicker">Best evidence</p>
                <h3>Featured projects</h3>
            </div>
            <ul className="featuredProjects">
                {featuredProjects.map((project) => {
                    return <li key={project.name}>
                        <ProjectCard
                            project={project}
                            variant="featured"
                            accentIndex={projectListArray.indexOf(project)}
                        />
                    </li>
                })}
            </ul>
        </section>

        <section className="projectSection">
            <div className="sectionHeader">
                <p className="sectionKicker">The path</p>
                <h3>Northcoders learning timeline</h3>
            </div>
            <ul className="projectTimeline" key="ListProjects">
            {projectListArray.map((project, index) => {
                return <li key={index}>
                 <ProjectCard project={project} variant="compact" accentIndex={index}/>
                </li>
            })}
            </ul>
        </section>
    </div>
}

export default ProjectsList
