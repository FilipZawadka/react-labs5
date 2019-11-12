import React from'react'
class Player extends React.Component
{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h3>{this.props.title}</h3>
        <button type="button" onClick={this.props.handleClick} disabled={this.props.play}>{this.props.play ? "This user is playing now" : "play"}</button>
        <p>Name: {this.props.name}</p>
      </div>
    )
  }
}
export default Player