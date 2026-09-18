function handleClick(){
  console.log("you clicked me , have some shame!!!")
}

export default function Clicker(){
    return(
        <>
        <h1>Click Demo</h1>
        <button onClick={handleClick}>Click me</button>
        </>
    )
}