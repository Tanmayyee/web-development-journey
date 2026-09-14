export default function Die({numSides=4}){      /* default value of numSides */
    const roll=Math.floor(Math.random()*numSides)+1
    return(
        <> 
            <h2>----------------------------------------</h2>
            <h1>{numSides}-sided die roll:{roll}</h1>
            <h2>Helloooo</h2>
        </>
        
    )
}