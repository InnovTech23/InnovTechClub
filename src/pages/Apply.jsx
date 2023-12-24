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
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSecB_pyKXo5lGjsjD8KNrdzKLkoCBrILxtu-ExFzXjG4lndZw/viewform?embedded=true" 
        width="100%" height="1600" frameborder="0" marginheight="0" marginwidth="0">
          Loading…
        </iframe>

        <Footer />
      </div>
    </>
  )
}

export default Voting