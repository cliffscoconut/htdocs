Element.prototype.Navigation = function(){

  var portal = document.getElementById('portal');
  var hamburger = document.createElement('div');
  hamburger.classList.add('hamburger');
  var button = document.getElementById('button');
  var frontpage = document.getElementById('frontpage');
  var imagecontainer = document.getElementById('image-container');

  imagecontainer.appendChild(hamburger);

  var state = false;
  var entered = false;

  var openNavvy = function(ev){

      if(entered == false){
          if(state == false){
              portal.style.margin = "0px 0px 0px 230px";
              state = true;
          } else if(state == true){
              portal.style.margin = "0px 0px 0px 0px";
              state = false;
          }
      } else if(entered == true){
          if(state == false){
              frontpage.style.margin = "0px 0px 0px 230px";
              state = true;
          } else if(state == true){
              frontpage.style.margin = "0px 0px 0px 0px";
              state = false;
          }
      }
  };

  var enterPortal = function(ev){
      portal.style.display = "none";
      frontpage.style.display = "inline-block";
      entered = true;
      frontpage.appendChild(hamburger);
      console.log(ev);
  };


  hamburger.addEventListener('click', openNavvy);
  button.addEventListener('click', enterPortal);




  var init = function(){
    console.log(hamburger);
  };

  init();
}
