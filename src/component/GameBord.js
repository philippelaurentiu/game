import React, {Component} from 'react';
import GameBall from "./GameBall";

class GameBord extends Component {

  constructor(props) {
    super(props);
  }
  render() {

    const min = 1;
    const max = 400;
    const rand = min + Math.random() * (max - min);

    console.log(rand);
    console.log(parseInt(rand , 10 ));

    return (
      <div className={'GameBord'}>
        <GameBall posX={rand} posY={rand} />
      </div>
    );
  }

}

export default GameBord
