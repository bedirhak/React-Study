import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types'; //Props Type check
import MyExampleContext from '../context/MyExampleContext';
import axios from 'axios';
import MySubClassComponent from './MySubClassComponent';

const MyFunctionalComponent = (props) => {

    const [users,setUsers] = useState([]);

    /*useEffect(()  =>{
        document.title = `You clicked ${counter} times `;
s
    });*/

        /*bir kere çalışıp sonrasında çalışmamasını sağlıyor. 
    componentDidMount() fonksiyonu gibi çalışıyor Sayfa 
    yüklenince güncel counteri title yapar 
    sonra değişiklikte bir daha etkilenmez*/

    /*useEffect(()  =>{
        document.title = `You clicked ${counter} times `;

    },[]);*/

    /*Bütün state ya da propslara değil sadece söylenene bakar*/
    useEffect(()=>{
        axios.get("/backend-proxy-api/hello/sayHello")
        .then(res => {
            console.log(res.data);
        })

    },[]);

  return (
      <div>
          <MyExampleContext.Consumer>
              {
                  (myContext) => {
                    return(
                        <div>

                            <p>myValue1: {myContext.myValue1} </p>
                            <input  onChange={ (event) =>  myContext.updateValue1(event.target.value)} />
                        </div>
                    ) 
                  }
              }

          </MyExampleContext.Consumer>

              {users.map(user=>{
                  return(
                      <MySubClassComponent key={user.id} name={user.name} />
                      );
              })}
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