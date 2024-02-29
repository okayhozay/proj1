import React, {Component} from "react";

class References extends Component
{
    constructor(props)
    {
        super(props);
        this.callRef = React.createRef();
        this.func1 = this.func1.bind(this);
    }

    func1(){
        this.callRef.current.focus();
        console.log(this.callRef.current);
    }

    render()
    {
     return(
        <div>
            {/* puts cursor somewhere, here in the text box */}
            <input type = 'text' ref = {this.callRef} id = 'hello'></input>
            <input type = 'submit' value = 'Enter' onClick={this.func1}></input>
        </div>
     )
    }

}
export default References;