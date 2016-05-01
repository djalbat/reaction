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
    key: 'mount',
    value: function mount(parent, reference) {
      this.parent = parent;

      if (this.domElement === null) {
        return;
      }

      var parentDOMElement = this.parentDOMElement(parent),
          referenceDOMElement = this.referenceDOMElement(reference);

      parentDOMElement.insertBefore(this.domElement, referenceDOMElement);
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      if (this.domElement === null) {
        return;
      }

      this.domElement.parentElement.removeChild(this.domElement);
    }
  }, {
    key: 'remove',
    value: function remove() {
      if (this.domElement === null) {
        return;
      }

      this.domElement.parentElement.removeChild(this.domElement);
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
    key: 'parentDOMElement',
    value: function parentDOMElement(parent) {
      var parentDOMElement = parent.getDOMElement();

      while (parentDOMElement === null) {
        parent = parent.getParent();

        parentDOMElement = parent.getDOMElement();
      }

      return parentDOMElement;
    }
  }, {
    key: 'referenceDOMElement',
    value: function referenceDOMElement(reference) {
      var referenceDOMElement = reference !== null ? reference.getDOMElement() : null;

      return referenceDOMElement;
    }
  }, {
    key: 'childReference',
    value: function childReference(child) {
      var childReference = this.findChildReference(child);

      if (childReference !== null) {
        return childReference;
      }

      var domElement = this.getDOMElement();

      if (domElement !== null) {
        return null;
      }

      var parent = this.getParent();

      child = this;

      return parent.childReference(child);
    }
  }, {
    key: 'findChildReference',
    value: function findChildReference(child) {
      var childIndex = indexOf(child, this.children),
          children = this.children.slice(childIndex + 1),
          childReference = children.reduce(function (childReference, child) {
        if (childReference === null) {
          var childDOMElement = child.getDOMElement();

          if (childDOMElement !== null) {
            childReference = child;
          } else {
            childReference = child.findChildReference(null);
          }
        }

        return childReference;
      }, null);

      return childReference;
    }
  }], [{
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      var children = [],
          props = {
        children: children
      };

      return new Element(domElement, props);
    }
  }]);

  return Element;
}();

function indexOf(element, array) {
  var index = -1;

  array.some(function (currentElement, currentElementIndex) {
    if (currentElement === element) {
      index = currentElementIndex;

      return true;
    } else {
      return false;
    }
  });

  return index;
}

module.exports = Element;