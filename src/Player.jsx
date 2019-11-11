import React from'react'
class Player extends React.Component
{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h3>{this.props.title}</h3>
        <button>play</button>
        <p>Name: {this.props.name}</p>
        <p>Played number of times: </p>
      </div>
    )
  }
}
export default Player