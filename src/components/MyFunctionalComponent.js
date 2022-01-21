import React, {useState} from 'react';
import PropTypes from 'prop-types'; //Props Type check

const MyFunctionalComponent = (props) => {

    const [counter,setCounter] =  useState(0);

    const [description,setDescription] = useState({text : 'someValue',bedirhan: 'bedirhanKara'});

    const incrementCounter = () => {
        setCounter(counter+1);
    }

  return (
      <div>
          <p>THis is my <span style={{fontWeight:"700"}}> FUNCTIONAL </span> component!</p>
          <p> Hello, my name !S "{props.name}". I am working at "{props.company}" company  </p>
          <p style={{ color:"red" }} >{props.children}</p>
          <button onClick={incrementCounter} > Increase Counter  </button>
          <p> My counter is {counter} </p>
          <p> {description.bedirhan} </p>
          
      </div>
  );
};

MyFunctionalComponent.propTypes = {
    name: PropTypes.string // Is this prop bool or not if is it use it
                           // else use default but default need to be match in this type 
};

MyFunctionalComponent.defaultProps={
    name: "5555",
    children: 'this is not a closed tag component '
}



const MyFunctionalComponent2 = () => {
    return (
        <div>
            <p>THis is my SECOND functional component!</p>
        </div>
    );
  };



const MyFunctionalComponent3 = (props) => {
    return (
        <div>
            <p>THis is my THIRD functional component!</p>
            <p>THis is my THIRD functional componenet's child {props.children} </p>
        </div>
    );
};

export default MyFunctionalComponent;
export {MyFunctionalComponent2};
export {MyFunctionalComponent3};
export const someData = 3;
