import Header from '../components/Header'
import SocialMedia from '../components/SocialMedia'
import cartoon from '../assets/images/cartoon.png'
const Home=()=>{
	return(
	<>
	<Header/>
	<SocialMedia/>
	<main>
		<h1>DEV MFUNDO</h1>
		<section>
			<img src={cartoon} className="home-cartoon" alt="background-image"/>
		</section>
		<h2>FULL STACK DEV</h2>
	</main>
	</>
	)
}

export default Home