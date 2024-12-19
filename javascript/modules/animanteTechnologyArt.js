// Функция для анимации элементов секции
export function animanteTechnologyArt() {
    const section = document.getElementById('technology-art');
    const textElementsToAnimate = section.querySelectorAll('.technology-art-text, .logo, .technology-art-title, .technology-art-subtitle');
    const imageElement = section.querySelector('.technology-art-image');
  
    let hasAnimated = false;
  
    const animateElements = () => {
      if (hasAnimated) return; // Анимация уже сработала
      const sectionPosition = section.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
  
      if (sectionPosition <= viewportHeight) {
        // Анимируем текстовые элементы
        textElementsToAnimate.forEach((element, index) => {
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }, index * 100); // Задержка для плавной последовательной анимации текста
        });
  
        // Анимируем изображение
        if (imageElement) {
          setTimeout(() => {
            imageElement.style.opacity = '1';
            imageElement.style.transform = 'translateX(0)';
          }, textElementsToAnimate.length * 100); // Анимация изображения после текста
        }
  
        hasAnimated = true; // Установить флаг, чтобы анимация не повторялась
      }
    };
  
    // Установка начальных стилей для текстовых элементов
    textElementsToAnimate.forEach((element) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
  
    // Установка начальных стилей для изображения
    if (imageElement) {
      imageElement.style.opacity = '0';
      imageElement.style.transform = 'translateX(100px)';
      imageElement.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    }
  
    // Добавляем обработчик скролла
    window.addEventListener('scroll', animateElements);
  }