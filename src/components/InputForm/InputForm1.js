import React, { Component } from "react";
import "./InputForm.css";
class Input extends Component {
  state = {
    P: 0,
    F: 0,
    T: 0,
    I: 0,
    A: 0,
    Amount: 0
  };

  PresentChange = event => {
    this.setState({ P: event.target.value });
  };

  TimeChange = event => {
    this.setState({ T: event.target.value });
  };

  InterestChange = event => {
    this.setState({ I: event.target.value });
  };

  onSubmit = () => {
    //let Am = (this.state.P * this.state.F * this.state.T) / 100;
    //console.log(this.state.P, this.state.I, this.state.T);
    let nwI = Number(this.state.I / 100) + 1;
    //console.log(nwI);
    let At = this.state.P * Math.pow(nwI, this.state.T);
    this.setState({Amount:At});
    //console.log(At);
    let currId = this.props.id;
    fetch("https://sleepy-brushlands-86928.herokuapp.com/checking", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Present: this.state.P,
        Future: At,
        Time: this.state.T,
        Interest: this.state.I,
        Amount: this.state.A,
        id: currId
      })
    });
  };

  render() {

    let AmountShow = null;

    if(this.state.Amount){
      AmountShow = <h1>{Number(this.state.Amount).toFixed(2)}</h1>
    }
    return (
      <div>
        <div className="k">
          <div className="con">
            <h1>Single Payment Compound Amount</h1>
            <h2>Enter Your details Here </h2>
            <div className="form">
              <fieldset className="form-fieldset ui-input __first">
                <input type="text" id="Present" onChange={this.PresentChange} />
                <label>
                  <span data-text="Present Worth">Present Worth</span>
                </label>
              </fieldset>

              <fieldset className="form-fieldset ui-input __third">
                <input type="text" id="Time" onChange={this.TimeChange} />
                <label>
                  <span data-text="Time">Time ( Years )</span>
                </label>
              </fieldset>

              <fieldset className="form-fieldset ui-input __fourth">
                <input
                  type="text"
                  id="Interest"
                  onChange={this.InterestChange}
                />
                <label>
                  <span data-text="Interest Rate">Interest Rate</span>
                </label>
              </fieldset>

              <div className="form-footer">
                <button className="btn" onClick={this.onSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
          {AmountShow}
        </div>
      </div>
    );
  }
}

export default Input;
