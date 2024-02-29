import React, { Component } from "react";
class Test2 extends Component{
    render(){
        var x = 11;
        var gg = {
            color: "blue"
        }
        return(
            <div>
                <h1 style = {gg}>This is test 2</h1>
                <h2>This is an h2 tag</h2>
                <h3>{4+5}</h3>
                <h4>{x == 10?"This is true.":"This is false"}</h4>
            </div>
        );
    }
}
export default Test2;