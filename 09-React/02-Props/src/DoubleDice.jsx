export default function DoubleDice(){
    const num1=Math.floor(Math.random()*3)+1 
    const num2=Math.floor(Math.random()*3)+1 
    const isWinner= num1===num2
    const stylezz= {color:isWinner?"green":"red"}   //use inline styles for dynamic styling and use separate css file for static styling
    return(
        <div style={stylezz}>
        <h2>---------- Double Dice Game ----------</h2>
        {isWinner && <h3>You Win!</h3>}   {/* if the first condition is true, the second expression is evaluated/rendered." */}
        <h2>num1:{num1}</h2>
        <h2>num2:{num2}</h2>
        </div>
    )
}

//   return(
//         <div>
//         <h2>---------- Double Dice Game ----------</h2>
//         {num1===num2? <h3>You Win</h3>:null}    
//         <h2>num1:{num1}</h2>
//         <h2>num2:{num2}</h2>
//         </div>
//     )