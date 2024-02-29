import React, { Component } from "react";
import PropTypes from "prop-types";
//step 1: Create a component with proptype

class PValidation extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.numberProp}</h1>
            </div>
        );
    }
}
//step2: validating proptype
PValidation.propTypes = {
    numberProp: PropTypes.number
}

//Step3: creating default properties
PValidation.defaultProps = {
    numberProp: 10
}

export default PValidation