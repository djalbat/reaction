'use strict';

var ReactClass = require('./reactClass'),
    ReactComponent = require('./reactComponent'),
    JSXElement = require('./jsxElement'),
    JSXDOMElement = require('./jsxDOMElement'),
    JSXTextElement = require('./jsxTextElement'),
    JSXClassElement = require('./jsxClassElement'),
    JSXDisplayElement = require('./jsxDisplayElement'),
    JSXFunctionElement = require('./jsxFunctionElement'),
    JSXComponentElement = require('./jsxComponentElement');

class React {
  static createClass(properties) {
    var reactClass = ReactClass.fromProperties(properties);

    return reactClass;
  }

  static createElement(firstArgument, properties, ...remainingArguments) {
    if (firstArgument === undefined) {
      return undefined;
    }

    var children = childrenFromRemainingArguments(remainingArguments),
        jsxElement;

    if (false) {

    } else if (firstArgument.prototype instanceof ReactComponent) {
      var reactComponentConstructor = firstArgument,  ///
          reactComponent = new reactComponentConstructor();

      jsxElement = new JSXComponentElement(reactComponent, properties, children);
    } else if (firstArgument instanceof ReactClass) {
      var reactClass = firstArgument; ///

      jsxElement = new JSXClassElement(reactClass, properties, children);
    } else if (typeof firstArgument === 'function') {
      var reactFunction = firstArgument;  ///

      jsxElement = new JSXFunctionElement(reactFunction, properties, children);
    } else {
      var displayName = firstArgument;  ///

      jsxElement = new JSXDisplayElement(displayName, properties, children);
    }

    return jsxElement;
  }
}

React.Component = ReactComponent;

module.exports = React;

function childrenFromRemainingArguments(remainingArguments) {
  var firstRemainingArgument = first(remainingArguments);

  if (firstRemainingArgument instanceof Array) {
    remainingArguments = firstRemainingArgument;  ///
  }

  var children = remainingArguments.map(function(remainingArgument) {
    var child;

    if (remainingArgument instanceof JSXElement
     || remainingArgument instanceof JSXDOMElement) {
      child = remainingArgument;  ///
    } else {
      var text = '' + remainingArgument,  ///
          jsxTextElement = new JSXTextElement(text);

      child = jsxTextElement; ///
    }

    return child;
  });

  return children;
}

function first(array) { return array[0]; }
