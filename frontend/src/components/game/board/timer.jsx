import React from "react";
import '../../../stylesheets/root.scss'

class Timer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      count: 60
    }
  }

  render(){
    let time = setTimeout(() => {
      this.setState({ count: this.state.count - 1 })
    }, 1000)


    return (
      <div>{time}</div>
    )
  }
  
}

export default Timer