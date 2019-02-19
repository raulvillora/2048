import React, { Component } from 'react';
import '../App.css';
import Algorithm from './Algorithm';
import Numbers from './Numbers';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboard: [[16, 32, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            n: "n",
        }
    }
    render = () => {

        // let n = "n";

        // for (let i = 0; i < 4; i++) {
        //     for (let j = 0; j < 4; j++) {
        //         let auxNumber = this.state.dashboard[i][j];
        //         < Numbers numberName={n.concat(this.state.dashboard[i][j])}>{auxNumber}</Numbers>
        //     }
        // }

        return (
            <table cellspacing="4" className="dashboard">
                <tr>
                    <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.state.dashboard[0][0])} numberNamePrint={this.state.dashboard[0][0]}></Numbers></div></td>
                    <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.state.dashboard[0][1])} numberNamePrint={this.state.dashboard[0][1]}></Numbers></div></td>
                    <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.state.dashboard[0][2])} numberNamePrint={this.state.dashboard[0][2]}></Numbers></div></td>
                    <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.state.dashboard[0][3])} numberNamePrint={this.state.dashboard[0][3]}></Numbers></div></td>
                </tr>
                <tr>
                    <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.state.dashboard[1][0])} numberNamePrint={this.state.dashboard[1][0]}></Numbers></div></td>
                    <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.state.dashboard[1][1])} numberNamePrint={this.state.dashboard[1][1]}></Numbers></div></td>
                    <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.state.dashboard[1][2])} numberNamePrint={this.state.dashboard[1][2]}></Numbers></div></td>
                    <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.state.dashboard[1][3])} numberNamePrint={this.state.dashboard[1][3]}></Numbers></div></td>
                </tr>
                <tr>
                    <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.state.dashboard[2][0])} numberNamePrint={this.state.dashboard[2][0]}></Numbers></div></td>
                    <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.state.dashboard[2][1])} numberNamePrint={this.state.dashboard[2][1]}></Numbers></div></td>
                    <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.state.dashboard[2][2])} numberNamePrint={this.state.dashboard[2][2]}></Numbers></div></td>
                    <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.state.dashboard[2][3])} numberNamePrint={this.state.dashboard[2][3]}></Numbers></div></td>
                </tr>
                <tr>
                    <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.state.dashboard[3][0])} numberNamePrint={this.state.dashboard[3][0]}></Numbers></div></td>
                    <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.state.dashboard[3][1])} numberNamePrint={this.state.dashboard[3][1]}></Numbers></div></td>
                    <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.state.dashboard[3][2])} numberNamePrint={this.state.dashboard[3][2]}></Numbers></div></td>
                    <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.state.dashboard[3][3])} numberNamePrint={this.state.dashboard[3][3]}></Numbers></div></td>
                </tr>
            </table>

        );
    }
}