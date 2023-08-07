import React, { Component } from 'react'
import LifeCycle from './components/LifeCycle'
import Form from './components/Form'

export default class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     name: "Jennie",
  //   }
  // }

  // handleChangeProps =()=>{
  //   this.setState({
  //     name: "Blackpink.Jennie",
  //   })
  // }

  render() {
    return (
      <div>
        {/* Demo LifeCycle */}
        {/* <LifeCycle tittle={this.state.name}></LifeCycle>
        <button onClick={this.handleChangeProps}>Change props</button> */}
      <Form></Form>
      </div>
    )
  }
}
