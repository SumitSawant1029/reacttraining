
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <nav className ="commonNavbar">
          <div className = "ParentDiv">

            <div className = "LogoDiv">
              <a style={{fontFamily: "'Motorola ScreenType', sans-serif"}}>Sumit.</a>
            </div>

            <div className="NavLinks">
                <Link to="/home" >Home</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/service">Service</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/about">About Me</Link>
            </div>

          </div>
        </nav>
    </>
  );
}

export default Navbar;
