import {useState} from 'react';
    
export default function UserNameForm(){
    const [username,setUsername]=useState("Doom");
    const update=(evt)=>{
        setUsername(evt.target.value);
    }
    return(
        <div>
            <label htmlFor="username">Enter Username</label>
            <input type="text" 
            placeholder="username" 
            value={username}
            onChange={update}
            id='username' />
            <button>Submit</button>
        </div>
    )
}