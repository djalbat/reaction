(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(props) {
    _classCallCheck(this, Element);

    this.props = props;

    this.parent = null;

    this.children = props.children; ///
  }

  _createClass(Element, [{
    key: 'mount',
    value: function mount(parent) {
      this.parent = parent;
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.parent = null;
    }
  }, {
    key: 'getParent',
    value: function getParent() {
      return this.parent;
    }
  }, {
    key: 'getChildren',
    value: function getChildren() {
      return this.children;
    }
  }]);

  return Element;
}();

module.exports = Element;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var helpers = require('../helpers'),
    Element = require('../element'),
    inferenceMixin = require('./react/inferenceMixin');

var ReactElement = function (_Element) {
  _inherits(ReactElement, _Element);

  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    var _this = _possibleConstructorReturn(this, (ReactElement.__proto__ || Object.getPrototypeOf(ReactElement)).call(this, props));

    _this.state = undefined; ///

    _this.context = undefined;
    return _this;
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent);

      this.context = context;

      this.children = helpers.guaranteeArray(this.render());

      var childParent = this,
          childReference = reference,
          childContext = this.getChildContext(context) || context;

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      });

      this.componentDidMount();
    }
  }, {
    key: 'remount',
    value: function remount() {
      var childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext(this.context) || this.context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      this.children = helpers.guaranteeArray(this.render());

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      }.bind(this));
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.context = context;

      this.componentWillUnmount();

      var childContext = this.getChildContext(context) || context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return null;
    }
  }, {
    key: 'setInitialState',
    value: function setInitialState(initialState) {
      this.state = initialState; ///
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.remount();
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate(update) {
      if (update !== undefined) {
        this.render(update);
      } else {
        this.remount();
      }
    }
  }, {
    key: 'getChildReference',
    value: function getChildReference() {
      var parent = this.getParent(),
          child = this;

      return reference(parent, child);
    }
  }]);

  return ReactElement;
}(Element);

Object.assign(ReactElement.prototype, inferenceMixin);

module.exports = ReactElement;

function reference(parent, child) {
  var reference = findReference(parent, child),
      parentDOMElement = parent.getDOMElement();

  while (reference === null && parentDOMElement === null) {
    child = parent;
    parent = parent.getParent();

    reference = findReference(parent, child);
    parentDOMElement = parent.getDOMElement();
  }

  return reference;
}

function findReference(parent, child) {
  var children = parent.getChildren(),
      remainingChildren = helpers.remaining(child, children);

  return remainingChildren.reduce(function (reference, remainingChild) {
    if (reference === null) {
      var remainingChildDOMElement = remainingChild.getDOMElement();

      if (remainingChildDOMElement !== null) {
        reference = remainingChild;
      } else {
        child = null;
        parent = remainingChild;

        reference = findReference(parent, child);
      }
    }

    return reference;
  }, null);
}

},{"../element":1,"../helpers":15,"./react/inferenceMixin":6}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('../react');

var ReactClassElement = function (_ReactElement) {
  _inherits(ReactClassElement, _ReactElement);

  function ReactClassElement(reactClass, props) {
    _classCallCheck(this, ReactClassElement);

    var _this = _possibleConstructorReturn(this, (ReactClassElement.__proto__ || Object.getPrototypeOf(ReactClassElement)).call(this, props));

    _this.reactClass = reactClass;

    var initialState = _this.getInitialState();

    _this.setInitialState(initialState);
    return _this;
  }

  _createClass(ReactClassElement, [{
    key: 'render',
    value: function render(update) {
      return this.reactClass.render.call(this, update);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return this.reactClass.getInitialState.call(this);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return this.reactClass.getChildContext.call(this, context);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactClass.componentDidMount.call(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reactClass.componentWillUnmount.call(this);
    }
  }]);

  return ReactClassElement;
}(ReactElement);

module.exports = ReactClassElement;

},{"../react":2}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('../react');

var ReactComponentElement = function (_ReactElement) {
  _inherits(ReactComponentElement, _ReactElement);

  function ReactComponentElement(reactComponent, props) {
    _classCallCheck(this, ReactComponentElement);

    var _this = _possibleConstructorReturn(this, (ReactComponentElement.__proto__ || Object.getPrototypeOf(ReactComponentElement)).call(this, props));

    _this.reactComponent = reactComponent;

    var initialState = _this.getInitialState();

    _this.setInitialState(initialState);
    return _this;
  }

  _createClass(ReactComponentElement, [{
    key: 'render',
    value: function render(update) {
      return this.reactComponent.render.call(this, update);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return this.reactComponent.getInitialState.call(this);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return this.reactComponent.getChildContext.call(this, context);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactComponent.componentDidMount.call(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reactComponent.componentWillUnmount.call(this);
    }
  }]);

  return ReactComponentElement;
}(ReactElement);

module.exports = ReactComponentElement;

},{"../react":2}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('../react');

var ReactFunctionElement = function (_ReactElement) {
  _inherits(ReactFunctionElement, _ReactElement);

  function ReactFunctionElement(reactFunction, props) {
    _classCallCheck(this, ReactFunctionElement);

    var _this = _possibleConstructorReturn(this, (ReactFunctionElement.__proto__ || Object.getPrototypeOf(ReactFunctionElement)).call(this, props));

    _this.reactFunction = reactFunction;

    var initialState = _this.getInitialState();

    _this.setInitialState(initialState);
    return _this;
  }

  _createClass(ReactFunctionElement, [{
    key: 'render',
    value: function render() {
      return this.reactFunction(this.props, this.context);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return undefined;
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return undefined;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.reactFunction.componentDidMount) {
        this.reactFunction.componentDidMount(this.props, this.context);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.reactFunction.componentWillUnmount) {
        this.reactFunction.componentWillUnmount(this.props, this.context);
      }
    }
  }]);

  return ReactFunctionElement;
}(ReactElement);

module.exports = ReactFunctionElement;

},{"../react":2}],6:[function(require,module,exports){
'use strict';

function spliceChildren(start, removeCount, addedChildren) {
  var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.context;

  var firstChild = first(this.children),
      childContext = this.getChildContext(context) || context;

  firstChild.spliceChildren(start, removeCount, addedChildren, childContext);
}

function addChild(child) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

  var firstChild = first(this.children),
      childContext = this.getChildContext(context) || context;

  firstChild.addChild(child, childContext);
}

function removeChild(child) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

  var firstChild = first(this.children),
      childContext = this.getChildContext(context) || context;

  firstChild.removeChild(child, childContext);
}

function setAttribute(name, value) {
  var firstChild = first(this.children);

  return firstChild.setAttribute(name, value);
}

function getAttribute(name) {
  var firstChild = first(this.children);

  return firstChild.getAttribute(name);
}

function clearAttribute(name) {
  var firstChild = first(this.children);

  firstChild.clearAttribute(name);
}

function addAttribute(name, value) {
  var firstChild = first(this.children);

  firstChild.setClassaddAttribute(name, value);
}

function removeAttribute(name) {
  var firstChild = first(this.children);

  firstChild.removeAttribute(name);
}

function setClass(className) {
  var firstChild = first(this.children);

  firstChild.setClass(className);
}

function addClass(className) {
  var firstChild = first(this.children);

  firstChild.addClass(className);
}

function removeClass(className) {
  var firstChild = first(this.children);

  firstChild.removeClass(className);
}

function toggleClass(className) {
  var firstChild = first(this.children);

  firstChild.toggleClass(className);
}

function hasClass(className) {
  var firstChild = first(this.children);

  return firstChild.hasClass(className);
}

function clearClasses() {
  var firstChild = first(this.children);

  firstChild.clearClasses();
}

function getTagName() {
  return null;
}

var inferenceMixin = {
  spliceChildren: spliceChildren,
  addChild: addChild,
  removeChild: removeChild,
  setAttribute: setAttribute,
  getAttribute: getAttribute,
  clearAttribute: clearAttribute,
  addAttribute: addAttribute,
  removeAttribute: removeAttribute,
  setClass: setClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  hasClass: hasClass,
  clearClasses: clearClasses,
  getTagName: getTagName
};

module.exports = inferenceMixin;

function first(array) {
  return array[0];
}

},{}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var VirtualDOMNode = function (_Element) {
  _inherits(VirtualDOMNode, _Element);

  function VirtualDOMNode(props, domElement) {
    _classCallCheck(this, VirtualDOMNode);

    var _this = _possibleConstructorReturn(this, (VirtualDOMNode.__proto__ || Object.getPrototypeOf(VirtualDOMNode)).call(this, props));

    _this.domElement = domElement;
    return _this;
  }

  _createClass(VirtualDOMNode, [{
    key: 'mount',
    value: function mount(parent, reference) {
      _get(VirtualDOMNode.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMNode.prototype), 'mount', this).call(this, parent);

      parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.domElement.parentElement.removeChild(this.domElement);

      _get(VirtualDOMNode.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMNode.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }], [{
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      var children = [],
          props = {
        children: children
      },
          virtualDOMNode = new VirtualDOMNode(props, domElement);

      return virtualDOMNode;
    }
  }]);

  return VirtualDOMNode;
}(Element);

module.exports = VirtualDOMNode;

function parentDOMElement(parent) {
  var parentDOMElement = parent.getDOMElement();

  while (parentDOMElement === null) {
    parent = parent.getParent();

    parentDOMElement = parent.getDOMElement();
  }

  return parentDOMElement;
}

function referenceDOMElement(reference) {
  var referenceDOMElement = reference !== null ? reference.getDOMElement() : null;

  return referenceDOMElement;
}

},{"../element":1}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VirtualDOMNode = require('../virtualDOMNode'),
    inferenceMixin = require('./inferenceMixin');

var VirtualDOMElement = function (_VirtualDOMNode) {
  _inherits(VirtualDOMElement, _VirtualDOMNode);

  function VirtualDOMElement(tagName, props) {
    _classCallCheck(this, VirtualDOMElement);

    var domElement = document.createElement(tagName);

    return _possibleConstructorReturn(this, (VirtualDOMElement.__proto__ || Object.getPrototypeOf(VirtualDOMElement)).call(this, props, domElement));
  }

  _createClass(VirtualDOMElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(VirtualDOMElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMElement.prototype), 'mount', this).call(this, parent, reference);

      var childParent = this,
          childReference = null,
          childContext = context;

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      });

      this.applyProps();
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      var childContext = context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      _get(VirtualDOMElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'applyProps',
    value: function applyProps() {
      var names = Object.keys(this.props);

      names.forEach(function (name) {
        var value = this.props[name];

        if (false) {} else if (isHandlerName(name)) {
          this.setHandler(name, value);
        } else if (isAttributeName(name)) {
          this.setAttribute(name, value);
        } else if (name === 'ref') {
          var callback = value; ///

          callback(this.domElement);
        }
      }.bind(this));
    }
  }, {
    key: 'setHandler',
    value: function setHandler(name, value) {
      var eventType = name.substr(2).toLowerCase(),
          ///
      handler = value; ///

      this.domElement.addEventListener(eventType, handler);
    }
  }]);

  return VirtualDOMElement;
}(VirtualDOMNode);

Object.assign(VirtualDOMElement.prototype, inferenceMixin);

module.exports = VirtualDOMElement;

function isHandlerName(name) {
  return name.match(/^on/);
}

function isAttributeName(name) {
  return attributeNames.includes(name);
}

var attributeNames = ['accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap'];

},{"../virtualDOMNode":7,"./inferenceMixin":9}],9:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function spliceChildren(start, removedChildrenCount, addedChildren, context) {
  var childParent = this,
      childReference = null,
      childContext = context;

  addedChildren.forEach(function (addedChild) {
    addedChild.mount(childParent, childReference, childContext);
  });

  var args = [start, removedChildrenCount].concat(addedChildren),
      removedChildren = Array.prototype.splice.apply(this.children, args);

  removedChildren.forEach(function (removedChild) {
    removedChild.unmount(childContext);
  });
}

function addChild(child, context) {
  var start = Infinity,
      removedChildrenCount = 0,
      addedChildren = [child];

  this.spliceChildren(start, removedChildrenCount, addedChildren, context);
}

function removeChild(child, context) {
  var index = this.children.indexOf(child);

  if (index > -1) {
    var start = index,
        removedChildrenCount = 1,
        addedChildren = [];

    this.spliceChildren(start, removedChildrenCount, addedChildren, context);
  }
}

function setAttribute(name, value) {
  if (name === 'className') {
    name = 'class';
  }

  if (name === 'htmlFor') {
    name = 'for';
  }

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var keys = Object.keys(value);

    keys.forEach(function (key) {
      this.domElement[name][key] = value[key];
    }.bind(this));
  } else if (typeof value === 'boolean') {
    if (value) {
      value = name; ///

      this.domElement.setAttribute(name, value);
    }
  } else {
    this.domElement.setAttribute(name, value);
  }
}

function getAttribute(name) {
  return this.domElement.getAttribute(name);
}

function clearAttribute(name) {
  this.domElement.removeAttribute(name);
}

function addAttribute(name, value) {
  this.setAttribute(name, value);
}

function removeAttribute(name) {
  this.clearAttribute(name);
}

function setClass(className) {
  this.domElement.className = className;
}

function addClass(className) {
  this.domElement.classList.add(className);
}

function removeClass(className) {
  this.domElement.classList.remove(className);
}

function toggleClass(className) {
  this.domElement.classList.toggle(className);
}

function hasClass(className) {
  return this.domElement.classList.contains(className);
}

function clearClasses() {
  this.domElement.className = '';
}

function getTagName() {
  return this.domElement.tagName;
}

var inferenceMixin = {
  spliceChildren: spliceChildren,
  addChild: addChild,
  removeChild: removeChild,
  setAttribute: setAttribute,
  getAttribute: getAttribute,
  clearAttribute: clearAttribute,
  addAttribute: addAttribute,
  removeAttribute: removeAttribute,
  setClass: setClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  hasClass: hasClass,
  clearClasses: clearClasses,
  getTagName: getTagName
};

module.exports = inferenceMixin;

},{}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VirtualDOMNode = require('../virtualDOMNode');

var VirtualDOMTextElement = function (_VirtualDOMNode) {
  _inherits(VirtualDOMTextElement, _VirtualDOMNode);

  function VirtualDOMTextElement(text) {
    _classCallCheck(this, VirtualDOMTextElement);

    var domElement = document.createTextNode(text),
        children = [],
        props = {
      children: children
    };

    return _possibleConstructorReturn(this, (VirtualDOMTextElement.__proto__ || Object.getPrototypeOf(VirtualDOMTextElement)).call(this, props, domElement));
  }

  _createClass(VirtualDOMTextElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(VirtualDOMTextElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMTextElement.prototype), 'mount', this).call(this, parent, reference);
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      _get(VirtualDOMTextElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMTextElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'getTagName',
    value: function getTagName() {
      return undefined;
    }
  }, {
    key: 'getText',
    value: function getText() {
      var nodeValue = this.domElement.nodeValue,
          text = nodeValue; ///

      return text;
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      var nodeValue = text; ///

      this.domElement.nodeValue = nodeValue;
    }
  }]);

  return VirtualDOMTextElement;
}(VirtualDOMNode);

module.exports = VirtualDOMTextElement;

},{"../virtualDOMNode":7}],11:[function(require,module,exports){
'use strict';

module.exports = {
  vanillaApp: require('./examples/vanillaApp'),
  reduxApp: require('./examples/reduxApp')
};

},{"./examples/reduxApp":13,"./examples/vanillaApp":14}],12:[function(require,module,exports){
'use strict';

var createStore = function createStore(reducer) {
  var state = void 0,
      listeners = [];

  var getState = function getState() {
    return state;
  };

  var dispatch = function dispatch(action) {
    state = reducer(state, action);

    listeners.forEach(function (listener) {
      return listener();
    });
  };

  var subscribe = function subscribe(listener) {
    listeners.push(listener);

    return function () {
      unsubscribe(listener);
    };
  };

  var unsubscribe = function unsubscribe(l) {
    listeners = listeners.filter(function (listener) {
      return listener !== l;
    });
  };

  dispatch({});

  return { getState: getState, dispatch: dispatch, subscribe: subscribe, unsubscribe: unsubscribe };
};

var combineReducers = function combineReducers(reducers) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    var keys = Object.keys(reducers),
        nextState = keys.reduce(function (nextState, key) {
      var reducer = reducers[key];

      nextState[key] = reducer(state[key], action);

      return nextState;
    }, {});

    return nextState;
  };
};

var Redux = { createStore: createStore, combineReducers: combineReducers };

module.exports = Redux;

},{}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Redux = require('./redux');
var React = require('../react');
var ReactDOM = require('../reactDOM');
var Component = React.Component;
var Class = React.Class;
var createStore = Redux.createStore;
var combineReducers = Redux.combineReducers;


var reduxApp = function reduxApp() {
  var todo = function todo(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          id: action.id,
          text: action.text,
          completed: false
        };

      case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state;
        }

        return Object.assign({}, state, {
          completed: !state.completed
        });

      default:
        return state;
    }
  };

  var todos = function todos() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
      case 'ADD_TODO':
        return [].concat(_toConsumableArray(state), [todo(undefined, action)]);

      case 'TOGGLE_TODO':
        return state.map(function (t) {
          return todo(t, action);
        });

      default:
        return state;
    }
  };

  var visibilityFilter = function visibilityFilter() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SHOW_ALL';
    var action = arguments[1];

    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter;

      default:
        return state;
    }
  };

  var todoApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
  });

  var getVisibleTodos = function getVisibleTodos(todos, filter) {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;

      case 'SHOW_COMPLETED':
        return todos.filter(function (t) {
          return t.completed;
        });

      case 'SHOW_ACTIVE':
        return todos.filter(function (t) {
          return !t.completed;
        });
    }
  };

  var Todo = function Todo(_ref) {
    var onClick = _ref.onClick;
    var completed = _ref.completed;
    var text = _ref.text;

    return React.createElement(
      'li',
      { onClick: onClick,
        style: { textDecoration: completed ? 'line-through' : 'none' }
      },
      text
    );
  };

  var TodoList = function TodoList(_ref2) {
    var todos = _ref2.todos;
    var onTodoClick = _ref2.onTodoClick;

    return React.createElement(
      'ul',
      null,
      todos.map(function (todo) {
        return React.createElement(Todo, { text: todo.text,
          completed: todo.completed,
          onClick: function onClick() {
            return onTodoClick(todo.id);
          }
        });
      })
    );
  };

  var Link = function Link(props) {
    var active = props.active;
    var _onClick = props.onClick;


    if (active) {
      return React.createElement(
        'span',
        null,
        props.children
      );
    }

    return React.createElement(
      'a',
      { href: '#',
        onClick: function onClick(e) {
          e.preventDefault();
          _onClick();
        }
      },
      props.children
    );
  };

  var FilterLink = React.createClass({
    displayName: 'FilterLink',
    componentDidMount: function componentDidMount() {
      var _this = this;

      var store = this.context.store;


      this.unsubscribe = store.subscribe(function () {
        return _this.forceUpdate();
      });
    },
    componentWillUnmount: function componentWillUnmount() {
      this.unsubscribe();
    },
    render: function render() {
      var _this2 = this;

      var store = this.context.store;

      var state = store.getState();

      return React.createElement(
        Link,
        { active: this.props.filter === state.visibilityFilter,
          onClick: function onClick() {
            return store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter: _this2.props.filter
            });
          }
        },
        this.props.children
      );
    }
  });

  var nextTodoId = 0;
  var AddTodo = function AddTodo(props, _ref3) {
    var store = _ref3.store;

    var input = void 0;

    return React.createElement(
      'div',
      null,
      React.createElement('input', { ref: function ref(domElement) {
          input = domElement;
        }
      }),
      React.createElement(
        'button',
        { onClick: function onClick() {
            store.dispatch({
              type: 'ADD_TODO',
              text: input.value,
              id: nextTodoId++
            });
            input.value = '';
          }
        },
        'Add todo'
      )
    );
  };

  var VisibleTodoList = function (_Component) {
    _inherits(VisibleTodoList, _Component);

    function VisibleTodoList() {
      _classCallCheck(this, VisibleTodoList);

      return _possibleConstructorReturn(this, (VisibleTodoList.__proto__ || Object.getPrototypeOf(VisibleTodoList)).apply(this, arguments));
    }

    _createClass(VisibleTodoList, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this4 = this;

        var store = this.context.store;


        this.unsubscribe = store.subscribe(function () {
          return _this4.forceUpdate();
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.unsubscribe();
      }
    }, {
      key: 'render',
      value: function render() {
        var store = this.context.store;

        var state = store.getState();

        return React.createElement(TodoList, { todos: getVisibleTodos(state.todos, state.visibilityFilter),
          onTodoClick: function onTodoClick(id) {
            return store.dispatch({
              type: 'TOGGLE_TODO',
              id: id
            });
          }
        });
      }
    }]);

    return VisibleTodoList;
  }(Component);

  var Footer = function Footer() {
    return React.createElement(
      'p',
      null,
      'Show: ',
      React.createElement(
        FilterLink,
        { filter: 'SHOW_ALL' },
        'All'
      ),
      ' - ',
      React.createElement(
        FilterLink,
        { filter: 'SHOW_COMPLETED' },
        'Completed'
      ),
      ' - ',
      React.createElement(
        FilterLink,
        { filter: 'SHOW_ACTIVE' },
        'Active'
      )
    );
  };

  var TodoApp = function TodoApp() {
    return React.createElement(
      'div',
      null,
      React.createElement(AddTodo, null),
      React.createElement(VisibleTodoList, null),
      React.createElement(Footer, null)
    );
  };

  var Provider = function (_Component2) {
    _inherits(Provider, _Component2);

    function Provider() {
      _classCallCheck(this, Provider);

      return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
    }

    _createClass(Provider, [{
      key: 'getChildContext',
      value: function getChildContext(context) {
        return {
          store: this.props.store
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return this.props.children;
      }
    }]);

    return Provider;
  }(Component);

  var rootDOMElement = document.getElementById('root');

  ReactDOM.render(React.createElement(
    Provider,
    { store: createStore(todoApp) },
    React.createElement(TodoApp, null)
  ), rootDOMElement);
};

module.exports = reduxApp;

},{"../react":16,"../reactDOM":19,"./redux":12}],14:[function(require,module,exports){
'use strict';

var React = require('../react'),
    ReactDOM = require('../reactDOM');

var vanillaApp = function vanillaApp() {
  var rootDOMElement = document.getElementById('root');

  var Comment = React.createClass({
    displayName: 'Comment',

    render: function render() {
      return React.createElement(
        'div',
        { className: 'comment' },
        React.createElement(
          'p',
          null,
          this.props.message
        )
      );
    },

    componentDidMount: function componentDidMount() {
      var message = this.props.message;

      console.log('comment mounted with message ' + message);
    },

    componentWillUnmount: function componentWillUnmount() {
      var message = this.props.message;

      console.log('comment unmounted with message ' + message);
    }
  });

  var CommentsList = React.createClass({
    displayName: 'CommentsList',
    getInitialState: function getInitialState() {
      var messages = ["Hello, world!", "Hello world again..."],
          state = {
        messages: messages
      };

      return state;
    },


    render: function render() {
      var messages = this.state.messages,
          comments = messages.map(function (message) {
        return React.createElement(Comment, { message: message });
      });

      return React.createElement(
        'div',
        { className: 'commentsList' },
        comments
      );
    },

    componentDidMount: function componentDidMount() {
      console.log('comments list mounted');
    }
  });

  var commentsList = React.createElement(CommentsList, null);

  ReactDOM.render(commentsList, rootDOMElement);

  setTimeout(function () {
    var messages = ["Hello world yet again!!!"],
        state = {
      messages: messages
    };

    commentsList.setState(state);
  }, 1000); ///
};

module.exports = vanillaApp;

},{"../react":16,"../reactDOM":19}],15:[function(require,module,exports){
'use strict';

var helpers = {
  guaranteeArray: function guaranteeArray(arrayOrElement) {
    return arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];
  },

  remaining: function remaining(element, array) {
    if (element === null) {
      return array;
    }

    var index = indexOf(element, array);

    return array.slice(index + 1);
  }
};

module.exports = helpers;

function indexOf(element, array) {
  var index = null;

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

},{}],16:[function(require,module,exports){
'use strict';

var ReactComponent = require('./reactComponent'),
    ReactClass = require('./reactClass'),
    Element = require('./element'),
    ReactClassElement = require('./element/react/class'),
    ReactFunctionElement = require('./element/react/function'),
    ReactComponentElement = require('./element/react/component'),
    VirtualDOMElement = require('./element/virtualDOMNode/element'),
    VirtualDOMTextElement = require('./element/virtualDOMNode/textElement');

function createClass(object) {
  return ReactClass.fromObject(object);
}

function createElement(firstArgument, properties) {
  var element = null;

  if (firstArgument !== undefined) {
    for (var _len = arguments.length, childArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      childArguments[_key - 2] = arguments[_key];
    }

    var children = childrenFromChildArguments(childArguments),
        props = Object.assign({}, properties, {
      children: children
    });

    if (false) {} else if (typeof firstArgument === 'string') {
      var tagName = firstArgument,
          ///
      virtualDOMElement = new VirtualDOMElement(tagName, props);

      element = virtualDOMElement;
    } else if (firstArgument instanceof ReactClass) {
      var reactClass = firstArgument,
          ///
      reactClassElement = new ReactClassElement(reactClass, props);

      element = reactClassElement;
    } else if (isSubclassOf(firstArgument, ReactComponent)) {
      var _ReactComponent = firstArgument,
          ///
      reactComponent = new _ReactComponent(),
          reactComponentElement = new ReactComponentElement(reactComponent, props);

      element = reactComponentElement;
    } else if (typeof firstArgument === 'function') {
      var reactFunction = firstArgument,
          ///
      reactFunctionElement = new ReactFunctionElement(reactFunction, props);

      element = reactFunctionElement;
    }
  }

  return element;
}

var Component = ReactComponent,
    ///
React = {
  Component: Component,
  createClass: createClass,
  createElement: createElement
};

module.exports = React;

function childrenFromChildArguments(childArguments) {
  childArguments = childArguments.reduce(function (childArguments, childArgument) {
    childArguments = childArguments.concat(childArgument);

    return childArguments;
  }, []);

  var children = childArguments.map(function (childArgument) {
    var child = void 0;

    if (childArgument instanceof Element) {
      child = childArgument; ///
    } else {
      var text = childArgument,
          ///
      virtualDOMTextElement = new VirtualDOMTextElement(text);

      child = virtualDOMTextElement;
    }

    return child;
  });

  return children;
}

function isSubclassOf(argument, Class) {
  var typeOf = false;

  if (argument === Class) {
    ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument !== null) {
      typeOf = isSubclassOf(argument, Class);
    }
  }

  return typeOf;
}

},{"./element":1,"./element/react/class":3,"./element/react/component":4,"./element/react/function":5,"./element/virtualDOMNode/element":8,"./element/virtualDOMNode/textElement":10,"./reactClass":17,"./reactComponent":18}],17:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = function () {
  function ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount) {
    _classCallCheck(this, ReactClass);

    if (render) {
      this.render = render;
    }
    if (getInitialState) {
      this.getInitialState = getInitialState;
    }
    if (getChildContext) {
      this.getChildContext = getChildContext;
    }
    if (componentDidMount) {
      this.componentDidMount = componentDidMount;
    }
    if (componentWillUnmount) {
      this.componentWillUnmount = componentWillUnmount;
    }
  }

  _createClass(ReactClass, [{
    key: 'render',
    value: function render() {
      ///
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return {};
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return undefined;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }], [{
    key: 'fromObject',
    value: function fromObject(object) {
      var render = object['render'],
          getInitialState = object['getInitialState'],
          getChildContext = object['getChildContext'],
          componentDidMount = object['componentDidMount'],
          componentWillUnmount = object['componentWillUnmount'];

      return new ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount);
    }
  }]);

  return ReactClass;
}();

module.exports = ReactClass;

},{}],18:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactComponent = function () {
  function ReactComponent() {
    _classCallCheck(this, ReactComponent);
  }

  _createClass(ReactComponent, [{
    key: 'render',
    value: function render(update) {
      ///
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return {};
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return undefined;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }]);

  return ReactComponent;
}();

module.exports = ReactComponent;

},{}],19:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VirtualDOMNode = require('./element/virtualDOMNode');

var ReactDOM = function () {
  function ReactDOM() {
    _classCallCheck(this, ReactDOM);
  }

  _createClass(ReactDOM, null, [{
    key: 'render',
    value: function render(element, parentDOMElement) {
      var parent = VirtualDOMNode.fromDOMElement(parentDOMElement),
          ///
      reference = null,
          context = undefined;

      element.mount(parent, reference, context);
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;

},{"./element/virtualDOMNode":7}]},{},[11])(11)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvZWxlbWVudC5qcyIsImVzNi9lbGVtZW50L3JlYWN0LmpzIiwiZXM2L2VsZW1lbnQvcmVhY3QvY2xhc3MuanMiLCJlczYvZWxlbWVudC9yZWFjdC9jb21wb25lbnQuanMiLCJlczYvZWxlbWVudC9yZWFjdC9mdW5jdGlvbi5qcyIsImVzNi9lbGVtZW50L3JlYWN0L2luZmVyZW5jZU1peGluLmpzIiwiZXM2L2VsZW1lbnQvdmlydHVhbERPTU5vZGUuanMiLCJlczYvZWxlbWVudC92aXJ0dWFsRE9NTm9kZS9lbGVtZW50LmpzIiwiZXM2L2VsZW1lbnQvdmlydHVhbERPTU5vZGUvaW5mZXJlbmNlTWl4aW4uanMiLCJlczYvZWxlbWVudC92aXJ0dWFsRE9NTm9kZS90ZXh0RWxlbWVudC5qcyIsImVzNi9leGFtcGxlcy5qcyIsImVzNi9leGFtcGxlcy9yZWR1eC5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC5qcyIsImVzNi9leGFtcGxlcy92YW5pbGxhQXBwLmpzIiwiZXM2L2hlbHBlcnMuanMiLCJlczYvcmVhY3QuanMiLCJlczYvcmVhY3RDbGFzcy5qcyIsImVzNi9yZWFjdENvbXBvbmVudC5qcyIsImVzNi9yZWFjdERPTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7SUFFTSxPO0FBQ0osbUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLLEtBQUwsR0FBYSxLQUFiOztBQUVBLFNBQUssTUFBTCxHQUFjLElBQWQ7O0FBRUEsU0FBSyxRQUFMLEdBQWdCLE1BQU0sUUFBdEIsQ0FMaUIsQ0FLZ0I7QUFDbEM7Ozs7MEJBRUssTSxFQUFRO0FBQ1osV0FBSyxNQUFMLEdBQWMsTUFBZDtBQUNEOzs7OEJBRVM7QUFDUixXQUFLLE1BQUwsR0FBYyxJQUFkO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBSyxNQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFB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RU0sTSxFQUFRO0FBQ2I7QUFDRDs7O3NDQUVpQjtBQUNoQixhQUFPLEVBQVA7QUFDRDs7O29DQUVlLE8sRUFBUztBQUN2QixhQUFPLFNBQVA7QUFDRDs7O3dDQUVtQixDQUVuQjs7OzJDQUVzQixDQUV0Qjs7Ozs7O0FBR0gsT0FBTyxPQUFQLEdBQWlCLGNBQWpCOzs7QUM1QkE7Ozs7OztBQUVBLElBQU0saUJBQWlCLFFBQVEsMEJBQVIsQ0FBdkI7O0lBRU0sUTs7Ozs7OzsyQkFDVSxPLEVBQVMsZ0IsRUFBa0I7QUFDdkMsVUFBTSxTQUFTLGVBQWUsY0FBZixDQUE4QixnQkFBOUIsQ0FBZjtBQUFBLFVBQWdFO0FBQzFELGtCQUFZLElBRGxCO0FBQUEsVUFFTSxVQUFVLFNBRmhCOztBQUlBLGNBQVEsS0FBUixDQUFjLE1BQWQsRUFBc0IsU0FBdEIsRUFBaUMsT0FBakM7QUFDRDs7Ozs7O0FBR0gsT0FBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAgLy8vXG4gIH1cblxuICBtb3VudChwYXJlbnQpIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICB9XG5cbiAgZ2V0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgfVxuXG4gIGdldENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaGVscGVycyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMnKSxcbiAgICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBpbmZlcmVuY2VNaXhpbiA9IHJlcXVpcmUoJy4vcmVhY3QvaW5mZXJlbmNlTWl4aW4nKTtcblxuY2xhc3MgUmVhY3RFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB1bmRlZmluZWQ7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQpO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBoZWxwZXJzLmd1YXJhbnRlZUFycmF5KHRoaXMucmVuZGVyKCkpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gcmVmZXJlbmNlLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTsgXG4gIH1cblxuICByZW1vdW50KCkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpIHx8IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGhlbHBlcnMuZ3VhcmFudGVlQXJyYXkodGhpcy5yZW5kZXIoKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgICBcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7ICAvLy9cbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICBmb3JjZVVwZGF0ZSh1cGRhdGUpIHtcbiAgICBpZiAodXBkYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyKHVwZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkUmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50KCksXG4gICAgICAgICAgY2hpbGQgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFJlYWN0RWxlbWVudC5wcm90b3R5cGUsIGluZmVyZW5jZU1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGxldCByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpLFxuICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKChyZWZlcmVuY2UgPT09IG51bGwpICYmIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSkge1xuICAgIGNoaWxkID0gcGFyZW50O1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gaGVscGVycy5yZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uKHJlZmVyZW5jZSwgcmVtYWluaW5nQ2hpbGQpIHtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkO1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4uL3JlYWN0Jyk7XG5cbmNsYXNzIFJlYWN0Q2xhc3NFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5yZW5kZXIuY2FsbCh0aGlzLCB1cGRhdGUpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0SW5pdGlhbFN0YXRlLmNhbGwodGhpcyk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0Q2hpbGRDb250ZXh0LmNhbGwodGhpcywgY29udGV4dCk7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnREaWRNb3VudC5jYWxsKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudFdpbGxVbm1vdW50LmNhbGwodGhpcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi4vcmVhY3QnKTtcblxuY2xhc3MgUmVhY3RDb21wb25lbnRFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDb21wb25lbnQsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENvbXBvbmVudCA9IHJlYWN0Q29tcG9uZW50O1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQucmVuZGVyLmNhbGwodGhpcywgdXBkYXRlKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5nZXRJbml0aWFsU3RhdGUuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQuZ2V0Q2hpbGRDb250ZXh0LmNhbGwodGhpcywgY29udGV4dCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50LmNhbGwodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVbm1vdW50LmNhbGwodGhpcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4uL3JlYWN0Jyk7XG5cbmNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIH1cbiBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24odGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnREaWRNb3VudCkge1xuICAgICAgdGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudERpZE1vdW50KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnJlYWN0RnVuY3Rpb24uY29tcG9uZW50V2lsbFVubW91bnQpIHtcbiAgICAgIHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnRXaWxsVW5tb3VudCh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RnVuY3Rpb25FbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBzcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQgPSB0aGlzLmNvbnRleHQpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pLFxuICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0O1xuXG4gIGZpcnN0Q2hpbGQuc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZUNvdW50LCBhZGRlZENoaWxkcmVuLCBjaGlsZENvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZChjaGlsZCwgY29udGV4dCA9IHRoaXMuY29udGV4dCkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbiksXG4gICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgZmlyc3RDaGlsZC5hZGRDaGlsZChjaGlsZCwgY2hpbGRDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQoY2hpbGQsIGNvbnRleHQgPSB0aGlzLmNvbnRleHQpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pLFxuICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0O1xuXG4gIGZpcnN0Q2hpbGQucmVtb3ZlQ2hpbGQoY2hpbGQsIGNoaWxkQ29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmdldEF0dHJpYnV0ZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgZmlyc3RDaGlsZC5jbGVhckF0dHJpYnV0ZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IFxuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgZmlyc3RDaGlsZC5zZXRDbGFzc2FkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IFxuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgZmlyc3RDaGlsZC5yZW1vdmVBdHRyaWJ1dGUobmFtZSlcbn1cblxuZnVuY3Rpb24gc2V0Q2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICBmaXJzdENoaWxkLnNldENsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgZmlyc3RDaGlsZC5hZGRDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gIGZpcnN0Q2hpbGQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICBmaXJzdENoaWxkLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDbGFzc2VzKCkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgZmlyc3RDaGlsZC5jbGVhckNsYXNzZXMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFnTmFtZSgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IGluZmVyZW5jZU1peGluID0ge1xuICBzcGxpY2VDaGlsZHJlbjogc3BsaWNlQ2hpbGRyZW4sXG4gIGFkZENoaWxkOiBhZGRDaGlsZCxcbiAgcmVtb3ZlQ2hpbGQ6IHJlbW92ZUNoaWxkLFxuICBzZXRBdHRyaWJ1dGU6IHNldEF0dHJpYnV0ZSxcbiAgZ2V0QXR0cmlidXRlOiBnZXRBdHRyaWJ1dGUsXG4gIGNsZWFyQXR0cmlidXRlOiBjbGVhckF0dHJpYnV0ZSxcbiAgYWRkQXR0cmlidXRlOiBhZGRBdHRyaWJ1dGUsXG4gIHJlbW92ZUF0dHJpYnV0ZTogcmVtb3ZlQXR0cmlidXRlLFxuICBzZXRDbGFzczogc2V0Q2xhc3MsXG4gIGFkZENsYXNzOiBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3M6IHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzczogdG9nZ2xlQ2xhc3MsXG4gIGhhc0NsYXNzOiBoYXNDbGFzcyxcbiAgY2xlYXJDbGFzc2VzOiBjbGVhckNsYXNzZXMsXG4gIGdldFRhZ05hbWU6IGdldFRhZ05hbWVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW5mZXJlbmNlTWl4aW47XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBWaXJ0dWFsRE9NTm9kZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgZG9tRWxlbWVudCkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudChwYXJlbnQpLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSk7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpcnR1YWxET01Ob2RlID0gbmV3IFZpcnR1YWxET01Ob2RlKHByb3BzLCBkb21FbGVtZW50KTtcblxuICAgIHJldHVybiB2aXJ0dWFsRE9NTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxET01Ob2RlO1xuXG5mdW5jdGlvbiBwYXJlbnRET01FbGVtZW50KHBhcmVudCkge1xuICBsZXQgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRET01FbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VET01FbGVtZW50ID0gKHJlZmVyZW5jZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UuZ2V0RE9NRWxlbWVudCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiByZWZlcmVuY2VET01FbGVtZW50O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWaXJ0dWFsRE9NTm9kZSA9IHJlcXVpcmUoJy4uL3ZpcnR1YWxET01Ob2RlJyksXG4gICAgICBpbmZlcmVuY2VNaXhpbiA9IHJlcXVpcmUoJy4vaW5mZXJlbmNlTWl4aW4nKTtcblxuY2xhc3MgVmlydHVhbERPTUVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcblxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcHBseVByb3BzKCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG5cbiAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wc1tuYW1lXTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAoaXNIYW5kbGVyTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEhhbmRsZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChpc0F0dHJpYnV0ZU5hbWUobmFtZSkpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAncmVmJykge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHZhbHVlOyAvLy9cbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHNldEhhbmRsZXIobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgIGhhbmRsZXIpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlydHVhbERPTUVsZW1lbnQucHJvdG90eXBlLCBpbmZlcmVuY2VNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGlzSGFuZGxlck5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5tYXRjaCgvXm9uLyk7XG59XG5cbmZ1bmN0aW9uIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gIHJldHVybiBhdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuY29uc3QgYXR0cmlidXRlTmFtZXMgPSBbXG4gICdhY2NlcHQnLCAnYWNjZXB0Q2hhcnNldCcsICdhY2Nlc3NLZXknLCAnYWN0aW9uJywgJ2FsbG93RnVsbFNjcmVlbicsICdhbGxvd1RyYW5zcGFyZW5jeScsICdhbHQnLCAnYXN5bmMnLCAnYXV0b0NvbXBsZXRlJywgJ2F1dG9Gb2N1cycsICdhdXRvUGxheScsXG4gICdjYXB0dXJlJywgJ2NlbGxQYWRkaW5nJywgJ2NlbGxTcGFjaW5nJywgJ2NoYWxsZW5nZScsICdjaGFyU2V0JywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzc0lEJywgJ2NsYXNzTmFtZScsICdjb2xTcGFuJywgJ2NvbHMnLCAnY29udGVudCcsICdjb250ZW50RWRpdGFibGUnLCAnY29udGV4dE1lbnUnLCAnY29udHJvbHMnLCAnY29vcmRzJywgJ2Nyb3NzT3JpZ2luJyxcbiAgJ2RhdGEnLCAnZGF0ZVRpbWUnLCAnZGVmYXVsdCcsICdkZWZlcicsICdkaXInLCAnZGlzYWJsZWQnLCAnZG93bmxvYWQnLCAnZHJhZ2dhYmxlJyxcbiAgJ2VuY1R5cGUnLFxuICAnZm9ybScsICdmb3JtQWN0aW9uJywgJ2Zvcm1FbmNUeXBlJywgJ2Zvcm1NZXRob2QnLCAnZm9ybU5vVmFsaWRhdGUnLCAnZm9ybVRhcmdldCcsICdmcmFtZUJvcmRlcicsXG4gICdoZWFkZXJzJywgJ2hlaWdodCcsICdoaWRkZW4nLCAnaGlnaCcsICdocmVmJywgJ2hyZWZMYW5nJywgJ2h0bWxGb3InLCAnaHR0cEVxdWl2JyxcbiAgJ2ljb24nLCAnaWQnLCAnaW5wdXRNb2RlJywgJ2ludGVncml0eScsICdpcycsXG4gICdrZXlQYXJhbXMnLCAna2V5VHlwZScsICdraW5kJyxcbiAgJ2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb29wJywgJ2xvdycsXG4gICdtYW5pZmVzdCcsICdtYXJnaW5IZWlnaHQnLCAnbWFyZ2luV2lkdGgnLCAnbWF4JywgJ21heExlbmd0aCcsICdtZWRpYScsICdtZWRpYUdyb3VwJywgJ21ldGhvZCcsICdtaW4nLCAnbWluTGVuZ3RoJywgJ211bHRpcGxlJywgJ211dGVkJyxcbiAgJ25hbWUnLCAnbm9WYWxpZGF0ZScsICdub25jZScsXG4gICdvcGVuJywgJ29wdGltdW0nLFxuICAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdwb3N0ZXInLCAncHJlbG9hZCcsICdwcm9maWxlJyxcbiAgJ3JhZGlvR3JvdXAnLCAncmVhZE9ubHknLCAncmVsJywgJ3JlcXVpcmVkJywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93U3BhbicsICdyb3dzJyxcbiAgJ3NhbmRib3gnLCAnc2NvcGUnLCAnc2NvcGVkJywgJ3Njcm9sbGluZycsICdzZWFtbGVzcycsICdzZWxlY3RlZCcsICdzaGFwZScsICdzaXplJywgJ3NpemVzJywgJ3NwYW4nLCAnc3BlbGxDaGVjaycsICdzcmMnLCAnc3JjRG9jJywgJ3NyY0xhbmcnLCAnc3JjU2V0JywgJ3N0YXJ0JywgJ3N0ZXAnLCAnc3R5bGUnLCAnc3VtbWFyeScsXG4gICd0YWJJbmRleCcsICd0YXJnZXQnLCAndGl0bGUnLCAndHlwZScsXG4gICd1c2VNYXAnLFxuICAndmFsdWUnLFxuICAnd2lkdGgnLFxuICAnd21vZGUnLFxuICAnd3JhcCdcbl07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVkQ2hpbGRyZW5Db3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCkge1xuICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICBhZGRlZENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oYWRkZWRDaGlsZCkge1xuICAgIGFkZGVkQ2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICB9KTtcblxuICBjb25zdCBhcmdzID0gW3N0YXJ0LCByZW1vdmVkQ2hpbGRyZW5Db3VudF0uY29uY2F0KGFkZGVkQ2hpbGRyZW4pLFxuICAgICAgICByZW1vdmVkQ2hpbGRyZW4gPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KHRoaXMuY2hpbGRyZW4sIGFyZ3MpO1xuXG4gIHJlbW92ZWRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKHJlbW92ZWRDaGlsZCkge1xuICAgIHJlbW92ZWRDaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZChjaGlsZCwgY29udGV4dCkge1xuICBjb25zdCBzdGFydCA9IEluZmluaXR5LFxuICAgICAgICByZW1vdmVkQ2hpbGRyZW5Db3VudCA9IDAsXG4gICAgICAgIGFkZGVkQ2hpbGRyZW4gPSBbY2hpbGRdO1xuXG4gIHRoaXMuc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZWRDaGlsZHJlbkNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQoY2hpbGQsIGNvbnRleHQpIHtcbiAgY29uc3QgaW5kZXggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuXG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCxcbiAgICAgICAgICByZW1vdmVkQ2hpbGRyZW5Db3VudCA9IDEsXG4gICAgICAgICAgYWRkZWRDaGlsZHJlbiA9IFtdO1xuXG4gICAgdGhpcy5zcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlZENoaWxkcmVuQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICBuYW1lID0gJ2NsYXNzJztcbiAgfVxuXG4gIGlmIChuYW1lID09PSAnaHRtbEZvcicpIHtcbiAgICBuYW1lID0gJ2Zvcic7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdGhpcy5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9ICcnOyB9XG5cbmZ1bmN0aW9uIGdldFRhZ05hbWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudGFnTmFtZTsgfVxuXG5jb25zdCBpbmZlcmVuY2VNaXhpbiA9IHtcbiAgc3BsaWNlQ2hpbGRyZW46IHNwbGljZUNoaWxkcmVuLFxuICBhZGRDaGlsZDogYWRkQ2hpbGQsXG4gIHJlbW92ZUNoaWxkOiByZW1vdmVDaGlsZCxcbiAgc2V0QXR0cmlidXRlOiBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZTogZ2V0QXR0cmlidXRlLFxuICBjbGVhckF0dHJpYnV0ZTogY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZTogYWRkQXR0cmlidXRlLFxuICByZW1vdmVBdHRyaWJ1dGU6IHJlbW92ZUF0dHJpYnV0ZSxcbiAgc2V0Q2xhc3M6IHNldENsYXNzLFxuICBhZGRDbGFzczogYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzOiByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlQ2xhc3M6IHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzczogaGFzQ2xhc3MsXG4gIGNsZWFyQ2xhc3NlczogY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lOiBnZXRUYWdOYW1lXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluZmVyZW5jZU1peGluO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWaXJ0dWFsRE9NTm9kZSA9IHJlcXVpcmUoJy4uL3ZpcnR1YWxET01Ob2RlJyk7XG5cbmNsYXNzIFZpcnR1YWxET01UZXh0RWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01Ob2RlIHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSxcbiAgICAgICAgICBjaGlsZHJlbiA9IFtdLFxuICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgICAgfTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuICB9XG4gIFxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRUYWdOYW1lKCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxET01UZXh0RWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHZhbmlsbGFBcHA6IHJlcXVpcmUoJy4vZXhhbXBsZXMvdmFuaWxsYUFwcCcpLFxuICByZWR1eEFwcDogcmVxdWlyZSgnLi9leGFtcGxlcy9yZWR1eEFwcCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjcmVhdGVTdG9yZSA9IChyZWR1Y2VyKSA9PiB7XG4gIGxldCBzdGF0ZSxcbiAgICAgIGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXRjaCA9IChhY3Rpb24pID0+IHtcbiAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKCkpO1xuICB9O1xuXG4gIGNvbnN0IHN1YnNjcmliZSA9IChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKCkgPT4ge1xuICAgICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKGwpID0+IHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcikgPT4ge1xuICAgICAgcmV0dXJuIChsaXN0ZW5lciAhPT0gbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZGlzcGF0Y2goe30pO1xuXG4gIHJldHVybiB7IGdldFN0YXRlLCBkaXNwYXRjaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSB9O1xufTtcblxuY29uc3QgY29tYmluZVJlZHVjZXJzID0gKHJlZHVjZXJzKSA9PiB7XG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKSxcbiAgICAgICAgICBuZXh0U3RhdGUgPSBrZXlzLnJlZHVjZSgobmV4dFN0YXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuXG4gICAgICAgICAgICBuZXh0U3RhdGVba2V5XSA9IHJlZHVjZXIoc3RhdGVba2V5XSwgYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9O1xufTtcblxuY29uc3QgUmVkdXggPSB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWR1eDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVkdXggPSByZXF1aXJlKCcuL3JlZHV4JyksXG4gICAgICBSZWFjdCA9IHJlcXVpcmUoJy4uL3JlYWN0JyksXG4gICAgICBSZWFjdERPTSA9IHJlcXVpcmUoJy4uL3JlYWN0RE9NJyksXG4gICAgICB7IENvbXBvbmVudCwgQ2xhc3MgfSA9IFJlYWN0LFxuICAgICAgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gPSBSZWR1eDtcblxuY29uc3QgcmVkdXhBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG8gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogYWN0aW9uLmlkLFxuICAgICAgICAgIHRleHQ6IGFjdGlvbi50ZXh0LFxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICBpZiAoc3RhdGUuaWQgIT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGNvbXBsZXRlZDogIXN0YXRlLmNvbXBsZXRlZFxuICAgICAgICB9KTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2RvcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgdG9kbyh1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgICAgXTtcblxuICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICByZXR1cm4gc3RhdGUubWFwKHQgPT4gdG9kbyh0LCBhY3Rpb24pKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKCBzdGF0ZSA9ICdTSE9XX0FMTCcsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUic6XG4gICAgICAgIHJldHVybiBhY3Rpb24uZmlsdGVyO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvZG9BcHAgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHRvZG9zOiB0b2RvcyxcbiAgICB2aXNpYmlsaXR5RmlsdGVyOiB2aXNpYmlsaXR5RmlsdGVyXG4gIH0pO1xuXG4gIGNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgZmlsdGVyKSA9PiB7XG4gICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgIGNhc2UgJ1NIT1dfQUxMJzpcbiAgICAgICAgcmV0dXJuIHRvZG9zO1xuXG4gICAgICBjYXNlICdTSE9XX0NPTVBMRVRFRCc6XG4gICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICB0ID0+IHQuY29tcGxldGVkXG4gICAgICAgICk7XG5cbiAgICAgIGNhc2UgJ1NIT1dfQUNUSVZFJzpcbiAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgICAgIHQgPT4gIXQuY29tcGxldGVkXG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFRvZG8gPSAoe29uQ2xpY2ssIGNvbXBsZXRlZCwgdGV4dH0pID0+IHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8bGkgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICBzdHlsZT17e3RleHREZWNvcmF0aW9uOmNvbXBsZXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xpbmUtdGhyb3VnaCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2xpPlxuXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBUb2RvTGlzdCA9ICh7dG9kb3MsIG9uVG9kb0NsaWNrfSkgPT4gIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8dWw+XG4gICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiA8VG9kbyB0ZXh0PXt0b2RvLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e3RvZG8uY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2sodG9kby5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KX1cbiAgICAgIDwvdWw+XG5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IExpbmsgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZSwgb25DbGljayB9ID0gcHJvcHM7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICByZXR1cm4gPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGEgaHJlZj0nIydcbiAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIG9uQ2xpY2soKTtcbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvYT5cblxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgRmlsdGVyTGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxMaW5rIGFjdGl2ZT17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXIgPT09IHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfVklTSUJJTElUWV9GSUxURVInLFxuICAgICAgICAgICAgICAgICAgZmlsdGVyOiB0aGlzLnByb3BzLmZpbHRlclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBsZXQgbmV4dFRvZG9JZCA9IDA7XG4gIGNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIHtzdG9yZX0pID0+IHtcbiAgICBsZXQgaW5wdXQ7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgcmVmPXtkb21FbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0FERF9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBuZXh0VG9kb0lkKytcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQWRkIHRvZG9cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH07XG5cbiAgY2xhc3MgVmlzaWJsZVRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPFRvZG9MaXN0IHRvZG9zPXtcbiAgICAgICAgICAgICAgICAgIGdldFZpc2libGVUb2RvcyhcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudG9kb3MsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvblRvZG9DbGljaz17aWQgPT5cbiAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1RPR0dMRV9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLz5cblxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPHA+XG4gICAgICAgIHsnU2hvdzogJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0FMTCc+XG4gICAgICAgICAgQWxsXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgICAgeycgLSAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQ09NUExFVEVEJz5cbiAgICAgICAgICBDb21wbGV0ZWRcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgICB7JyAtICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BQ1RJVkUnPlxuICAgICAgICAgIEFjdGl2ZVxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICA8L3A+XG5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFRvZG9BcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPEFkZFRvZG8gLz5cbiAgICAgICAgPFZpc2libGVUb2RvTGlzdCAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH07XG5cbiAgY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdG9yZTogdGhpcy5wcm9wcy5zdG9yZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gIH1cblxuICBjb25zdCByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxQcm92aWRlciBzdG9yZT17Y3JlYXRlU3RvcmUodG9kb0FwcCl9PlxuICAgICAgPFRvZG9BcHAgLz5cbiAgICA8L1Byb3ZpZGVyPixcbiAgICByb290RE9NRWxlbWVudFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1eEFwcDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCcuLi9yZWFjdCcpLFxuICAgICAgUmVhY3RET00gPSByZXF1aXJlKCcuLi9yZWFjdERPTScpO1xuXG5jb25zdCB2YW5pbGxhQXBwID0gKCkgPT4ge1xuICBjb25zdCByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgY29uc3QgQ29tbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnQgbW91bnRlZCB3aXRoIG1lc3NhZ2UgJyArIG1lc3NhZ2UpXG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50IHVubW91bnRlZCB3aXRoIG1lc3NhZ2UgJyArIG1lc3NhZ2UpXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBDb21tZW50c0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICAgIFwiSGVsbG8sIHdvcmxkIVwiLFxuICAgICAgICAgICAgICBcIkhlbGxvIHdvcmxkIGFnYWluLi4uXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgICAgICB9O1xuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuc3RhdGUubWVzc2FnZXMsXG4gICAgICAgICAgY29tbWVudHMgPSBtZXNzYWdlcy5tYXAoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgcmV0dXJuIDxDb21tZW50IG1lc3NhZ2U9e21lc3NhZ2V9IC8+O1xuICAgICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNMaXN0XCI+XG4gICAgICAgICAge2NvbW1lbnRzfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRzIGxpc3QgbW91bnRlZCcpXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb21tZW50c0xpc3QgPSA8Q29tbWVudHNMaXN0IC8+O1xuXG4gIFJlYWN0RE9NLnJlbmRlcihjb21tZW50c0xpc3QsIHJvb3RET01FbGVtZW50KTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgXCJIZWxsbyB3b3JsZCB5ZXQgYWdhaW4hISFcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXNcbiAgICAgICAgICB9O1xuXG4gICAgY29tbWVudHNMaXN0LnNldFN0YXRlKHN0YXRlKTtcbiAgfSwgMTAwMCk7IC8vL1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB2YW5pbGxhQXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBoZWxwZXJzID0ge1xuICBndWFyYW50ZWVBcnJheTogZnVuY3Rpb24oYXJyYXlPckVsZW1lbnQpIHsgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG4gIH0sXG5cbiAgcmVtYWluaW5nOiBmdW5jdGlvbihlbGVtZW50LCBhcnJheSkge1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihlbGVtZW50LCBhcnJheSk7XG5cbiAgICByZXR1cm4gYXJyYXkuc2xpY2UoaW5kZXggKyAxKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzO1xuXG5mdW5jdGlvbiBpbmRleE9mKGVsZW1lbnQsIGFycmF5KSB7XG4gIGxldCBpbmRleCA9IG51bGw7XG5cbiAgYXJyYXkuc29tZShmdW5jdGlvbihjdXJyZW50RWxlbWVudCwgY3VycmVudEVsZW1lbnRJbmRleCkge1xuICAgIGlmIChjdXJyZW50RWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgaW5kZXggPSBjdXJyZW50RWxlbWVudEluZGV4O1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdENvbXBvbmVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnQnKSxcbiAgICAgIFJlYWN0Q2xhc3MgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3MnKSxcbiAgICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIFJlYWN0Q2xhc3NFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L3JlYWN0L2NsYXNzJyksXG4gICAgICBSZWFjdEZ1bmN0aW9uRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudC9yZWFjdC9mdW5jdGlvbicpLFxuICAgICAgUmVhY3RDb21wb25lbnRFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L3JlYWN0L2NvbXBvbmVudCcpLFxuICAgICAgVmlydHVhbERPTUVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudCcpLFxuICAgICAgVmlydHVhbERPTVRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL3RleHRFbGVtZW50Jyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICByZXR1cm4gUmVhY3RDbGFzcy5mcm9tT2JqZWN0KG9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRBcmd1bWVudHMpIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSxcbiAgICAgICAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHZpcnR1YWxET01FbGVtZW50ID0gbmV3IFZpcnR1YWxET01FbGVtZW50KHRhZ05hbWUsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHZpcnR1YWxET01FbGVtZW50XG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgY29uc3QgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgcmVhY3RDbGFzc0VsZW1lbnQgPSBuZXcgUmVhY3RDbGFzc0VsZW1lbnQocmVhY3RDbGFzcywgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDbGFzc0VsZW1lbnQ7XG4gICAgfSBlbHNlIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgUmVhY3RDb21wb25lbnQpKSB7XG4gICAgICBjb25zdCBSZWFjdENvbXBvbmVudCA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50KCksXG4gICAgICAgICAgICByZWFjdENvbXBvbmVudEVsZW1lbnQgPSBuZXcgUmVhY3RDb21wb25lbnRFbGVtZW50KHJlYWN0Q29tcG9uZW50LCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENvbXBvbmVudEVsZW1lbnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0RnVuY3Rpb25FbGVtZW50ID0gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0RnVuY3Rpb25FbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBDb21wb25lbnQgPSBSZWFjdENvbXBvbmVudCwgLy8vXG4gICAgICBSZWFjdCA9IHtcbiAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQsXG4gICAgICAgIGNyZWF0ZUNsYXNzOiBjcmVhdGVDbGFzcyxcbiAgICAgICAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudFxuICAgICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRyZW5Gcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpIHtcbiAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGRBcmd1bWVudHMsIGNoaWxkQXJndW1lbnQpIHtcbiAgICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLmNvbmNhdChjaGlsZEFyZ3VtZW50KTtcblxuICAgIHJldHVybiBjaGlsZEFyZ3VtZW50cztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNoaWxkcmVuID0gY2hpbGRBcmd1bWVudHMubWFwKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnQpIHtcbiAgICBsZXQgY2hpbGQ7XG5cbiAgICBpZiAoY2hpbGRBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkID0gY2hpbGRBcmd1bWVudDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gY2hpbGRBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICB2aXJ0dWFsRE9NVGV4dEVsZW1lbnQgPSBuZXcgVmlydHVhbERPTVRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBjaGlsZCA9IHZpcnR1YWxET01UZXh0RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50ID09PSBDbGFzcykgeyAgIC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCAhPT0gbnVsbCkge1xuICAgICAgdHlwZU9mID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCkge1xuICAgIGlmIChyZW5kZXIpIHsgdGhpcy5yZW5kZXIgPSByZW5kZXI7IH1cbiAgICBpZiAoZ2V0SW5pdGlhbFN0YXRlKSB7IHRoaXMuZ2V0SW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlOyB9XG4gICAgaWYgKGdldENoaWxkQ29udGV4dCkgeyB0aGlzLmdldENoaWxkQ29udGV4dCA9IGdldENoaWxkQ29udGV4dDsgfVxuICAgIGlmIChjb21wb25lbnREaWRNb3VudCkgeyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gY29tcG9uZW50RGlkTW91bnQ7IH1cbiAgICBpZiAoY29tcG9uZW50V2lsbFVubW91bnQpIHsgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9IGNvbXBvbmVudFdpbGxVbm1vdW50OyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8vXG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgIGNvbnN0IHJlbmRlciA9IG9iamVjdFsncmVuZGVyJ10sXG4gICAgICAgICAgZ2V0SW5pdGlhbFN0YXRlID0gb2JqZWN0WydnZXRJbml0aWFsU3RhdGUnXSxcbiAgICAgICAgICBnZXRDaGlsZENvbnRleHQgPSBvYmplY3RbJ2dldENoaWxkQ29udGV4dCddLFxuICAgICAgICAgIGNvbXBvbmVudERpZE1vdW50ID0gb2JqZWN0Wydjb21wb25lbnREaWRNb3VudCddLFxuICAgICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gb2JqZWN0Wydjb21wb25lbnRXaWxsVW5tb3VudCddO1xuICAgXG4gICAgcmV0dXJuIG5ldyBSZWFjdENsYXNzKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWFjdENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgLy8vXG4gIH1cbiAgXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgXG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWaXJ0dWFsRE9NTm9kZSA9IHJlcXVpcmUoJy4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZScpO1xuXG5jbGFzcyBSZWFjdERPTSB7XG4gIHN0YXRpYyByZW5kZXIoZWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudCA9IFZpcnR1YWxET01Ob2RlLmZyb21ET01FbGVtZW50KHBhcmVudERPTUVsZW1lbnQpLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSB1bmRlZmluZWQ7XG5cbiAgICBlbGVtZW50Lm1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuIl19
