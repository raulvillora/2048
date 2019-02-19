import React, { Component } from 'react';
import '../App.css';
import Algorithm from './Algorithm';
import Numbers from './Numbers';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboard: [[16,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
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
                    <td className="cell"><div className="number">
                    
                    < Numbers numberName={this.state.n.concat(this.state.dashboard[0][0])} numberNamePrint={this.state.dashboard[0][0]}></Numbers>
                    
                    </div></td>
                    <td className="cell"><div className="number"><div className="n256">256</div></div></td>
                    <td className="cell"><div className="number"><div className="n16">16</div></div></td>
                    <td className="cell"><div className="number"><div className="n16">16</div></div></td>
                </tr>
                <tr>
                    <td className="cell"><div className="number"><div className="n8">8</div></div></td>
                    <td className="cell"><div className="number"><div className="n256">256</div></div></td>
                    <td className="cell"><div className="number"><div className="n16">16</div></div></td>
                    <td className="cell"><div className="number"><div className="n16">16</div></div></td>
                </tr>
                <tr>
                    <td className="cell"><div className="number"><div className="n8">8</div></div></td>
                    <td className="cell"><div className="number"><div className="n256">256</div></div></td>
                    <td className="cell"><div className="number"><div className="n16">16</div></div></td>
                    <td className="cell"><div className="number"><div className="n16">16</div></div></td>
                </tr>
                <tr>
                    <td className="cell"><div className="number"><div className="n8">8</div></div></td>
                    <td className="cell"><div className="number"><div className="n256">256</div></div></td>
                    <td className="cell"><div className="number"><div className="n16">16</div></div></td>
                    <td className="cell"><div className="number"><div className="n16">16</div></div></td>
                </tr>
            </table>

        );
    }
}