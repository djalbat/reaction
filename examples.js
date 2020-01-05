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
          children = guarantee(this.render());

      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent, children);

      children.forEach(function (child) {
        var childParent = _this2,
            childReference = reference;

        child.mount(childParent, childReference, childContext);
      });

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
    value: function componentDidMount() {}
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvZWxlbWVudC5qcyIsImVzNi9lbGVtZW50L3JlYWN0LmpzIiwiZXM2L2VsZW1lbnQvcmVhY3QvY2xhc3MuanMiLCJlczYvZWxlbWVudC9yZWFjdC9jb21wb25lbnQuanMiLCJlczYvZWxlbWVudC9yZWFjdC9mdW5jdGlvbi5qcyIsImVzNi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlLmpzIiwiZXM2L2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC5qcyIsImVzNi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQvaHRtbC5qcyIsImVzNi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQvc3ZnLmpzIiwiZXM2L2VsZW1lbnQvdmlydHVhbERPTU5vZGUvdGV4dEVsZW1lbnQuanMiLCJlczYvZXhhbXBsZXMuanMiLCJlczYvZXhhbXBsZXMvcmVkdXguanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAuanMiLCJlczYvZXhhbXBsZXMvdmFuaWxsYUFwcC5qcyIsImVzNi9taXhpbnMvcmVhY3RFbGVtZW50LmpzIiwiZXM2L21peGlucy92aXJ0dWFsRE9NRWxlbWVudC5qcyIsImVzNi9yZWFjdC5qcyIsImVzNi9yZWFjdENsYXNzLmpzIiwiZXM2L3JlYWN0Q29tcG9uZW50LmpzIiwiZXM2L3JlYWN0RE9NLmpzIiwiZXM2L3V0aWxpdGllcy9hcnJheS5qcyIsImVzNi91dGlsaXRpZXMvbmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7QUFFQSxJQUFNLGlCQUFpQixRQUFRLG1CQUFSLENBQXZCOztJQUVRLEssR0FBVSxjLENBQVYsSzs7SUFFRixPO0FBQ0osbUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLLEtBQUwsR0FBYSxLQUFiOztBQUVBLFNBQUssTUFBTCxHQUFjLElBQWQ7O0FBRUEsU0FBSyxRQUFMLEdBQWdCLE1BQU0s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QVROLEVBU2MsS0FUZCxFQVVuQixVQVZtQixFQVVQLGNBVk8sRUFVUyxhQVZULEVBVXdCLEtBVnhCLEVBVStCLFdBVi9CLEVBVTRDLE9BVjVDLEVBVXFELFlBVnJELEVBVW1FLFFBVm5FLEVBVTZFLEtBVjdFLEVBVW9GLFdBVnBGLEVBVWlHLFVBVmpHLEVBVTZHLE9BVjdHLEVBV25CLE1BWG1CLEVBV1gsWUFYVyxFQVdHLE9BWEgsRUFZbkIsTUFabUIsRUFZWCxTQVpXLEVBYW5CLFNBYm1CLEVBYVIsYUFiUSxFQWFPLFFBYlAsRUFhaUIsU0FiakIsRUFhNEIsU0FiNUIsRUFjbkIsWUFkbUIsRUFjTCxVQWRLLEVBY08sS0FkUCxFQWNjLFVBZGQsRUFjMEIsVUFkMUIsRUFjc0MsTUFkdEMsRUFjOEMsU0FkOUMsRUFjeUQsTUFkekQsRUFlbkIsU0FmbUIsRUFlUixPQWZRLEVBZUMsUUFmRCxFQWVXLFdBZlgsRUFld0IsVUFmeEIsRUFlb0MsVUFmcEMsRUFlZ0QsT0FmaEQsRUFleUQsTUFmekQsRUFlaUUsT0FmakUsRUFlMEUsTUFmMUUsRUFla0YsWUFmbEYsRUFlZ0csS0FmaEcsRUFldUcsUUFmdkcsRUFlaUgsU0FmakgsRUFlNEgsUUFmNUgsRUFlc0ksT0FmdEksRUFlK0ksTUFmL0ksRUFldUosT0FmdkosRUFlZ0ssU0FmaEssRUFnQm5CLFVBaEJtQixFQWdCUCxRQWhCTyxFQWdCRyxPQWhCSCxFQWdCWSxNQWhCWixFQWlCbkIsUUFqQm1CLEVBa0JuQixPQWxCbUIsRUFtQm5CLE9BbkJtQixFQW9CbkIsT0FwQm1CLEVBcUJuQixNQXJCbUIsQ0E1QzNCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47ICAvLy9cbiAgfVxuXG4gIGdldFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIGdldEZpcnN0Q2hpbGQoKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IG51bGw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHJlYWN0RWxlbWVudE1peGlucyA9IHJlcXVpcmUoJy4uL21peGlucy9yZWFjdEVsZW1lbnQnKTtcblxuY29uc3QgeyBndWFyYW50ZWUsIHJlbWFpbmluZyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJlYWN0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLnN0YXRlID0gdW5kZWZpbmVkOyAvLy9cblxuICAgIHRoaXMuY29udGV4dCA9IHVuZGVmaW5lZDsgLy8vXG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZHJlbiA9IGd1YXJhbnRlZSh0aGlzLnJlbmRlcigpKTtcblxuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgY2hpbGRyZW4pO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuXG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHJlbW91bnQodXBkYXRlKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCkpO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGd1YXJhbnRlZSh0aGlzLnJlbmRlcih1cGRhdGUpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KSk7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTsgIC8vL1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKG5ld1N0YXRlKSB7XG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLnN0YXRlOyAgLy8vXG5cbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbihvbGRTdGF0ZSwgbmV3U3RhdGUpO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICBmb3JjZVVwZGF0ZSh1cGRhdGUpIHtcbiAgICB0aGlzLnJlbW91bnQodXBkYXRlKTtcbiAgfVxuXG4gIGdldENoaWxkUmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50KCksXG4gICAgICAgICAgY2hpbGQgPSB0aGlzOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZWFjdEVsZW1lbnQucHJvdG90eXBlLCByZWFjdEVsZW1lbnRNaXhpbnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCksXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAoKHJlZmVyZW5jZSA9PT0gbnVsbCkgJiYgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpKSB7XG4gICAgY2hpbGQgPSBwYXJlbnQ7IC8vL1xuXG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gcmVtYWluaW5nKGNoaWxkLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIHJlbWFpbmluZ0NoaWxkcmVuLnJlZHVjZSgocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkgPT4ge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCA9IHJlbWFpbmluZ0NoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgaWYgKHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSByZW1haW5pbmdDaGlsZDsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG5cbiAgICAgICAgcGFyZW50ID0gcmVtYWluaW5nQ2hpbGQ7ICAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIG51bGwpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuLi9yZWFjdCcpO1xuXG5jbGFzcyBSZWFjdENsYXNzRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENsYXNzID0gcmVhY3RDbGFzcztcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmNhbGwodGhpcywgdXBkYXRlKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldEluaXRpYWxTdGF0ZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldENoaWxkQ29udGV4dC5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50RGlkTW91bnQuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnRXaWxsVW5tb3VudC5jYWxsKHRoaXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4uL3JlYWN0Jyk7XG5cbmNsYXNzIFJlYWN0Q29tcG9uZW50RWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q29tcG9uZW50LCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RDb21wb25lbnQgPSByZWFjdENvbXBvbmVudDtcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LnJlbmRlci5jYWxsKHRoaXMsIHVwZGF0ZSk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQuZ2V0SW5pdGlhbFN0YXRlLmNhbGwodGhpcyk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LmdldENoaWxkQ29udGV4dC5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnREaWRNb3VudC5jYWxsKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnRXaWxsVW5tb3VudC5jYWxsKHRoaXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDb21wb25lbnRFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuLi9yZWFjdCcpO1xuXG5jbGFzcyBSZWFjdEZ1bmN0aW9uRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0RnVuY3Rpb24sIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdEZ1bmN0aW9uID0gcmVhY3RGdW5jdGlvbjtcblxuXG5cblxuICB9XG4gXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdEZ1bmN0aW9uKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdGhpcyk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgLy8vXG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8vXG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEZ1bmN0aW9uRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgVmlydHVhbERPTU5vZGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBwYXJlbnRET01FbGVtZW50KHBhcmVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpKTtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aXJ0dWFsRE9NTm9kZSA9IG5ldyBWaXJ0dWFsRE9NTm9kZShwcm9wcywgZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gdmlydHVhbERPTU5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsRE9NTm9kZTtcblxuZnVuY3Rpb24gcGFyZW50RE9NRWxlbWVudChwYXJlbnQpIHtcbiAgbGV0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RE9NRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpIHtcbiAgY29uc3QgcmVmZXJlbmNlRE9NRWxlbWVudCA9IChyZWZlcmVuY2UgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlLmdldERPTUVsZW1lbnQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcmVmZXJlbmNlRE9NRWxlbWVudDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVmlydHVhbERPTU5vZGUgPSByZXF1aXJlKCcuLi92aXJ0dWFsRE9NTm9kZScpLFxuICAgICAgdmlydHVhbERPTUVsZW1lbnRNaXhpbnMgPSByZXF1aXJlKCcuLi8uLi9taXhpbnMvdmlydHVhbERPTUVsZW1lbnQnKTtcblxuY2xhc3MgVmlydHVhbERPTUVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NTm9kZSB7XG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KSk7XG5cbiAgICB0aGlzLmFwcGx5UHJvcHMoKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGFwcGx5UHJvcHMoKSB7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcblxuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wc1tuYW1lXTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0hhbmRsZXJOYW1lKG5hbWUpKSB7XG4gICAgICAgIHRoaXMuc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBdHRyaWJ1dGVOYW1lKG5hbWUpKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3JlZicpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB2YWx1ZTsgLy8vXG4gICAgICAgIFxuICAgICAgICBjYWxsYmFjayh0aGlzLmRvbUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAgaGFuZGxlcik7XG4gIH1cblxuXHRpc0hhbmRsZXJOYW1lKG5hbWUpIHtcblx0XHRyZXR1cm4gbmFtZS5tYXRjaCgvXm9uLyk7XG5cdH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaXJ0dWFsRE9NRWxlbWVudC5wcm90b3R5cGUsIHZpcnR1YWxET01FbGVtZW50TWl4aW5zKTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsRE9NRWxlbWVudDtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL25hbWUnKSxcbiAgICAgIFZpcnR1YWxET01FbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jb25zdCB7IGlzSFRNTEF0dHJpYnV0ZU5hbWUgfSA9IG5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIFZpcnR1YWxET01IVE1MRWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01FbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGFnTmFtZSwgcHJvcHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGlzSFRNTEF0dHJpYnV0ZU5hbWUobmFtZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsRE9NSFRNTEVsZW1lbnQ7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9uYW1lJyksXG4gICAgICBWaXJ0dWFsRE9NRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY29uc3QgeyBpc1NWR0F0dHJpYnV0ZU5hbWUgfSA9IG5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIFZpcnR1YWxET01TVkdFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgdGFnTmFtZSk7XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBpc0F0dHJpYnV0ZU5hbWUobmFtZSkge1xuICAgIHJldHVybiBpc1NWR0F0dHJpYnV0ZU5hbWUobmFtZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsRE9NU1ZHRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVmlydHVhbERPTU5vZGUgPSByZXF1aXJlKCcuLi92aXJ0dWFsRE9NTm9kZScpO1xuXG5jbGFzcyBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuICB9XG4gIFxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxET01UZXh0RWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHZhbmlsbGFBcHA6IHJlcXVpcmUoJy4vZXhhbXBsZXMvdmFuaWxsYUFwcCcpLFxuICByZWR1eEFwcDogcmVxdWlyZSgnLi9leGFtcGxlcy9yZWR1eEFwcCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjcmVhdGVTdG9yZSA9IChyZWR1Y2VyKSA9PiB7XG4gIGxldCBzdGF0ZSxcbiAgICAgIGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXRjaCA9IChhY3Rpb24pID0+IHtcbiAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKCkpO1xuICB9O1xuXG4gIGNvbnN0IHN1YnNjcmliZSA9IChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKCkgPT4ge1xuICAgICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKGwpID0+IHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcikgPT4ge1xuICAgICAgcmV0dXJuIChsaXN0ZW5lciAhPT0gbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZGlzcGF0Y2goe30pO1xuXG4gIHJldHVybiB7IGdldFN0YXRlLCBkaXNwYXRjaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSB9O1xufTtcblxuY29uc3QgY29tYmluZVJlZHVjZXJzID0gKHJlZHVjZXJzKSA9PiB7XG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKSxcbiAgICAgICAgICBuZXh0U3RhdGUgPSBrZXlzLnJlZHVjZSgobmV4dFN0YXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuXG4gICAgICAgICAgICBuZXh0U3RhdGVba2V5XSA9IHJlZHVjZXIoc3RhdGVba2V5XSwgYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9O1xufTtcblxuY29uc3QgUmVkdXggPSB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWR1eDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVkdXggPSByZXF1aXJlKCcuL3JlZHV4JyksXG4gICAgICBSZWFjdCA9IHJlcXVpcmUoJy4uL3JlYWN0JyksXG4gICAgICBSZWFjdERPTSA9IHJlcXVpcmUoJy4uL3JlYWN0RE9NJyk7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdCxcbiAgICAgIHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG5cbmNvbnN0IHRvZG8gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQUREX1RPRE8nIDoge1xuICAgICAgY29uc3QgeyBpZCwgdGV4dCB9ID0gYWN0aW9uLFxuICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHRleHQsXG4gICAgICAgIGNvbXBsZXRlZFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlICdUT0dHTEVfVE9ETycgOiB7XG4gICAgICBpZiAoc3RhdGUuaWQgIT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9ICFzdGF0ZS5jb21wbGV0ZWQ7IC8vL1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgY29tcGxldGVkXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCB0b2RvcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9UT0RPJyA6XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9kbyh1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgIF07XG5cbiAgICBjYXNlICdUT0dHTEVfVE9ETycgOlxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCh0ID0+IHRvZG8odCwgYWN0aW9uKSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKCBzdGF0ZSA9ICdTSE9XX0FMTCcsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyA6XG4gICAgICByZXR1cm4gYWN0aW9uLmZpbHRlcjtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IHRvZG9BcHAgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB0b2RvcyxcbiAgdmlzaWJpbGl0eUZpbHRlclxufSk7XG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgZmlsdGVyKSA9PiB7XG4gIHN3aXRjaCAoZmlsdGVyKSB7XG4gICAgY2FzZSAnU0hPV19BTEwnIDpcbiAgICAgIHJldHVybiB0b2RvcztcblxuICAgIGNhc2UgJ1NIT1dfQ09NUExFVEVEJyA6XG4gICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICB0ID0+IHQuY29tcGxldGVkXG4gICAgICApO1xuXG4gICAgY2FzZSAnU0hPV19BQ1RJVkUnIDpcbiAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgIHQgPT4gIXQuY29tcGxldGVkXG4gICAgICApO1xuICB9XG59O1xuXG5jb25zdCBUb2RvID0gKHtvbkNsaWNrLCBjb21wbGV0ZWQsIHRleHR9KSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8bGkgb25DbGljaz17b25DbGlja31cbiAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjpjb21wbGV0ZWQgP1xuICAgICAgICAgICAgJ2xpbmUtdGhyb3VnaCcgOlxuICAgICAgICAgICAgJ25vbmUnfX1cbiAgICA+XG4gICAgICB7dGV4dH1cbiAgICA8L2xpPlxuXG4gICk7XG59O1xuXG5jb25zdCBUb2RvTGlzdCA9ICh7dG9kb3MsIG9uVG9kb0NsaWNrfSkgPT4gIHtcbiAgcmV0dXJuIChcblxuICAgIDx1bD5cbiAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiA8VG9kbyB0ZXh0PXt0b2RvLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXt0b2RvLmNvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2sodG9kby5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAvPil9XG4gICAgPC91bD5cblxuICApO1xufTtcblxuY29uc3QgTGluayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGFjdGl2ZSwgb25DbGljayB9ID0gcHJvcHM7XG5cbiAgaWYgKGFjdGl2ZSkge1xuICAgIHJldHVybiA8c3Bhbj57cHJvcHMuY2hpbGRyZW59PC9zcGFuPjtcbiAgfVxuXG4gIHJldHVybiAoXG5cbiAgICA8YSBocmVmPScjJ1xuICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgb25DbGljaygpO1xuICAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvYT5cblxuICApO1xufTtcblxuY29uc3QgRmlsdGVyTGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxMaW5rIGFjdGl2ZT17XG4gICAgICAgIHRoaXMucHJvcHMuZmlsdGVyID09PSBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyXG4gICAgICB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcbiAgICAgICAgICAgICAgICB7IGZpbHRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvTGluaz5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5sZXQgbmV4dFRvZG9JZCA9IDA7XG5jb25zdCBBZGRUb2RvID0gKHByb3BzLCB7c3RvcmV9KSA9PiB7XG4gIGxldCBpbnB1dDtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCByZWY9e2RvbUVsZW1lbnQgPT4ge1xuICAgICAgICBpbnB1dCA9IGRvbUVsZW1lbnQ7XG4gICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlID0gJ0FERF9UT0RPJyxcbiAgICAgICAgICB7IHZhbHVlIH0gPSBpbnB1dCxcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUsIC8vL1xuICAgICAgICAgIGlkID0gbmV4dFRvZG9JZCsrO1xuXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgaWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFkZCB0b2RvXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuY2xhc3MgVmlzaWJsZVRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8VG9kb0xpc3QgdG9kb3M9e1xuICAgICAgICBnZXRWaXNpYmxlVG9kb3MoXG4gICAgICAgICAgc3RhdGUudG9kb3MsXG4gICAgICAgICAgc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICApXG4gICAgICB9XG4gICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2s9eyhpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9ICdUT0dHTEVfVE9ETyc7XG5cbiAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8cD5cbiAgICAgIHsnU2hvdzogJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BTEwnPlxuICAgICAgICBBbGxcbiAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19DT01QTEVURUQnPlxuICAgICAgICBDb21wbGV0ZWRcbiAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BQ1RJVkUnPlxuICAgICAgICBBY3RpdmVcbiAgICAgIDwvRmlsdGVyTGluaz5cbiAgICA8L3A+XG5cbiAgKTtcbn07XG5cbmNvbnN0IFRvZG9BcHAgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgPEFkZFRvZG8gLz5cbiAgICAgIDxWaXNpYmxlVG9kb0xpc3QgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmVcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG59XG5cbmNvbnN0IHJlZHV4QXBwID0gKCkgPT4ge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHRvZG9BcHApLFxuICAgICAgICByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFRvZG9BcHAgLz5cbiAgICAgIDwvUHJvdmlkZXI+XG5cbiAgICAsXG4gICAgcm9vdERPTUVsZW1lbnRcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdXhBcHA7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgnLi4vcmVhY3QnKSxcbiAgICAgIFJlYWN0RE9NID0gcmVxdWlyZSgnLi4vcmVhY3RET00nKTtcblxuY29uc3QgQ29tbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAge3RoaXMucHJvcHMubWVzc2FnZX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgY29uc29sZS5sb2coJ0NvbW1lbnQgbW91bnRlZCB3aXRoIG1lc3NhZ2U6ICcgKyBtZXNzYWdlKVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgY29uc29sZS5sb2coJ0NvbW1lbnQgdW5tb3VudGVkIHdpdGggbWVzc2FnZTogJyArIG1lc3NhZ2UpXG4gIH1cbn0pO1xuXG5jb25zdCBDb21tZW50c0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgICdIZWxsbywgd29ybGQhJyxcbiAgICAgICAgICAgICdIZWxsbyB3b3JsZCBhZ2Fpbi4uLidcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnQ29tbWVudHMgbGlzdCBtb3VudGVkLicpXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IG1lc3NhZ2VzIH0gPSBzdGF0ZSxcbiAgICAgICAgICBjb21tZW50cyA9IG1lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT5cblxuICAgICAgICAgICAgPENvbW1lbnQgbWVzc2FnZT17bWVzc2FnZX0gLz5cblxuICAgICAgICAgICk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzLWxpc3RcIj5cbiAgICAgICAge2NvbW1lbnRzfVxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59KTtcblxuY29uc3QgdmFuaWxsYUFwcCA9ICgpID0+IHtcbiAgY29uc3QgY29tbWVudHNMaXN0ID1cblxuICAgICAgICAgIDxDb21tZW50c0xpc3QgLz5cblxuICAgICAgICAsXG4gICAgICAgIHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICBjb21tZW50c0xpc3QsXG4gICAgcm9vdERPTUVsZW1lbnRcbiAgKTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgJ0hlbGxvIHdvcmxkIHlldCBhZ2FpbiEhISdcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXNcbiAgICAgICAgICB9O1xuXG4gICAgY29tbWVudHNMaXN0LnNldFN0YXRlKHN0YXRlKTtcbiAgfSwgMTAwMCk7IC8vL1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB2YW5pbGxhQXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuY2xlYXJBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyBcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQucmVtb3ZlQXR0cmlidXRlKG5hbWUpXG59XG5cbmZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5oYXNBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldENsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5zZXRDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC50b2dnbGVDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmhhc0NsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzZXMoY2xhc3NOYW1lcykge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQ2xhc3NlcyhjbGFzc05hbWVzKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDbGFzc2VzKCkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5jbGVhckNsYXNzZXMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFnTmFtZSgpIHtcbiAgcmV0dXJuIG51bGw7ICAvLy9cbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuc2V0U3R5bGUobmFtZSwgdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0QXR0cmlidXRlLFxuICBnZXRBdHRyaWJ1dGUsXG4gIGNsZWFyQXR0cmlidXRlLFxuICBhZGRBdHRyaWJ1dGUsXG4gIHJlbW92ZUF0dHJpYnV0ZSxcbiAgaGFzQXR0cmlidXRlLFxuICBzZXRDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzcyxcbiAgaGFzQ2xhc3MsXG4gIGhhc0NsYXNzZXMsXG4gIGNsZWFyQ2xhc3NlcyxcbiAgZ2V0VGFnTmFtZSxcbiAgc2V0U3R5bGVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICBuYW1lID0gJ2NsYXNzJztcbiAgfVxuXG4gIGlmIChuYW1lID09PSAnaHRtbEZvcicpIHtcbiAgICBuYW1lID0gJ2Zvcic7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdGhpcy5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzc2VzKGNsYXNzTmFtZXMpIHsgcmV0dXJuIGNsYXNzTmFtZXMuZXZlcnkoKGNsYXNzTmFtZSkgPT4gdGhpcy5oYXNDbGFzcyhjbGFzc05hbWUpKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJzsgfVxuXG5mdW5jdGlvbiBnZXRUYWdOYW1lKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnRhZ05hbWU7IH1cblxuZnVuY3Rpb24gc2V0U3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZSxcbiAgY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlLFxuICBoYXNBdHRyaWJ1dGUsXG4gIHNldENsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzcyxcbiAgaGFzQ2xhc3NlcyxcbiAgY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lLFxuICBzZXRTdHlsZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgUmVhY3RDbGFzcyA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzcycpLFxuICAgICAgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL25hbWUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIFJlYWN0Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudCcpLFxuICAgICAgUmVhY3RDbGFzc0VsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvcmVhY3QvY2xhc3MnKSxcbiAgICAgIFJlYWN0RnVuY3Rpb25FbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L3JlYWN0L2Z1bmN0aW9uJyksXG4gICAgICBSZWFjdENvbXBvbmVudEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvcmVhY3QvY29tcG9uZW50JyksXG4gICAgICBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvdGV4dEVsZW1lbnQnKSxcbiAgICAgIFZpcnR1YWxET01IVE1MRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZS9lbGVtZW50L2h0bWwnKSxcbiAgICAgIFZpcnR1YWxET01TVkdFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQvc3ZnJyk7XG5cbmNvbnN0IHsgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGlzU1ZHVGFnTmFtZSB9ID0gbmFtZVV0aWxpdGllcztcblxuZnVuY3Rpb24gY3JlYXRlQ2xhc3Mob2JqZWN0KSB7XG4gIHJldHVybiBSZWFjdENsYXNzLmNyZWF0ZShvYmplY3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkQXJndW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyksXG4gICAgICAgICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHZpcnR1YWxET01FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmlydHVhbERPTVNWR0VsZW1lbnQodGFnTmFtZSwgcHJvcHMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWaXJ0dWFsRE9NSFRNTEVsZW1lbnQodGFnTmFtZSwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gdmlydHVhbERPTUVsZW1lbnQgLy8vXG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgY29uc3QgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgcmVhY3RDbGFzc0VsZW1lbnQgPSBuZXcgUmVhY3RDbGFzc0VsZW1lbnQocmVhY3RDbGFzcywgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDbGFzc0VsZW1lbnQ7ICAvLy9cblxuICAgICAgY29uc3QgeyBtaXhpbnMgfSA9IHJlYWN0Q2xhc3M7XG5cbiAgICAgIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIFJlYWN0Q29tcG9uZW50KSkge1xuICAgICAgY29uc3QgUmVhY3RDb21wb25lbnQgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyBSZWFjdENvbXBvbmVudCgpLFxuICAgICAgICAgICAgcmVhY3RDb21wb25lbnRFbGVtZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50RWxlbWVudChyZWFjdENvbXBvbmVudCwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDb21wb25lbnRFbGVtZW50OyAgLy8vXG5cbiAgICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50LCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByZWFjdEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RGdW5jdGlvbkVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RGdW5jdGlvbkVsZW1lbnQ7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBDb21wb25lbnQgPSBSZWFjdENvbXBvbmVudCwgLy8vXG4gICAgICBSZWFjdCA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBjcmVhdGVDbGFzcyxcbiAgICAgICAgY3JlYXRlRWxlbWVudFxuICAgICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRyZW5Gcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpIHtcbiAgY2hpbGRBcmd1bWVudHMgPSBmbGF0dGVuKGNoaWxkQXJndW1lbnRzKTsgLy8vXG5cbiAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZEFyZ3VtZW50cy5tYXAoKGNoaWxkQXJndW1lbnQpID0+IHtcbiAgICBsZXQgY2hpbGQ7XG5cbiAgICBpZiAoaXNTdWJjbGFzc09mKGNoaWxkQXJndW1lbnQuY29uc3RydWN0b3IsIEVsZW1lbnQpKSB7IC8vL1xuICAgICAgY2hpbGQgPSBjaGlsZEFyZ3VtZW50OyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBjaGlsZEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHZpcnR1YWxET01UZXh0RWxlbWVudCA9IG5ldyBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkID0gdmlydHVhbERPTVRleHRFbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhyZWFjdENvbXBvbmVudCwgZWxlbWVudCkge1xuICBjb25zdCB7IG1peGlucyB9ID0gcmVhY3RDb21wb25lbnQ7XG5cbiAgcmVhY3RDb21wb25lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocmVhY3RDb21wb25lbnQpOyAvLy9cblxuICBpZiAocmVhY3RDb21wb25lbnQgIT09IFJlYWN0Q29tcG9uZW50KSB7XG4gICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMocmVhY3RDb21wb25lbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpIHtcbiAgaWYgKG1peGlucykge1xuICAgIG1peGlucy5mb3JFYWNoKChtaXhpbikgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBtaXhpbjtcblxuICAgICAgZWxlbWVudFtuYW1lXSA9IG1peGluLmJpbmQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgc3ViY2xhc3MgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICBzdWJjbGFzcyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCAhPT0gbnVsbCkge1xuICAgICAgc3ViY2xhc3MgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ViY2xhc3M7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlYWN0Q2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucykge1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyO1xuXG4gICAgaWYgKGdldEluaXRpYWxTdGF0ZSkgeyB0aGlzLmdldEluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZTsgfVxuICAgIGlmIChnZXRDaGlsZENvbnRleHQpIHsgdGhpcy5nZXRDaGlsZENvbnRleHQgPSBnZXRDaGlsZENvbnRleHQ7IH1cbiAgICBpZiAoY29tcG9uZW50RGlkTW91bnQpIHsgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50OyB9XG4gICAgaWYgKGNvbXBvbmVudFdpbGxVbm1vdW50KSB7IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSBjb21wb25lbnRXaWxsVW5tb3VudDsgfVxuXG4gICAgdGhpcy5taXhpbnMgPSBtaXhpbnM7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKG9iamVjdCkge1xuICAgIGNvbnN0IHsgcmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMgfSA9IG9iamVjdDtcblxuICAgIHJldHVybiBuZXcgUmVhY3RDbGFzcyhyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWFjdENvbXBvbmVudCB7XG5cblxuXG5cblxuXG5cblxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgIFxuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cblxuXG5cblxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVmlydHVhbERPTU5vZGUgPSByZXF1aXJlKCcuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUnKTtcblxuY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBWaXJ0dWFsRE9NTm9kZS5mcm9tRE9NRWxlbWVudChwYXJlbnRET01FbGVtZW50KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSB7fTtcblxuICAgIGVsZW1lbnQubW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5mdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGFycmF5LCBlbGVtZW50KSA9PiB7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoZWxlbWVudCk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbmZ1bmN0aW9uIHJlbWFpbmluZyhlbGVtZW50LCBhcnJheSkge1xuICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIGNvbnN0IGluZGV4ID0gaW5kZXhPZihlbGVtZW50LCBhcnJheSk7XG5cbiAgcmV0dXJuIGFycmF5LnNsaWNlKGluZGV4ICsgMSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmaXJzdCxcbiAgZmxhdHRlbixcbiAgZ3VhcmFudGVlLFxuICByZW1haW5pbmdcbn07XG5cbmZ1bmN0aW9uIGluZGV4T2YoZWxlbWVudCwgYXJyYXkpIHtcbiAgbGV0IGluZGV4ID0gbnVsbDtcblxuICBhcnJheS5zb21lKChjdXJyZW50RWxlbWVudCwgY3VycmVudEVsZW1lbnRJbmRleCkgPT4ge1xuICAgIGlmIChjdXJyZW50RWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgaW5kZXggPSBjdXJyZW50RWxlbWVudEluZGV4O1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpbmRleDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gaXNTVkdUYWdOYW1lKHRhZ05hbWUpIHtcbiAgcmV0dXJuIHN2Z1RhZ05hbWVzLmluY2x1ZGVzKHRhZ05hbWUpO1xufVxuXG5mdW5jdGlvbiBpc1NWR0F0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICByZXR1cm4gc3ZnQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEF0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICByZXR1cm4gaHRtbEF0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNTVkdUYWdOYW1lLFxuICBpc1NWR0F0dHJpYnV0ZU5hbWUsXG4gIGlzSFRNTEF0dHJpYnV0ZU5hbWVcbn07XG5cbmNvbnN0IHN2Z1RhZ05hbWVzID0gW1xuICAgICAgICAnYWx0R2x5cGgnLCAnYW5pbWF0ZScsICdhbmltYXRlQ29sb3InLCAnYW5pbWF0ZU1vdGlvbicsICdhbmltYXRlVHJhbnNmb3JtJywgJ2FuaW1hdGlvbicsICdhdWRpbycsXG4gICAgICAgICdjaXJjbGUnLCAnY2xpcFBhdGgnLCAnY29sb3ItcHJvZmlsZScsICdjdXJzb3InLFxuICAgICAgICAnZGVmcycsICdkZXNjJywgJ2Rpc2NhcmQnLFxuICAgICAgICAnZWxsaXBzZScsXG4gICAgICAgICdmZUJsZW5kJywgJ2ZlQ29sb3JNYXRyaXgnLCAnZmVDb21wb25lbnRUcmFuc2ZlcicsICdmZUNvbXBvc2l0ZScsICdmZUNvbnZvbHZlTWF0cml4JywgJ2ZlRGlmZnVzZUxpZ2h0aW5nJywgJ2ZlRGlzcGxhY2VtZW50TWFwJywgJ2ZlRGlzdGFudExpZ2h0JywgJ2ZlRHJvcFNoYWRvdycsICdmZUZsb29kJywgJ2ZlRnVuY0EnLCAnZmVGdW5jQicsICdmZUZ1bmNHJywgJ2ZlRnVuY1InLCAnZmVHYXVzc2lhbkJsdXInLCAnZmVJbWFnZScsICdmZU1lcmdlJywgJ2ZlTWVyZ2VOb2RlJywgJ2ZlTW9ycGhvbG9neScsICdmZU9mZnNldCcsICdmZVBvaW50TGlnaHQnLCAnZmVTcGVjdWxhckxpZ2h0aW5nJywgJ2ZlU3BvdExpZ2h0JywgJ2ZlVGlsZScsICdmZVR1cmJ1bGVuY2UnLCAnZmlsdGVyJywgJ2ZvbnQnLCAnZm9udC1mYWNlJywgJ2ZvbnQtZmFjZS1mb3JtYXQnLCAnZm9udC1mYWNlLW5hbWUnLCAnZm9udC1mYWNlLXVyaScsICdmb3JlaWduT2JqZWN0JyxcbiAgICAgICAgJ2cnLCAnZ2x5cGgnLCAnZ2x5cGhSZWYnLFxuICAgICAgICAnaGFuZGxlcicsICdoYXRjaCcsICdoYXRjaHBhdGgnLCAnaGtlcm4nLFxuICAgICAgICAnaW1hZ2UnLCAnbGluZScsICdsaW5lYXJHcmFkaWVudCcsXG4gICAgICAgICdsaXN0ZW5lcicsXG4gICAgICAgICdtYXJrZXInLCAnbWFzaycsICdtZXNoJywgJ21lc2hncmFkaWVudCcsICdtZXNocGF0Y2gnLCAnbWVzaHJvdycsICdtZXRhZGF0YScsICdtaXNzaW5nLWdseXBoJywgJ21wYXRoJyxcbiAgICAgICAgJ3BhdGgnLCAncGF0dGVybicsICdwb2x5Z29uJywgJ3BvbHlsaW5lJywgJ3ByZWZldGNoJyxcbiAgICAgICAgJ3JhZGlhbEdyYWRpZW50JywgJ3JlY3QnLFxuICAgICAgICAnc2NyaXB0JywgJ3NldCcsICdzb2xpZGNvbG9yJywgJ3N0b3AnLCAnc3R5bGUnLCAnc3ZnJywgJ3N3aXRjaCcsICdzeW1ib2wnLFxuICAgICAgICAndGJyZWFrJywgJ3RleHQnLCAndGV4dEFyZWEnLCAndGV4dFBhdGgnLCAndGl0bGUnLCAndHJlZicsICd0c3BhbicsXG4gICAgICAgICd1bmtub3duJywgJ3VzZScsXG4gICAgICAgICd2aWRlbycsICd2aWV3JywgJ3ZrZXJuJ1xuICAgICAgXSxcbiAgICAgIHN2Z0F0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgICAnYWNjZW50LWhlaWdodCcsICdhY2N1bXVsYXRlJywgJ2FkZGl0aXZlJywgJ2FsaWdubWVudC1iYXNlbGluZScsICdhbHBoYWJldGljJywgJ2FtcGxpdHVkZScsICdhcmFiaWMtZm9ybScsICdhc2NlbnQnLCAnYXR0cmlidXRlTmFtZScsICdhdHRyaWJ1dGVUeXBlJywgJ2F6aW11dGgnLFxuICAgICAgICAnYmFuZHdpZHRoJywgJ2Jhc2VGcmVxdWVuY3knLCAnYmFzZVByb2ZpbGUnLCAnYmFzZWxpbmUtc2hpZnQnLCAnYmJveCcsICdiZWdpbicsICdiaWFzJywgJ2J5JyxcbiAgICAgICAgJ2NhbGNNb2RlJywgJ2NhcC1oZWlnaHQnLCAnY2xpcCcsICdjbGFzc05hbWUnLCAnY2xpcC1wYXRoJywgJ2NsaXAtcnVsZScsICdjbGlwUGF0aFVuaXRzJywgJ2NvbG9yJywgJ2NvbG9yLWludGVycG9sYXRpb24nLCAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJywgJ2NvbG9yLXByb2ZpbGUnLCAnY29sb3ItcmVuZGVyaW5nJywgJ2NvbnRlbnRTY3JpcHRUeXBlJywgJ2NvbnRlbnRTdHlsZVR5cGUnLCAnY3Jvc3NvcmlnaW4nLCAnY3Vyc29yJywgJ2N4JywgJ2N5JyxcbiAgICAgICAgJ2QnLCAnZGVmYXVsdEFjdGlvbicsICdkZXNjZW50JywgJ2RpZmZ1c2VDb25zdGFudCcsICdkaXJlY3Rpb24nLCAnZGlzcGxheScsICdkaXZpc29yJywgJ2RvbWluYW50LWJhc2VsaW5lJywgJ2Rvd25sb2FkJywgJ2R1cicsICdkeCcsICdkeScsXG4gICAgICAgICdlZGdlTW9kZScsICdlZGl0YWJsZScsICdlbGV2YXRpb24nLCAnZW5hYmxlLWJhY2tncm91bmQnLCAnZW5kJywgJ2V2ZW50JywgJ2V4cG9uZW50JywgJ2V4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWQnLFxuICAgICAgICAnZmlsbCcsICdmaWxsLW9wYWNpdHknLCAnZmlsbC1ydWxlJywgJ2ZpbHRlcicsICdmaWx0ZXJSZXMnLCAnZmlsdGVyVW5pdHMnLCAnZmxvb2QtY29sb3InLCAnZmxvb2Qtb3BhY2l0eScsICdmb2N1c0hpZ2hsaWdodCcsICdmb2N1c2FibGUnLCAnZm9udC1mYW1pbHknLCAnZm9udC1zaXplJywgJ2ZvbnQtc2l6ZS1hZGp1c3QnLCAnZm9udC1zdHJldGNoJywgJ2ZvbnQtc3R5bGUnLCAnZm9udC12YXJpYW50JywgJ2ZvbnQtd2VpZ2h0JywgJ2Zvcm1hdCcsICdmcicsICdmcm9tJywgJ2Z4JywgJ2Z5JyxcbiAgICAgICAgJ2cxJywgJ2cyJywgJ2dseXBoLW5hbWUnLCAnZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbCcsICdnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbCcsICdnbHlwaFJlZicsICdncmFkaWVudFRyYW5zZm9ybScsICdncmFkaWVudFVuaXRzJyxcbiAgICAgICAgJ2hhbmRsZXInLCAnaGFuZ2luZycsICdoYXRjaENvbnRlbnRVbml0cycsICdoYXRjaFVuaXRzJywgJ2hlaWdodCcsICdob3Jpei1hZHYteCcsICdob3Jpei1vcmlnaW4teCcsICdob3Jpei1vcmlnaW4teScsICdocmVmJywgJ2hyZWZsYW5nJyxcbiAgICAgICAgJ2lkZW9ncmFwaGljJywgJ2ltYWdlLXJlbmRlcmluZycsICdpbicsICdpbjInLCAnaW5pdGlhbFZpc2liaWxpdHknLCAnaW50ZXJjZXB0JyxcbiAgICAgICAgJ2snLCAnazEnLCAnazInLCAnazMnLCAnazQnLCAna2VybmVsTWF0cml4JywgJ2tlcm5lbFVuaXRMZW5ndGgnLCAna2VybmluZycsICdrZXlQb2ludHMnLCAna2V5U3BsaW5lcycsICdrZXlUaW1lcycsXG4gICAgICAgICdsZW5ndGhBZGp1c3QnLCAnbGV0dGVyLXNwYWNpbmcnLCAnbGlnaHRpbmctY29sb3InLCAnbGltaXRpbmdDb25lQW5nbGUnLCAnbG9jYWwnLFxuICAgICAgICAnbWFya2VyLWVuZCcsICdtYXJrZXItbWlkJywgJ21hcmtlci1zdGFydCcsICdtYXJrZXJIZWlnaHQnLCAnbWFya2VyVW5pdHMnLCAnbWFya2VyV2lkdGgnLCAnbWFzaycsICdtYXNrQ29udGVudFVuaXRzJywgJ21hc2tVbml0cycsICdtYXRoZW1hdGljYWwnLCAnbWF4JywgJ21lZGlhJywgJ21lZGlhQ2hhcmFjdGVyRW5jb2RpbmcnLCAnbWVkaWFDb250ZW50RW5jb2RpbmdzJywgJ21lZGlhU2l6ZScsICdtZWRpYVRpbWUnLCAnbWV0aG9kJywgJ21pbicsICdtb2RlJyxcbiAgICAgICAgJ25hbWUnLCAnbmF2LWRvd24nLCAnbmF2LWRvd24tbGVmdCcsICduYXYtZG93bi1yaWdodCcsICduYXYtbGVmdCcsICduYXYtbmV4dCcsICduYXYtcHJldicsICduYXYtcmlnaHQnLCAnbmF2LXVwJywgJ25hdi11cC1sZWZ0JywgJ25hdi11cC1yaWdodCcsICdudW1PY3RhdmVzJyxcbiAgICAgICAgJ29ic2VydmVyJywgJ29mZnNldCcsICdvcGFjaXR5JywgJ29wZXJhdG9yJywgJ29yZGVyJywgJ29yaWVudCcsICdvcmllbnRhdGlvbicsICdvcmlnaW4nLCAnb3ZlcmZsb3cnLCAnb3ZlcmxheScsICdvdmVybGluZS1wb3NpdGlvbicsICdvdmVybGluZS10aGlja25lc3MnLFxuICAgICAgICAncGFub3NlLTEnLCAncGF0aCcsICdwYXRoTGVuZ3RoJywgJ3BhdHRlcm5Db250ZW50VW5pdHMnLCAncGF0dGVyblRyYW5zZm9ybScsICdwYXR0ZXJuVW5pdHMnLCAncGhhc2UnLCAncGl0Y2gnLCAncGxheWJhY2tPcmRlcicsICdwbGF5YmFja29yZGVyJywgJ3BvaW50ZXItZXZlbnRzJywgJ3BvaW50cycsICdwb2ludHNBdFgnLCAncG9pbnRzQXRZJywgJ3BvaW50c0F0WicsICdwcmVzZXJ2ZUFscGhhJywgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAncHJpbWl0aXZlVW5pdHMnLCAncHJvcGFnYXRlJyxcbiAgICAgICAgJ3InLCAncmFkaXVzJywgJ3JlZlgnLCAncmVmWScsICdyZW5kZXJpbmctaW50ZW50JywgJ3JlcGVhdENvdW50JywgJ3JlcGVhdER1cicsICdyZXF1aXJlZEV4dGVuc2lvbnMnLCAncmVxdWlyZWRGZWF0dXJlcycsICdyZXF1aXJlZEZvbnRzJywgJ3JlcXVpcmVkRm9ybWF0cycsICdyZXN0YXJ0JywgJ3Jlc3VsdCcsICdyb3RhdGUnLCAncngnLCAncnknLFxuICAgICAgICAnc2NhbGUnLCAnc2VlZCcsICdzaGFwZS1yZW5kZXJpbmcnLCAnc2lkZScsICdzbG9wZScsICdzbmFwc2hvdFRpbWUnLCAnc3BhY2luZycsICdzcGVjdWxhckNvbnN0YW50JywgJ3NwZWN1bGFyRXhwb25lbnQnLCAnc3ByZWFkTWV0aG9kJywgJ3NyYycsICdzdGFydE9mZnNldCcsICdzdGREZXZpYXRpb24nLCAnc3RlbWgnLCAnc3RlbXYnLCAnc3RpdGNoVGlsZXMnLCAnc3RvcC1jb2xvcicsICdzdG9wLW9wYWNpdHknLCAnc3RyaWtldGhyb3VnaC1wb3NpdGlvbicsICdzdHJpa2V0aHJvdWdoLXRoaWNrbmVzcycsICdzdHJpbmcnLCAnc3Ryb2tlJywgJ3N0cm9rZS1kYXNoYXJyYXknLCAnc3Ryb2tlLWRhc2hvZmZzZXQnLCAnc3Ryb2tlLWxpbmVjYXAnLCAnc3Ryb2tlLWxpbmVqb2luJywgJ3N0cm9rZS1taXRlcmxpbWl0JywgJ3N0cm9rZS1vcGFjaXR5JywgJ3N0cm9rZS13aWR0aCcsICdzdHlsZScsICdzdXJmYWNlU2NhbGUnLCAnc3luY0JlaGF2aW9yJywgJ3N5bmNCZWhhdmlvckRlZmF1bHQnLCAnc3luY01hc3RlcicsICdzeW5jVG9sZXJhbmNlJywgJ3N5bmNUb2xlcmFuY2VEZWZhdWx0JywgJ3N5c3RlbUxhbmd1YWdlJyxcbiAgICAgICAgJ3RhYmxlVmFsdWVzJywgJ3RhcmdldCcsICd0YXJnZXRYJywgJ3RhcmdldFknLCAndGV4dC1hbmNob3InLCAndGV4dC1kZWNvcmF0aW9uJywgJ3RleHQtcmVuZGVyaW5nJywgJ3RleHRMZW5ndGgnLCAndGltZWxpbmVCZWdpbicsICd0aW1lbGluZWJlZ2luJywgJ3RpdGxlJywgJ3RvJywgJ3RyYW5zZm9ybScsICd0cmFuc2Zvcm1CZWhhdmlvcicsICd0eXBlJyxcbiAgICAgICAgJ3UxJywgJ3UyJywgJ3VuZGVybGluZS1wb3NpdGlvbicsICd1bmRlcmxpbmUtdGhpY2tuZXNzJywgJ3VuaWNvZGUnLCAndW5pY29kZS1iaWRpJywgJ3VuaWNvZGUtcmFuZ2UnLCAndW5pdHMtcGVyLWVtJyxcbiAgICAgICAgJ3YtYWxwaGFiZXRpYycsICd2LWhhbmdpbmcnLCAndi1pZGVvZ3JhcGhpYycsICd2LW1hdGhlbWF0aWNhbCcsICd2YWx1ZXMnLCAndmVyc2lvbicsICd2ZXJ0LWFkdi15JywgJ3ZlcnQtb3JpZ2luLXgnLCAndmVydC1vcmlnaW4teScsICd2aWV3Qm94JywgJ3ZpZXdUYXJnZXQnLCAndmlzaWJpbGl0eScsXG4gICAgICAgICd3aWR0aCcsICd3aWR0aHMnLCAnd29yZC1zcGFjaW5nJywgJ3dyaXRpbmctbW9kZScsXG4gICAgICAgICd4JywgJ3gtaGVpZ2h0JywgJ3gxJywgJ3gyJywgJ3hDaGFubmVsU2VsZWN0b3InLFxuICAgICAgICAneScsICd5MScsICd5MicsICd5Q2hhbm5lbFNlbGVjdG9yJyxcbiAgICAgICAgJ3onLCAnem9vbUFuZFBhbidcbiAgICAgIF0sXG4gICAgICBodG1sQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgICdhY2NlcHQnLCAnYWNjZXB0Q2hhcnNldCcsICdhY2Nlc3NLZXknLCAnYWN0aW9uJywgJ2FsbG93JywgJ2FsbG93RnVsbFNjcmVlbicsICdhbGxvd1RyYW5zcGFyZW5jeScsICdhbHQnLCAnYXN5bmMnLCAnYXV0b0NvbXBsZXRlJywgJ2F1dG9Gb2N1cycsICdhdXRvUGxheScsXG4gICAgICAgICdjYXB0dXJlJywgJ2NlbGxQYWRkaW5nJywgJ2NlbGxTcGFjaW5nJywgJ2NoYWxsZW5nZScsICdjaGFyU2V0JywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzc0lEJywgJ2NsYXNzTmFtZScsICdjb2xTcGFuJywgJ2NvbHMnLCAnY29udGVudCcsICdjb250ZW50RWRpdGFibGUnLCAnY29udGV4dE1lbnUnLCAnY29udHJvbHMnLCAnY29vcmRzJywgJ2Nyb3NzT3JpZ2luJyxcbiAgICAgICAgJ2RhdGEnLCAnZGF0ZVRpbWUnLCAnZGVmYXVsdCcsICdkZWZlcicsICdkaXInLCAnZGlzYWJsZWQnLCAnZG93bmxvYWQnLCAnZHJhZ2dhYmxlJyxcbiAgICAgICAgJ2VuY1R5cGUnLFxuICAgICAgICAnZm9ybScsICdmb3JtQWN0aW9uJywgJ2Zvcm1FbmNUeXBlJywgJ2Zvcm1NZXRob2QnLCAnZm9ybU5vVmFsaWRhdGUnLCAnZm9ybVRhcmdldCcsICdmcmFtZUJvcmRlcicsXG4gICAgICAgICdoZWFkZXJzJywgJ2hlaWdodCcsICdoaWRkZW4nLCAnaGlnaCcsICdocmVmJywgJ2hyZWZMYW5nJywgJ2h0bWxGb3InLCAnaHR0cEVxdWl2JyxcbiAgICAgICAgJ2ljb24nLCAnaWQnLCAnaW5wdXRNb2RlJywgJ2ludGVncml0eScsICdpcycsXG4gICAgICAgICdrZXlQYXJhbXMnLCAna2V5VHlwZScsICdraW5kJyxcbiAgICAgICAgJ2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb29wJywgJ2xvdycsXG4gICAgICAgICdtYW5pZmVzdCcsICdtYXJnaW5IZWlnaHQnLCAnbWFyZ2luV2lkdGgnLCAnbWF4JywgJ21heExlbmd0aCcsICdtZWRpYScsICdtZWRpYUdyb3VwJywgJ21ldGhvZCcsICdtaW4nLCAnbWluTGVuZ3RoJywgJ211bHRpcGxlJywgJ211dGVkJyxcbiAgICAgICAgJ25hbWUnLCAnbm9WYWxpZGF0ZScsICdub25jZScsXG4gICAgICAgICdvcGVuJywgJ29wdGltdW0nLFxuICAgICAgICAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdwb3N0ZXInLCAncHJlbG9hZCcsICdwcm9maWxlJyxcbiAgICAgICAgJ3JhZGlvR3JvdXAnLCAncmVhZE9ubHknLCAncmVsJywgJ3JlcXVpcmVkJywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93U3BhbicsICdyb3dzJyxcbiAgICAgICAgJ3NhbmRib3gnLCAnc2NvcGUnLCAnc2NvcGVkJywgJ3Njcm9sbGluZycsICdzZWFtbGVzcycsICdzZWxlY3RlZCcsICdzaGFwZScsICdzaXplJywgJ3NpemVzJywgJ3NwYW4nLCAnc3BlbGxDaGVjaycsICdzcmMnLCAnc3JjRG9jJywgJ3NyY0xhbmcnLCAnc3JjU2V0JywgJ3N0YXJ0JywgJ3N0ZXAnLCAnc3R5bGUnLCAnc3VtbWFyeScsXG4gICAgICAgICd0YWJJbmRleCcsICd0YXJnZXQnLCAndGl0bGUnLCAndHlwZScsXG4gICAgICAgICd1c2VNYXAnLFxuICAgICAgICAndmFsdWUnLFxuICAgICAgICAnd2lkdGgnLFxuICAgICAgICAnd21vZGUnLFxuICAgICAgICAnd3JhcCdcbiAgICAgIF07XG4iXX0=
