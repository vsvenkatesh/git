
import React from 'react';
//import ReactDOM from 'react-dom';
import Home from '../Home';
import '../App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';


class LoginForm extends React.Component {

  handleSignIn(e) {
var component = this
    e.preventDefault()
    
    let username = this.refs.username.value
    let password = this.refs.password.value
    localStorage.setItem("test", username); 
      var data = {"username": username,
    "password": "456"};
  fetch( "http://localhost:3000/login", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
       body: JSON.stringify(data),

    })
  .then(function(response){
    return response.json()
  }).then(function(body){
    if (body == "")
    {
      console.log("not a user!!!!!");
      
     alert("Invalid Username");

    }
    else 
{
  console.log("u are a user!!!!!");
   // console.log(a);
//a.push(JSON.parse(localStorage.getItem('session')));

 //console.log(five);
 localStorage.setItem('session2', JSON.stringify(body));
var fiveData = localStorage.getItem("session2");
var objc = JSON.parse(fiveData);
console.log("objc is",fiveData);
component.props.onSignIn(username)
}
    //console.log(JSON.stringify(body));

    });
    
  }  

  render() {
    return (
      <div id="parent">
      <div id="new">
      <form onSubmit={this.handleSignIn.bind(this)}>
      <center><h3 id="txt"><font color="white">Sign in</font></h3></center>
      
        <center><input type="text" id="txtboxuser" ref="username" placeholder="username" /></center>
        <center><input type="password" id="txtbox2" ref="password" placeholder="password" /></center>
         <center><p class="f1">Forgot:<a href="#">Username/Password?</a></p></center>
        <center><button class="button">sign in</button></center>
      </form>
      </div>
      </div>
      
    )
  }
}


 



class App extends React.Component {
  
  constructor(props) {

    super(props)
   
    this.state = {
      user: null
    }

  }
  
  
  signIn(username, password) {
   
    this.setState({
      user: {
        username
      }
    })
  }


 
// '{"username":"phonenumber"}': '' }


  render() {
    return (
      <div>
      
        { 

          (this.state.user) ? 
            
          this.props.history.push({
            pathname: "/Home",
            user:this.state.user
          })
          :
            <LoginForm 
             onSignIn={this.signIn.bind(this)} 
            />
        }
        
      </div>
    )
    
  }
  
}
export default App;