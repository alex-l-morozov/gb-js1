const FIELD_SIZE_X = 10;
const FIELD_SIZE_Y = 10;
const BOARD_TEXT = [
    [' ','A','B','C','D','E','F','G','H',' '],
    ['1','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;','1'],
    ['2','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','2'],
    ['3',' ',' ',' ',' ',' ',' ',' ',' ','3'],
    ['4',' ',' ',' ',' ',' ',' ',' ',' ','4'],
    ['5',' ',' ',' ',' ',' ',' ',' ',' ','5'],
    ['6',' ',' ',' ',' ',' ',' ',' ',' ','6'],
    ['7','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','7'],
    ['8','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;','8'],
    [' ','A','B','C','D','E','F','G','H',' ']
];

;

function init(){
    prepareGame();
}

function prepareGame() {
    let board = document.createElement('table');
    for (let i = 0; i < FIELD_SIZE_X; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < FIELD_SIZE_Y; j++) {
            let cell = document.createElement('td');
            if(i == 0 || j == 0 || i == FIELD_SIZE_X - 1 || j == FIELD_SIZE_Y - 1){
                if(j == FIELD_SIZE_Y - 1 || i == 0){
                    cell.className += 'rotate ';
                }
            } else{
                cell.className = (i + j) % 2 == 0 ? 'cell-white' : 'cell-black';
            }
            cell.innerHTML = BOARD_TEXT[i][j];
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
    document.getElementById('board').appendChild(board);
}