export function animateMgcSystems() {
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  };

  const articles = document.querySelectorAll(".mgc-systems-card");

  const animateArticle = (article) => {
    const title = article.querySelector(".mgc-systems-title1");
    const items = article.querySelectorAll(".mgc-systems-item");
    const image = article.querySelector(".mgc-systems-image img");

    if (title) {
      title.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      title.style.transform = "translateY(0)";
      title.style.opacity = "1";
    }

    items.forEach((item, index) => {
      setTimeout(() => {
        item.style.transition = `transform 0.5s ease ${
          index * 0.2
        }s, opacity 0.5s ease ${index * 0.2}s`;
        item.style.transform = "translateX(0)";
        item.style.opacity = "1";
      }, index * 200);
    });

    if (image) {
      image.style.transition = "transform 0.8s ease, opacity 0.8s ease";
      image.style.transform = "scale(1)";
      image.style.opacity = "1";
    }
  };

  const initializeStyles = () => {
    articles.forEach((article) => {
      const title = article.querySelector(".mgc-systems-title1");
      const items = article.querySelectorAll(".mgc-systems-item");
      const image = article.querySelector(".mgc-systems-image img");

      if (title) {
        title.style.transform = "translateY(-50px)";
        title.style.opacity = "0";
      }

      items.forEach((item) => {
        item.style.transform = "translateX(-50px)";
        item.style.opacity = "0";
      });

      if (image) {
        image.style.transform = "scale(0.8)";
        image.style.opacity = "0";
      }
    });
  };

  const handleScroll = () => {
    articles.forEach((article) => {
      if (isElementInViewport(article) && !article.dataset.animated) {
        animateArticle(article);
        article.dataset.animated = "true";
      }
    });
  };

  initializeStyles();

  window.addEventListener("scroll", handleScroll);

  handleScroll();
}
