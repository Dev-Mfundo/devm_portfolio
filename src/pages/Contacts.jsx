import Header from '../components/Header'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'
import Button from '../components/Button'
import {sendEmail} from '../services/api_services'
import {useState} from 'react'


const Contacts=()=>{
    const [mail,setMail]=useState({
        name: "",
        email:"",
        message: ""
    })
    const [notification, setNotification] = useState(null)
    const [error, setError] = useState(null)

    const handleChange=(e)=>{
        const {name, value} = e.target
        setMail({...mail, [name]: value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(!mail.name || !mail.email || !mail.message){
            setError("All fields are required")
            setTimeout(()=>{
                setError("")
            },5000)
            return
        }

        try{
            const send = await sendEmail(mail)
            if(send.success === true){
                setNotification("Message sent")
                setMail({
                    name: "",
                    email: "",
                    message: ""
                })
                setTimeout(()=>{
                setNotification("")
            },5000)
            }
        }catch(err){
            setError(err.message || "Failed to send message")
            setTimeout(()=>{
                setError("")
            },5000)
        }
    }

	return(
	<>
      <Header />
      <SocialMedia />
      <main>
      <section className="container">
      	<h2>CONTACT</h2>
        {notification && <p className="notification">{notification}</p>}
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>

            <nav>
                <label htmlFor="name">NAME</label>
                <input type="text" placeholder="NAME" name="name" value={mail.name} onChange={handleChange}/>
            </nav>
            <nav>
                <label htmlFor="email">EMAIL</label>
                <input type="email" placeholder="YOUR EMAIL HERE" name="email" value={mail.email} onChange={handleChange}/>
            </nav>
            <nav>
                <label htmlFor="message">MESSAGE</label>
                <textarea type="text" id="message" placeholder="BE POETIC ;-)" name="message" value={mail.message} onChange={handleChange}></textarea>
            </nav>
            <input type="submit" id="submit-btn" value="SEND"/>
        </form>
      </section>
      </main>
      <Footer/>
    </>
	)
}

export default Contacts
