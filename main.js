//console.log('Your JS is linked');
/*----- constants ----- */
/*----- app's state (variables) ----- */

let board;

let turn = 'X';

/*----- cached element references ----- */

const squares = 
Array.from(document.querySelectorAll('#board div'));
/*----- event listeners ----- */

document.getElementById('board').addEventListener('click', handleTurn);
/*----- functions ----- */

function init() {
    board = [
        '','','',
        '','','',
        '','',''
    ];
    render();
};

init();

function render () {
    board.forEach(function(mark, index){
        
        //this sets the text content of the square of the same position to the mark on the board

        squares[index].textContent = mark;
        //console.log(mark, index);
    });
};

function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });

    board[idx] = turn;

    turn = turn === 'X' ? 'O' : 'X';


    render();
};
