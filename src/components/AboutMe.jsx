import { Link } from "react-router-dom";
import carmen from '/src/assets/carmen-profile.webp';

const AboutMe = () => {
    return<div className="containerSide">
        <div className="aboutLayout">
            <section className="aboutCopy">
                <h2>Hello, world!</h2>
                <p>My name is <b className="name">Maria del Carmen Chaparro Gomez</b> </p>
                <p className="aboutPronouns">She/her /kaar·muhn/</p>
                <p>I am a Full-Stack Developer with a professional path that started in Spain with Java and SQL, then expanded through nearly ten years in London hospitality, where I sharpened communication, teamwork and delivery under pressure.</p>
                <p>I returned to software through an intensive full-stack bootcamp, adding JavaScript, Node.js and React to my background. I build practical, user-centred applications with a mix of technical foundations, product curiosity and real-world discipline.</p>
                <ul className="aboutTechStack" aria-label="Core technologies">
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>Java</li>
                    <li>SQL</li>
                </ul>
            </section>

            <aside className="aboutVisual" aria-label="Profile and project link">
                <div className="profileFrame">
                    <img className="profileImage" alt="carmen profile photo" src={carmen}/>
                </div>
                <div className="aboutActions">
                    <Link className="projectAction aboutProjectButton" to="/projects">
                        View Bootcamp Projects
                    </Link>
                </div>
            </aside>
        </div>
    </div>
}

export default AboutMe
