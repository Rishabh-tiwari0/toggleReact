import React, { Component } from "react";
import "./Component.css";

class ToggleCaseSwitch extends Component {
  state = { status: true };

  changeStatusON = () => {
    this.setState({ status: true });
  };
  changeStatusOFF = () => {
    this.setState({ status: false });
  };

  render() {
    const { status } = this.state;
    return (
      <div className={status === false ? "headingDark" : "headinglight"}>
        <h1 className="currentSTATS">{status === false ? "OFF" : "ON"}</h1>
        <button onClick={this.changeStatusON}>ON</button>
        <button onClick={this.changeStatusOFF}>OFF</button>
        <hr />
      </div>
    );
  }
}
export default ToggleCaseSwitch;
