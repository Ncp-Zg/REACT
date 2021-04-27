import {useState} from "react"
const Productlist=({val,like})=>{
    // console.log(val)

    const [likebutton,setLikebutton]=useState("")

    

    return(
        <div>
            <div>ProductList {val}</div>
            <div>{()=>setLikebutton(0)}</div>
            {like(likebutton)}
        </div>
    )
}
export default Productlist