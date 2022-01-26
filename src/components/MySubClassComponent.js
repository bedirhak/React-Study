import React, { Component } from 'react';
import './MySubClassComponent.css'
import MyExampleContext from '../context/MyExampleContext';


class MySubClassComponent extends Component {



  render() {

    
    return ( 
    <div className='User'>

      <MyExampleContext.Consumer>

        {
          (myContext) => {
            return (
              <div>
                <p> THIS IS SUB CLASSES VALUE {myContext.myValue1} </p>


              </div>

            );

          }

        }

      </MyExampleContext.Consumer>



        <p> 1 This is my SUBCLASS component</p>
        
        <p  >Hello, my name is {this.props.name} {this.props.surname} </p>

        <input type="text" defaultValue={this.props.name} onChange={this.props.changed} />


    </div> );
  }
}

export default MySubClassComponent;