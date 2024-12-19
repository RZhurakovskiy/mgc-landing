import { initializePreloader } from "./modules/preloader.js";
import { initializeMobileMenu } from "./modules/mobileMenu.js";
import { animateHeader } from "./modules/animateHeader.js";
import { initParralaxAnimation1 } from "./modules/parallaxAnimation1.js";
import { initParralaxAnimation2 } from "./modules/parallaxAnimation2.js";
import { initDistrictInteractions } from "./modules/maps.js";

import { animateEngineering } from "./modules/animateEngineering.js";
import { animateInteriorExterior } from "./modules/animateInteriorExterior.js";
import { animateInnovativeAutoglass } from "./modules/animateInnovativeAutoglass.js"; 
import { animateTechnological } from "./modules/animateTechnological.js";
import { animanteTechnologyArt } from "./modules/animanteTechnologyArt.js";

initializePreloader();
initializeMobileMenu();
animateHeader();
initParralaxAnimation1();
initParralaxAnimation2();
initDistrictInteractions();

animateEngineering();
animateInteriorExterior();
animateInnovativeAutoglass();
animateTechnological();
animanteTechnologyArt();
