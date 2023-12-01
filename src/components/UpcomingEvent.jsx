import { Link } from 'react-router-dom'
import '/public/css/modal.css'

const UpcomingEvent = (props) => {
  
  return (
    <>
      <div id="upcoming-event" className="modal fade">
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <div className="icon-box">
                <img src="img/logo-transparent.png" width="80" alt="logo" />
              </div>
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><i className="bi bi-x-circle"></i></button>
            </div>
            <div className="modal-body text-center">
              <h4>{ props.title }</h4>
              <p>{ props.children }</p>
              <Link to={props.url} className="btn btn-success" data-dismiss="modal"><span>Start Exploring </span> <i className="bi bi-arrow-right-circle-fill"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpcomingEvent