// declare card vars
var card = document.getElementsByClassName('card')[0];
var cardFront = document.getElementsByClassName('card__side--front')[0];
var cardBack = document.getElementsByClassName('card__side--back')[0];

// init rotateY
cardFront.style.transform = 'rotateY(0deg)';
cardBack.style.transform = 'rotateY(180deg)';
onFront = true;

// when card is onclick, flip the card
card.addEventListener("click", function(){
    if(onFront){
        cardFront.style.transform = 'rotateY(180deg)';
        cardBack.style.transform = 'rotateY(360deg)';
    }else{
        cardFront.style.transform = 'rotateY(0deg)';
        cardBack.style.transform = 'rotateY(180deg)';
    }
    onFront = !onFront;
});
