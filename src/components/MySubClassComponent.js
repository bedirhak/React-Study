import React, { Component } from 'react';

class MySubClassComponent extends Component {


  render() {

    
    return ( 
    <div>

        <p> 1 This is my SUBCLASS component</p>
        
        <p>Hello, my name is {this.props.name} {this.props.surname} </p>

        <input type="text" defaultValue={this.props.name} onChange={this.props.changed} />


    </div> );
  }
}

export default MySubClassComponent;