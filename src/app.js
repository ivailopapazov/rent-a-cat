import page from "./lib/page.js";

import catsView from "./views/catsView.js";
import homeView from "./views/homeView.js";

// Setup routes
page('/', homeView);
page('/cats', catsView);

// Start routing
page();
