import React from 'react';
import {connect} from "react-redux";

const MyReduxExampleComponent = (props) => {
  return (
    <div>
        <p>Common Value 1: {props.commonValue1}  </p>
        <input value={props.commonValue1} onChange={ (event) => props.onStoreStateChange("commonValue1", event.target.value ) } />


        <p>Common Value 2: {props.commonValue2}  </p>
        <input value={props.commonValue2} onChange={ (event) => props.onStoreStateChange("commonValue2", event.target.value ) } />

        {console.log("Common value 1: " , props.commonValue1 ) }
        {console.log("Common value 2: " , props.commonValue2 ) }

  

    </div>
    );
}
const mapStateToProps = (state) => {
    return {

        commonValue1:state.commonValue1,
        commonValue2:state.commonValue2,
    }
};

const mapDispatchToProps = dispatch => {

    return {
        onStoreStateChange: (key,val) => dispatch({
            type: 'SET_VALUE',
            key:key,
            value:val
        })
    }

};

export default connect(mapStateToProps,mapDispatchToProps) (MyReduxExampleComponent);
