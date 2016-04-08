'use strict';

var easyui = require('easyui'),
    Element = easyui.Element;

var ReactClass = require('./reactClass'),
    JSXElement = require('./jsxElement'),
    JSXTextElement = require('./jsxTextElement');

class React {
  static createClass(properties) { return ReactClass.fromProperties(properties); }

  static createElement(reactClassOrElementName, properties, ...remainingArguments) {
    if (reactClassOrElementName === undefined) {
      return undefined; ///
    }

    var element,
        childJSXElements = childJSXElementsFromRemainingArguments.apply(null, remainingArguments),  ///
        jsxElement = undefined; ///

    if (typeof reactClassOrElementName === 'string') {
      var elementName = reactClassOrElementName,
          elementHTML = '<' + elementName + '/>';
          element = Element.fromHTML(elementHTML);

      addPropertiesAsAttributes(element, properties);

      jsxElement = new JSXElement(element, childJSXElements);
    } else {
      var reactClass = reactClassOrElementName, ///
          render = reactClass.getRender();

      if (render !== undefined) {
        var children = childJSXElements,  ///
            instance = reactClass.instance(properties, children),
            componentDidMount = reactClass.getComponentDidMount();

        jsxElement = render.apply(instance);

        jsxElement.setComponentDidMount(componentDidMount.bind(instance));  ///
      }
    }

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

function addPropertiesAsAttributes(element, properties) {
  if (properties) {
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
