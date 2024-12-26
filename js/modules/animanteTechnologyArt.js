export function animanteTechnologyArt() {
  let t = document.getElementById("technology-art"),
    e = t.querySelectorAll(
      ".technology-art-text, .logo, .technology-art-title, .technology-art-subtitle"
    ),
    a = t.querySelector(".technology-art-image"),
    o = !1,
    r = () => {
      if (o) return;
      let r = t.getBoundingClientRect().top,
        l = window.innerHeight;
      r <= l &&
        (e.forEach((t, e) => {
          setTimeout(() => {
            (t.style.opacity = "1"), (t.style.transform = "translateY(0)");
          }, 100 * e);
        }),
        a &&
          setTimeout(() => {
            (a.style.opacity = "1"), (a.style.transform = "translateX(0)");
          }, 100 * e.length),
        (o = !0));
    };
  e.forEach((t) => {
    (t.style.opacity = "0"),
      (t.style.transform = "translateY(20px)"),
      (t.style.transition = "opacity 0.5s ease, transform 0.5s ease");
  }),
    a &&
      ((a.style.opacity = "0"),
      (a.style.transform = "translateX(100px)"),
      (a.style.transition = "opacity 0.8s ease, transform 0.8s ease")),
    window.addEventListener("scroll", r);
}
