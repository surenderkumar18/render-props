import React, { Component } from "react";

export default class CounterTwo extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.increament = this.increament.bind(this);
  }

  increament() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <button onMouseOver={this.increament}>
          Counter on Hover is : {this.state.count}
        </button>
      </div>
    );
  }
}
