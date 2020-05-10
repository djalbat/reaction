(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _array = require("./utilities/array");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      var firstChild = (0, _array.first)(this.children) || null;
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

exports["default"] = Element;

},{"./utilities/array":22}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
var _default = ReactElement;
exports["default"] = _default;

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

},{"../element":1,"../mixins/reactElement":16,"../utilities/array":22}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = ReactClassElement;

},{"../../element/react":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = ReactComponentElement;

},{"../../element/react":2}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = ReactFunctionElement;

},{"../../element/react":2}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = VirtualDOMNode;

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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
var _default = VirtualDOMElement;
exports["default"] = _default;

},{"../../mixins/virtualDOMElement":17,"../virtualDOMNode":6}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = VirtualDOMHTMLElement;

},{"../../../utilities/name":23,"../element":7}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = VirtualDOMSVGElement;

},{"../../../utilities/name":23,"../element":7}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = VirtualDOMTextElement;

},{"../virtualDOMNode":6}],11:[function(require,module,exports){
"use strict";

var _reduxApp = _interopRequireDefault(require("./examples/reduxApp"));

var _vanillaApp = _interopRequireDefault(require("./examples/vanillaApp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Object.assign(window, {
  reduxApp: _reduxApp["default"],
  vanillaApp: _vanillaApp["default"]
});

},{"./examples/reduxApp":13,"./examples/vanillaApp":14}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
var _default = Redux;
exports["default"] = _default;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reduxApp;

var _redux = _interopRequireDefault(require("./redux"));

var _index = require("../index");

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

///
var Component = _index.React.Component,
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
  return /*#__PURE__*/_index.React.createElement("li", {
    onClick: onClick,
    style: {
      textDecoration: completed ? "line-through" : "none"
    }
  }, text);
};

var TodoList = function TodoList(_ref2) {
  var todos = _ref2.todos,
      onTodoClick = _ref2.onTodoClick;
  return /*#__PURE__*/_index.React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/_index.React.createElement(Todo, {
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
    return /*#__PURE__*/_index.React.createElement("span", null, props.children);
  }

  return /*#__PURE__*/_index.React.createElement("a", {
    href: "#",
    onClick: function onClick(event) {
      event.preventDefault();

      _onClick();
    }
  }, props.children);
};

var FilterLink = _index.React.createClass({
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
    return /*#__PURE__*/_index.React.createElement(Link, {
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
  return /*#__PURE__*/_index.React.createElement("div", null, /*#__PURE__*/_index.React.createElement("input", {
    ref: function ref(domElement) {
      input = domElement;
    }
  }), /*#__PURE__*/_index.React.createElement("button", {
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
      return /*#__PURE__*/_index.React.createElement(TodoList, {
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
  return /*#__PURE__*/_index.React.createElement("p", null, "Show: ", /*#__PURE__*/_index.React.createElement(FilterLink, {
    filter: "SHOW_ALL"
  }, "All"), " - ", /*#__PURE__*/_index.React.createElement(FilterLink, {
    filter: "SHOW_COMPLETED"
  }, "Completed"), " - ", /*#__PURE__*/_index.React.createElement(FilterLink, {
    filter: "SHOW_ACTIVE"
  }, "Active"));
};

var TodoApp = function TodoApp() {
  return /*#__PURE__*/_index.React.createElement("div", null, /*#__PURE__*/_index.React.createElement(AddTodo, null), /*#__PURE__*/_index.React.createElement(VisibleTodoList, null), /*#__PURE__*/_index.React.createElement(Footer, null));
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

function reduxApp() {
  var store = createStore(todoApp),
      rootDOMElement = document.getElementById("root");

  _index.ReactDOM.render( /*#__PURE__*/_index.React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/_index.React.createElement(TodoApp, null)), rootDOMElement);
}

;

},{"../index":15,"./redux":12}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = vanillaApp;

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

function vanillaApp() {
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
}

;

},{"../react":18,"../reactDOM":21}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "React", {
  enumerable: true,
  get: function get() {
    return _react["default"];
  }
});
Object.defineProperty(exports, "ReactDOM", {
  enumerable: true,
  get: function get() {
    return _reactDOM["default"];
  }
});

var _react = _interopRequireDefault(require("./react"));

var _reactDOM = _interopRequireDefault(require("./reactDOM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./react":18,"./reactDOM":21}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _default = {
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
exports["default"] = _default;

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _default = {
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
exports["default"] = _default;

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("./element"));

var _reactClass = _interopRequireDefault(require("./reactClass"));

var _reactComponent2 = _interopRequireDefault(require("./reactComponent"));

var _class = _interopRequireDefault(require("./element/react/class"));

var _function = _interopRequireDefault(require("./element/react/function"));

var _component = _interopRequireDefault(require("./element/react/component"));

var _textElement = _interopRequireDefault(require("./element/virtualDOMNode/textElement"));

var _html = _interopRequireDefault(require("./element/virtualDOMNode/element/html"));

var _svg = _interopRequireDefault(require("./element/virtualDOMNode/element/svg"));

var _array = require("./utilities/array");

var _name = require("./utilities/name");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createClass(object) {
  return _reactClass["default"].create(object);
}

function createElement(firstArgument, properties) {
  var element = null;

  if (firstArgument !== undefined) {
    for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      remainingArguments[_key - 2] = arguments[_key];
    }

    var children = childrenFromRemainingArguments(remainingArguments),
        props = Object.assign({}, properties, {
      children: children
    });

    if (false) {///
    } else if (typeof firstArgument === "string") {
      var tagName = firstArgument,
          ///
      virtualDOMElement = (0, _name.isSVGTagName)(tagName) ? new _svg["default"](tagName, props) : new _html["default"](tagName, props);
      element = virtualDOMElement; ///
    } else if (firstArgument instanceof _reactClass["default"]) {
      var reactClass = firstArgument,
          ///
      reactClassElement = new _class["default"](reactClass, props);
      element = reactClassElement; ///

      var mixins = reactClass.mixins;
      assignMixins(mixins, element);
    } else if (isSubclassOf(firstArgument, _reactComponent2["default"])) {
      var _ReactComponent = firstArgument,
          ///
      reactComponent = new _ReactComponent(),
          reactComponentElement = new _component["default"](reactComponent, props);
      element = reactComponentElement; ///

      assignReactComponentMixins(_ReactComponent, element);
    } else if (typeof firstArgument === "function") {
      var reactFunction = firstArgument,
          ///
      reactFunctionElement = new _function["default"](reactFunction, props);
      element = reactFunctionElement; ///
    }
  }

  return element;
}

var Component = _reactComponent2["default"],
    ///
React = {
  Component: Component,
  createClass: createClass,
  createElement: createElement
};
var _default = React;
exports["default"] = _default;

function childrenFromRemainingArguments(remainingArguments) {
  remainingArguments = (0, _array.flatten)(remainingArguments); ///

  var children = remainingArguments.map(function (childArgument) {
    var child;

    if (isSubclassOf(childArgument.constructor, _element["default"])) {
      ///
      child = childArgument; ///
    } else {
      var text = childArgument,
          ///
      virtualDOMTextElement = new _textElement["default"](text);
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

  if (reactComponent !== _reactComponent2["default"]) {
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

},{"./element":1,"./element/react/class":3,"./element/react/component":4,"./element/react/function":5,"./element/virtualDOMNode/element/html":8,"./element/virtualDOMNode/element/svg":9,"./element/virtualDOMNode/textElement":10,"./reactClass":19,"./reactComponent":20,"./utilities/array":22,"./utilities/name":23}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = ReactClass;

},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = ReactComponent;

},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _virtualDOMNode = _interopRequireDefault(require("./element/virtualDOMNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReactDOM = /*#__PURE__*/function () {
  function ReactDOM() {
    _classCallCheck(this, ReactDOM);
  }

  _createClass(ReactDOM, null, [{
    key: "render",
    value: function render(element, parentDOMElement) {
      var parent = _virtualDOMNode["default"].fromDOMElement(parentDOMElement),
          reference = null,
          context = {};

      element.mount(parent, reference, context);
    }
  }]);

  return ReactDOM;
}();

exports["default"] = ReactDOM;

},{"./element/virtualDOMNode":6}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.first = first;
exports.flatten = flatten;
exports.guarantee = guarantee;
exports.remaining = remaining;

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

},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSVGTagName = isSVGTagName;
exports.isSVGAttributeName = isSVGAttributeName;
exports.isHTMLAttributeName = isHTMLAttributeName;

function isSVGTagName(tagName) {
  return svgTagNames.includes(tagName);
}

function isSVGAttributeName(attributeName) {
  return svgAttributeNames.includes(attributeName);
}

function isHTMLAttributeName(attributeName) {
  return htmlAttributeNames.includes(attributeName);
}

var svgTagNames = ["altGlyph", "animate", "animateColor", "animateMotion", "animateTransform", "animation", "audio", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "discard", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "handler", "hatch", "hatchpath", "hkern", "image", "line", "linearGradient", "listener", "marker", "mask", "mesh", "meshgradient", "meshpatch", "meshrow", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "prefetch", "radialGradient", "rect", "script", "set", "solidcolor", "stop", "style", "svg", "switch", "symbol", "tbreak", "text", "textArea", "textPath", "title", "tref", "tspan", "unknown", "use", "video", "view", "vkern"],
    svgAttributeNames = ["accent-height", "accumulate", "additive", "alignment-baseline", "alphabetic", "amplitude", "arabic-form", "ascent", "attributeName", "attributeType", "azimuth", "bandwidth", "baseFrequency", "baseProfile", "baseline-shift", "bbox", "begin", "bias", "by", "calcMode", "cap-height", "clip", "className", "clip-path", "clip-rule", "clipPathUnits", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "contentScriptType", "contentStyleType", "crossorigin", "cursor", "cx", "cy", "d", "defaultAction", "descent", "diffuseConstant", "direction", "display", "divisor", "dominant-baseline", "download", "dur", "dx", "dy", "edgeMode", "editable", "elevation", "enable-background", "end", "event", "exponent", "externalResourcesRequired", "fill", "fill-opacity", "fill-rule", "filter", "filterRes", "filterUnits", "flood-color", "flood-opacity", "focusHighlight", "focusable", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "format", "fr", "from", "fx", "fy", "g1", "g2", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "glyphRef", "gradientTransform", "gradientUnits", "handler", "hanging", "hatchContentUnits", "hatchUnits", "height", "horiz-adv-x", "horiz-origin-x", "horiz-origin-y", "href", "hreflang", "ideographic", "image-rendering", "in", "in2", "initialVisibility", "intercept", "k", "k1", "k2", "k3", "k4", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letter-spacing", "lighting-color", "limitingConeAngle", "local", "marker-end", "marker-mid", "marker-start", "markerHeight", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "max", "media", "mediaCharacterEncoding", "mediaContentEncodings", "mediaSize", "mediaTime", "method", "min", "mode", "name", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "numOctaves", "observer", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlay", "overline-position", "overline-thickness", "panose-1", "path", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "phase", "pitch", "playbackOrder", "playbackorder", "pointer-events", "points", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "propagate", "r", "radius", "refX", "refY", "rendering-intent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "requiredFonts", "requiredFormats", "restart", "result", "rotate", "rx", "ry", "scale", "seed", "shape-rendering", "side", "slope", "snapshotTime", "spacing", "specularConstant", "specularExponent", "spreadMethod", "src", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "string", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "surfaceScale", "syncBehavior", "syncBehaviorDefault", "syncMaster", "syncTolerance", "syncToleranceDefault", "systemLanguage", "tableValues", "target", "targetX", "targetY", "text-anchor", "text-decoration", "text-rendering", "textLength", "timelineBegin", "timelinebegin", "title", "to", "transform", "transformBehavior", "type", "u1", "u2", "underline-position", "underline-thickness", "unicode", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "values", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "viewBox", "viewTarget", "visibility", "width", "widths", "word-spacing", "writing-mode", "x", "x-height", "x1", "x2", "xChannelSelector", "y", "y1", "y2", "yChannelSelector", "z", "zoomAndPan"],
    htmlAttributeNames = ["accept", "acceptCharset", "accessKey", "action", "allow", "allowFullScreen", "allowTransparency", "alt", "async", "autoComplete", "autoFocus", "autoPlay", "capture", "cellPadding", "cellSpacing", "challenge", "charSet", "checked", "cite", "classID", "className", "colSpan", "cols", "content", "contentEditable", "contextMenu", "controls", "coords", "crossOrigin", "data", "dateTime", "default", "defer", "dir", "disabled", "download", "draggable", "encType", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "headers", "height", "hidden", "high", "href", "hrefLang", "htmlFor", "httpEquiv", "icon", "id", "inputMode", "integrity", "is", "keyParams", "keyType", "kind", "label", "lang", "list", "loop", "low", "manifest", "marginHeight", "marginWidth", "max", "maxLength", "media", "mediaGroup", "method", "min", "minLength", "multiple", "muted", "name", "noValidate", "nonce", "open", "optimum", "pattern", "placeholder", "poster", "preload", "profile", "radioGroup", "readOnly", "rel", "required", "reversed", "role", "rowSpan", "rows", "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "span", "spellCheck", "src", "srcDoc", "srcLang", "srcSet", "start", "step", "style", "summary", "tabIndex", "target", "title", "type", "useMap", "value", "width", "wmode", "wrap"];

},{}]},{},[11])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvZWxlbWVudC5qcyIsImxpYi9lbGVtZW50L3JlYWN0LmpzIiwibGliL2VsZW1lbnQvcmVhY3QvY2xhc3MuanMiLCJsaWIvZWxlbWVudC9yZWFjdC9jb21wb25lbnQuanMiLCJsaWIvZWxlbWVudC9yZWFjdC9mdW5jdGlvbi5qcyIsImxpYi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlLmpzIiwibGliL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC5qcyIsImxpYi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQvaHRtbC5qcyIsImxpYi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQvc3ZnLmpzIiwibGliL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvdGV4dEVsZW1lbnQuanMiLCJsaWIvZXhhbXBsZXMuanMiLCJsaWIvZXhhbXBsZXMvcmVkdXguanMiLCJsaWIvZXhhbXBsZXMvcmVkdXhBcHAuanMiLCJsaWIvZXhhbXBsZXMvdmFuaWxsYUFwcC5qcyIsImxpYi9pbmRleC5qcyIsImxpYi9taXhpbnMvcmVhY3RFbGVtZW50LmpzIiwibGliL21peGlucy92aXJ0dWFsRE9NRWxlbWVudC5qcyIsImxpYi9yZWFjdC5qcyIsImxpYi9yZWFjdENsYXNzLmpzIiwibGliL3JlYWN0Q29tcG9uZW50LmpzIiwibGliL3JlYWN0RE9NLmpzIiwibGliL3V0aWxpdGllcy9hcnJheS5qcyIsImxpYi91dGlsaXRpZXMvbmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7O0FBRUE7Ozs7Ozs7O0lBRXFCLE87QUFDbkIsbUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLLEtBQUwsR0FBYSxLQUFiO0FBRUEsU0FBSyxNQUFMLEdBQWMsSUFBZDtBQUVBLFNBQUssUUFBTCxHQUFnQixLQUFLLENBQUMsUUFBdEIsQ0FMaUIsQ0FLZ0I7QUFDbEM7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UCxjQVZPLEVBVVMsYUFWVCxFQVV3QixLQVZ4QixFQVUrQixXQVYvQixFQVU0QyxPQVY1QyxFQVVxRCxZQVZyRCxFQVVtRSxRQVZuRSxFQVU2RSxLQVY3RSxFQVVvRixXQVZwRixFQVVpRyxVQVZqRyxFQVU2RyxPQVY3RyxFQVduQixNQVhtQixFQVdYLFlBWFcsRUFXRyxPQVhILEVBWW5CLE1BWm1CLEVBWVgsU0FaVyxFQWFuQixTQWJtQixFQWFSLGFBYlEsRUFhTyxRQWJQLEVBYWlCLFNBYmpCLEVBYTRCLFNBYjVCLEVBY25CLFlBZG1CLEVBY0wsVUFkSyxFQWNPLEtBZFAsRUFjYyxVQWRkLEVBYzBCLFVBZDFCLEVBY3NDLE1BZHRDLEVBYzhDLFNBZDlDLEVBY3lELE1BZHpELEVBZW5CLFNBZm1CLEVBZVIsT0FmUSxFQWVDLFFBZkQsRUFlVyxXQWZYLEVBZXdCLFVBZnhCLEVBZW9DLFVBZnBDLEVBZWdELE9BZmhELEVBZXlELE1BZnpELEVBZWlFLE9BZmpFLEVBZTBFLE1BZjFFLEVBZWtGLFlBZmxGLEVBZWdHLEtBZmhHLEVBZXVHLFFBZnZHLEVBZWlILFNBZmpILEVBZTRILFFBZjVILEVBZXNJLE9BZnRJLEVBZStJLE1BZi9JLEVBZXVKLE9BZnZKLEVBZWdLLFNBZmhLLEVBZ0JuQixVQWhCbUIsRUFnQlAsUUFoQk8sRUFnQkcsT0FoQkgsRUFnQlksTUFoQlosRUFpQm5CLFFBakJtQixFQWtCbkIsT0FsQm1CLEVBbUJuQixPQW5CbUIsRUFvQm5CLE9BcEJtQixFQXFCbkIsTUFyQm1CLENBNUMzQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47ICAvLy9cbiAgfVxuXG4gIGdldFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIGdldEZpcnN0Q2hpbGQoKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IG51bGw7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgcmVhY3RFbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcmVhY3RFbGVtZW50XCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZSwgcmVtYWluaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQgPSB1bmRlZmluZWQ7IC8vL1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIoKSk7XG5cbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICByZW1vdW50KHVwZGF0ZSkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCkpO1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7ICAvLy9cbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShuZXdTdGF0ZSkge1xuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5zdGF0ZTsgIC8vL1xuXG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24ob2xkU3RhdGUsIG5ld1N0YXRlKTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgdGhpcy5yZW1vdW50KHVwZGF0ZSk7XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVhY3RFbGVtZW50LnByb3RvdHlwZSwgcmVhY3RFbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDsgLy8vXG5cbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgcmVtYWluaW5nQ2hpbGRyZW4gPSByZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKChyZWZlcmVuY2UsIHJlbWFpbmluZ0NoaWxkKSA9PiB7XG4gICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nQ2hpbGRET01FbGVtZW50ID0gcmVtYWluaW5nQ2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBpZiAocmVtYWluaW5nQ2hpbGRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHJlbWFpbmluZ0NoaWxkOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gbnVsbDtcblxuICAgICAgICBwYXJlbnQgPSByZW1haW5pbmdDaGlsZDsgIC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0RWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudC9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdENsYXNzRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENsYXNzID0gcmVhY3RDbGFzcztcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmNhbGwodGhpcywgdXBkYXRlKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldEluaXRpYWxTdGF0ZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldENoaWxkQ29udGV4dC5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50RGlkTW91bnQuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnRXaWxsVW5tb3VudC5jYWxsKHRoaXMpO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0RWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudC9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdENvbXBvbmVudEVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENvbXBvbmVudCwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50ID0gcmVhY3RDb21wb25lbnQ7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5yZW5kZXIuY2FsbCh0aGlzLCB1cGRhdGUpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LmdldEluaXRpYWxTdGF0ZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5nZXRDaGlsZENvbnRleHQuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdEVsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RGdW5jdGlvbkVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdEZ1bmN0aW9uLCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RGdW5jdGlvbiA9IHJlYWN0RnVuY3Rpb247XG5cblxuXG5cbiAgfVxuIFxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbih0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIC8vL1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vL1xuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlydHVhbERPTU5vZGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBwYXJlbnRET01FbGVtZW50KHBhcmVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpKTtcblxuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlydHVhbERPTU5vZGUgPSBuZXcgVmlydHVhbERPTU5vZGUocHJvcHMsIGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHZpcnR1YWxET01Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcmVudERPTUVsZW1lbnQocGFyZW50KSB7XG4gIGxldCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudERPTUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZURPTUVsZW1lbnQgPSAocmVmZXJlbmNlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZS5nZXRET01FbGVtZW50KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZURPTUVsZW1lbnQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpcnR1YWxET01Ob2RlIGZyb20gXCIuLi92aXJ0dWFsRE9NTm9kZVwiO1xuXG5pbXBvcnQgdmlydHVhbERPTUVsZW1lbnRNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy92aXJ0dWFsRE9NRWxlbWVudFwiO1xuXG5jbGFzcyBWaXJ0dWFsRE9NRWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01Ob2RlIHtcbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpKTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCkpO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgYXBwbHlQcm9wcygpIHtcbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpO1xuXG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzW25hbWVdO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgICAgdGhpcy5zZXRIYW5kbGVyKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0F0dHJpYnV0ZU5hbWUobmFtZSkpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInJlZlwiKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWU7IC8vL1xuICAgICAgICBcbiAgICAgICAgY2FsbGJhY2sodGhpcy5kb21FbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldEhhbmRsZXIobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgIGhhbmRsZXIpO1xuICB9XG5cblx0aXNIYW5kbGVyTmFtZShuYW1lKSB7XG5cdFx0cmV0dXJuIG5hbWUubWF0Y2goL15vbi8pO1xuXHR9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlydHVhbERPTUVsZW1lbnQucHJvdG90eXBlLCB2aXJ0dWFsRE9NRWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFZpcnR1YWxET01FbGVtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaXJ0dWFsRE9NRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBpc0hUTUxBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9uYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcnR1YWxET01IVE1MRWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01FbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGFnTmFtZSwgcHJvcHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGlzSFRNTEF0dHJpYnV0ZU5hbWUobmFtZSk7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTUVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9uYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcnR1YWxET01TVkdFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCB0YWdOYW1lKTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGlzU1ZHQXR0cmlidXRlTmFtZShuYW1lKTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaXJ0dWFsRE9NTm9kZSBmcm9tIFwiLi4vdmlydHVhbERPTU5vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlydHVhbERPTVRleHRFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTU5vZGUge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH07XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcbiAgfVxuICBcbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlLFxuICAgICAgICAgIHRleHQgPSBub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0ZXh0OyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUgPSBub2RlVmFsdWU7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcmVkdXhBcHAgZnJvbSBcIi4vZXhhbXBsZXMvcmVkdXhBcHBcIjtcbmltcG9ydCB2YW5pbGxhQXBwIGZyb20gXCIuL2V4YW1wbGVzL3ZhbmlsbGFBcHBcIjtcblxuT2JqZWN0LmFzc2lnbih3aW5kb3csIHtcbiAgcmVkdXhBcHAsXG4gIHZhbmlsbGFBcHBcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNyZWF0ZVN0b3JlID0gKHJlZHVjZXIpID0+IHtcbiAgbGV0IHN0YXRlLFxuICAgICAgbGlzdGVuZXJzID0gW107XG5cbiAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoKSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICB1bnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdW5zdWJzY3JpYmUgPSAobCkgPT4ge1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKGxpc3RlbmVyKSA9PiB7XG4gICAgICByZXR1cm4gKGxpc3RlbmVyICE9PSBsKTtcbiAgICB9KTtcbiAgfTtcblxuICBkaXNwYXRjaCh7fSk7XG5cbiAgcmV0dXJuIHsgZ2V0U3RhdGUsIGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5jb25zdCBjb21iaW5lUmVkdWNlcnMgPSAocmVkdWNlcnMpID0+IHtcbiAgcmV0dXJuIChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpLFxuICAgICAgICAgIG5leHRTdGF0ZSA9IGtleXMucmVkdWNlKChuZXh0U3RhdGUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG5cbiAgICAgICAgICAgIG5leHRTdGF0ZVtrZXldID0gcmVkdWNlcihzdGF0ZVtrZXldLCBhY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV4dFN0YXRlO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgIHJldHVybiBuZXh0U3RhdGU7XG4gIH07XG59O1xuXG5jb25zdCBSZWR1eCA9IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9O1xuXG5leHBvcnQgZGVmYXVsdCBSZWR1eDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVkdXggZnJvbSBcIi4vcmVkdXhcIjtcblxuaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NIH0gZnJvbSBcIi4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3QsXG4gICAgICB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSA9IFJlZHV4O1xuXG5jb25zdCB0b2RvID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJBRERfVE9ET1wiIDoge1xuICAgICAgY29uc3QgeyBpZCwgdGV4dCB9ID0gYWN0aW9uLFxuICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHRleHQsXG4gICAgICAgIGNvbXBsZXRlZFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFwiVE9HR0xFX1RPRE9cIiA6IHtcbiAgICAgIGlmIChzdGF0ZS5pZCAhPT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcGxldGVkID0gIXN0YXRlLmNvbXBsZXRlZDsgLy8vXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb21wbGV0ZWRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IHRvZG9zID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkFERF9UT0RPXCIgOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvZG8odW5kZWZpbmVkLCBhY3Rpb24pXG4gICAgICBdO1xuXG4gICAgY2FzZSBcIlRPR0dMRV9UT0RPXCIgOlxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCh0ID0+IHRvZG8odCwgYWN0aW9uKSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKCBzdGF0ZSA9IFwiU0hPV19BTExcIiwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSXCIgOlxuICAgICAgcmV0dXJuIGFjdGlvbi5maWx0ZXI7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCB0b2RvQXBwID0gY29tYmluZVJlZHVjZXJzKHtcbiAgdG9kb3MsXG4gIHZpc2liaWxpdHlGaWx0ZXJcbn0pO1xuXG5jb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIGZpbHRlcikgPT4ge1xuICBzd2l0Y2ggKGZpbHRlcikge1xuICAgIGNhc2UgXCJTSE9XX0FMTFwiIDpcbiAgICAgIHJldHVybiB0b2RvcztcblxuICAgIGNhc2UgXCJTSE9XX0NPTVBMRVRFRFwiIDpcbiAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgIHQgPT4gdC5jb21wbGV0ZWRcbiAgICAgICk7XG5cbiAgICBjYXNlIFwiU0hPV19BQ1RJVkVcIiA6XG4gICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICB0ID0+ICF0LmNvbXBsZXRlZFxuICAgICAgKTtcbiAgfVxufTtcblxuY29uc3QgVG9kbyA9ICh7b25DbGljaywgY29tcGxldGVkLCB0ZXh0fSkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIHN0eWxlPXt7XG5cbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjpjb21wbGV0ZWQgPyBcImxpbmUtdGhyb3VnaFwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm9uZVwiXG5cbiAgICAgICAgfX1cbiAgICA+XG4gICAgICB7dGV4dH1cbiAgICA8L2xpPlxuXG4gICk7XG59O1xuXG5jb25zdCBUb2RvTGlzdCA9ICh7dG9kb3MsIG9uVG9kb0NsaWNrfSkgPT4gIHtcbiAgcmV0dXJuIChcblxuICAgIDx1bD5cbiAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+XG5cbiAgICAgICAgPFRvZG8gdGV4dD17dG9kby50ZXh0fVxuICAgICAgICAgICAgICBjb21wbGV0ZWQ9e3RvZG8uY29tcGxldGVkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuXG4gICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2sodG9kby5pZClcblxuICAgICAgICAgICAgICB9XG4gICAgICAgIC8+XG5cbiAgICAgICl9XG4gICAgPC91bD5cblxuICApO1xufTtcblxuY29uc3QgTGluayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGFjdGl2ZSwgb25DbGljayB9ID0gcHJvcHM7XG5cbiAgaWYgKGFjdGl2ZSkge1xuICAgIHJldHVybiA8c3Bhbj57cHJvcHMuY2hpbGRyZW59PC9zcGFuPjtcbiAgfVxuXG4gIHJldHVybiAoXG5cbiAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG5cbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgIG9uQ2xpY2soKTtcblxuICAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvYT5cblxuICApO1xufTtcblxuY29uc3QgRmlsdGVyTGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxMaW5rIGFjdGl2ZT17IHRoaXMucHJvcHMuZmlsdGVyID09PSBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICBjb25zdCB0eXBlID0gXCJTRVRfVklTSUJJTElUWV9GSUxURVJcIixcbiAgICAgICAgICAgICAgICAgICAgeyBmaWx0ZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgZmlsdGVyXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvTGluaz5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5sZXQgbmV4dFRvZG9JZCA9IDA7XG5jb25zdCBBZGRUb2RvID0gKHByb3BzLCB7c3RvcmV9KSA9PiB7XG4gIGxldCBpbnB1dDtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCByZWY9eyhkb21FbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgIGlucHV0ID0gZG9tRWxlbWVudDtcblxuICAgICAgICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gXCJBRERfVE9ET1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWUgfSA9IGlucHV0LFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSB2YWx1ZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgaWQgPSBuZXh0VG9kb0lkKys7XG5cbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgQWRkIHRvZG9cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5jbGFzcyBWaXNpYmxlVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxUb2RvTGlzdCB0b2Rvcz17XG4gICAgICAgICAgICAgICAgICBnZXRWaXNpYmxlVG9kb3MoXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnRvZG9zLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrPXsoaWQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IFwiVE9HR0xFX1RPRE9cIjtcblxuICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHA+XG4gICAgICB7XCJTaG93OiBcIn1cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj1cIlNIT1dfQUxMXCI+XG4gICAgICAgIEFsbFxuICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAge1wiIC0gXCJ9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9XCJTSE9XX0NPTVBMRVRFRFwiPlxuICAgICAgICBDb21wbGV0ZWRcbiAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIHtcIiAtIFwifVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPVwiU0hPV19BQ1RJVkVcIj5cbiAgICAgICAgQWN0aXZlXG4gICAgICA8L0ZpbHRlckxpbms+XG4gICAgPC9wPlxuXG4gICk7XG59O1xuXG5jb25zdCBUb2RvQXBwID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxBZGRUb2RvIC8+XG4gICAgICA8VmlzaWJsZVRvZG9MaXN0IC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmNsYXNzIFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1eEFwcCgpIHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZSh0b2RvQXBwKSxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFRvZG9BcHAgLz5cbiAgICAgIDwvUHJvdmlkZXI+XG5cbiAgICAsXG4gICAgcm9vdERPTUVsZW1lbnRcbiAgKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCIuLi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCIuLi9yZWFjdERPTVwiO1xuXG5jb25zdCBDb21tZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmxvZyhcIkNvbW1lbnQgbW91bnRlZCB3aXRoIG1lc3NhZ2U6IFwiICsgbWVzc2FnZSlcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudCB1bm1vdW50ZWQgd2l0aCBtZXNzYWdlOiBcIiArIG1lc3NhZ2UpXG4gIH1cbn0pO1xuXG5jb25zdCBDb21tZW50c0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgIFwiSGVsbG8sIHdvcmxkIVwiLFxuICAgICAgICAgICAgXCJIZWxsbyB3b3JsZCBhZ2Fpbi4uLlwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2VzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJDb21tZW50cyBsaXN0IG1vdW50ZWQuXCIpXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IG1lc3NhZ2VzIH0gPSBzdGF0ZSxcbiAgICAgICAgICBjb21tZW50cyA9IG1lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT5cblxuICAgICAgICAgICAgPENvbW1lbnQgbWVzc2FnZT17bWVzc2FnZX0gLz5cblxuICAgICAgICAgICk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzLWxpc3RcIj5cbiAgICAgICAge2NvbW1lbnRzfVxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFuaWxsYUFwcCgpIHtcbiAgY29uc3QgY29tbWVudHNMaXN0ID1cblxuICAgICAgICAgIDxDb21tZW50c0xpc3QgLz5cblxuICAgICAgICAsXG4gICAgICAgIHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG5cbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIGNvbW1lbnRzTGlzdCxcbiAgICByb290RE9NRWxlbWVudFxuICApO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICBcIkhlbGxvIHdvcmxkIHlldCBhZ2FpbiEhIVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2VzXG4gICAgICAgICAgfTtcblxuICAgIGNvbW1lbnRzTGlzdC5zZXRTdGF0ZShzdGF0ZSk7XG4gIH0sIDEwMDApOyAvLy9cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVhY3QgfSBmcm9tIFwiLi9yZWFjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFjdERPTSB9IGZyb20gXCIuL3JlYWN0RE9NXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjbGVhckF0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLmNsZWFyQXR0cmlidXRlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQucmVtb3ZlQXR0cmlidXRlKG5hbWUpXG59XG5cbmZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5oYXNBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldENsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5zZXRDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC50b2dnbGVDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmhhc0NsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzZXMoY2xhc3NOYW1lcykge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQ2xhc3NlcyhjbGFzc05hbWVzKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDbGFzc2VzKCkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5jbGVhckNsYXNzZXMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFnTmFtZSgpIHtcbiAgcmV0dXJuIG51bGw7ICAvLy9cbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuc2V0U3R5bGUobmFtZSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldEF0dHJpYnV0ZSxcbiAgZ2V0QXR0cmlidXRlLFxuICBjbGVhckF0dHJpYnV0ZSxcbiAgYWRkQXR0cmlidXRlLFxuICByZW1vdmVBdHRyaWJ1dGUsXG4gIGhhc0F0dHJpYnV0ZSxcbiAgc2V0Q2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlQ2xhc3MsXG4gIGhhc0NsYXNzLFxuICBoYXNDbGFzc2VzLFxuICBjbGVhckNsYXNzZXMsXG4gIGdldFRhZ05hbWUsXG4gIHNldFN0eWxlXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gXCJjbGFzc05hbWVcIikge1xuICAgIG5hbWUgPSBcImNsYXNzXCI7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gXCJodG1sRm9yXCIpIHtcbiAgICBuYW1lID0gXCJmb3JcIjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzc2VzKGNsYXNzTmFtZXMpIHsgcmV0dXJuIGNsYXNzTmFtZXMuZXZlcnkoKGNsYXNzTmFtZSkgPT4gdGhpcy5oYXNDbGFzcyhjbGFzc05hbWUpKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBcIlwiOyB9XG5cbmZ1bmN0aW9uIGdldFRhZ05hbWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudGFnTmFtZTsgfVxuXG5mdW5jdGlvbiBzZXRTdHlsZShuYW1lLCB2YWx1ZSkge1xuICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZSxcbiAgY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlLFxuICBoYXNBdHRyaWJ1dGUsXG4gIHNldENsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzcyxcbiAgaGFzQ2xhc3NlcyxcbiAgY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lLFxuICBzZXRTdHlsZVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50XCI7XG5pbXBvcnQgUmVhY3RDbGFzcyBmcm9tIFwiLi9yZWFjdENsYXNzXCI7XG5pbXBvcnQgUmVhY3RDb21wb25lbnQgZnJvbSBcIi4vcmVhY3RDb21wb25lbnRcIjtcbmltcG9ydCBSZWFjdENsYXNzRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L3JlYWN0L2NsYXNzXCI7XG5pbXBvcnQgUmVhY3RGdW5jdGlvbkVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9yZWFjdC9mdW5jdGlvblwiO1xuaW1wb3J0IFJlYWN0Q29tcG9uZW50RWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L3JlYWN0L2NvbXBvbmVudFwiO1xuaW1wb3J0IFZpcnR1YWxET01UZXh0RWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL3RleHRFbGVtZW50XCI7XG5pbXBvcnQgVmlydHVhbERPTUhUTUxFbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC9odG1sXCI7XG5pbXBvcnQgVmlydHVhbERPTVNWR0VsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZS9lbGVtZW50L3N2Z1wiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhvYmplY3QpIHtcbiAgcmV0dXJuIFJlYWN0Q2xhc3MuY3JlYXRlKG9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICB2aXJ0dWFsRE9NRWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZpcnR1YWxET01TVkdFbGVtZW50KHRhZ05hbWUsIHByb3BzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmlydHVhbERPTUhUTUxFbGVtZW50KHRhZ05hbWUsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHZpcnR1YWxET01FbGVtZW50IC8vL1xuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIGNvbnN0IHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHJlYWN0Q2xhc3NFbGVtZW50ID0gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q2xhc3NFbGVtZW50OyAgLy8vXG5cbiAgICAgIGNvbnN0IHsgbWl4aW5zIH0gPSByZWFjdENsYXNzO1xuXG4gICAgICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBSZWFjdENvbXBvbmVudCkpIHtcbiAgICAgIGNvbnN0IFJlYWN0Q29tcG9uZW50ID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgUmVhY3RDb21wb25lbnQoKSxcbiAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50RWxlbWVudCA9IG5ldyBSZWFjdENvbXBvbmVudEVsZW1lbnQocmVhY3RDb21wb25lbnQsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q29tcG9uZW50RWxlbWVudDsgIC8vL1xuXG4gICAgICBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudCwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25zdCByZWFjdEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RGdW5jdGlvbkVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RGdW5jdGlvbkVsZW1lbnQ7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBDb21wb25lbnQgPSBSZWFjdENvbXBvbmVudCwgLy8vXG4gICAgICBSZWFjdCA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBjcmVhdGVDbGFzcyxcbiAgICAgICAgY3JlYXRlRWxlbWVudFxuICAgICAgfTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRnJvbVJlbWFpbmluZ0FyZ3VtZW50cyhyZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgcmVtYWluaW5nQXJndW1lbnRzID0gZmxhdHRlbihyZW1haW5pbmdBcmd1bWVudHMpOyAvLy9cblxuICBjb25zdCBjaGlsZHJlbiA9IHJlbWFpbmluZ0FyZ3VtZW50cy5tYXAoKGNoaWxkQXJndW1lbnQpID0+IHtcbiAgICBsZXQgY2hpbGQ7XG5cbiAgICBpZiAoaXNTdWJjbGFzc09mKGNoaWxkQXJndW1lbnQuY29uc3RydWN0b3IsIEVsZW1lbnQpKSB7IC8vL1xuICAgICAgY2hpbGQgPSBjaGlsZEFyZ3VtZW50OyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBjaGlsZEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHZpcnR1YWxET01UZXh0RWxlbWVudCA9IG5ldyBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkID0gdmlydHVhbERPTVRleHRFbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhyZWFjdENvbXBvbmVudCwgZWxlbWVudCkge1xuICBjb25zdCB7IG1peGlucyB9ID0gcmVhY3RDb21wb25lbnQ7XG5cbiAgcmVhY3RDb21wb25lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocmVhY3RDb21wb25lbnQpOyAvLy9cblxuICBpZiAocmVhY3RDb21wb25lbnQgIT09IFJlYWN0Q29tcG9uZW50KSB7XG4gICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMocmVhY3RDb21wb25lbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpIHtcbiAgaWYgKG1peGlucykge1xuICAgIG1peGlucy5mb3JFYWNoKChtaXhpbikgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBtaXhpbjtcblxuICAgICAgZWxlbWVudFtuYW1lXSA9IG1peGluLmJpbmQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgc3ViY2xhc3MgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICBzdWJjbGFzcyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCAhPT0gbnVsbCkge1xuICAgICAgc3ViY2xhc3MgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ViY2xhc3M7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zKSB7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXI7XG5cbiAgICBpZiAoZ2V0SW5pdGlhbFN0YXRlKSB7IHRoaXMuZ2V0SW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlOyB9XG4gICAgaWYgKGdldENoaWxkQ29udGV4dCkgeyB0aGlzLmdldENoaWxkQ29udGV4dCA9IGdldENoaWxkQ29udGV4dDsgfVxuICAgIGlmIChjb21wb25lbnREaWRNb3VudCkgeyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gY29tcG9uZW50RGlkTW91bnQ7IH1cbiAgICBpZiAoY29tcG9uZW50V2lsbFVubW91bnQpIHsgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9IGNvbXBvbmVudFdpbGxVbm1vdW50OyB9XG5cbiAgICB0aGlzLm1peGlucyA9IG1peGlucztcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUob2JqZWN0KSB7XG4gICAgY29uc3QgeyByZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucyB9ID0gb2JqZWN0O1xuXG4gICAgcmV0dXJuIG5ldyBSZWFjdENsYXNzKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zKTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0Q29tcG9uZW50IHtcblxuXG5cblxuXG5cblxuXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBcbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgXG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxuXG5cblxuXG5cblxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaXJ0dWFsRE9NTm9kZSBmcm9tIFwiLi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0RE9NIHtcbiAgc3RhdGljIHJlbmRlcihlbGVtZW50LCBwYXJlbnRET01FbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50ID0gVmlydHVhbERPTU5vZGUuZnJvbURPTUVsZW1lbnQocGFyZW50RE9NRWxlbWVudCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0ge307XG5cbiAgICBlbGVtZW50Lm1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1haW5pbmcoZWxlbWVudCwgYXJyYXkpIHtcbiAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBjb25zdCBpbmRleCA9IGluZGV4T2YoZWxlbWVudCwgYXJyYXkpO1xuXG4gIHJldHVybiBhcnJheS5zbGljZShpbmRleCArIDEpO1xufVxuXG5mdW5jdGlvbiBpbmRleE9mKGVsZW1lbnQsIGFycmF5KSB7XG4gIGxldCBpbmRleCA9IG51bGw7XG5cbiAgYXJyYXkuc29tZSgoY3VycmVudEVsZW1lbnQsIGN1cnJlbnRFbGVtZW50SW5kZXgpID0+IHtcbiAgICBpZiAoY3VycmVudEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgIGluZGV4ID0gY3VycmVudEVsZW1lbnRJbmRleDtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kZXg7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSB7XG4gIHJldHVybiBzdmdUYWdOYW1lcy5pbmNsdWRlcyh0YWdOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU1ZHQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBzdmdBdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSFRNTEF0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICByZXR1cm4gaHRtbEF0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5jb25zdCBzdmdUYWdOYW1lcyA9IFtcbiAgICAgICAgXCJhbHRHbHlwaFwiLCBcImFuaW1hdGVcIiwgXCJhbmltYXRlQ29sb3JcIiwgXCJhbmltYXRlTW90aW9uXCIsIFwiYW5pbWF0ZVRyYW5zZm9ybVwiLCBcImFuaW1hdGlvblwiLCBcImF1ZGlvXCIsXG4gICAgICAgIFwiY2lyY2xlXCIsIFwiY2xpcFBhdGhcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY3Vyc29yXCIsXG4gICAgICAgIFwiZGVmc1wiLCBcImRlc2NcIiwgXCJkaXNjYXJkXCIsXG4gICAgICAgIFwiZWxsaXBzZVwiLFxuICAgICAgICBcImZlQmxlbmRcIiwgXCJmZUNvbG9yTWF0cml4XCIsIFwiZmVDb21wb25lbnRUcmFuc2ZlclwiLCBcImZlQ29tcG9zaXRlXCIsIFwiZmVDb252b2x2ZU1hdHJpeFwiLCBcImZlRGlmZnVzZUxpZ2h0aW5nXCIsIFwiZmVEaXNwbGFjZW1lbnRNYXBcIiwgXCJmZURpc3RhbnRMaWdodFwiLCBcImZlRHJvcFNoYWRvd1wiLCBcImZlRmxvb2RcIiwgXCJmZUZ1bmNBXCIsIFwiZmVGdW5jQlwiLCBcImZlRnVuY0dcIiwgXCJmZUZ1bmNSXCIsIFwiZmVHYXVzc2lhbkJsdXJcIiwgXCJmZUltYWdlXCIsIFwiZmVNZXJnZVwiLCBcImZlTWVyZ2VOb2RlXCIsIFwiZmVNb3JwaG9sb2d5XCIsIFwiZmVPZmZzZXRcIiwgXCJmZVBvaW50TGlnaHRcIiwgXCJmZVNwZWN1bGFyTGlnaHRpbmdcIiwgXCJmZVNwb3RMaWdodFwiLCBcImZlVGlsZVwiLCBcImZlVHVyYnVsZW5jZVwiLCBcImZpbHRlclwiLCBcImZvbnRcIiwgXCJmb250LWZhY2VcIiwgXCJmb250LWZhY2UtZm9ybWF0XCIsIFwiZm9udC1mYWNlLW5hbWVcIiwgXCJmb250LWZhY2UtdXJpXCIsIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgICAgICBcImdcIiwgXCJnbHlwaFwiLCBcImdseXBoUmVmXCIsXG4gICAgICAgIFwiaGFuZGxlclwiLCBcImhhdGNoXCIsIFwiaGF0Y2hwYXRoXCIsIFwiaGtlcm5cIixcbiAgICAgICAgXCJpbWFnZVwiLCBcImxpbmVcIiwgXCJsaW5lYXJHcmFkaWVudFwiLFxuICAgICAgICBcImxpc3RlbmVyXCIsXG4gICAgICAgIFwibWFya2VyXCIsIFwibWFza1wiLCBcIm1lc2hcIiwgXCJtZXNoZ3JhZGllbnRcIiwgXCJtZXNocGF0Y2hcIiwgXCJtZXNocm93XCIsIFwibWV0YWRhdGFcIiwgXCJtaXNzaW5nLWdseXBoXCIsIFwibXBhdGhcIixcbiAgICAgICAgXCJwYXRoXCIsIFwicGF0dGVyblwiLCBcInBvbHlnb25cIiwgXCJwb2x5bGluZVwiLCBcInByZWZldGNoXCIsXG4gICAgICAgIFwicmFkaWFsR3JhZGllbnRcIiwgXCJyZWN0XCIsXG4gICAgICAgIFwic2NyaXB0XCIsIFwic2V0XCIsIFwic29saWRjb2xvclwiLCBcInN0b3BcIiwgXCJzdHlsZVwiLCBcInN2Z1wiLCBcInN3aXRjaFwiLCBcInN5bWJvbFwiLFxuICAgICAgICBcInRicmVha1wiLCBcInRleHRcIiwgXCJ0ZXh0QXJlYVwiLCBcInRleHRQYXRoXCIsIFwidGl0bGVcIiwgXCJ0cmVmXCIsIFwidHNwYW5cIixcbiAgICAgICAgXCJ1bmtub3duXCIsIFwidXNlXCIsXG4gICAgICAgIFwidmlkZW9cIiwgXCJ2aWV3XCIsIFwidmtlcm5cIlxuICAgICAgXSxcbiAgICAgIHN2Z0F0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgICBcImFjY2VudC1oZWlnaHRcIiwgXCJhY2N1bXVsYXRlXCIsIFwiYWRkaXRpdmVcIiwgXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJhbHBoYWJldGljXCIsIFwiYW1wbGl0dWRlXCIsIFwiYXJhYmljLWZvcm1cIiwgXCJhc2NlbnRcIiwgXCJhdHRyaWJ1dGVOYW1lXCIsIFwiYXR0cmlidXRlVHlwZVwiLCBcImF6aW11dGhcIixcbiAgICAgICAgXCJiYW5kd2lkdGhcIiwgXCJiYXNlRnJlcXVlbmN5XCIsIFwiYmFzZVByb2ZpbGVcIiwgXCJiYXNlbGluZS1zaGlmdFwiLCBcImJib3hcIiwgXCJiZWdpblwiLCBcImJpYXNcIiwgXCJieVwiLFxuICAgICAgICBcImNhbGNNb2RlXCIsIFwiY2FwLWhlaWdodFwiLCBcImNsaXBcIiwgXCJjbGFzc05hbWVcIiwgXCJjbGlwLXBhdGhcIiwgXCJjbGlwLXJ1bGVcIiwgXCJjbGlwUGF0aFVuaXRzXCIsIFwiY29sb3JcIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uXCIsIFwiY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzXCIsIFwiY29sb3ItcHJvZmlsZVwiLCBcImNvbG9yLXJlbmRlcmluZ1wiLCBcImNvbnRlbnRTY3JpcHRUeXBlXCIsIFwiY29udGVudFN0eWxlVHlwZVwiLCBcImNyb3Nzb3JpZ2luXCIsIFwiY3Vyc29yXCIsIFwiY3hcIiwgXCJjeVwiLFxuICAgICAgICBcImRcIiwgXCJkZWZhdWx0QWN0aW9uXCIsIFwiZGVzY2VudFwiLCBcImRpZmZ1c2VDb25zdGFudFwiLCBcImRpcmVjdGlvblwiLCBcImRpc3BsYXlcIiwgXCJkaXZpc29yXCIsIFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJkb3dubG9hZFwiLCBcImR1clwiLCBcImR4XCIsIFwiZHlcIixcbiAgICAgICAgXCJlZGdlTW9kZVwiLCBcImVkaXRhYmxlXCIsIFwiZWxldmF0aW9uXCIsIFwiZW5hYmxlLWJhY2tncm91bmRcIiwgXCJlbmRcIiwgXCJldmVudFwiLCBcImV4cG9uZW50XCIsIFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFxuICAgICAgICBcImZpbGxcIiwgXCJmaWxsLW9wYWNpdHlcIiwgXCJmaWxsLXJ1bGVcIiwgXCJmaWx0ZXJcIiwgXCJmaWx0ZXJSZXNcIiwgXCJmaWx0ZXJVbml0c1wiLCBcImZsb29kLWNvbG9yXCIsIFwiZmxvb2Qtb3BhY2l0eVwiLCBcImZvY3VzSGlnaGxpZ2h0XCIsIFwiZm9jdXNhYmxlXCIsIFwiZm9udC1mYW1pbHlcIiwgXCJmb250LXNpemVcIiwgXCJmb250LXNpemUtYWRqdXN0XCIsIFwiZm9udC1zdHJldGNoXCIsIFwiZm9udC1zdHlsZVwiLCBcImZvbnQtdmFyaWFudFwiLCBcImZvbnQtd2VpZ2h0XCIsIFwiZm9ybWF0XCIsIFwiZnJcIiwgXCJmcm9tXCIsIFwiZnhcIiwgXCJmeVwiLFxuICAgICAgICBcImcxXCIsIFwiZzJcIiwgXCJnbHlwaC1uYW1lXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbFwiLCBcImdseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsXCIsIFwiZ2x5cGhSZWZcIiwgXCJncmFkaWVudFRyYW5zZm9ybVwiLCBcImdyYWRpZW50VW5pdHNcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGFuZ2luZ1wiLCBcImhhdGNoQ29udGVudFVuaXRzXCIsIFwiaGF0Y2hVbml0c1wiLCBcImhlaWdodFwiLCBcImhvcml6LWFkdi14XCIsIFwiaG9yaXotb3JpZ2luLXhcIiwgXCJob3Jpei1vcmlnaW4teVwiLCBcImhyZWZcIiwgXCJocmVmbGFuZ1wiLFxuICAgICAgICBcImlkZW9ncmFwaGljXCIsIFwiaW1hZ2UtcmVuZGVyaW5nXCIsIFwiaW5cIiwgXCJpbjJcIiwgXCJpbml0aWFsVmlzaWJpbGl0eVwiLCBcImludGVyY2VwdFwiLFxuICAgICAgICBcImtcIiwgXCJrMVwiLCBcImsyXCIsIFwiazNcIiwgXCJrNFwiLCBcImtlcm5lbE1hdHJpeFwiLCBcImtlcm5lbFVuaXRMZW5ndGhcIiwgXCJrZXJuaW5nXCIsIFwia2V5UG9pbnRzXCIsIFwia2V5U3BsaW5lc1wiLCBcImtleVRpbWVzXCIsXG4gICAgICAgIFwibGVuZ3RoQWRqdXN0XCIsIFwibGV0dGVyLXNwYWNpbmdcIiwgXCJsaWdodGluZy1jb2xvclwiLCBcImxpbWl0aW5nQ29uZUFuZ2xlXCIsIFwibG9jYWxcIixcbiAgICAgICAgXCJtYXJrZXItZW5kXCIsIFwibWFya2VyLW1pZFwiLCBcIm1hcmtlci1zdGFydFwiLCBcIm1hcmtlckhlaWdodFwiLCBcIm1hcmtlclVuaXRzXCIsIFwibWFya2VyV2lkdGhcIiwgXCJtYXNrXCIsIFwibWFza0NvbnRlbnRVbml0c1wiLCBcIm1hc2tVbml0c1wiLCBcIm1hdGhlbWF0aWNhbFwiLCBcIm1heFwiLCBcIm1lZGlhXCIsIFwibWVkaWFDaGFyYWN0ZXJFbmNvZGluZ1wiLCBcIm1lZGlhQ29udGVudEVuY29kaW5nc1wiLCBcIm1lZGlhU2l6ZVwiLCBcIm1lZGlhVGltZVwiLCBcIm1ldGhvZFwiLCBcIm1pblwiLCBcIm1vZGVcIixcbiAgICAgICAgXCJuYW1lXCIsIFwibmF2LWRvd25cIiwgXCJuYXYtZG93bi1sZWZ0XCIsIFwibmF2LWRvd24tcmlnaHRcIiwgXCJuYXYtbGVmdFwiLCBcIm5hdi1uZXh0XCIsIFwibmF2LXByZXZcIiwgXCJuYXYtcmlnaHRcIiwgXCJuYXYtdXBcIiwgXCJuYXYtdXAtbGVmdFwiLCBcIm5hdi11cC1yaWdodFwiLCBcIm51bU9jdGF2ZXNcIixcbiAgICAgICAgXCJvYnNlcnZlclwiLCBcIm9mZnNldFwiLCBcIm9wYWNpdHlcIiwgXCJvcGVyYXRvclwiLCBcIm9yZGVyXCIsIFwib3JpZW50XCIsIFwib3JpZW50YXRpb25cIiwgXCJvcmlnaW5cIiwgXCJvdmVyZmxvd1wiLCBcIm92ZXJsYXlcIiwgXCJvdmVybGluZS1wb3NpdGlvblwiLCBcIm92ZXJsaW5lLXRoaWNrbmVzc1wiLFxuICAgICAgICBcInBhbm9zZS0xXCIsIFwicGF0aFwiLCBcInBhdGhMZW5ndGhcIiwgXCJwYXR0ZXJuQ29udGVudFVuaXRzXCIsIFwicGF0dGVyblRyYW5zZm9ybVwiLCBcInBhdHRlcm5Vbml0c1wiLCBcInBoYXNlXCIsIFwicGl0Y2hcIiwgXCJwbGF5YmFja09yZGVyXCIsIFwicGxheWJhY2tvcmRlclwiLCBcInBvaW50ZXItZXZlbnRzXCIsIFwicG9pbnRzXCIsIFwicG9pbnRzQXRYXCIsIFwicG9pbnRzQXRZXCIsIFwicG9pbnRzQXRaXCIsIFwicHJlc2VydmVBbHBoYVwiLCBcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJwcmltaXRpdmVVbml0c1wiLCBcInByb3BhZ2F0ZVwiLFxuICAgICAgICBcInJcIiwgXCJyYWRpdXNcIiwgXCJyZWZYXCIsIFwicmVmWVwiLCBcInJlbmRlcmluZy1pbnRlbnRcIiwgXCJyZXBlYXRDb3VudFwiLCBcInJlcGVhdER1clwiLCBcInJlcXVpcmVkRXh0ZW5zaW9uc1wiLCBcInJlcXVpcmVkRmVhdHVyZXNcIiwgXCJyZXF1aXJlZEZvbnRzXCIsIFwicmVxdWlyZWRGb3JtYXRzXCIsIFwicmVzdGFydFwiLCBcInJlc3VsdFwiLCBcInJvdGF0ZVwiLCBcInJ4XCIsIFwicnlcIixcbiAgICAgICAgXCJzY2FsZVwiLCBcInNlZWRcIiwgXCJzaGFwZS1yZW5kZXJpbmdcIiwgXCJzaWRlXCIsIFwic2xvcGVcIiwgXCJzbmFwc2hvdFRpbWVcIiwgXCJzcGFjaW5nXCIsIFwic3BlY3VsYXJDb25zdGFudFwiLCBcInNwZWN1bGFyRXhwb25lbnRcIiwgXCJzcHJlYWRNZXRob2RcIiwgXCJzcmNcIiwgXCJzdGFydE9mZnNldFwiLCBcInN0ZERldmlhdGlvblwiLCBcInN0ZW1oXCIsIFwic3RlbXZcIiwgXCJzdGl0Y2hUaWxlc1wiLCBcInN0b3AtY29sb3JcIiwgXCJzdG9wLW9wYWNpdHlcIiwgXCJzdHJpa2V0aHJvdWdoLXBvc2l0aW9uXCIsIFwic3RyaWtldGhyb3VnaC10aGlja25lc3NcIiwgXCJzdHJpbmdcIiwgXCJzdHJva2VcIiwgXCJzdHJva2UtZGFzaGFycmF5XCIsIFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgXCJzdHJva2UtbGluZWNhcFwiLCBcInN0cm9rZS1saW5lam9pblwiLCBcInN0cm9rZS1taXRlcmxpbWl0XCIsIFwic3Ryb2tlLW9wYWNpdHlcIiwgXCJzdHJva2Utd2lkdGhcIiwgXCJzdHlsZVwiLCBcInN1cmZhY2VTY2FsZVwiLCBcInN5bmNCZWhhdmlvclwiLCBcInN5bmNCZWhhdmlvckRlZmF1bHRcIiwgXCJzeW5jTWFzdGVyXCIsIFwic3luY1RvbGVyYW5jZVwiLCBcInN5bmNUb2xlcmFuY2VEZWZhdWx0XCIsIFwic3lzdGVtTGFuZ3VhZ2VcIixcbiAgICAgICAgXCJ0YWJsZVZhbHVlc1wiLCBcInRhcmdldFwiLCBcInRhcmdldFhcIiwgXCJ0YXJnZXRZXCIsIFwidGV4dC1hbmNob3JcIiwgXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJ0ZXh0LXJlbmRlcmluZ1wiLCBcInRleHRMZW5ndGhcIiwgXCJ0aW1lbGluZUJlZ2luXCIsIFwidGltZWxpbmViZWdpblwiLCBcInRpdGxlXCIsIFwidG9cIiwgXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2Zvcm1CZWhhdmlvclwiLCBcInR5cGVcIixcbiAgICAgICAgXCJ1MVwiLCBcInUyXCIsIFwidW5kZXJsaW5lLXBvc2l0aW9uXCIsIFwidW5kZXJsaW5lLXRoaWNrbmVzc1wiLCBcInVuaWNvZGVcIiwgXCJ1bmljb2RlLWJpZGlcIiwgXCJ1bmljb2RlLXJhbmdlXCIsIFwidW5pdHMtcGVyLWVtXCIsXG4gICAgICAgIFwidi1hbHBoYWJldGljXCIsIFwidi1oYW5naW5nXCIsIFwidi1pZGVvZ3JhcGhpY1wiLCBcInYtbWF0aGVtYXRpY2FsXCIsIFwidmFsdWVzXCIsIFwidmVyc2lvblwiLCBcInZlcnQtYWR2LXlcIiwgXCJ2ZXJ0LW9yaWdpbi14XCIsIFwidmVydC1vcmlnaW4teVwiLCBcInZpZXdCb3hcIiwgXCJ2aWV3VGFyZ2V0XCIsIFwidmlzaWJpbGl0eVwiLFxuICAgICAgICBcIndpZHRoXCIsIFwid2lkdGhzXCIsIFwid29yZC1zcGFjaW5nXCIsIFwid3JpdGluZy1tb2RlXCIsXG4gICAgICAgIFwieFwiLCBcIngtaGVpZ2h0XCIsIFwieDFcIiwgXCJ4MlwiLCBcInhDaGFubmVsU2VsZWN0b3JcIixcbiAgICAgICAgXCJ5XCIsIFwieTFcIiwgXCJ5MlwiLCBcInlDaGFubmVsU2VsZWN0b3JcIixcbiAgICAgICAgXCJ6XCIsIFwiem9vbUFuZFBhblwiXG4gICAgICBdLFxuICAgICAgaHRtbEF0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgICBcImFjY2VwdFwiLCBcImFjY2VwdENoYXJzZXRcIiwgXCJhY2Nlc3NLZXlcIiwgXCJhY3Rpb25cIiwgXCJhbGxvd1wiLCBcImFsbG93RnVsbFNjcmVlblwiLCBcImFsbG93VHJhbnNwYXJlbmN5XCIsIFwiYWx0XCIsIFwiYXN5bmNcIiwgXCJhdXRvQ29tcGxldGVcIiwgXCJhdXRvRm9jdXNcIiwgXCJhdXRvUGxheVwiLFxuICAgICAgICBcImNhcHR1cmVcIiwgXCJjZWxsUGFkZGluZ1wiLCBcImNlbGxTcGFjaW5nXCIsIFwiY2hhbGxlbmdlXCIsIFwiY2hhclNldFwiLCBcImNoZWNrZWRcIiwgXCJjaXRlXCIsIFwiY2xhc3NJRFwiLCBcImNsYXNzTmFtZVwiLCBcImNvbFNwYW5cIiwgXCJjb2xzXCIsIFwiY29udGVudFwiLCBcImNvbnRlbnRFZGl0YWJsZVwiLCBcImNvbnRleHRNZW51XCIsIFwiY29udHJvbHNcIiwgXCJjb29yZHNcIiwgXCJjcm9zc09yaWdpblwiLFxuICAgICAgICBcImRhdGFcIiwgXCJkYXRlVGltZVwiLCBcImRlZmF1bHRcIiwgXCJkZWZlclwiLCBcImRpclwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJkcmFnZ2FibGVcIixcbiAgICAgICAgXCJlbmNUeXBlXCIsXG4gICAgICAgIFwiZm9ybVwiLCBcImZvcm1BY3Rpb25cIiwgXCJmb3JtRW5jVHlwZVwiLCBcImZvcm1NZXRob2RcIiwgXCJmb3JtTm9WYWxpZGF0ZVwiLCBcImZvcm1UYXJnZXRcIiwgXCJmcmFtZUJvcmRlclwiLFxuICAgICAgICBcImhlYWRlcnNcIiwgXCJoZWlnaHRcIiwgXCJoaWRkZW5cIiwgXCJoaWdoXCIsIFwiaHJlZlwiLCBcImhyZWZMYW5nXCIsIFwiaHRtbEZvclwiLCBcImh0dHBFcXVpdlwiLFxuICAgICAgICBcImljb25cIiwgXCJpZFwiLCBcImlucHV0TW9kZVwiLCBcImludGVncml0eVwiLCBcImlzXCIsXG4gICAgICAgIFwia2V5UGFyYW1zXCIsIFwia2V5VHlwZVwiLCBcImtpbmRcIixcbiAgICAgICAgXCJsYWJlbFwiLCBcImxhbmdcIiwgXCJsaXN0XCIsIFwibG9vcFwiLCBcImxvd1wiLFxuICAgICAgICBcIm1hbmlmZXN0XCIsIFwibWFyZ2luSGVpZ2h0XCIsIFwibWFyZ2luV2lkdGhcIiwgXCJtYXhcIiwgXCJtYXhMZW5ndGhcIiwgXCJtZWRpYVwiLCBcIm1lZGlhR3JvdXBcIiwgXCJtZXRob2RcIiwgXCJtaW5cIiwgXCJtaW5MZW5ndGhcIiwgXCJtdWx0aXBsZVwiLCBcIm11dGVkXCIsXG4gICAgICAgIFwibmFtZVwiLCBcIm5vVmFsaWRhdGVcIiwgXCJub25jZVwiLFxuICAgICAgICBcIm9wZW5cIiwgXCJvcHRpbXVtXCIsXG4gICAgICAgIFwicGF0dGVyblwiLCBcInBsYWNlaG9sZGVyXCIsIFwicG9zdGVyXCIsIFwicHJlbG9hZFwiLCBcInByb2ZpbGVcIixcbiAgICAgICAgXCJyYWRpb0dyb3VwXCIsIFwicmVhZE9ubHlcIiwgXCJyZWxcIiwgXCJyZXF1aXJlZFwiLCBcInJldmVyc2VkXCIsIFwicm9sZVwiLCBcInJvd1NwYW5cIiwgXCJyb3dzXCIsXG4gICAgICAgIFwic2FuZGJveFwiLCBcInNjb3BlXCIsIFwic2NvcGVkXCIsIFwic2Nyb2xsaW5nXCIsIFwic2VhbWxlc3NcIiwgXCJzZWxlY3RlZFwiLCBcInNoYXBlXCIsIFwic2l6ZVwiLCBcInNpemVzXCIsIFwic3BhblwiLCBcInNwZWxsQ2hlY2tcIiwgXCJzcmNcIiwgXCJzcmNEb2NcIiwgXCJzcmNMYW5nXCIsIFwic3JjU2V0XCIsIFwic3RhcnRcIiwgXCJzdGVwXCIsIFwic3R5bGVcIiwgXCJzdW1tYXJ5XCIsXG4gICAgICAgIFwidGFiSW5kZXhcIiwgXCJ0YXJnZXRcIiwgXCJ0aXRsZVwiLCBcInR5cGVcIixcbiAgICAgICAgXCJ1c2VNYXBcIixcbiAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICBcIndpZHRoXCIsXG4gICAgICAgIFwid21vZGVcIixcbiAgICAgICAgXCJ3cmFwXCJcbiAgICAgIF07XG4iXX0=
