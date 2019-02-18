import React, { Component } from 'react';
import '../App.css';


export default class Game extends Component {
    render = () => {
        return (
            <div className="container">
                <div className="gameHeading">
                    <div className="newGame">
                        New Game
                    </div>
                    <div className="scorer-value">
                        0
                    </div>
                    <div className="hint">
                        <p>HINT</p> {/* HERE it is need to call a function to know which is the next move and then (or move it or show the player the optimal next move!) */}
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