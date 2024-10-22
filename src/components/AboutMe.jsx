import carmen from '/src/assets/carmen.jpg';

const AboutMe = () => {
    return<div className="containerSide">
        <p>Hello, world!</p>
        <p>My name is <b className="name">Maria del Carmen Chaparro </b> (She/her)
        But people call me Carmen /kaar·muhn/</p>
        <img className="profileImage" alt="carmen picture" src={carmen}/>
<p>I just finished a bootcamp with Northcoders and I created this website to show what I have learned.
Programming was nothing new to me, but I have learned a lot of new things, and the most important is that I can continue learning and growing...
</p>
    </div>
}

export default AboutMe