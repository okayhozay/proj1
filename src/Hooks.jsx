import { useState } from "react";
import React from "react";

function HooksFunc(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement  = () => {
        setCount(count - 1);
    }

    return(
        <div>
            <p>{count}</p>
            <input type = "submit" value = "increment" onClick={increment}></input>
            <input type = "submit" value= "decrement" onClick={decrement}></input>
        </div>
    )
}
export default HooksFunc;