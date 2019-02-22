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

    handleKeyPress = (event) => {

        let flipped = false;
        let rotated = false;
        let played = false;

        if (event.keyCode === 37) {
            played = true;
            console.log("left arrow 37");
            this.setState({
                content: 'left',
                dashboard: this.transposeDashboard(this.state.dashboard),
            });
            this.setState({
                dashboard: this.reverseDashboard(this.state.dashboard),
            });
            rotated = true;
            flipped = true;
            //this.afterPressedKey(this.state.dashboard);
        }
        else if (event.keyCode === 38) {
            played = true;
            console.log("up arrow 38");
            console.log(this.state.dashboard)
                console.log(this.reverseDashboard(this.state.dashboard))
            this.setState({
                content: 'up',
                dashboard: this.reverseDashboard(this.state.dashboard),
            });
            flipped = true;
            // this.afterPressedKey(this.state.dashboard);
        }
        else if (event.keyCode === 39) {
            played = true;
            console.log("rigth arrow 39");
            this.setState({
                content: 'rigth',
                dashboard: this.transposeDashboard(this.state.dashboard),
            });
            rotated = true;
            // this.afterPressedKey(this.state.dashboard);
        }
        else if (event.keyCode === 40) {
            played = true;
            console.log("down arrow 40");
            this.setState({
                content: 'down',
            });
        }

        if (played) {
            let past = this.makeCopy(this.state.dashboard);
            var auxiliar_dashboard_2 = this.makeCopy(this.state.dashboard);;
            for (let i = 0; i < 4; i++) {
                auxiliar_dashboard_2[i] = this.nextMove(this.state.dashboard[i]);
                this.setState({
                    dashboard: auxiliar_dashboard_2,
                });
            }

            let changed = this.comparingDashboards(past, this.state.dashboard);

            if (flipped) {
                console.log(this.state.dashboard)
                console.log(this.reverseDashboard(this.state.dashboard))
                this.setState({
                    dashboard: this.reverseDashboard(this.state.dashboard)
                });
            }
            if (rotated) {
                this.setState({
                    dashboard: this.transposeDashboard(this.state.dashboard)
                });
            }
            if (changed) {
                this.newNumber(this.state.dashboard);
            }
        }
    }

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
            if (a === b) {
                row[i] = a + b;
                this.setState({
                    score: this.state.score + row[i],
                })
                row[i - 1] = 0;
            }
        }
        return row;
    }



    // afterPressedKey = (dashboard) => {
    //     var auxiliar_dashboard = this.makeCopy(this.state.dashboard);
    //     for (let i = 0; i < 4; i++) {
    //         var auxiliar_dashboard_2 = this.state.dashboard;
    //         auxiliar_dashboard_2[i] = this.nextMove(this.state.dashboard[i]);
    //         this.setState({
    //              dashboard: auxiliar_dashboard_2,
    //         });
    //     }
    //     let change = this.comparingDashboards(auxiliar_dashboard,this.state.dashboard);

    //     if(this.state.content === 'up') {
    //          this.setState({
    //              dashboard : this.reverseDashboard(this.state.dashboard),
    //         });
    //         console.log(this.state.dashboard);
    //     }
    //     // if(this.state.content === 'rigth') {
    //     //     this.setState({
    //     //         dashboard : this.transposeDashboard(this.state.dashboard),
    //     //     })
    //     // }
    //     // if(this.state.content === 'left') {
    //     //     this.setState({
    //     //         dashboard : this.reverseDashboard(this.state.dashboard),
    //     //     })
    //     //     this.setState({
    //     //         dashboard : this.transposeDashboard(this.state.dashboard),
    //     //     })
    //     // }

    //     if(change) this.newNumber(this.state.dashboard);

    // }

    //newNumber
    newNumber = (dashboard) => {
        console.log("New number " + this.state.dashboard);
        var cellsAvailable = [];
        var auxiliar_dashboard = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (dashboard[i][j] === 0) {
                    cellsAvailable.push({
                        x: i,
                        y: j
                    });
                }
            }
        }

        if (cellsAvailable.length > 0) {
            let spot = Math.random(cellsAvailable);
            let r = Math.random(1);
            var auxiliar_dashboard_2 = this.state.dashboard;
            auxiliar_dashboard_2[spot.x][spot.y] = r > 0.1 ? 2 : 4;
            this.setState({
                dashboard: auxiliar_dashboard_2,
            });
            auxiliar_dashboard[spot.x][spot.y] = 1;
        }
    }

    comparingDashboards = (a, b) => {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (a[i][j] !== b[i][j]) {
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