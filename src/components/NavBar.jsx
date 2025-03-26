import { Link } from "react-router-dom";

const NavBar = () => {
    return <>
    <div className="NavBar">
    <Link className="NavLinks" to="/">
    <h2 className="navTitle">About me</h2>
    </Link>
    <Link className="NavLinks"  to="/projects">
    <h2 className="navTitle">Northcoders Projects</h2>
    </Link>
     <Link className="NavLinks"  to="/works">
    <h2>Projects</h2>
    </Link> 
    </div>
    </>

}

export default NavBar