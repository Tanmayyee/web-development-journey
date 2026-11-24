import {useState} from 'react';
    
export default function UserNameForm(){
    const [username,setUsername]=useState("Doom");
    const update=(evt)=>{
        setUsername(evt.target.value);
    }
    return(
        <div>
            <input type="text" 
            placeholder="name" 
            value={username}
            onChange={update} />
            <button>Submit</button>
        </div>
    )
}