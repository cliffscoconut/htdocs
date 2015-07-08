Element.prototype.FlipCard = function(){

    var cards = document.getElementsByClassName('cardback');

    var flipCard = function(ev){

        console.log(ev);
        ev.target.style.opacity = "0";

    };

    var init = function(){

        for(i=0; i<cards.length; i++){

            cards[i].addEventListener("mousedown", flipCard);

        }
    };

    init();
};
//when any card is clicked, make that card disappear and reveal current cardfront

//click on a card, flip card
//recognize the cardtype beneath current card
//click on another card, flip card
//recognize the cardtype beneath second card
//if cardtypes are equal, keep cards flipped
//and remove event listener
//if cardtypes are not equal, flip both cards back to show cardbacks
