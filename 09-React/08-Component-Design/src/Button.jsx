import "./Button.css"

export default function Button({func,label="click"}){
    return(
        <button className="Button" onClick={func}> {label} </button>
    )
}