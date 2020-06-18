import React, {Component} from 'react';

class GameBall extends Component {

    constructor(props) {
        super(props);
        this.state = {delete: false};
        this.removeBall2 = this.removeBall2.bind(this);
this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            delete: true
        });
    }

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
        if (!this.state.delete) {
            this.removeBall();
            return (
                <div style={position} className={'GameBall'} onClick={this.handleClick}></div>
            );
        } else {
            return null;
        }

        if (this.state.delete) {
            return null;
        }
    }

    removeBall() {
        setTimeout(() => {
            this.setState(
                {
                    delete: true
                });
        }, 5000);
    }

    removeBall2() {
        this.setState(
            {
                delete: true
            });

    }
    ;

}
export default GameBall
