import React, {Component} from 'react';

class Timer extends Component {

    constructor(props){
        super(props)
        this.state = {
            time: 5,
            start: 5,
            isOn: false
        }
        this.startTimer = this.startTimer.bind(this)
    }

    render() {

        if(this.state.time < 0) {
            return null;
        }

        if (this.state.isOn === false) {
            this.startTimer();
        }

        return (
          <div>
              <h3>timer: {(this.state.time)}</h3>
          </div>
        );

    }

    startTimer() {
        this.timer = setInterval(() => this.setState({
            // time: Date.now() - this.state.start
            isOn: true,
            time: this.state.start--
        }), 1500);

    }
}

export default Timer
