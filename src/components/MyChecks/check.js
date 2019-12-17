import React from "react";
import "./MyChecks.css";
const check = props => {
  return (
    <div className="h">
    <table className="contain">
      <tbody>
        <tr>
          <td>{Number.parseFloat(props.check.present).toFixed(2)}</td>
          <td>{Number.parseFloat(props.check.future).toFixed(2)}</td>
          <td>{Number.parseFloat(props.check.time).toFixed(2)}</td>
          <td>{Number.parseFloat(props.check.interest).toFixed(2)}</td>
          <td>{Number.parseFloat(props.check.amount).toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default check;
