import React, { Component } from "react";
class New11 extends Component{
    render(){
        return(
            <div>
                <p>{this.props.cars}</p>
            </div>
        )
    }
}

class Newest11 extends Component{
    render(){
        var t1 = "BMW";
        return(
            <div>
                <New11 cars = {t1}></New11>
            </div>
        )
    }
}
export default Newest11;