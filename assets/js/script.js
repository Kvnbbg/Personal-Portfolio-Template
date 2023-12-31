'use strict';

(function() {
  var warningMessage = "This is the flat version of the website. For more features and an updated version, please visit <a href='https://kvnbbg.github.io/Personal-Portfolio-Template/' target='_blank'>here</a>.";

  var warningDiv = document.createElement('div');
  warningDiv.innerHTML = warningMessage;
  warningDiv.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; background: #f44336; color: #fff; padding: 10px; text-align: center; z-index: 9999;';

  var closeButton = document.createElement('span');
  closeButton.innerHTML = 'X';
  closeButton.style.cssText = 'position: absolute; top: 5px; right: 10px; cursor: pointer;';
  closeButton.onclick = function() {
    warningDiv.style.display = 'none';
  };
  warningDiv.appendChild(closeButton);

  document.body.appendChild(warningDiv);
})();

// JavaScript code to handle like button functionality
document.addEventListener('DOMContentLoaded', function () {
    const likeButton = document.querySelector('.btn-primary');
    const likeCount = document.querySelector('.like-count');

    let count = parseInt(likeCount.textContent);

    likeButton.addEventListener('click', function () {
        count++;
        likeCount.textContent = count;
    });
});

// Navbar
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const contentSections = document.querySelectorAll('#content > section');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const targetSectionId = event.target.dataset.navLink;

      // Hide all sections
      contentSections.forEach(section => {
        section.style.display = 'none';
      });

      // Show the selected section if it exists
      const selectedSection = document.getElementById(targetSectionId);
      if (selectedSection) {
        selectedSection.style.display = 'block';
      }
    });
  });
});


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

function runCode() {
  const code = document.getElementById('codeInput').value;
  const consoleOutput = document.getElementById('consoleOutput');

  try {
    const sandbox = {};
    const userFunction = new Function('sandbox', code);
    const result = userFunction(sandbox);

    // Clear console output before displaying new results
    consoleOutput.innerHTML = '';

    // Display the result in the console output
    consoleOutput.innerText = String(result);
  } catch (error) {
    // Clear console output before displaying error
    consoleOutput.innerHTML = '';

    let errorMessage = 'Error: ';
    if (error instanceof SyntaxError) {
      errorMessage += 'Syntax Error - Please check your code.';
    } else if (error instanceof ReferenceError) {
      errorMessage += 'Reference Error - Likely a variable or function is not defined.';
    } else if (error instanceof TypeError) {
      errorMessage += 'Type Error - There might be a type mismatch or undefined method.';
    } else {
      errorMessage += error.message || 'An unknown error occurred.';
    }
    consoleOutput.innerText = errorMessage;
  }
}

