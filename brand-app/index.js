import './ucdlib-theme-brand-app.js';

// IMPORT APP PAGES HERE
import "./pages/page-ucdlib-range-slider.js";

// guides
import "./pages/page-overview.js";
import "./pages/page-brand-colors";
import "./pages/page-infographics.js";
import "./pages/page-fonts.js";
import "./pages/page-brand-buttons.js";
import "./pages/page-brand-selectors.js";

import "./components.js";

import { PageWidthController } from "@ucd-lib/theme-elements/utils/controllers";
(new PageWidthController).init();
