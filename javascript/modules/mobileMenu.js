document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const mobileButton = document.querySelector('.mobile div');

    if (window.scrollY > header.offsetHeight) {
        mobileButton.style.opacity = '1';
        mobileButton.style.transition = 'opacity 0.1s ease';
    } else {
        mobileButton.style.opacity = '0';
    }
});

export function initializeMobileMenu() { 
    const mobileDivs = document.querySelectorAll('.mobile div'); 
    const mobileNav = document.querySelector('.mobile nav'); 
    const mobileNavListItems = document.querySelectorAll('.mobile ul li'); 

    mobileDivs.forEach(div => { 
        div.addEventListener('click', () => { 
            mobileDivs.forEach(d => d.classList.toggle('active')); 
            mobileNav.classList.toggle('open'); 
            mobileNav.querySelector('ul').classList.toggle('show'); 
        }); 
    }); 

    mobileNavListItems.forEach((item, index) => { 
        item.style.animationDelay = `${(index + 0.1) / 5}s`; 
        item.addEventListener('click', () => { 
            mobileDivs.forEach(d => d.classList.remove('active')); 
            mobileNav.classList.remove('open'); 
            mobileNav.querySelector('ul').classList.remove('show'); 
        });
    }); 
}
