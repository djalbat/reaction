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
  static createClass(object) {
    var reactClass = ReactClass.fromObject(object);

    return reactClass;
  }

  static createElement(reactObjectOrDisplayName, props, ...childArguments) {
    if (reactObjectOrDisplayName === undefined) {
      return undefined;
    }

    var children = childrenFromChildArguments(childArguments),
        element;

    if (false) {

    } else if (reactObjectOrDisplayName.prototype instanceof ReactComponent) {
      var reactComponentConstructor = reactObjectOrDisplayName,
          reactComponent = new reactComponentConstructor();

      element = new ReactComponentElement(reactComponent, props, children);
    } else if (reactObjectOrDisplayName instanceof ReactClass) {
      var reactClass = reactObjectOrDisplayName;

      element = new ReactClassElement(reactClass, props, children);
    } else if (typeof reactObjectOrDisplayName === 'function') {
      var reactFunction = reactObjectOrDisplayName;

      element = new ReactFunctionElement(reactFunction, props, children);
    } else {
      var displayName = reactObjectOrDisplayName;

      element = new DisplayElement(displayName, props, children);
    }

    return element;
  }
}

React.Component = ReactComponent;

module.exports = React;

function childrenFromChildArguments(childArguments) {
  var firstChildArgument = first(childArguments);

  if (firstChildArgument instanceof Array) {
    childArguments = firstChildArgument;
  }

  var children = childArguments.map(function(remainingArgument) {
    var child;

    if (remainingArgument instanceof Element
     || remainingArgument instanceof ReactElement) {
      child = remainingArgument;
    } else {
      var text = '' + remainingArgument,
          textElement = new TextElement(text);

      child = textElement;
    }

    return child;
  });

  return children;
}

function first(array) { return array[0]; }
