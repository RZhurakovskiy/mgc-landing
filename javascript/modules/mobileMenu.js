export function initializeMobileMenu() {
    console.log("ok");
    
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
        item.style.animationDelay = `.${index + 2}s`;
    });
}
