import React, { Component } from "react";

export default class LifeCycle extends Component {
  // B1: Để khởi tạo thì sử dụng constructor
  constructor(props) {
    super(props);
    console.log("1. Component được khởi tạo");
  }
  //   Bước 2: Demo componentWillMount()
  componentWillMount() {
    console.log("2. ComponentWillMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("5. componentWillReceiveProps", nextProps);
  }
  shouldComponentUpdate() {
    return false;
  }
  componentWillUpdate() {
    console.log("7. componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("8. componentDidUpdate");
  }

  render() {
    console.log("3. render");
    return <div>Hit chiu with that ddu du ddu</div>;
  }
  componentDidMount() {
    console.log("4. ComponentDidMount");
  }
}
