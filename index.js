const PLAYFIELD_COLUMNS = 10;
const PLAYFIELD_ROWS = 15;
const TETROMINO_NAMES = [
  'O'
];

function convertPositionToIndex(row, column) {
  return row * PLAYFIELD_COLUMNS + column;
}

let playField;
let tetromino;

function generatePLayField() {
  for (let i = 0; i < PLAYFIELD_ROWS * PLAYFIELD_COLUMNS; i++) {
    const div = document.createElement('div');
    document.querySelector('.grid').append(div);
  }
  
  playField = new Array(PLAYFIELD_ROWS)
  .fill()
  .map(() => new Array(PLAYFIELD_COLUMNS).fill(0));
  //console.table(playField);
}

function generateTetromino() {
  tetromino = {
    name: TETROMINO_NAMES[0],
    row: 3,
    column: 5,
  }
}

generatePLayField();

const cells = document.querySelectorAll('.grid div');

function drawPlayField() {
  console.log(cells);
  cells[15].classList.add(TETROMINO_NAMES);
}

function drawTetromino() {
  for(let row = 0; row < 1; row++) {
    for(let column = 0; column < 1; column++) {
      const cellIndex = convertPositionToIndex(tetromino.row + row, tetromino.column + column);
      cells[cellIndex].classList.add('O');
    }
  }
}

drawPlayField();
