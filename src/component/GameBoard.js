import React, {Component} from 'react';
import GameBall from "./GameBall";
import Timer from "./Timer";

class GameBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={'GameBord'}>
          <Timer startTime={10}/>
          <GameBall handleBall={this.props.handleBall}/>
        </div>
      </div>
    );
  }
}

export default GameBoard
