import React, { Component } from 'react';
import bernies from "./bernies.json";
import BernieCard from "./Components/BernieCard";

//SET THE DEFAULT STATE
class App extends Component {
  state = {
    score: 0,
    highscore: 0,
    displayMessage: "Click a Bernie to Begin.",
    chosenArray: []
  };

  //THIS FUNCTION WILL SHUFFLE THE BERNIES
  shuffle = bernies => {
    for (let i = bernies.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = bernies[i];
      bernies[i] = bernies[j];
      bernies[j] = temp;
    }
    return bernies;
  }

  //WHEN A BERNIE IS CLICKED
  handlePick = id => {

    //IF THIS BERNIE ISNT IN THE CHOSENARRAY
    if (this.state.chosenArray.includes(id) === false) {

      //THEN ADD IT TO THE CHOSEN ARRAY, INCREMENT THE SCORE, CHANGE MESSAGE
      this.setState({
        chosenArray: this.state.chosenArray.concat(id),
        score: this.state.score + 1,
        displayMessage: "You Felt the Bern!"
      });

      //THEN SHUFFLE THE BERNIES
      this.shuffle(bernies);

      //UPDATE THE HIGH SCORE IF YOU ARE IN THE LEAD
      if (this.state.score >= this.state.highscore) {
        this.setState({ highscore: this.state.score + 1});
      }

    } else {
      
       //RESET THE SCORE, RESET THE ARRAY, AND DISPLAY THE LOSING MESSAGE
      this.setState({
        score: 0,
        chosenArray: [],
        displayMessage: "That was not the top 1% of guesses! Try again."
      });

      this.shuffle(bernies);
    }
  }

  //PRINTS WHAT THE USER SEES
  render() {
    return (
      <div>
        {/* SCOREBOARD - DYNAMICALLY DISPLAYS SCORES*/}
        <div>
          <div><h1>Click The Bern</h1></div>
          <div><h2>{this.state.displayMessage}</h2></div>
          <div><h2>Current Score: {this.state.score}</h2></div>
          <div><h2>High Score: {this.state.highscore}</h2></div>
        </div>

        {/* Map the bernies array. Each individual bernie in the array gets it's own card. */}
        <div>{bernies.map(bernie => (
          <BernieCard
            handlePick={this.handlePick}
            id={bernie.id}
            image={bernie.image}
          />
        )
        )}
        </div>

      </div>
    )
  }

}

//EXPORT App SO INDEX CAN RENDER IT TO THE DOM
export default App;
