(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var arrayUtilities = require("./utilities/array");

var first = arrayUtilities.first;

var Element = /*#__PURE__*/function () {
  function Element(props) {
    _classCallCheck(this, Element);

    this.props = props;
    this.parent = null;
    this.children = props.children; ///
  }

  _createClass(Element, [{
    key: "getParent",
    value: function getParent() {
      return this.parent;
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      return this.children;
    }
  }, {
    key: "getFirstChild",
    value: function getFirstChild() {
      var firstChild = first(this.children) || null;
      return firstChild;
    }
  }, {
    key: "mount",
    value: function mount(parent, children) {
      this.parent = parent;
      this.children = children;
    }
  }, {
    key: "unmount",
    value: function unmount() {
      this.parent = null;
      this.children = null;
    }
  }]);

  return Element;
}();

module.exports = Element;

},{"./utilities/array":21}],2:[function(require,module,exports){
"use strict";

var _element = _interopRequireDefault(require("../element"));

var _reactElement = _interopRequireDefault(require("../mixins/reactElement"));

var _array = require("../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ReactElement = /*#__PURE__*/function (_Element) {
  _inherits(ReactElement, _Element);

  var _super = _createSuper(ReactElement);

  function ReactElement(props) {
    var _this;

    _classCallCheck(this, ReactElement);

    _this = _super.call(this, props);
    _this.state = undefined; ///

    _this.context = undefined; ///

    return _this;
  }

  _createClass(ReactElement, [{
    key: "mount",
    value: function mount(parent, reference, context) {
      var _this2 = this;

      this.context = context;
      var childContext = this.getChildContext(context),
          children = (0, _array.guarantee)(this.render());

      _get(_getPrototypeOf(ReactElement.prototype), "mount", this).call(this, parent, children);

      children.forEach(function (child) {
        var childParent = _this2,
            childReference = reference;
        child.mount(childParent, childReference, childContext);
      });
      this.componentDidMount();
    }
  }, {
    key: "unmount",
    value: function unmount(context) {
      this.context = context;
      this.componentWillUnmount();
      var childContext = this.getChildContext(context),
          children = this.getChildren();
      children.forEach(function (child) {
        return child.unmount(childContext);
      });

      _get(_getPrototypeOf(ReactElement.prototype), "unmount", this).call(this);
    }
  }, {
    key: "remount",
    value: function remount(update) {
      var childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext(this.context);
      this.children.forEach(function (child) {
        return child.unmount(childContext);
      });
      this.children = (0, _array.guarantee)(this.render(update));
      this.children.forEach(function (child) {
        return child.mount(childParent, childReference, childContext);
      });
    }
  }, {
    key: "getDOMElement",
    value: function getDOMElement() {
      return null;
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.state;
    }
  }, {
    key: "setInitialState",
    value: function setInitialState(initialState) {
      this.state = initialState; ///
    }
  }, {
    key: "setState",
    value: function setState(state) {
      this.state = state;
      this.remount();
    }
  }, {
    key: "updateState",
    value: function updateState(newState) {
      var oldState = this.state; ///

      this.state = Object.assign(oldState, newState);
      this.remount();
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate(update) {
      this.remount(update);
    }
  }, {
    key: "getChildReference",
    value: function getChildReference() {
      var parent = this.getParent(),
          child = this; ///

      return reference(parent, child);
    }
  }]);

  return ReactElement;
}(_element["default"]);

Object.assign(ReactElement.prototype, _reactElement["default"]);
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
      remainingChildren = (0, _array.remaining)(child, children);
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
"use strict";

var _react = _interopRequireDefault(require("../../element/react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ReactClassElement = /*#__PURE__*/function (_ReactElement) {
  _inherits(ReactClassElement, _ReactElement);

  var _super = _createSuper(ReactClassElement);

  function ReactClassElement(reactClass, props) {
    var _this;

    _classCallCheck(this, ReactClassElement);

    _this = _super.call(this, props);
    _this.reactClass = reactClass;

    var initialState = _this.getInitialState();

    _this.setInitialState(initialState);

    return _this;
  }

  _createClass(ReactClassElement, [{
    key: "render",
    value: function render(update) {
      return this.reactClass.render.call(this, update);
    }
  }, {
    key: "getInitialState",
    value: function getInitialState() {
      return this.reactClass.getInitialState.call(this);
    }
  }, {
    key: "getChildContext",
    value: function getChildContext(context) {
      return this.reactClass.getChildContext.call(this, context);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.reactClass.componentDidMount.call(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.reactClass.componentWillUnmount.call(this);
    }
  }]);

  return ReactClassElement;
}(_react["default"]);

module.exports = ReactClassElement;

},{"../../element/react":2}],4:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("../../element/react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ReactComponentElement = /*#__PURE__*/function (_ReactElement) {
  _inherits(ReactComponentElement, _ReactElement);

  var _super = _createSuper(ReactComponentElement);

  function ReactComponentElement(reactComponent, props) {
    var _this;

    _classCallCheck(this, ReactComponentElement);

    _this = _super.call(this, props);
    _this.reactComponent = reactComponent;

    var initialState = _this.getInitialState();

    _this.setInitialState(initialState);

    return _this;
  }

  _createClass(ReactComponentElement, [{
    key: "render",
    value: function render(update) {
      return this.reactComponent.render.call(this, update);
    }
  }, {
    key: "getInitialState",
    value: function getInitialState() {
      return this.reactComponent.getInitialState.call(this);
    }
  }, {
    key: "getChildContext",
    value: function getChildContext(context) {
      return this.reactComponent.getChildContext.call(this, context);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.reactComponent.componentDidMount.call(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.reactComponent.componentWillUnmount.call(this);
    }
  }]);

  return ReactComponentElement;
}(_react["default"]);

module.exports = ReactComponentElement;

},{"../../element/react":2}],5:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("../../element/react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ReactFunctionElement = /*#__PURE__*/function (_ReactElement) {
  _inherits(ReactFunctionElement, _ReactElement);

  var _super = _createSuper(ReactFunctionElement);

  function ReactFunctionElement(reactFunction, props) {
    var _this;

    _classCallCheck(this, ReactFunctionElement);

    _this = _super.call(this, props);
    _this.reactFunction = reactFunction;
    return _this;
  }

  _createClass(ReactFunctionElement, [{
    key: "render",
    value: function render(update) {
      return this.reactFunction(this.props, this.context, this);
    }
  }, {
    key: "getInitialState",
    value: function getInitialState() {///
    }
  }, {
    key: "getChildContext",
    value: function getChildContext(context) {
      return context;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {///
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {///
    }
  }]);

  return ReactFunctionElement;
}(_react["default"]);

module.exports = ReactFunctionElement;

},{"../../element/react":2}],6:[function(require,module,exports){
"use strict";

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var VirtualDOMNode = /*#__PURE__*/function (_Element) {
  _inherits(VirtualDOMNode, _Element);

  var _super = _createSuper(VirtualDOMNode);

  function VirtualDOMNode(props, domElement) {
    var _this;

    _classCallCheck(this, VirtualDOMNode);

    _this = _super.call(this, props);
    _this.domElement = domElement;
    return _this;
  }

  _createClass(VirtualDOMNode, [{
    key: "getDOMElement",
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: "mount",
    value: function mount(parent, reference) {
      var children = this.getChildren();

      _get(_getPrototypeOf(VirtualDOMNode.prototype), "mount", this).call(this, parent, children);

      parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
      return this.domElement;
    }
  }, {
    key: "unmount",
    value: function unmount() {
      this.domElement.parentElement.removeChild(this.domElement);

      _get(_getPrototypeOf(VirtualDOMNode.prototype), "unmount", this).call(this);
    }
  }], [{
    key: "fromDOMElement",
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
}(_element["default"]);

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
"use strict";

var _virtualDOMNode = _interopRequireDefault(require("../virtualDOMNode"));

var _virtualDOMElement = _interopRequireDefault(require("../../mixins/virtualDOMElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var VirtualDOMElement = /*#__PURE__*/function (_VirtualDOMNode) {
  _inherits(VirtualDOMElement, _VirtualDOMNode);

  var _super = _createSuper(VirtualDOMElement);

  function VirtualDOMElement() {
    _classCallCheck(this, VirtualDOMElement);

    return _super.apply(this, arguments);
  }

  _createClass(VirtualDOMElement, [{
    key: "mount",
    value: function mount(parent, reference, context) {
      _get(_getPrototypeOf(VirtualDOMElement.prototype), "mount", this).call(this, parent, reference);

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
    key: "unmount",
    value: function unmount(context) {
      var childContext = context,
          children = this.getChildren();
      children.forEach(function (child) {
        return child.unmount(childContext);
      });

      _get(_getPrototypeOf(VirtualDOMElement.prototype), "unmount", this).call(this);
    }
  }, {
    key: "applyProps",
    value: function applyProps() {
      var _this = this;

      var names = Object.keys(this.props);
      names.forEach(function (name) {
        var value = _this.props[name];

        if (false) {} else if (_this.isHandlerName(name)) {
          _this.setHandler(name, value);
        } else if (_this.isAttributeName(name)) {
          _this.setAttribute(name, value);
        } else if (name === "ref") {
          var callback = value; ///

          callback(_this.domElement);
        }
      });
    }
  }, {
    key: "setHandler",
    value: function setHandler(name, value) {
      var eventType = name.substr(2).toLowerCase(),
          ///
      handler = value; ///

      this.domElement.addEventListener(eventType, handler);
    }
  }, {
    key: "isHandlerName",
    value: function isHandlerName(name) {
      return name.match(/^on/);
    }
  }]);

  return VirtualDOMElement;
}(_virtualDOMNode["default"]);

Object.assign(VirtualDOMElement.prototype, _virtualDOMElement["default"]);
module.exports = VirtualDOMElement;

},{"../../mixins/virtualDOMElement":16,"../virtualDOMNode":6}],8:[function(require,module,exports){
"use strict";

var _element = _interopRequireDefault(require("../element"));

var _name = require("../../../utilities/name");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var VirtualDOMHTMLElement = /*#__PURE__*/function (_VirtualDOMElement) {
  _inherits(VirtualDOMHTMLElement, _VirtualDOMElement);

  var _super = _createSuper(VirtualDOMHTMLElement);

  function VirtualDOMHTMLElement(tagName, props) {
    _classCallCheck(this, VirtualDOMHTMLElement);

    var domElement = document.createElement(tagName);
    return _super.call(this, props, domElement);
  }

  _createClass(VirtualDOMHTMLElement, [{
    key: "isAttributeName",
    value: function isAttributeName(name) {
      return (0, _name.isHTMLAttributeName)(name);
    }
  }]);

  return VirtualDOMHTMLElement;
}(_element["default"]);

module.exports = VirtualDOMHTMLElement;

},{"../../../utilities/name":22,"../element":7}],9:[function(require,module,exports){
"use strict";

var _element = _interopRequireDefault(require("../element"));

var _name = require("../../../utilities/name");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var VirtualDOMSVGElement = /*#__PURE__*/function (_VirtualDOMElement) {
  _inherits(VirtualDOMSVGElement, _VirtualDOMElement);

  var _super = _createSuper(VirtualDOMSVGElement);

  function VirtualDOMSVGElement(tagName, props) {
    _classCallCheck(this, VirtualDOMSVGElement);

    var domElement = document.createElementNS("http://www.w3.org/2000/svg", tagName);
    return _super.call(this, props, domElement);
  }

  _createClass(VirtualDOMSVGElement, [{
    key: "isAttributeName",
    value: function isAttributeName(name) {
      return (0, _name.isSVGAttributeName)(name);
    }
  }]);

  return VirtualDOMSVGElement;
}(_element["default"]);

module.exports = VirtualDOMSVGElement;

},{"../../../utilities/name":22,"../element":7}],10:[function(require,module,exports){
"use strict";

var _virtualDOMNode = _interopRequireDefault(require("../virtualDOMNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var VirtualDOMTextElement = /*#__PURE__*/function (_VirtualDOMNode) {
  _inherits(VirtualDOMTextElement, _VirtualDOMNode);

  var _super = _createSuper(VirtualDOMTextElement);

  function VirtualDOMTextElement(text) {
    _classCallCheck(this, VirtualDOMTextElement);

    var domElement = document.createTextNode(text),
        children = [],
        props = {
      children: children
    };
    return _super.call(this, props, domElement);
  }

  _createClass(VirtualDOMTextElement, [{
    key: "mount",
    value: function mount(parent, reference, context) {
      _get(_getPrototypeOf(VirtualDOMTextElement.prototype), "mount", this).call(this, parent, reference);
    }
  }, {
    key: "unmount",
    value: function unmount(context) {
      _get(_getPrototypeOf(VirtualDOMTextElement.prototype), "unmount", this).call(this);
    }
  }, {
    key: "getText",
    value: function getText() {
      var nodeValue = this.domElement.nodeValue,
          text = nodeValue; ///

      return text;
    }
  }, {
    key: "setText",
    value: function setText(text) {
      var nodeValue = text; ///

      this.domElement.nodeValue = nodeValue;
    }
  }]);

  return VirtualDOMTextElement;
}(_virtualDOMNode["default"]);

module.exports = VirtualDOMTextElement;

},{"../virtualDOMNode":6}],11:[function(require,module,exports){
"use strict";

var examples = {
  vanillaApp: require("./examples/vanillaApp"),
  reduxApp: require("./examples/reduxApp")
};
Object.assign(window, examples);

},{"./examples/reduxApp":13,"./examples/vanillaApp":14}],12:[function(require,module,exports){
"use strict";

var createStore = function createStore(reducer) {
  var state,
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
  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe,
    unsubscribe: unsubscribe
  };
};

var combineReducers = function combineReducers(reducers) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var keys = Object.keys(reducers),
        nextState = keys.reduce(function (nextState, key) {
      var reducer = reducers[key];
      nextState[key] = reducer(state[key], action);
      return nextState;
    }, {});
    return nextState;
  };
};

var Redux = {
  createStore: createStore,
  combineReducers: combineReducers
};
module.exports = Redux;

},{}],13:[function(require,module,exports){
"use strict";

var _redux = _interopRequireDefault(require("./redux"));

var _react = _interopRequireDefault(require("../react"));

var _reactDOM = _interopRequireDefault(require("../reactDOM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Component = _react["default"].Component,
    createStore = _redux["default"].createStore,
    combineReducers = _redux["default"].combineReducers;

var todo = function todo(state, action) {
  switch (action.type) {
    case "ADD_TODO":
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

    case "TOGGLE_TODO":
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
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "ADD_TODO":
      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);

    case "TOGGLE_TODO":
      return state.map(function (t) {
        return todo(t, action);
      });

    default:
      return state;
  }
};

var visibilityFilter = function visibilityFilter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "SHOW_ALL";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
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
    case "SHOW_ALL":
      return todos;

    case "SHOW_COMPLETED":
      return todos.filter(function (t) {
        return t.completed;
      });

    case "SHOW_ACTIVE":
      return todos.filter(function (t) {
        return !t.completed;
      });
  }
};

var Todo = function Todo(_ref) {
  var onClick = _ref.onClick,
      completed = _ref.completed,
      text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement("li", {
    onClick: onClick,
    style: {
      textDecoration: completed ? "line-through" : "none"
    }
  }, text);
};

var TodoList = function TodoList(_ref2) {
  var todos = _ref2.todos,
      onTodoClick = _ref2.onTodoClick;
  return /*#__PURE__*/_react["default"].createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/_react["default"].createElement(Todo, {
      text: todo.text,
      completed: todo.completed,
      onClick: function onClick() {
        return onTodoClick(todo.id);
      }
    });
  }));
};

var Link = function Link(props) {
  var active = props.active,
      _onClick = props.onClick;

  if (active) {
    return /*#__PURE__*/_react["default"].createElement("span", null, props.children);
  }

  return /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();

      _onClick();
    }
  }, props.children);
};

var FilterLink = _react["default"].createClass({
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
    return /*#__PURE__*/_react["default"].createElement(Link, {
      active: this.props.filter === state.visibilityFilter,
      onClick: function onClick() {
        var type = "SET_VISIBILITY_FILTER",
            filter = _this2.props.filter;
        store.dispatch({
          type: type,
          filter: filter
        });
      }
    }, this.props.children);
  }
});

var nextTodoId = 0;

var AddTodo = function AddTodo(props, _ref3) {
  var store = _ref3.store;
  var input;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    ref: function ref(domElement) {
      input = domElement;
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      var type = "ADD_TODO",
          _input = input,
          value = _input.value,
          text = value,
          id = nextTodoId++;
      store.dispatch({
        type: type,
        text: text,
        id: id
      });
      input.value = "";
    }
  }, "Add todo"));
};

var VisibleTodoList = /*#__PURE__*/function (_Component) {
  _inherits(VisibleTodoList, _Component);

  var _super = _createSuper(VisibleTodoList);

  function VisibleTodoList() {
    _classCallCheck(this, VisibleTodoList);

    return _super.apply(this, arguments);
  }

  _createClass(VisibleTodoList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var store = this.context.store;
      this.unsubscribe = store.subscribe(function () {
        return _this3.forceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.context.store,
          state = store.getState();
      return /*#__PURE__*/_react["default"].createElement(TodoList, {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
        onTodoClick: function onTodoClick(id) {
          var type = "TOGGLE_TODO";
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
  return /*#__PURE__*/_react["default"].createElement("p", null, "Show: ", /*#__PURE__*/_react["default"].createElement(FilterLink, {
    filter: "SHOW_ALL"
  }, "All"), " - ", /*#__PURE__*/_react["default"].createElement(FilterLink, {
    filter: "SHOW_COMPLETED"
  }, "Completed"), " - ", /*#__PURE__*/_react["default"].createElement(FilterLink, {
    filter: "SHOW_ACTIVE"
  }, "Active"));
};

var TodoApp = function TodoApp() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(AddTodo, null), /*#__PURE__*/_react["default"].createElement(VisibleTodoList, null), /*#__PURE__*/_react["default"].createElement(Footer, null));
};

var Provider = /*#__PURE__*/function (_Component2) {
  _inherits(Provider, _Component2);

  var _super2 = _createSuper(Provider);

  function Provider() {
    _classCallCheck(this, Provider);

    return _super2.apply(this, arguments);
  }

  _createClass(Provider, [{
    key: "getChildContext",
    value: function getChildContext(context) {
      var store = this.props.store;
      return {
        store: store
      };
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return Provider;
}(Component);

var reduxApp = function reduxApp() {
  var store = createStore(todoApp),
      rootDOMElement = document.getElementById("root");

  _reactDOM["default"].render( /*#__PURE__*/_react["default"].createElement(Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(TodoApp, null)), rootDOMElement);
};

module.exports = reduxApp;

},{"../react":17,"../reactDOM":20,"./redux":12}],14:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("../react"));

var _reactDOM = _interopRequireDefault(require("../reactDOM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Comment = _react["default"].createClass({
  render: function render() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "comment"
    }, /*#__PURE__*/_react["default"].createElement("p", null, this.props.message));
  },
  componentDidMount: function componentDidMount() {
    var message = this.props.message;
    console.log("Comment mounted with message: " + message);
  },
  componentWillUnmount: function componentWillUnmount() {
    var message = this.props.message;
    console.log("Comment unmounted with message: " + message);
  }
});

var CommentsList = _react["default"].createClass({
  getInitialState: function getInitialState() {
    var messages = ["Hello, world!", "Hello world again..."],
        state = {
      messages: messages
    };
    return state;
  },
  componentDidMount: function componentDidMount() {
    console.log("Comments list mounted.");
  },
  render: function render() {
    var state = this.getState(),
        messages = state.messages,
        comments = messages.map(function (message) {
      return /*#__PURE__*/_react["default"].createElement(Comment, {
        message: message
      });
    });
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "comments-list"
    }, comments);
  }
});

var vanillaApp = function vanillaApp() {
  var commentsList = /*#__PURE__*/_react["default"].createElement(CommentsList, null),
      rootDOMElement = document.getElementById("root");

  _reactDOM["default"].render(commentsList, rootDOMElement);

  setTimeout(function () {
    var messages = ["Hello world yet again!!!"],
        state = {
      messages: messages
    };
    commentsList.setState(state);
  }, 1000); ///
};

module.exports = vanillaApp;

},{"../react":17,"../reactDOM":20}],15:[function(require,module,exports){
"use strict";

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
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function setAttribute(name, value) {
  var _this = this;

  if (name === "className") {
    name = "class";
  }

  if (name === "htmlFor") {
    name = "for";
  }

  if (_typeof(value) === "object") {
    var keys = Object.keys(value);
    keys.forEach(function (key) {
      _this.domElement[name][key] = value[key];
    });
  } else if (typeof value === "boolean") {
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
  this.domElement.className = "";
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
"use strict";

var Element = require("./element"),
    ReactClass = require("./reactClass"),
    nameUtilities = require("./utilities/name"),
    arrayUtilities = require("./utilities/array"),
    ReactComponent = require("./reactComponent"),
    ReactClassElement = require("./element/react/class"),
    ReactFunctionElement = require("./element/react/function"),
    ReactComponentElement = require("./element/react/component"),
    VirtualDOMTextElement = require("./element/virtualDOMNode/textElement"),
    VirtualDOMHTMLElement = require("./element/virtualDOMNode/element/html"),
    VirtualDOMSVGElement = require("./element/virtualDOMNode/element/svg");

var flatten = arrayUtilities.flatten,
    isSVGTagName = nameUtilities.isSVGTagName;

function createClass(object) {
  return ReactClass.create(object);
}

function createElement(firstArgument, properties) {
  var element = null;

  if (firstArgument !== undefined) {
    for (var _len = arguments.length, childArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      childArguments[_key - 2] = arguments[_key];
    }

    var children = childrenFromChildArguments(childArguments),
        props = Object.assign({}, properties, {
      children: children
    });

    if (false) {///
    } else if (typeof firstArgument === "string") {
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
    } else if (typeof firstArgument === "function") {
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
    var child;

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
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReactClass = /*#__PURE__*/function () {
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
    key: "getInitialState",
    value: function getInitialState() {
      return {};
    }
  }, {
    key: "getChildContext",
    value: function getChildContext(context) {
      return context;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }], [{
    key: "create",
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
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReactComponent = /*#__PURE__*/function () {
  function ReactComponent() {
    _classCallCheck(this, ReactComponent);
  }

  _createClass(ReactComponent, [{
    key: "getInitialState",
    value: function getInitialState() {
      return {};
    }
  }, {
    key: "getChildContext",
    value: function getChildContext(context) {
      return context;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }]);

  return ReactComponent;
}();

module.exports = ReactComponent;

},{}],20:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VirtualDOMNode = require("./element/virtualDOMNode");

var ReactDOM = /*#__PURE__*/function () {
  function ReactDOM() {
    _classCallCheck(this, ReactDOM);
  }

  _createClass(ReactDOM, null, [{
    key: "render",
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
"use strict";

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
"use strict";

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
var svgTagNames = ["altGlyph", "animate", "animateColor", "animateMotion", "animateTransform", "animation", "audio", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "discard", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "handler", "hatch", "hatchpath", "hkern", "image", "line", "linearGradient", "listener", "marker", "mask", "mesh", "meshgradient", "meshpatch", "meshrow", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "prefetch", "radialGradient", "rect", "script", "set", "solidcolor", "stop", "style", "svg", "switch", "symbol", "tbreak", "text", "textArea", "textPath", "title", "tref", "tspan", "unknown", "use", "video", "view", "vkern"],
    svgAttributeNames = ["accent-height", "accumulate", "additive", "alignment-baseline", "alphabetic", "amplitude", "arabic-form", "ascent", "attributeName", "attributeType", "azimuth", "bandwidth", "baseFrequency", "baseProfile", "baseline-shift", "bbox", "begin", "bias", "by", "calcMode", "cap-height", "clip", "className", "clip-path", "clip-rule", "clipPathUnits", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "contentScriptType", "contentStyleType", "crossorigin", "cursor", "cx", "cy", "d", "defaultAction", "descent", "diffuseConstant", "direction", "display", "divisor", "dominant-baseline", "download", "dur", "dx", "dy", "edgeMode", "editable", "elevation", "enable-background", "end", "event", "exponent", "externalResourcesRequired", "fill", "fill-opacity", "fill-rule", "filter", "filterRes", "filterUnits", "flood-color", "flood-opacity", "focusHighlight", "focusable", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "format", "fr", "from", "fx", "fy", "g1", "g2", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "glyphRef", "gradientTransform", "gradientUnits", "handler", "hanging", "hatchContentUnits", "hatchUnits", "height", "horiz-adv-x", "horiz-origin-x", "horiz-origin-y", "href", "hreflang", "ideographic", "image-rendering", "in", "in2", "initialVisibility", "intercept", "k", "k1", "k2", "k3", "k4", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letter-spacing", "lighting-color", "limitingConeAngle", "local", "marker-end", "marker-mid", "marker-start", "markerHeight", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "max", "media", "mediaCharacterEncoding", "mediaContentEncodings", "mediaSize", "mediaTime", "method", "min", "mode", "name", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "numOctaves", "observer", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlay", "overline-position", "overline-thickness", "panose-1", "path", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "phase", "pitch", "playbackOrder", "playbackorder", "pointer-events", "points", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "propagate", "r", "radius", "refX", "refY", "rendering-intent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "requiredFonts", "requiredFormats", "restart", "result", "rotate", "rx", "ry", "scale", "seed", "shape-rendering", "side", "slope", "snapshotTime", "spacing", "specularConstant", "specularExponent", "spreadMethod", "src", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "string", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "surfaceScale", "syncBehavior", "syncBehaviorDefault", "syncMaster", "syncTolerance", "syncToleranceDefault", "systemLanguage", "tableValues", "target", "targetX", "targetY", "text-anchor", "text-decoration", "text-rendering", "textLength", "timelineBegin", "timelinebegin", "title", "to", "transform", "transformBehavior", "type", "u1", "u2", "underline-position", "underline-thickness", "unicode", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "values", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "viewBox", "viewTarget", "visibility", "width", "widths", "word-spacing", "writing-mode", "x", "x-height", "x1", "x2", "xChannelSelector", "y", "y1", "y2", "yChannelSelector", "z", "zoomAndPan"],
    htmlAttributeNames = ["accept", "acceptCharset", "accessKey", "action", "allow", "allowFullScreen", "allowTransparency", "alt", "async", "autoComplete", "autoFocus", "autoPlay", "capture", "cellPadding", "cellSpacing", "challenge", "charSet", "checked", "cite", "classID", "className", "colSpan", "cols", "content", "contentEditable", "contextMenu", "controls", "coords", "crossOrigin", "data", "dateTime", "default", "defer", "dir", "disabled", "download", "draggable", "encType", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "headers", "height", "hidden", "high", "href", "hrefLang", "htmlFor", "httpEquiv", "icon", "id", "inputMode", "integrity", "is", "keyParams", "keyType", "kind", "label", "lang", "list", "loop", "low", "manifest", "marginHeight", "marginWidth", "max", "maxLength", "media", "mediaGroup", "method", "min", "minLength", "multiple", "muted", "name", "noValidate", "nonce", "open", "optimum", "pattern", "placeholder", "poster", "preload", "profile", "radioGroup", "readOnly", "rel", "required", "reversed", "role", "rowSpan", "rows", "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "span", "spellCheck", "src", "srcDoc", "srcLang", "srcSet", "start", "step", "style", "summary", "tabIndex", "target", "title", "type", "useMap", "value", "width", "wmode", "wrap"];

},{}]},{},[11])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvZWxlbWVudC5qcyIsImxpYi9lbGVtZW50L3JlYWN0LmpzIiwibGliL2VsZW1lbnQvcmVhY3QvY2xhc3MuanMiLCJsaWIvZWxlbWVudC9yZWFjdC9jb21wb25lbnQuanMiLCJsaWIvZWxlbWVudC9yZWFjdC9mdW5jdGlvbi5qcyIsImxpYi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlLmpzIiwibGliL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC5qcyIsImxpYi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQvaHRtbC5qcyIsImxpYi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQvc3ZnLmpzIiwibGliL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvdGV4dEVsZW1lbnQuanMiLCJsaWIvZXhhbXBsZXMuanMiLCJsaWIvZXhhbXBsZXMvcmVkdXguanMiLCJsaWIvZXhhbXBsZXMvcmVkdXhBcHAuanMiLCJsaWIvZXhhbXBsZXMvdmFuaWxsYUFwcC5qcyIsImxpYi9taXhpbnMvcmVhY3RFbGVtZW50LmpzIiwibGliL21peGlucy92aXJ0dWFsRE9NRWxlbWVudC5qcyIsImxpYi9yZWFjdC5qcyIsImxpYi9yZWFjdENsYXNzLmpzIiwibGliL3JlYWN0Q29tcG9uZW50LmpzIiwibGliL3JlYWN0RE9NLmpzIiwibGliL3V0aWxpdGllcy9hcnJheS5qcyIsImxpYi91dGlsaXRpZXMvbmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7OztBQUVBLElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxtQkFBRCxDQUE5Qjs7SUFFUSxLLEdBQVUsYyxDQUFWLEs7O0lBRUYsTztBQUNKLG1CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBSyxLQUFMLEdBQWEsS0FBYjtBQUVBLFNBQUssTUFBTCxHQUFjLElBQWQ7QUFFQSxTQUFLLFFBQUwsR0FB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QWYvSSxFQWV1SixPQWZ2SixFQWVnSyxTQWZoSyxFQWdCbkIsVUFoQm1CLEVBZ0JQLFFBaEJPLEVBZ0JHLE9BaEJILEVBZ0JZLE1BaEJaLEVBaUJuQixRQWpCbUIsRUFrQm5CLE9BbEJtQixFQW1CbkIsT0FuQm1CLEVBb0JuQixPQXBCbUIsRUFxQm5CLE1BckJtQixDQTVDM0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi91dGlsaXRpZXMvYXJyYXlcIik7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47ICAvLy9cbiAgfVxuXG4gIGdldFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIGdldEZpcnN0Q2hpbGQoKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IG51bGw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgcmVhY3RFbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcmVhY3RFbGVtZW50XCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZSwgcmVtYWluaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQgPSB1bmRlZmluZWQ7IC8vL1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIoKSk7XG5cbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICByZW1vdW50KHVwZGF0ZSkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCkpO1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7ICAvLy9cbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShuZXdTdGF0ZSkge1xuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5zdGF0ZTsgIC8vL1xuXG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24ob2xkU3RhdGUsIG5ld1N0YXRlKTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgdGhpcy5yZW1vdW50KHVwZGF0ZSk7XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVhY3RFbGVtZW50LnByb3RvdHlwZSwgcmVhY3RFbGVtZW50TWl4aW5zKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGxldCByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpLFxuICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKChyZWZlcmVuY2UgPT09IG51bGwpICYmIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSkge1xuICAgIGNoaWxkID0gcGFyZW50OyAvLy9cblxuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5nZXRDaGlsZHJlbigpLFxuICAgICAgICByZW1haW5pbmdDaGlsZHJlbiA9IHJlbWFpbmluZyhjaGlsZCwgY2hpbGRyZW4pO1xuXG4gIHJldHVybiByZW1haW5pbmdDaGlsZHJlbi5yZWR1Y2UoKHJlZmVyZW5jZSwgcmVtYWluaW5nQ2hpbGQpID0+IHtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7IC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBudWxsO1xuXG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkOyAgLy8vXG5cbiAgICAgICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBudWxsKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L3JlYWN0XCI7XG5cbmNsYXNzIFJlYWN0Q2xhc3NFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5yZW5kZXIuY2FsbCh0aGlzLCB1cGRhdGUpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0SW5pdGlhbFN0YXRlLmNhbGwodGhpcyk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0Q2hpbGRDb250ZXh0LmNhbGwodGhpcywgY29udGV4dCk7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnREaWRNb3VudC5jYWxsKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudFdpbGxVbm1vdW50LmNhbGwodGhpcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzRWxlbWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L3JlYWN0XCI7XG5cbmNsYXNzIFJlYWN0Q29tcG9uZW50RWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q29tcG9uZW50LCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RDb21wb25lbnQgPSByZWFjdENvbXBvbmVudDtcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LnJlbmRlci5jYWxsKHRoaXMsIHVwZGF0ZSk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQuZ2V0SW5pdGlhbFN0YXRlLmNhbGwodGhpcyk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LmdldENoaWxkQ29udGV4dC5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnREaWRNb3VudC5jYWxsKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnRXaWxsVW5tb3VudC5jYWxsKHRoaXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDb21wb25lbnRFbGVtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdEVsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvcmVhY3RcIjtcblxuY2xhc3MgUmVhY3RGdW5jdGlvbkVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdEZ1bmN0aW9uLCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RGdW5jdGlvbiA9IHJlYWN0RnVuY3Rpb247XG5cblxuXG5cbiAgfVxuIFxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbih0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIC8vL1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vL1xuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RGdW5jdGlvbkVsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuY2xhc3MgVmlydHVhbERPTU5vZGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBwYXJlbnRET01FbGVtZW50KHBhcmVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpKTtcblxuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlydHVhbERPTU5vZGUgPSBuZXcgVmlydHVhbERPTU5vZGUocHJvcHMsIGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHZpcnR1YWxET01Ob2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTU5vZGU7XG5cbmZ1bmN0aW9uIHBhcmVudERPTUVsZW1lbnQocGFyZW50KSB7XG4gIGxldCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudERPTUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZURPTUVsZW1lbnQgPSAocmVmZXJlbmNlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZS5nZXRET01FbGVtZW50KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZURPTUVsZW1lbnQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpcnR1YWxET01Ob2RlIGZyb20gXCIuLi92aXJ0dWFsRE9NTm9kZVwiO1xuXG5pbXBvcnQgdmlydHVhbERPTUVsZW1lbnRNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy92aXJ0dWFsRE9NRWxlbWVudFwiO1xuXG5jbGFzcyBWaXJ0dWFsRE9NRWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01Ob2RlIHtcbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpKTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCkpO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgYXBwbHlQcm9wcygpIHtcbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpO1xuXG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzW25hbWVdO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgICAgdGhpcy5zZXRIYW5kbGVyKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0F0dHJpYnV0ZU5hbWUobmFtZSkpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInJlZlwiKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWU7IC8vL1xuICAgICAgICBcbiAgICAgICAgY2FsbGJhY2sodGhpcy5kb21FbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldEhhbmRsZXIobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgIGhhbmRsZXIpO1xuICB9XG5cblx0aXNIYW5kbGVyTmFtZShuYW1lKSB7XG5cdFx0cmV0dXJuIG5hbWUubWF0Y2goL15vbi8pO1xuXHR9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlydHVhbERPTUVsZW1lbnQucHJvdG90eXBlLCB2aXJ0dWFsRE9NRWxlbWVudE1peGlucyk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTUVsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpcnR1YWxET01FbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGlzSFRNTEF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY2xhc3MgVmlydHVhbERPTUhUTUxFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgc3VwZXIocHJvcHMsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgaXNBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gaXNIVE1MQXR0cmlidXRlTmFtZShuYW1lKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxET01IVE1MRWxlbWVudDtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaXJ0dWFsRE9NRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBpc1NWR0F0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY2xhc3MgVmlydHVhbERPTVNWR0VsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHRhZ05hbWUpO1xuXG4gICAgc3VwZXIocHJvcHMsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgaXNBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gaXNTVkdBdHRyaWJ1dGVOYW1lKG5hbWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTVNWR0VsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpcnR1YWxET01Ob2RlIGZyb20gXCIuLi92aXJ0dWFsRE9NTm9kZVwiO1xuXG5jbGFzcyBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuICB9XG4gIFxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxET01UZXh0RWxlbWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBleGFtcGxlcyA9IHtcbiAgdmFuaWxsYUFwcDogcmVxdWlyZShcIi4vZXhhbXBsZXMvdmFuaWxsYUFwcFwiKSxcbiAgcmVkdXhBcHA6IHJlcXVpcmUoXCIuL2V4YW1wbGVzL3JlZHV4QXBwXCIpXG59O1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywgZXhhbXBsZXMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNyZWF0ZVN0b3JlID0gKHJlZHVjZXIpID0+IHtcbiAgbGV0IHN0YXRlLFxuICAgICAgbGlzdGVuZXJzID0gW107XG5cbiAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoKSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICB1bnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdW5zdWJzY3JpYmUgPSAobCkgPT4ge1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKGxpc3RlbmVyKSA9PiB7XG4gICAgICByZXR1cm4gKGxpc3RlbmVyICE9PSBsKTtcbiAgICB9KTtcbiAgfTtcblxuICBkaXNwYXRjaCh7fSk7XG5cbiAgcmV0dXJuIHsgZ2V0U3RhdGUsIGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5jb25zdCBjb21iaW5lUmVkdWNlcnMgPSAocmVkdWNlcnMpID0+IHtcbiAgcmV0dXJuIChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpLFxuICAgICAgICAgIG5leHRTdGF0ZSA9IGtleXMucmVkdWNlKChuZXh0U3RhdGUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG5cbiAgICAgICAgICAgIG5leHRTdGF0ZVtrZXldID0gcmVkdWNlcihzdGF0ZVtrZXldLCBhY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV4dFN0YXRlO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgIHJldHVybiBuZXh0U3RhdGU7XG4gIH07XG59O1xuXG5jb25zdCBSZWR1eCA9IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZHV4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWR1eCBmcm9tIFwiLi9yZWR1eFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCIuLi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCIuLi9yZWFjdERPTVwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3QsXG4gICAgICB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSA9IFJlZHV4O1xuXG5jb25zdCB0b2RvID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJBRERfVE9ET1wiIDoge1xuICAgICAgY29uc3QgeyBpZCwgdGV4dCB9ID0gYWN0aW9uLFxuICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHRleHQsXG4gICAgICAgIGNvbXBsZXRlZFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFwiVE9HR0xFX1RPRE9cIiA6IHtcbiAgICAgIGlmIChzdGF0ZS5pZCAhPT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcGxldGVkID0gIXN0YXRlLmNvbXBsZXRlZDsgLy8vXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb21wbGV0ZWRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IHRvZG9zID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkFERF9UT0RPXCIgOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvZG8odW5kZWZpbmVkLCBhY3Rpb24pXG4gICAgICBdO1xuXG4gICAgY2FzZSBcIlRPR0dMRV9UT0RPXCIgOlxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCh0ID0+IHRvZG8odCwgYWN0aW9uKSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKCBzdGF0ZSA9IFwiU0hPV19BTExcIiwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSXCIgOlxuICAgICAgcmV0dXJuIGFjdGlvbi5maWx0ZXI7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCB0b2RvQXBwID0gY29tYmluZVJlZHVjZXJzKHtcbiAgdG9kb3MsXG4gIHZpc2liaWxpdHlGaWx0ZXJcbn0pO1xuXG5jb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIGZpbHRlcikgPT4ge1xuICBzd2l0Y2ggKGZpbHRlcikge1xuICAgIGNhc2UgXCJTSE9XX0FMTFwiIDpcbiAgICAgIHJldHVybiB0b2RvcztcblxuICAgIGNhc2UgXCJTSE9XX0NPTVBMRVRFRFwiIDpcbiAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgIHQgPT4gdC5jb21wbGV0ZWRcbiAgICAgICk7XG5cbiAgICBjYXNlIFwiU0hPV19BQ1RJVkVcIiA6XG4gICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICB0ID0+ICF0LmNvbXBsZXRlZFxuICAgICAgKTtcbiAgfVxufTtcblxuY29uc3QgVG9kbyA9ICh7b25DbGljaywgY29tcGxldGVkLCB0ZXh0fSkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIHN0eWxlPXt7dGV4dERlY29yYXRpb246Y29tcGxldGVkID9cbiAgICAgICAgICAgIFwibGluZS10aHJvdWdoXCIgOlxuICAgICAgICAgICAgXCJub25lXCJ9fVxuICAgID5cbiAgICAgIHt0ZXh0fVxuICAgIDwvbGk+XG5cbiAgKTtcbn07XG5cbmNvbnN0IFRvZG9MaXN0ID0gKHt0b2Rvcywgb25Ub2RvQ2xpY2t9KSA9PiAge1xuICByZXR1cm4gKFxuXG4gICAgPHVsPlxuICAgICAge3RvZG9zLm1hcCh0b2RvID0+IDxUb2RvIHRleHQ9e3RvZG8udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e3RvZG8uY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZG9DbGljayh0b2RvLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgIC8+KX1cbiAgICA8L3VsPlxuXG4gICk7XG59O1xuXG5jb25zdCBMaW5rID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZlLCBvbkNsaWNrIH0gPSBwcm9wcztcblxuICBpZiAoYWN0aXZlKSB7XG4gICAgcmV0dXJuIDxzcGFuPntwcm9wcy5jaGlsZHJlbn08L3NwYW4+O1xuICB9XG5cbiAgcmV0dXJuIChcblxuICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgIG9uQ2xpY2soKTtcbiAgICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2E+XG5cbiAgKTtcbn07XG5cbmNvbnN0IEZpbHRlckxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8TGluayBhY3RpdmU9e1xuICAgICAgICB0aGlzLnByb3BzLmZpbHRlciA9PT0gc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0eXBlID0gXCJTRVRfVklTSUJJTElUWV9GSUxURVJcIixcbiAgICAgICAgICAgICAgICB7IGZpbHRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvTGluaz5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5sZXQgbmV4dFRvZG9JZCA9IDA7XG5jb25zdCBBZGRUb2RvID0gKHByb3BzLCB7c3RvcmV9KSA9PiB7XG4gIGxldCBpbnB1dDtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCByZWY9e2RvbUVsZW1lbnQgPT4ge1xuICAgICAgICBpbnB1dCA9IGRvbUVsZW1lbnQ7XG4gICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlID0gXCJBRERfVE9ET1wiLFxuICAgICAgICAgIHsgdmFsdWUgfSA9IGlucHV0LFxuICAgICAgICAgIHRleHQgPSB2YWx1ZSwgLy8vXG4gICAgICAgICAgaWQgPSBuZXh0VG9kb0lkKys7XG5cbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBpZFxuICAgICAgICB9KTtcblxuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICB9fVxuICAgICAgPlxuICAgICAgICBBZGQgdG9kb1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmNsYXNzIFZpc2libGVUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFRvZG9MaXN0IHRvZG9zPXtcbiAgICAgICAgZ2V0VmlzaWJsZVRvZG9zKFxuICAgICAgICAgIHN0YXRlLnRvZG9zLFxuICAgICAgICAgIHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrPXsoaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBcIlRPR0dMRV9UT0RPXCI7XG5cbiAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8cD5cbiAgICAgIHtcIlNob3c6IFwifVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPVwiU0hPV19BTExcIj5cbiAgICAgICAgQWxsXG4gICAgICA8L0ZpbHRlckxpbms+XG4gICAgICB7XCIgLSBcIn1cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj1cIlNIT1dfQ09NUExFVEVEXCI+XG4gICAgICAgIENvbXBsZXRlZFxuICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAge1wiIC0gXCJ9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9XCJTSE9XX0FDVElWRVwiPlxuICAgICAgICBBY3RpdmVcbiAgICAgIDwvRmlsdGVyTGluaz5cbiAgICA8L3A+XG5cbiAgKTtcbn07XG5cbmNvbnN0IFRvZG9BcHAgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgPEFkZFRvZG8gLz5cbiAgICAgIDxWaXNpYmxlVG9kb0xpc3QgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmVcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG59XG5cbmNvbnN0IHJlZHV4QXBwID0gKCkgPT4ge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHRvZG9BcHApLFxuICAgICAgICByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8VG9kb0FwcCAvPlxuICAgICAgPC9Qcm92aWRlcj5cblxuICAgICxcbiAgICByb290RE9NRWxlbWVudFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1eEFwcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcIi4uL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcIi4uL3JlYWN0RE9NXCI7XG5cbmNvbnN0IENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudCBtb3VudGVkIHdpdGggbWVzc2FnZTogXCIgKyBtZXNzYWdlKVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgY29uc29sZS5sb2coXCJDb21tZW50IHVubW91bnRlZCB3aXRoIG1lc3NhZ2U6IFwiICsgbWVzc2FnZSlcbiAgfVxufSk7XG5cbmNvbnN0IENvbW1lbnRzTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgXCJIZWxsbywgd29ybGQhXCIsXG4gICAgICAgICAgICBcIkhlbGxvIHdvcmxkIGFnYWluLi4uXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbW1lbnRzIGxpc3QgbW91bnRlZC5cIilcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgbWVzc2FnZXMgfSA9IHN0YXRlLFxuICAgICAgICAgIGNvbW1lbnRzID0gbWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PlxuXG4gICAgICAgICAgICA8Q29tbWVudCBtZXNzYWdlPXttZXNzYWdlfSAvPlxuXG4gICAgICAgICAgKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHMtbGlzdFwiPlxuICAgICAgICB7Y29tbWVudHN9XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5jb25zdCB2YW5pbGxhQXBwID0gKCkgPT4ge1xuICBjb25zdCBjb21tZW50c0xpc3QgPVxuXG4gICAgICAgICAgPENvbW1lbnRzTGlzdCAvPlxuXG4gICAgICAgICxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cblxuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgY29tbWVudHNMaXN0LFxuICAgIHJvb3RET01FbGVtZW50XG4gICk7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgeWV0IGFnYWluISEhXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXNcbiAgICAgICAgICB9O1xuXG4gICAgY29tbWVudHNMaXN0LnNldFN0YXRlKHN0YXRlKTtcbiAgfSwgMTAwMCk7IC8vL1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB2YW5pbGxhQXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmdldEF0dHJpYnV0ZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5jbGVhckF0dHJpYnV0ZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IFxuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5yZW1vdmVBdHRyaWJ1dGUobmFtZSlcbn1cblxuZnVuY3Rpb24gaGFzQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmhhc0F0dHJpYnV0ZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gc2V0Q2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnNldENsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5hZGRDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3NlcyhjbGFzc05hbWVzKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5oYXNDbGFzc2VzKGNsYXNzTmFtZXMpO1xufVxuXG5mdW5jdGlvbiBjbGVhckNsYXNzZXMoKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLmNsZWFyQ2xhc3NlcygpO1xufVxuXG5mdW5jdGlvbiBnZXRUYWdOYW1lKCkge1xuICByZXR1cm4gbnVsbDsgIC8vL1xufVxuXG5mdW5jdGlvbiBzZXRTdHlsZShuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5zZXRTdHlsZShuYW1lLCB2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZSxcbiAgY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlLFxuICBoYXNBdHRyaWJ1dGUsXG4gIHNldENsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzcyxcbiAgaGFzQ2xhc3NlcyxcbiAgY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lLFxuICBzZXRTdHlsZVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgPT09IFwiY2xhc3NOYW1lXCIpIHtcbiAgICBuYW1lID0gXCJjbGFzc1wiO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IFwiaHRtbEZvclwiKSB7XG4gICAgbmFtZSA9IFwiZm9yXCI7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gaGFzQ2xhc3NlcyhjbGFzc05hbWVzKSB7IHJldHVybiBjbGFzc05hbWVzLmV2ZXJ5KChjbGFzc05hbWUpID0+IHRoaXMuaGFzQ2xhc3MoY2xhc3NOYW1lKSk7IH1cblxuZnVuY3Rpb24gY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjsgfVxuXG5mdW5jdGlvbiBnZXRUYWdOYW1lKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnRhZ05hbWU7IH1cblxuZnVuY3Rpb24gc2V0U3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZSxcbiAgY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlLFxuICBoYXNBdHRyaWJ1dGUsXG4gIHNldENsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzcyxcbiAgaGFzQ2xhc3NlcyxcbiAgY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lLFxuICBzZXRTdHlsZVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZShcIi4vZWxlbWVudFwiKSxcbiAgICAgIFJlYWN0Q2xhc3MgPSByZXF1aXJlKFwiLi9yZWFjdENsYXNzXCIpLFxuICAgICAgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuL3V0aWxpdGllcy9uYW1lXCIpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi91dGlsaXRpZXMvYXJyYXlcIiksXG4gICAgICBSZWFjdENvbXBvbmVudCA9IHJlcXVpcmUoXCIuL3JlYWN0Q29tcG9uZW50XCIpLFxuICAgICAgUmVhY3RDbGFzc0VsZW1lbnQgPSByZXF1aXJlKFwiLi9lbGVtZW50L3JlYWN0L2NsYXNzXCIpLFxuICAgICAgUmVhY3RGdW5jdGlvbkVsZW1lbnQgPSByZXF1aXJlKFwiLi9lbGVtZW50L3JlYWN0L2Z1bmN0aW9uXCIpLFxuICAgICAgUmVhY3RDb21wb25lbnRFbGVtZW50ID0gcmVxdWlyZShcIi4vZWxlbWVudC9yZWFjdC9jb21wb25lbnRcIiksXG4gICAgICBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQgPSByZXF1aXJlKFwiLi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL3RleHRFbGVtZW50XCIpLFxuICAgICAgVmlydHVhbERPTUhUTUxFbGVtZW50ID0gcmVxdWlyZShcIi4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZS9lbGVtZW50L2h0bWxcIiksXG4gICAgICBWaXJ0dWFsRE9NU1ZHRWxlbWVudCA9IHJlcXVpcmUoXCIuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC9zdmdcIik7XG5cbmNvbnN0IHsgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGlzU1ZHVGFnTmFtZSB9ID0gbmFtZVV0aWxpdGllcztcblxuZnVuY3Rpb24gY3JlYXRlQ2xhc3Mob2JqZWN0KSB7XG4gIHJldHVybiBSZWFjdENsYXNzLmNyZWF0ZShvYmplY3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkQXJndW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyksXG4gICAgICAgICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgdmlydHVhbERPTUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWaXJ0dWFsRE9NU1ZHRWxlbWVudCh0YWdOYW1lLCBwcm9wcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZpcnR1YWxET01IVE1MRWxlbWVudCh0YWdOYW1lLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSB2aXJ0dWFsRE9NRWxlbWVudCAvLy9cbiAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICBjb25zdCByZWFjdENsYXNzID0gZmlyc3RBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICByZWFjdENsYXNzRWxlbWVudCA9IG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENsYXNzRWxlbWVudDsgIC8vL1xuXG4gICAgICBjb25zdCB7IG1peGlucyB9ID0gcmVhY3RDbGFzcztcblxuICAgICAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgUmVhY3RDb21wb25lbnQpKSB7XG4gICAgICBjb25zdCBSZWFjdENvbXBvbmVudCA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50KCksXG4gICAgICAgICAgICByZWFjdENvbXBvbmVudEVsZW1lbnQgPSBuZXcgUmVhY3RDb21wb25lbnRFbGVtZW50KHJlYWN0Q29tcG9uZW50LCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENvbXBvbmVudEVsZW1lbnQ7ICAvLy9cblxuICAgICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnQsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc3QgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0RnVuY3Rpb25FbGVtZW50ID0gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0RnVuY3Rpb25FbGVtZW50OyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQsIC8vL1xuICAgICAgUmVhY3QgPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgY3JlYXRlQ2xhc3MsXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRcbiAgICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSB7XG4gIGNoaWxkQXJndW1lbnRzID0gZmxhdHRlbihjaGlsZEFyZ3VtZW50cyk7IC8vL1xuXG4gIGNvbnN0IGNoaWxkcmVuID0gY2hpbGRBcmd1bWVudHMubWFwKChjaGlsZEFyZ3VtZW50KSA9PiB7XG4gICAgbGV0IGNoaWxkO1xuXG4gICAgaWYgKGlzU3ViY2xhc3NPZihjaGlsZEFyZ3VtZW50LmNvbnN0cnVjdG9yLCBFbGVtZW50KSkgeyAvLy9cbiAgICAgIGNoaWxkID0gY2hpbGRBcmd1bWVudDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gY2hpbGRBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICB2aXJ0dWFsRE9NVGV4dEVsZW1lbnQgPSBuZXcgVmlydHVhbERPTVRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBjaGlsZCA9IHZpcnR1YWxET01UZXh0RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMocmVhY3RDb21wb25lbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBtaXhpbnMgfSA9IHJlYWN0Q29tcG9uZW50O1xuXG4gIHJlYWN0Q29tcG9uZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHJlYWN0Q29tcG9uZW50KTsgLy8vXG5cbiAgaWYgKHJlYWN0Q29tcG9uZW50ICE9PSBSZWFjdENvbXBvbmVudCkge1xuICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKHJlYWN0Q29tcG9uZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KSB7XG4gIGlmIChtaXhpbnMpIHtcbiAgICBtaXhpbnMuZm9yRWFjaCgobWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gbWl4aW47XG5cbiAgICAgIGVsZW1lbnRbbmFtZV0gPSBtaXhpbi5iaW5kKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHN1YmNsYXNzID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgLy8vXG4gICAgc3ViY2xhc3MgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN1YmNsYXNzID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YmNsYXNzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNsYXNzIFJlYWN0Q2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucykge1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyO1xuXG4gICAgaWYgKGdldEluaXRpYWxTdGF0ZSkgeyB0aGlzLmdldEluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZTsgfVxuICAgIGlmIChnZXRDaGlsZENvbnRleHQpIHsgdGhpcy5nZXRDaGlsZENvbnRleHQgPSBnZXRDaGlsZENvbnRleHQ7IH1cbiAgICBpZiAoY29tcG9uZW50RGlkTW91bnQpIHsgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50OyB9XG4gICAgaWYgKGNvbXBvbmVudFdpbGxVbm1vdW50KSB7IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSBjb21wb25lbnRXaWxsVW5tb3VudDsgfVxuXG4gICAgdGhpcy5taXhpbnMgPSBtaXhpbnM7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKG9iamVjdCkge1xuICAgIGNvbnN0IHsgcmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMgfSA9IG9iamVjdDtcblxuICAgIHJldHVybiBuZXcgUmVhY3RDbGFzcyhyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNsYXNzIFJlYWN0Q29tcG9uZW50IHtcblxuXG5cblxuXG5cblxuXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBcbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgXG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxuXG5cblxuXG5cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFZpcnR1YWxET01Ob2RlID0gcmVxdWlyZShcIi4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZVwiKTtcblxuY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBWaXJ0dWFsRE9NTm9kZS5mcm9tRE9NRWxlbWVudChwYXJlbnRET01FbGVtZW50KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSB7fTtcblxuICAgIGVsZW1lbnQubW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxuZnVuY3Rpb24gcmVtYWluaW5nKGVsZW1lbnQsIGFycmF5KSB7XG4gIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgY29uc3QgaW5kZXggPSBpbmRleE9mKGVsZW1lbnQsIGFycmF5KTtcblxuICByZXR1cm4gYXJyYXkuc2xpY2UoaW5kZXggKyAxKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZpcnN0LFxuICBmbGF0dGVuLFxuICBndWFyYW50ZWUsXG4gIHJlbWFpbmluZ1xufTtcblxuZnVuY3Rpb24gaW5kZXhPZihlbGVtZW50LCBhcnJheSkge1xuICBsZXQgaW5kZXggPSBudWxsO1xuXG4gIGFycmF5LnNvbWUoKGN1cnJlbnRFbGVtZW50LCBjdXJyZW50RWxlbWVudEluZGV4KSA9PiB7XG4gICAgaWYgKGN1cnJlbnRFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICBpbmRleCA9IGN1cnJlbnRFbGVtZW50SW5kZXg7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSB7XG4gIHJldHVybiBzdmdUYWdOYW1lcy5pbmNsdWRlcyh0YWdOYW1lKTtcbn1cblxuZnVuY3Rpb24gaXNTVkdBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcmV0dXJuIHN2Z0F0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5mdW5jdGlvbiBpc0hUTUxBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcmV0dXJuIGh0bWxBdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzU1ZHVGFnTmFtZSxcbiAgaXNTVkdBdHRyaWJ1dGVOYW1lLFxuICBpc0hUTUxBdHRyaWJ1dGVOYW1lXG59O1xuXG5jb25zdCBzdmdUYWdOYW1lcyA9IFtcbiAgICAgICAgXCJhbHRHbHlwaFwiLCBcImFuaW1hdGVcIiwgXCJhbmltYXRlQ29sb3JcIiwgXCJhbmltYXRlTW90aW9uXCIsIFwiYW5pbWF0ZVRyYW5zZm9ybVwiLCBcImFuaW1hdGlvblwiLCBcImF1ZGlvXCIsXG4gICAgICAgIFwiY2lyY2xlXCIsIFwiY2xpcFBhdGhcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY3Vyc29yXCIsXG4gICAgICAgIFwiZGVmc1wiLCBcImRlc2NcIiwgXCJkaXNjYXJkXCIsXG4gICAgICAgIFwiZWxsaXBzZVwiLFxuICAgICAgICBcImZlQmxlbmRcIiwgXCJmZUNvbG9yTWF0cml4XCIsIFwiZmVDb21wb25lbnRUcmFuc2ZlclwiLCBcImZlQ29tcG9zaXRlXCIsIFwiZmVDb252b2x2ZU1hdHJpeFwiLCBcImZlRGlmZnVzZUxpZ2h0aW5nXCIsIFwiZmVEaXNwbGFjZW1lbnRNYXBcIiwgXCJmZURpc3RhbnRMaWdodFwiLCBcImZlRHJvcFNoYWRvd1wiLCBcImZlRmxvb2RcIiwgXCJmZUZ1bmNBXCIsIFwiZmVGdW5jQlwiLCBcImZlRnVuY0dcIiwgXCJmZUZ1bmNSXCIsIFwiZmVHYXVzc2lhbkJsdXJcIiwgXCJmZUltYWdlXCIsIFwiZmVNZXJnZVwiLCBcImZlTWVyZ2VOb2RlXCIsIFwiZmVNb3JwaG9sb2d5XCIsIFwiZmVPZmZzZXRcIiwgXCJmZVBvaW50TGlnaHRcIiwgXCJmZVNwZWN1bGFyTGlnaHRpbmdcIiwgXCJmZVNwb3RMaWdodFwiLCBcImZlVGlsZVwiLCBcImZlVHVyYnVsZW5jZVwiLCBcImZpbHRlclwiLCBcImZvbnRcIiwgXCJmb250LWZhY2VcIiwgXCJmb250LWZhY2UtZm9ybWF0XCIsIFwiZm9udC1mYWNlLW5hbWVcIiwgXCJmb250LWZhY2UtdXJpXCIsIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgICAgICBcImdcIiwgXCJnbHlwaFwiLCBcImdseXBoUmVmXCIsXG4gICAgICAgIFwiaGFuZGxlclwiLCBcImhhdGNoXCIsIFwiaGF0Y2hwYXRoXCIsIFwiaGtlcm5cIixcbiAgICAgICAgXCJpbWFnZVwiLCBcImxpbmVcIiwgXCJsaW5lYXJHcmFkaWVudFwiLFxuICAgICAgICBcImxpc3RlbmVyXCIsXG4gICAgICAgIFwibWFya2VyXCIsIFwibWFza1wiLCBcIm1lc2hcIiwgXCJtZXNoZ3JhZGllbnRcIiwgXCJtZXNocGF0Y2hcIiwgXCJtZXNocm93XCIsIFwibWV0YWRhdGFcIiwgXCJtaXNzaW5nLWdseXBoXCIsIFwibXBhdGhcIixcbiAgICAgICAgXCJwYXRoXCIsIFwicGF0dGVyblwiLCBcInBvbHlnb25cIiwgXCJwb2x5bGluZVwiLCBcInByZWZldGNoXCIsXG4gICAgICAgIFwicmFkaWFsR3JhZGllbnRcIiwgXCJyZWN0XCIsXG4gICAgICAgIFwic2NyaXB0XCIsIFwic2V0XCIsIFwic29saWRjb2xvclwiLCBcInN0b3BcIiwgXCJzdHlsZVwiLCBcInN2Z1wiLCBcInN3aXRjaFwiLCBcInN5bWJvbFwiLFxuICAgICAgICBcInRicmVha1wiLCBcInRleHRcIiwgXCJ0ZXh0QXJlYVwiLCBcInRleHRQYXRoXCIsIFwidGl0bGVcIiwgXCJ0cmVmXCIsIFwidHNwYW5cIixcbiAgICAgICAgXCJ1bmtub3duXCIsIFwidXNlXCIsXG4gICAgICAgIFwidmlkZW9cIiwgXCJ2aWV3XCIsIFwidmtlcm5cIlxuICAgICAgXSxcbiAgICAgIHN2Z0F0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgICBcImFjY2VudC1oZWlnaHRcIiwgXCJhY2N1bXVsYXRlXCIsIFwiYWRkaXRpdmVcIiwgXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJhbHBoYWJldGljXCIsIFwiYW1wbGl0dWRlXCIsIFwiYXJhYmljLWZvcm1cIiwgXCJhc2NlbnRcIiwgXCJhdHRyaWJ1dGVOYW1lXCIsIFwiYXR0cmlidXRlVHlwZVwiLCBcImF6aW11dGhcIixcbiAgICAgICAgXCJiYW5kd2lkdGhcIiwgXCJiYXNlRnJlcXVlbmN5XCIsIFwiYmFzZVByb2ZpbGVcIiwgXCJiYXNlbGluZS1zaGlmdFwiLCBcImJib3hcIiwgXCJiZWdpblwiLCBcImJpYXNcIiwgXCJieVwiLFxuICAgICAgICBcImNhbGNNb2RlXCIsIFwiY2FwLWhlaWdodFwiLCBcImNsaXBcIiwgXCJjbGFzc05hbWVcIiwgXCJjbGlwLXBhdGhcIiwgXCJjbGlwLXJ1bGVcIiwgXCJjbGlwUGF0aFVuaXRzXCIsIFwiY29sb3JcIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uXCIsIFwiY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzXCIsIFwiY29sb3ItcHJvZmlsZVwiLCBcImNvbG9yLXJlbmRlcmluZ1wiLCBcImNvbnRlbnRTY3JpcHRUeXBlXCIsIFwiY29udGVudFN0eWxlVHlwZVwiLCBcImNyb3Nzb3JpZ2luXCIsIFwiY3Vyc29yXCIsIFwiY3hcIiwgXCJjeVwiLFxuICAgICAgICBcImRcIiwgXCJkZWZhdWx0QWN0aW9uXCIsIFwiZGVzY2VudFwiLCBcImRpZmZ1c2VDb25zdGFudFwiLCBcImRpcmVjdGlvblwiLCBcImRpc3BsYXlcIiwgXCJkaXZpc29yXCIsIFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJkb3dubG9hZFwiLCBcImR1clwiLCBcImR4XCIsIFwiZHlcIixcbiAgICAgICAgXCJlZGdlTW9kZVwiLCBcImVkaXRhYmxlXCIsIFwiZWxldmF0aW9uXCIsIFwiZW5hYmxlLWJhY2tncm91bmRcIiwgXCJlbmRcIiwgXCJldmVudFwiLCBcImV4cG9uZW50XCIsIFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFxuICAgICAgICBcImZpbGxcIiwgXCJmaWxsLW9wYWNpdHlcIiwgXCJmaWxsLXJ1bGVcIiwgXCJmaWx0ZXJcIiwgXCJmaWx0ZXJSZXNcIiwgXCJmaWx0ZXJVbml0c1wiLCBcImZsb29kLWNvbG9yXCIsIFwiZmxvb2Qtb3BhY2l0eVwiLCBcImZvY3VzSGlnaGxpZ2h0XCIsIFwiZm9jdXNhYmxlXCIsIFwiZm9udC1mYW1pbHlcIiwgXCJmb250LXNpemVcIiwgXCJmb250LXNpemUtYWRqdXN0XCIsIFwiZm9udC1zdHJldGNoXCIsIFwiZm9udC1zdHlsZVwiLCBcImZvbnQtdmFyaWFudFwiLCBcImZvbnQtd2VpZ2h0XCIsIFwiZm9ybWF0XCIsIFwiZnJcIiwgXCJmcm9tXCIsIFwiZnhcIiwgXCJmeVwiLFxuICAgICAgICBcImcxXCIsIFwiZzJcIiwgXCJnbHlwaC1uYW1lXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbFwiLCBcImdseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsXCIsIFwiZ2x5cGhSZWZcIiwgXCJncmFkaWVudFRyYW5zZm9ybVwiLCBcImdyYWRpZW50VW5pdHNcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGFuZ2luZ1wiLCBcImhhdGNoQ29udGVudFVuaXRzXCIsIFwiaGF0Y2hVbml0c1wiLCBcImhlaWdodFwiLCBcImhvcml6LWFkdi14XCIsIFwiaG9yaXotb3JpZ2luLXhcIiwgXCJob3Jpei1vcmlnaW4teVwiLCBcImhyZWZcIiwgXCJocmVmbGFuZ1wiLFxuICAgICAgICBcImlkZW9ncmFwaGljXCIsIFwiaW1hZ2UtcmVuZGVyaW5nXCIsIFwiaW5cIiwgXCJpbjJcIiwgXCJpbml0aWFsVmlzaWJpbGl0eVwiLCBcImludGVyY2VwdFwiLFxuICAgICAgICBcImtcIiwgXCJrMVwiLCBcImsyXCIsIFwiazNcIiwgXCJrNFwiLCBcImtlcm5lbE1hdHJpeFwiLCBcImtlcm5lbFVuaXRMZW5ndGhcIiwgXCJrZXJuaW5nXCIsIFwia2V5UG9pbnRzXCIsIFwia2V5U3BsaW5lc1wiLCBcImtleVRpbWVzXCIsXG4gICAgICAgIFwibGVuZ3RoQWRqdXN0XCIsIFwibGV0dGVyLXNwYWNpbmdcIiwgXCJsaWdodGluZy1jb2xvclwiLCBcImxpbWl0aW5nQ29uZUFuZ2xlXCIsIFwibG9jYWxcIixcbiAgICAgICAgXCJtYXJrZXItZW5kXCIsIFwibWFya2VyLW1pZFwiLCBcIm1hcmtlci1zdGFydFwiLCBcIm1hcmtlckhlaWdodFwiLCBcIm1hcmtlclVuaXRzXCIsIFwibWFya2VyV2lkdGhcIiwgXCJtYXNrXCIsIFwibWFza0NvbnRlbnRVbml0c1wiLCBcIm1hc2tVbml0c1wiLCBcIm1hdGhlbWF0aWNhbFwiLCBcIm1heFwiLCBcIm1lZGlhXCIsIFwibWVkaWFDaGFyYWN0ZXJFbmNvZGluZ1wiLCBcIm1lZGlhQ29udGVudEVuY29kaW5nc1wiLCBcIm1lZGlhU2l6ZVwiLCBcIm1lZGlhVGltZVwiLCBcIm1ldGhvZFwiLCBcIm1pblwiLCBcIm1vZGVcIixcbiAgICAgICAgXCJuYW1lXCIsIFwibmF2LWRvd25cIiwgXCJuYXYtZG93bi1sZWZ0XCIsIFwibmF2LWRvd24tcmlnaHRcIiwgXCJuYXYtbGVmdFwiLCBcIm5hdi1uZXh0XCIsIFwibmF2LXByZXZcIiwgXCJuYXYtcmlnaHRcIiwgXCJuYXYtdXBcIiwgXCJuYXYtdXAtbGVmdFwiLCBcIm5hdi11cC1yaWdodFwiLCBcIm51bU9jdGF2ZXNcIixcbiAgICAgICAgXCJvYnNlcnZlclwiLCBcIm9mZnNldFwiLCBcIm9wYWNpdHlcIiwgXCJvcGVyYXRvclwiLCBcIm9yZGVyXCIsIFwib3JpZW50XCIsIFwib3JpZW50YXRpb25cIiwgXCJvcmlnaW5cIiwgXCJvdmVyZmxvd1wiLCBcIm92ZXJsYXlcIiwgXCJvdmVybGluZS1wb3NpdGlvblwiLCBcIm92ZXJsaW5lLXRoaWNrbmVzc1wiLFxuICAgICAgICBcInBhbm9zZS0xXCIsIFwicGF0aFwiLCBcInBhdGhMZW5ndGhcIiwgXCJwYXR0ZXJuQ29udGVudFVuaXRzXCIsIFwicGF0dGVyblRyYW5zZm9ybVwiLCBcInBhdHRlcm5Vbml0c1wiLCBcInBoYXNlXCIsIFwicGl0Y2hcIiwgXCJwbGF5YmFja09yZGVyXCIsIFwicGxheWJhY2tvcmRlclwiLCBcInBvaW50ZXItZXZlbnRzXCIsIFwicG9pbnRzXCIsIFwicG9pbnRzQXRYXCIsIFwicG9pbnRzQXRZXCIsIFwicG9pbnRzQXRaXCIsIFwicHJlc2VydmVBbHBoYVwiLCBcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJwcmltaXRpdmVVbml0c1wiLCBcInByb3BhZ2F0ZVwiLFxuICAgICAgICBcInJcIiwgXCJyYWRpdXNcIiwgXCJyZWZYXCIsIFwicmVmWVwiLCBcInJlbmRlcmluZy1pbnRlbnRcIiwgXCJyZXBlYXRDb3VudFwiLCBcInJlcGVhdER1clwiLCBcInJlcXVpcmVkRXh0ZW5zaW9uc1wiLCBcInJlcXVpcmVkRmVhdHVyZXNcIiwgXCJyZXF1aXJlZEZvbnRzXCIsIFwicmVxdWlyZWRGb3JtYXRzXCIsIFwicmVzdGFydFwiLCBcInJlc3VsdFwiLCBcInJvdGF0ZVwiLCBcInJ4XCIsIFwicnlcIixcbiAgICAgICAgXCJzY2FsZVwiLCBcInNlZWRcIiwgXCJzaGFwZS1yZW5kZXJpbmdcIiwgXCJzaWRlXCIsIFwic2xvcGVcIiwgXCJzbmFwc2hvdFRpbWVcIiwgXCJzcGFjaW5nXCIsIFwic3BlY3VsYXJDb25zdGFudFwiLCBcInNwZWN1bGFyRXhwb25lbnRcIiwgXCJzcHJlYWRNZXRob2RcIiwgXCJzcmNcIiwgXCJzdGFydE9mZnNldFwiLCBcInN0ZERldmlhdGlvblwiLCBcInN0ZW1oXCIsIFwic3RlbXZcIiwgXCJzdGl0Y2hUaWxlc1wiLCBcInN0b3AtY29sb3JcIiwgXCJzdG9wLW9wYWNpdHlcIiwgXCJzdHJpa2V0aHJvdWdoLXBvc2l0aW9uXCIsIFwic3RyaWtldGhyb3VnaC10aGlja25lc3NcIiwgXCJzdHJpbmdcIiwgXCJzdHJva2VcIiwgXCJzdHJva2UtZGFzaGFycmF5XCIsIFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgXCJzdHJva2UtbGluZWNhcFwiLCBcInN0cm9rZS1saW5lam9pblwiLCBcInN0cm9rZS1taXRlcmxpbWl0XCIsIFwic3Ryb2tlLW9wYWNpdHlcIiwgXCJzdHJva2Utd2lkdGhcIiwgXCJzdHlsZVwiLCBcInN1cmZhY2VTY2FsZVwiLCBcInN5bmNCZWhhdmlvclwiLCBcInN5bmNCZWhhdmlvckRlZmF1bHRcIiwgXCJzeW5jTWFzdGVyXCIsIFwic3luY1RvbGVyYW5jZVwiLCBcInN5bmNUb2xlcmFuY2VEZWZhdWx0XCIsIFwic3lzdGVtTGFuZ3VhZ2VcIixcbiAgICAgICAgXCJ0YWJsZVZhbHVlc1wiLCBcInRhcmdldFwiLCBcInRhcmdldFhcIiwgXCJ0YXJnZXRZXCIsIFwidGV4dC1hbmNob3JcIiwgXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJ0ZXh0LXJlbmRlcmluZ1wiLCBcInRleHRMZW5ndGhcIiwgXCJ0aW1lbGluZUJlZ2luXCIsIFwidGltZWxpbmViZWdpblwiLCBcInRpdGxlXCIsIFwidG9cIiwgXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2Zvcm1CZWhhdmlvclwiLCBcInR5cGVcIixcbiAgICAgICAgXCJ1MVwiLCBcInUyXCIsIFwidW5kZXJsaW5lLXBvc2l0aW9uXCIsIFwidW5kZXJsaW5lLXRoaWNrbmVzc1wiLCBcInVuaWNvZGVcIiwgXCJ1bmljb2RlLWJpZGlcIiwgXCJ1bmljb2RlLXJhbmdlXCIsIFwidW5pdHMtcGVyLWVtXCIsXG4gICAgICAgIFwidi1hbHBoYWJldGljXCIsIFwidi1oYW5naW5nXCIsIFwidi1pZGVvZ3JhcGhpY1wiLCBcInYtbWF0aGVtYXRpY2FsXCIsIFwidmFsdWVzXCIsIFwidmVyc2lvblwiLCBcInZlcnQtYWR2LXlcIiwgXCJ2ZXJ0LW9yaWdpbi14XCIsIFwidmVydC1vcmlnaW4teVwiLCBcInZpZXdCb3hcIiwgXCJ2aWV3VGFyZ2V0XCIsIFwidmlzaWJpbGl0eVwiLFxuICAgICAgICBcIndpZHRoXCIsIFwid2lkdGhzXCIsIFwid29yZC1zcGFjaW5nXCIsIFwid3JpdGluZy1tb2RlXCIsXG4gICAgICAgIFwieFwiLCBcIngtaGVpZ2h0XCIsIFwieDFcIiwgXCJ4MlwiLCBcInhDaGFubmVsU2VsZWN0b3JcIixcbiAgICAgICAgXCJ5XCIsIFwieTFcIiwgXCJ5MlwiLCBcInlDaGFubmVsU2VsZWN0b3JcIixcbiAgICAgICAgXCJ6XCIsIFwiem9vbUFuZFBhblwiXG4gICAgICBdLFxuICAgICAgaHRtbEF0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgICBcImFjY2VwdFwiLCBcImFjY2VwdENoYXJzZXRcIiwgXCJhY2Nlc3NLZXlcIiwgXCJhY3Rpb25cIiwgXCJhbGxvd1wiLCBcImFsbG93RnVsbFNjcmVlblwiLCBcImFsbG93VHJhbnNwYXJlbmN5XCIsIFwiYWx0XCIsIFwiYXN5bmNcIiwgXCJhdXRvQ29tcGxldGVcIiwgXCJhdXRvRm9jdXNcIiwgXCJhdXRvUGxheVwiLFxuICAgICAgICBcImNhcHR1cmVcIiwgXCJjZWxsUGFkZGluZ1wiLCBcImNlbGxTcGFjaW5nXCIsIFwiY2hhbGxlbmdlXCIsIFwiY2hhclNldFwiLCBcImNoZWNrZWRcIiwgXCJjaXRlXCIsIFwiY2xhc3NJRFwiLCBcImNsYXNzTmFtZVwiLCBcImNvbFNwYW5cIiwgXCJjb2xzXCIsIFwiY29udGVudFwiLCBcImNvbnRlbnRFZGl0YWJsZVwiLCBcImNvbnRleHRNZW51XCIsIFwiY29udHJvbHNcIiwgXCJjb29yZHNcIiwgXCJjcm9zc09yaWdpblwiLFxuICAgICAgICBcImRhdGFcIiwgXCJkYXRlVGltZVwiLCBcImRlZmF1bHRcIiwgXCJkZWZlclwiLCBcImRpclwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJkcmFnZ2FibGVcIixcbiAgICAgICAgXCJlbmNUeXBlXCIsXG4gICAgICAgIFwiZm9ybVwiLCBcImZvcm1BY3Rpb25cIiwgXCJmb3JtRW5jVHlwZVwiLCBcImZvcm1NZXRob2RcIiwgXCJmb3JtTm9WYWxpZGF0ZVwiLCBcImZvcm1UYXJnZXRcIiwgXCJmcmFtZUJvcmRlclwiLFxuICAgICAgICBcImhlYWRlcnNcIiwgXCJoZWlnaHRcIiwgXCJoaWRkZW5cIiwgXCJoaWdoXCIsIFwiaHJlZlwiLCBcImhyZWZMYW5nXCIsIFwiaHRtbEZvclwiLCBcImh0dHBFcXVpdlwiLFxuICAgICAgICBcImljb25cIiwgXCJpZFwiLCBcImlucHV0TW9kZVwiLCBcImludGVncml0eVwiLCBcImlzXCIsXG4gICAgICAgIFwia2V5UGFyYW1zXCIsIFwia2V5VHlwZVwiLCBcImtpbmRcIixcbiAgICAgICAgXCJsYWJlbFwiLCBcImxhbmdcIiwgXCJsaXN0XCIsIFwibG9vcFwiLCBcImxvd1wiLFxuICAgICAgICBcIm1hbmlmZXN0XCIsIFwibWFyZ2luSGVpZ2h0XCIsIFwibWFyZ2luV2lkdGhcIiwgXCJtYXhcIiwgXCJtYXhMZW5ndGhcIiwgXCJtZWRpYVwiLCBcIm1lZGlhR3JvdXBcIiwgXCJtZXRob2RcIiwgXCJtaW5cIiwgXCJtaW5MZW5ndGhcIiwgXCJtdWx0aXBsZVwiLCBcIm11dGVkXCIsXG4gICAgICAgIFwibmFtZVwiLCBcIm5vVmFsaWRhdGVcIiwgXCJub25jZVwiLFxuICAgICAgICBcIm9wZW5cIiwgXCJvcHRpbXVtXCIsXG4gICAgICAgIFwicGF0dGVyblwiLCBcInBsYWNlaG9sZGVyXCIsIFwicG9zdGVyXCIsIFwicHJlbG9hZFwiLCBcInByb2ZpbGVcIixcbiAgICAgICAgXCJyYWRpb0dyb3VwXCIsIFwicmVhZE9ubHlcIiwgXCJyZWxcIiwgXCJyZXF1aXJlZFwiLCBcInJldmVyc2VkXCIsIFwicm9sZVwiLCBcInJvd1NwYW5cIiwgXCJyb3dzXCIsXG4gICAgICAgIFwic2FuZGJveFwiLCBcInNjb3BlXCIsIFwic2NvcGVkXCIsIFwic2Nyb2xsaW5nXCIsIFwic2VhbWxlc3NcIiwgXCJzZWxlY3RlZFwiLCBcInNoYXBlXCIsIFwic2l6ZVwiLCBcInNpemVzXCIsIFwic3BhblwiLCBcInNwZWxsQ2hlY2tcIiwgXCJzcmNcIiwgXCJzcmNEb2NcIiwgXCJzcmNMYW5nXCIsIFwic3JjU2V0XCIsIFwic3RhcnRcIiwgXCJzdGVwXCIsIFwic3R5bGVcIiwgXCJzdW1tYXJ5XCIsXG4gICAgICAgIFwidGFiSW5kZXhcIiwgXCJ0YXJnZXRcIiwgXCJ0aXRsZVwiLCBcInR5cGVcIixcbiAgICAgICAgXCJ1c2VNYXBcIixcbiAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICBcIndpZHRoXCIsXG4gICAgICAgIFwid21vZGVcIixcbiAgICAgICAgXCJ3cmFwXCJcbiAgICAgIF07XG4iXX0=
