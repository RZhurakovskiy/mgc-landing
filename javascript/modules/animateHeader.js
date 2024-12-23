export function animateHeader() { 
    const header = document.getElementById("main"); 
    const observer = new MutationObserver(() => { 
      const preloader = document.getElementById("preloader"); 
      if (preloader.classList.contains("hidden")) { 
        observer.disconnect(); 
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
        element.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        element.style.transformOrigin = "center"; 
      }, index * 100);
    }); 
  } 
  
  document 
    .getElementById("main") 
    .querySelectorAll("*") 
    .forEach((element) => { 
      element.style.opacity = "0"; 
      element.style.transform = "translateY(20px)"; 
    });
  