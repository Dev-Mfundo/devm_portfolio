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