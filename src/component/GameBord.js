import React, {Component} from 'react';
import GameBall from "./GameBall";

class GameBord extends Component {

    render() {
        return (
            <div>
                <div className={'GameBord'}>
                    <div className="Title">
                        The Circle Game
                    </div>
                    <GameBall/>
                </div>
            </div>
        );
    }

}

export default GameBord
