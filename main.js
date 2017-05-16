var turn = "x";
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

var box = document.getElementsByClassName('square');

for(var i = 0; i < box.length; i++) {
box[i].addEventListener('click', function () {

    if (turn === "x") {
        this.innerHTML = "O";
        spaces[this.id] = 1;
        turn = "o";
        console.log(turn);
        console.log(spaces);
    }
    else {
        this.innerHTML = "X";
        spaces[this.id] = 2;
        turn = "x";
        console.log(turn);
        console.log(spaces);
    }
});
}

document.getElementById('restart').addEventListener('click', function() {

for(var i = 0; i < box.length; i++) {
    box[i].innerHTML = "";
    spaces[i +1] = 0;
}
});
