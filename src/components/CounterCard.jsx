
const CounterCard = (props) => {
  return (
    <div className="four col-md-3" data-aos="fade-up">
      <div className={'counter-box ' + (props.colored ? 'colored' : '')}>
        <i className={props.icon}></i>
        <span className="counter">{props.children}</span>
        <p>{props.title}</p>
      </div>
    </div>
  )
}

export default CounterCard