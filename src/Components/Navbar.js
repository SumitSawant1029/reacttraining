
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <>
        <nav className ="commonNavbar">
          <div className = "ParentDiv">

            <div className = "LogoDiv">
              <a style={{fontFamily: "'Motorola ScreenType', sans-serif"}}>Sumit.</a>
            </div>

            <div className="NavLinks">
              <span>

                <i className='bxr  bx-list'></i>        
              </span>
                
          <Link to="home" smooth={true} duration={500}>Home</Link>
          <Link to="achievements" smooth={true} duration={500}>Achievements</Link>
          <Link to="Experience" smooth={true} duration={500}>Experience</Link>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
          <Link to="about" smooth={true} duration={500}>About Me</Link>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
          

            </div>
            <div>
              <button id="DownloadCV">Download CV</button>
            </div>

          </div>
        </nav>
    </>
  );
}

export default Navbar;
