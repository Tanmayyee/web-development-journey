import './Reload.css'

export default function Reload(){
    return(
        <form action="http://localhost:5173/" >
            <button className="reload">Reload</button>
        </form>
    )
}