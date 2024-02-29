import React, { Component } from "react";
class Objects extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.cats.age}</h1>
                <h1>{this.props.cats.gender}</h1>
                <h1>{this.props.cats.breed}</h1>
            </div>
        )
    }
}

class Obj2 extends Component{
    render(){
        const detail = {age: 5, gender: "m", breed: "Siberian"};
        return(
            <div>
               <Objects cats = {detail}></Objects>
            </div>
        )
    }
}
export default Obj2;