import Core from "../components/Core";


const data = [
    {name:"kazım",department:"Developer",salary:"4000"},
    {name:"kazım",department:"Developer",salary:"4000"},
    {name:"kazım",department:"Developer",salary:"4000"},
    {name:"kazım",department:"Developer",salary:"4000"},
    {name:"kazım",department:"Developer",salary:"4000"},
    {name:"kazım",department:"Developer",salary:"4000"}
]
const Xpage =()=>{
    return(
        <div>
            {data.map((p,i)=>{
                return(<Core per={p} key={i}/>)
            })}
        </div>
    )
}

export default Xpage