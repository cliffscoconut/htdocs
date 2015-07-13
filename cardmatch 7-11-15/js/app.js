var Card = function(card) {
    this.model = card; //What does this do?
};

var Controller = function(){
    this.model = [];
};

var View = function(elem,parent,className,elem2,elem3){
    var self = this;
    this.element = document.createElement(elem);
    this.element.classList.add(className);
//flipCard
    // this.element.addEventListener("mousedown", this.flipTransition);
    parent.appendChild(self.element);
    var cardback = document.createElement(elem2);
    var cardfront = document.createElement(elem3);
    cardback.classList.add('cardback');
    cardfront.classList.add('cardfront');
    self.element.appendChild(cardback);
    self.element.appendChild(cardfront);
}


Controller.prototype =  {
    createView : function(){
        this.model.forEach(function(card){
            var v = new View('li',document.getElementById('container'),'card','div','div');
        });
    },

    fetchCards : function(){
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.open('GET','./model/cards.json');
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
              console.log(xhr.responseText);
              var model = JSON.parse(xhr.responseText);
              console.log(model);
              model.cards.forEach(function(card){
                  self.model.push(new Card(card));//how does this relate to line 2?
              });
              self.createView();
            }
        };

        xhr.send();
    }
};

var newGame = new Controller();
newGame.fetchCards();


for(var i=0; i<4; i++){

    var card = document.createElement('div');
    document.getElementById('container').appendChild(card);
}







// var cards = document.getElementById('container');
// console.log(cards);
// cards.CardFlip();
