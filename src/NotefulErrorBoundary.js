import React, { Component } from "react";

export default class NotefulErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>This part of the app went on vacation! It will be back soon! </h2>
      );
    }
    return this.props.children;
  }
}
