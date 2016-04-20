'use strict';

var ReactClass = require('./reactClass'),
    ReactComponent = require('./reactComponent'),
    JSXElement = require('./jsxElement'),
    JSXDOMElement = require('./jsxDOMElement'),
    JSXTextElement = require('./jsxTextElement'),
    JSXClassElement = require('./jsxClassElement'),
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
      var elementName = firstArgument;  ///

      jsxElement = new JSXDOMElement(elementName, properties, children);
    }

    return jsxElement;
  }
}

React.Component = ReactComponent;

module.exports = React;

function childrenFromRemainingArguments(remainingArguments) {
  remainingArguments = Array.prototype.slice.call(remainingArguments);  ///

  var firstRemainingArgument = first(remainingArguments),
      children;

  if (false) {
    
  } else if (firstRemainingArgument === undefined) {
    children = [];
  } else if (firstRemainingArgument instanceof Array) {
    children = firstRemainingArgument;  ///
  } else {
    children = remainingArguments.map(function(remainingArgument) {
      var child;
      
      if (remainingArgument.prototype instanceof JSXElement) {
        child = remainingArgument;  ///
      } else {
        var text = '' + remainingArgument,  ///
            jsxTextElement = new JSXTextElement(text);
        
        child = jsxTextElement; ///
      }
      
      return child;
    });
  }

  return children;
}

function first(array) { return array[0]; }
