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

    startGame = () => {
            this.setState({
                dashboard: [[2, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
                auxiliar_dashboard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
                score: 2,
            })
        console.log("Starting the game again!!!")
    }
    render = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <button type="button" className="btn btn-primary" style={{ margin: '10px 10px', fontFamily: "Avenir", fontSize: '2vh' }} onClick={this.startGame}>
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
                    <div class="col-sm">
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