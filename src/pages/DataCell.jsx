import Footer from "../components/Footer"
import Nav from "../components/Nav"
import CellHeader from "../components/CellHeader"

const DataCell = () => {
  return (
    <>
      <Nav />
      <CellHeader title="Data Cell">
        The Data Cell specializes in harnessing the power of data. It's dedicated to understanding, analyzing, and deriving
        insights from diverse data sets. Members in this cell explore data science, machine learning, and analytics, applying
        these skills to interpret trends, make informed decisions, and create impactful solutions. From visualization to
        predictive modeling, this cell delves into the realm of data-driven innovation.
      </CellHeader>
      <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
        <section>

        </section>
        <Footer />
      </div>
    </>
  )
}

export default DataCell