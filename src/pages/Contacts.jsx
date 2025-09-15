import Header from '../components/Header'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'
import Button from '../components/Button'
import {useState} from 'react'


const Contacts=()=>{
    const [mail,setMail]=useState({
        name: "",
        email:"",
        message: ""
    })
    const [message, setMessage] = useState(null) 

	return(
	<>
      <Header />
      <SocialMedia />
      <main>
      <section className="container">
      	<h2>CONTACT</h2>
        <form>
            <nav>
                <label htmlFor="name">NAME</label>
                <input type="text" placeholder="NAME" name="name" required/>
            </nav>
            <nav>
                <label htmlFor="email">EMAIL</label>
                <input type="email" placeholder="YOUR EMAIL HERE" name="email" required/>
            </nav>
            <nav>
                <label htmlFor="message">MESSAGE</label>
                <textarea type="text" id="message" placeholder="BE POETIC ;-)" name="message"></textarea>
            </nav>
            <Button value="SEND"/>
        </form>
      </section>
      </main>
      <Footer/>
    </>
	)
}

export default Contacts