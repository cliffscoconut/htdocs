var hamburgerElement = document.getElementById('hamburger');
var navElement = document.getElementById('nav');
var containerElement = document.getElementById('container');

// containerElement.style.marginLeft = "0 px";

hamburgerElement.addEventListener("click", function() {
  console.log(containerElement);
  // console.log(containerElement.style.display);

  if(navElement.style.display == "")
    {
      navElement.style.display = "block";
      console.log(containerElement.style.marginLeft);
      containerElement.style.marginLeft = containerElement.style.marginLeft + navElement.width + "px";
      console.log(containerElement.style.marginLeft);
    }
  else if(navElement.style.display == "block")
    {
      navElement.style.display = "";
      containerElement.style.marginLeft = containerElement.style.marginLeft - navElement.width + "px";
    }



})
