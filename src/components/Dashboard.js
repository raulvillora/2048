import React, { Component } from 'react';
import '../App.css';
import Draw from './Draw';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            n: "n",
            auxiliar_dashboard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            score: 0,
        }
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
            <Draw dashboard={this.props.dashboard}/>
        );
    }
}