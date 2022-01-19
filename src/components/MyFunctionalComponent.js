import React from 'react';
import PropTypes from 'prop-types'; //Props Type check

const MyFunctionalComponent = (props) => {
  return (
      <div>
          <p>THis is my functional component!</p>
          <p> Hello, my name is "{props.name}". I am working at "{props.company}" company  </p>
          <p style={{ color:"red" }} >{props.children}</p>
      </div>
  );
};


MyFunctionalComponent.propTypes = {
    name: PropTypes.string // Is this prop bool or not if is it use it
                           // else use default but default need to be match in this type 
};

MyFunctionalComponent.defaultProps={
    name: 'BEdirhan',
    children: 'this is not a closed tag component '
}



const MyFunctionalComponent2 = () => {
    return (
        <div>
            <p>THis is my SECOND functional component!</p>
        </div>
    );
  };



const MyFunctionalComponent3 = () => {
    return (
        <div>
            <p>THis is my THIRD functional component!</p>
        </div>
    );
};

export default MyFunctionalComponent;
export {MyFunctionalComponent2};
export {MyFunctionalComponent3};
export const someData = 3;
