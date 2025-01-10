'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');


    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('dark');
      themeBtn[i].classList.toggle('light');

    }

  })

}

const data = [
  { title: "Manu.uz", category: "portfolio", url: "https://manu.uz", img: "https://manu.uz/images/person1.jpg", description: "Texnologiyalardan zavqlanuvchi dasturchi." },
  { title: "ShopMax", category: "ecommerce", url: "https://shopmax.uz", img: "https://via.placeholder.com/250", description: "Onlayn savdo platformasi." },
  { title: "TechBlog", category: "blog", url: "https://techblog.uz", img: "https://via.placeholder.com/250", description: "Texnologiyalarga oid maqolalar." }
];

const catalogItems = document.getElementById("catalogItems");
const searchBar = document.getElementById("searchBar");
const categoryFilter = document.getElementById("categoryFilter");

function renderItems(filterText = "", filterCategory = "all") {
  catalogItems.innerHTML = "";
  data.filter(item =>
    (filterCategory === "all" || item.category === filterCategory) &&
    item.title.toLowerCase().includes(filterText.toLowerCase())
  ).forEach(item => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.innerHTML = `
      <div class="blog-card-banner">
        <img src="${item.img}" alt="${item.title}" class="blog-banner-img">
      </div>
      <div class="blog-content-wrapper">
        <button class="blog-topic text-tiny">${item.category}</button>
        <h3><a href="${item.url}" class="h3">${item.title}</a></h3>
        <p class="blog-text">${item.description}</p>
        <a href="${item.url}"><button class="btn go-website">Go website</button></a>
      </div>
    `;
    catalogItems.appendChild(card);
  });
}

searchBar.addEventListener("input", () => renderItems(searchBar.value, categoryFilter.value));
categoryFilter.addEventListener("change", () => renderItems(searchBar.value, categoryFilter.value));

renderItems();
