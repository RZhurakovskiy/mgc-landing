import { initializePreloader } from "./modules/preloader.js";
import { animateHeader } from "./modules/animateHeader.js";
import { initParralaxAnimation } from "./modules/parallaxAnimation.js";
import { initDistrictInteractions } from "./modules/maps.js";
import { initializeMobileMenu } from "./modules/mobileMenu.js";
import { animateEngineering } from './modules/animateEngineering.js';  
import { animateInteriorExterior } from './modules/animateInteriorExterior.js';

initializePreloader();
animateHeader();
initParralaxAnimation();
initDistrictInteractions();
initializeMobileMenu();
animateEngineering();
animateInteriorExterior();