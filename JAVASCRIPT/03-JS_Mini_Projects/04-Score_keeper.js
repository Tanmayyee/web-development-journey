const p1Btn=document.querySelector('#p1Btn')
const p2Btn=document.querySelector('#p2Btn')
const resetBtn=document.querySelector('#resetBtn')

let p1Score=0;
let p2Score=0;
let winningScore=5;
let isGameOver =false;

p1Btn.addEventListener('click',function(){
    if(!isGameOver){
        p1Score += 1;
    p1Display.textContent=p1Score
    }
    if(p1Score === winningScore ){
        isGameOver=true; 
    }
})



p2Btn.addEventListener('click',function(){
    if(!isGameOver){
        p2Score += 1;
    p2Display.textContent=p2Score
    }
    if(p2Score === winningScore ){
        isGameOver=true; 
    }
})