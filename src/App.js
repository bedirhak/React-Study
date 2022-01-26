import React from 'react';
import './App.css';
import MyFunctionalComponent from './components/MyFunctionalComponent'
import * as MyFunctionalComponentNamed from './components/MyFunctionalComponent'
import MyClassComponent from './components/MyClassComponent';
import MyExampleProvider from './context/MyExampleProvider';


function App() {
   return (
      <MyExampleProvider>
       <div className="App">
        <h1 style={{fontSize:"120px",textAlign:"center"}} >
          HEllo !
        </h1>
        <MyClassComponent name="bedirhan" myNum={50} >HElloooo class components CHILD PROPS</MyClassComponent>
        <MyFunctionalComponent name="Bedirhak"  company="sbi" />
        <MyFunctionalComponent name="Children Class comp. name">This the is my children.</MyFunctionalComponent>
        <div>
        <MyFunctionalComponentNamed.MyFunctionalComponent3>Hello childiiishhh</MyFunctionalComponentNamed.MyFunctionalComponent3>
        </div>
      </div>
     </MyExampleProvider>
  ); 
  


 // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'HEllo'))
}

export default App;
