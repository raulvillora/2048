import React, { Component } from 'react';
import '../App.css';
import Dashboard from "./Dashboard";

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: false,
            dashboard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
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
        //Left arrow
        if (event.keyCode === 37) {
            console.log("left");
            this.setState({
                content: 'left',
                
            });

            let aux = this.moveCellsLeft(this.state.dashboard);
            aux = this.combiningCells(aux);

            this.setState({
                dashboard: this.moveCellsLeft(aux),
            });
            this.newNumber();
        }
        //Up arrow
        else if (event.keyCode === 38) {
            this.setState({
                content: 'up',
            });
            let aux = this.transposeDashboard(this.state.dashboard);
            aux = this.moveCellsLeft(aux);
            aux = this.combiningCells(aux);
            aux = this.moveCellsLeft(aux);

            this.setState({
                dashboard: this.transposeDashboard(aux),
            });
            this.newNumber();
        }

        //Rigth arrow
        else if (event.keyCode === 39) {
            console.log("rigth");
            this.setState({
                content: 'rigth',
            });

            let aux = this.moveCellsRigth(this.state.dashboard);
            aux = this.combiningCells(aux);
            this.setState({
                dashboard: this.moveCellsRigth(aux),
            });
            this.newNumber();
        }
        //Down arrow
        else if (event.keyCode === 40) {
            this.setState({
                content: 'down',
            });

            let aux = this.transposeDashboard(this.state.dashboard);
            aux = this.moveCellsRigth(aux);
            aux = this.combiningCells(aux);
            aux = this.moveCellsRigth(aux);

            this.setState({
                dashboard: this.transposeDashboard(aux),
            });
            this.newNumber();
        }
    }

    //Move all the zero to the left side of the row
    moveCellsLeft = (dashboard) => {
        var auxDash = this.makeCopy(dashboard);
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if ((auxDash[i][j] === 0) && (auxDash[i][j + 1] === 0)) {
                    auxDash[i].splice(j, 2);
                    auxDash[i].splice(2, 0, 0, 0);
                }
                if (auxDash[i][j] === 0) {
                    auxDash[i].splice(j, 1);
                    auxDash[i].splice(3, 0, 0);
                }
            }
        }
        return auxDash;
    }

    //Move all the zero to the left side of the row
    moveCellsRigth = (dashboard) => {
        var auxDash = this.makeCopy(dashboard);
        for (let i = 3; i >= 0; i--) {
            let current = 3;
            for (let j = 3; j >= 0; j--) {
                if (auxDash[i][j] !== 0) {
                    auxDash[i][current] = auxDash[i][j];
                    current--;
                }
            }
            while (current >= 0) {
                auxDash[i][current] = 0;
                current--;
            }
        }
        return auxDash;
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
        });
    }

    combiningCells = (dashboard) => {
        for (let i = 0; i < 4; i++) {
            for (let j = 3; j >= 1; j--) {
                let a = dashboard[i][j];
                let b = dashboard[i][j - 1];
                if (a === b) {
                    dashboard[i][j] = a + b;
                    this.setState({
                        score: this.state.score + dashboard[i][j],
                    });
                    dashboard[i][j - 1] = 0;
                }
            }
        }
        return dashboard;
    }

    newNumber = () => {
        let auxDash = this.state.dashboard;

        
        var cellAvailableX = [];
        var cellAvailableY = [];

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (auxDash[i][j] === 0) {
                    cellAvailableX.push(i);
                    cellAvailableY.push(j);
                }
            }
        }
        var randomPosition = Math.floor(Math.random()*cellAvailableX.length);

        if (cellAvailableX.length > 0) {
            var auxiliar_dashboard_2 = this.makeCopy(this.state.dashboard);
            auxiliar_dashboard_2[cellAvailableX[randomPosition]][cellAvailableY[randomPosition]] = (Math.random(1)) > 0.1 ? 2 : 4;
            this.setState({
                dashboard: auxiliar_dashboard_2,
            });                        
        }
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