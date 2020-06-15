import React, {Component} from 'react';
import GameBall from "./GameBall";

class GameBord extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className={'GameBord'}>
        <GameBall posX={100} posY={200} />
      </div>
    );
  }

}

export default GameBord
