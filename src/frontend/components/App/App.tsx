import "./App.css";
import React, { Component } from "react";
import { PlayForm } from "../PlayForm";
import { playTheGame } from "../../../backend/playRPS";
export class App extends Component {
  render() {
    return (
      <div className="App" id="app-element">
        <h1>Rock Paper Scissors!</h1>
        <PlayForm play={playTheGame} />
      </div>
    );
  }
}
