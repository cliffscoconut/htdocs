var portal = document.getElementById('portal');
var portalButton = document.getElementById('loginButton');

var enterWebsite = function(){

    portal.style.display = "none";
  
};

portalButton.addEventListener('mousedown', enterWebsite);
