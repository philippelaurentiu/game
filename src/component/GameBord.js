import React, {Component} from 'react';
import GameBall from "./GameBall";

class GameBord extends Component {


  render() {
    let x=Math.random();
    return
      <div className={'GameBord'}>
        <GameBall posX={600} posY={200} color={"red"}/>
      </div>
    );
  }

}

export default GameBord
