"use strict";

import hooksApp from "./example/hooksApp";
import reduxApp from "./example/reduxApp";
import vanillaApp from "./example/vanillaApp";

Object.assign(window, {
  hooksApp,
  reduxApp,
  vanillaApp
});
