import logo from '../assets/images/logo.png' 

const Header=()=>{
	return(
	<header className="header">
		<div className="logo">
			<img src={logo} alt=""/>
		</div>
		<div className="menu-nav">
			<nav>
				<a href="#home">HOME</a>
				<a href="#about">ABOUT</a>
				<a href="#work">WORK</a>
				<a href="#contacts">CONTACTS</a>
			</nav>
		</div>
	</header>
	)
}

export default Header