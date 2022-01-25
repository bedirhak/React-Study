import React, { Component} from 'react';

import PropTypes from 'prop-types';

import MySubClassComponent from './MySubClassComponent';



class MyClassComponent extends Component {

  /*  constructor(props){
        super(props);
        this.state = { counter: 1 };
    }; */

    state = {
        counter :1,
        names: "Bedirhan",
        surnames : "Kara",
        users:[
            {name: 'Esra' , surname:'Gürlük'},
            {name: 'Bedirhan' , surname:'Kara'}
        ]
    };


    static propTypes = {
        name : PropTypes.string,
        myNum: PropTypes.number

    };


    static defaultProps = {
        name : 'DENEME'

    };

    incrementCounter = () => {
        
  
        this.setState({ 
            counter : this.state.counter+1,
            
        });

        

    };

    handleClick1 = () =>{
        console.log(this);
    }

    
    handleClick2(){
        console.log(this);
    }

    handleNameChange = (event) =>{
        this.setState({
            users: [
                {name :'Esra', surname : 'Gürlük Yurt'},
                {name : event.target.value , surname : 'Kılınç'}
            ]
        });
    };


      /*
        <button onClick={this.handleClick1}>Click 1</button>
        <button onClick={this.handleClick2}>Click 2</button> <br></br>
        <button onClick={()=> this.handleClick1()}>Click 1</button>
        <button onClick={()=> this.handleClick2()}>Click 2</button>

        */


    render() {
    return(
        <div>

       
        <p>First Line of Class Component Props Name: {this.props.name}  </p>
        <p style={{ color: "brown" }} > My counter is: {this.state.counter} name is {this.state.names} {this.state.surnames} </p>
        <p>Props Number: {this.props.myNum}  </p>
        <button onClick={this.incrementCounter} > Increment Counter </button>
        <p>HEllo from My Class Component!</p>
        <p style={{color:"blue",borderBottom:"1px solid black"}} > THis is my end of class props {this.props.name}</p>

        <MySubClassComponent name={this.state.users[0].name} surname={this.state.users[0].surname} changed={this.handleNameChange}  />
        <MySubClassComponent name={this.state.users[1].name} surname={this.state.users[1].surname}   />



    </div>
    );
  }
}

export default MyClassComponent;
