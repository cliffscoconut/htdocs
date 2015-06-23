var hamburgerElement = document.getElementById('hamburger');
var navElement = document.getElementById('nav');
var containerElement = document.getElementById('container');

// containerElement.style.marginLeft = "0 px";
     containerElement.style.marginLeft = "0px";

hamburgerElement.addEventListener("click", function() {
  console.log(containerElement.style.marginLeft);


  // console.log(containerElement.style.display);
  // if(navElement.style.display == "")
  //   {
      // navElement.style.display = "block";
      // console.log(containerElement.style.marginLeft);


      if(containerElement.style.marginLeft == "0px")
        {
        containerElement.style.marginLeft = navElement.clientWidth + "px";
        } else if(containerElement.style.marginLeft = navElement.clientWidth)
        {
        containerElement.style.marginLeft = "0px";
        }


  //     // console.log(containerElement.style.marginLeft);
  //   }
  // else if(navElement.style.display == "block")
  //   {
  //     navElement.style.display = "";
  //     containerElement.style.marginLeft = containerElement.style.marginLeft - navElement.clientWidth + "px";
  //   }
  //


});

// navState = false;
//
// var navInit = function(){
//
//   hamburger.addEventListner('click',function(){
//     if(navState===true){
//       navElement.style.marginLeft = 0 + '%';
//       navState = false;
//     } else if(navState===false){
//       navElement.style.marginLeft = 15 + '%';
//       navState = true;
//     }
//
//   });
// };
//
// navInit();
