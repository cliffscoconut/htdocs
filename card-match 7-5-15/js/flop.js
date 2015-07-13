//
// Element.prototype.Flop = function () {
//
//   var flop = this;
//   var flipButton = document.getElementById('flipBack');
//   var cards = document.getElementById('cards').children;
//   //flip card to show suit
//   this.flipTransition = function(){
//     this.style.webkitTransform = 'rotateX(180deg)';
//   };
//   //flip card to hide suit
//   this.flipEmBack = function(){
//     for(var i=0;i<cards.length;i++){
//       var card = cards[i];
//         card.style.transform = 'rotateX(0deg)';
//     }
//   };
//
//   this.init = function(){
//     //add event listener to each card on the page
//     for(var i=0;i<cards.length;i++){
//       var card = cards[i];
//       card.addEventListener('click', this.flipTransition);
//     }
//   //event listener for flip back button
//   flipButton.addEventListener('click', this.flipEmBack);
//
//   };
//
//   this.init();
//
// };
