// This script is loaded both on the frontend page and in the Visual Builder.
(function() {
  const SLIDE_CSS_SELECTOR = ".dp_simple_slide";
  const PREV_CSS_SELECTOR = ".dp_simple_slider__prev";
  const NEXT_CSS_SELECTOR = ".dp_simple_slider__next";
  const PAGINATION_CSS_SELECTOR = ".dp_simple_slider__pagination-dot";

  const slidePrev = document.querySelectorAll(PREV_CSS_SELECTOR);
  const slideNext = document.querySelectorAll(NEXT_CSS_SELECTOR);

  const control = function(elems, event, type) {
    elems.forEach(function(elem, index) {
      elem.addEventListener(event, function() {
        console.log(`${type}!`);
        if (type === "prev" || type === "next") {
          plusSlides(type === "prev" ? -1 : 1);
        } else if (type === "pagi") {
        }
      });
    });
  };

  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName(SLIDE_CSS_SELECTOR);
    let dots = document.getElementsByClassName(PAGINATION_CSS_SELECTOR);
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
  }

  control(slidePrev, "click", "prev");
  control(slideNext, "click", "next");
})();

jQuery(function($) {
  $(document).ready(function() {
    console.log("loaded");
    // const swiper = new Swiper(".swiper", {
    //   // Optional parameters
    //   slidesPerView: 1,
    //   loop: true,
    //   effect: "fade",
    //   // If we need pagination
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },
    //   // Navigation arrows
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
  });
});
