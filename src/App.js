import React from 'react';
import './App.css';
import MyFunctionalComponent from './components/MyFunctionalComponent'
import * as MyFunctionalComponentNamed from './components/MyFunctionalComponent'
import MyClassComponent from './components/MyClassComponent';
import MyExampleProvider from './context/MyExampleProvider';
import {Provider} from "react-redux";
import store from "./store/MyStore";
import MyReduxExampleComponent from './components/MyReduxExampleComponent';
import MyReduxExampleComponent2 from './components/MyReduxExampleComponent2';
import RouterComponent from './components/RouterComponent';

function App() {
  console.log(store.getState())
   return (
     <Provider store={store}>
        <MyExampleProvider>
          <div className="App">
            <RouterComponent/>
            <h1 style={{fontSize:"24px",textAlign:"center"}} >
              HEllo !
            </h1>
            <MyClassComponent name="bedirhan" myNum={50} >HElloooo class components CHILD PROPS</MyClassComponent>
            <MyFunctionalComponent name="Children Class comp. name">This the is my children.</MyFunctionalComponent>
            <div>
              <MyFunctionalComponentNamed.MyFunctionalComponent3>Hello childiiishhh</MyFunctionalComponentNamed.MyFunctionalComponent3>
            </div>
          </div>
          <MyReduxExampleComponent/>
          <MyReduxExampleComponent2/>
        </MyExampleProvider>
     </Provider>
  ); 
}


export default App;
