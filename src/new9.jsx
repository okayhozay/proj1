import React, { Component } from "react";
class New9 extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.studentName}</h1>
                <h1>{this.props.course}</h1>
                <h1>{this.props.fee}</h1>
            </div>
        )
    }
}
New9.defaultProps = {
    studentName: "Bilal",
    course: "React",
    fee: 1111
}
export default New9;