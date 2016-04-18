'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    Element = easyui.Element;

var JSXElement = function () {
  function JSXElement(elementOrElementName, properties, childJSXElements) {
    _classCallCheck(this, JSXElement);

    var element;

    if (elementOrElementName instanceof Element) {
      element = elementOrElementName; ///
    } else {
        var elementName = elementOrElementName,
            ///
        elementHTML = '<' + elementName + '/>';

        element = Element.fromHTML(elementHTML);
      }

    this.element = element;

    this.properties = properties;

    this.childJSXElements = childJSXElements;

    this.addPropertiesToElementAsAttributes();
  }

  _createClass(JSXElement, [{
    key: 'getElement',
    value: function getElement() {
      return this.element;
    }
  }, {
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.childJSXElements.forEach(function (childJSXElement) {
        childJSXElement.mount(this);
      }.bind(this));

      parentJSXElement.append(this);
    }
  }, {
    key: 'append',
    value: function append(jsxElementOrString) {
      if (typeof jsxElementOrString === 'string') {
        var string = jsxElementOrString; ///

        this.element.append(string);
      } else {
        var jsxElement = jsxElementOrString,
            ///
        element = jsxElement.getElement();

        this.element.append(element);
      }
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.element.remove();
    }
  }, {
    key: 'empty',
    value: function empty() {
      this.element.empty();
    }
  }, {
    key: 'addPropertiesToElementAsAttributes',
    value: function addPropertiesToElementAsAttributes() {
      if (this.properties === null) {
        return;
      }

      var propertyNames = Object.keys(this.properties);

      propertyNames.forEach(function (propertyName) {
        var attributeName,
            propertyValue = this.properties[propertyName];

        if (typeof propertyValue === 'function') {
          if (beginsWith(propertyName, 'on')) {
            var events = propertyName.substring(2).toLowerCase(),
                ///
            handler = propertyValue; ///

            this.element.on(events, handler);
          }
        } else {
          var attributeValue = propertyValue;

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

          this.element.addAttribute(attributeName, attributeValue);
        }
      }.bind(this));
    }
  }], [{
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      var element = Element.fromDOMElement(domElement),
          properties = null,
          childJSXElements = [];

      return new JSXElement(element, properties, childJSXElements);
    }
  }]);

  return JSXElement;
}();

module.exports = JSXElement;

function beginsWith(string, beginningString) {
  var regExp = new RegExp('^' + beginningString),
      matches = string.match(regExp);

  return !!matches; ///
}