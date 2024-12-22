let lastScrollY = 0;
let ticking = !1;
export function initParralaxAnimation() {
    document.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const advantagesLogo = document.querySelector(".advantages-logo");
                lastScrollY += (scrollPosition - lastScrollY) * 0.1;
                advantagesLogo.style.backgroundPositionY = `${lastScrollY * 0.1}px`;
                ticking = !1;
            });
            ticking = !0;
        }
    });
}
