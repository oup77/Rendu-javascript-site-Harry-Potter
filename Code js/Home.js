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
  }
});
