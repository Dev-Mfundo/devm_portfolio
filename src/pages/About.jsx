import Header from '../components/Header'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'

const About=()=>{
	return(
    <>
      <Header/>
      <SocialMedia />
      <main>
      <section className="container">
        <div className="about-section">
          <div className="about-description">
            <h2 className="my-name">AARON<br/>
              <span className="last-name">JIANE</span>
            </h2>
            <div className="about-card">
                <h5>Full-Stack Developer | Gauteng - South Africa</h5>
                <p>Turning complex ideas into clean, functional code, from sleek interfaces to resilient backends. Always curious, constantly evolving, and driven to build tech that matters.</p>
            </div>
            <div className="timeline-section">
                <div className="time-line-header">
                    <div className="company-name">UMUZI</div>
                </div>
        
                <div className="divider"></div>
                <div className="timeline">
                    <div className="date-range">SEPT 2024 - PRESENT</div>
                    <div className="position">Web Dev Recruit</div>
                </div>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="about-stack">
            <h2 className="stack-heading">STACK</h2>
          </div>
        </div>
      </section>
      </main>
      <Footer/>
    </>
	)
}

export default About