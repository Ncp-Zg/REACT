import {useState} from "react"

const Searchbar = ({search,inc})=>{


    const [searchedValue,setSearchedValue] = useState("")
    const [like,setLike]=useState(0)

    const handleSubmit=(e)=>{
        e.preventDefault();
        search(searchedValue)
    }

    
    
    console.log(like)
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setSearchedValue(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
            <button onClick={()=>setLike(like+1)}>Artir</button>
        </div>
    )
}
export default Searchbar