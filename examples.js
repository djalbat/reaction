(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('./utilities/array');

var first = arrayUtilities.first;

var Element = function () {
  function Element(props) {
    _classCallCheck(this, Element);

    this.props = props;

    this.parent = null;

    this.children = props.children; ///
  }

  _createClass(Element, [{
    key: 'getParent',
    value: function getParent() {
      return this.parent;
    }
  }, {
    key: 'getChildren',
    value: function getChildren() {
      return this.children;
    }
  }, {
    key: 'getFirstChild',
    value: function getFirstChild() {
      var firstChild = first(this.children) || null;

      return firstChild;
    }
  }, {
    key: 'mount',
    value: function mount(parent, children) {
      this.parent = parent;

      this.children = children;
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.parent = null;

      this.children = null;
    }
  }]);

  return Element;
}();

module.exports = Element;

},{"./utilities/array":19}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    arrayUtilities = require('../utilities/array'),
    reactElementMixins = require('../mixins/reactElement');

var guarantee = arrayUtilities.guarantee,
    remaining = arrayUtilities.remaining;

var ReactElement = function (_Element) {
  _inherits(ReactElement, _Element);

  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    var _this = _possibleConstructorReturn(this, (ReactElement.__proto__ || Object.getPrototypeOf(ReactElement)).call(this, props));

    _this.state = undefined; ///

    _this.context = undefined; ///
    return _this;
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      this.context = context;

      var childContext = this.getChildContext(context),
          children = guarantee(this.render());

      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent, children);

      children.forEach(function (child) {
        var childParent = this,
            childReference = reference;

        child.mount(childParent, childReference, childContext);
      }.bind(this));

      this.componentDidMount();
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.context = context;

      this.componentWillUnmount();

      var childContext = this.getChildContext(context),
          children = this.getChildren();

      children.forEach(function (child) {
        child.unmount(childContext);
      });

      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'remount',
    value: function remount(update) {
      var childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext(this.context);

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      this.children = guarantee(this.render(update));

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      }.bind(this));
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return null;
    }
  }, {
    key: 'getState',
    value: function getState() {
      return this.state;
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
    key: 'updateState',
    value: function updateState(newState) {
      var oldState = this.state; ///

      this.state = Object.assign(oldState, newState);

      this.remount();
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate(update) {
      this.remount(update);
    }
  }, {
    key: 'getChildReference',
    value: function getChildReference() {
      var parent = this.getParent(),
          child = this; ///

      return reference(parent, child);
    }
  }]);

  return ReactElement;
}(Element);

Object.assign(ReactElement.prototype, reactElementMixins);

module.exports = ReactElement;

function reference(parent, child) {
  var reference = findReference(parent, child),
      parentDOMElement = parent.getDOMElement();

  while (reference === null && parentDOMElement === null) {
    child = parent; ///

    parent = parent.getParent();

    reference = findReference(parent, child);

    parentDOMElement = parent.getDOMElement();
  }

  return reference;
}

function findReference(parent, child) {
  var children = parent.getChildren(),
      remainingChildren = remaining(child, children);

  return remainingChildren.reduce(function (reference, remainingChild) {
    if (reference === null) {
      var remainingChildDOMElement = remainingChild.getDOMElement();

      if (remainingChildDOMElement !== null) {
        reference = remainingChild; ///
      } else {
        child = null;

        parent = remainingChild; ///

        reference = findReference(parent, child);
      }
    }

    return reference;
  }, null);
}

},{"../element":1,"../mixins/reactElement":13,"../utilities/array":19}],3:[function(require,module,exports){
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

    return _this;
  }

  _createClass(ReactFunctionElement, [{
    key: 'render',
    value: function render(update) {
      return this.reactFunction(this.props, this.context);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      ///
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return context;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      ///
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      ///
    }
  }]);

  return ReactFunctionElement;
}(ReactElement);

module.exports = ReactFunctionElement;

},{"../react":2}],6:[function(require,module,exports){
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
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'mount',
    value: function mount(parent, reference) {
      var children = this.getChildren();

      _get(VirtualDOMNode.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMNode.prototype), 'mount', this).call(this, parent, children);

      parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.domElement.parentElement.removeChild(this.domElement);

      _get(VirtualDOMNode.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMNode.prototype), 'unmount', this).call(this);
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

},{"../element":1}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VirtualDOMNode = require('../virtualDOMNode'),
    virtualDOMElementMixins = require('../../mixins/virtualDOMElement');

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
          childContext = context,
          children = this.getChildren();

      children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      });

      this.applyProps();
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      var childContext = context,
          children = this.getChildren();

      children.forEach(function (child) {
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

Object.assign(VirtualDOMElement.prototype, virtualDOMElementMixins);

module.exports = VirtualDOMElement;

function isHandlerName(name) {
  return name.match(/^on/);
}

function isAttributeName(name) {
  return attributeNames.includes(name);
}

var attributeNames = ['accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap'];

},{"../../mixins/virtualDOMElement":14,"../virtualDOMNode":6}],8:[function(require,module,exports){
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

},{"../virtualDOMNode":6}],9:[function(require,module,exports){
'use strict';

module.exports = {
  vanillaApp: require('./examples/vanillaApp'),
  reduxApp: require('./examples/reduxApp')
};

},{"./examples/reduxApp":11,"./examples/vanillaApp":12}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Redux = require('./redux'),
    React = require('../react'),
    ReactDOM = require('../reactDOM');

var Component = React.Component,
    Class = React.Class,
    createStore = Redux.createStore,
    combineReducers = Redux.combineReducers;


var reduxApp = function reduxApp() {
  var todo = function todo(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        {
          var id = action.id,
              text = action.text,
              completed = false;


          return {
            id: id,
            text: text,
            completed: completed
          };
        }

      case 'TOGGLE_TODO':
        {
          if (state.id !== action.id) {
            return state;
          }

          var _completed = !state.completed; ///

          return Object.assign({}, state, {
            completed: _completed
          });
        }

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
    var onClick = _ref.onClick,
        completed = _ref.completed,
        text = _ref.text;

    return React.createElement(
      'li',
      { onClick: onClick,
        style: { textDecoration: completed ? 'line-through' : 'none' }
      },
      text
    );
  };

  var TodoList = function TodoList(_ref2) {
    var todos = _ref2.todos,
        onTodoClick = _ref2.onTodoClick;

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
    var active = props.active,
        _onClick = props.onClick;


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
            var type = 'SET_VISIBILITY_FILTER',
                filter = _this2.props.filter;


            store.dispatch({
              type: type,
              filter: filter
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
            var type = 'ADD_TODO',
                _input = input,
                value = _input.value,
                text = value,
                id = nextTodoId++;


            store.dispatch({
              type: type,
              text: text,
              id: id
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
            var type = 'TOGGLE_TODO';

            store.dispatch({
              type: type,
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
        var store = this.props.store;


        return {
          store: store
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

},{"../react":15,"../reactDOM":18,"./redux":10}],12:[function(require,module,exports){
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
      var state = this.getState(),
          messages = state.messages,
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

},{"../react":15,"../reactDOM":18}],13:[function(require,module,exports){
'use strict';

function setAttribute(name, value) {
  var firstChild = this.getFirstChild();

  return firstChild.setAttribute(name, value);
}

function getAttribute(name) {
  var firstChild = this.getFirstChild();

  return firstChild.getAttribute(name);
}

function clearAttribute(name) {
  var firstChild = this.getFirstChild();

  firstChild.clearAttribute(name);
}

function addAttribute(name, value) {
  var firstChild = this.getFirstChild();

  firstChild.addAttribute(name, value);
}

function removeAttribute(name) {
  var firstChild = this.getFirstChild();

  firstChild.removeAttribute(name);
}

function hasAttribute(name) {
  var firstChild = this.getFirstChild();

  return firstChild.hasAttribute(name);
}

function setClass(className) {
  var firstChild = this.getFirstChild();

  firstChild.setClass(className);
}

function addClass(className) {
  var firstChild = this.getFirstChild();

  firstChild.addClass(className);
}

function removeClass(className) {
  var firstChild = this.getFirstChild();

  firstChild.removeClass(className);
}

function toggleClass(className) {
  var firstChild = this.getFirstChild();

  firstChild.toggleClass(className);
}

function hasClass(className) {
  var firstChild = this.getFirstChild();

  return firstChild.hasClass(className);
}

function hasClasses(classNames) {
  var firstChild = this.getFirstChild();

  return firstChild.hasClasses(classNames);
}

function clearClasses() {
  var firstChild = this.getFirstChild();

  firstChild.clearClasses();
}

function getTagName() {
  return null; ///
}

function setStyle(name, value) {
  var firstChild = this.getFirstChild();

  firstChild.setStyle(name, value);
}

module.exports = {
  setAttribute: setAttribute,
  getAttribute: getAttribute,
  clearAttribute: clearAttribute,
  addAttribute: addAttribute,
  removeAttribute: removeAttribute,
  hasAttribute: hasAttribute,
  setClass: setClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  hasClass: hasClass,
  hasClasses: hasClasses,
  clearClasses: clearClasses,
  getTagName: getTagName,
  setStyle: setStyle
};

},{}],14:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
  this.domElement.removeAttribute(name);
}

function hasAttribute(name) {
  return this.domElement.hasAttribute(name);
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

function hasClasses(classNames) {
  return classNames.every(function (className) {
    return this.hasClass(className);
  }.bind(this));
}

function clearClasses() {
  this.domElement.className = '';
}

function getTagName() {
  return this.domElement.tagName;
}

function setStyle(name, value) {
  this.domElement.style[name] = value;
}

module.exports = {
  setAttribute: setAttribute,
  getAttribute: getAttribute,
  clearAttribute: clearAttribute,
  addAttribute: addAttribute,
  removeAttribute: removeAttribute,
  hasAttribute: hasAttribute,
  setClass: setClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  hasClass: hasClass,
  hasClasses: hasClasses,
  clearClasses: clearClasses,
  getTagName: getTagName,
  setStyle: setStyle
};

},{}],15:[function(require,module,exports){
'use strict';

var Element = require('./element'),
    ReactClass = require('./reactClass'),
    ReactComponent = require('./reactComponent'),
    ReactClassElement = require('./element/react/class'),
    ReactFunctionElement = require('./element/react/function'),
    ReactComponentElement = require('./element/react/component'),
    VirtualDOMTextElement = require('./element/virtualDOMNode/textElement'),
    VirtualDOMElement = require('./element/virtualDOMNode/element');

function createClass(object) {
  return ReactClass.create(object);
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

    if (false) {
      ///
    } else if (typeof firstArgument === 'string') {
      var tagName = firstArgument,
          ///
      virtualDOMElement = new VirtualDOMElement(tagName, props);

      element = virtualDOMElement; ///
    } else if (firstArgument instanceof ReactClass) {
      var reactClass = firstArgument,
          ///
      reactClassElement = new ReactClassElement(reactClass, props);

      element = reactClassElement; ///

      var mixins = reactClass.mixins;


      assignMixins(mixins, element);
    } else if (isSubclassOf(firstArgument, ReactComponent)) {
      var _ReactComponent = firstArgument,
          ///
      reactComponent = new _ReactComponent(),
          reactComponentElement = new ReactComponentElement(reactComponent, props);

      element = reactComponentElement; ///

      assignReactComponentMixins(_ReactComponent, element);
    } else if (typeof firstArgument === 'function') {
      var reactFunction = firstArgument,
          ///
      reactFunctionElement = new ReactFunctionElement(reactFunction, props);

      element = reactFunctionElement; ///

      var _mixins = reactFunction.mixins;


      assignMixins(_mixins, element);
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

function assignReactComponentMixins(reactComponent, element) {
  var _reactComponent = reactComponent,
      mixins = _reactComponent.mixins;


  reactComponent = Object.getPrototypeOf(reactComponent); ///

  if (reactComponent !== ReactComponent) {
    assignReactComponentMixins(reactComponent, element);
  }

  assignMixins(mixins, element);
}

function assignMixins(mixins, element) {
  if (mixins) {
    mixins.forEach(function (mixin) {
      var name = mixin.name;


      element[name] = mixin.bind(element);
    });
  }
}

function isSubclassOf(argument, Class) {
  var subclass = false;

  if (argument === Class) {
    ///
    subclass = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument !== null) {
      subclass = isSubclassOf(argument, Class);
    }
  }

  return subclass;
}

},{"./element":1,"./element/react/class":3,"./element/react/component":4,"./element/react/function":5,"./element/virtualDOMNode/element":7,"./element/virtualDOMNode/textElement":8,"./reactClass":16,"./reactComponent":17}],16:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = function () {
  function ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins) {
    _classCallCheck(this, ReactClass);

    this.render = render;

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

    this.mixins = mixins;
  }

  _createClass(ReactClass, [{
    key: 'getInitialState',
    value: function getInitialState() {
      return {};
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return context;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }], [{
    key: 'create',
    value: function create(object) {
      var render = object.render,
          getInitialState = object.getInitialState,
          getChildContext = object.getChildContext,
          componentDidMount = object.componentDidMount,
          componentWillUnmount = object.componentWillUnmount,
          mixins = object.mixins;


      return new ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins);
    }
  }]);

  return ReactClass;
}();

module.exports = ReactClass;

},{}],17:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactComponent = function () {
  function ReactComponent() {
    _classCallCheck(this, ReactComponent);
  }

  _createClass(ReactComponent, [{
    key: 'getInitialState',
    value: function getInitialState() {
      return {};
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return context;
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

},{}],18:[function(require,module,exports){
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
          reference = null,
          context = {};

      element.mount(parent, reference, context);
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;

},{"./element/virtualDOMNode":6}],19:[function(require,module,exports){
'use strict';

function first(array) {
  return array[0];
}

function guarantee(arrayOrElement) {
  arrayOrElement = arrayOrElement || [];

  return arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];
}

function remaining(element, array) {
  if (element === null) {
    return array;
  }

  var index = indexOf(element, array);

  return array.slice(index + 1);
}

module.exports = {
  first: first,
  guarantee: guarantee,
  remaining: remaining
};

function indexOf(element, array) {
  var index = null;

  array.some(function (currentElement, currentElementIndex) {
    if (currentElement === element) {
      index = currentElementIndex;

      return true;
    }
  });

  return index;
}

},{}]},{},[9])(9)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvZWxlbWVudC5qcyIsImVzNi9lbGVtZW50L3JlYWN0LmpzIiwiZXM2L2VsZW1lbnQvcmVhY3QvY2xhc3MuanMiLCJlczYvZWxlbWVudC9yZWFjdC9jb21wb25lbnQuanMiLCJlczYvZWxlbWVudC9yZWFjdC9mdW5jdGlvbi5qcyIsImVzNi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlLmpzIiwiZXM2L2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC5qcyIsImVzNi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL3RleHRFbGVtZW50LmpzIiwiZXM2L2V4YW1wbGVzLmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4LmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4QXBwLmpzIiwiZXM2L2V4YW1wbGVzL3ZhbmlsbGFBcHAuanMiLCJlczYvbWl4aW5zL3JlYWN0RWxlbWVudC5qcyIsImVzNi9taXhpbnMvdmlydHVhbERPTUVsZW1lbnQuanMiLCJlczYvcmVhY3QuanMiLCJlczYvcmVhY3RDbGFzcy5qcyIsImVzNi9yZWFjdENvbXBvbmVudC5qcyIsImVzNi9yZWFjdERPTS5qcyIsImVzNi91dGlsaXRpZXMvYXJyYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7O0FBRUEsSUFBTSxpQkFBaUIsUUFBUSxtQkFBUixDQUF2Qjs7SUFFUSxLLEdBQVUsYyxDQUFWLEs7O0lBRUYsTztBQUNKLG1CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBSyxLQUFMLEdBQWEsS0FBYjs7QUFFQSxTQUFLLE1BQUwsR0FBYyxJQUFkOztBQUVBLFNBQUssUUFBTCxHQUFnQixNQUFNLFFBQXRCLENBTGlCLENBS2dCO0FBQ2xDOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLLE1BQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLLFFBQVo7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTSxhQUFh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QUFTLFNBQVQsQ0FBbUIsT0FBbkIsRUFBNEIsS0FBNUIsRUFBbUM7QUFDakMsTUFBSSxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFdBQU8sS0FBUDtBQUNEOztBQUVELE1BQU0sUUFBUSxRQUFRLE9BQVIsRUFBaUIsS0FBakIsQ0FBZDs7QUFFQSxTQUFPLE1BQU0sS0FBTixDQUFZLFFBQVEsQ0FBcEIsQ0FBUDtBQUNEOztBQUVELE9BQU8sT0FBUCxHQUFpQjtBQUNmLGNBRGU7QUFFZixzQkFGZTtBQUdmO0FBSGUsQ0FBakI7O0FBTUEsU0FBUyxPQUFULENBQWlCLE9BQWpCLEVBQTBCLEtBQTFCLEVBQWlDO0FBQy9CLE1BQUksUUFBUSxJQUFaOztBQUVBLFFBQU0sSUFBTixDQUFXLFVBQVMsY0FBVCxFQUF5QixtQkFBekIsRUFBOEM7QUFDdkQsUUFBSSxtQkFBbUIsT0FBdkIsRUFBZ0M7QUFDOUIsY0FBUSxtQkFBUjs7QUFFQSxhQUFPLElBQVA7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsU0FBTyxLQUFQO0FBQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjsgIC8vL1xuICB9XG5cbiAgZ2V0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgfVxuXG4gIGdldENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgZ2V0Rmlyc3RDaGlsZCgpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbikgfHwgbnVsbDtcblxuICAgIHJldHVybiBmaXJzdENoaWxkO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCBjaGlsZHJlbikge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9XG5cbiAgdW5tb3VudCgpIHtcbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gbnVsbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgcmVhY3RFbGVtZW50TWl4aW5zID0gcmVxdWlyZSgnLi4vbWl4aW5zL3JlYWN0RWxlbWVudCcpO1xuXG5jb25zdCB7IGd1YXJhbnRlZSwgcmVtYWluaW5nIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUmVhY3RFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB1bmRlZmluZWQ7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0ID0gdW5kZWZpbmVkOyAvLy9cbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gZ3VhcmFudGVlKHRoaXMucmVuZGVyKCkpO1xuXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICByZW1vdW50KHVwZGF0ZSkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gZ3VhcmFudGVlKHRoaXMucmVuZGVyKHVwZGF0ZSkpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlOyAgLy8vXG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgdXBkYXRlU3RhdGUobmV3U3RhdGUpIHtcbiAgICBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuc3RhdGU7ICAvLy9cblxuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKG9sZFN0YXRlLCBuZXdTdGF0ZSk7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKHVwZGF0ZSkge1xuICAgIHRoaXMucmVtb3VudCh1cGRhdGUpO1xuICB9XG5cbiAgZ2V0Q2hpbGRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnQoKSxcbiAgICAgICAgICBjaGlsZCA9IHRoaXM7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFJlYWN0RWxlbWVudC5wcm90b3R5cGUsIHJlYWN0RWxlbWVudE1peGlucyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDsgLy8vXG5cbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgcmVtYWluaW5nQ2hpbGRyZW4gPSByZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uKHJlZmVyZW5jZSwgcmVtYWluaW5nQ2hpbGQpIHtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7IC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBudWxsO1xuXG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkOyAgLy8vXG5cbiAgICAgICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBudWxsKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi4vcmVhY3QnKTtcblxuY2xhc3MgUmVhY3RDbGFzc0VsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENsYXNzLCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3M7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLnJlbmRlci5jYWxsKHRoaXMsIHVwZGF0ZSk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5nZXRJbml0aWFsU3RhdGUuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5nZXRDaGlsZENvbnRleHQuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudERpZE1vdW50LmNhbGwodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q2xhc3NFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuLi9yZWFjdCcpO1xuXG5jbGFzcyBSZWFjdENvbXBvbmVudEVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENvbXBvbmVudCwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50ID0gcmVhY3RDb21wb25lbnQ7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5yZW5kZXIuY2FsbCh0aGlzLCB1cGRhdGUpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LmdldEluaXRpYWxTdGF0ZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5nZXRDaGlsZENvbnRleHQuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50RWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi4vcmVhY3QnKTtcblxuY2xhc3MgUmVhY3RGdW5jdGlvbkVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdEZ1bmN0aW9uLCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RGdW5jdGlvbiA9IHJlYWN0RnVuY3Rpb247XG5cblxuXG5cbiAgfVxuIFxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbih0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIC8vL1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vL1xuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RGdW5jdGlvbkVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFZpcnR1YWxET01Ob2RlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBkb21FbGVtZW50KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuICAgIFxuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgY2hpbGRyZW4pO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudChwYXJlbnQpLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSk7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlydHVhbERPTU5vZGUgPSBuZXcgVmlydHVhbERPTU5vZGUocHJvcHMsIGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHZpcnR1YWxET01Ob2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTU5vZGU7XG5cbmZ1bmN0aW9uIHBhcmVudERPTUVsZW1lbnQocGFyZW50KSB7XG4gIGxldCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudERPTUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZURPTUVsZW1lbnQgPSAocmVmZXJlbmNlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZS5nZXRET01FbGVtZW50KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZURPTUVsZW1lbnQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZpcnR1YWxET01Ob2RlID0gcmVxdWlyZSgnLi4vdmlydHVhbERPTU5vZGUnKSxcbiAgICAgIHZpcnR1YWxET01FbGVtZW50TWl4aW5zID0gcmVxdWlyZSgnLi4vLi4vbWl4aW5zL3ZpcnR1YWxET01FbGVtZW50Jyk7XG5cbmNsYXNzIFZpcnR1YWxET01FbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTU5vZGUge1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgc3VwZXIocHJvcHMsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFwcGx5UHJvcHMoKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG5cbiAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wc1tuYW1lXTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAoaXNIYW5kbGVyTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEhhbmRsZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChpc0F0dHJpYnV0ZU5hbWUobmFtZSkpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAncmVmJykge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHZhbHVlOyAvLy9cbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHNldEhhbmRsZXIobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgIGhhbmRsZXIpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlydHVhbERPTUVsZW1lbnQucHJvdG90eXBlLCB2aXJ0dWFsRE9NRWxlbWVudE1peGlucyk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGlzSGFuZGxlck5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5tYXRjaCgvXm9uLyk7XG59XG5cbmZ1bmN0aW9uIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gIHJldHVybiBhdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuY29uc3QgYXR0cmlidXRlTmFtZXMgPSBbXG4gICdhY2NlcHQnLCAnYWNjZXB0Q2hhcnNldCcsICdhY2Nlc3NLZXknLCAnYWN0aW9uJywgJ2FsbG93RnVsbFNjcmVlbicsICdhbGxvd1RyYW5zcGFyZW5jeScsICdhbHQnLCAnYXN5bmMnLCAnYXV0b0NvbXBsZXRlJywgJ2F1dG9Gb2N1cycsICdhdXRvUGxheScsXG4gICdjYXB0dXJlJywgJ2NlbGxQYWRkaW5nJywgJ2NlbGxTcGFjaW5nJywgJ2NoYWxsZW5nZScsICdjaGFyU2V0JywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzc0lEJywgJ2NsYXNzTmFtZScsICdjb2xTcGFuJywgJ2NvbHMnLCAnY29udGVudCcsICdjb250ZW50RWRpdGFibGUnLCAnY29udGV4dE1lbnUnLCAnY29udHJvbHMnLCAnY29vcmRzJywgJ2Nyb3NzT3JpZ2luJyxcbiAgJ2RhdGEnLCAnZGF0ZVRpbWUnLCAnZGVmYXVsdCcsICdkZWZlcicsICdkaXInLCAnZGlzYWJsZWQnLCAnZG93bmxvYWQnLCAnZHJhZ2dhYmxlJyxcbiAgJ2VuY1R5cGUnLFxuICAnZm9ybScsICdmb3JtQWN0aW9uJywgJ2Zvcm1FbmNUeXBlJywgJ2Zvcm1NZXRob2QnLCAnZm9ybU5vVmFsaWRhdGUnLCAnZm9ybVRhcmdldCcsICdmcmFtZUJvcmRlcicsXG4gICdoZWFkZXJzJywgJ2hlaWdodCcsICdoaWRkZW4nLCAnaGlnaCcsICdocmVmJywgJ2hyZWZMYW5nJywgJ2h0bWxGb3InLCAnaHR0cEVxdWl2JyxcbiAgJ2ljb24nLCAnaWQnLCAnaW5wdXRNb2RlJywgJ2ludGVncml0eScsICdpcycsXG4gICdrZXlQYXJhbXMnLCAna2V5VHlwZScsICdraW5kJyxcbiAgJ2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb29wJywgJ2xvdycsXG4gICdtYW5pZmVzdCcsICdtYXJnaW5IZWlnaHQnLCAnbWFyZ2luV2lkdGgnLCAnbWF4JywgJ21heExlbmd0aCcsICdtZWRpYScsICdtZWRpYUdyb3VwJywgJ21ldGhvZCcsICdtaW4nLCAnbWluTGVuZ3RoJywgJ211bHRpcGxlJywgJ211dGVkJyxcbiAgJ25hbWUnLCAnbm9WYWxpZGF0ZScsICdub25jZScsXG4gICdvcGVuJywgJ29wdGltdW0nLFxuICAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdwb3N0ZXInLCAncHJlbG9hZCcsICdwcm9maWxlJyxcbiAgJ3JhZGlvR3JvdXAnLCAncmVhZE9ubHknLCAncmVsJywgJ3JlcXVpcmVkJywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93U3BhbicsICdyb3dzJyxcbiAgJ3NhbmRib3gnLCAnc2NvcGUnLCAnc2NvcGVkJywgJ3Njcm9sbGluZycsICdzZWFtbGVzcycsICdzZWxlY3RlZCcsICdzaGFwZScsICdzaXplJywgJ3NpemVzJywgJ3NwYW4nLCAnc3BlbGxDaGVjaycsICdzcmMnLCAnc3JjRG9jJywgJ3NyY0xhbmcnLCAnc3JjU2V0JywgJ3N0YXJ0JywgJ3N0ZXAnLCAnc3R5bGUnLCAnc3VtbWFyeScsXG4gICd0YWJJbmRleCcsICd0YXJnZXQnLCAndGl0bGUnLCAndHlwZScsXG4gICd1c2VNYXAnLFxuICAndmFsdWUnLFxuICAnd2lkdGgnLFxuICAnd21vZGUnLFxuICAnd3JhcCdcbl07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZpcnR1YWxET01Ob2RlID0gcmVxdWlyZSgnLi4vdmlydHVhbERPTU5vZGUnKTtcblxuY2xhc3MgVmlydHVhbERPTVRleHRFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTU5vZGUge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH07XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcbiAgfVxuICBcbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlLFxuICAgICAgICAgIHRleHQgPSBub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0ZXh0OyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUgPSBub2RlVmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB2YW5pbGxhQXBwOiByZXF1aXJlKCcuL2V4YW1wbGVzL3ZhbmlsbGFBcHAnKSxcbiAgcmVkdXhBcHA6IHJlcXVpcmUoJy4vZXhhbXBsZXMvcmVkdXhBcHAnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlcikgPT4ge1xuICBsZXQgc3RhdGUsXG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKTtcbiAgfTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IHtcbiAgICAgIHJldHVybiAobGlzdGVuZXIgIT09IGwpO1xuICAgIH0pO1xuICB9O1xuXG4gIGRpc3BhdGNoKHt9KTtcblxuICByZXR1cm4geyBnZXRTdGF0ZSwgZGlzcGF0Y2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbn07XG5cbmNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9IChyZWR1Y2VycykgPT4ge1xuICByZXR1cm4gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2VycyksXG4gICAgICAgICAgbmV4dFN0YXRlID0ga2V5cy5yZWR1Y2UoKG5leHRTdGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcblxuICAgICAgICAgICAgbmV4dFN0YXRlW2tleV0gPSByZWR1Y2VyKHN0YXRlW2tleV0sIGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgfTtcbn07XG5cbmNvbnN0IFJlZHV4ID0geyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkdXg7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlZHV4ID0gcmVxdWlyZSgnLi9yZWR1eCcpLFxuICAgICAgUmVhY3QgPSByZXF1aXJlKCcuLi9yZWFjdCcpLFxuICAgICAgUmVhY3RET00gPSByZXF1aXJlKCcuLi9yZWFjdERPTScpO1xuXG5jb25zdCB7IENvbXBvbmVudCwgQ2xhc3MgfSA9IFJlYWN0LFxuICAgICAgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gPSBSZWR1eDtcblxuY29uc3QgcmVkdXhBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG8gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ0FERF9UT0RPJzoge1xuICAgICAgICBjb25zdCB7IGlkLCB0ZXh0IH0gPSBhY3Rpb24sXG4gICAgICAgICAgICAgIGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOiB7XG4gICAgICAgIGlmIChzdGF0ZS5pZCAhPT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcGxldGVkID0gIXN0YXRlLmNvbXBsZXRlZDsgLy8vXG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgY29tcGxldGVkXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvZG9zID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICB0b2RvKHVuZGVmaW5lZCwgYWN0aW9uKVxuICAgICAgICBdO1xuXG4gICAgICBjYXNlICdUT0dHTEVfVE9ETyc6XG4gICAgICAgIHJldHVybiBzdGF0ZS5tYXAodCA9PiB0b2RvKHQsIGFjdGlvbikpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHZpc2liaWxpdHlGaWx0ZXIgPSAoIHN0YXRlID0gJ1NIT1dfQUxMJywgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJzpcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5maWx0ZXI7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9kb0FwcCA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgdG9kb3M6IHRvZG9zLFxuICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgfSk7XG5cbiAgY29uc3QgZ2V0VmlzaWJsZVRvZG9zID0gKHRvZG9zLCBmaWx0ZXIpID0+IHtcbiAgICBzd2l0Y2ggKGZpbHRlcikge1xuICAgICAgY2FzZSAnU0hPV19BTEwnOlxuICAgICAgICByZXR1cm4gdG9kb3M7XG5cbiAgICAgIGNhc2UgJ1NIT1dfQ09NUExFVEVEJzpcbiAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgICAgIHQgPT4gdC5jb21wbGV0ZWRcbiAgICAgICAgKTtcblxuICAgICAgY2FzZSAnU0hPV19BQ1RJVkUnOlxuICAgICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICAgICAgdCA9PiAhdC5jb21wbGV0ZWRcbiAgICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgVG9kbyA9ICh7b25DbGljaywgY29tcGxldGVkLCB0ZXh0fSkgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgIHN0eWxlPXt7dGV4dERlY29yYXRpb246Y29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGluZS10aHJvdWdoJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm9uZSd9fVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvbGk+XG5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFRvZG9MaXN0ID0gKHt0b2Rvcywgb25Ub2RvQ2xpY2t9KSA9PiAge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDx1bD5cbiAgICAgICAge3RvZG9zLm1hcCh0b2RvID0+IDxUb2RvIHRleHQ9e3RvZG8udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZG9DbGljayh0b2RvLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pfVxuICAgICAgPC91bD5cblxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgTGluayA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgYWN0aXZlLCBvbkNsaWNrIH0gPSBwcm9wcztcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHJldHVybiA8c3Bhbj57cHJvcHMuY2hpbGRyZW59PC9zcGFuPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8YSBocmVmPScjJ1xuICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgb25DbGljaygpO1xuICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9hPlxuXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBGaWx0ZXJMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgICk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH0sXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPExpbmsgYWN0aXZlPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlciA9PT0gc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUicsXG4gICAgICAgICAgICAgICAgICAgICAgeyBmaWx0ZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgZmlsdGVyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgbGV0IG5leHRUb2RvSWQgPSAwO1xuICBjb25zdCBBZGRUb2RvID0gKHByb3BzLCB7c3RvcmV9KSA9PiB7XG4gICAgbGV0IGlucHV0O1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHJlZj17ZG9tRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBkb21FbGVtZW50O1xuICAgICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gJ0FERF9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWUgfSA9IGlucHV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gbmV4dFRvZG9JZCsrO1xuXG4gICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQWRkIHRvZG9cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH07XG5cbiAgY2xhc3MgVmlzaWJsZVRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPFRvZG9MaXN0IHRvZG9zPXtcbiAgICAgICAgICAgICAgICAgICAgZ2V0VmlzaWJsZVRvZG9zKFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnRvZG9zLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2s9eyhpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gJ1RPR0dMRV9UT0RPJztcblxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxwPlxuICAgICAgICB7J1Nob3c6ICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BTEwnPlxuICAgICAgICAgIEFsbFxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgIHsnIC0gJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0NPTVBMRVRFRCc+XG4gICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgICAgeycgLSAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUNUSVZFJz5cbiAgICAgICAgICBBY3RpdmVcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgPC9wPlxuXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBUb2RvQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgIDxWaXNpYmxlVG9kb0xpc3QgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9O1xuXG4gIGNsYXNzIFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RvcmVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8UHJvdmlkZXIgc3RvcmU9e2NyZWF0ZVN0b3JlKHRvZG9BcHApfT5cbiAgICAgIDxUb2RvQXBwIC8+XG4gICAgPC9Qcm92aWRlcj4sXG4gICAgcm9vdERPTUVsZW1lbnRcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdXhBcHA7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgnLi4vcmVhY3QnKSxcbiAgICAgIFJlYWN0RE9NID0gcmVxdWlyZSgnLi4vcmVhY3RET00nKTtcblxuY29uc3QgdmFuaWxsYUFwcCA9ICgpID0+IHtcbiAgY29uc3Qgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gIGNvbnN0IENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50IG1vdW50ZWQgd2l0aCBtZXNzYWdlICcgKyBtZXNzYWdlKVxuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgICBjb25zb2xlLmxvZygnY29tbWVudCB1bm1vdW50ZWQgd2l0aCBtZXNzYWdlICcgKyBtZXNzYWdlKVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgQ29tbWVudHNMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgICBcIkhlbGxvLCB3b3JsZCFcIixcbiAgICAgICAgICAgICAgXCJIZWxsbyB3b3JsZCBhZ2Fpbi4uLlwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzXG4gICAgICAgICAgICB9O1xuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICAgIHsgbWVzc2FnZXMgfSA9IHN0YXRlLFxuICAgICAgICAgICAgY29tbWVudHMgPSBtZXNzYWdlcy5tYXAoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgICByZXR1cm4gPENvbW1lbnQgbWVzc2FnZT17bWVzc2FnZX0gLz47XG4gICAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzTGlzdFwiPlxuICAgICAgICAgIHtjb21tZW50c31cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50cyBsaXN0IG1vdW50ZWQnKVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29tbWVudHNMaXN0ID0gPENvbW1lbnRzTGlzdCAvPjtcblxuICBSZWFjdERPTS5yZW5kZXIoY29tbWVudHNMaXN0LCByb290RE9NRWxlbWVudCk7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgeWV0IGFnYWluISEhXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXNcbiAgICAgICAgICB9O1xuXG4gICAgY29tbWVudHNMaXN0LnNldFN0YXRlKHN0YXRlKTtcbiAgfSwgMTAwMCk7IC8vL1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB2YW5pbGxhQXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuY2xlYXJBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyBcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQucmVtb3ZlQXR0cmlidXRlKG5hbWUpXG59XG5cbmZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5oYXNBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldENsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5zZXRDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC50b2dnbGVDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmhhc0NsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzZXMoY2xhc3NOYW1lcykge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQ2xhc3NlcyhjbGFzc05hbWVzKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDbGFzc2VzKCkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5jbGVhckNsYXNzZXMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFnTmFtZSgpIHtcbiAgcmV0dXJuIG51bGw7ICAvLy9cbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuc2V0U3R5bGUobmFtZSwgdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0QXR0cmlidXRlLFxuICBnZXRBdHRyaWJ1dGUsXG4gIGNsZWFyQXR0cmlidXRlLFxuICBhZGRBdHRyaWJ1dGUsXG4gIHJlbW92ZUF0dHJpYnV0ZSxcbiAgaGFzQXR0cmlidXRlLFxuICBzZXRDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzcyxcbiAgaGFzQ2xhc3MsXG4gIGhhc0NsYXNzZXMsXG4gIGNsZWFyQ2xhc3NlcyxcbiAgZ2V0VGFnTmFtZSxcbiAgc2V0U3R5bGVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICBuYW1lID0gJ2NsYXNzJztcbiAgfVxuXG4gIGlmIChuYW1lID09PSAnaHRtbEZvcicpIHtcbiAgICBuYW1lID0gJ2Zvcic7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdGhpcy5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0NsYXNzZXMoY2xhc3NOYW1lcykge1xuICByZXR1cm4gY2xhc3NOYW1lcy5ldmVyeShmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNDbGFzcyhjbGFzc05hbWUpO1xuICB9LmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJzsgfVxuXG5mdW5jdGlvbiBnZXRUYWdOYW1lKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnRhZ05hbWU7IH1cblxuZnVuY3Rpb24gc2V0U3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZSxcbiAgY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlLFxuICBoYXNBdHRyaWJ1dGUsXG4gIHNldENsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzcyxcbiAgaGFzQ2xhc3NlcyxcbiAgY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lLFxuICBzZXRTdHlsZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgUmVhY3RDbGFzcyA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzcycpLFxuICAgICAgUmVhY3RDb21wb25lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50JyksXG4gICAgICBSZWFjdENsYXNzRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudC9yZWFjdC9jbGFzcycpLFxuICAgICAgUmVhY3RGdW5jdGlvbkVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvcmVhY3QvZnVuY3Rpb24nKSxcbiAgICAgIFJlYWN0Q29tcG9uZW50RWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudC9yZWFjdC9jb21wb25lbnQnKSxcbiAgICAgIFZpcnR1YWxET01UZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZS90ZXh0RWxlbWVudCcpLFxuICAgICAgVmlydHVhbERPTUVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudCcpO1xuXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhvYmplY3QpIHtcbiAgcmV0dXJuIFJlYWN0Q2xhc3MuY3JlYXRlKG9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRBcmd1bWVudHMpIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSxcbiAgICAgICAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgdmlydHVhbERPTUVsZW1lbnQgPSBuZXcgVmlydHVhbERPTUVsZW1lbnQodGFnTmFtZSwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gdmlydHVhbERPTUVsZW1lbnQgLy8vXG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgY29uc3QgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgcmVhY3RDbGFzc0VsZW1lbnQgPSBuZXcgUmVhY3RDbGFzc0VsZW1lbnQocmVhY3RDbGFzcywgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDbGFzc0VsZW1lbnQ7ICAvLy9cblxuICAgICAgY29uc3QgeyBtaXhpbnMgfSA9IHJlYWN0Q2xhc3M7XG5cbiAgICAgIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIFJlYWN0Q29tcG9uZW50KSkge1xuICAgICAgY29uc3QgUmVhY3RDb21wb25lbnQgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyBSZWFjdENvbXBvbmVudCgpLFxuICAgICAgICAgICAgcmVhY3RDb21wb25lbnRFbGVtZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50RWxlbWVudChyZWFjdENvbXBvbmVudCwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDb21wb25lbnRFbGVtZW50OyAgLy8vXG5cbiAgICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50LCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByZWFjdEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RGdW5jdGlvbkVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RGdW5jdGlvbkVsZW1lbnQ7IC8vL1xuXG4gICAgICBjb25zdCB7IG1peGlucyB9ID0gcmVhY3RGdW5jdGlvbjtcblxuICAgICAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IENvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50LCAvLy9cbiAgICAgIFJlYWN0ID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGNyZWF0ZUNsYXNzLFxuICAgICAgICBjcmVhdGVFbGVtZW50XG4gICAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cykge1xuICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLnJlZHVjZShmdW5jdGlvbihjaGlsZEFyZ3VtZW50cywgY2hpbGRBcmd1bWVudCkge1xuICAgIGNoaWxkQXJndW1lbnRzID0gY2hpbGRBcmd1bWVudHMuY29uY2F0KGNoaWxkQXJndW1lbnQpO1xuXG4gICAgcmV0dXJuIGNoaWxkQXJndW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZEFyZ3VtZW50cy5tYXAoZnVuY3Rpb24oY2hpbGRBcmd1bWVudCkge1xuICAgIGxldCBjaGlsZDtcblxuICAgIGlmIChjaGlsZEFyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgY2hpbGQgPSBjaGlsZEFyZ3VtZW50OyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBjaGlsZEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHZpcnR1YWxET01UZXh0RWxlbWVudCA9IG5ldyBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkID0gdmlydHVhbERPTVRleHRFbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhyZWFjdENvbXBvbmVudCwgZWxlbWVudCkge1xuICBjb25zdCB7IG1peGlucyB9ID0gcmVhY3RDb21wb25lbnQ7XG5cbiAgcmVhY3RDb21wb25lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocmVhY3RDb21wb25lbnQpOyAvLy9cblxuICBpZiAocmVhY3RDb21wb25lbnQgIT09IFJlYWN0Q29tcG9uZW50KSB7XG4gICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMocmVhY3RDb21wb25lbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpIHtcbiAgaWYgKG1peGlucykge1xuICAgIG1peGlucy5mb3JFYWNoKGZ1bmN0aW9uKG1peGluKSB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IG1peGluO1xuXG4gICAgICBlbGVtZW50W25hbWVdID0gbWl4aW4uYmluZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCBzdWJjbGFzcyA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudCA9PT0gQ2xhc3MpIHsgICAvLy9cbiAgICBzdWJjbGFzcyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCAhPT0gbnVsbCkge1xuICAgICAgc3ViY2xhc3MgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ViY2xhc3M7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlYWN0Q2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucykge1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyO1xuXG4gICAgaWYgKGdldEluaXRpYWxTdGF0ZSkgeyB0aGlzLmdldEluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZTsgfVxuICAgIGlmIChnZXRDaGlsZENvbnRleHQpIHsgdGhpcy5nZXRDaGlsZENvbnRleHQgPSBnZXRDaGlsZENvbnRleHQ7IH1cbiAgICBpZiAoY29tcG9uZW50RGlkTW91bnQpIHsgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50OyB9XG4gICAgaWYgKGNvbXBvbmVudFdpbGxVbm1vdW50KSB7IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSBjb21wb25lbnRXaWxsVW5tb3VudDsgfVxuXG4gICAgdGhpcy5taXhpbnMgPSBtaXhpbnM7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKG9iamVjdCkge1xuICAgIGNvbnN0IHsgcmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMgfSA9IG9iamVjdDtcblxuICAgIHJldHVybiBuZXcgUmVhY3RDbGFzcyhyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWFjdENvbXBvbmVudCB7XG5cblxuXG5cblxuXG5cblxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgIFxuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cblxuXG5cblxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVmlydHVhbERPTU5vZGUgPSByZXF1aXJlKCcuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUnKTtcblxuY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBWaXJ0dWFsRE9NTm9kZS5mcm9tRE9NRWxlbWVudChwYXJlbnRET01FbGVtZW50KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSB7fTtcblxuICAgIGVsZW1lbnQubW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5mdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxuZnVuY3Rpb24gcmVtYWluaW5nKGVsZW1lbnQsIGFycmF5KSB7XG4gIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgY29uc3QgaW5kZXggPSBpbmRleE9mKGVsZW1lbnQsIGFycmF5KTtcblxuICByZXR1cm4gYXJyYXkuc2xpY2UoaW5kZXggKyAxKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZpcnN0LFxuICBndWFyYW50ZWUsXG4gIHJlbWFpbmluZ1xufTtcblxuZnVuY3Rpb24gaW5kZXhPZihlbGVtZW50LCBhcnJheSkge1xuICBsZXQgaW5kZXggPSBudWxsO1xuXG4gIGFycmF5LnNvbWUoZnVuY3Rpb24oY3VycmVudEVsZW1lbnQsIGN1cnJlbnRFbGVtZW50SW5kZXgpIHtcbiAgICBpZiAoY3VycmVudEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgIGluZGV4ID0gY3VycmVudEVsZW1lbnRJbmRleDtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kZXg7XG59XG4iXX0=
