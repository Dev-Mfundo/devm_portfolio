const Button=({type,value,onClick,style})=>{
	return <Button type={type} onClick={onClick} style={style}>{value}</Button>
}

export default Button