import "./Dice.css"
import Die from "./Die"
export default function Dice({dice,color}){
    return(
        <section className="dice">
            {dice.map((v,idx)=>{
                return(
                    <Die key={idx} val={v} color={color}/>
                )
            })}
        </section>
    )
}