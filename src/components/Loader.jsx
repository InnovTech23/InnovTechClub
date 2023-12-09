import { Triangle } from "react-loader-spinner"

const Loader = () => {

  return (
    <Triangle
      height="80"
      width="80"
      color="#27F2F2"
      ariaLabel="triangle-loading"
      wrapperStyle={{marginTop: '20%', marginLeft: '45%'}}
    />
  )
}

export default Loader