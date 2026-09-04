import "./Pokemon.css"

export default function RandomPokemon(){
    const random=Math.floor(Math.random()*151)+1;
    const url=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${random}.png`
    return(
        <div className="poke" >
            <h2>Pokemon {random}</h2>
            <img src={url} alt='' />
        </div>
    );
}