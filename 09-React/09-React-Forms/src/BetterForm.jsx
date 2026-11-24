import { useState } from "react"

export default function BetterForm(){
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        password:""
    })

    const update=(evt)=>{
        const changeField=evt.target.name;
        const newValue=evt.target.value;
        setFormData((currData)=>{
            currData[changeField]=newValue;
            return {...currData};
        })

    }
    const handleSubmit=()=>{
        console.log(formData);
    }
    return(
        <div>
            <label htmlFor="firstName">First Name</label>
            <input 
            type="text" 
            id="firstName" 
            placeholder="First Name" 
            name="firstName" 
            onChange={update}
            value={FormData.firstName}/>


            <label htmlFor="lastName">Last Name</label>
            <input 
            type="text" 
            id="lastName" 
            placeholder="Last Name" 
            name="lastName" 
            onChange={update}
            value={FormData.lastName}/>


            <label htmlFor="password">Password</label>
            <input 
            type="text" 
            id="password" 
            name="password"
            onChange={update} 
            value={FormData.password}/>


            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}