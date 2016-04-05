'use strict';

var JSXElement = require('../lib/jsxElement'),
    ReactClass = require('../lib/reactClass');

class React {
  static createClass(properties) {
    var reactClass = ReactClass.fromProperties(properties);

    return reactClass;
  }

  static createElement(reactClass, attributes, ...childJSXElements) {
    if (reactClass !== undefined) {
      var elementName = reactClass.getElementName();

      if (childJSXElements[0] === undefined) {  ///
        childJSXElements = [];
      }

      var jsxElement = new JSXElement(elementName, attributes, childJSXElements);

      return jsxElement;
    }
  }
}

module.exports = React;
