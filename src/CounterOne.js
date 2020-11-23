import React, { Component } from "react";

export default class CounterOne extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <button onClick={increment}>Counter is : {count}</button>
      </div>
    );
  }
}
