//console.log('Your JS is linked');
/*----- constants ----- */

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
/*----- app's state (variables) ----- */

let board;

let turn = 'X';

let win;

let x = 0;
let o = 0;

/*----- cached element references ----- */

const squares = 
Array.from(document.querySelectorAll('#board div'));

const messages = document.querySelector('h2');
const scores = document.querySelector('h3');
/*----- event listeners ----- */

document.getElementById('board').addEventListener('click', handleTurn);

document.getElementById('reset-button').addEventListener('click',init);
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
    board.forEach(function(val, idx){
        
        //this sets the text content of the square of the same position to the mark on the board

        squares[idx].textContent = val;
        //console.log(mark, index);
    });
    messages.textContent = win === 'T' ? `That's a tie!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
    scores.textContent = `X:${x} O:${o}`;
};

function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });

    board[idx] = turn;

    win = getWinner();

    turn = turn === 'X' ? 'O' : 'X';


    render();
    scoreboard();
};

function getWinner() {

    let winner = null;

    winningCombos.forEach(function(combo, index) {

        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
            winner = board[combo[0]];
        }
    });
    return winner ? winner : board.includes('') ? null : 'T';
};

function scoreboard() {
    if (win === 'X'){
        x+=1;
        console.log('X'+ x);
    } else if (win === 'O'){
        o+=1;
        console.log('O'+ o);
    }
}