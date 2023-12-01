import { Link } from "react-router-dom"

const CellCard = (props) => {
  return (
    <div className="card" style={{width: '30rem', padding: '1px'}} data-aos="fade-up">
      <img height='160px' width='100%' src={props.img} className="card-img-top" alt={props.name} />
        <div className="card-body">
        <h5 className="card-title fw-bold">{ props.name }</h5>
        <p className="card-text">{ props.children }</p>
        </div>
      <Link to={ props.url } className="btn see-more-btn btn-sm float-end bottom-0 mb-1">See more</Link>
    </div>
  )
}

export default CellCard