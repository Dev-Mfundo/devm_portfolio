const Button=({type,value,onClick,style})=>{
	return(
		<div>
		 <button type={type} onClick={onClick} className="global-btn">{value}</button>
		</div>
		)
}

export default Button