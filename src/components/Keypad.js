// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handleChange(e){
        console.log("Entering password...")
        return e.target.value
    }
    return (
        <div> 
            <input type="password" onChange={handleChange}/>
        </div>
    )
}

export default Keypad;