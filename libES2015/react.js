'use strict';

var ReactComponent = require('./reactComponent'),
    ReactClass = require('./reactClass'),
    Element = require('./element'),
    TextElement = require('./textElement'),
    ReactElement = require('./reactElement'),
    DisplayElement = require('./displayElement'),
    ReactClassElement = require('./reactClassElement'),
    ReactFunctionElement = require('./reactFunctionElement'),
    ReactComponentElement = require('./reactComponentElement');

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
        element;

    if (false) {

    } else if (firstArgument.prototype instanceof ReactComponent) {
      var reactComponentConstructor = firstArgument,  ///
          reactComponent = new reactComponentConstructor();

      element = new ReactComponentElement(reactComponent, properties, children);
    } else if (firstArgument instanceof ReactClass) {
      var reactClass = firstArgument; ///

      element = new ReactClassElement(reactClass, properties, children);
    } else if (typeof firstArgument === 'function') {
      var reactFunction = firstArgument;  ///

      element = new ReactFunctionElement(reactFunction, properties, children);
    } else {
      var displayName = firstArgument;  ///

      element = new DisplayElement(displayName, properties, children);
    }

    return element;
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

    if (remainingArgument instanceof Element
     || remainingArgument instanceof ReactElement) {
      child = remainingArgument;  ///
    } else {
      var text = '' + remainingArgument,  ///
          jsxTextElement = new TextElement(text);

      child = jsxTextElement; ///
    }

    return child;
  });

  return children;
}

function first(array) { return array[0]; }
