export function animateHeader() {
  const preloader = document.querySelector('.loader');
  const header = document.querySelector('.header-container');
  const title = document.querySelector('.header-content-title');
  const subtitle = document.querySelector('.header-content-subtitle');
  const listItems = document.querySelectorAll('.header-list li');

 
  header.style.opacity = '0';
  title.style.transform = 'translateY(-30px)';
  title.style.opacity = '0';
  subtitle.style.transform = 'translateY(-30px)';
  subtitle.style.opacity = '0';
  listItems.forEach((item) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
  });

 
  window.addEventListener('load', () => {

    preloader.style.transition = 'opacity 0.5s ease';
    preloader.style.opacity = '0';

 
    setTimeout(() => {
      preloader.style.display = 'none';

  
 
      setTimeout(() => {
        header.style.transition = 'opacity 0.8s ease';
        header.style.opacity = '1';
      }, 100);

   
      setTimeout(() => {
        title.style.transition = 'transform 0.7s ease, opacity 0.7s ease';
        title.style.transform = 'translateY(0)';
        title.style.opacity = '1';
      }, 400);

      setTimeout(() => {
        subtitle.style.transition = 'transform 0.7s ease, opacity 0.7s ease'; 
        subtitle.style.transform = 'translateY(0)';
        subtitle.style.opacity = '1';
      }, 700);

     
      listItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.transition = 'transform 0.5s ease, opacity 0.5s ease'; 
          item.style.transform = 'translateX(0)';
          item.style.opacity = '1';
        }, 1000 + (index * 100)); 
      });

    }, 500);
  });
}
