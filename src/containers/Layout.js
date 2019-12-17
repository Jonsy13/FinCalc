import React, { Component } from "react";
import Navigation from "../components/Navigation/Navigation";
import InputForm1 from "../components/InputForm/InputForm1";
import InputForm2 from "../components/InputForm/InputForm2";
import InputForm3 from "../components/InputForm/InputForm3";
import InputForm4 from "../components/InputForm/InputForm4";
import InputForm5 from "../components/InputForm/InputForm5";
import InputForm6 from "../components/InputForm/InputForm6";
import Cards from "../components/Cards/Cards";
import Team from '../components/Team/Team';
import MyChecks from "../components/MyChecks/MyChecks";
import { Route, Switch } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <div className="Scroll">
        <Navigation onRouteChange={k => this.props.onRouteChange(k)} name = { this.props.name } />
        <Switch>
          <Route path="/Team" exact component = {Team} />
          <Route
            path="/MyChecks"
            exact
            render={() => <MyChecks id={this.props.id} />}
          />

          <Route
            path="/InputForm/1"
            exact
            render={() => <InputForm1 id={this.props.id} />}
          />
          <Route
            path="/InputForm/2"
            exact
            render={() => <InputForm2 id={this.props.id} />}
          />
          <Route
            path="/InputForm/3"
            exact
            render={() => <InputForm3 id={this.props.id} />}
          />
          <Route
            path="/InputForm/4"
            exact
            render={() => <InputForm4 id={this.props.id} />}
          />
          <Route
            path="/InputForm/5"
            exact
            render={() => <InputForm5 id={this.props.id} />}
          />
          <Route
            path="/InputForm/6"
            exact
            render={() => <InputForm6 id={this.props.id} />}
          />
          <Route path="/"  render = {() => <Cards />} />
        </Switch>
      </div>
    );
  }
}

export default Layout;
