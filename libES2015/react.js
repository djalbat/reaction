'use strict';

var easyui = require('easyui'),
    Element = easyui.Element;

var ReactClass = require('./reactClass'),
    JSXElement = require('./jsxElement'),
    JSXTextElement = require('./jsxTextElement'),
    JSXRenderedElement = require('./jsxRenderedElement');

class React {
  static createClass(properties) { return ReactClass.fromProperties(properties); }

  static createElement(reactClassOrElementName, properties = {}, ...remainingArguments) {
    if (reactClassOrElementName === undefined) {
      return undefined;
    }

    var jsxElement = undefined,
        childJSXElements = childJSXElementsFromRemainingArguments.apply(null, remainingArguments);

    var elementName,
        elementHTML,
        element;

    if (typeof reactClassOrElementName === 'string') {
      elementName = reactClassOrElementName;
      elementHTML = '<' + elementName + '/>';
      element = Element.fromHTML(elementHTML);

      addPropertiesToElementAsAttributes(element, properties);

      jsxElement = new JSXElement(element, childJSXElements);

      return jsxElement;
    }

    var reactClass = reactClassOrElementName, ///
        render = reactClass.getRender();

    if (render === undefined) {
      var displayName = reactClass.getDisplayName();

      elementName = displayName;  ///
      elementHTML = '<' + elementName + '/>';
      element = Element.fromHTML(elementHTML);

      addPropertiesToElementAsAttributes(element, properties);

      jsxElement = new JSXElement(element, childJSXElements);

      return jsxElement;
    }

    jsxElement = new JSXRenderedElement(reactClass, properties, childJSXElements);
    
    return jsxElement;
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

function addPropertiesToElementAsAttributes(element, properties) {
  if (properties !== null) {
    var propertyNames = Object.keys(properties);

    propertyNames.forEach(function (propertyName) {
      var attributeName,
          propertyValue = properties[propertyName],
          attributeValue = propertyValue;

      switch (propertyName) {
        case 'className':
          attributeName = 'class';
          break;

        case 'htmlFor':
          attributeName = 'for';
          break;

        default:
          attributeName = propertyName;
          break;
      }

      element.addAttribute(attributeName, attributeValue);
    });
  }
}

function first(array) { return array[0]; }

module.exports = React;
