'use strict';

var ReactComponent = require('./reactComponent'),
    ReactClass = require('./reactClass'),
    JSXElement = require('./jsxElement'),
    JSXTextElement = require('./jsxTextElement'),
    JSXReactElement = require('./jsxReactElement'),
    JSXFunctionElement = require('./jsxFunctionElement'),
    JSXComponentElement = require('./jsxComponentElement');

class React {
  static createClass(properties) {
    var reactClass = ReactClass.fromProperties(properties);

    return reactClass;
  }

  static createElement(reactThing, properties, ...remainingArguments) {
    if (reactThing === undefined) {
      return undefined;
    }

    var jsxElement = undefined,
        childJSXElements = childJSXElementsFromRemainingArguments.apply(null, remainingArguments);

    if (false) {

    } else if (reactThing instanceof ReactClass) {
      var reactClass = reactThing; ///

      jsxElement = new JSXReactElement(reactClass, properties, childJSXElements);
    } else if (reactThing.prototype instanceof ReactComponent) {
      var reactComponentConstructor = reactThing,  ///
          reactComponent = new reactComponentConstructor();

      jsxElement = new JSXComponentElement(reactComponent, properties, childJSXElements);
    } else if (typeof reactThing === 'function') {
      var reactFunction = reactThing;  ///

      jsxElement = new JSXFunctionElement(reactFunction, properties, childJSXElements);
    } else {
      var elementName = reactThing;  ///

      jsxElement = new JSXElement(elementName, properties, childJSXElements);
    }

    return jsxElement;
  }
}

React.Component = ReactComponent;

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
      if (remainingArgument instanceof JSXElement
       || remainingArgument instanceof JSXTextElement
       || remainingArgument instanceof JSXReactElement
       || remainingArgument instanceof JSXFunctionElement
       || remainingArgument instanceof JSXComponentElement) {
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
