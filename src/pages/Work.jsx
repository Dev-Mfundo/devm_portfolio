import Header from '../components/Header'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'
import '../App.css'

const Work = () => {
  return (
    <div className="page work">
      <Header />
      <SocialMedia />

      <div className="container">
        <section className="work-section">
          <h2>WORK</h2>

          <ul className="list-work">
            <li className="work-item">
              <div className="work-row">
                <h4>SIGNEE</h4>
                <button className="view-btn">VIEW</button>
              </div>
              <span className="line-row"></span>
              <p className="below-description">
                A digital signing tool that streamlines document approvals with a clean, secure workflow built for modern teams.
              </p>
            </li>

            <li className="work-item">
              <div className="work-row">
                <h4>PORTFOLIO</h4>
                <button className="view-btn">VIEW</button>
              </div>
              <span className="line-row"></span>
              <p className="below-description">
                My personal portfolio — a reflection of my craft, showcasing projects, tech stacks..
              </p>
            </li>

            <li className="work-item">
              <div className="work-row">
                <h4>FOREX SCANNER</h4>
                <button className="view-btn">VIEW</button>
              </div>
              <span className="line-row"></span>
              <p className="below-description">
                A technical market scanner that analyzes forex charts in real time to detect patterns, signals, and trading opportunities.
              </p>
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Work
