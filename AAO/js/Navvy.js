Element.prototype.Navvy = function(){

  var portal = document.getElementById('portal');
  var hamburger = document.createElement('div');
  hamburger.classList.add('hamburger');
  hamburger.addEventListener('mousedown', openNavvy);
  var leftBar = document.createElement('div');
  leftBar.classList.add('leftBar');




  var openNavvy = function(){

  };

  portal.appendChild(leftBar);
  portal.appendChild(hamburger);

  var init = function(){
    // alert('hello world');
  };

  init();
}
