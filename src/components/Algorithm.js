
    // function slide(row) { 
    //     return (Array(4 - (row.filter(val => val)).length).fill(0)).concat(row.filter(val => val));
    // }

    // function combineRow(row) {
    //     return row = slide(combine(slide(row)));
    // }

    // function won() {
    //     for (let i = 0; i < 4; i++) {
    //         for (let j = 0; j < 4; j++) {
    //           if (dashboard[i][j] == 2048) return true;
    //         }
    //       }
    //       return false;
    // }

    // function gameOver() {
    //     for (let i = 0; i < 4; i++) {
    //         for (let j = 0; j < 4; j++) {
    //           if (dashboard[i][j] == 0) return false;
    //           if (i !== 3 && dashboard[i][j] === dashboard[i + 1][j]) return false;
    //           if (j !== 3 && dashboard[i][j] === dashboard[i][j + 1]) return false;
    //         }
    //       }
    //       return true;
    // }

    // //Compare the values of the cells
    // function compareCells(cellA, cellB) {
    //     for (let i = 0; i < 4; i++) {
    //         for (let j = 0; j < 4; j++) {
    //           if (cellA[i][j] !== cellB[i][j]) return true;
    //         }
    //       }
    //       return false;
    // }

    // //Copy value from a cell to another
    // function copyValue(dashboard) {
    //     let auxiliarCell =  [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    //     for (let i = 0; i < 4; i++) {
    //         for (let j = 0; j < 4; j++) auxiliarCell[i][j] = dashboard[i][j];
    //     } return auxiliarCell;
    // }

    // //Transpose
    // function transpose(dashboard) {
    //     let auxiliarCell =  [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    //     for (let i = 0; i < 4; i++) {
    //         for (let j = 0; j < 4; j++) auxiliarCell[i][j] = dashboard[j][i];
    // } return auxiliarCell;

    // //Reverse
    // function flipGrid(dashboard) {
    //     for (let i = 0; i < 4; i++) dashboard[i].reverse();
    //     return dashboard;
    // }


    //   //Add a new number to the dashboard
    // function add() {
    //     let available = [];
    //     for (let i = 0; i < 4; i++) {
    //         for (let j = 0; j < 4; j++) { if(dashboard[m][n] === 0) available.push([n,m]); }
    //     }
    //     if(available.length > 0) {
    //         dashboard[randomn(available).x][randomn(available).y] = random(1);
    //         newDashboard[randomn(available).x][randomn(available).y] = 1;
    //     }
    // }