export const Child=({product,fnc})=>{
    // console.log(props)
    // const {product} = props
    

    const handleChange=(e)=>{
        console.log(e.target.value)
    }

    const handleClick =()=>{
        console.log("clicked")
    }
    return(
        <div className="child">     
            <p>{product.title}</p>
            <p>{product.price}</p>
            <img src={product.img} width="150" height="200" alt=""/>
            <button onClick={handleClick}>Details</button>
            <input onChange={handleChange}></input>
            <input onChange={(e)=>handleChange(e)}></input>

            <input type="number" onChange={fnc}></input>
        </div>
    )
}