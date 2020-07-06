import React, {Component} from "react";

class ScoreBord extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let array = this.props.scores;
    let items = [];

    for (const [index, value] of array.entries()) {
      items.push(<div className={'textstyle normalText'} key={index}>game {index}: {value}</div>)
    }

    return (
      <div className={'ScoreBord'}>
        <div className={'textstyle normalText'}>Scores</div>
        <br/>
        <br/>
        {items}
        <br/>
        <br/>
        <div className={'textstyle normalText'} onClick={() => this.props.onBack()}>Zurück</div>
      </div>
    );
  }

}

export default ScoreBord;
