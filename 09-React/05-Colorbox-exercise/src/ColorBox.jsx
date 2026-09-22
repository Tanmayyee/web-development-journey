import './ColorBox.css'

export default function ColorBox({colors}){
    const randomArr= (arr)=>{
        const random=Math.floor(Math.random()*arr.length)
        return arr[random];
    }
    return(
        <>
        <div 
        className='StyleColorBox'
        style={{backgroundColor:randomArr(colors)}}
        >   
        </div>
        </>
    )
}