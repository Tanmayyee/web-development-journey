export default function Listpicker({values}){
    const randomIdx= Math.floor(Math.random()*values.length)
    const randomElement= values[randomIdx]
   return(
    <div>
        <h2>----------------------------------------</h2>
        <h1>The list of values:{values}</h1>
        <h2>Random element is:{randomElement}</h2>
    </div>
   )
}