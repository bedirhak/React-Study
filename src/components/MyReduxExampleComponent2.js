import React from 'react';
import {connect} from "react-redux";

const MyReduxExampleComponent2 = (props) => {
  return (
    <div>
        <p>{props.commonValue1}</p>
        <p>{props.commonValue2}</p>

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

export default connect(mapStateToProps,mapDispatchToProps) (MyReduxExampleComponent2);
