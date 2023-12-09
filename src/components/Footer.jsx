import { Link as ScrollLink } from 'react-scroll'
import '/public/css/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="row justify-content-center mb-0 pt-4 pb-0 row-2 px-3">
        <div className="col-12">
          <div className="row row-2 align-items-center">
            <div className="col-sm-6 text-md-start" data-aos="fade-right">
              <h5><span> <img src="/img/logo-transparent.png" className="img-fluid" width="55px" alt="" /></span><b>
                  InnovTechClub</b></h5>
            </div>
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
      <div className="row justify-content-center mt-0 pt-0 row-1 mb-0  px-sm-3 px-2">
        <div className="col-12">
          <div className="row my-4 row-1 no-gutters">
            <div className="col-sm-12 col-auto text-center"><small>&#9400; InnovTechClub 2023 - Developed by <a href="http://ismailzahir.me" target="blanck">Ismail ZAHIR</a></small></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer