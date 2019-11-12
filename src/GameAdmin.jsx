import React from 'react'
import Player from './Player'
class GameAdmin extends React.Component{
 constructor(props) {
    super(props);
    this.state={
      name1:null,
      name2:null,
      play1:false,
      play2:false,
      playnum1:0,
      playnum2:0
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }
  handleChange1(event) {
    this.setState({name1: event.target.value});  
  }
  handleChange2(event) {
    this.setState({name2: event.target.value});  
  }
  handleClick1(){
    this.setState({play1:true,
                    play2:false}); 
    this.setState((prevState)=>({playnum1:prevState.playnum1+1}));
  }
  handleClick2(){
    this.setState({play1:false,
                    play2:true}); 
    this.setState((prevState)=>({playnum2:prevState.playnum2+1}));
  }
      render(){
      return(
        <div>
            <h3>Game Admin</h3>
            <Player title={'Player 1'} name={this.state.name1} handleClick={this.handleClick1} play={this.state.play1} playnum={this.state.playnum1}/>
            <Player title={'Player 2'} name={this.state.name2} handleClick={this.handleClick2} play={this.state.play2} playnum={this.state.playnum2}/>
            <p>Set name of player1</p>
            <input type={Text} onChange={this.handleChange1}></input>
            
            <p>Set name of player2</p>
            <input type={Text} onChange={this.handleChange2}></input>
  
        </div>
      )
    }
  }

export default GameAdmin