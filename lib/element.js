'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(domElement, props) {
    _classCallCheck(this, Element);

    this.domElement = domElement;
    this.props = props;

    this.parent = undefined;
    this.sibling = undefined;

    this.children = props.children; ///
  }

  _createClass(Element, [{
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'getParent',
    value: function getParent() {
      return this.parent;
    }
  }, {
    key: 'getSibling',
    value: function getSibling() {
      return this.sibling;
    }
  }, {
    key: 'getChildren',
    value: function getChildren() {
      return this.children;
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(attributeName, attributeValue) {
      if (attributeName === 'className') {
        attributeName = 'class';
      }
      if (attributeName === 'htmlFor') {
        attributeName = 'for';
      }

      if (false) {} else if (typeof attributeValue === 'string') {
        this.domElement.setAttribute(attributeName, attributeValue);
      } else if ((typeof attributeValue === 'undefined' ? 'undefined' : _typeof(attributeValue)) === 'object') {
        var keys = Object.keys(attributeValue);

        keys.forEach(function (key) {
          var value = attributeValue[key];

          this.domElement[attributeName][key] = value;
        }.bind(this));
      } else {
        ///
      }
    }
  }, {
    key: 'setHandler',
    value: function setHandler(eventName, handler) {
      this.domElement[eventName] = handler;
    }
  }, {
    key: 'mount',
    value: function mount(parent, sibling) {
      this.parent = parent;
      this.sibling = sibling;

      _mount(this, parent, sibling);
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.remove();
    }
  }, {
    key: 'remount',
    value: function remount() {
      ///
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.domElement.parentElement.removeChild(this.domElement);
    }
  }, {
    key: 'prepend',
    value: function prepend(child) {
      var childDOMElement = child.getDOMElement();

      this.domElement.insertBefore(childDOMElement, this.domElement.firstChild);

      return true;
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(sibling) {
      var siblingDOMElement = sibling.getDOMElement();

      this.domElement.parentElement.insertBefore(siblingDOMElement, this.domElement.nextSibling);

      return true;
    }
  }]);

  return Element;
}();

module.exports = Element;

function _mount(element, parent, sibling) {
  var lastSibling = sibling;

  if (mountToSiblings(element, lastSibling) || mountToParent(element, parent)) {
    return true;
  }

  sibling = parent.getSibling();
  parent = parent.getParent();

  _mount(element, parent, sibling);
}

function mountToSiblings(element, lastSibling) {
  var sibling = lastSibling;

  while (sibling !== null) {
    if (mountToSibling(element, sibling)) {
      return true;
    } else {
      sibling = sibling.getSibling();
    }
  }

  return false;
}

function mountToSibling(element, sibling) {
  if (sibling.appendAfter(element)) {
    return true;
  }

  var siblingChildren = sibling.getChildren(),
      siblingsLastChild = last(siblingChildren);

  return _mount(element, sibling, siblingsLastChild);
}

function mountToParent(element, parent) {
  return parent.prepend(element);
}

function last(array) {
  return array[array.length - 1];
}