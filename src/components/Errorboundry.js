import React, { Component } from "react";
class Errorboundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(err, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h1>oooops ran into an error</h1>;
    }
    return this.props.children;
  }
}
export default Errorboundry;
