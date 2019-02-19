import React, { Component } from 'react';
import '../App.css';


export default class Game extends Component {
    render = () => {
        return (


            <div className="container">
                <div className="row">
                    <div className="col-sm">
                            <button type="button" className="btn btn-primary" style={{ margin: '10px 10px', fontFamily: "Avenir" }}>New Game</button>
                    </div>
                    <div className="col-sm">
                        <div className="scorer">
                            <div className="scorerValue">
                                0
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                            <button type="button" className="btn btn-primary" style={{ margin: '10px 10px', fontFamily: "Avenir" }}>HINT</button>
                            {/* HERE it is need to call a function to know which is the next move and then (or move it or show the player the optimal next move!) */}
                    </div>
                </div>

                <div className="gameContainer">

                    <table cellspacing="4" className="dashboard">
                        <tr>
                            <td className="cell"></td>
                            <td className="cell"></td>
                            <td className="cell"></td>
                            <td className="cell"></td>
                        </tr>
                        <tr>
                            <td className="cell"></td>
                            <td className="cell"></td>
                            <td className="cell"></td>
                            <td className="cell"></td>
                        </tr>
                        <tr>
                            <td className="cell"></td>
                            <td className="cell"></td>
                            <td className="cell"></td>
                            <td className="cell"></td>
                        </tr>
                        <tr>
                            <td className="cell"></td>
                            <td className="cell"></td>
                            <td className="cell"></td>
                            <td className="cell"></td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}