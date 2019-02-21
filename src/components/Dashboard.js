import React, { Component } from 'react';
import '../App.css';
import Numbers from './Numbers';
import ArrowKeysReact from 'arrow-keys-react';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            n: "n",
            auxiliar_dashboard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            score: 0,
            content: '',
        }

        ArrowKeysReact.config({
            left: () => {
              this.setState({
                content: 'left'
              });
            },
            right: () => {
              this.setState({
                content: 'right'
              });
            },
            up: () => {
              this.setState({
                content: 'up'
              });
            },
            down: () => {
              this.setState({
                content: 'down'
              });
            }
          });
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.buttonClicked===true) this.updateDashboard();
    }
    //Start a new Game
    startGame = () => {
        this.setState({
            dashboard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            auxiliar_dashboard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            score: 0,
        })
        // add();
        // add();
        // //update the dashboard
        // <Draw dashboard={this.props.dashboard}/>
    }

    updateDashboard = () => {
         this.setState({
            dashboard : this.props.dashboard,
        })
        console.log("dashboard state is: " + this.state.dashboard);
    }


    render = () => {

        // function add() {
        //     let available = [];
        //     for (let i = 0; i < 4; i++) {
        //         for (let j = 0; j < 4; j++) { if(this.state.dashboard[i][j] === 0) available.push([i,j]); }
        //     }

        //     if(available.length > 0) {
        //         let spot = Math.random(available);
        //         let r = Math.random(1);
        //         this.setState({
        //             dashboard : this.state.dashboard[spot.i][spot.j], 
        //             dashboard : r > 0.1 ? 2 : 4,
        //             auxiliar_dashboard : this.state.auxiliar_dashboard[spot.x][spot.y],
        //             auxiliar_dashboard : 1,
        //         })                 
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