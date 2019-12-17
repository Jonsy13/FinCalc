import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = props => {
  return (
    <div className="High">
      <div>
        <div className="navigation">
        <div>
          <h2 class="hh">
            WELCOME TO FINCALC <strong>{props.name} </strong>
          </h2>
        </div>
          <ul>
            <Link to="/Home/">Home</Link>
            <Link to="/Team/">Team</Link>
            <Link to="/MyChecks/">My Checks</Link>
            <Link onClick={() => props.onRouteChange("signin")} to="/SignIn/">
              Sign Out
            </Link>
          </ul>
          {"\n"}
        </div>
        
      </div>
    </div>
  );
};

export default Navigation;
