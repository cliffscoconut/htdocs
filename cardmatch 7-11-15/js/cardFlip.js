Element.prototype.CardFlip = function(){

    var flip = this;   //What does this do?
    var cards = document.getElementById('container').children;

    this.flipTransition = function(){
        this.style.webkitTransform = 'rotateX(180deg)';
        this.flipped = true;
        console.log(this.flipped);
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
