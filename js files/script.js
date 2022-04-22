const navLinks = document.querySelectorAll(".navlink");

navLinks.forEach(navlink => {
  navlink.classList.add('me-4');
})

function scrollFunction() {
  let mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
    document.getElementById('navbar').classList.add('bg-class');
    document.getElementById("navbar").style.padding = "10px 25px";
    document.getElementById("logo").style.fontSize = "1.68rem";
    document.getElementById("navbar").style.borderBottom = "1px solid #cccccc";
    navLinks.forEach((navlink) => {
        navlink.style.fontSize = ".8rem";
    })
  } else {
    mybutton.style.display = "none";
    document.getElementById('navbar').style.background = "none";
    document.getElementById('navbar').classList.remove('bg-class');
    document.getElementById("navbar").style.padding = "10px 30px";
    document.getElementById("logo").style.fontSize = "2rem";
    document.getElementById("navbar").style.borderBottom = "none";
    navLinks.forEach((navlink) => {
        navlink.style.fontSize = ".8rem";
        navlink.style.marginRight = "30px";
    })
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

window.onscroll = function() {scrollFunction()};
