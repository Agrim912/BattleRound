const b1 = document.querySelector('button.one');
const b2 = document.querySelector('button.two');
let p1Score = 0;
let p2Score = 0;
const box1 = document.querySelector("div#A");
const box2 = document.querySelector("div#B");

box1.textContent = p1Score;
box2.textContent = p2Score;

var selectWinner = document.querySelector('#playTo');

selectWinner.addEventListener('change',function(){
  winningScore=parseInt(this.value);
  resett();
})



const reset = document.querySelector('button#reset');

var winningScore = 3;
// var winningScore;

let isGameOver = false;



b1.addEventListener('click', function () {
  if (!isGameOver) {
    p1Score += 1;
    box1.textContent = p1Score;
  }
  if (p1Score == winningScore) {
    isGameOver = true;
    box1.classList.add('winner');
    box2.classList.add('loser');
    box1.textContent = "A Won";
    box2.textContent = "B Lose";
  }

});
b2.addEventListener('click', function () {
  if (!isGameOver) {
    p2Score += 1;
    box2.textContent = p2Score;
  }
  if (p2Score == winningScore) {
    isGameOver = true;
    box2.classList.add('winner');
    box1.classList.add('loser');
    box2.textContent = "B Won";
    box1.textContent = "A Lose";
  }
});
reset.addEventListener('click', resett);

   


function resett() {
  p2Score = 0;
  p1Score = 0;
  box1.textContent = p1Score;
  box2.textContent = p2Score;
  isGameOver = false;
  box1.classList.remove('winner');
  box2.classList.remove('winner');
  box1.classList.remove('loser');
  box2.classList.remove('loser');
}
