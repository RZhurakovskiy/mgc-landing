import { initializePreloader } from "./modules/preloader.js";
import { initializeMobileMenu } from "./modules/mobileMenu.js";
import { animateHeader } from "./modules/animateHeader.js";

import { initDistrictInteractions } from "./modules/maps.js";
import { animateInteriorExterior } from "./modules/animateInteriorExterior.js";
import { animateInnovativeAutoglass } from "./modules/animateInnovativeAutoglass.js";
import { animateTechnological } from "./modules/animateTechnological.js";
import { animateTechnologyArt } from "./modules/animateTechnologyArt.js";
import { animateMgcSystems } from "./modules/animateMgcSystems.js";
import { animateFutureInnovations } from "./modules/animateFutureInnovations.js";

initializePreloader();
initializeMobileMenu();
animateHeader();

initDistrictInteractions();
animateInteriorExterior();
animateInnovativeAutoglass();
animateTechnological();
animateTechnologyArt();
animateMgcSystems();
animateFutureInnovations();
