export function animateTechnological() {
    const section = document.getElementById("technological-capabilities");
    const elementsToAnimate = section.querySelectorAll(
      ".technological-title, .technological-content-list, .technological-content-images"
    );
  
    let hasAnimated = false;
  
    function isSectionInView() {
      const sectionRect = section.getBoundingClientRect();
      return (
        sectionRect.top < window.innerHeight && sectionRect.bottom > 0
      );
    }

    function animateSection() {
      if (isSectionInView() && !hasAnimated) {
        elementsToAnimate.forEach((element, index) => {
          setTimeout(() => {
            element.style.transition = "transform 0.5s ease, opacity 0.5s ease";
            element.style.transform = "translateY(0)";
            element.style.opacity = "1";
          }, index * 300); 
        });
        hasAnimated = true;
      }
    }
  
    function setInitialStyles() {
      elementsToAnimate.forEach((element) => {
        element.style.transform = "translateY(100px)";
        element.style.opacity = "0";
      });
    }
  
    setInitialStyles();
  
    window.addEventListener("scroll", animateSection);
  }
  