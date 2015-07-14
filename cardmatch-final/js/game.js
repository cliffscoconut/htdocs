Array.prototype.shuffle = function(){
    var counter = this.length, temp, index;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = this[counter];
        this[counter] = this[index];
        this[index] = temp;
    }

    return this;

};

var movesArr = [];


Element.prototype.showCard = function(){
  this.style.transform = 'rotateX(180deg)';
  movesArr.push(this);
  setTimeout(function(){checkMatch()},2000);
};

var Game = function() {
  this.matchedCards = 0;
  this.cardsArr = [];
  this.cardsContainer = document.getElementById('cards');
  this.suits = ['heart','diamond','club','spade'];
};

Game.prototype = {

  createCards: function(numberOfCards){
    for(var i=0;i<this.suits.length;i++){
      for(var j=0;j<numberOfCards/4;j++){
        var card = new Card(this.suits[i]);
        myGame.cardsArr.push(card);
      }
    }

    myGame.cardsArr = myGame.cardsArr.shuffle();
    for(var i=0;i<this.cardsArr.length;i++){
      var li = this.cardsArr[i].li;
      this.cardsContainer.appendChild(li);
    }
  }


}
var Card = function(suit) {
  this.frontOfCard = '<div class="'+suit+'"></div>';
  this.backOfCard = '<div class="flipped"></div>';
  this.li = document.createElement('li');
  this.li.dataset.suit = suit;
  this.li.dataset.matched = false;
  this.li.classList.add('card');
  this.li.innerHTML = this.frontOfCard+this.backOfCard;
  this.li.addEventListener('click',this.li.showCard);

};


var myGame = new Game();
myGame.createCards(16);

var checkMatch = function(){
  if((movesArr.length%2)===0){
    var movesArrLast = movesArr.length-1;
    var firstCard = movesArr[movesArrLast-1];
    var secondCard = movesArr[movesArrLast];
    if(secondCard.dataset.suit === firstCard.dataset.suit){
      secondCard.dataset.matched = true;
      firstCard.dataset.matched = true;
    }else {
      firstCard.style.transform = 'rotateX(0deg)';
      secondCard.style.transform = 'rotateX(0deg)';
    }
  }
}
