Element.prototype.FlipCard = function(){

    var flop = this;
    var cards = document.getElementById('cards').children;


    this.flipTransition = function(){
        this.style.webkitTransform = 'rotateX(180deg)';
        this.flipped = true;
        console.log(this.flipped);
    }

    var flipCard = function(ev){

        console.log(ev);
        ev.target.style.opacity = "0";

    };

    this.init = function(){

        for(i=0; i<cards.length; i++){
            var card = cards[i];
            card.flipped = false;
            card.addEventListener("mousedown", this.flipTransition);

        }
    };

    this.init();
};
//when any card is clicked, make that card disappear and reveal current cardfront

//click on a card, flip card
//recognize the cardtype beneath current card
//click on another card, flip card
//recognize the cardtype beneath second card
//if cardtypes are equal, keep cards flipped
//and remove event listener
//if cardtypes are not equal, flip both cards back to show cardbacks
