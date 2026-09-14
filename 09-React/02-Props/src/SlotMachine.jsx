export default function Slots({val1,val2,val3}){
    const isWinner=val1===val2 && val1===val3
    return(
        <div>
           <h2>---------- Slot Machine ----------</h2>
           <h1>{val1} {val2} {val3}</h1>
           <h2 style={{color: isWinner?"green":"red"}}>{isWinner? "You Win":"You Lose"}</h2>
           {isWinner && <h2>Congrats</h2>}         {/* here if isWinner is true only then code on the right side of && will run */}
        </div>
    )
}