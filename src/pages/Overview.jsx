import Header from '../components/Header'
import Footer from '../components/Footer'

const Overview=({project)=>{
	return(
	<>
      <Header/>
      <SocialMedia />
      <main>
      <section className="container">
      	<h2>{project.name}</h2>
      	<a hrer=`${project.link}`>VISIT SITE</a>
      </section>
      <article>
      </article>
      </main>
      <Footer/>
	</>
	)
}

export default Overview