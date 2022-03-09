var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Modal system begins //

/* Link to all modals, all modal buttons, all close buttons, all 
captions, all portfolio images, and all modal images. */
let modal = document.querySelectorAll('.img-modal');
let btn = document.querySelectorAll('.modalbtn-icon');
let span = document.getElementsByClassName('close');
let captions = document.getElementsByClassName('caption');
let portfolioImg = document.getElementsByClassName('portfolio-img');
let modalImages = document.getElementsByClassName('modalimg');


// Modal system ends


// Category filtering system begins //

/* Link to each category button individually as well as all as a 
whole, plus the portfolio divs. */
const categoryHTML = document.getElementById('category-HTML');
const categoryCSS = document.getElementById('category-CSS');
const categoryJS = document.getElementById('category-JS');
const categoryJQ = document.getElementById('category-JQ');
const categoryBS = document.getElementById('category-BS');
const showAll = document.getElementById('show-categories');
const portfolioDivs = document.querySelectorAll('.content');
const categoryBtns = document.querySelectorAll('.portfolio-category');


// When the HTML button is clicked...
categoryHTML.addEventListener('click', function() {
    /* For each category button, if they have the 
    "category-active" class (which gives them different styling
    to indicate that it's the active category), remove it. */
    categoryBtns.forEach((categoryBtn) => {
        if(categoryBtn.classList.contains("category-active")) {
            categoryBtn.classList.remove('category-active');
        }
    })

    /* For each portfolio div, for each div that contains the 
    HTML class, show it. Otherwise, hide it. */
    portfolioDivs.forEach((portfolioDiv) => {
      if(portfolioDiv.classList.contains("HTML")) {
          portfolioDiv.classList.remove("portfoliohide");
          portfolioDiv.classList.add("portfolioshow");
      } else {
          portfolioDiv.classList.remove("portfolioshow");
          portfolioDiv.classList.add("portfoliohide");
      }
    })

    // Add the category-active class styling to the HTML button.
    categoryHTML.classList.add("category-active");
})


// When the CSS button is clicked...
categoryCSS.addEventListener('click', function() {
    /* For each category button, if they have the 
    "category-active" class (which gives them different styling 
    to indicate that it's the active category), remove it. */
    categoryBtns.forEach((categoryBtn) => {
        if(categoryBtn.classList.contains("category-active")) {
            categoryBtn.classList.remove('category-active');
        }
    })

    /* For each portfolio div, for each div that contains the CSS 
    class, show it. Otherwise, hide it. */
    portfolioDivs.forEach((portfolioDiv) => {
      if(portfolioDiv.classList.contains("CSS")) {
          portfolioDiv.classList.remove("portfoliohide");
          portfolioDiv.classList.add("portfolioshow");
      } else {
          portfolioDiv.classList.remove("portfolioshow");
          portfolioDiv.classList.add("portfoliohide");
      }
    })

    // Add the category-active class styling to the CSS button.
    categoryCSS.classList.add("category-active");
});

// When the JavaScript button is clicked...
categoryJS.addEventListener('click', function() {
    /* For each category button, if they have the 
    "category-active" class (which gives them different styling 
    to indicate that it's the active category), remove it. */
    categoryBtns.forEach((categoryBtn) => {
        if(categoryBtn.classList.contains("category-active")) {
            categoryBtn.classList.remove('category-active');
        }
    })

    /* For each portfolio div, for each div that contains the 
    JavaScript class, show it. Otherwise, hide it. */
    portfolioDivs.forEach((portfolioDiv) => {
      if(portfolioDiv.classList.contains("JavaScript")) {
          portfolioDiv.classList.remove("portfoliohide");
          portfolioDiv.classList.add("portfolioshow");
      } else {
          portfolioDiv.classList.remove("portfolioshow");
          portfolioDiv.classList.add("portfoliohide");
      }
    })

    // Add the category-active class styling to the JavaScript button.
    categoryJS.classList.add("category-active");
})


// When the jQuery button is clicked...
categoryJQ.addEventListener('click', function() {
    /* For each category button, if they have the 
    "category-active" class (which gives them different styling 
    to indicate that it's the active category), remove it. */
    categoryBtns.forEach((categoryBtn) => {
        if(categoryBtn.classList.contains("category-active")) {
            categoryBtn.classList.remove('category-active');
        }
    })

    /* For each portfolio div, for each div that contains the JQ 
    class, show it. Otherwise, hide it. */
    portfolioDivs.forEach((portfolioDiv) => {
      if(portfolioDiv.classList.contains("jQuery")) {
          portfolioDiv.classList.remove("portfoliohide");
          portfolioDiv.classList.add("portfolioshow");
      } else {
          portfolioDiv.classList.remove("portfolioshow");
          portfolioDiv.classList.add("portfoliohide");
      }
    })

    // Add the category-active class styling to the jQuery button.
    categoryJQ.classList.add("category-active");
})


// When the Bootstrap button is clicked...
categoryBS.addEventListener('click', function() {
    /* For each category button, if they have the 
    "category-active" class (which gives them different styling 
    to indicate that it's the active category), remove it. */
    categoryBtns.forEach((categoryBtn) => {
        if(categoryBtn.classList.contains("category-active")) {
            categoryBtn.classList.remove('category-active');
        }
    })

    /* For each portfolio div, for each div that contains the BS 
    class, show it. Otherwise, hide it. */
    portfolioDivs.forEach((portfolioDiv) => {
      if(portfolioDiv.classList.contains("Bootstrap")) {
          portfolioDiv.classList.remove("portfoliohide");
          portfolioDiv.classList.add("portfolioshow");
      } else {
          portfolioDiv.classList.remove("portfolioshow");
          portfolioDiv.classList.add("portfoliohide");
      }
    })

    // Add the category-active class styling to the Bootstrap button.
    categoryBS.classList.add("category-active");
})


// When the 'Show All' button is clicked...
showAll.addEventListener('click', function() {
    /* For each category button, if they have the 
    "category-active" class (which gives them different styling 
    to indicate that it's the active category), remove it. */
    categoryBtns.forEach((categoryBtn) => {
        categoryBtn.classList.remove("category-active");
    })

    /* For each portfolio div, remove the "hide" class and add 
    the "show" class, regardless of which div it is. */
    portfolioDivs.forEach((portfolioDiv) => {
        portfolioDiv.classList.remove("portfoliohide");
        portfolioDiv.classList.add("portfolioshow");
    })

    // Add the category-active class styling to the 'Show All' button.
    showAll.classList.add("category-active");
})

// Category filtering system ends //


// Modals for portfolio projects //
const focusA = document.getElementById('focusa');
const overlayA = document.getElementById('overlaya');
const modal1 = document.getElementById('calculator-modal');

focusA.addEventListener('focus', function() {
    overlayA.focus();
})

if(document.activeElement === "overlayA") {
    document.addEventListener('keydown', function(e) {
      if(e.code === "Enter") {
          modal1.style.display = "block";
      }  
    })
}