import { initializePreloader } from "./modules/preloader.js";
import { initializeMobileMenu } from "./modules/mobileMenu.js";
import { animateHeader } from "./modules/animateHeader.js";
import { initParralaxAnimation } from "./modules/parallaxAnimation.js";
import { initDistrictInteractions } from "./modules/maps.js";

import { animateEngineering } from "./modules/animateEngineering.js";
import { animateInteriorExterior } from "./modules/animateInteriorExterior.js";

initializePreloader();
initializeMobileMenu();
animateHeader();
initParralaxAnimation();
initDistrictInteractions();

animateEngineering();
animateInteriorExterior();
