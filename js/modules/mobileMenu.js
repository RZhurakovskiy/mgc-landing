export function initializeMobileMenu(){let e=document.querySelectorAll(".mobile div"),l=document.querySelector(".mobile nav"),o=document.querySelectorAll(".mobile ul li");e.forEach(o=>{o.addEventListener("click",()=>{e.forEach(e=>e.classList.toggle("active")),l.classList.toggle("open"),l.querySelector("ul").classList.toggle("show")})}),o.forEach((o,t)=>{o.style.animationDelay=`${(t+.1)/5}s`,o.addEventListener("click",()=>{e.forEach(e=>e.classList.remove("active")),l.classList.remove("open"),l.querySelector("ul").classList.remove("show")})})}