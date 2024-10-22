import { Link } from "react-router-dom";

const NavBar = () => {
    return <>
    <div className="NavBar">
 
    <Link className="NavLinks" to="/">
    <p>About me</p>
    </Link>
    <Link className="NavLinks"  to="/projects">
    <p>Northcoders Projects</p>
    </Link>
    {/* <Link className="NavLinks"  to="/cv">
    <p>CV</p>
    </Link> */}
    </div>
    </>

}

export default NavBar