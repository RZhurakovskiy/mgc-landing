export function animateInnovativeAutoglass() {
    const section = document.getElementById("innovative-auto-glass");
    const image = section.querySelector(".innovative-autoglass-img");
    const title = section.querySelector(".innovative-autoglass-title");
    const items = section.querySelectorAll(".innovative-autoglass-item");
  
    const animated = new WeakSet();
  
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
  
      const imageTop = image.getBoundingClientRect().top;
      if (imageTop >= 0 && imageTop <= windowHeight && !animated.has(image)) {
        image.style.opacity = "1";
        image.style.transform = "translateY(0)";
        animated.add(image);
      }
  
      const titleTop = title.getBoundingClientRect().top;
      if (titleTop >= 0 && titleTop <= windowHeight && !animated.has(title)) {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
        animated.add(title);
      }
  
      items.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
  
        if (itemTop >= 0 && itemTop <= windowHeight && !animated.has(item)) {
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
          }, index * 200);
          animated.add(item);
        }
      });
    };
  
    image.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    image.style.opacity = "0";
    image.style.transform = "translateX(-50px)";
  
    title.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    title.style.opacity = "0";
    title.style.transform = "translateY(-50px)";
  
    items.forEach((item) => {
      item.style.transition = "opacity 1s ease-out, transform 1s ease-out";
      item.style.opacity = "0";
      item.style.transform = "translateX(-50px)";
    });
  
    window.addEventListener("scroll", handleScroll);
  
    handleScroll();
  }
  