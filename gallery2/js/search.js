Element.prototype.Search = function(){

  var search = this;




  var clearDefault = function(ev){

    console.log(ev);
    ev.target.outerHTML = '<input placeholder="" type="search">';

  };

  search.addEventListener('mousedown', clearDefault);


  this.init = function(){



  };

  this.init();

};
