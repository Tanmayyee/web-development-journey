import "./Die.css"

export default function Die({val,color="darkviolet"}){
    return(
        <div className="die" style={{backgroundColor:color}}>
            {val}
        </div>
    )
}