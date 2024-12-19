export function animateEngineering() {
  const section = document.getElementById("engineering");
  const timelineEvents = section.querySelectorAll(".timeline-event");
  const imageContainer = section.querySelector(".engineering-content-img");

  const animated = new WeakSet();

  const handleScroll = () => {
    const windowHeight = window.innerHeight;

    timelineEvents.forEach((event, index) => {
      const eventTop = event.getBoundingClientRect().top;

      if (eventTop >= 0 && eventTop <= windowHeight && !animated.has(event)) {
        setTimeout(() => {
          event.style.opacity = "1";
          event.style.transform = "translateY(0)";
        }, index * 50); // Ускоряем задержку между появлением элементов
        animated.add(event);
      }
    });

    const imageTop = imageContainer.getBoundingClientRect().top;

    if (
      imageTop >= 0 &&
      imageTop <= windowHeight &&
      !animated.has(imageContainer)
    ) {
      imageContainer.style.opacity = "1";
      imageContainer.style.transform = "translateX(0) rotate(0deg)";
      animated.add(imageContainer);
    }
  };

  timelineEvents.forEach((event) => {
    event.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
    event.style.opacity = "0";
    event.style.transform = "translateY(30px)";
  });

  imageContainer.style.transition = "opacity 0.8s ease-in-out, transform 0.8s ease-in-out";
  imageContainer.style.opacity = "0";
  imageContainer.style.transform = "translateX(-100px) rotate(-10deg)";

  window.addEventListener("scroll", handleScroll);

  handleScroll();
}
