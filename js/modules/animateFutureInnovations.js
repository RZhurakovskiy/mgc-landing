export function animateFutureInnovations(){let t=document.querySelector(".future-innovations-title"),e=document.querySelectorAll(".future-innovations-item ul li");function n(){let e=t.getBoundingClientRect();e.top>=0&&e.bottom<=window.innerHeight&&(t.classList.add("animate-title"),window.removeEventListener("scroll",n))}function i(){let t=0;e.forEach(e=>{let n=e.getBoundingClientRect();n.top>=0&&n.bottom<=window.innerHeight&&(setTimeout(()=>{e.classList.add("animate")},t),t+=50)}),0===document.querySelectorAll(".future-innovations-item ul li:not(.animate)").length&&window.removeEventListener("scroll",i)}!function t(){let e=document.createElement("style");e.innerHTML=`  
    .future-innovations-title {  
      opacity: 0;  
      transform: translateY(-30px);  
      transition: opacity 0.4s ease-out, transform 0.4s ease-out;  /* Уменьшена длительность анимации */
    }  
    .future-innovations-title.animate-title {  
      opacity: 1;  
      transform: translateY(0);  
    }  
     
    .future-innovations-item ul li {  
      opacity: 0;  
      transform: translateY(20px);  
      transition: opacity 0.4s ease-out, transform 0.4s ease-out;  /* Уменьшена длительность анимации */
    }  
    .future-innovations-item ul li.animate {  
      opacity: 1;  
      transform: translateY(0);  
    }  
  `,document.head.appendChild(e)}(),window.addEventListener("scroll",n),window.addEventListener("scroll",i)}