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
        <section>
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Terms</h2>
              <p>Terms and conditions of membership</p>
            </div>

            <div className="row content">
              <p>
                By becoming a member of the InnovTechClub, you agree to abide by the following terms and conditions:
              </p>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <span className="font-weight-bold">Active Engagement</span>: Members must actively participate in club activities and initiatives, contributing to the achievement of objectives and the promotion of technological innovation.
                  </li>
                  <li>
                    <span className="font-weight-bold">Respect for Members</span>: Each member is committed to respecting and maintaining an inclusive, respectful and collaborative environment within the club, promoting diversity and avoiding any discriminatory or harmful behaviour.
                  </li>
                  <li>
                    <span className="font-weight-bold">Respect for the Club</span>: Members are committed to respecting the club's values and objectives, and to promoting the club's image and reputation.
                  </li>
                  <li>
                    <span className="font-weight-bold">Knowledge Sharing</span>: Members are encouraged to share their knowledge, skills and experiences to enrich club projects and promote mutual learning.
                  </li>
                  
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <ul>
                <li>
                    <span className="font-weight-bold">Active Participation</span>: Members are encouraged to contribute to club projects, events or activities according to their interests and availability.
                  </li>
                  <li>
                    <span className="font-weight-bold">Annual Membership</span>: Membership in the club is valid for one academic year/calendar year and may require renewal to maintain active membership status.
                  </li>
                  <li>
                    <span className="font-weight-bold">Compliance with Rules and Regulations</span>: Members must comply with the rules and regulations established by the InnovTechClub and the affiliated institution.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default Voting