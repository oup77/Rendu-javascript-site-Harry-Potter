document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },
  });
});

let darkMode = document.querySelector("#dark-mode");
darkMode.addEventListener("click", function () {
  this.classList.toggle("dark");

  let navBarre = document.querySelector(".nav");
  let cardChoices = document.querySelectorAll(".case");
  let cardlign = document.querySelector("#section2");
  let footer = document.querySelector("footer");
  let navBoutons = document.querySelectorAll(".navlink");
  let tabsBack = document.querySelector(".tabs");
  let listTabBack = document.querySelector(".list-tab");
  let contentsColor = document.querySelectorAll(".content");

  if (darkMode.classList.contains("dark")) {
    navBarre.classList.add("dark");
    cardChoices.forEach(function (cardChoice) {
      cardChoice.classList.add("dark");
    });
    cardlign.classList.add("dark");
    footer.classList.add("dark");
    navBoutons.forEach(function (navBouton) {
      navBouton.classList.add("dark");
    });
    tabsBack.classList.add("dark");
    listTabBack.classList.add("dark");
    contentsColor.forEach(function (contentcolor) {
      contentcolor.classList.add("dark");
    });
  } else {
    navBarre.classList.remove("dark");
    cardChoices.forEach(function (cardChoice) {
      cardChoice.classList.remove("dark");
    });
    cardlign.classList.remove("dark");
    footer.classList.remove("dark");
    navBoutons.forEach(function (navBouton) {
      navBouton.classList.remove("dark");
    });
    tabsBack.classList.remove("dark");
    listTabBack.classList.remove("dark");
    contentsColor.forEach(function (contentcolor) {
      contentcolor.classList.remove("dark");
    });
  }
});

let tabs = document.querySelectorAll(".tab");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs.forEach(function (tab) {
      tab.classList.remove("tab-active");
    });
    let contents = document.querySelectorAll(".content");
    contents.forEach(function (content) {
      content.classList.remove("active");
    });
    this.classList.add("tab-active");

    if (this.classList.contains("tab-objectif")) {
      let objectif = document.querySelector(".objectif");
      objectif.classList.add("active");
    }
    if (this.classList.contains("tab-pourquoi")) {
      let pourquoi = document.querySelector(".pourquoi");
      pourquoi.classList.add("active");
    }
    if (this.classList.contains("tab-soutenir")) {
      let soutenir = document.querySelector(".soutenir");
      soutenir.classList.add("active");
    }
    if (this.classList.contains("tab-sinon")) {
      let sinon = document.querySelector(".sinon");
      sinon.classList.add("active");
    }
    if (this.classList.contains("tab-ane")) {
      let ane = document.querySelector(".ane");
      ane.classList.add("active");
    }
  });
});
