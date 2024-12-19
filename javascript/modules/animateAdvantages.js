export function animateAdvantages() {
  const elements = document.querySelectorAll(".advantages-content-cart");

  const animateOnScroll = () => {
    elements.forEach((element, index) => {
      const elementPosition = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementPosition < viewportHeight && elementPosition > 0) {
        element.style.animation = `fade-in-slide-up 0.6s ease-out ${
          index * 0.2
        }s both`;
        element.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);

  const style = document.createElement("style");
  style.textContent = `
      @keyframes fade-in-slide-up {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
  document.head.appendChild(style);
}
