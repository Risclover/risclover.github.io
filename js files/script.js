const navLinks = document.querySelectorAll(".navlink");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.padding = "10px 25px";
    document.getElementById("logo").style.fontSize = "1.68rem";
    document.getElementById("logo").style.color = "#333333";
    document.getElementById("navbar").style.backgroundColor = "hsl(0, 0%, 99%)";
    document.getElementById("navbar").style.borderBottom = "1px solid #cccccc";
    navLinks.forEach((navlink) => {
        navlink.style.color = "black";
        navlink.style.fontSize = ".8rem";
    })

  } else {
    document.getElementById("navbar").style.background = "none";
    document.getElementById("navbar").style.padding = "10px 30px";
    document.getElementById("logo").style.fontSize = "2rem";
    document.getElementById("logo").style.color = "white";
    document.getElementById("navbar").style.borderBottom = "none";
    navLinks.forEach((navlink) => {
        navlink.style.color = "white";
        navlink.style.fontSize = ".8rem";
        navlink.style.marginRight = "30px";
        navlink.style.marginTop = "4px";
    })
  }
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})