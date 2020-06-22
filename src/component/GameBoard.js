import React, {Component} from 'react';
import GameBall from "./GameBall";

class GameBoard extends Component {

    constructor(props){
        super(props)
        this.state = {
            time: 0,
            isOn: false,
            start: 0
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    render() {
        if(this.state.isOn === false){
            this.startTimer();
            return (
                <div>
                    <div className={'GameBord'}>
                        <div className="Title">
                            The Circle Game
                        </div>
                        <h3>timer: {(this.state.time)}</h3>
                        <GameBall/>
                    </div>
                </div>
            );
        }

    }

    startTimer() {
        this.setState({
            isOn: true,
            time: this.state.time,
            start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1);
    }

    stopTimer() {
        this.setState({isOn: false})
        clearInterval(this.timer)
    }

    resetTimer() {
        this.setState({time: 0, isOn: false})
    }

    Timer() {
        setTimeout(() => {
            this.setState(
                {
                    showboard: true
                });
        }, 5000);
    }

}

export default GameBoard
