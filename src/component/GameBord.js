import React, {Component} from 'react';
import GameBall from "./GameBall";

class GameBord extends Component {

    render() {
        let min = 1;
        let max = window.innerWidth - 50;
        let x = (Math.random() * (max - min)) + min;
        let min2 = 100;
        let max2 = window.innerHeight - 150;
        let y = (Math.random() * (max2 - min2)) + min2;
        let number = parseInt(x, 10) + 1;
        let number2 = parseInt(y, 10) + 1;
        console.log(window.innerWidth)
        return (
            <div>
                <div className={'GameBord'}>
                    <div className="Title">
                        The Circle Game
                    </div>
                    <GameBall posX={number} posY={number2} color={"red"}
                    />
                </div>
            </div>
        );
    }

}

export default GameBord
