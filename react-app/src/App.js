import React, {Component} from 'react';
import bernies from "./bernies.json";

class App extends Component {
  state = {
    bernies,
    score: 0,
    highscore: 0,
    displayMessage: "Click a Bernie to Begin.",
    chosenArray: []
  };

handlePick = () => {
  if (this.state.chosenArray.includes(0) === false) {
  console.log("Click the Bern");
  //if the current choice isn't in the chosenArray,
  //add the Bernie id to the chosen array
  this.setState({ chosenArray: this.state.chosenArray.concat([0])});
  console.log(this.state);
  //increment the correct guesses by one this.setState:
  this.setState({ score: this.state.score + 1 });
  this.setState({ displayMessage: "You Clicked the Bern!"});
  //reshuffle the cards
} else {
  console.log("You suck!");
}
  //if this Bernie is already in the Bernie Array,
  //reshuffle the cards
  //reset the number of correct guesses
  //if the current guess score is higher than the streak score,
  //set the value of hte streak score
  //({ correct: this.state.correct = 0 })
}

render() {
  return (
    <div>
      {/* SCOREBOARD */}
      <div>
      <div><h1>Click The Bern</h1></div>
      <div>{this.state.displayMessage}</div>
      <div>Current Score: {this.state.score}</div>
      <div>High Score: {this.state.highscore}</div>
      </div>

      {/* CARDS */}
      <div class="card">
      <img src={this.state.bernies[0].image} alt={this.state.bernies[0].id} onClick={this.handlePick} />
      </div>

      </div>
  )
}
   
  }

export default App;
