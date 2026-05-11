import carmen from '/src/assets/carmen.jpg';

const AboutMe = () => {
    return<div className="containerSide">
        <h2>Hello, world!</h2>
        <p>My name is <b className="name">Maria del Carmen Chaparro </b> (She/her)</p>
        <p>But people call me Carmen /kaar·muhn/</p>
        <img className="profileImage" alt="carmen profile photo" src={carmen}/>
<p>I am a Full-Stack Developer with a unique professional arc. After starting my career in Spain as a Java and SQL Developer, I spent almost ten years in London mastering the art of communication and teamwork in hospitality. I pivoted back to my technical roots, completing an intensive bootcamp to add JavaScript, Node.js, and React to my repertoire. I build applications that are as robust as they are user-centric, combining years of professional discipline with a fresh, modern tech stack.
</p>
    </div>
}

export default AboutMe