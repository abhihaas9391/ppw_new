'use strict';

// Element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); };

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const selectedPage = this.innerHTML.toLowerCase(); // Get the clicked page name
    
    // Loop through each page and toggle the 'active' class
    for (let j = 0; j < pages.length; j++) {
      if (selectedPage === pages[j].dataset.page) {
        pages[j].classList.add("active");  // Show selected page
        navigationLinks[j].classList.add("active");  // Highlight active link
      } else {
        pages[j].classList.remove("active");  // Hide non-selected pages
        navigationLinks[j].classList.remove("active");  // Remove highlight
      }
    }
  });
}
