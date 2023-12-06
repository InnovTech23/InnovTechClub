import { Link as ScrollLink } from "react-scroll"
import EventTimeline from "../components/EventTimeline"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Nav from "../components/Nav"
import { Link } from "react-router-dom"

const Architecture = () => {
  return (
    <>
      <Nav />
      <Header>
        <h1>FSTM InnovTechClub</h1>
        <h2>Join us in shaping the future of technology and innovation.</h2>
        <div className="d-flex justify-content-center justify-content-lg-start">
          <ScrollLink to="architecture" smooth={true} duration={500} className="btn-get-started scrollto">Get Started</ScrollLink>
        </div>
      </Header>
      <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
        <section id="architecture">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Club architecture</h2>
              <p>Explore our architecture.</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="main-timeline2">
                <EventTimeline title="Presidency" icon="fa fa-globe" date="">
                  <ul>
                    <li><span className="">Leadership</span>: Lead the club and oversee all club activities.</li>
                    <li>Strategy: Develop and implement the club's vision, mission, and strategy.</li>
                    <li>Coordination: Coordinate with the club's executive committee and members.</li>
                  </ul>
                </EventTimeline>
                  <EventTimeline title="General Secretary" icon="fa fa-globe" date="">
                    <ul>
                      <li><span className="">Communication</span>: Act as a liaison between club members and leadership.</li>
                      <li>Record-Keeping: Maintain records of meetings, agendas, and important club documents.</li>
                      <li>Coordination: Assist in organizing club events, meetings, and collaborations.</li>
                    </ul>
                  </EventTimeline>
                  <EventTimeline title="Event Manager" icon="fa fa-solid fa-calendar" date="">
                    <ul>
                      <li>Planning: Conceptualize, plan, and execute club events, workshops, and seminars.</li>
                      <li>Logistics: Coordinate logistics including venue booking, catering, and necessary equipment.</li>
                      <li>Team Management: Lead a team to ensure smooth execution of events.</li>
                    </ul>
                  </EventTimeline>
                  <EventTimeline title="Sponsoring Manager" icon="fa fa-solid fa-handshake" date="">
                    <ul>
                      <li>Fundraising: Seek and secure sponsorships, partnerships, and funding for club initiatives.</li>
                      <li>Relationship Building: Cultivate and maintain relationships with sponsors and partners.</li>
                      <li>Proposal Development: Create sponsorship packages and proposals.</li>
                    </ul>
                  </EventTimeline>
                  <EventTimeline title="Maintain Manager" icon="fa fa-solid fa-laptop" date="">
                    <ul>
                      <li>Infrastructure Management: Oversee the maintenance of club resources, equipment, and spaces.</li>
                      <li>Inventory: Manage inventory and supplies for club activities.</li>
                      <li>Facility Coordination: Ensure the proper functioning of club facilities and spaces.</li>
                    </ul>
                  </EventTimeline>
                  <EventTimeline title="Design Manager" icon="fa fa-solid fa-pen-fancy" date="">
                    <ul>
                      <li>Visual Branding: Develop and maintain the club's visual identity, including logos and branding materials.</li>
                      <li>Graphics Production: Create visuals for events, social media, and promotional materials.</li>
                      <li>Design Quality Control: Ensure consistency and quality in all design outputs.</li>
                    </ul>
                  </EventTimeline>
                  <EventTimeline title="Multimedia Manager" icon="fa fa-solid fa-hashtag" date="">
                    <ul>
                      <li>Content Creation: Produce multimedia content such as videos, podcasts, and graphics.</li>
                      <li>Social Media Management: Manage the club's social media platforms and content strategy.</li>
                      <li>Engagement: Increase audience engagement through multimedia content.</li>
                    </ul>
                  </EventTimeline>
                  <EventTimeline title="Head of Data Cell" icon="fa fa-solid fa-database" date="">
                    <ul>
                      <li>Data Projects: Lead the development of data-centric projects focusing on AI, data analysis, and machine learning within the club.</li>
                      <li>Team Management: Manage a team of developers and data analysts, ensuring effective collaboration and coordinating project timelines.</li>
                      <li>Quality Assurance (Data): Ensure the quality, accuracy, and ethical handling of data used in projects, adhering to best practices and compliance standards.</li>
                    </ul>
                  </EventTimeline>
                  <EventTimeline title="Head of Software Cell" icon="fa fa-solid fa-code" date="">
                    <ul>
                      <li>Software Development: Lead the creation and implementation of software applications, systems, or platforms within the club, focusing on programming languages and software architecture.</li>
                      <li>Team Management: Manage a team of software developers, overseeing tasks, milestones, and project deadlines.</li>
                      <li>Quality Assurance (Software): Ensure the functionality, efficiency, and reliability of software developed by the cell, conducting testing and quality control measures.</li>
                    </ul>
                  </EventTimeline>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Club's General Assembly</h2>
              <p>Join us for our upcoming General Assembly, a pivotal gathering for discussions on future club endeavors and initiatives.</p>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-up" data-aos-delay="200">
                <div className="d-flex justify-content-center align-items-center">
                  <Link to={'https://innovtechclub-votingsystem.web.app'} className="btn btn-success btn-get-started scrollto">Apply</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Architecture