import Knoepfe from "./Knoepfe";
import GameBoard from "./GameBoard";
import React, {Component} from "react";
import ScoreBord from "./ScoreBord";

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showBoard: true,
      showScore: false,
      showGame: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleBall = this.handleBall.bind(this);
    this.scores = [];
    this.sc = 0;
    this.gameOverStarted = false;
  }

  handleClick() {
    this.setState({
      showBoard: false,
      showScore: false,
      showGame: true,
    });
  }

  handleClick2() {
    window.close();
  }

  handleClick3() {
    this.setState({
      showBoard: false,
      showScore: true,
      showGame: false,
    });
  }

  handleBack() {
    this.setState({
      showBoard: true,
      showScore: false,
      showGame: false,
    });
  }

  handleBall() {
    this.sc = this.sc + 1;
  }

  render() {
    if (this.state.showBoard) {
      return (
        <Knoepfe onClick1={this.handleClick} onClick2={this.handleClick2} onClick3={this.handleClick3}/>
      );
    }
    if (this.state.showScore) {
      return (
        <ScoreBord onBack={this.handleBack} scores={this.scores}/>
      );
    }
    if (this.state.showGame) {
      if (this.gameOverStarted === false) {
        this.gameOverStarted = true;
        this.GameOver();
      }
      return (
        <GameBoard handleBall={this.handleBall}/>
      );
    }
  }

  GameOver() {
    setTimeout(() => {
      this.scores.push(this.sc);
      this.gameOverStarted = false;
      this.setState(
        {
          showBoard: true,
          showScore: false,
          showGame: false,
        });
    }, 10000);
  }

}

export default Game;
