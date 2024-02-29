import React from "react";

const Var1 = () => {
    const Cities = ['fremont', 'oakland', 'san francisco'];

    return(
        <ul>
            {
                
                Cities.map((x, index) => (
                    <li key = {index}>
                        {x}
                    </li>))
            }
        </ul>
    )
}
export default Var1;