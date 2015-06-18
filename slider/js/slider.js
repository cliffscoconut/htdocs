// Define prototypical Slider function
Element.prototype.slider = function(){

    var slider = this
    console.log(slider);
    var wrapper = slider.children[0];
    var slides = wrapper.children;
    var position = 0;
    var width = window.innerWidth;
    var leftButton = document.createElement('div');
    var rightButton = document.createElement('div');

    this.createButtons = function(){

      leftButton.classList.add('left');
      rightButton.classList.add('right');

      slider.appendChild(leftButton);
      slider.appendChild(rightButton);

      leftButton.addEventListener('mousedown',function(){

        if(position > (width * (slides.length - 1)) * -1){
          position = position - width;
          wrapper.style.marginLeft = position + 'px';
        }

      });
//multiplier effect on width of window

      rightButton.addEventListener('mousedown',function(){

        if(position < 0){
          position = position + width;
          wrapper.style.marginLeft = position + 'px';
        }
/*        position = position + 1;
        wrapper.style.marginLeft = width * position * -1 +'px';*/
      });
    }

    this.resize = function(){


        wrapper.style.width = slides.length * width + 'px';
        wrapper.style.height = '100%';

        for(var index=0; index < slides.length; index++) {
          slides[index].style.width = width + 'px';
        }

    }

    this.init = function(){
  //  var init = function() {

      this.createButtons();
      this.resize();

      window.addEventListener('resize',slider.resize);

    };

    this.init();

};
/* end Slider */
