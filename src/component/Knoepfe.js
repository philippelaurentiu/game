import React, {Component} from 'react';


class Knoepfe extends Component {



        handleClick()
        {
            console.log('Start');
        }


        render()
        {
            return (

                <div>
                    <div className={'Knoepfe'}>
                        <div className="Title">
                            The Circle Game
                        </div>
                        <div className={'Startknopf'}>

                            <p className={"Start"}>
                                Start
                            </p>
                        </div>

                        <div className={'Endeknopf'}>
                            <p className={"Ende"}>
                                Ende
                            </p>
                        </div>

                        <div className={'Scoreknopf'}>
                            <p className={"Scoreboard"}>
                                Scoreboard
                            </p>
                        </div>
                    </div>
                </div>

            );
        }
    }



    export default Knoepfe
