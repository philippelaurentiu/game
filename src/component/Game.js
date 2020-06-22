import Knoepfe from "./Knoepfe";
import GameBoard from "./GameBoard";
import React, {Component} from "react";
import App from "../App";

class Game extends Component{

    constructor(props) {
        super(props);
        this.state = {showboard: true};
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
    }

    handleClick() {
        this.setState({
             showboard: false
         });
    }
    handleClick2() {
        window.close();
    }

    handleClick3() {
        alert("Hallo3")
    }

     render() {
        if(this.state.showboard)
         {
             return (
                 <Knoepfe onClick1={this.handleClick} onClick2={this.handleClick2}/>
             );
         }
         return (
             <GameBoard/>
         );
     }

}
export default Game;