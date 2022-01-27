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
            {id: 1, name: 'Esra' , surname:'Gürlük'},
            {id: 2, name: 'Bedirhan' , surname:'Kara'}
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

    handleNameChange = (event,userId) =>{
        const userIndex = this.state.users.findIndex(user => user.id === userId)
        const user = {...this.state.users[userIndex]};
        user.name = event.target.value;
        const users = [...this.state.users];
        users[userIndex] = user;
        console.log(users);
        this.setState({ 
            users : users
            
        });
    };


      /*
        <button onClick={this.handleClick1}>Click 1</button>
        <button onClick={this.handleClick2}>Click 2</button> <br></br>
        <button onClick={()=> this.handleClick1()}>Click 1</button>
        <button onClick={()=> this.handleClick2()}>Click 2</button>

        */


    render() {



    const buttonStyle = {
        border: '1px solid red',
        borderRadius: '15px',
        backgroundColor: 'pink',
        cursor: 'pointer',
        padding: '10px'
    };


    return(
        <div>

       
        <p>First Line of Class Component Props Name: {this.props.name}  </p>
        <p style={{ color: "brown" }} > My counter is: {this.state.counter} name is {this.state.names} {this.state.surnames} </p>
        <p>Props Number: {this.props.myNum}  </p>
        <button style={buttonStyle} onClick={this.incrementCounter} > Increment Counter </button>
        <p>HEllo from My Class Component!</p>
        <p style={{color:"blue",borderBottom:"1px solid black"}} > THis is my end of class props {this.props.name}</p>

        {this.state.users.map(user => {
            return(
            <MySubClassComponent 
            name={user.name} 
            surname={user.surname} 
            key={user.id}
            changed = {(event) => this.handleNameChange(event,user.id)}  
            />
            )
        })}

    </div>
    );
  }
}

export default MyClassComponent;
