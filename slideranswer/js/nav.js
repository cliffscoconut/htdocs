Element.prototype.nav = function(){
    var nav = this;
    var btn = document.createElement('div');
    var container = document.getElementById('container')


    this.toggleNav = function(){
        if(container.style.left === '0px') {
            container.style.left = '320px';
        } else {
          container.style.left = '0px';
        }
    };

    this.createButton = function(){
        btn.classList.add('hamburger');
        btn.addEventListener('mousedown',nav.toggleNav);
        container.insertBefore(btn, document.getElementById('slider'));
    };

    this.init = function() {
        this.createButton();
    }

    this.init();


};
