import { useState } from "react"
import Footer from "../components/Footer"
import Loader from "../components/Loader"
import Nav from "../components/Nav"
import { useEffect } from "react"

const Voting = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    loading ? <Loader /> :
    <>
      <Nav />
      <div className="container-fluid pb-0 mb-0 justify-content-center text-light">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdSJwRT2-o_ToVp-pbx3D3nFPA4ynJ8Up34PCu81DB-r8QGBQ/viewform?embedded=true" 
          width="100%" 
          height="900"
          frameborder="0" 
          marginheight="0" 
          marginwidth="0"
        >
            Loading…
        </iframe>

        <Footer />
      </div>
    </>
  )
}

export default Voting