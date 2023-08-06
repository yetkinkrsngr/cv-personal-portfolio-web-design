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
