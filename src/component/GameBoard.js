import React, {Component} from 'react';
import GameBall from "./GameBall";
import Timer from "./Timer";

class GameBoard extends Component {

    render() {
        return (
          <div>
              <div className={'GameBord'}>
                  <div className="Title">
                      The Circle Game
                  </div>
                  <Timer/>
                  <GameBall/>
              </div>
          </div>
        );
    }
}

export default GameBoard
