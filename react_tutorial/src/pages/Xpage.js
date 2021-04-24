import ProductList from "../components/ProductList";
import Searchbar from "../components/Searchbar";

const Xpage =()=>{

    const search =(val)=>{
        const searchedval = val
        console.log(searchedval)
        searchedval.preventDefault();
    }


    return(
        <div>
            <Searchbar handleSearch ={search}/>
            <ProductList/>
        </div>
    )
}

export default Xpage