import React ,{useState} from 'react';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

import { ReactDOM } from 'react';

class App extends React.Component() {
  constructor(props){

     super(props)
  
    this.state = {
       isLogginActive:true,
    }
  }
  render(){
    const{isLogginActive}=this.state;
    return (
      <div className='App'>
      <LoginForm/>
      {isLogginActive &&  <LoginForm/>}
      </div>
    );

  }
  
}

export default App;
