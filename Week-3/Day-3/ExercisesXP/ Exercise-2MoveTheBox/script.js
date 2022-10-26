let move;
let left;

function myMove() {
   move =setInterval(moveRight, 1);
    left = 0;
}


const box= document.getElementById('animate');

function moveRight() {
    if (left<=350) {
        left++;
        box.style.left = `${left}px`;
    } else {
        clearInterval(move);
    }
}