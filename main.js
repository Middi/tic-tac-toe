var turn = "X";
var spaces = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0
};

// event handler variables
var winner = document.getElementById('winner');
var box = document.getElementsByClassName('square');
var restart = document.getElementsByClassName('restart');
var startmodal = document.getElementById('start');
var bgmodal = document.getElementById('modal-bg');
var X = document.getElementById('X');
var O = document.getElementById('O');


// box event handlers
for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function () {

        if (turn === "X") {
            this.innerHTML = "O";
            spaces[this.id] = "O";
            turn = "O";
            checkWin();
            console.log(turn);
            console.log(spaces);
        }
        else {
            this.innerHTML = "X";
            spaces[this.id] = "X";
            turn = "X";
            checkWin();
            console.log(turn);
            console.log(spaces);
        }
    });
}


function checkWin() {
    if (spaces["1"] === "O" && spaces["2"] === "O" && spaces["3"] === "O") {

        winner.classList.remove("hidden");
        bgmodal.classList.remove("hidden");
        console.log("O WINS!!");
    }
    else {
        console.log("Keep going");
    }

}

// restart button event listener
for (var i = 0; i < restart.length; i++) {
    restart[i].addEventListener('click', function () {
        for (var i = 0; i < box.length; i++) {
            box[i].innerHTML = "";
            spaces[i + 1] = 0;
        }

        winner.className = "hidden";
        startmodal.classList.remove("hidden");
        bgmodal.classList.remove("hidden");
    });

}

X.addEventListener('click', function() {
    //set turn to the opposite so when you click it is your turn
    turn = 'O';
    startmodal.className = "hidden";
    bgmodal.className = "hidden";

});

O.addEventListener('click', function() {
    //set turn to the opposite so when you click it is your turn
    turn = 'X';
    startmodal.className = "hidden";
    bgmodal.className = "hidden";
});