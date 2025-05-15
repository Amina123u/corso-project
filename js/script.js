function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
    } else {
      navbar.classList.remove("bg-dark");
    }
  });
}
// Function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
    rect.bottom >= 0
  );
}

// Function to handle scroll animations
function handleScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    ".fade-in, .slide-in-left, .slide-in-right, .scale-in, .rotate-in"
  );

  animatedElements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("appear");
    }
  });
}

// Initialize animations on page load
document.addEventListener("DOMContentLoaded", function () {
  // Add event listener for scroll
  window.addEventListener("scroll", handleScrollAnimations);

  // Trigger once on page load
  handleScrollAnimations();

  // Add animation to header text
  const headerText = document.querySelector(".header h1");
  const headerSubtext = document.querySelector(".header p");
  const headerButtons = document.querySelectorAll(".header a");

  if (headerText) {
    headerText.classList.add("fade-in");
    headerText.classList.add("appear");
  }

  if (headerSubtext) {
    setTimeout(() => {
      headerSubtext.classList.add("fade-in");
      headerSubtext.classList.add("appear");
    }, 200);
  }

  if (headerButtons.length > 0) {
    setTimeout(() => {
      headerButtons.forEach((btn, index) => {
        btn.classList.add("fade-in");
        setTimeout(() => {
          btn.classList.add("appear");
        }, index * 100);
      });
    }, 400);
  }

  // Add animation to carousel - CHANGED FROM .carousel to #slider
  const carousel = document.querySelector("#slider");
  if (carousel) {
    setTimeout(() => {
      carousel.classList.add("scale-in");
      carousel.classList.add("appear");
    }, 600);
  }
});
document.addEventListener("DOMContentLoaded", userScroll);
