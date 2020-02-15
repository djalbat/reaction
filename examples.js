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

},{"./utilities/array":21}],2:[function(require,module,exports){
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
      var _this2 = this;

      this.context = context;

      var childContext = this.getChildContext(context),
          children = guarantee(this.render()),
          domElement = _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent, children);

      children.forEach(function (child) {
        var childParent = _this2,
            childReference = reference;

        child.mount(childParent, childReference, childContext);
      });

      this.componentDidMount(domElement);

      return domElement;
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.context = context;

      this.componentWillUnmount();

      var childContext = this.getChildContext(context),
          children = this.getChildren();

      children.forEach(function (child) {
        return child.unmount(childContext);
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
        return child.unmount(childContext);
      });

      this.children = guarantee(this.render(update));

      this.children.forEach(function (child) {
        return child.mount(childParent, childReference, childContext);
      });
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

},{"../element":1,"../mixins/reactElement":15,"../utilities/array":21}],3:[function(require,module,exports){
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
    value: function componentDidMount(domElement) {
      this.reactClass.componentDidMount.call(this, domElement);
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
    value: function componentDidMount(domElement) {
      this.reactComponent.componentDidMount.call(this, domElement);
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
      return this.reactFunction(this.props, this.context, this);
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
    value: function componentDidMount(domElement) {
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

      return this.domElement;
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

  function VirtualDOMElement() {
    _classCallCheck(this, VirtualDOMElement);

    return _possibleConstructorReturn(this, (VirtualDOMElement.__proto__ || Object.getPrototypeOf(VirtualDOMElement)).apply(this, arguments));
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
        return child.mount(childParent, childReference, childContext);
      });

      this.applyProps();
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      var childContext = context,
          children = this.getChildren();

      children.forEach(function (child) {
        return child.unmount(childContext);
      });

      _get(VirtualDOMElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'applyProps',
    value: function applyProps() {
      var _this2 = this;

      var names = Object.keys(this.props);

      names.forEach(function (name) {
        var value = _this2.props[name];

        if (false) {} else if (_this2.isHandlerName(name)) {
          _this2.setHandler(name, value);
        } else if (_this2.isAttributeName(name)) {
          _this2.setAttribute(name, value);
        } else if (name === 'ref') {
          var callback = value; ///

          callback(_this2.domElement);
        }
      });
    }
  }, {
    key: 'setHandler',
    value: function setHandler(name, value) {
      var eventType = name.substr(2).toLowerCase(),
          ///
      handler = value; ///

      this.domElement.addEventListener(eventType, handler);
    }
  }, {
    key: 'isHandlerName',
    value: function isHandlerName(name) {
      return name.match(/^on/);
    }
  }]);

  return VirtualDOMElement;
}(VirtualDOMNode);

Object.assign(VirtualDOMElement.prototype, virtualDOMElementMixins);

module.exports = VirtualDOMElement;

},{"../../mixins/virtualDOMElement":16,"../virtualDOMNode":6}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nameUtilities = require('../../../utilities/name'),
    VirtualDOMElement = require('../element');

var isHTMLAttributeName = nameUtilities.isHTMLAttributeName;

var VirtualDOMHTMLElement = function (_VirtualDOMElement) {
  _inherits(VirtualDOMHTMLElement, _VirtualDOMElement);

  function VirtualDOMHTMLElement(tagName, props) {
    _classCallCheck(this, VirtualDOMHTMLElement);

    var domElement = document.createElement(tagName);

    return _possibleConstructorReturn(this, (VirtualDOMHTMLElement.__proto__ || Object.getPrototypeOf(VirtualDOMHTMLElement)).call(this, props, domElement));
  }

  _createClass(VirtualDOMHTMLElement, [{
    key: 'isAttributeName',
    value: function isAttributeName(name) {
      return isHTMLAttributeName(name);
    }
  }]);

  return VirtualDOMHTMLElement;
}(VirtualDOMElement);

module.exports = VirtualDOMHTMLElement;

},{"../../../utilities/name":22,"../element":7}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nameUtilities = require('../../../utilities/name'),
    VirtualDOMElement = require('../element');

var isSVGAttributeName = nameUtilities.isSVGAttributeName;

var VirtualDOMSVGElement = function (_VirtualDOMElement) {
  _inherits(VirtualDOMSVGElement, _VirtualDOMElement);

  function VirtualDOMSVGElement(tagName, props) {
    _classCallCheck(this, VirtualDOMSVGElement);

    var domElement = document.createElementNS('http://www.w3.org/2000/svg', tagName);

    return _possibleConstructorReturn(this, (VirtualDOMSVGElement.__proto__ || Object.getPrototypeOf(VirtualDOMSVGElement)).call(this, props, domElement));
  }

  _createClass(VirtualDOMSVGElement, [{
    key: 'isAttributeName',
    value: function isAttributeName(name) {
      return isSVGAttributeName(name);
    }
  }]);

  return VirtualDOMSVGElement;
}(VirtualDOMElement);

module.exports = VirtualDOMSVGElement;

},{"../../../utilities/name":22,"../element":7}],10:[function(require,module,exports){
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

},{"../virtualDOMNode":6}],11:[function(require,module,exports){
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

var Redux = require('./redux'),
    React = require('../react'),
    ReactDOM = require('../reactDOM');

var Component = React.Component,
    createStore = Redux.createStore,
    combineReducers = Redux.combineReducers;


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
  componentDidMount: function componentDidMount(domElement) {
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

    var store = this.context.store,
        state = store.getState();


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
    value: function componentDidMount(domElement) {
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
      var store = this.context.store,
          state = store.getState();


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

var reduxApp = function reduxApp() {
  var store = createStore(todoApp),
      rootDOMElement = document.getElementById('root');

  ReactDOM.render(React.createElement(
    Provider,
    { store: store },
    React.createElement(TodoApp, null)
  ), rootDOMElement);
};

module.exports = reduxApp;

},{"../react":17,"../reactDOM":20,"./redux":12}],14:[function(require,module,exports){
'use strict';

var React = require('../react'),
    ReactDOM = require('../reactDOM');

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

    console.log('Comment mounted with message: ' + message);
  },

  componentWillUnmount: function componentWillUnmount() {
    var message = this.props.message;

    console.log('Comment unmounted with message: ' + message);
  }
});

var CommentsList = React.createClass({
  displayName: 'CommentsList',
  getInitialState: function getInitialState() {
    var messages = ['Hello, world!', 'Hello world again...'],
        state = {
      messages: messages
    };

    return state;
  },


  componentDidMount: function componentDidMount() {
    console.log('Comments list mounted.');
  },

  render: function render() {
    var state = this.getState(),
        messages = state.messages,
        comments = messages.map(function (message) {
      return React.createElement(Comment, { message: message });
    });


    return React.createElement(
      'div',
      { className: 'comments-list' },
      comments
    );
  }
});

var vanillaApp = function vanillaApp() {
  var commentsList = React.createElement(CommentsList, null),
      rootDOMElement = document.getElementById('root');

  ReactDOM.render(commentsList, rootDOMElement);

  setTimeout(function () {
    var messages = ['Hello world yet again!!!'],
        state = {
      messages: messages
    };

    commentsList.setState(state);
  }, 1000); ///
};

module.exports = vanillaApp;

},{"../react":17,"../reactDOM":20}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function setAttribute(name, value) {
  var _this = this;

  if (name === 'className') {
    name = 'class';
  }

  if (name === 'htmlFor') {
    name = 'for';
  }

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var keys = Object.keys(value);

    keys.forEach(function (key) {
      _this.domElement[name][key] = value[key];
    });
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
  var _this2 = this;

  return classNames.every(function (className) {
    return _this2.hasClass(className);
  });
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

},{}],17:[function(require,module,exports){
'use strict';

var Element = require('./element'),
    ReactClass = require('./reactClass'),
    nameUtilities = require('./utilities/name'),
    arrayUtilities = require('./utilities/array'),
    ReactComponent = require('./reactComponent'),
    ReactClassElement = require('./element/react/class'),
    ReactFunctionElement = require('./element/react/function'),
    ReactComponentElement = require('./element/react/component'),
    VirtualDOMTextElement = require('./element/virtualDOMNode/textElement'),
    VirtualDOMHTMLElement = require('./element/virtualDOMNode/element/html'),
    VirtualDOMSVGElement = require('./element/virtualDOMNode/element/svg');

var flatten = arrayUtilities.flatten,
    isSVGTagName = nameUtilities.isSVGTagName;


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
      virtualDOMElement = isSVGTagName(tagName) ? new VirtualDOMSVGElement(tagName, props) : new VirtualDOMHTMLElement(tagName, props);

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
  childArguments = flatten(childArguments); ///

  var children = childArguments.map(function (childArgument) {
    var child = void 0;

    if (isSubclassOf(childArgument.constructor, Element)) {
      ///
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

  if (argument.name === Class.name) {
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

},{"./element":1,"./element/react/class":3,"./element/react/component":4,"./element/react/function":5,"./element/virtualDOMNode/element/html":8,"./element/virtualDOMNode/element/svg":9,"./element/virtualDOMNode/textElement":10,"./reactClass":18,"./reactComponent":19,"./utilities/array":21,"./utilities/name":22}],18:[function(require,module,exports){
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
    value: function componentDidMount(domElement) {}
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

},{}],19:[function(require,module,exports){
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
    value: function componentDidMount(domElement) {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }]);

  return ReactComponent;
}();

module.exports = ReactComponent;

},{}],20:[function(require,module,exports){
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

},{"./element/virtualDOMNode":6}],21:[function(require,module,exports){
'use strict';

function first(array) {
  return array[0];
}

function flatten(array) {
  return array.reduce(function (array, element) {
    array = array.concat(element); ///

    return array;
  }, []);
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
  flatten: flatten,
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

},{}],22:[function(require,module,exports){
'use strict';

function isSVGTagName(tagName) {
  return svgTagNames.includes(tagName);
}

function isSVGAttributeName(attributeName) {
  return svgAttributeNames.includes(attributeName);
}

function isHTMLAttributeName(attributeName) {
  return htmlAttributeNames.includes(attributeName);
}

module.exports = {
  isSVGTagName: isSVGTagName,
  isSVGAttributeName: isSVGAttributeName,
  isHTMLAttributeName: isHTMLAttributeName
};

var svgTagNames = ['altGlyph', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'animation', 'audio', 'circle', 'clipPath', 'color-profile', 'cursor', 'defs', 'desc', 'discard', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-uri', 'foreignObject', 'g', 'glyph', 'glyphRef', 'handler', 'hatch', 'hatchpath', 'hkern', 'image', 'line', 'linearGradient', 'listener', 'marker', 'mask', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'metadata', 'missing-glyph', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'prefetch', 'radialGradient', 'rect', 'script', 'set', 'solidcolor', 'stop', 'style', 'svg', 'switch', 'symbol', 'tbreak', 'text', 'textArea', 'textPath', 'title', 'tref', 'tspan', 'unknown', 'use', 'video', 'view', 'vkern'],
    svgAttributeNames = ['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'alphabetic', 'amplitude', 'arabic-form', 'ascent', 'attributeName', 'attributeType', 'azimuth', 'bandwidth', 'baseFrequency', 'baseProfile', 'baseline-shift', 'bbox', 'begin', 'bias', 'by', 'calcMode', 'cap-height', 'clip', 'className', 'clip-path', 'clip-rule', 'clipPathUnits', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'contentScriptType', 'contentStyleType', 'crossorigin', 'cursor', 'cx', 'cy', 'd', 'defaultAction', 'descent', 'diffuseConstant', 'direction', 'display', 'divisor', 'dominant-baseline', 'download', 'dur', 'dx', 'dy', 'edgeMode', 'editable', 'elevation', 'enable-background', 'end', 'event', 'exponent', 'externalResourcesRequired', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterRes', 'filterUnits', 'flood-color', 'flood-opacity', 'focusHighlight', 'focusable', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'format', 'fr', 'from', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'glyphRef', 'gradientTransform', 'gradientUnits', 'handler', 'hanging', 'hatchContentUnits', 'hatchUnits', 'height', 'horiz-adv-x', 'horiz-origin-x', 'horiz-origin-y', 'href', 'hreflang', 'ideographic', 'image-rendering', 'in', 'in2', 'initialVisibility', 'intercept', 'k', 'k1', 'k2', 'k3', 'k4', 'kernelMatrix', 'kernelUnitLength', 'kerning', 'keyPoints', 'keySplines', 'keyTimes', 'lengthAdjust', 'letter-spacing', 'lighting-color', 'limitingConeAngle', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerHeight', 'markerUnits', 'markerWidth', 'mask', 'maskContentUnits', 'maskUnits', 'mathematical', 'max', 'media', 'mediaCharacterEncoding', 'mediaContentEncodings', 'mediaSize', 'mediaTime', 'method', 'min', 'mode', 'name', 'nav-down', 'nav-down-left', 'nav-down-right', 'nav-left', 'nav-next', 'nav-prev', 'nav-right', 'nav-up', 'nav-up-left', 'nav-up-right', 'numOctaves', 'observer', 'offset', 'opacity', 'operator', 'order', 'orient', 'orientation', 'origin', 'overflow', 'overlay', 'overline-position', 'overline-thickness', 'panose-1', 'path', 'pathLength', 'patternContentUnits', 'patternTransform', 'patternUnits', 'phase', 'pitch', 'playbackOrder', 'playbackorder', 'pointer-events', 'points', 'pointsAtX', 'pointsAtY', 'pointsAtZ', 'preserveAlpha', 'preserveAspectRatio', 'primitiveUnits', 'propagate', 'r', 'radius', 'refX', 'refY', 'rendering-intent', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'requiredFonts', 'requiredFormats', 'restart', 'result', 'rotate', 'rx', 'ry', 'scale', 'seed', 'shape-rendering', 'side', 'slope', 'snapshotTime', 'spacing', 'specularConstant', 'specularExponent', 'spreadMethod', 'src', 'startOffset', 'stdDeviation', 'stemh', 'stemv', 'stitchTiles', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'string', 'stroke', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'style', 'surfaceScale', 'syncBehavior', 'syncBehaviorDefault', 'syncMaster', 'syncTolerance', 'syncToleranceDefault', 'systemLanguage', 'tableValues', 'target', 'targetX', 'targetY', 'text-anchor', 'text-decoration', 'text-rendering', 'textLength', 'timelineBegin', 'timelinebegin', 'title', 'to', 'transform', 'transformBehavior', 'type', 'u1', 'u2', 'underline-position', 'underline-thickness', 'unicode', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'values', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'viewBox', 'viewTarget', 'visibility', 'width', 'widths', 'word-spacing', 'writing-mode', 'x', 'x-height', 'x1', 'x2', 'xChannelSelector', 'y', 'y1', 'y2', 'yChannelSelector', 'z', 'zoomAndPan'],
    htmlAttributeNames = ['accept', 'acceptCharset', 'accessKey', 'action', 'allow', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap'];

},{}]},{},[11])(11)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvZWxlbWVudC5qcyIsImVzNi9lbGVtZW50L3JlYWN0LmpzIiwiZXM2L2VsZW1lbnQvcmVhY3QvY2xhc3MuanMiLCJlczYvZWxlbWVudC9yZWFjdC9jb21wb25lbnQuanMiLCJlczYvZWxlbWVudC9yZWFjdC9mdW5jdGlvbi5qcyIsImVzNi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlLmpzIiwiZXM2L2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC5qcyIsImVzNi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQvaHRtbC5qcyIsImVzNi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQvc3ZnLmpzIiwiZXM2L2VsZW1lbnQvdmlydHVhbERPTU5vZGUvdGV4dEVsZW1lbnQuanMiLCJlczYvZXhhbXBsZXMuanMiLCJlczYvZXhhbXBsZXMvcmVkdXguanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAuanMiLCJlczYvZXhhbXBsZXMvdmFuaWxsYUFwcC5qcyIsImVzNi9taXhpbnMvcmVhY3RFbGVtZW50LmpzIiwiZXM2L21peGlucy92aXJ0dWFsRE9NRWxlbWVudC5qcyIsImVzNi9yZWFjdC5qcyIsImVzNi9yZWFjdENsYXNzLmpzIiwiZXM2L3JlYWN0Q29tcG9uZW50LmpzIiwiZXM2L3JlYWN0RE9NLmpzIiwiZXM2L3V0aWxpdGllcy9hcnJheS5qcyIsImVzNi91dGlsaXRpZXMvbmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7QUFFQSxJQUFNLGlCQUFpQixRQUFRLG1CQUFSLENBQXZCOztJQUVRLEssR0FBVSxjLENBQVYsSzs7SUFFRixPO0FBQ0osbUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLLEtBQUwsR0FBYSxLQUFiOztBQUVBLFNBQUssTUFBTCxHQUFjLElBQWQ7O0FBRUEsU0FBSyxRQUFMLEdBQWdCLE1BQU0s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bnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAgLy8vXG4gIH1cblxuICBnZXRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICBnZXRGaXJzdENoaWxkKCkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGZpcnN0Q2hpbGQ7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIGNoaWxkcmVuKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBudWxsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICByZWFjdEVsZW1lbnRNaXhpbnMgPSByZXF1aXJlKCcuLi9taXhpbnMvcmVhY3RFbGVtZW50Jyk7XG5cbmNvbnN0IHsgZ3VhcmFudGVlLCByZW1haW5pbmcgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQgPSB1bmRlZmluZWQ7IC8vL1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIoKSksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHN1cGVyLm1vdW50KHBhcmVudCwgY2hpbGRyZW4pO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuXG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHJlbW91bnQodXBkYXRlKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCkpO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGd1YXJhbnRlZSh0aGlzLnJlbmRlcih1cGRhdGUpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KSk7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTsgIC8vL1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKG5ld1N0YXRlKSB7XG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLnN0YXRlOyAgLy8vXG5cbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbihvbGRTdGF0ZSwgbmV3U3RhdGUpO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICBmb3JjZVVwZGF0ZSh1cGRhdGUpIHtcbiAgICB0aGlzLnJlbW91bnQodXBkYXRlKTtcbiAgfVxuXG4gIGdldENoaWxkUmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50KCksXG4gICAgICAgICAgY2hpbGQgPSB0aGlzOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZWFjdEVsZW1lbnQucHJvdG90eXBlLCByZWFjdEVsZW1lbnRNaXhpbnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCksXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAoKHJlZmVyZW5jZSA9PT0gbnVsbCkgJiYgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpKSB7XG4gICAgY2hpbGQgPSBwYXJlbnQ7IC8vL1xuXG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gcmVtYWluaW5nKGNoaWxkLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIHJlbWFpbmluZ0NoaWxkcmVuLnJlZHVjZSgocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkgPT4ge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCA9IHJlbWFpbmluZ0NoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgaWYgKHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSByZW1haW5pbmdDaGlsZDsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG5cbiAgICAgICAgcGFyZW50ID0gcmVtYWluaW5nQ2hpbGQ7ICAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIG51bGwpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuLi9yZWFjdCcpO1xuXG5jbGFzcyBSZWFjdENsYXNzRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENsYXNzID0gcmVhY3RDbGFzcztcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmNhbGwodGhpcywgdXBkYXRlKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldEluaXRpYWxTdGF0ZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldENoaWxkQ29udGV4dC5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudChkb21FbGVtZW50KSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudERpZE1vdW50LmNhbGwodGhpcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q2xhc3NFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuLi9yZWFjdCcpO1xuXG5jbGFzcyBSZWFjdENvbXBvbmVudEVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENvbXBvbmVudCwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50ID0gcmVhY3RDb21wb25lbnQ7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5yZW5kZXIuY2FsbCh0aGlzLCB1cGRhdGUpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LmdldEluaXRpYWxTdGF0ZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5nZXRDaGlsZENvbnRleHQuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KGRvbUVsZW1lbnQpIHtcbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50LmNhbGwodGhpcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVbm1vdW50LmNhbGwodGhpcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4uL3JlYWN0Jyk7XG5cbmNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuXG5cblxuXG4gIH1cbiBcbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24odGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudChkb21FbGVtZW50KSB7XG4gICAgLy8vXG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEZ1bmN0aW9uRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgVmlydHVhbERPTU5vZGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBwYXJlbnRET01FbGVtZW50KHBhcmVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpKTtcblxuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlydHVhbERPTU5vZGUgPSBuZXcgVmlydHVhbERPTU5vZGUocHJvcHMsIGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHZpcnR1YWxET01Ob2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTU5vZGU7XG5cbmZ1bmN0aW9uIHBhcmVudERPTUVsZW1lbnQocGFyZW50KSB7XG4gIGxldCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudERPTUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZURPTUVsZW1lbnQgPSAocmVmZXJlbmNlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZS5nZXRET01FbGVtZW50KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZURPTUVsZW1lbnQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZpcnR1YWxET01Ob2RlID0gcmVxdWlyZSgnLi4vdmlydHVhbERPTU5vZGUnKSxcbiAgICAgIHZpcnR1YWxET01FbGVtZW50TWl4aW5zID0gcmVxdWlyZSgnLi4vLi4vbWl4aW5zL3ZpcnR1YWxET01FbGVtZW50Jyk7XG5cbmNsYXNzIFZpcnR1YWxET01FbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTU5vZGUge1xuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcblxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCkpO1xuXG4gICAgdGhpcy5hcHBseVByb3BzKCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG5cbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHNbbmFtZV07XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNIYW5kbGVyTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEhhbmRsZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWU7IC8vL1xuICAgICAgICBcbiAgICAgICAgY2FsbGJhY2sodGhpcy5kb21FbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldEhhbmRsZXIobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgIGhhbmRsZXIpO1xuICB9XG5cblx0aXNIYW5kbGVyTmFtZShuYW1lKSB7XG5cdFx0cmV0dXJuIG5hbWUubWF0Y2goL15vbi8pO1xuXHR9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlydHVhbERPTUVsZW1lbnQucHJvdG90eXBlLCB2aXJ0dWFsRE9NRWxlbWVudE1peGlucyk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTUVsZW1lbnQ7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9uYW1lJyksXG4gICAgICBWaXJ0dWFsRE9NRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY29uc3QgeyBpc0hUTUxBdHRyaWJ1dGVOYW1lIH0gPSBuYW1lVXRpbGl0aWVzO1xuXG5jbGFzcyBWaXJ0dWFsRE9NSFRNTEVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBpc0F0dHJpYnV0ZU5hbWUobmFtZSkge1xuICAgIHJldHVybiBpc0hUTUxBdHRyaWJ1dGVOYW1lKG5hbWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTUhUTUxFbGVtZW50O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvbmFtZScpLFxuICAgICAgVmlydHVhbERPTUVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNvbnN0IHsgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gPSBuYW1lVXRpbGl0aWVzO1xuXG5jbGFzcyBWaXJ0dWFsRE9NU1ZHRWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01FbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGFnTmFtZSwgcHJvcHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHRhZ05hbWUpO1xuXG4gICAgc3VwZXIocHJvcHMsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgaXNBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gaXNTVkdBdHRyaWJ1dGVOYW1lKG5hbWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTVNWR0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZpcnR1YWxET01Ob2RlID0gcmVxdWlyZSgnLi4vdmlydHVhbERPTU5vZGUnKTtcblxuY2xhc3MgVmlydHVhbERPTVRleHRFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTU5vZGUge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH07XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcbiAgfVxuICBcbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlLFxuICAgICAgICAgIHRleHQgPSBub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0ZXh0OyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUgPSBub2RlVmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB2YW5pbGxhQXBwOiByZXF1aXJlKCcuL2V4YW1wbGVzL3ZhbmlsbGFBcHAnKSxcbiAgcmVkdXhBcHA6IHJlcXVpcmUoJy4vZXhhbXBsZXMvcmVkdXhBcHAnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlcikgPT4ge1xuICBsZXQgc3RhdGUsXG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKTtcbiAgfTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IHtcbiAgICAgIHJldHVybiAobGlzdGVuZXIgIT09IGwpO1xuICAgIH0pO1xuICB9O1xuXG4gIGRpc3BhdGNoKHt9KTtcblxuICByZXR1cm4geyBnZXRTdGF0ZSwgZGlzcGF0Y2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbn07XG5cbmNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9IChyZWR1Y2VycykgPT4ge1xuICByZXR1cm4gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2VycyksXG4gICAgICAgICAgbmV4dFN0YXRlID0ga2V5cy5yZWR1Y2UoKG5leHRTdGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcblxuICAgICAgICAgICAgbmV4dFN0YXRlW2tleV0gPSByZWR1Y2VyKHN0YXRlW2tleV0sIGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgfTtcbn07XG5cbmNvbnN0IFJlZHV4ID0geyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkdXg7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlZHV4ID0gcmVxdWlyZSgnLi9yZWR1eCcpLFxuICAgICAgUmVhY3QgPSByZXF1aXJlKCcuLi9yZWFjdCcpLFxuICAgICAgUmVhY3RET00gPSByZXF1aXJlKCcuLi9yZWFjdERPTScpO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3QsXG4gICAgICB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSA9IFJlZHV4O1xuXG5jb25zdCB0b2RvID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9UT0RPJyA6IHtcbiAgICAgIGNvbnN0IHsgaWQsIHRleHQgfSA9IGFjdGlvbixcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICB0ZXh0LFxuICAgICAgICBjb21wbGV0ZWRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSAnVE9HR0xFX1RPRE8nIDoge1xuICAgICAgaWYgKHN0YXRlLmlkICE9PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSAhc3RhdGUuY29tcGxldGVkOyAvLy9cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbXBsZXRlZFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfVE9ETycgOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvZG8odW5kZWZpbmVkLCBhY3Rpb24pXG4gICAgICBdO1xuXG4gICAgY2FzZSAnVE9HR0xFX1RPRE8nIDpcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAodCA9PiB0b2RvKHQsIGFjdGlvbikpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgdmlzaWJpbGl0eUZpbHRlciA9ICggc3RhdGUgPSAnU0hPV19BTEwnLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUicgOlxuICAgICAgcmV0dXJuIGFjdGlvbi5maWx0ZXI7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCB0b2RvQXBwID0gY29tYmluZVJlZHVjZXJzKHtcbiAgdG9kb3MsXG4gIHZpc2liaWxpdHlGaWx0ZXJcbn0pO1xuXG5jb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIGZpbHRlcikgPT4ge1xuICBzd2l0Y2ggKGZpbHRlcikge1xuICAgIGNhc2UgJ1NIT1dfQUxMJyA6XG4gICAgICByZXR1cm4gdG9kb3M7XG5cbiAgICBjYXNlICdTSE9XX0NPTVBMRVRFRCcgOlxuICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgdCA9PiB0LmNvbXBsZXRlZFxuICAgICAgKTtcblxuICAgIGNhc2UgJ1NIT1dfQUNUSVZFJyA6XG4gICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICB0ID0+ICF0LmNvbXBsZXRlZFxuICAgICAgKTtcbiAgfVxufTtcblxuY29uc3QgVG9kbyA9ICh7b25DbGljaywgY29tcGxldGVkLCB0ZXh0fSkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIHN0eWxlPXt7dGV4dERlY29yYXRpb246Y29tcGxldGVkID9cbiAgICAgICAgICAgICdsaW5lLXRocm91Z2gnIDpcbiAgICAgICAgICAgICdub25lJ319XG4gICAgPlxuICAgICAge3RleHR9XG4gICAgPC9saT5cblxuICApO1xufTtcblxuY29uc3QgVG9kb0xpc3QgPSAoe3RvZG9zLCBvblRvZG9DbGlja30pID0+ICB7XG4gIHJldHVybiAoXG5cbiAgICA8dWw+XG4gICAgICB7dG9kb3MubWFwKHRvZG8gPT4gPFRvZG8gdGV4dD17dG9kby50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrKHRvZG8uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgLz4pfVxuICAgIDwvdWw+XG5cbiAgKTtcbn07XG5cbmNvbnN0IExpbmsgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBhY3RpdmUsIG9uQ2xpY2sgfSA9IHByb3BzO1xuXG4gIGlmIChhY3RpdmUpIHtcbiAgICByZXR1cm4gPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj47XG4gIH1cblxuICByZXR1cm4gKFxuXG4gICAgPGEgaHJlZj0nIydcbiAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgIG9uQ2xpY2soKTtcbiAgICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2E+XG5cbiAgKTtcbn07XG5cbmNvbnN0IEZpbHRlckxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGNvbXBvbmVudERpZE1vdW50KGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICApO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPExpbmsgYWN0aXZlPXtcbiAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXIgPT09IHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdHlwZSA9ICdTRVRfVklTSUJJTElUWV9GSUxURVInLFxuICAgICAgICAgICAgICAgIHsgZmlsdGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIGZpbHRlclxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9MaW5rPlxuXG4gICAgKTtcbiAgfVxufSk7XG5cbmxldCBuZXh0VG9kb0lkID0gMDtcbmNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIHtzdG9yZX0pID0+IHtcbiAgbGV0IGlucHV0O1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgPGlucHV0IHJlZj17ZG9tRWxlbWVudCA9PiB7XG4gICAgICAgIGlucHV0ID0gZG9tRWxlbWVudDtcbiAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSAnQUREX1RPRE8nLFxuICAgICAgICAgIHsgdmFsdWUgfSA9IGlucHV0LFxuICAgICAgICAgIHRleHQgPSB2YWx1ZSwgLy8vXG4gICAgICAgICAgaWQgPSBuZXh0VG9kb0lkKys7XG5cbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBpZFxuICAgICAgICB9KTtcblxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgQWRkIHRvZG9cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5jbGFzcyBWaXNpYmxlVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8VG9kb0xpc3QgdG9kb3M9e1xuICAgICAgICBnZXRWaXNpYmxlVG9kb3MoXG4gICAgICAgICAgc3RhdGUudG9kb3MsXG4gICAgICAgICAgc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICApXG4gICAgICB9XG4gICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2s9eyhpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9ICdUT0dHTEVfVE9ETyc7XG5cbiAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8cD5cbiAgICAgIHsnU2hvdzogJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BTEwnPlxuICAgICAgICBBbGxcbiAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19DT01QTEVURUQnPlxuICAgICAgICBDb21wbGV0ZWRcbiAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BQ1RJVkUnPlxuICAgICAgICBBY3RpdmVcbiAgICAgIDwvRmlsdGVyTGluaz5cbiAgICA8L3A+XG5cbiAgKTtcbn07XG5cbmNvbnN0IFRvZG9BcHAgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgPEFkZFRvZG8gLz5cbiAgICAgIDxWaXNpYmxlVG9kb0xpc3QgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmVcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG59XG5cbmNvbnN0IHJlZHV4QXBwID0gKCkgPT4ge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHRvZG9BcHApLFxuICAgICAgICByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFRvZG9BcHAgLz5cbiAgICAgIDwvUHJvdmlkZXI+XG5cbiAgICAsXG4gICAgcm9vdERPTUVsZW1lbnRcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdXhBcHA7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgnLi4vcmVhY3QnKSxcbiAgICAgIFJlYWN0RE9NID0gcmVxdWlyZSgnLi4vcmVhY3RET00nKTtcblxuY29uc3QgQ29tbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAge3RoaXMucHJvcHMubWVzc2FnZX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgY29uc29sZS5sb2coJ0NvbW1lbnQgbW91bnRlZCB3aXRoIG1lc3NhZ2U6ICcgKyBtZXNzYWdlKVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgY29uc29sZS5sb2coJ0NvbW1lbnQgdW5tb3VudGVkIHdpdGggbWVzc2FnZTogJyArIG1lc3NhZ2UpXG4gIH1cbn0pO1xuXG5jb25zdCBDb21tZW50c0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgICdIZWxsbywgd29ybGQhJyxcbiAgICAgICAgICAgICdIZWxsbyB3b3JsZCBhZ2Fpbi4uLidcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnQ29tbWVudHMgbGlzdCBtb3VudGVkLicpXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IG1lc3NhZ2VzIH0gPSBzdGF0ZSxcbiAgICAgICAgICBjb21tZW50cyA9IG1lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT5cblxuICAgICAgICAgICAgPENvbW1lbnQgbWVzc2FnZT17bWVzc2FnZX0gLz5cblxuICAgICAgICAgICk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzLWxpc3RcIj5cbiAgICAgICAge2NvbW1lbnRzfVxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59KTtcblxuY29uc3QgdmFuaWxsYUFwcCA9ICgpID0+IHtcbiAgY29uc3QgY29tbWVudHNMaXN0ID1cblxuICAgICAgICAgIDxDb21tZW50c0xpc3QgLz5cblxuICAgICAgICAsXG4gICAgICAgIHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICBjb21tZW50c0xpc3QsXG4gICAgcm9vdERPTUVsZW1lbnRcbiAgKTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgJ0hlbGxvIHdvcmxkIHlldCBhZ2FpbiEhISdcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXNcbiAgICAgICAgICB9O1xuXG4gICAgY29tbWVudHNMaXN0LnNldFN0YXRlKHN0YXRlKTtcbiAgfSwgMTAwMCk7IC8vL1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB2YW5pbGxhQXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuY2xlYXJBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyBcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQucmVtb3ZlQXR0cmlidXRlKG5hbWUpXG59XG5cbmZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5oYXNBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldENsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5zZXRDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC50b2dnbGVDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmhhc0NsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzZXMoY2xhc3NOYW1lcykge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQ2xhc3NlcyhjbGFzc05hbWVzKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDbGFzc2VzKCkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5jbGVhckNsYXNzZXMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFnTmFtZSgpIHtcbiAgcmV0dXJuIG51bGw7ICAvLy9cbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuc2V0U3R5bGUobmFtZSwgdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0QXR0cmlidXRlLFxuICBnZXRBdHRyaWJ1dGUsXG4gIGNsZWFyQXR0cmlidXRlLFxuICBhZGRBdHRyaWJ1dGUsXG4gIHJlbW92ZUF0dHJpYnV0ZSxcbiAgaGFzQXR0cmlidXRlLFxuICBzZXRDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzcyxcbiAgaGFzQ2xhc3MsXG4gIGhhc0NsYXNzZXMsXG4gIGNsZWFyQ2xhc3NlcyxcbiAgZ2V0VGFnTmFtZSxcbiAgc2V0U3R5bGVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICBuYW1lID0gJ2NsYXNzJztcbiAgfVxuXG4gIGlmIChuYW1lID09PSAnaHRtbEZvcicpIHtcbiAgICBuYW1lID0gJ2Zvcic7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdGhpcy5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzc2VzKGNsYXNzTmFtZXMpIHsgcmV0dXJuIGNsYXNzTmFtZXMuZXZlcnkoKGNsYXNzTmFtZSkgPT4gdGhpcy5oYXNDbGFzcyhjbGFzc05hbWUpKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJzsgfVxuXG5mdW5jdGlvbiBnZXRUYWdOYW1lKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnRhZ05hbWU7IH1cblxuZnVuY3Rpb24gc2V0U3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZSxcbiAgY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlLFxuICBoYXNBdHRyaWJ1dGUsXG4gIHNldENsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzcyxcbiAgaGFzQ2xhc3NlcyxcbiAgY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lLFxuICBzZXRTdHlsZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgUmVhY3RDbGFzcyA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzcycpLFxuICAgICAgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL25hbWUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIFJlYWN0Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudCcpLFxuICAgICAgUmVhY3RDbGFzc0VsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvcmVhY3QvY2xhc3MnKSxcbiAgICAgIFJlYWN0RnVuY3Rpb25FbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L3JlYWN0L2Z1bmN0aW9uJyksXG4gICAgICBSZWFjdENvbXBvbmVudEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvcmVhY3QvY29tcG9uZW50JyksXG4gICAgICBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvdGV4dEVsZW1lbnQnKSxcbiAgICAgIFZpcnR1YWxET01IVE1MRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZS9lbGVtZW50L2h0bWwnKSxcbiAgICAgIFZpcnR1YWxET01TVkdFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQvc3ZnJyk7XG5cbmNvbnN0IHsgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGlzU1ZHVGFnTmFtZSB9ID0gbmFtZVV0aWxpdGllcztcblxuZnVuY3Rpb24gY3JlYXRlQ2xhc3Mob2JqZWN0KSB7XG4gIHJldHVybiBSZWFjdENsYXNzLmNyZWF0ZShvYmplY3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkQXJndW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyksXG4gICAgICAgICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHZpcnR1YWxET01FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmlydHVhbERPTVNWR0VsZW1lbnQodGFnTmFtZSwgcHJvcHMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWaXJ0dWFsRE9NSFRNTEVsZW1lbnQodGFnTmFtZSwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gdmlydHVhbERPTUVsZW1lbnQgLy8vXG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgY29uc3QgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgcmVhY3RDbGFzc0VsZW1lbnQgPSBuZXcgUmVhY3RDbGFzc0VsZW1lbnQocmVhY3RDbGFzcywgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDbGFzc0VsZW1lbnQ7ICAvLy9cblxuICAgICAgY29uc3QgeyBtaXhpbnMgfSA9IHJlYWN0Q2xhc3M7XG5cbiAgICAgIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIFJlYWN0Q29tcG9uZW50KSkge1xuICAgICAgY29uc3QgUmVhY3RDb21wb25lbnQgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyBSZWFjdENvbXBvbmVudCgpLFxuICAgICAgICAgICAgcmVhY3RDb21wb25lbnRFbGVtZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50RWxlbWVudChyZWFjdENvbXBvbmVudCwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDb21wb25lbnRFbGVtZW50OyAgLy8vXG5cbiAgICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50LCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByZWFjdEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RGdW5jdGlvbkVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RGdW5jdGlvbkVsZW1lbnQ7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBDb21wb25lbnQgPSBSZWFjdENvbXBvbmVudCwgLy8vXG4gICAgICBSZWFjdCA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBjcmVhdGVDbGFzcyxcbiAgICAgICAgY3JlYXRlRWxlbWVudFxuICAgICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRyZW5Gcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpIHtcbiAgY2hpbGRBcmd1bWVudHMgPSBmbGF0dGVuKGNoaWxkQXJndW1lbnRzKTsgLy8vXG5cbiAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZEFyZ3VtZW50cy5tYXAoKGNoaWxkQXJndW1lbnQpID0+IHtcbiAgICBsZXQgY2hpbGQ7XG5cbiAgICBpZiAoaXNTdWJjbGFzc09mKGNoaWxkQXJndW1lbnQuY29uc3RydWN0b3IsIEVsZW1lbnQpKSB7IC8vL1xuICAgICAgY2hpbGQgPSBjaGlsZEFyZ3VtZW50OyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBjaGlsZEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHZpcnR1YWxET01UZXh0RWxlbWVudCA9IG5ldyBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkID0gdmlydHVhbERPTVRleHRFbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhyZWFjdENvbXBvbmVudCwgZWxlbWVudCkge1xuICBjb25zdCB7IG1peGlucyB9ID0gcmVhY3RDb21wb25lbnQ7XG5cbiAgcmVhY3RDb21wb25lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocmVhY3RDb21wb25lbnQpOyAvLy9cblxuICBpZiAocmVhY3RDb21wb25lbnQgIT09IFJlYWN0Q29tcG9uZW50KSB7XG4gICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMocmVhY3RDb21wb25lbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpIHtcbiAgaWYgKG1peGlucykge1xuICAgIG1peGlucy5mb3JFYWNoKChtaXhpbikgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBtaXhpbjtcblxuICAgICAgZWxlbWVudFtuYW1lXSA9IG1peGluLmJpbmQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgc3ViY2xhc3MgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICBzdWJjbGFzcyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCAhPT0gbnVsbCkge1xuICAgICAgc3ViY2xhc3MgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ViY2xhc3M7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlYWN0Q2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucykge1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyO1xuXG4gICAgaWYgKGdldEluaXRpYWxTdGF0ZSkgeyB0aGlzLmdldEluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZTsgfVxuICAgIGlmIChnZXRDaGlsZENvbnRleHQpIHsgdGhpcy5nZXRDaGlsZENvbnRleHQgPSBnZXRDaGlsZENvbnRleHQ7IH1cbiAgICBpZiAoY29tcG9uZW50RGlkTW91bnQpIHsgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50OyB9XG4gICAgaWYgKGNvbXBvbmVudFdpbGxVbm1vdW50KSB7IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSBjb21wb25lbnRXaWxsVW5tb3VudDsgfVxuXG4gICAgdGhpcy5taXhpbnMgPSBtaXhpbnM7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoZG9tRWxlbWVudCkge1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShvYmplY3QpIHtcbiAgICBjb25zdCB7IHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zIH0gPSBvYmplY3Q7XG5cbiAgICByZXR1cm4gbmV3IFJlYWN0Q2xhc3MocmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzcztcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RDb21wb25lbnQge1xuXG5cblxuXG5cblxuXG5cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIFxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoZG9tRWxlbWVudCkge1xuICAgXG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxuXG5cblxuXG5cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWaXJ0dWFsRE9NTm9kZSA9IHJlcXVpcmUoJy4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZScpO1xuXG5jbGFzcyBSZWFjdERPTSB7XG4gIHN0YXRpYyByZW5kZXIoZWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudCA9IFZpcnR1YWxET01Ob2RlLmZyb21ET01FbGVtZW50KHBhcmVudERPTUVsZW1lbnQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHt9O1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxuZnVuY3Rpb24gcmVtYWluaW5nKGVsZW1lbnQsIGFycmF5KSB7XG4gIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgY29uc3QgaW5kZXggPSBpbmRleE9mKGVsZW1lbnQsIGFycmF5KTtcblxuICByZXR1cm4gYXJyYXkuc2xpY2UoaW5kZXggKyAxKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZpcnN0LFxuICBmbGF0dGVuLFxuICBndWFyYW50ZWUsXG4gIHJlbWFpbmluZ1xufTtcblxuZnVuY3Rpb24gaW5kZXhPZihlbGVtZW50LCBhcnJheSkge1xuICBsZXQgaW5kZXggPSBudWxsO1xuXG4gIGFycmF5LnNvbWUoKGN1cnJlbnRFbGVtZW50LCBjdXJyZW50RWxlbWVudEluZGV4KSA9PiB7XG4gICAgaWYgKGN1cnJlbnRFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICBpbmRleCA9IGN1cnJlbnRFbGVtZW50SW5kZXg7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBpc1NWR1RhZ05hbWUodGFnTmFtZSkge1xuICByZXR1cm4gc3ZnVGFnTmFtZXMuaW5jbHVkZXModGFnTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGlzU1ZHQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBzdmdBdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKTtcbn1cblxuZnVuY3Rpb24gaXNIVE1MQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBodG1sQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1NWR1RhZ05hbWUsXG4gIGlzU1ZHQXR0cmlidXRlTmFtZSxcbiAgaXNIVE1MQXR0cmlidXRlTmFtZVxufTtcblxuY29uc3Qgc3ZnVGFnTmFtZXMgPSBbXG4gICAgICAgICdhbHRHbHlwaCcsICdhbmltYXRlJywgJ2FuaW1hdGVDb2xvcicsICdhbmltYXRlTW90aW9uJywgJ2FuaW1hdGVUcmFuc2Zvcm0nLCAnYW5pbWF0aW9uJywgJ2F1ZGlvJyxcbiAgICAgICAgJ2NpcmNsZScsICdjbGlwUGF0aCcsICdjb2xvci1wcm9maWxlJywgJ2N1cnNvcicsXG4gICAgICAgICdkZWZzJywgJ2Rlc2MnLCAnZGlzY2FyZCcsXG4gICAgICAgICdlbGxpcHNlJyxcbiAgICAgICAgJ2ZlQmxlbmQnLCAnZmVDb2xvck1hdHJpeCcsICdmZUNvbXBvbmVudFRyYW5zZmVyJywgJ2ZlQ29tcG9zaXRlJywgJ2ZlQ29udm9sdmVNYXRyaXgnLCAnZmVEaWZmdXNlTGlnaHRpbmcnLCAnZmVEaXNwbGFjZW1lbnRNYXAnLCAnZmVEaXN0YW50TGlnaHQnLCAnZmVEcm9wU2hhZG93JywgJ2ZlRmxvb2QnLCAnZmVGdW5jQScsICdmZUZ1bmNCJywgJ2ZlRnVuY0cnLCAnZmVGdW5jUicsICdmZUdhdXNzaWFuQmx1cicsICdmZUltYWdlJywgJ2ZlTWVyZ2UnLCAnZmVNZXJnZU5vZGUnLCAnZmVNb3JwaG9sb2d5JywgJ2ZlT2Zmc2V0JywgJ2ZlUG9pbnRMaWdodCcsICdmZVNwZWN1bGFyTGlnaHRpbmcnLCAnZmVTcG90TGlnaHQnLCAnZmVUaWxlJywgJ2ZlVHVyYnVsZW5jZScsICdmaWx0ZXInLCAnZm9udCcsICdmb250LWZhY2UnLCAnZm9udC1mYWNlLWZvcm1hdCcsICdmb250LWZhY2UtbmFtZScsICdmb250LWZhY2UtdXJpJywgJ2ZvcmVpZ25PYmplY3QnLFxuICAgICAgICAnZycsICdnbHlwaCcsICdnbHlwaFJlZicsXG4gICAgICAgICdoYW5kbGVyJywgJ2hhdGNoJywgJ2hhdGNocGF0aCcsICdoa2VybicsXG4gICAgICAgICdpbWFnZScsICdsaW5lJywgJ2xpbmVhckdyYWRpZW50JyxcbiAgICAgICAgJ2xpc3RlbmVyJyxcbiAgICAgICAgJ21hcmtlcicsICdtYXNrJywgJ21lc2gnLCAnbWVzaGdyYWRpZW50JywgJ21lc2hwYXRjaCcsICdtZXNocm93JywgJ21ldGFkYXRhJywgJ21pc3NpbmctZ2x5cGgnLCAnbXBhdGgnLFxuICAgICAgICAncGF0aCcsICdwYXR0ZXJuJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncHJlZmV0Y2gnLFxuICAgICAgICAncmFkaWFsR3JhZGllbnQnLCAncmVjdCcsXG4gICAgICAgICdzY3JpcHQnLCAnc2V0JywgJ3NvbGlkY29sb3InLCAnc3RvcCcsICdzdHlsZScsICdzdmcnLCAnc3dpdGNoJywgJ3N5bWJvbCcsXG4gICAgICAgICd0YnJlYWsnLCAndGV4dCcsICd0ZXh0QXJlYScsICd0ZXh0UGF0aCcsICd0aXRsZScsICd0cmVmJywgJ3RzcGFuJyxcbiAgICAgICAgJ3Vua25vd24nLCAndXNlJyxcbiAgICAgICAgJ3ZpZGVvJywgJ3ZpZXcnLCAndmtlcm4nXG4gICAgICBdLFxuICAgICAgc3ZnQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgICdhY2NlbnQtaGVpZ2h0JywgJ2FjY3VtdWxhdGUnLCAnYWRkaXRpdmUnLCAnYWxpZ25tZW50LWJhc2VsaW5lJywgJ2FscGhhYmV0aWMnLCAnYW1wbGl0dWRlJywgJ2FyYWJpYy1mb3JtJywgJ2FzY2VudCcsICdhdHRyaWJ1dGVOYW1lJywgJ2F0dHJpYnV0ZVR5cGUnLCAnYXppbXV0aCcsXG4gICAgICAgICdiYW5kd2lkdGgnLCAnYmFzZUZyZXF1ZW5jeScsICdiYXNlUHJvZmlsZScsICdiYXNlbGluZS1zaGlmdCcsICdiYm94JywgJ2JlZ2luJywgJ2JpYXMnLCAnYnknLFxuICAgICAgICAnY2FsY01vZGUnLCAnY2FwLWhlaWdodCcsICdjbGlwJywgJ2NsYXNzTmFtZScsICdjbGlwLXBhdGgnLCAnY2xpcC1ydWxlJywgJ2NsaXBQYXRoVW5pdHMnLCAnY29sb3InLCAnY29sb3ItaW50ZXJwb2xhdGlvbicsICdjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMnLCAnY29sb3ItcHJvZmlsZScsICdjb2xvci1yZW5kZXJpbmcnLCAnY29udGVudFNjcmlwdFR5cGUnLCAnY29udGVudFN0eWxlVHlwZScsICdjcm9zc29yaWdpbicsICdjdXJzb3InLCAnY3gnLCAnY3knLFxuICAgICAgICAnZCcsICdkZWZhdWx0QWN0aW9uJywgJ2Rlc2NlbnQnLCAnZGlmZnVzZUNvbnN0YW50JywgJ2RpcmVjdGlvbicsICdkaXNwbGF5JywgJ2Rpdmlzb3InLCAnZG9taW5hbnQtYmFzZWxpbmUnLCAnZG93bmxvYWQnLCAnZHVyJywgJ2R4JywgJ2R5JyxcbiAgICAgICAgJ2VkZ2VNb2RlJywgJ2VkaXRhYmxlJywgJ2VsZXZhdGlvbicsICdlbmFibGUtYmFja2dyb3VuZCcsICdlbmQnLCAnZXZlbnQnLCAnZXhwb25lbnQnLCAnZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZCcsXG4gICAgICAgICdmaWxsJywgJ2ZpbGwtb3BhY2l0eScsICdmaWxsLXJ1bGUnLCAnZmlsdGVyJywgJ2ZpbHRlclJlcycsICdmaWx0ZXJVbml0cycsICdmbG9vZC1jb2xvcicsICdmbG9vZC1vcGFjaXR5JywgJ2ZvY3VzSGlnaGxpZ2h0JywgJ2ZvY3VzYWJsZScsICdmb250LWZhbWlseScsICdmb250LXNpemUnLCAnZm9udC1zaXplLWFkanVzdCcsICdmb250LXN0cmV0Y2gnLCAnZm9udC1zdHlsZScsICdmb250LXZhcmlhbnQnLCAnZm9udC13ZWlnaHQnLCAnZm9ybWF0JywgJ2ZyJywgJ2Zyb20nLCAnZngnLCAnZnknLFxuICAgICAgICAnZzEnLCAnZzInLCAnZ2x5cGgtbmFtZScsICdnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsJywgJ2dseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsJywgJ2dseXBoUmVmJywgJ2dyYWRpZW50VHJhbnNmb3JtJywgJ2dyYWRpZW50VW5pdHMnLFxuICAgICAgICAnaGFuZGxlcicsICdoYW5naW5nJywgJ2hhdGNoQ29udGVudFVuaXRzJywgJ2hhdGNoVW5pdHMnLCAnaGVpZ2h0JywgJ2hvcml6LWFkdi14JywgJ2hvcml6LW9yaWdpbi14JywgJ2hvcml6LW9yaWdpbi15JywgJ2hyZWYnLCAnaHJlZmxhbmcnLFxuICAgICAgICAnaWRlb2dyYXBoaWMnLCAnaW1hZ2UtcmVuZGVyaW5nJywgJ2luJywgJ2luMicsICdpbml0aWFsVmlzaWJpbGl0eScsICdpbnRlcmNlcHQnLFxuICAgICAgICAnaycsICdrMScsICdrMicsICdrMycsICdrNCcsICdrZXJuZWxNYXRyaXgnLCAna2VybmVsVW5pdExlbmd0aCcsICdrZXJuaW5nJywgJ2tleVBvaW50cycsICdrZXlTcGxpbmVzJywgJ2tleVRpbWVzJyxcbiAgICAgICAgJ2xlbmd0aEFkanVzdCcsICdsZXR0ZXItc3BhY2luZycsICdsaWdodGluZy1jb2xvcicsICdsaW1pdGluZ0NvbmVBbmdsZScsICdsb2NhbCcsXG4gICAgICAgICdtYXJrZXItZW5kJywgJ21hcmtlci1taWQnLCAnbWFya2VyLXN0YXJ0JywgJ21hcmtlckhlaWdodCcsICdtYXJrZXJVbml0cycsICdtYXJrZXJXaWR0aCcsICdtYXNrJywgJ21hc2tDb250ZW50VW5pdHMnLCAnbWFza1VuaXRzJywgJ21hdGhlbWF0aWNhbCcsICdtYXgnLCAnbWVkaWEnLCAnbWVkaWFDaGFyYWN0ZXJFbmNvZGluZycsICdtZWRpYUNvbnRlbnRFbmNvZGluZ3MnLCAnbWVkaWFTaXplJywgJ21lZGlhVGltZScsICdtZXRob2QnLCAnbWluJywgJ21vZGUnLFxuICAgICAgICAnbmFtZScsICduYXYtZG93bicsICduYXYtZG93bi1sZWZ0JywgJ25hdi1kb3duLXJpZ2h0JywgJ25hdi1sZWZ0JywgJ25hdi1uZXh0JywgJ25hdi1wcmV2JywgJ25hdi1yaWdodCcsICduYXYtdXAnLCAnbmF2LXVwLWxlZnQnLCAnbmF2LXVwLXJpZ2h0JywgJ251bU9jdGF2ZXMnLFxuICAgICAgICAnb2JzZXJ2ZXInLCAnb2Zmc2V0JywgJ29wYWNpdHknLCAnb3BlcmF0b3InLCAnb3JkZXInLCAnb3JpZW50JywgJ29yaWVudGF0aW9uJywgJ29yaWdpbicsICdvdmVyZmxvdycsICdvdmVybGF5JywgJ292ZXJsaW5lLXBvc2l0aW9uJywgJ292ZXJsaW5lLXRoaWNrbmVzcycsXG4gICAgICAgICdwYW5vc2UtMScsICdwYXRoJywgJ3BhdGhMZW5ndGgnLCAncGF0dGVybkNvbnRlbnRVbml0cycsICdwYXR0ZXJuVHJhbnNmb3JtJywgJ3BhdHRlcm5Vbml0cycsICdwaGFzZScsICdwaXRjaCcsICdwbGF5YmFja09yZGVyJywgJ3BsYXliYWNrb3JkZXInLCAncG9pbnRlci1ldmVudHMnLCAncG9pbnRzJywgJ3BvaW50c0F0WCcsICdwb2ludHNBdFknLCAncG9pbnRzQXRaJywgJ3ByZXNlcnZlQWxwaGEnLCAncHJlc2VydmVBc3BlY3RSYXRpbycsICdwcmltaXRpdmVVbml0cycsICdwcm9wYWdhdGUnLFxuICAgICAgICAncicsICdyYWRpdXMnLCAncmVmWCcsICdyZWZZJywgJ3JlbmRlcmluZy1pbnRlbnQnLCAncmVwZWF0Q291bnQnLCAncmVwZWF0RHVyJywgJ3JlcXVpcmVkRXh0ZW5zaW9ucycsICdyZXF1aXJlZEZlYXR1cmVzJywgJ3JlcXVpcmVkRm9udHMnLCAncmVxdWlyZWRGb3JtYXRzJywgJ3Jlc3RhcnQnLCAncmVzdWx0JywgJ3JvdGF0ZScsICdyeCcsICdyeScsXG4gICAgICAgICdzY2FsZScsICdzZWVkJywgJ3NoYXBlLXJlbmRlcmluZycsICdzaWRlJywgJ3Nsb3BlJywgJ3NuYXBzaG90VGltZScsICdzcGFjaW5nJywgJ3NwZWN1bGFyQ29uc3RhbnQnLCAnc3BlY3VsYXJFeHBvbmVudCcsICdzcHJlYWRNZXRob2QnLCAnc3JjJywgJ3N0YXJ0T2Zmc2V0JywgJ3N0ZERldmlhdGlvbicsICdzdGVtaCcsICdzdGVtdicsICdzdGl0Y2hUaWxlcycsICdzdG9wLWNvbG9yJywgJ3N0b3Atb3BhY2l0eScsICdzdHJpa2V0aHJvdWdoLXBvc2l0aW9uJywgJ3N0cmlrZXRocm91Z2gtdGhpY2tuZXNzJywgJ3N0cmluZycsICdzdHJva2UnLCAnc3Ryb2tlLWRhc2hhcnJheScsICdzdHJva2UtZGFzaG9mZnNldCcsICdzdHJva2UtbGluZWNhcCcsICdzdHJva2UtbGluZWpvaW4nLCAnc3Ryb2tlLW1pdGVybGltaXQnLCAnc3Ryb2tlLW9wYWNpdHknLCAnc3Ryb2tlLXdpZHRoJywgJ3N0eWxlJywgJ3N1cmZhY2VTY2FsZScsICdzeW5jQmVoYXZpb3InLCAnc3luY0JlaGF2aW9yRGVmYXVsdCcsICdzeW5jTWFzdGVyJywgJ3N5bmNUb2xlcmFuY2UnLCAnc3luY1RvbGVyYW5jZURlZmF1bHQnLCAnc3lzdGVtTGFuZ3VhZ2UnLFxuICAgICAgICAndGFibGVWYWx1ZXMnLCAndGFyZ2V0JywgJ3RhcmdldFgnLCAndGFyZ2V0WScsICd0ZXh0LWFuY2hvcicsICd0ZXh0LWRlY29yYXRpb24nLCAndGV4dC1yZW5kZXJpbmcnLCAndGV4dExlbmd0aCcsICd0aW1lbGluZUJlZ2luJywgJ3RpbWVsaW5lYmVnaW4nLCAndGl0bGUnLCAndG8nLCAndHJhbnNmb3JtJywgJ3RyYW5zZm9ybUJlaGF2aW9yJywgJ3R5cGUnLFxuICAgICAgICAndTEnLCAndTInLCAndW5kZXJsaW5lLXBvc2l0aW9uJywgJ3VuZGVybGluZS10aGlja25lc3MnLCAndW5pY29kZScsICd1bmljb2RlLWJpZGknLCAndW5pY29kZS1yYW5nZScsICd1bml0cy1wZXItZW0nLFxuICAgICAgICAndi1hbHBoYWJldGljJywgJ3YtaGFuZ2luZycsICd2LWlkZW9ncmFwaGljJywgJ3YtbWF0aGVtYXRpY2FsJywgJ3ZhbHVlcycsICd2ZXJzaW9uJywgJ3ZlcnQtYWR2LXknLCAndmVydC1vcmlnaW4teCcsICd2ZXJ0LW9yaWdpbi15JywgJ3ZpZXdCb3gnLCAndmlld1RhcmdldCcsICd2aXNpYmlsaXR5JyxcbiAgICAgICAgJ3dpZHRoJywgJ3dpZHRocycsICd3b3JkLXNwYWNpbmcnLCAnd3JpdGluZy1tb2RlJyxcbiAgICAgICAgJ3gnLCAneC1oZWlnaHQnLCAneDEnLCAneDInLCAneENoYW5uZWxTZWxlY3RvcicsXG4gICAgICAgICd5JywgJ3kxJywgJ3kyJywgJ3lDaGFubmVsU2VsZWN0b3InLFxuICAgICAgICAneicsICd6b29tQW5kUGFuJ1xuICAgICAgXSxcbiAgICAgIGh0bWxBdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgICAgJ2FjY2VwdCcsICdhY2NlcHRDaGFyc2V0JywgJ2FjY2Vzc0tleScsICdhY3Rpb24nLCAnYWxsb3cnLCAnYWxsb3dGdWxsU2NyZWVuJywgJ2FsbG93VHJhbnNwYXJlbmN5JywgJ2FsdCcsICdhc3luYycsICdhdXRvQ29tcGxldGUnLCAnYXV0b0ZvY3VzJywgJ2F1dG9QbGF5JyxcbiAgICAgICAgJ2NhcHR1cmUnLCAnY2VsbFBhZGRpbmcnLCAnY2VsbFNwYWNpbmcnLCAnY2hhbGxlbmdlJywgJ2NoYXJTZXQnLCAnY2hlY2tlZCcsICdjaXRlJywgJ2NsYXNzSUQnLCAnY2xhc3NOYW1lJywgJ2NvbFNwYW4nLCAnY29scycsICdjb250ZW50JywgJ2NvbnRlbnRFZGl0YWJsZScsICdjb250ZXh0TWVudScsICdjb250cm9scycsICdjb29yZHMnLCAnY3Jvc3NPcmlnaW4nLFxuICAgICAgICAnZGF0YScsICdkYXRlVGltZScsICdkZWZhdWx0JywgJ2RlZmVyJywgJ2RpcicsICdkaXNhYmxlZCcsICdkb3dubG9hZCcsICdkcmFnZ2FibGUnLFxuICAgICAgICAnZW5jVHlwZScsXG4gICAgICAgICdmb3JtJywgJ2Zvcm1BY3Rpb24nLCAnZm9ybUVuY1R5cGUnLCAnZm9ybU1ldGhvZCcsICdmb3JtTm9WYWxpZGF0ZScsICdmb3JtVGFyZ2V0JywgJ2ZyYW1lQm9yZGVyJyxcbiAgICAgICAgJ2hlYWRlcnMnLCAnaGVpZ2h0JywgJ2hpZGRlbicsICdoaWdoJywgJ2hyZWYnLCAnaHJlZkxhbmcnLCAnaHRtbEZvcicsICdodHRwRXF1aXYnLFxuICAgICAgICAnaWNvbicsICdpZCcsICdpbnB1dE1vZGUnLCAnaW50ZWdyaXR5JywgJ2lzJyxcbiAgICAgICAgJ2tleVBhcmFtcycsICdrZXlUeXBlJywgJ2tpbmQnLFxuICAgICAgICAnbGFiZWwnLCAnbGFuZycsICdsaXN0JywgJ2xvb3AnLCAnbG93JyxcbiAgICAgICAgJ21hbmlmZXN0JywgJ21hcmdpbkhlaWdodCcsICdtYXJnaW5XaWR0aCcsICdtYXgnLCAnbWF4TGVuZ3RoJywgJ21lZGlhJywgJ21lZGlhR3JvdXAnLCAnbWV0aG9kJywgJ21pbicsICdtaW5MZW5ndGgnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLFxuICAgICAgICAnbmFtZScsICdub1ZhbGlkYXRlJywgJ25vbmNlJyxcbiAgICAgICAgJ29wZW4nLCAnb3B0aW11bScsXG4gICAgICAgICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3Bvc3RlcicsICdwcmVsb2FkJywgJ3Byb2ZpbGUnLFxuICAgICAgICAncmFkaW9Hcm91cCcsICdyZWFkT25seScsICdyZWwnLCAncmVxdWlyZWQnLCAncmV2ZXJzZWQnLCAncm9sZScsICdyb3dTcGFuJywgJ3Jvd3MnLFxuICAgICAgICAnc2FuZGJveCcsICdzY29wZScsICdzY29wZWQnLCAnc2Nyb2xsaW5nJywgJ3NlYW1sZXNzJywgJ3NlbGVjdGVkJywgJ3NoYXBlJywgJ3NpemUnLCAnc2l6ZXMnLCAnc3BhbicsICdzcGVsbENoZWNrJywgJ3NyYycsICdzcmNEb2MnLCAnc3JjTGFuZycsICdzcmNTZXQnLCAnc3RhcnQnLCAnc3RlcCcsICdzdHlsZScsICdzdW1tYXJ5JyxcbiAgICAgICAgJ3RhYkluZGV4JywgJ3RhcmdldCcsICd0aXRsZScsICd0eXBlJyxcbiAgICAgICAgJ3VzZU1hcCcsXG4gICAgICAgICd2YWx1ZScsXG4gICAgICAgICd3aWR0aCcsXG4gICAgICAgICd3bW9kZScsXG4gICAgICAgICd3cmFwJ1xuICAgICAgXTtcbiJdfQ==
