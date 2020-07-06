import React, {Component} from 'react';

class Timer extends Component {

    constructor(props){
        super(props);
        this.state = {
            time: 5,
            start: Date.now(),
            isOn: false
        };
        this.startTimer = this.startTimer.bind(this)
    }

    render() {
        if (this.state.isOn === false) {
            this.startTimer(this.state.time);
        }

        return (
          <div>
              <h3>timer: {(this.state.time)}</h3>
          </div>
        );
    }

    startTimer() {
        this.timer = setInterval(() => this.setState({
            time: this.props.startTime - Math.round((Date.now() - this.state.start) / 1000),
            isOn: true,
        }), 1000);
    }
}

export default Timer
