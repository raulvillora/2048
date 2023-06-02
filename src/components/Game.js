import React, { Component } from 'react';
import '../App.css';
import Dashboard from './Dashboard';
import '../swiped-events.js';

export default class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dashboard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
			score: 0
		};
	}

	componentDidMount() {
		this.restartGame();
		document.addEventListener('keydown', this.handleKeyPress);
		document.addEventListener('swiped-left', this.handleGestureLeft);
		document.addEventListener('swiped-right', this.handleGestureRight);
		document.addEventListener('swiped-down', this.handleGestureDown);
		document.addEventListener('swiped-up', this.handleGestureUp);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
		document.removeEventListener('swiped-left', this.handleGestureLeft);
		document.removeEventListener('swiped-right', this.handleGestureRight);
		document.removeEventListener('swiped-down', this.handleGestureDown);
		document.removeEventListener('swiped-up', this.handleGestureUp);
	}

	handleGestureLeft = () => {
		this.setState((prevState) => ({
			dashboard: this.movesCombineMove(prevState.dashboard, this.moveCellsLeft),
		}));
		this.newNumber();
	};

	handleGestureRight = () => {
		this.setState((prevState) => ({
			dashboard: this.movesCombineMove(prevState.dashboard, this.moveCellsRight),
		}));
		this.newNumber();
	};

	handleGestureUp = () => {
		this.setState((prevState) => ({
			dashboard: this.transposeMovesCombineMove(prevState.dashboard, this.moveCellsLeft),
		}));
		this.newNumber();
	};

	handleGestureDown = () => {
		this.setState((prevState) => ({
			dashboard: this.transposeMovesCombineMove(prevState.dashboard, this.moveCellsRight),
		}));
		this.newNumber();
	};

	handleKeyPress = (event) => {
		if (event.keyCode === 37) {
			// Left arrow
			this.setState((prevState) => ({
				dashboard: this.movesCombineMove(prevState.dashboard, this.moveCellsLeft),
			}));
			this.newNumber();
		} else if (event.keyCode === 38) {
			// Up arrow
			this.setState((prevState) => ({
				dashboard: this.transposeMovesCombineMove(prevState.dashboard, this.moveCellsLeft),
			}));
			this.newNumber();
		} else if (event.keyCode === 39) {
			// Right arrow
			this.setState((prevState) => ({
				dashboard: this.movesCombineMove(prevState.dashboard, this.moveCellsRight),
			}));
			this.newNumber();
		} else if (event.keyCode === 40) {
			// Down arrow
			this.setState((prevState) => ({
				dashboard: this.transposeMovesCombineMove(prevState.dashboard, this.moveCellsRight),
			}));
			this.newNumber();
		}
	};

	movesCombineMove = (dashboard, moveCells) => {
		dashboard = moveCells(dashboard);
		dashboard = this.combiningCells(dashboard);
		return moveCells(dashboard);
	};

	moveCellsLeft = (dashboard) => {
		const auxDash = dashboard.map((row) => {
			let newRow = row.filter((cell) => cell !== 0);
			while (newRow.length < 4) {
				newRow.push(0);
			}
			return newRow;
		});
		return auxDash;
	};

	moveCellsRight = (dashboard) => {
		const auxDash = dashboard.map((row) => {
			let newRow = row.filter((cell) => cell !== 0);
			while (newRow.length < 4) {
				newRow.unshift(0);
			}
			return newRow;
		});
		return auxDash;
	};

	transposeMovesCombineMove = (dashboard, moveCells) => {
		const transposedDashboard = this.transposeDashboard(dashboard);
		const transposedResult = this.movesCombineMove(transposedDashboard, moveCells);
		return this.transposeDashboard(transposedResult);
	};

	transposeDashboard = (dashboard) => {
		const transposed = dashboard[0].map((_, colIndex) => dashboard.map((row) => row[colIndex]));
		return transposed;
	};

	differentPosition = (positionCellA, positionCellB, dashboardLength) => {
		let newPositionCellB = positionCellB;
		while (positionCellA === newPositionCellB) {
			newPositionCellB = Math.floor(Math.random() * dashboardLength);
		}
		return newPositionCellB;
	};

	restartGame = () => {
		const auxiliar_dashboard = Array.from({ length: 4 }, () => Array(4).fill(0));
		const randomNumber = Math.random() < 0.9 ? 2 : 4;
		const randomNumber2 = Math.random() < 0.9 ? 2 : 4;
		const randomPosition = Math.floor(Math.random() * auxiliar_dashboard.length);
		const randomPosition2 = Math.floor(Math.random() * auxiliar_dashboard.length);

		auxiliar_dashboard[randomPosition][randomPosition2] = randomNumber;

		const randomPosition3 = Math.floor(Math.random() * auxiliar_dashboard.length);
		const randomPosition4 = Math.floor(Math.random() * auxiliar_dashboard.length);

		const newPosition3 = this.differentPosition(randomPosition, randomPosition3, auxiliar_dashboard.length);
		const newPosition4 = this.differentPosition(randomPosition2, randomPosition4, auxiliar_dashboard.length);

		auxiliar_dashboard[newPosition3][newPosition4] = randomNumber2;

		this.setState({
			dashboard: auxiliar_dashboard,
			score: 0,
		});
	};

	combiningCells = (dashboard) => {
		const combined = dashboard.map((row) => {
			let newRow = row;
			for (let j = 3; j >= 1; j--) {
				let cellA = newRow[j];
				let cellB = newRow[j - 1];
				if (cellA === cellB) {
					newRow[j] = cellA + cellB;
					this.setState((prevState) => ({
						score: prevState.score + newRow[j],
					}));
					newRow[j - 1] = 0;
				}
			}
			return newRow;
		});
		return combined;
	};

	newNumber = () => {
		const { dashboard } = this.state;
		const cellAvailableX = [];
		const cellAvailableY = [];

		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if (dashboard[i][j] === 0) {
					cellAvailableX.push(i);
					cellAvailableY.push(j);
				}
			}
		}

		if (cellAvailableX.length > 0) {
			const randomPosition = Math.floor(Math.random() * cellAvailableX.length);
			const auxDashboard = [...dashboard];
			const randomNumber = Math.random() < 0.9 ? 2 : 4;
			auxDashboard[cellAvailableX[randomPosition]][cellAvailableY[randomPosition]] = randomNumber;

			this.setState({
				dashboard: auxDashboard,
			});
		}

		if (this.gameResult()) {
			alert('GAME OVER');
		}
	};

	gameResult = () => {
		const { dashboard } = this.state;

		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if (dashboard[i][j] === 2048) {
					alert('YOU HAVE WON THE GAME');
				} else if (
					dashboard[i][j] === 0 ||
					(i !== 3 && dashboard[i][j] === dashboard[i + 1][j]) ||
					(j !== 3 && dashboard[i][j] === dashboard[i][j + 1])
				) {
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

	render() {
		const { dashboard, score } = this.state;

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
							<div className="scorerValue">{score}</div>
						</div>
					</div>
				</div>
				<div className="gameContainer">
					<Dashboard dashboard={dashboard} />
				</div>
			</div>
		);
	}
}
