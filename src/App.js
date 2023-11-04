import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{

  state = {
    username:'Ishant'
  }


  usernameChangedHandler = (event) =>{
    this.setState({username: event.target.value})

  }

  render(){
    return(
      <div className="App">
        <ol>
          <li>Create two new Component: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs </li>
          <li>Pass a username (of your choice) to UserOutput props and display it there</li>
          <li>Add state to the App component (= the username) and pass the username to the UserOuput component</li>
          <li>Add a method to manipulate the state (=  an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the inout-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOuput</li>
          <li>Add two-way-binding toyour input(in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your component element in the component- both with inline styles and stylesheets</li>
        </ol>

        <UserInput changed={this.usernameChangedHandler} currentName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="Pankaj"/>
        
      </div>
    )
  }
}

export default App;


