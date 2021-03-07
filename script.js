
const cards=document.querySelectorAll('.memory-card');
const startdiv=document.getElementById("start");    
const lastdiv=document.getElementById("popup1");
let hasFlippedCard=false;
let firsCard,secondCard;
let lockBoard=false;
//------------------------------
 // declare modal
//--------------------------

function flipCard(){
   /*this.classList.toggle('flip');*/
   if(lockBoard) return;
   if(this==firsCard) return;
   this.classList.add('flip');
   if(!hasFlippedCard){
       hasFlippedCard=true;
       firsCard=this;
       return;
   }
   secondCard=this;
   //hasFlippedCard=false;
   checkForMatch();
 
}
  function checkForMatch(){
      if(firsCard.dataset.framework==secondCard.dataset.framework){
          disibleCard();
        
          return;
      }
      
      unFlipCards();
 }
//  function checkForMatch(){
//     let isMatch = firstCard.dataset.name === secondCard.dataset.name;
//     isMatch? disableCard(): unflipCards();
//  }
function disibleCard(){
   
    setTimeout(() =>{
        firsCard.removeEventListener('click',flipCard);
        secondCard.removeEventListener('click',flipCard);
        resetBoard();
        congratulations();
    },500)
    
    
   
}
function unFlipCards(){
    lockBoard=true;
    setTimeout(() => {
        firsCard.classList.remove('flip');
        secondCard.classList.remove('flip');
       // lockBoard=false;
       resetBoard();
       
    },1000)
    
}
function resetBoard(){
    [hasFlippedCard,lockBoard]=[false,false];
    [firsCard,secondCard]=[null,null];
   
   
}
//---------------------------
function congratulations(){
    lastdiv.setAttribute('class','displayShow');
}
//-----------------------
(function suffle(){
    cards.forEach(card => {
       let ramdomPos=Math.floor(Math.random()*12);
        card.style.order=ramdomPos;
  })
})();
function init(){
    startdiv.classList.add("hidden");
    const image = document.createElement('img');
startButton.addEventListener("click", function(){
   for(let i=0; i < cards.length; i++){
     setTimeout(() => {
        card[i].classList.add("card" + i);
      }, i * 150);
   }
});
}
cards.forEach(card =>card.addEventListener('click',flipCard));
