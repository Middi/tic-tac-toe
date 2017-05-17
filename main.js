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
var winner = document.getElementById('winner');

var box = document.getElementsByClassName('square');
var restart = document.getElementsByClassName('restart');

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
        console.log("O WINS!!");
    }
    else {
        console.log("Keep going");
    }

}


for (var i = 0; i < restart.length; i++) {
    restart[i].addEventListener('click', function () {
        for (var i = 0; i < box.length; i++) {
            box[i].innerHTML = "";
            spaces[i + 1] = 0;
        }

        winner.className = "hidden";
    });

}