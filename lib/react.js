'use strict';

var JSXElement = require('../lib/jsxElement'),
    ReactClass = require('../lib/reactClass');

class React {
  static createClass(properties) {
    var reactClass = ReactClass.fromProperties(properties);

    return reactClass;
  }

  static createElement(reactClassOrElementName, properties, childJSXElementsOrHTML) {
    if (reactClassOrElementName !== undefined) {
      var jsxElement,
          elementName,
          childJSXElements = [],
          html = undefined; ///

      if (typeof childJSXElementsOrHTML === 'string') {
        html = childJSXElementsOrHTML;
      } else {
        var argumentsLength = arguments.length;

        for (var i = 2; i < argumentsLength; i++) {
          var argument = arguments[i],
              childJSXElement = argument; ///

          childJSXElements.push(childJSXElement);
        }
      }

      if (typeof reactClassOrElementName === 'string') {
        elementName = reactClassOrElementName;
      } else {
        var reactClass = reactClassOrElementName,
            render = reactClass.getRender();

        if (render !== undefined) {
          var props = properties, ///
              instance = {
                props: props
              };

          return render.apply(instance);
        }

        elementName = reactClass.getElementName();
      }

      jsxElement = new JSXElement(elementName, properties, childJSXElements);

      if (html !== undefined) {
        jsxElement.html(html);
      }

      return jsxElement;
    }
  }
}

module.exports = React;
