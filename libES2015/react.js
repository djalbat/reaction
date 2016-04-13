'use strict';

var ReactClass = require('./reactClass'),
    JSXElement = require('./jsxElement'),
    JSXTextElement = require('./jsxTextElement'),
    JSXReactElement = require('./jsxReactElement');

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

    if (typeof reactClassOrElementName === 'string') {
      var elementName = reactClassOrElementName;  ///

      jsxElement = new JSXElement(elementName, properties, childJSXElements);
      
      return jsxElement;
    }

    var reactClass = reactClassOrElementName, ///
        render = reactClass.getRender();

    if (render === undefined) {
      var displayName = reactClass.getDisplayName();
          elementName = displayName;  ///

      jsxElement = new JSXElement(elementName, properties, childJSXElements);
      
      return jsxElement;
    } 
    
    {
      jsxElement = new JSXReactElement(reactClass, properties);

      return jsxElement;
    }
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
