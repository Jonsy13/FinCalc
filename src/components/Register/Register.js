import React , { Component } from "react";
import "./Register.css";
class Register extends Component{

  constructor(props) {
    super(props);
    this.state = {
      Email: " ",
      Password: " ",
      Name: "",
    };
  }

  onNameChange = ( event ) => {
    this.setState({ Name: event.target.value });
  }
  onEmailChange = (event) => {
    this.setState({ Email: event.target.value });
    //console.log(this.state.signInEmail);
  };

  onPasswordChange = (event) => {
    this.setState({ Password: event.target.value });
   // console.log(this.state.signInPassword);
  };

  onSubmitSignIn = () => {
    //console.log(this.state);
    fetch('https://sleepy-brushlands-86928.herokuapp.com/register' , {
      method : 'post',
      headers : { 'Content-Type' : 'application/json'},
      body: JSON.stringify({
        email: this.state.Email,
        password: this.state.Password,
        name: this.state.Name
      })
    })
    .then( response => response.json())
    .then(user => {
      if(user){
        this.props.loadUser(user);
        this.props.onRouteChange('home');
     };
  
    })
    
  }

  render(){
    return (
      <div className = "high">
        <div className="container">
          <div className="front side">
            <div className="content">
              <h1>Financial Helper</h1>
              <p>It is a Financial Helper ....It is for those who want to know future worth of their investment
              </p>
            </div>
          </div>
          <div className="back side">
            <div className="content">
              <h1>Register</h1>
              <div className = "t">
                <label>Your Name :</label>
                <input type="text" placeholder="Enter Your Name" onChange={this.onNameChange} />
                <label>Your E-mail :</label>
                <input type="text" placeholder="Enter Here E-mail" onChange={this.onEmailChange} />
                <label>Your Password :</label>
                <input type="password" placeholder="Enter Password" onChange={this.onPasswordChange} />
                <input onClick = {this.onSubmitSignIn } type="submit" value="Register" />
              </div>
            </div>
          </div>
      </div>
      </div>
   );
}
}

export default Register;
