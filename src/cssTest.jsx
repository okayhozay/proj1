import React, { Component } from "react";
class CSSTest extends Component{

    render(){

        const par = {
            color: "orange",
            backgroundColor: "yellow",
            padding: "1.5px",
            fontFamily: "Arial",
        }

        return(
            <div>
                <h1 style = {{color: "red", backgroundColor: "green"}}>This is a CSS example</h1>
                <p style = {par}>This is a paragraph tag</p>

            </div>
        )
    }
}
export default CSSTest;