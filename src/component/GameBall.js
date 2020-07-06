import React, {Component} from 'react';

class GameBall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            delete: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            score: this.state.score + 1,
            delete: true
        });
        this.props.handleBall();
    }

    render() {
        let min = 1;
        let max = window.innerWidth - 75;
        let x = (Math.random() * (max - min)) + min;
        let min2 = 100;
        let max2 = window.innerHeight - 175;
        let y = (Math.random() * (max2 - min2)) + min2;
        let number = parseInt(x, 10) + 1;
        let number2 = parseInt(y, 10) + 1;

        const position = {
            top: number2 + 'px',
            left: number + 'px',
            backgroundColor: this.props.color
        };


        return (
            <div style={position} className={'GameBall'} onClick={this.handleClick}></div>
        );

    }

}

export default GameBall
