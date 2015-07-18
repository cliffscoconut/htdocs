function displayModal(){
//timer for 15 seconds

//webkit transition that makes modal appear on screen
//by changing z-index
  var modal = document.getElementById('modal');

  function changeModal(){
    modal.style.zIndex = "5";
  };
  setTimeout(changeModal, 5000);
  console.log(modal.style);

  var closeModal = function(){
    modal.style.opacity = "0";
  };

  var button = document.getElementById('closebutton');
  button.addEventListener('mousedown', closeModal);

};

window.onload = displayModal;
