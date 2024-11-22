import './config/firebaseInit.js';
import page from "./lib/page.js";
import layoutView from "./views/layoutView.js";

import catsView from "./views/cats/catsView.js";
import homeView from "./views/homeView.js";
import loginView from './views/loginView.js';
import { authMiddleware } from './middlewares/authMiddleware.js';
import logoutView from './views/logoutView.js';
import registerView from './views/registerView.js';
import createView from './views/cats/createView.js';
import detailsView from './views/cats/detailsView.js';

// Setup layout
page(authMiddleware);
page(layoutView);

// Setup routes
page('/', homeView);
page('/cats', catsView);
page('/cats/create', createView);
page('/cats/:catId/details', detailsView);
page('/login', loginView);
page('/logout', logoutView);
page('/register', registerView);

// Start routing
page();

