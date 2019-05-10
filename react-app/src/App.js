import React, {Component} from 'react';
import bernies from "./bernies.json";
import BernieCard from "./Components/BernieCard";

class App extends Component {
  state = {
    bernies,
    berniesArray: [],
    score: 0,
    highscore: 0,
    displayMessage: "Click a Bernie to Begin.",
    chosenArray: []
  };


//   //THIS NEEDS HELP


// // write a function to shuffle the bernies
// function shuffle(berniesArray) {
//   for (let i = berniesArray.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     let temp = berniesArray[i];
//     berniesArray[i] = berniesArray[j];
//     berniesArray[j] = temp;
//   }
//     return berniesArray;
// }

// const result = shuffle(berniesArray);
// console.log(JSON.stringify(result));





handlePick = (id) => {
  //IF THIS BERNIE ISNT IN THE CHOSEN ARRAY
  if (this.state.chosenArray.includes(id) === false) {
  console.log("Click the Bern");
  //THEN ADD IT TO THE CHOSEN ARRAY
  this.setState({ 
  chosenArray: this.state.chosenArray.concat(id)});
  console.log(this.state);
  //AND INCREMENT THE SCORE
  this.setState({ score: this.state.score + 1 });
  //AND CHANGE THE MESSAGE
  this.setState({ displayMessage: "You Clicked the Bern!"});
 
  //reshuffle the bernies

} else {
  //THEN RESET THE SCORE, RESET THE ARRAY, AND DISPLAY THE LOSING MESSAGE
  if (this.state.score > this.state.highscore) {
    this.setState({ highscore: this.state.score});
  }
  this.setState({ score: 0 });
  this.setState({ chosenArray: [] });
  this.setState({ displayMessage: "That was not the top 1% of guesses! Try again."});

  //reshuffle the bernies
}

}

render() {
  return (
    <div>
      {/* SCOREBOARD */}
      <div>
      <div><h1>Click The Bern</h1></div>
      <div><h2>{this.state.displayMessage}</h2></div>
      <div><h2>Current Score: {this.state.score}</h2></div>
      <div><h2>High Score: {this.state.highscore}</h2></div>
      </div>

      {/* CARDS */}
      {/* Map an array of bernies */}
      <div>{this.state.bernies.map(bernie => (
      <BernieCard 
        handlePick={this.handlePick}
        id={bernie.id}
        image={bernie.image}
      />
      )
      )}
</div>
       {/* <div class="card">
       <img src={this.state.bernies[0].image} alt={this.state.bernies[0].id} onClick={this.handlePick} />
       </div> */}

      </div>
  )
}
   
  }

export default App;
