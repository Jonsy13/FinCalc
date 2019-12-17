import React, { Component } from "react";
import "./App.css";
import Layout from "./containers/Layout";
import SignIn from "./components/SignIn/SignIn";
import { BrowserRouter } from "react-router-dom";
import Register from "./components/Register/Register";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSignedIn: "signin",
      user: {
        id: "",
        name: "",
        email: "",
        entries: "0",
        joined: new Date()
      }
    };
  }
 

  loadUser = ( user ) =>{
    this.setState({
      user:{
        id: user.id,
        name: user.name,
        email: user.email,
        entries: user.entries,
        joined: user.joined
      }
    })
    console.log(this.state.user);
  }

  onRouteChanged = (value) => {
    console.log("Route Changed");
    this.setState({ isSignedIn: value });
  };




  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {this.state.isSignedIn === "signin" ? (
            <SignIn onRouteChange={( k ) => this.onRouteChanged( k )} loadUser = {( u ) => this.loadUser( u )} />
          ) : ( this.state.isSignedIn === "register") ? <Register  onRouteChange = {( k ) => this.onRouteChanged( k )} loadUser = {( u ) => this.loadUser( u )} /> :
           <Layout  id = {this.state.user.id} name = { this.state.user.name } loadCheck = {( p ) => this.loadCheck( p )} onRouteChange={( k ) => this.onRouteChanged( k )} />
        
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
