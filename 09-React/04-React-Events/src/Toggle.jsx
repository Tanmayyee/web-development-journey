import {useState} from 'react';

export default function Toggle(){
    const [isHappy , setIsHappy]=useState(true);

    const toggleIsHappy=()=> setIsHappy(!isHappy)

    return <h1 onClick={toggleIsHappy}>Toggle me: {isHappy?"😁":"😞"}</h1>
}