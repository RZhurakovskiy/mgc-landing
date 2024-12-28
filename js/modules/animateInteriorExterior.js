export function animateInteriorExterior() {  
    let section = document.getElementById("interior-exterior"),  
        title = section.querySelector(".interior-exterior-title"),  
        items = section.querySelectorAll(".interior-exterior-item"),  
        appearedElements = new Set();  

    const debounce = (func, delay) => {  
        let timeout;  
        return function(...args) {  
            clearTimeout(timeout);  
            timeout = setTimeout(() => func.apply(this, args), delay);  
        };  
    };  

    const checkVisibility = () => {  
        let windowHeight = window.innerHeight;  

        // Функция для анимации элемента 
        const animateElement = (element, animationProps, delay = 0) => { 
            if (!appearedElements.has(element)) {  
                setTimeout(() => {  
                    gsap.to(element, animationProps);  
                    appearedElements.add(element);  
                }, delay);  
            }  
        }; 

        // Проверка видимости для заголовка 
        if (isElementInViewport(title)) {  
            animateElement(title, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" });  
        } 

        // Проверка видимости для пунктов 
        items.forEach((item, index) => {  
            if (isElementInViewport(item)) {  
                animateElement(item, { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }, 200 * index);  
            }  
        });  
    };  

    const isElementInViewport = (element) => { 
        const rect = element.getBoundingClientRect(); 
        return rect.top >= 0 && rect.bottom <= window.innerHeight;  
    }; 

    gsap.set(title, { opacity: 0, y: -50 });  
    gsap.set(items, { opacity: 0, x: -50 });  

    window.addEventListener("scroll", debounce(checkVisibility, 100));  
    checkVisibility();  
}
