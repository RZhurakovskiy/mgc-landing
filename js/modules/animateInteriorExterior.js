export function animateInteriorExterior(){var e;let t=document.getElementById("interior-exterior"),r=t.querySelector(".interior-exterior-title"),i=t.querySelectorAll(".interior-exterior-item"),o=new Set,n=()=>{window.innerHeight;let e=(e,t,r=0)=>{o.has(e)||setTimeout(()=>{gsap.to(e,t),o.add(e)},r)};a(r)&&e(r,{opacity:1,y:0,duration:1.5,ease:"power2.out"}),i.forEach((t,r)=>{a(t)&&e(t,{opacity:1,x:0,duration:1.5,ease:"power2.out"},200*r)})},a=e=>{let t=e.getBoundingClientRect();return t.top>=0&&t.bottom<=window.innerHeight};gsap.set(r,{opacity:0,y:-50}),gsap.set(i,{opacity:0,x:-50});let l;window.addEventListener("scroll",(e=n,function(...t){clearTimeout(l),l=setTimeout(()=>e.apply(this,t),100)})),n()}