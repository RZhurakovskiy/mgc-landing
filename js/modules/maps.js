export function initDistrictInteractions(){document.querySelectorAll("[data-code]").forEach(function(t){t.addEventListener("mouseenter",function(){let t=document.querySelector(".district"),e=this.getAttribute("data-title");t.querySelector("span").textContent=e,t.style.display="block",window.innerWidth<=768&&t.classList.add("mobile-visible")}),t.addEventListener("mouseleave",function(){document.querySelector(".rf-map").classList.contains("open")||(document.querySelector(".district").style.display="none")})}),document.querySelector(".rf-map").addEventListener("click",function(e){let l=e.target.closest("[data-code], .district-links div");if(l){let i=l.getAttribute("data-code"),r=l.getAttribute("data-title");if(document.getElementById(i)&&""!==document.getElementById(i).textContent){t();let a=document.querySelector(".district");a.style.display="block",a.querySelector("span").textContent=r,window.innerWidth<=768&&a.classList.add("mobile-visible"),document.querySelectorAll("[data-code]").forEach(t=>t.classList.add("dropfill")),l.classList.add("mainfill"),document.querySelector(".rf-map").classList.add("open"),document.getElementById(i).style.display="block"}}}),document.querySelector(".close-district").addEventListener("click",function(){t()}),document.querySelectorAll("[data-code]").forEach(function(t){let e=t.getAttribute("data-code"),l=t.getAttribute("data-title"),i=document.querySelector(".district-links");if(document.getElementById(e)&&""!==document.getElementById(e).textContent){let r=document.createElement("div");r.setAttribute("data-title",l),r.setAttribute("data-code",e),r.textContent=l,i.appendChild(r)}});function t(){document.querySelector(".rf-map").classList.remove("open"),document.querySelectorAll("[data-code].dropfill").forEach(t=>t.classList.remove("dropfill")),document.querySelectorAll("[data-code].mainfill").forEach(t=>t.classList.remove("mainfill")),document.querySelectorAll(".district-text").forEach(t=>t.style.display="none"),document.querySelector(".district").style.display="none"}}