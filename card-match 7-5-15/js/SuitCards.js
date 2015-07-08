Element.prototype.SuitCards = function(){

  var cardSuits = document.getElementsByClassName('cardfront');
  var suits = ['spade', 'heart', 'club', 'diamond'];

  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
  };

  var init = function(){
      var numberSpades = 0;
      var numberHearts = 0;
      var numberClubs = 0;
      var numberDiamonds = 0;

        for(i=0; i<cardSuits.length; i++){
            cardSuits[i].children[0].setAttribute('id', suits[getRandomInt(0, 4)]);

            if (cardSuits[i].children[0].id == "spade"){
                numberSpades = numberSpades + 1;
            }
            if (cardSuits[i].children[0].id == "heart"){
                numberHearts = numberHearts + 1;
            }
            if (cardSuits[i].children[0].id == "club"){
                numberClubs = numberClubs + 1;
            }
            if (cardSuits[i].children[0].id == "diamond"){
                numberDiamonds = numberDiamonds + 1;
            }
            if (numberSpades == 5){
                numberSpades = numberSpades - 1;
                init();
            }
            if (numberHearts == 5){
                numberHearts = numberHearts - 1;
                init();
            }
            if (numberClubs == 5){
                numberClubs = numberClubs - 1;
                init();
            }
            if (numberDiamonds == 5){
                numberDiamonds = numberDiamonds - 1;
                init();
            }
        }

      console.log(numberSpades);
      console.log(numberHearts);
      console.log(numberClubs);
      console.log(numberDiamonds);
  };

  init();

};
