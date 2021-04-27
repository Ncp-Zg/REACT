import ProductList from "../components/ProductList";
import Searchbar from "../components/Searchbar";
import Component1 from "../components/Component1"
import Component2 from "../components/Component2"
import {useState} from "react"

const Xpage =()=>{

    const [val,setVal] = useState("")
    const [counter,setCounter] = useState(0)
   
    const search=(p)=>{
        setVal(p)
    }

    const increase = ()=>{
        setCounter(2*counter+1)
    }
    
    return(
        <div>
            
            <Component1 inc = {increase}/>
            <Component2 counter = {counter}/>



            {/* <Searchbar search ={search}/>
            <ProductList val={val} like = {like}/> */}
        </div>
    )
}


export default Xpage