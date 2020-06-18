import React, {Component} from 'react';

class GameBall extends Component {

    constructor(props) {
        super(props);
        this.state = {delete: false};
        this.removeBall2 = this.removeBall2.bind(this);

    }

    handleClick() {
        this.setState({
            delete:true
        });
    }

    render() {
        const position = {
            top: this.props.posY + 'px',
            left: this.props.posX + 'px',
            backgroundColor: this.props.color
        };
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
        }, 1000);
}

removeBall2()
{
    this.setState(
        {
            delete: true
        });

}
;

export default GameBall
