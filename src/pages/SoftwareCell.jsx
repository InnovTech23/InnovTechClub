import Nav from "../components/Nav"
import CellHeader from "../components/CellHeader"
import Footer from "../components/Footer"
import Loader from "../components/Loader"
import { useEffect, useState } from "react"

const SoftwareCell = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    loading ? <Loader /> :
    <>
      <Nav />
      <CellHeader title="Software Cell">
        The Software Cell in our club is dedicated to crafting cutting-edge software solutions. It serves as a collaborative hub
        where members delve into emerging technologies, crafting applications that tackle real-world problems. This cell fosters
        creativity and technical prowess in software development, encompassing everything from coding intricacies to enhancing
        user experiences.
      </CellHeader>
      <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
        <section>

        </section>
        <Footer />
      </div>
    </>
  )
}

export default SoftwareCell