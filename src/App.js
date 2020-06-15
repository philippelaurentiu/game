import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameBord from "./component/GameBord";

function App() {
    return (
        <div className="App">
            <div className="Title">
                The Circle Game
            </div>
            <GameBord/>
        </div>

    );
}

export default App;
