import carmen from '/src/assets/carmen.jpg';

const AboutMe = () => {
    return<div className="containerSide">
        <h2>Hello, world!</h2>
        <p>My name is <b className="name">Maria del Carmen Chaparro </b> (She/her)</p>
        <p>But people call me Carmen /kaar·muhn/</p>
        <img className="profileImage" alt="carmen profile photo" src={carmen}/>
<p>I recently completed a bootcamp with Northcoders, and I built this website to showcase what I've learned along the way. While programming wasn't new to me, the experience deepened my knowledge and challenged me to grow.

This portfolio highlights my learning journey from backend development using JavaScript, Express, Postgres, TDD, and Node.js, to building responsive frontends with React, CSS, Axios, and Vite. I also had the chance to work with Firebase and strengthen my skills through collaborative projects.

Most importantly, this journey showed me how much I enjoy learning and how much more I'm excited to explore in tech.
</p>
    </div>
}

export default AboutMe