
const EventTimeline = (props) => {
  return (
    <div className="timeline" data-aos="fade-down">
      <span className={'icon '+ props.icon}></span>
      <a href="#" className="timeline-content">
        <h3 className="title d-flex justify-content-between">{props.title} <small className="fs-6 text-black">{ props.date }</small></h3>
        <p className="description">
          { props.children }
        </p>
      </a>
    </div>
  )
}

export default EventTimeline