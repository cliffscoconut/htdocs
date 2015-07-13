var laundry = document.createElement('div');
laundry.classList.add('laundry');
document.getElementById('container').appendChild(laundry);

var wordlist = [];

document.getElementById('search').addEventListener('keyup',function(ev){

    if(ev.keyCode === 13) {
        var word = ev.target.value;
        wordlist.push(word);
        var wordlistasstring = wordlist.join(', ');
        laundry.innerHTML = wordlistasstring;
    }
    console.log(wordlist);
});
