const Searchbar = ({handleSearch})=>{
    return(
        <div>
        <form onSubmit={handleSearch}>
            <input type="text"/>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}
export default Searchbar