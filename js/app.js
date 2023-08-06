"use strict";
if (window.innerWidth < 501) {
  const bars = document.querySelector(".fa-bars");
  const navlinks = document.querySelector(".nav-links-ul");
  let check = true;
  bars.addEventListener("click", () => {
    bars.classList.toggle("fa-times");
    if (check) {
      navlinks.style.display = "block";
      check = false;
    } else {
      navlinks.style.display = "none";
      check = true;
    }
    document.addEventListener("click", (e) => {
      const target = e.target;
      const isClickedInsideMenu = menu.contains(target);
      const isClickedInsideHamburger = bars.contains(target);
      if (!isClickedInsideMenu && !isClickedInsideHamburger) {
        menu.style.display = "none";
        check = true;
      }
    });
  });
}
if (window.innerWidth > 1200) {
  const carouselSlide = document.querySelector(".carosel-slider");
  const carouselImages = document.querySelectorAll(".carosel-slider img");
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");

  // Set the initial index of the image to be displayed
  let currentIndex = 0;

  // Function to display the next image in the carousel
  function showNextImage() {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    updateSlidePosition();
  }

  // Function to display the previous image in the carousel
  function showPreviousImage() {
    currentIndex =
      (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    updateSlidePosition();
  }

  // Function to update the position of the carousel slide
  function updateSlidePosition() {
    const offset = -currentIndex * carouselImages[0].clientWidth;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = `translateX(${offset}px)`;
  }

  // Set event listeners for the next and previous buttons
  nextBtn.addEventListener("click", showNextImage);
  prevBtn.addEventListener("click", showPreviousImage);
}
