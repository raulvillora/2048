import React, { Component } from 'react';
import '../App.css';
import Dashboard from "./Dashboard";

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonClicked : false,
            dashboard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            //auxiliar_dashboard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            score: 0,
            content: '',
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
      }

    handleKeyPress ( event ) {
        console.log("Arrow Pressed");
        if(event.keyCode === 37){
            console.log("left arrow")
        }
        if(event.keyCode === 38){
            console.log("up arrow")
        }
        if(event.keyCode === 39){
            console.log("rigth arrow")
        }
        if(event.keyCode === 40){
            console.log("down arrow")
        }
        if ( event.key === "ArrowDown" ) {
          console.log( "Down arrow" ); // does not fire
        }
        if ( event.key === "ArrowUp" ) {
          console.log( "Uo arrow" ); // does fire
        }
        if ( event.key === "ArrowLeft" ) {
            console.log( "Left arrow" ); // does fire
          }
          if ( event.key === "ArrowRigth" ) {
            console.log( "Rigth arrow" ); // does fire
          }
    };

    movingCells = () => {
        switch(this.state.content) {

        }

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

        auxiliar_dashboard[Math.floor(Math.random()*auxiliar_dashboard.length)].splice(Math.floor(Math.random()*auxiliar_dashboard.length), 1, randomNumber);
        auxiliar_dashboard[Math.floor(Math.random()*auxiliar_dashboard.length)].splice(Math.floor(Math.random()*auxiliar_dashboard.length), 1, randomNumber2);
            this.setState({
                dashboard: auxiliar_dashboard,
                score: 222,
            })
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