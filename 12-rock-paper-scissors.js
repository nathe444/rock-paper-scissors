
let score=JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  ties:0,
  losses:0
};

let intervalId;
let isAutoPlaying=false;

function autoPlay(){
  if(!isAutoPlaying){
    intervalId=setInterval(function(){
      let playerMove=pickComputerMove();
      playGame(playerMove);
    },2000)
    isAutoPlaying=true;
  }
  else {clearInterval(intervalId);
        isAutoPlaying=false;}
}


function playGame(playerMove){
    const computerMove=pickComputerMove();
    let result='';

  if(playerMove==='rock'){
    if(computerMove==='rock') {
    result='tie'; }
    else if (computerMove==='paper') {result='you lost'; }
    else if (computerMove==='scissors') {result='you won'; }
  }

 else if(playerMove==='paper'){
    if(computerMove==='rock') {
    result='you won';}
    else if (computerMove==='paper') {result='tie';}
    else if (computerMove==='scissors') {result='you lost';}
  }

  else if(playerMove==='scissors'){
    if(computerMove==='rock') {
    result='you lost';}
    else if (computerMove==='paper') {result='you won';}
    else if (computerMove==='scissors') {result='tie';}
  }

  if(result==='you won'){score.wins=score.wins+1;}
  else if(result==='tie'){score.ties=score.ties+1;}
  else if(result==='you lost'){score.losses=score.losses+1;} 


  localStorage.setItem('score',JSON.stringify(score));

/*  alert(`you picked ${playerMove}.computer picked ${computerMove}. ${result} 
Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`);*/


  yourscore();
  moves();
  updateScore();

  
function yourscore(){
  document.querySelector('.js-result').innerHTML=result;}

function moves(){
  document.querySelector('.js-moves').innerHTML=`you 
    <img src="images/${playerMove}-emoji.png" class="image">
    <img src="images/${computerMove}-emoji.png" class="image"> computer `;}

}

function updateScore(){
  document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`;
}


function pickComputerMove(){
  const randomNumber=Math.random();
  let computerMove='';

  if(randomNumber<1/3){
    computerMove='rock'; }

  else if(randomNumber>1/3 && randomNumber<2/3){ computerMove='paper'; }

  else {computerMove='scissors';}
  return computerMove;
}
