import React, {Component} from 'react';

class Knoepfe extends Component {

  render() {
    return (

      <div>
        <div className={'Knoepfe'}>
          <div className="Title">
            The Circle Game
          </div>

          <div className={'Startknopf textstyle'} onClick={() => this.props.onClick1()}>
            Start
          </div>

          <div className={'Startknopf textstyle'} onClick={() => this.props.onClick2()}>
            Ende
          </div>

          <div className={'Startknopf textstyle'} onClick={() => this.props.onClick3()}>
            Scoreboard
          </div>

        </div>
      </div>

    );
  }
}


export default Knoepfe
