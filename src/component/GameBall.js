import React, {Component} from 'react';

class GameBall extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const position = {
      top: this.props.posY + 'px',
      left: this.props.posX +'px'
    };

    return (
      <div style={position} className={'GameBall'}>

      </div>
    );
  }
};

export default GameBall
