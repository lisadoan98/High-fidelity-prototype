var menuButton = document.getElementById('main-nav-menu-btn');
var dropdownMenu = document.getElementById('main-nav-dropdown-menu');
var menuExitButton = document.getElementById('dropdown-menu-btn');
var bodyElement = document.getElementById('body');

menuButton.addEventListener('click', function() {
    dropdownMenu.style.display = 'block';
    bodyElement.style.overflow = 'hidden';
});

menuExitButton.addEventListener('click', function() {
    dropdownMenu.style.display = 'none';
    bodyElement.style.overflow = 'scroll';
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var mybutton = document.getElementById("backToTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
