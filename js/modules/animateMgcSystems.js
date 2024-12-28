export function animateMgcSystems() { 
  let isVisible = (element) => {
    let rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  },
  cards = document.querySelectorAll(".mgc-systems-card"),
  animateCard = (card) => {
    let title = card.querySelector(".mgc-systems-title1"),
        items = card.querySelectorAll(".mgc-systems-item"),
        image = card.querySelector(".mgc-systems-image img");

    if (title) {
      gsap.fromTo(title, 
        { y: -50, opacity: 0 }, 
        { y: 0, opacity: 1, ease: "power1.out", duration: 1 });
    }

    items.forEach((item, index) => {
      gsap.fromTo(item, 
        { x: -50, opacity: 0 }, 
        { x: 0, opacity: 1, ease: "power1.out", duration: 1, delay: 0.4 * index });
    });

    if (image) {
      gsap.fromTo(image, 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, ease: "power1.out", duration: 4 });
    }
  },
  
  onScroll = () => {
    cards.forEach((card) => {
      if (isVisible(card) && !card.dataset.animated) {
        animateCard(card);
        card.dataset.animated = "true";
      }
    });
  };

  cards.forEach((card) => {
    let title = card.querySelector(".mgc-systems-title1"),
        items = card.querySelectorAll(".mgc-systems-item"),
        image = card.querySelector(".mgc-systems-image img");

    if (title) {
      gsap.set(title, { y: -50, opacity: 0 });
    }

    items.forEach((item) => {
      gsap.set(item, { x: -50, opacity: 0 });
    });

    if (image) {
      gsap.set(image, { scale: 0.8, opacity: 0 });
    }
  });

  window.addEventListener("scroll", onScroll);
  onScroll();
}