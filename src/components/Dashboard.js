import React, { Component } from 'react';
import '../App.css';
import Algorithm from './Algorithm';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboard: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        }
    }
    render = () => {
        // let colorName = ".number-";
        // for (let i = 0; i < 4; i++) {
        //     <tr> for (let j = 0; j < 4; j++) {
        //         colorName+=  + this.dashboard[i][j].toString
        //         <td className="cell">
        //             <div className="number-">
        //         </td>
        //     }</tr>
        // }
        

        return (
            <table cellspacing="4" className="dashboard">
                {}
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