'use strict';

var easyui = require('easyui'),
    Element = easyui.Element;

class JSXDOMElement {
  constructor(elementOrDisplayName, properties, children) {
    this.element = (elementOrDisplayName instanceof Element) ?
                     elementOrDisplayName : ///
                       fromDisplayName(elementOrDisplayName); ///

    this.addPropertiesToElement(properties);

    children.forEach(function(child) {
      child.mount(this);  ///
    }.bind(this));
  }
  
  getElement() {
    return this.element;
  }

  mount(parentJSXElement) {
    parentJSXElement.append(this);
  }

  update(oldJSXElement) {
    oldJSXElement.appendAfter(this);

    oldJSXElement.remove();
  }

  unmount() {
    this.remove();
  }

  append(jsxElement) {
    var element = jsxElement.getElement();

    this.element.append(element);
  }

  appendAfter(jsxElement) {
    var element = jsxElement.getElement();

    this.element.appendAfter(element);
  }

  remove() { this.element.remove(); }

  empty() { this.element.empty(); }

  addPropertiesToElement(properties) {
    if (properties === null) {
      return;
    }

    var propertyNames = Object.keys(properties);

    propertyNames.forEach(function (propertyName) {
      var propertyValue = properties[propertyName];

      if (propertyName === 'ref') {
        var callback = propertyValue, ///
            domElement = this.element.$element[0],  ///
            ref = domElement; ///

        callback(ref)
      } else {
        if (typeof propertyValue === 'function') {
          if (beginsWith(propertyName, 'on')) {
            var events = propertyName.substring(2).toLowerCase(), ///
                handler = propertyValue;  ///

            this.element.on(events, handler);
          }
        } else {
          var attributeName,
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

          if (typeof attributeValue === 'object') {
            this.addObjectAttribute(attributeName, attributeValue);
          } else {
            this.element.addAttribute(attributeName, attributeValue);
          }
        }
      }
    }.bind(this));
  }

  addObjectAttribute(attributeName, attributeValue) {
    var domElement = this.element.$element[0],  ///
        keys = Object.keys(attributeValue);

    keys.forEach(function(key) {
      var value = attributeValue[key];

      domElement[attributeName][key] = value;
    });
  }

  static fromDOMElement(domElement) {
    var element = Element.fromDOMElement(domElement),
        properties = null,
        children = [];
    
    return new JSXDOMElement(element, properties, children);
  }
}

module.exports = JSXDOMElement;

function fromDisplayName(displayName) {
  var elementHTML = '<' + displayName + '/>',
      element = Element.fromHTML(elementHTML);

  return element;
}

function beginsWith(string, beginningString) {
  var regExp = new RegExp('^' + beginningString),
      matches = string.match(regExp);

  return !!matches; ///
}
