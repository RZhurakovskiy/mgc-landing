let lastScrollY=0,ticking=!1;export function initParralaxAnimation(){document.addEventListener("scroll",()=>{let l=window.scrollY;ticking||(window.requestAnimationFrame(()=>{let t=document.querySelector(".advantages-logo");lastScrollY+=(l-lastScrollY)*.1,t.style.backgroundPositionY=`${.1*lastScrollY}px`,ticking=!1}),ticking=!0)})}