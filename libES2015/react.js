'use strict';

var ReactClass = require('./reactClass'),
    JSXElement = require('./jsxElement'),
    JSXTextElement = require('./jsxTextElement'),
    JSXReactElement = require('./jsxReactElement'),
    JSXFunctionElement = require('./jsxFunctionElement');

class React {
  static createClass(properties) {
    var reactClass = ReactClass.fromProperties(properties);

    return reactClass;
  }

  static createElement(reactClassOrElementName, properties, ...remainingArguments) {
    if (reactClassOrElementName === undefined) {
      return undefined;
    }

    var jsxElement = undefined,
        childJSXElements = childJSXElementsFromRemainingArguments.apply(null, remainingArguments);

    if (reactClassOrElementName instanceof ReactClass) {
      var reactClass = reactClassOrElementName; ///

      jsxElement = new JSXReactElement(reactClass, properties, childJSXElements);
    } else if (typeof reactClassOrElementName === 'function') {
      var reactFunction = reactClassOrElementName,  ///
          _ref = properties;  ///

      jsxElement = new JSXFunctionElement(reactFunction, _ref);
    } else {
      var elementName = reactClassOrElementName;  ///

      jsxElement = new JSXElement(elementName, properties, childJSXElements);
    }

    return jsxElement;
  }
}

function childJSXElementsFromRemainingArguments() {
  var childJSXElements,
      remainingArguments = Array.prototype.slice.call(arguments),
      firstRemainingArgument = first(remainingArguments);

  if (false) {
    
  } else if (firstRemainingArgument === undefined) {
    childJSXElements = [];
  } else if (firstRemainingArgument instanceof Array) {
    childJSXElements = firstRemainingArgument;  ///
  } else {
    childJSXElements = remainingArguments.map(function(remainingArgument) {
      if (remainingArgument instanceof JSXElement) {
        var childJSXElement = remainingArgument;  ///

        return childJSXElement;
      } else {
        var text = '' + remainingArgument,  ///
            childJSXTextElement = new JSXTextElement(text);

        return childJSXTextElement;
      }
    });
  }

  return childJSXElements;
}

function first(array) { return array[0]; }

module.exports = React;
