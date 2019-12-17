import React , { Component } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: " ",
      signInPassword: " "
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
    //console.log(this.state.signInEmail);
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
   // console.log(this.state.signInPassword);
  };

  onSubmitSignIn = () => {
    //console.log(this.state);
    fetch('https://sleepy-brushlands-86928.herokuapp.com/signin' , {
      method : 'post',
      headers : { 'Content-Type' : 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then( response => response.json())
    .then(user => {
      if( user.id){
        this.props.loadUser(user);
        this.props.onRouteChange('home');
     };
  
    })
    
  }

  onRegister = () =>{

    this.props.onRouteChange('register');
  }
  render() {
    return (
      <div className="high">
        <div className="container">
          <div className="front side">
            <div className="content">
              <h1>Financial Helper For You</h1>
              <p>
                Hii , This is a Financial Helper for those who want know future
                worth of their investments.
              </p>
            </div>
          </div>
          <div className="back side">
            <div className="content">
              <h1>LOGIN</h1>
              <div className = "t">
                <label>Your E-mail :</label>
                <input 
                type="email" onChange = {this.onEmailChange} />
                <label>Your Password :</label>
                <input 
                type="password" onChange = {this.onPasswordChange}/>
                <input
                  onClick={this.onSubmitSignIn}
                  type="submit"
                  value="Login"
                />
              </div>
              <Link to="/Register" onClick = {this.onRegister}>Register</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
