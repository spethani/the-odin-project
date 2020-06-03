/* CREATE GRID */
const divGrid = document.querySelector('.grid-container');

function createGrid(numRows = 16) {
    for(let i = 0; i < numRows; i++) {
        for(let i = 0; i < numRows; i++) {
            const div = document.createElement('div');
            div.classList.add('grid-square');
            divGrid.appendChild(div);
        }
    }
    const gridSize = 600;
    const squareSize = Math.floor(gridSize/numRows);
    let strColumns = "";
    for(let i = 0; i < numRows; i++) {
        strColumns += squareSize+"px ";
    }
    divGrid.style.gridTemplateColumns = strColumns;
    divGrid.style.gridTemplateRows = strColumns;
}

createGrid();

/* ETCH A SKETCH FUNCTIONALITY */

const resetBtn = document.querySelector('#reset-btn');

resetBtn.addEventListener("click", (e) => {
    while (divGrid.firstChild) {
        divGrid.removeChild(divGrid.lastChild);
    }
    let numRows = prompt("How many rows? Choose number between 1 and 64.");
    createGrid(numRows);
    //gridSquares = document.querySelectorAll('.grid-square');
});

divGrid.addEventListener(("mouseover"), (e) => {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener("mouseover", (e) => {
            gridSquare.classList.add("active");
        });
    });
});





