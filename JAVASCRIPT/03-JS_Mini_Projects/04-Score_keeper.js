const p1Btn=document.querySelector('#p1Btn')
const p2Btn=document.querySelector('#p2Btn')
const resetBtn=document.querySelector('#resetBtn')
const select=document.querySelector('#select')

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

select.addEventListener('change',function(){
    winningScore=parseInt(select.value)                     //select.value will give string , so parseInt is used to change string into number ,,, example "7" convert into 7
                                                        //or - winningScore=parseInt(this.value) ,, .this respresent select
   reset()                                           
})

resetBtn.addEventListener('click',reset)

function reset(){
    p1Score=0;
    p2Score=0;
    p2Display.textContent=0;
    p1Display.textContent=0;
    isGameOver=false;
}