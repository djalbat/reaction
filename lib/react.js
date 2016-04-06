'use strict';

var JSXElement = require('../lib/jsxElement'),
    ReactClass = require('../lib/reactClass');

class React {
  static createClass(properties) {
    var reactClass = ReactClass.fromProperties(properties);

    return reactClass;
  }

  static createElement(reactClassOrElementName, attributes, ...childJSXElements) {
    if (reactClassOrElementName !== undefined) {
      if (childJSXElements[0] === undefined) {  ///
        childJSXElements = [];
      }

      var elementName,
          jsxElement;

      if (typeof reactClassOrElementName === 'string') {
        elementName = reactClassOrElementName;

        var html = childJSXElements;  ///

        childJSXElements = [];

        jsxElement = new JSXElement(elementName, attributes, childJSXElements);

        jsxElement.html(html);
      } else {
        var reactClass = reactClassOrElementName,
            render = reactClass.getRender();

        if (render !== undefined) {
          return render();
        }

        elementName = reactClass.getElementName();

        jsxElement = new JSXElement(elementName, attributes, childJSXElements);
      }
      
      return jsxElement;
    }
  }
}

module.exports = React;
