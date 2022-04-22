function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      document.getElementById("navbar").style.padding = "10px 25px";
      document.getElementById("logo").style.fontSize = "1.68rem";
      document.getElementById("navbar").style.backgroundColor = "hsl(0, 0%, 99%)";
      document.getElementById("navbar").style.borderBottom = "1px solid #cccccc";
      navLinks.forEach((navlink) => {
          navlink.classList.remove('text-white');
          navlink.classList.add('text-dark');
          navlink.style.fontSize = ".8rem";
      })
    } else {
      document.getElementById("navbar").style.padding = "10px 30px";
      document.getElementById("logo").style.fontSize = "2rem";
      document.getElementById("navbar").style.borderBottom = "none";
      navLinks.forEach((navlink) => {
          navlink.classList.remove('text-dark');
          navlink.classList.add('text-white');
          navlink.style.fontSize = ".8rem";
          navlink.style.marginRight = "30px";
      })
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  window.onscroll = function() {scrollFunction()};
