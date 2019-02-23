import React, { Component } from 'react';
import '../App.css';
import Numbers from './Numbers';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboard: null,
            n: "n",
            auxiliar_dashboard: null,
            score: 0,
            content: '',
        }

    }

    updateDashboard = () => {
         this.setState({
            dashboard : this.props.dashboard,
        })
        console.log("dashboard state is: " + this.state.dashboard);
    }

    render = () => {

        return (
               
            <table cellSpacing="4" className="dashboard">
            <tbody>
            <tr>
                <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.props.dashboard[0][0])} numberNamePrint={this.props.dashboard[0][0]}></Numbers></div></td>
                <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.props.dashboard[0][1])} numberNamePrint={this.props.dashboard[0][1]}></Numbers></div></td>
                <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.props.dashboard[0][2])} numberNamePrint={this.props.dashboard[0][2]}></Numbers></div></td>
                <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.props.dashboard[0][3])} numberNamePrint={this.props.dashboard[0][3]}></Numbers></div></td>
            </tr>
            <tr>
                <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.props.dashboard[1][0])} numberNamePrint={this.props.dashboard[1][0]}></Numbers></div></td>
                <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.props.dashboard[1][1])} numberNamePrint={this.props.dashboard[1][1]}></Numbers></div></td>
                <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.props.dashboard[1][2])} numberNamePrint={this.props.dashboard[1][2]}></Numbers></div></td>
                <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.props.dashboard[1][3])} numberNamePrint={this.props.dashboard[1][3]}></Numbers></div></td>
            </tr>
            <tr>
                <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.props.dashboard[2][0])} numberNamePrint={this.props.dashboard[2][0]}></Numbers></div></td>
                <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.props.dashboard[2][1])} numberNamePrint={this.props.dashboard[2][1]}></Numbers></div></td>
                <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.props.dashboard[2][2])} numberNamePrint={this.props.dashboard[2][2]}></Numbers></div></td>
                <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.props.dashboard[2][3])} numberNamePrint={this.props.dashboard[2][3]}></Numbers></div></td>
            </tr>
            <tr>
                <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.props.dashboard[3][0])} numberNamePrint={this.props.dashboard[3][0]}></Numbers></div></td>
                <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.props.dashboard[3][1])} numberNamePrint={this.props.dashboard[3][1]}></Numbers></div></td>
                <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.props.dashboard[3][2])} numberNamePrint={this.props.dashboard[3][2]}></Numbers></div></td>
                <td className="cell"><div className="number">< Numbers numberName={this.state.n.concat(this.props.dashboard[3][3])} numberNamePrint={this.props.dashboard[3][3]}></Numbers></div></td>
            </tr>
            </tbody>
        </table>
        );
    }
}