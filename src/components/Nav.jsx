import { Link } from "react-router-dom"
import { Link as ScrollLink } from 'react-scroll';
import '/public/css/nav.css'

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
      <div className="wrapper">

      </div>
      <div className="container-fluid all-show">
        <Link to={'/'} className="navbar-brand" data-aos="fade-right">
          <img className="img-fluid" width="40px"
            src="/img/logo-transparent-without-text.png" alt="InnovTechClub Logo"
          />
          &nbsp; InnovTechClub
        </Link>
        {props.home && (
          <>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                <li className="nav-item" data-aos="fade-down">
                  <ScrollLink to="about" smooth={true} duration={500} className="nav-link">About us</ScrollLink>
                </li>
                <li className="nav-item" data-aos="fade-down">
                  <ScrollLink to="cells" smooth={true} duration={500} className="nav-link">Cells</ScrollLink>
                </li>
                <li className="nav-item" data-aos="fade-down">
                  <ScrollLink to="events" smooth={true} duration={500} className="nav-link">Events</ScrollLink>
                </li>
                <li className="nav-item" data-aos="fade-down">
                  <ScrollLink to="projects" smooth={true} duration={500} className="nav-link">Projects</ScrollLink>
                </li>
                <li className="nav-item" data-aos="fade-down">
                  <ScrollLink to="contact" smooth={true} duration={500} className="nav-link">Contact</ScrollLink>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav