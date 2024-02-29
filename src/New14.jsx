import React from "react";
function City(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.location}</h1>
        </div>
    );
}

function New14(){
    return(
        <div>
            <City name = "San Francisco" location = "California"></City>
        </div>
    );
}
export default New14;