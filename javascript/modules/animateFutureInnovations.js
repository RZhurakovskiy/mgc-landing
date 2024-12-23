export function animateFutureInnovations() {
  const title = document.querySelector(".future-innovations-title");
  const animatedElements = document.querySelectorAll(
    ".future-innovations-item ul li"
  );

  function animateTitle() {
    const rect = title.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      title.classList.add("animate-title");

      window.removeEventListener("scroll", animateTitle);
    }
  }

  function animateLists() {
    let delay = 0;
    animatedElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setTimeout(() => {
          element.classList.add("animate");
        }, delay);
        delay += 100;
      }
    });

    if (
      document.querySelectorAll(".future-innovations-item ul li:not(.animate)")
        .length === 0
    ) {
      window.removeEventListener("scroll", animateLists);
    }
  }

  function addAnimationStyles() {
    const style = document.createElement("style");
    style.innerHTML = ` 
  
        .future-innovations-title { 
          opacity: 0; 
          transform: translateY(-30px); 
          transition: opacity 0.8s ease-out, transform 0.8s ease-out; 
        } 
        .future-innovations-title.animate-title { 
          opacity: 1; 
          transform: translateY(0); 
        } 
        
    
        .future-innovations-item ul li { 
          opacity: 0; 
          transform: translateY(20px); 
          transition: opacity 0.8s ease-out, transform 0.8s ease-out; 
        } 
        .future-innovations-item ul li.animate { 
          opacity: 1; 
          transform: translateY(0); 
        } 
      `;
    document.head.appendChild(style);
  }

  addAnimationStyles();
  window.addEventListener("scroll", animateTitle);
  window.addEventListener("scroll", animateLists);
}
