'use strict';

var ReactClass = require('../lib/reactClass'),
    JSXElement = require('../lib/jsxElement'),
    JSXTextElement = require('../lib/jsxTextElement');

class React {
  static createClass(properties) {
    var reactClass = ReactClass.fromProperties(properties);

    return reactClass;
  }

  static createElement(reactClassOrElementName, properties, ...remainingArguments) {
    if (reactClassOrElementName !== undefined) {
      var jsxElement,
          elementName,
          childJSXElements = childJSXElementsFromRemainingArguments.apply(null, remainingArguments);

      if (typeof reactClassOrElementName === 'string') {
        elementName = reactClassOrElementName;
      } else {
        var reactClass = reactClassOrElementName,
            render = reactClass.getRender();

        if (render !== undefined) {
          var props = (properties === null) ? {} : properties,
              children = childJSXElements;  ///

          props.children = children;

          var instance = {
            props: props
          };
          
          return render.apply(instance);
        }

        elementName = reactClass.getElementName();
      }

      jsxElement = new JSXElement(elementName, properties, childJSXElements);

      return jsxElement;
    }
  }
}

function childJSXElementsFromRemainingArguments() {
  var childJSXElements = undefined, ///
      remainingArguments = Array.prototype.slice.call(arguments), ///
      firstRemainingArgument = first(remainingArguments);

  if (firstRemainingArgument === undefined) {
    childJSXElements = [];
  } else if (firstRemainingArgument instanceof Array) {
    childJSXElements = firstRemainingArgument;  ///
  } else {
    childJSXElements = remainingArguments.map(function(remainingArgument) {
      if (typeof remainingArgument === 'string') {
        var text = remainingArgument,  ///
            childJSXTextElement = new JSXTextElement(text);

        return childJSXTextElement;
      } else {
        var childJSXElement = remainingArgument;  ///

        return childJSXElement;
      }
    });
  }

  return childJSXElements;
}

function first(array) { return array[0]; }

module.exports = React;
