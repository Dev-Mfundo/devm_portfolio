import GitHub from '../assets/icons/github-icon.svg'
import LinkedIn from '../assets/icons/linkedin-icon.svg'

const SocialMedia=()=>{
	return(
	<section className="social-media">
	<a href="www.linkedin.com/in/aaron-jiane-350546225" target="_blank">
		<img src={LinkedIn} alt='linkedin-link'/>
	</a>
    <a href="https://github.com/Dev-Mfundo" target="_blank">
		<img src={GitHub} alt='github-link'/>
	</a>
	</section>
	)
}

export default SocialMedia