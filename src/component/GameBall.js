import React, {Component} from 'react';

class GameBall extends Component {

  constructor(props) {
    super(props);

    this.state = {
      delete: false
    };

    this.removeBallByClick = this.removeBallByClick.bind(this);
  }

  render() {

    const position = {
      top: this.props.posY + 'px',
      left: this.props.posX +'px',
    };

    if (!this.state.delete) {
      this.removeBallByTime();
      return (
        <div style={position} className={'GameBall'} onClick={this.removeBallByClick}>
        </div>
      );
    }

    if (this.state.delete) {
      return null;
    }
  }

  removeBallByTime () {
    setTimeout(() => {
      this.setState(
        {delete: true
        });
    }, 5000);
  }

  removeBallByClick() {
    this.setState(
      {
        delete: true
      });
  }

}

export default GameBall
