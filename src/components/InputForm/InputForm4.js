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

  FutureChange = event => {
    this.setState({ F: event.target.value });
  };

  TimeChange = event => {
    this.setState({ T: event.target.value });
  };

  InterestChange = event => {
    this.setState({ I: event.target.value });
  };

  onSubmit = () => {
    // let Am = (this.state.P * this.state.F * this.state.T) / 100;
    let d = Number(Math.pow(Number(this.state.I / 100) + 1, this.state.T)) - 1;
    let num = this.state.I / d;
    let a = this.state.F * num;
    this.setState({ A: a });
    this.setState({ Amount:a})
    let currId = this.props.id;
    console.log(currId);
    fetch("https://sleepy-brushlands-86928.herokuapp.com/checking", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Present: this.state.P,
        Future: this.state.F,
        Time: this.state.T,
        Interest: this.state.I,
        Amount: a,
        id: currId
      })
    });
  };

  render() {
    let AmountShow = null;

    if (this.state.Amount) {
      AmountShow = <h1>{Number(this.state.Amount).toFixed(2)}</h1>;
    }

    return (
      <div>
        <div className="k">
          <div className="con">
            <h1>Equal Payment Series Sinking Fund</h1>
            <h2>Enter Your details Here </h2>
            <div className="form">
              <fieldset className="form-fieldset ui-input __second">
                <input type="text" id="Future" onChange={this.FutureChange} />
                <label>
                  <span data-text="Future Worth">Future Worth</span>
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
            {AmountShow}
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
