import React from 'react'
import Player from './Player'
class GameAdmin extends React.Component{
 constructor(props) {
    super(props);
    this.state={
      name1:null,
      name2:null
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }
  handleChange1(event) {
    this.setState({name1: event.target.value});  
  }
  handleChange2(event) {
    this.setState({name2: event.target.value});  
  }
      render(){
      return(
        <div>
            <h3>Game Admin</h3>
            <Player title={'Player 1'} name={this.state.name1} />
            <Player title={'Player 2'} name={this.state.name2} />
            <p>Set name of player1</p>
            <input type={Text} onChange={this.handleChange1}></input>
            
            <p>Set name of player2</p>
            <input type={Text} onChange={this.handleChange2}></input>
  
        </div>
      )
    }
  }

export default GameAdmin