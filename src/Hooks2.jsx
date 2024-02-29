import React, { useEffect, useState } from "react";

function Hooks2(){
    const [data, setData] = useState([])

    useEffect(() => {

    }, [])
    const fetchData = async() => {
        const response = await fetch("http://jsonplaceholder.typicode.com/users");
        const result = await response.json()
        setData(result)
    }

    return(
        <div>
            {data.map(item =>(
                <div key = {item.id}>
                    (
                        {item.name}
                    )
                </div>
            ))}
        </div>
    )

}

export default Hooks2;