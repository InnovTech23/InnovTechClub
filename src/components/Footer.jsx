import { Link as ScrollLink } from 'react-scroll'
import '/public/css/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="row justify-content-center mb-0 pt-5 pb-0 row-2 px-3">
        <div className="col-12">
          <div className="row row-2">
            <div className="col-sm-3 text-md-center" data-aos="fade-right">
              <h5><span> <img src="/img/logo-transparent.png" className="img-fluid" width="55px" alt="" /></span><b>
                  InnovTechClub</b></h5>
            </div>
            <div className="col-sm-3  my-sm-0 mt-5">
              <ul className="list-unstyled" data-aos="fade-up">
                <li><ScrollLink to="\" smooth={true} duration={500} className="footer-link mt-0">Home</ScrollLink></li>
                <li><ScrollLink to="about" smooth={true} duration={500} className="footer-link">About us</ScrollLink></li>
              </ul>
            </div>
            <div className="col-sm-3  my-sm-0 mt-5" data-aos="fade-up">
              <ul className="list-unstyled">
                <li><ScrollLink to="cells" smooth={true} duration={500} className="footer-link mt-0">Cells</ScrollLink></li>
                <li><ScrollLink to="events" smooth={true} duration={500} className="footer-link">Events</ScrollLink></li>
              </ul>
            </div>
            <div className="col-sm-3  my-sm-0 mt-5" data-aos="fade-up">
              <ul className="list-unstyled">
                <li><ScrollLink to="projects" smooth={true} duration={500} className="footer-link mt-0">Projects</ScrollLink></li>
                <li><ScrollLink to="contact" smooth={true} duration={500} className="footer-link">Contact</ScrollLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-0 pt-0 row-1 mb-0  px-sm-3 px-2">
        <div className="col-12">
          <div className="row my-4 row-1 no-gutters">
            <div className="col-sm-6 col-auto"><small>&#9400; InnovTechClub 2023 - Developed by <a href="http://ismailzahir.me">Ismail ZAHIR</a></small></div>
            <div className="col-sm-6 col-auto d-flex justify-content-end">
              <small>
                <a href="mailto:innovtechclub.fstm@gmail.com">innovtechclub.fstm@gmail.com</a>&nbsp;
                <span><a target="_blank" href="https://linkedin.com/company/innovtechclubfstm"><img src="/img/linkedin.gif" className="img-fluid " width="25" /></a></span>
                <span><a target="_blank" href="https://instagram.com/innovtechclubfstm"><img src="/img/instagram.gif" className="img-fluid " width="25" /></a></span>
                <span><a target="_blank" href="https://facebook.com/innovtechclubfstm"><img src="/img/facebook.gif" className="img-fluid " width="25" /></a></span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer