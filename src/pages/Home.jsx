import Header from '../components/Header'
import SocialMedia from '../components/SocialMedia'
import cartoon from '../assets/images/cartoon.png'

const Home = () => {
  return (
    <>
      <Header />
      <SocialMedia />
      <main>
        <section className="hero">
          <h1>DEV MFUNDO</h1>
          <div className="hero-image">
            <img src={cartoon} className="home-cartoon" alt="Cartoon illustration of developer" />
          </div>
          <h2>FULL STACK DEV</h2>
        </section>
      </main>
    </>
  )
}

export default Home
