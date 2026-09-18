import Property from "./Property"
import './PropertyList.css'
export default function PropertyList({items}){
    return(
        <div className="PropertyList">
            {items.map((i)=>{
             return <Property {...i} key={i.id} />
             })}
        </div>
    )
}