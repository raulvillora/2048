import React, { Component } from 'react';
import '../App.css';
import Dashboard from "./Dashboard";

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: false,
            dashboard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            //auxiliar_dashboard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            score: 0,
            content: '',
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        this.restartGame();
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(event) {
        // if(event.keyCode === 37){
        //     console.log("left arrow 37")
        // }
        // if(event.keyCode === 38){
        //     console.log("up arrow 38")
        // }
        // if(event.keyCode === 39){
        //     console.log("rigth arrow 39")
        // }
        // if(event.keyCode === 40){
        //     console.log("down arrow 40")
        // }
        if (event.key === "ArrowDown") {
            this.setState({
                content: 'down',
            })
        }
        if (event.key === "ArrowUp") {
            this.setState({
                content: 'up',
                dashboard: this.reverseDashboard(this.state.dashboard),
            })
            this.afterPressedKey(this.state.dashboard);
        }
        if (event.key === "ArrowLeft") {
            this.setState({
                content: 'left',
                dashboard: this.transposeDashboard(this.state.dashboard),
            })
            this.afterPressedKey(this.state.dashboard);
        }
        if (event.key === "ArrowRigth") {
            this.setState({
                content: 'rigth',
                dashboard: this.reverseDashboard(this.state.dashboard),
            });

            this.setState({
                dashboard: this.transposeDashboard(this.state.dashboard),
            })
            this.afterPressedKey(this.state.dashboard);
        }
        //this.movingCells();
    };

    // movingCells = () => {
    //     switch (this.state.content) {

    //     }

    // }

    reverseDashboard = (dashboard) => {
        for (let i = 0; i < 4; i++) {
            dashboard[i].reverse();
          }
          return dashboard;
    }

    transposeDashboard = (dashboard) => {
        var auxiliar_dashboard = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                auxiliar_dashboard[i][j] = dashboard[j][i];
            }
          }
        return auxiliar_dashboard;
    }

    //Move all the non zero cells to one direction
    moveTo = (row) => {
        let arr = row.filter(val => val);
        let missing = 4 - arr.length;
        let zeros = Array(missing).fill(0);
        arr = zeros.concat(arr);
        return arr;
    }

    //Restart the game
    restartGame = () => {
        var auxiliar_dashboard = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        var randomNumber = Math.random(1) > 0.1 ? 2 : 4;
        var randomNumber2 = Math.random(1) > 0.1 ? 2 : 4;

        auxiliar_dashboard[Math.floor(Math.random() * auxiliar_dashboard.length)].splice(Math.floor(Math.random() * auxiliar_dashboard.length), 1, randomNumber);
        auxiliar_dashboard[Math.floor(Math.random() * auxiliar_dashboard.length)].splice(Math.floor(Math.random() * auxiliar_dashboard.length), 1, randomNumber2);
        this.setState({
            dashboard: auxiliar_dashboard,
            score: 0,
        })
    }

    combiningRows = (row) => {
        for (let i = 3; i >= 1; i--) {
            let a = row[i];
            let b = row[i - 1];
            if (a == b) {
              row[i] = a + b;
              this.setState({
                  score: this.state.score + row[i],
              })
              row[i - 1] = 0;
            }
          }
          return row;
    }

    afterPressedKey = (dashboard) => {
        var auxiliar_dashboard = this.makeCopy(this.state.dashboard);
        for (let i = 0; i < 4; i++) dashboard[i] = this.nextMove(dashboard[i]);
        if(this.comparingDashboards(auxiliar_dashboard,dashboard)) newNumber();

    }

    //newNumber
    comparingDashboards = (dashboardA, dashboardB) => {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
              if (dashboardA[i][j] !== dashboardB[i][j]) {
                return true;
              }
            }
          }
          return false;
    }

    makeCopy = (dashboard) => {
        var auxiliar_dashboard = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            auxiliar_dashboard[i][j] = dashboard[i][j];
          }
        }
        return auxiliar_dashboard;
    }

    nextMove = (row) => {
        row = this.moveTo(row);
        row = this.combiningRows(row);
        row = this.moveTo(row);
        return row;
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

                <div className="gameContainer" >
                    <Dashboard dashboard={this.state.dashboard} />
                </div>
            </div>
        );
    }
}