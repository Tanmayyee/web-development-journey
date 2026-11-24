import {useState} from 'react';
    
export default function UserNameForm(){
    const [username,setusername]=useState("Doom");
    return(
        <div>
            <input type="text" placeholder="name" value={username} />
            <button>Submit</button>
        </div>
    )
}