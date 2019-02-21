import React, { Component } from 'react';
import '../App.css';
import Dashboard from "./Dashboard";



export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonClicked : false,
            dashboard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            auxiliar_dashboard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            score: 0,
        }
        
    }

    //Restart the game
    restartGame = () => {

        var aux = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        var randomNumber = Math.random(1) > 0.1 ? 2 : 4;
        var randomNumber2 = Math.random(1) > 0.1 ? 2 : 4;

        aux[Math.floor(Math.random()*aux.length)].splice(Math.floor(Math.random()*aux.length), 1, randomNumber);
        aux[Math.floor(Math.random()*aux.length)].splice(Math.floor(Math.random()*aux.length), 1, randomNumber2);
            this.setState({
                dashboard: aux,
                auxiliar_dashboard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
                score: 222,
            })
    }

    
    render = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <button type="button" className="btn btn-primary" style={{ margin: '10px 10px', fontFamily: "Avenir", fontSize: '2vh' }} onClick={this.restartGame}>
                            New Game
                        </button>
                    </div>
                    <div className="col-sm">
                        <div className="scorer">
                            <div className="scorerValue">
                                {this.state.score}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <button type="button" className="btn btn-primary" style={{ margin: '10px 10px', fontFamily: "Avenir", fontSize: '2vh' }}>HINT</button>
                        {/* HERE it is need to call a function to know which is the next move and then (or move it or show the player the optimal next move!) */}
                    </div>
                </div>

                <div className="gameContainer">
                    <Dashboard dashboard={this.state.dashboard}/>
                </div>
            </div>
        );
    }
}