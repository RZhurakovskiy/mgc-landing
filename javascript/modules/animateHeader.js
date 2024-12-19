
export function animateHeader() {
  const header = document.getElementById("main");

  // Wait until preloader is hidden before starting animation
  const observer = new MutationObserver(() => {
    const preloader = document.getElementById("preloader");

    if (preloader.classList.contains("hidden")) {
      observer.disconnect(); // Stop observing after the preloader disappears
      startHeaderAnimation(header);
    }
  });

  observer.observe(document.body, { subtree: true, attributes: true });
}

function startHeaderAnimation(header) {
  const elementsToAnimate = header.querySelectorAll("*");

  elementsToAnimate.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease";

      // Reset any previous transform or fading done by default
      element.style.transformOrigin = "center";
    }, index * 200); // Delay based on element index
  });
}

// Initialization: Reset all elements to a starting animation state
document.getElementById("main").querySelectorAll("*").forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
});
