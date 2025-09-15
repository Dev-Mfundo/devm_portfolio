import {Link} from 'react-router-dom'

import logo from '../assets/images/logo.png' 
const Header=()=>{
	return(
	<header className="header">
		<div className="logo">
		<Link to="/">
			<img src={logo} alt="Logo"/>
		</Link>
		</div>
		<div className="menu-nav">
			<nav>
				<Link to="/">HOME</Link>
				<Link to="/about">ABOUT</Link>
				<Link to="/work">WORK</Link>
				<Link to="/contacts">CONTACTS</Link>
			</nav>
		</div>
	</header>
	)
}

export default Header