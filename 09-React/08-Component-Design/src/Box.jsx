import "./Box.css"

export default function Box({isActive}){
    return(
        <div className="Box"
        style={{backgroundColor:isActive? "red":"black"}}></div>
    )
}