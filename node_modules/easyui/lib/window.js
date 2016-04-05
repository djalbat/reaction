'use strict';

var $ = require('jquery');

class Window {
  constructor() {
    this.$element = $(window);  ///
  }

  onResize(handler) {
    this.$element.resize(handler);
  }
}

var window = new Window();

module.exports = window;
