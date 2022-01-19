import React, { Component} from 'react';

import PropTypes from 'prop-types';



class MyClassComponent extends Component {

  /*  constructor(props){
        super(props);
        this.state = { counter: 1 };
    }; */

    state ={
        counter :1,
        names: "Bedirhan",
        surname : "Kara",
        users:[]
    }


    static propTypes = {
        name : PropTypes.bool,
        myNum: PropTypes.number

    };


    static defaultProps = {
        name : 'Default Class Props Wrong type or nothing'

    };

    incrementCounter = () => {
        
  
        this.setState({ 
            counter : this.state.counter+1,
            users: [this.state.users, this.state.counter,","]
        });

        

    };



    render() {
    return(
    <div>
        <p style={{ color: "brown" }} > My counter is: {this.state.counter} name is {this.state.names} {this.state.surname} </p>
        <p>Props Number: {this.props.myNum}  </p>
        <p>Users: {this.state.users}  </p>
        <button onClick={this.incrementCounter} > Increment Counter </button>
        <p>HEllo from My Class Component!</p>
        <p style={{color:"blue"}} > THis is my end of class props {this.props.name}</p>

    </div>
    );
  }
}

export default MyClassComponent;
