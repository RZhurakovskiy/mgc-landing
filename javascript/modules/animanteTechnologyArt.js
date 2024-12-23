export function animanteTechnologyArt() {
  const section = document.getElementById("technology-art");
  const textElementsToAnimate = section.querySelectorAll(
    ".technology-art-text, .logo, .technology-art-title, .technology-art-subtitle"
  );
  const imageElement = section.querySelector(".technology-art-image");
  let hasAnimated = !1;
  const animateElements = () => {
    if (hasAnimated) return;
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    if (sectionPosition <= viewportHeight) {
      textElementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, index * 90);
      });
      if (imageElement) {
        setTimeout(() => {
          imageElement.style.opacity = "1";
          imageElement.style.transform = "translateX(0)";
        }, textElementsToAnimate.length * 90);
      }
      hasAnimated = !0;
    }
  };
  textElementsToAnimate.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });
  if (imageElement) {
    imageElement.style.opacity = "0";
    imageElement.style.transform = "translateX(100px)";
    imageElement.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  }
  window.addEventListener("scroll", animateElements);
}
