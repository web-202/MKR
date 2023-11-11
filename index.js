let board = [];
let emptyCells = [];

function createBoard() {
 let values = shuffleArray([...Array(25).keys()].map(x => x + 1));
 board = [];
 for (let i = 0; i < 5; i++) {
    let row = [];
    for (let j = 0; j < 5; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('id', cell-$,{i}-$,{j});
      cell.textContent = values.shift();
      cell.style.backgroundColor = getRandomColor();
      cell.addEventListener('click', function() {
        this.textContent = '';
        this.style.backgroundColor = 'transparent';
        emptyCells.push(cell-$,{i}-$,{j});
      });
      row.push(cell);
    }
    board.push(row);
 }
}

function getRandomColor() {
 let letters = '0123456789ABCDEF';
 let color = '#';
 for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}

function shuffleArray(array) {
 for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
 }
 return array;
}

function startGame() {
 emptyCells = [];
 createBoard();
 document.getElementById('board').innerHTML = '';
 for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      document.getElementById('board').appendChild(board[i][j]);
    }
 }
}

startGame();