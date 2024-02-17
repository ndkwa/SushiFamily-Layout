window.onscroll = function() {stickyHeader()};

var header = document.querySelector(".header__categories");

var categoryImages = document.querySelectorAll(".category__image");
var to_padding_div_Text = document.querySelectorAll(".category__item");
var zero = document.querySelector(".zero");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
    categoryImages.forEach(function(image) {
      image.classList.add("hidden");
    });

    to_padding_div_Text.forEach(function(div) {
      div.classList.add("scrumbled_header");
    });
    zero.classList.add("padd");

    
  } else {
    header.classList.remove("sticky");
    categoryImages.forEach(function(image) {
      image.classList.remove("hidden");
    });

    to_padding_div_Text.forEach(function(div) {
      div.classList.remove("scrumbled_header");
    });
    zero.classList.remove("padd");

  }
}


// шоб менялось при наведении ю...
const itemBuyBtns = document.querySelectorAll('.item__buy_btn');

itemBuyBtns.forEach(function(btn) {
    btn.addEventListener('mouseover', function() {
        this.classList.add('hovered');
    });

    btn.addEventListener('mouseout', function() {
        this.classList.remove('hovered');
    });
});