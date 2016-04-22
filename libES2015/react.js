'use strict';

var ReactClass = require('./reactClass'),
    ReactComponent = require('./reactComponent'),
    Element = require('./element'),
    BaseElement = require('./baseElement'),
    TextElement = require('./textElement'),
    ClassElement = require('./classElement'),
    DisplayElement = require('./displayElement'),
    FunctionElement = require('./functionElement'),
    ComponentElement = require('./componentElement');

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

      element = new ComponentElement(reactComponent, properties, children);
    } else if (firstArgument instanceof ReactClass) {
      var reactClass = firstArgument; ///

      element = new ClassElement(reactClass, properties, children);
    } else if (typeof firstArgument === 'function') {
      var reactFunction = firstArgument;  ///

      element = new FunctionElement(reactFunction, properties, children);
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
     || remainingArgument instanceof BaseElement) {
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
