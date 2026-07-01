import ProjectCard from "./ProjectCard"
import { PiPaletteBold, PiStackBold } from "react-icons/pi";

const projectList = [
    {
        name:"Exhibition Curation Platform Back End",
        phase: "Backend service",
        author: "CarmenChapi",
        avatarIcon : PiStackBold,
        link: "https://se-curator-be.onrender.com/api",
        linkLabel: "API endpoint",
        github : "https://github.com/CarmenChapi/SE-ExhibitionCurationP-BE.git",
        techStack : ["JavaScript", "Express", "Postgres", "TDD", "Node.js"],
        description : "REST API for the exhibition curation platform, supporting artwork, collection and exhibition data across the product.",
    },
    {
        name:"Curatoria",
        phase: "Client-facing frontend",
        author: "CarmenChapi",
        avatarIcon : PiPaletteBold,
        link: "https://curationplatform.netlify.app/",
        linkLabel: "Live demo",
        youtube : "https://www.youtube.com/playlist?list=PLi5Ujb8-Rko4y__PtK1r-tIhZ7EjS7gfD",
        github : "https://github.com/CarmenChapi/SE-Exhibition-Curation-Platform-FE.git",
        featured: true,
        techStack : ["React(Vite)", "React Router", "Firebase Auth"],
        description : "Frontend for an exhibition curation platform delivered as one product across separate frontend and backend repositories. Since client delivery, I have continued refining the interface and technical polish.",
        highlights: [
            "Delivered the product across frontend and backend repositories",
            "Integrated museum APIs behind a focused artwork curation flow",
            "Added Firebase authentication, protected user collections and routed app views",
        ],
    }
]

const featuredProjects = projectList.filter((project) => project.featured);
const supportingProjects = projectList.filter((project) => !project.featured);

const WorksList = () => {
    return <div className="containerSide">
        <section className="projectsIntro">
            <p className="sectionKicker">Commercial work</p>
            <h2>Freelance exhibition platform</h2>
            <p>
                A paid freelance build delivered from February to March 2025. The frontend and backend are shown separately because they live in different repositories, but they form one full-stack product.
            </p>
        </section>

        <section className="projectSection">
            <div className="sectionHeader">
                <p className="sectionKicker">Client-facing product</p>
                <h3>Frontend application</h3>
            </div>
            <ul className="featuredProjects" key="FeaturedWorks">
            {featuredProjects.map((project) => {
                return <li key={project.name}>
                 <ProjectCard
                    project={project}
                    variant="featured"
                    accentIndex={projectList.indexOf(project)}
                 />
                </li>
            })}
            </ul>
        </section>

        <section className="projectSection">
            <div className="sectionHeader">
                <p className="sectionKicker">API foundation</p>
                <h3>Backend service</h3>
            </div>
           <ul className="projectTimeline" key="ListProjects">
            {supportingProjects.map((project) => {
                return <li key={project.name}>
                 <ProjectCard
                    project={project}
                    variant="compact"
                    accentIndex={projectList.indexOf(project)}
                 />
                </li>
            })}
            </ul>
        </section>
    </div>
}

export default WorksList
