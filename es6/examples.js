'use strict';

const examples = {
  vanillaApp: require('./examples/vanillaApp'),
  reduxApp: require('./examples/reduxApp')
};

Object.assign(window, examples);
