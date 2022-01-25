import React, { Component } from 'react';

class MySubClassComponent extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    console.log(this.props);
  }


  render() {

    
    return ( 
    <div>

        <p> 1 This is my SUBCLASS component</p>
        
        <p>Hello, my name is {this.props.name} {this.props.surname} </p>


    </div> );
  }
}

export default MySubClassComponent;