var button = document.querySelector('button');
var nav = document.querySelector('.menu');

button.addEventListener('click',function(){
  mClass = nav.className;
  if (mClass === "menu closed") {
    nav.className = "menu open";
    button.innerText = "X";
  } else {
    nav.className = "menu closed";
    button.innerText = "🍔";
  }
},false);

var link = document.querySelectorAll('.menuList a');
console.log(link);

for(var i=0; i<link.length; i++) {
  link[i].addEventListener('click', function(){
    nav.className = "menu closed";
    button.innerText = "Menu Open";
  },false);
};