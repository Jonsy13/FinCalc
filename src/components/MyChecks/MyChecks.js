import React, { Component } from "react";
import "./MyChecks.css";
import Check from "./check";
class MyChecks extends Component {
  state = {
    checks: {
      P: 0,
      F: 0,
      T: 0,
      I: 0,
      A: 0
    },
    fetchedcheck: [],
    loading: true
  };

  componentDidMount() {
    console.log("HII");
    console.log(this.props.id);
    let curId = this.props.id;
    fetch("https://sleepy-brushlands-86928.herokuapp.com/mychecks", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: curId
      })
    })
      .then(response => response.json())
      .then(check => {
        console.log(check);

        const fetchedChecks = [];
        for (let key in check) {
          fetchedChecks.push({
            ...check[key],
            id: key
          });
        }
        /* check.forEach(ch => {
          fetchedChecks.push(ch);
        }); */
        console.log(fetchedChecks);
        this.setState({ loading: false, fetchedcheck: fetchedChecks });
      });
  }

  render() {
    return (
      <div className="h">
        <h1>
          <span className="blue">&lt;</span>MY PREVIOUS
          <span className="blue">&gt;</span>{" "}
          <span className="yellow">CHECKS</span>
        </h1>
        <h2>All Your Previous Checks Are safe With Us</h2>
        <table className="contain">
          <thead>
            <tr>
              <th>
                <h1>Present Worth</h1>
              </th>
              <th>
                <h1>Future Worth</h1>
              </th>
              <th>
                <h1>Time</h1>
              </th>
              <th>
                <h1>Interest Rates</h1>
              </th>
              <th>
                <h1>Amount(Monthly)</h1>
              </th>
            </tr>
          </thead>
        </table>
        {this.state.fetchedcheck.map(check => (
          <Check key={check.id} check={check} />
        ))}
      </div>
    );
  }
}

export default MyChecks;
