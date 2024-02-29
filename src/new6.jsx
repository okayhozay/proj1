import React, { Component } from "react";
class C6 extends Component{
    render(){
        return(
            <div>
                <C7></C7>
                <C8></C8>
            </div>
        );
    }
}

class C7 extends Component{
    render(){
        return(
            <h1>Class c7 for testing</h1>
        );
    }
}

class C8 extends Component{
    render(){
        return(
            <h1>new c8 for testing</h1>
        );
    }
}
export default C6;