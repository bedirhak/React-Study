import React, { Component } from 'react';

class MySubClassComponent extends Component {



  render() {
    return ( 
    <div>

        <p>This is my SUBCLASS component</p>
        
        <p>Hello, my name is {this.props.name} {this.props.surname} </p>


    </div> );
  }
}

export default MySubClassComponent;