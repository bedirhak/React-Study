import React from 'react';
import './App.css';
import MyFunctionalComponent from './components/MyFunctionalComponent'
import * as MyFunctionalComponentNamed from './components/MyFunctionalComponent'
import MyClassComponent from './components/MyClassComponent';


function App() {
   return (
    <div className="App">
      <h1 style={{fontSize:"120px",textAlign:"center"}} >
        HEllo !
      </h1>
      <MyClassComponent name={false} myNum={50} >Hello from class comp CHILD World</MyClassComponent>
      <MyFunctionalComponent name="Bedirhak"  company="sbi" />
      <MyFunctionalComponent name="Children Class comp. name">This is my children.</MyFunctionalComponent>
      <div>
        {MyFunctionalComponentNamed.someData}
      </div>
      <MyFunctionalComponentNamed.MyFunctionalComponent2/>
      <MyFunctionalComponentNamed.MyFunctionalComponent3/>
    </div>
  ); 
  


 // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'HEllo'))
}

export default App;
