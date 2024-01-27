'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// post variables
const postItems = document.querySelectorAll(".blog-post-item");
const modal = document.querySelector("[data-modal-container]");
const modalCloseBtn = modal.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalTitle = modal.querySelector("[data-modal-title]");
const modalDate = modal.querySelector("[data-modal-date]");
const modalText = modal.querySelector("[data-modal-text]");

// modal toggle function
const toggleModal = () => {
  modal.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Add click event to all post items
postItems.forEach(item => {
  item.addEventListener("click", function () {
    // Get the title and date from the clicked post
    const postTitle = this.querySelector(".blog-item-title").textContent;
    const postDateTime = this.querySelector("time").getAttribute("datetime");
    const postDateText = this.querySelector("time").textContent;

    // Set the modal title and date
    modalTitle.textContent = postTitle;
    modalDate.textContent = postDateText;
    modalDate.setAttribute("datetime", postDateTime);

    // Clear previous content and insert new content into the modal
    modalText.innerHTML = this.querySelector(".hidden-content").innerHTML;

    // Show the modal
    toggleModal();
  });
});

// Close modal events
modalCloseBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);


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