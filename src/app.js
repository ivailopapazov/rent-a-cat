import page from "./lib/page.js";
import layoutView from "./views/layoutView.js";

import catsView from "./views/catsView.js";
import homeView from "./views/homeView.js";

page(layoutView);

// Setup routes
page('/', homeView);
page('/cats', catsView);

// Start routing
page();
