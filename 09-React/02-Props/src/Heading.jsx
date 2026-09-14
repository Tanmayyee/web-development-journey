export default function Heading({text,c="olive"}){
    return(
        <>
        <h2>----------------------------------------</h2>
        <h1 style={{color:c}}>{text}</h1>
        </>      
    )
}

//{{color:c}}  here the first curly braces is for to escape jsx and 2nd one is for object 