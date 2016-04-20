'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    Element = easyui.Element;

var JSXDOMElement = function () {
  function JSXDOMElement(elementOrElementName, properties, children) {
    _classCallCheck(this, JSXDOMElement);

    this.element = elementOrElementName instanceof Element ? elementOrElementName : ///
    fromElementName(elementOrElementName); ///

    this.addPropertiesToElement(properties);

    children.forEach(function (child) {
      child.mount(this); ///
    }.bind(this));
  }

  _createClass(JSXDOMElement, [{
    key: 'getElement',
    value: function getElement() {
      return this.element;
    }
  }, {
    key: 'mount',
    value: function mount(parentJSXElement) {
      parentJSXElement.append(this);
    }
  }, {
    key: 'remount',
    value: function remount(oldJSXElement) {
      oldJSXElement.appendAfter(this);

      oldJSXElement.remove();
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.remove();
    }
  }, {
    key: 'append',
    value: function append(jsxElement) {
      var element = jsxElement.getElement();

      this.element.append(element);
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(jsxElement) {
      var element = jsxElement.getElement();

      this.element.appendAfter(element);
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
    key: 'addPropertiesToElement',
    value: function addPropertiesToElement(properties) {
      if (properties === null) {
        return;
      }

      var propertyNames = Object.keys(properties);

      propertyNames.forEach(function (propertyName) {
        var propertyValue = properties[propertyName];

        if (propertyName === 'ref') {
          var callback = propertyValue,
              ///
          domElement = this.element.$element[0],
              ///
          ref = domElement; ///

          callback(ref);
        } else {
          if (typeof propertyValue === 'function') {
            if (beginsWith(propertyName, 'on')) {
              var events = propertyName.substring(2).toLowerCase(),
                  ///
              handler = propertyValue; ///

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

            if ((typeof attributeValue === 'undefined' ? 'undefined' : _typeof(attributeValue)) === 'object') {
              this.addObjectAttribute(attributeName, attributeValue);
            } else {
              this.element.addAttribute(attributeName, attributeValue);
            }
          }
        }
      }.bind(this));
    }
  }, {
    key: 'addObjectAttribute',
    value: function addObjectAttribute(attributeName, attributeValue) {
      var domElement = this.element.$element[0],
          ///
      keys = Object.keys(attributeValue);

      keys.forEach(function (key) {
        var value = attributeValue[key];

        domElement[attributeName][key] = value;
      });
    }
  }], [{
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      var element = Element.fromDOMElement(domElement),
          properties = null,
          children = [];

      return new JSXDOMElement(element, properties, children);
    }
  }]);

  return JSXDOMElement;
}();

module.exports = JSXDOMElement;

function fromElementName(elementName) {
  var elementHTML = '<' + elementName + '/>',
      element = Element.fromHTML(elementHTML);

  return element;
}

function beginsWith(string, beginningString) {
  var regExp = new RegExp('^' + beginningString),
      matches = string.match(regExp);

  return !!matches; ///
}