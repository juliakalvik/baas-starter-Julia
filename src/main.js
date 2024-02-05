// setup for the BaaS provider may (or may not) be called here
import { app, analytics } from "./js/backend/setup.js";

import router from "./js/router/router.js";
router();

console.log("app", app);
