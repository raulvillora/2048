import React, { Component } from 'react';
import '../App.css';
import Dashboard from './Dashboard';
import '../swiped-events.js';

export default class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dashboard: [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ],
			score: 0
		};
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleGestureLeft = this.handleGestureLeft.bind(this);
		this.handleGestureRigth = this.handleGestureRigth.bind(this);
		this.handleGestureUp = this.handleGestureUp.bind(this);
		this.handleGestureDown = this.handleGestureDown.bind(this);
	}

	componentDidMount() {
		this.restartGame();
		document.addEventListener('keydown', this.handleKeyPress);
		document.addEventListener('swiped-left', this.handleGestureLeft);
		document.addEventListener('swiped-right', this.handleGestureRigth);
		document.addEventListener('swiped-down', this.handleGestureDown);
		document.addEventListener('swiped-up', this.handleGestureUp);
	}

	componentWillUnmount() {
		document.addEventListener('keydown', this.handleKeyPress);
		document.addEventListener('swiped-left', this.handleGestureLeft);
		document.addEventListener('swiped-right', this.handleGestureRigth);
		document.addEventListener('swiped-down', this.handleGestureDown);
		document.addEventListener('swiped-up', this.handleGestureUp);
	}

	handleGestureLeft = () => {
		// this.movesCombinesLeft(this.state.dashboard);
		this.setState({
			dashboard: this.movesCombinesLeft(this.state.dashboard)
		});
		this.newNumber();
	};

	handleGestureRigth = () => {
		// this.movesCombinesRigth(this.state.dashboard);
		this.setState({
			dashboard: this.movesCombinesRigth(this.state.dashboard)
		});
		this.newNumber();
	};

	handleGestureUp = () => {
		let auxiliar_dashboard = this.transposeDashboard(this.state.dashboard);
		auxiliar_dashboard = this.movesCombinesLeft(auxiliar_dashboard);
		this.setState({
			dashboard: this.transposeDashboard(auxiliar_dashboard)
		});
		this.newNumber();
	};

	handleGestureDown = () => {
		let auxiliar_dashboard = this.transposeDashboard(this.state.dashboard);
		auxiliar_dashboard = this.movesCombinesRigth(auxiliar_dashboard);
		this.setState({
			dashboard: this.transposeDashboard(auxiliar_dashboard)
		});
		this.newNumber();
	};

	handleKeyPress(event) {
		//Left arrow
		if (event.keyCode === 37) {
			this.setState({
				dashboard: this.movesCombinesLeft(this.state.dashboard)
			});
			this.newNumber();
		} else if (event.keyCode === 38) {
			//Up arrow
			let auxiliar_dashboard = this.transposeDashboard(this.state.dashboard);
			auxiliar_dashboard = this.movesCombinesLeft(auxiliar_dashboard);
			this.setState({
				dashboard: this.transposeDashboard(auxiliar_dashboard)
			});
			this.newNumber();
		} else if (event.keyCode === 39) {
			//Rigth arrow
			this.setState({
				dashboard: this.movesCombinesRigth(this.state.dashboard)
			});
			this.newNumber();
		} else if (event.keyCode === 40) {
			//Down arrow
			let auxiliar_dashboard = this.transposeDashboard(this.state.dashboard);
			auxiliar_dashboard = this.movesCombinesRigth(auxiliar_dashboard);
			this.setState({
				dashboard: this.transposeDashboard(auxiliar_dashboard)
			});
			this.newNumber();
		}
	}

	//Moves to the left, combine and moves to the left again
	movesCombinesLeft = (dashboard) => {
		dashboard = this.moveCellsLeft(dashboard);
		dashboard = this.combiningCells(dashboard);
		return this.moveCellsLeft(dashboard);
	};

	//Move all the zero to the rigth side of the row
	moveCellsLeft = (dashboard) => {
		var auxDash = this.makeCopy(dashboard);
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if (auxDash[i][j] === 0 && auxDash[i][j + 1] === 0) {
					auxDash[i].splice(j, 2); //removes 2 elements from the index j
					auxDash[i].splice(2, 0, 0, 0); //removes 0 elements from index 2 and adds two zeros
				}
				if (auxDash[i][j] === 0) {
					auxDash[i].splice(j, 1);
					auxDash[i].splice(3, 0, 0);
				}
			}
		}
		return auxDash;
	};

	//Moves to the rigth, combine and moves to the rigth again
	movesCombinesRigth = (dashboard) => {
		dashboard = this.moveCellsRigth(dashboard);
		dashboard = this.combiningCells(dashboard);
		return this.moveCellsRigth(dashboard);
	};

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
	};

	transposeDashboard = (dashboard) => {
		var auxiliar_dashboard = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) auxiliar_dashboard[i][j] = dashboard[j][i];
		}
		return auxiliar_dashboard;
	};

	//Make sure the position of the cell of A and B are different
	differentPosition = (positionCellA, positionCellB, auxiliar_dashboard_length) => {
		while (positionCellA === positionCellB) positionCellB = Math.floor(Math.random() * auxiliar_dashboard_length);
		return positionCellB;
	};

	//Restart the game
	restartGame = () => {
		var auxiliar_dashboard = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
		var randomNumber = Math.random() < 0.9 ? 2 : 4,
			randomNumber2 = Math.random() < 0.9 ? 2 : 4;
		var randomPosition = Math.floor(Math.random() * auxiliar_dashboard.length),
			randomPosition2 = Math.floor(Math.random() * auxiliar_dashboard.length);

		auxiliar_dashboard[randomPosition].splice(randomPosition2, 1, randomNumber);

		var randomPosition3 = Math.floor(Math.random() * auxiliar_dashboard.length),
			randomPosition4 = Math.floor(Math.random() * auxiliar_dashboard.length);

		auxiliar_dashboard[this.differentPosition(randomPosition, randomPosition3, auxiliar_dashboard.length)].splice(
			this.differentPosition(randomPosition2, randomPosition4, auxiliar_dashboard.length),
			1,
			randomNumber2
		);

		this.setState({
			dashboard: auxiliar_dashboard,
			score: 0
		});
	};

	//Combine cells
	combiningCells = (dashboard) => {
		for (let i = 0; i < 4; i++) {
			for (let j = 3; j >= 1; j--) {
				let cellA = dashboard[i][j];
				let cellB = dashboard[i][j - 1];
				if (cellA === cellB) {
					dashboard[i][j] = cellA + cellB;
					this.setState({
						score: this.state.score + dashboard[i][j]
					});
					dashboard[i][j - 1] = 0;
				}
			}
		}
		return dashboard;
	};

	//Add new number to the game
	newNumber = () => {
		var auxDash = this.state.dashboard,
			cellAvailableX = [],
			cellAvailableY = [];

		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if (auxDash[i][j] === 0) {
					cellAvailableX.push(i);
					cellAvailableY.push(j);
				}
			}
		}
		var randomPosition = Math.floor(Math.random() * cellAvailableX.length);

		if (cellAvailableX.length > 0) {
			var auxiliar_dashboard_2 = this.makeCopy(this.state.dashboard);
			auxiliar_dashboard_2[cellAvailableX[randomPosition]][cellAvailableY[randomPosition]] =
				Math.random() < 0.9 ? 2 : 4;
			this.setState({
				dashboard: auxiliar_dashboard_2
			});
		}

		//Checking if by adding a new number the user has won or lost the game
		if (this.gameResult()) {
			alert('GAME OVER');
		}
	};

	//Won the game or Game Over
	gameResult = () => {
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if (this.state.dashboard[i][j] === 2048) alert('YOU HAVE WON THE GAME');
				else if (
					this.state.dashboard[i][j] === 0 ||
					(i !== 3 && this.state.dashboard[i][j] === this.state.dashboard[i + 1][j]) ||
					(j !== 3 && this.state.dashboard[i][j] === this.state.dashboard[i][j + 1])
				) {
					//False in case it is possible to add a new number to the dashboard or it is possible to merge two cells
					return false;
				}
			}
		}
		return true;
	};

	makeCopy = (dashboard) => {
		var auxiliar_dashboard = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) auxiliar_dashboard[i][j] = dashboard[i][j];
		}
		return auxiliar_dashboard;
	};

	render = () => {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm">
						<button
							type="button"
							className="btn btn-primary"
							style={{ margin: '10px 10px', fontFamily: 'Avenir', fontSize: '2vh', fontWeight: 'bold' }}
							onClick={this.restartGame}
						>
							New Game
						</button>
					</div>
					<div className="col-sm">
						<div className="scorer">
							<div className="scorerValue">{this.state.score}</div>
						</div>
					</div>
					{/* <div className="col-sm">
                        <button type="button" className="btn btn-primary" style={{ margin: '10px 10px', fontFamily: "Avenir", fontSize: '2vh' }}>HINT</button> */}
					{/* HERE it is need to call a function to know which is the next move and then (or move it or show the player the optimal next move!) */}
					{/* </div> */}
				</div>
				<div className="gameContainer">
					<Dashboard dashboard={this.state.dashboard} />
				</div>
			</div>
		);
	};
}
