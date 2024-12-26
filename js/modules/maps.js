export function initDistrictInteractions() {
  document.querySelectorAll("[data-code]").forEach(function (t) {
    t.addEventListener("mouseenter", function () {
      let district = document.querySelector(".district"),
        e = this.getAttribute("data-title");
      (district.querySelector("span").textContent = e),
        (district.style.display = "block"),
        window.innerWidth <= 768 && district.classList.add("mobile-visible");
    }),
      t.addEventListener("mouseleave", function () {
        document.querySelector(".rf-map").classList.contains("open") ||
          (document.querySelector(".district").style.display = "none");
      });
  }),
    document.querySelector(".rf-map").addEventListener("click", function (t) {
      let e = t.target.closest("[data-code], .district-links div");
      if (e) {
        let l = e.getAttribute("data-code"),
          i = e.getAttribute("data-title");
        if (
          document.getElementById(l) &&
          "" !== document.getElementById(l).textContent
        ) {
          closeAllDistricts(); // Закрытие других модальных окон
          let r = document.querySelector(".district");
          (r.style.display = "block"),
            (r.querySelector("span").textContent = i),
            window.innerWidth <= 768 && r.classList.add("mobile-visible"),
            document
              .querySelectorAll("[data-code]")
              .forEach((t) => t.classList.add("dropfill")),
            e.classList.add("mainfill"),
            document.querySelector(".rf-map").classList.add("open"),
            (document.getElementById(l).style.display = "block");
        }
      }
    }),
    document
      .querySelector(".close-district")
      .addEventListener("click", function () {
        closeAllDistricts(); // Используем функцию для закрытия
      }),
    document.querySelectorAll("[data-code]").forEach(function (t) {
      let e = t.getAttribute("data-code"),
        l = t.getAttribute("data-title"),
        i = document.querySelector(".district-links");
      if (
        document.getElementById(e) &&
        "" !== document.getElementById(e).textContent
      ) {
        let r = document.createElement("div");
        r.setAttribute("data-title", l),
          r.setAttribute("data-code", e),
          (r.textContent = l),
          i.appendChild(r);
      }
    });

  function closeAllDistricts() {
    let t = document.querySelector(".rf-map");
    t.classList.remove("open"),
      document
        .querySelectorAll("[data-code].dropfill")
        .forEach((t) => t.classList.remove("dropfill")),
      document
        .querySelectorAll("[data-code].mainfill")
        .forEach((t) => t.classList.remove("mainfill")),
      document
        .querySelectorAll(".district-text")
        .forEach((t) => (t.style.display = "none")),
      (document.querySelector(".district").style.display = "none");
  }
}
