// export default function ColorList({colors}){
//     const lis= colors.map((c)=><li style={{color:c}}>{c}</li>)
//     return(
//         <div>
//           <h1>Colors list</h1>

//           {lis}

//         </div>
//     ) 
// }

export default function ColorList({colors}){
    return(
        <div>
          <h2>----------------------------------------</h2>
          <h1>Colors list</h1>

          <ul>
            {
                colors.map((c)=><li style={{color:c}}>{c}</li>)
            }
          </ul>

        </div>
    ) 
}