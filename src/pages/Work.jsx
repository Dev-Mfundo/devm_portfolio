import Header from '../components/Header'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'
import Button from '../components/Button'
const Work=()=>{
	return(
    <>
      <Header />
      <SocialMedia />
      <main>
      <section className="container">
      	<h2>WORK</h2>
      <div>
      <div className="work-nav">
        <nav>
        <h4>SIGNEE</h4>
        <Button value="VIEW"/>
        </nav>
        <span className="line-row"></span>
      </div>
    </div>
      </section>
      </main>
      <Footer/>
    </>
	)
}

export default Work