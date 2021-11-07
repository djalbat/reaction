(() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };

  // lib/utilities/array.js
  var require_array = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.first = first;
    exports.flatten = flatten;
    exports.guarantee = guarantee;
    exports.remaining = remaining;
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function first(array) {
      return array[0];
    }
    function flatten(array1) {
      return array1.reduce(function(array, element) {
        array = array.concat(element);
        return array;
      }, []);
    }
    function guarantee(arrayOrElement) {
      arrayOrElement = arrayOrElement || [];
      return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
        arrayOrElement
      ];
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
      array.some(function(currentElement, currentElementIndex) {
        if (currentElement === element) {
          index = currentElementIndex;
          return true;
        }
      });
      return index;
    }
  });

  // lib/element.js
  var require_element = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _array = require_array();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Element = /* @__PURE__ */ function() {
      function Element2(props) {
        _classCallCheck(this, Element2);
        this.props = props;
        this.parent = null;
        this.children = props.children;
      }
      _createClass(Element2, [
        {
          key: "getParent",
          value: function getParent() {
            return this.parent;
          }
        },
        {
          key: "getChildren",
          value: function getChildren() {
            return this.children;
          }
        },
        {
          key: "getFirstChild",
          value: function getFirstChild() {
            var firstChild = (0, _array).first(this.children) || null;
            return firstChild;
          }
        },
        {
          key: "mount",
          value: function mount(parent, children) {
            this.parent = parent;
            this.children = children;
          }
        },
        {
          key: "unmount",
          value: function unmount() {
            this.parent = null;
            this.children = null;
          }
        }
      ]);
      return Element2;
    }();
    exports.default = Element;
  });

  // lib/reactClass.js
  var require_reactClass = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var ReactClass = /* @__PURE__ */ function() {
      function ReactClass2(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins) {
        _classCallCheck(this, ReactClass2);
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
      _createClass(ReactClass2, [
        {
          key: "getInitialState",
          value: function getInitialState() {
            return {};
          }
        },
        {
          key: "getChildContext",
          value: function getChildContext(context) {
            return context;
          }
        },
        {
          key: "componentDidMount",
          value: function componentDidMount() {
          }
        },
        {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
          }
        }
      ], [
        {
          key: "create",
          value: function create(object) {
            var render = object.render, getInitialState = object.getInitialState, getChildContext = object.getChildContext, componentDidMount = object.componentDidMount, componentWillUnmount = object.componentWillUnmount, mixins = object.mixins;
            return new ReactClass2(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins);
          }
        }
      ]);
      return ReactClass2;
    }();
    exports.default = ReactClass;
  });

  // lib/reactComponent.js
  var require_reactComponent = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var ReactComponent = /* @__PURE__ */ function() {
      function ReactComponent2() {
        _classCallCheck(this, ReactComponent2);
      }
      _createClass(ReactComponent2, [
        {
          key: "getInitialState",
          value: function getInitialState() {
            return {};
          }
        },
        {
          key: "getChildContext",
          value: function getChildContext(context) {
            return context;
          }
        },
        {
          key: "componentDidMount",
          value: function componentDidMount() {
          }
        },
        {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
          }
        }
      ]);
      return ReactComponent2;
    }();
    exports.default = ReactComponent;
  });

  // lib/mixins/reactElement.js
  var require_reactElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
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
      return null;
    }
    function getStyle(name) {
      var firstChild = this.getFirstChild();
      return firstChild.getStyle(name);
    }
    function setStyle(name, value) {
      var firstChild = this.getFirstChild();
      firstChild.setStyle(name, value);
    }
    var _default = {
      setAttribute,
      getAttribute,
      clearAttribute,
      addAttribute,
      removeAttribute,
      hasAttribute,
      setClass,
      addClass,
      removeClass,
      toggleClass,
      hasClass,
      hasClasses,
      clearClasses,
      getTagName,
      getStyle,
      setStyle
    };
    exports.default = _default;
  });

  // lib/element/react.js
  var require_react = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element());
    var _reactElement = _interopRequireDefault2(require_reactElement());
    var _array = require_array();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    var ReactElement = /* @__PURE__ */ function(Element) {
      _inherits(ReactElement2, Element);
      function ReactElement2(props) {
        _classCallCheck(this, ReactElement2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactElement2).call(this, props));
        _this.state = void 0;
        _this.context = void 0;
        return _this;
      }
      _createClass(ReactElement2, [
        {
          key: "mount",
          value: function mount(parent, reference, context) {
            var _this = this;
            this.context = context;
            var childContext = this.getChildContext(context), children = (0, _array).guarantee(this.render());
            _get(_getPrototypeOf(ReactElement2.prototype), "mount", this).call(this, parent, children);
            children.forEach(function(child) {
              var childParent = _this, childReference = reference;
              child.mount(childParent, childReference, childContext);
            });
            this.componentDidMount();
          }
        },
        {
          key: "unmount",
          value: function unmount(context) {
            this.context = context;
            this.componentWillUnmount();
            var childContext = this.getChildContext(context), children = this.getChildren();
            children.forEach(function(child) {
              return child.unmount(childContext);
            });
            _get(_getPrototypeOf(ReactElement2.prototype), "unmount", this).call(this);
          }
        },
        {
          key: "remount",
          value: function remount(update) {
            var childParent = this, childReference = this.getChildReference(), childContext = this.getChildContext(this.context);
            this.children.forEach(function(child) {
              return child.unmount(childContext);
            });
            this.children = (0, _array).guarantee(this.render(update));
            this.children.forEach(function(child) {
              return child.mount(childParent, childReference, childContext);
            });
          }
        },
        {
          key: "getDOMElement",
          value: function getDOMElement() {
            return null;
          }
        },
        {
          key: "getState",
          value: function getState() {
            return this.state;
          }
        },
        {
          key: "setInitialState",
          value: function setInitialState(initialState) {
            this.state = initialState;
          }
        },
        {
          key: "setState",
          value: function setState(state) {
            this.state = state;
            this.remount();
          }
        },
        {
          key: "updateState",
          value: function updateState(newState) {
            var oldState = this.state;
            this.state = Object.assign(oldState, newState);
            this.remount();
          }
        },
        {
          key: "forceUpdate",
          value: function forceUpdate(update) {
            this.remount(update);
          }
        },
        {
          key: "getChildReference",
          value: function getChildReference() {
            var parent = this.getParent(), child = this;
            return reference1(parent, child);
          }
        }
      ]);
      return ReactElement2;
    }(_wrapNativeSuper(_element.default));
    Object.assign(ReactElement.prototype, _reactElement.default);
    var _default = ReactElement;
    exports.default = _default;
    function reference1(parent, child) {
      var reference = findReference(parent, child), parentDOMElement = parent.getDOMElement();
      while (reference === null && parentDOMElement === null) {
        child = parent;
        parent = parent.getParent();
        reference = findReference(parent, child);
        parentDOMElement = parent.getDOMElement();
      }
      return reference;
    }
    function findReference(parent, child) {
      var children = parent.getChildren(), remainingChildren = (0, _array).remaining(child, children);
      return remainingChildren.reduce(function(reference, remainingChild) {
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
  });

  // lib/element/react/class.js
  var require_class = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault2(require_react());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var ReactClassElement = /* @__PURE__ */ function(ReactElement) {
      _inherits(ReactClassElement2, ReactElement);
      function ReactClassElement2(reactClass, props) {
        _classCallCheck(this, ReactClassElement2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactClassElement2).call(this, props));
        _this.reactClass = reactClass;
        var initialState = _this.getInitialState();
        _this.setInitialState(initialState);
        return _this;
      }
      _createClass(ReactClassElement2, [
        {
          key: "render",
          value: function render(update) {
            return this.reactClass.render.call(this, update);
          }
        },
        {
          key: "getInitialState",
          value: function getInitialState() {
            return this.reactClass.getInitialState.call(this);
          }
        },
        {
          key: "getChildContext",
          value: function getChildContext(context) {
            return this.reactClass.getChildContext.call(this, context);
          }
        },
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            this.reactClass.componentDidMount.call(this);
          }
        },
        {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.reactClass.componentWillUnmount.call(this);
          }
        }
      ]);
      return ReactClassElement2;
    }(_react.default);
    exports.default = ReactClassElement;
  });

  // lib/element/react/function.js
  var require_function = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault2(require_react());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var ReactFunctionElement = /* @__PURE__ */ function(ReactElement) {
      _inherits(ReactFunctionElement2, ReactElement);
      function ReactFunctionElement2(reactFunction, props) {
        _classCallCheck(this, ReactFunctionElement2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactFunctionElement2).call(this, props));
        _this.reactFunction = reactFunction;
        return _this;
      }
      _createClass(ReactFunctionElement2, [
        {
          key: "render",
          value: function render(update) {
            return this.reactFunction(this.props, this.context, this);
          }
        },
        {
          key: "getInitialState",
          value: function getInitialState() {
          }
        },
        {
          key: "getChildContext",
          value: function getChildContext(context) {
            return context;
          }
        },
        {
          key: "componentDidMount",
          value: function componentDidMount() {
          }
        },
        {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
          }
        }
      ]);
      return ReactFunctionElement2;
    }(_react.default);
    exports.default = ReactFunctionElement;
  });

  // lib/element/react/component.js
  var require_component = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault2(require_react());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var ReactComponentElement = /* @__PURE__ */ function(ReactElement) {
      _inherits(ReactComponentElement2, ReactElement);
      function ReactComponentElement2(reactComponent, props) {
        _classCallCheck(this, ReactComponentElement2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactComponentElement2).call(this, props));
        _this.reactComponent = reactComponent;
        var initialState = _this.getInitialState();
        _this.setInitialState(initialState);
        return _this;
      }
      _createClass(ReactComponentElement2, [
        {
          key: "render",
          value: function render(update) {
            return this.reactComponent.render.call(this, update);
          }
        },
        {
          key: "getInitialState",
          value: function getInitialState() {
            return this.reactComponent.getInitialState.call(this);
          }
        },
        {
          key: "getChildContext",
          value: function getChildContext(context) {
            return this.reactComponent.getChildContext.call(this, context);
          }
        },
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            this.reactComponent.componentDidMount.call(this);
          }
        },
        {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.reactComponent.componentWillUnmount.call(this);
          }
        }
      ]);
      return ReactComponentElement2;
    }(_react.default);
    exports.default = ReactComponentElement;
  });

  // lib/element/virtualDOMNode.js
  var require_virtualDOMNode = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    var VirtualDOMNode = /* @__PURE__ */ function(Element) {
      _inherits(VirtualDOMNode2, Element);
      function VirtualDOMNode2(props, domElement) {
        _classCallCheck(this, VirtualDOMNode2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(VirtualDOMNode2).call(this, props));
        _this.domElement = domElement;
        return _this;
      }
      _createClass(VirtualDOMNode2, [
        {
          key: "getDOMElement",
          value: function getDOMElement() {
            return this.domElement;
          }
        },
        {
          key: "mount",
          value: function mount(parent, reference) {
            var children = this.getChildren();
            _get(_getPrototypeOf(VirtualDOMNode2.prototype), "mount", this).call(this, parent, children);
            parentDOMElement1(parent).insertBefore(this.domElement, referenceDOMElement1(reference));
            return this.domElement;
          }
        },
        {
          key: "unmount",
          value: function unmount() {
            this.domElement.parentElement.removeChild(this.domElement);
            _get(_getPrototypeOf(VirtualDOMNode2.prototype), "unmount", this).call(this);
          }
        }
      ], [
        {
          key: "fromDOMElement",
          value: function fromDOMElement(domElement) {
            var children = [], props = {
              children
            }, virtualDOMNode = new VirtualDOMNode2(props, domElement);
            return virtualDOMNode;
          }
        }
      ]);
      return VirtualDOMNode2;
    }(_wrapNativeSuper(_element.default));
    exports.default = VirtualDOMNode;
    function parentDOMElement1(parent) {
      var parentDOMElement = parent.getDOMElement();
      while (parentDOMElement === null) {
        parent = parent.getParent();
        parentDOMElement = parent.getDOMElement();
      }
      return parentDOMElement;
    }
    function referenceDOMElement1(reference) {
      var referenceDOMElement = reference !== null ? reference.getDOMElement() : null;
      return referenceDOMElement;
    }
  });

  // lib/element/virtualDOMNode/textElement.js
  var require_textElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _virtualDOMNode = _interopRequireDefault2(require_virtualDOMNode());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var VirtualDOMTextElement = /* @__PURE__ */ function(VirtualDOMNode) {
      _inherits(VirtualDOMTextElement2, VirtualDOMNode);
      function VirtualDOMTextElement2(text) {
        _classCallCheck(this, VirtualDOMTextElement2);
        var domElement = document.createTextNode(text), children = [], props = {
          children
        };
        return _possibleConstructorReturn(this, _getPrototypeOf(VirtualDOMTextElement2).call(this, props, domElement));
      }
      _createClass(VirtualDOMTextElement2, [
        {
          key: "mount",
          value: function mount(parent, reference, context) {
            _get(_getPrototypeOf(VirtualDOMTextElement2.prototype), "mount", this).call(this, parent, reference);
          }
        },
        {
          key: "unmount",
          value: function unmount(context) {
            _get(_getPrototypeOf(VirtualDOMTextElement2.prototype), "unmount", this).call(this);
          }
        },
        {
          key: "getText",
          value: function getText() {
            var nodeValue = this.domElement.nodeValue, text = nodeValue;
            return text;
          }
        },
        {
          key: "setText",
          value: function setText(text) {
            var nodeValue = text;
            this.domElement.nodeValue = nodeValue;
          }
        }
      ]);
      return VirtualDOMTextElement2;
    }(_virtualDOMNode.default);
    exports.default = VirtualDOMTextElement;
  });

  // lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HTTP_WWW_W3_ORG_2000_SVG = exports.EMPTY_STRING = exports.CLASS_NAME = exports.HTML_FOR = exports.FUNCTION = exports.BOOLEAN = exports.OBJECT = exports.STRING = exports.CLASS = exports.FOR = void 0;
    var FOR = "for";
    exports.FOR = FOR;
    var CLASS = "class";
    exports.CLASS = CLASS;
    var STRING = "string";
    exports.STRING = STRING;
    var OBJECT = "object";
    exports.OBJECT = OBJECT;
    var BOOLEAN = "boolean";
    exports.BOOLEAN = BOOLEAN;
    var FUNCTION = "function";
    exports.FUNCTION = FUNCTION;
    var HTML_FOR = "htmlFor";
    exports.HTML_FOR = HTML_FOR;
    var CLASS_NAME = "className";
    exports.CLASS_NAME = CLASS_NAME;
    var EMPTY_STRING = "";
    exports.EMPTY_STRING = EMPTY_STRING;
    var HTTP_WWW_W3_ORG_2000_SVG = "http://www.w3.org/2000/svg";
    exports.HTTP_WWW_W3_ORG_2000_SVG = HTTP_WWW_W3_ORG_2000_SVG;
  });

  // lib/mixins/virtualDOMElement.js
  var require_virtualDOMElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function setAttribute(name, value) {
      if (name === _constants.CLASS_NAME) {
        name = _constants.CLASS;
      }
      if (name === _constants.HTML_FOR) {
        name = _constants.FOR;
      }
      if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.OBJECT) {
        var _this = this;
        var keys = Object.keys(value);
        keys.forEach(function(key) {
          _this.domElement[name][key] = value[key];
        });
      } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.BOOLEAN) {
        if (value) {
          value = name;
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
      var _this = this;
      return classNames.every(function(className) {
        return _this.hasClass(className);
      });
    }
    function clearClasses() {
      this.domElement.className = _constants.EMPTY_STRING;
    }
    function getTagName() {
      return this.domElement.tagName;
    }
    function getStyle(name) {
      return this.domElement.style[name];
    }
    function setStyle(name, value) {
      this.domElement.style[name] = value;
    }
    var _default = {
      setAttribute,
      getAttribute,
      clearAttribute,
      addAttribute,
      removeAttribute,
      hasAttribute,
      setClass,
      addClass,
      removeClass,
      toggleClass,
      hasClass,
      hasClasses,
      clearClasses,
      getTagName,
      getStyle,
      setStyle
    };
    exports.default = _default;
  });

  // lib/element/virtualDOMNode/element.js
  var require_element2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _virtualDOMNode = _interopRequireDefault2(require_virtualDOMNode());
    var _virtualDOMElement = _interopRequireDefault2(require_virtualDOMElement());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var VirtualDOMElement = /* @__PURE__ */ function(VirtualDOMNode) {
      _inherits(VirtualDOMElement2, VirtualDOMNode);
      function VirtualDOMElement2() {
        _classCallCheck(this, VirtualDOMElement2);
        return _possibleConstructorReturn(this, _getPrototypeOf(VirtualDOMElement2).apply(this, arguments));
      }
      _createClass(VirtualDOMElement2, [
        {
          key: "mount",
          value: function mount(parent, reference, context) {
            _get(_getPrototypeOf(VirtualDOMElement2.prototype), "mount", this).call(this, parent, reference);
            var childParent = this, childReference = null, childContext = context, children = this.getChildren();
            children.forEach(function(child) {
              return child.mount(childParent, childReference, childContext);
            });
            this.applyProps();
          }
        },
        {
          key: "unmount",
          value: function unmount(context) {
            var childContext = context, children = this.getChildren();
            children.forEach(function(child) {
              return child.unmount(childContext);
            });
            _get(_getPrototypeOf(VirtualDOMElement2.prototype), "unmount", this).call(this);
          }
        },
        {
          key: "applyProps",
          value: function applyProps() {
            var _this = this;
            var names = Object.keys(this.props);
            names.forEach(function(name) {
              var value = _this.props[name];
              if (false) {
              } else if (_this.isHandlerName(name)) {
                _this.setHandler(name, value);
              } else if (_this.isAttributeName(name)) {
                _this.setAttribute(name, value);
              } else if (name === "ref") {
                var callback = value;
                callback(_this.domElement);
              }
            });
          }
        },
        {
          key: "setHandler",
          value: function setHandler(name, value) {
            var eventType = name.substr(2).toLowerCase(), handler = value;
            this.domElement.addEventListener(eventType, handler);
          }
        },
        {
          key: "isHandlerName",
          value: function isHandlerName(name) {
            return name.match(/^on/);
          }
        }
      ]);
      return VirtualDOMElement2;
    }(_virtualDOMNode.default);
    Object.assign(VirtualDOMElement.prototype, _virtualDOMElement.default);
    var _default = VirtualDOMElement;
    exports.default = _default;
  });

  // lib/utilities/name.js
  var require_name = __commonJS((exports) => {
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
    var svgTagNames = [
      "altGlyph",
      "animate",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "animation",
      "audio",
      "circle",
      "clipPath",
      "color-profile",
      "cursor",
      "defs",
      "desc",
      "discard",
      "ellipse",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "filter",
      "font",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-uri",
      "foreignObject",
      "g",
      "glyph",
      "glyphRef",
      "handler",
      "hatch",
      "hatchpath",
      "hkern",
      "image",
      "line",
      "linearGradient",
      "listener",
      "marker",
      "mask",
      "mesh",
      "meshgradient",
      "meshpatch",
      "meshrow",
      "metadata",
      "missing-glyph",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "prefetch",
      "radialGradient",
      "rect",
      "script",
      "set",
      "solidcolor",
      "stop",
      "style",
      "svg",
      "switch",
      "symbol",
      "tbreak",
      "text",
      "textArea",
      "textPath",
      "title",
      "tref",
      "tspan",
      "unknown",
      "use",
      "video",
      "view",
      "vkern"
    ];
    var svgAttributeNames = [
      "accent-height",
      "accumulate",
      "additive",
      "alignment-baseline",
      "alphabetic",
      "amplitude",
      "arabic-form",
      "ascent",
      "attributeName",
      "attributeType",
      "azimuth",
      "bandwidth",
      "baseFrequency",
      "baseProfile",
      "baseline-shift",
      "bbox",
      "begin",
      "bias",
      "by",
      "calcMode",
      "cap-height",
      "clip",
      "className",
      "clip-path",
      "clip-rule",
      "clipPathUnits",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "contentScriptType",
      "contentStyleType",
      "crossorigin",
      "cursor",
      "cx",
      "cy",
      "d",
      "defaultAction",
      "descent",
      "diffuseConstant",
      "direction",
      "display",
      "divisor",
      "dominant-baseline",
      "download",
      "dur",
      "dx",
      "dy",
      "edgeMode",
      "editable",
      "elevation",
      "enable-background",
      "end",
      "event",
      "exponent",
      "externalResourcesRequired",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "filterRes",
      "filterUnits",
      "flood-color",
      "flood-opacity",
      "focusHighlight",
      "focusable",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "format",
      "fr",
      "from",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "handler",
      "hanging",
      "hatchContentUnits",
      "hatchUnits",
      "height",
      "horiz-adv-x",
      "horiz-origin-x",
      "horiz-origin-y",
      "href",
      "hreflang",
      "id",
      "ideographic",
      "image-rendering",
      "in",
      "in2",
      "initialVisibility",
      "intercept",
      "k",
      "k1",
      "k2",
      "k3",
      "k4",
      "kernelMatrix",
      "kernelUnitLength",
      "kerning",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "letter-spacing",
      "lighting-color",
      "limitingConeAngle",
      "local",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "mask",
      "maskContentUnits",
      "maskUnits",
      "mathematical",
      "max",
      "media",
      "mediaCharacterEncoding",
      "mediaContentEncodings",
      "mediaSize",
      "mediaTime",
      "method",
      "min",
      "mode",
      "name",
      "nav-down",
      "nav-down-left",
      "nav-down-right",
      "nav-left",
      "nav-next",
      "nav-prev",
      "nav-right",
      "nav-up",
      "nav-up-left",
      "nav-up-right",
      "numOctaves",
      "observer",
      "offset",
      "opacity",
      "operator",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "overlay",
      "overline-position",
      "overline-thickness",
      "panose-1",
      "path",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "phase",
      "pitch",
      "playbackOrder",
      "playbackorder",
      "pointer-events",
      "points",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "propagate",
      "r",
      "radius",
      "refX",
      "refY",
      "rendering-intent",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "requiredFonts",
      "requiredFormats",
      "restart",
      "result",
      "rotate",
      "rx",
      "ry",
      "scale",
      "seed",
      "shape-rendering",
      "side",
      "slope",
      "snapshotTime",
      "spacing",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "src",
      "startOffset",
      "stdDeviation",
      "stemh",
      "stemv",
      "stitchTiles",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "string",
      "stroke",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "style",
      "surfaceScale",
      "syncBehavior",
      "syncBehaviorDefault",
      "syncMaster",
      "syncTolerance",
      "syncToleranceDefault",
      "systemLanguage",
      "tableValues",
      "target",
      "targetX",
      "targetY",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "textLength",
      "timelineBegin",
      "timelinebegin",
      "title",
      "to",
      "transform",
      "transformBehavior",
      "type",
      "u1",
      "u2",
      "underline-position",
      "underline-thickness",
      "unicode",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "values",
      "version",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "viewBox",
      "viewTarget",
      "visibility",
      "width",
      "widths",
      "word-spacing",
      "writing-mode",
      "x",
      "x-height",
      "x1",
      "x2",
      "xChannelSelector",
      "y",
      "y1",
      "y2",
      "yChannelSelector",
      "z",
      "zoomAndPan"
    ];
    var htmlAttributeNames = [
      "accept",
      "acceptCharset",
      "accessKey",
      "action",
      "allow",
      "allowFullScreen",
      "allowTransparency",
      "alt",
      "async",
      "autoComplete",
      "autoFocus",
      "autoPlay",
      "capture",
      "cellPadding",
      "cellSpacing",
      "challenge",
      "charSet",
      "checked",
      "cite",
      "classID",
      "className",
      "colSpan",
      "cols",
      "content",
      "contentEditable",
      "contextMenu",
      "controls",
      "coords",
      "crossOrigin",
      "data",
      "dateTime",
      "default",
      "defer",
      "dir",
      "disabled",
      "download",
      "draggable",
      "encType",
      "form",
      "formAction",
      "formEncType",
      "formMethod",
      "formNoValidate",
      "formTarget",
      "frameBorder",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hrefLang",
      "htmlFor",
      "httpEquiv",
      "icon",
      "id",
      "inputMode",
      "integrity",
      "is",
      "keyParams",
      "keyType",
      "kind",
      "label",
      "lang",
      "list",
      "loop",
      "low",
      "manifest",
      "marginHeight",
      "marginWidth",
      "max",
      "maxLength",
      "media",
      "mediaGroup",
      "method",
      "min",
      "minLength",
      "multiple",
      "muted",
      "name",
      "noValidate",
      "nonce",
      "open",
      "optimum",
      "pattern",
      "placeholder",
      "poster",
      "preload",
      "profile",
      "radioGroup",
      "readOnly",
      "rel",
      "required",
      "reversed",
      "role",
      "rowSpan",
      "rows",
      "sandbox",
      "scope",
      "scoped",
      "scrolling",
      "seamless",
      "selected",
      "shape",
      "size",
      "sizes",
      "span",
      "spellCheck",
      "src",
      "srcDoc",
      "srcLang",
      "srcSet",
      "start",
      "step",
      "style",
      "summary",
      "tabIndex",
      "target",
      "title",
      "type",
      "useMap",
      "value",
      "width",
      "wmode",
      "wrap"
    ];
  });

  // lib/element/virtualDOMNode/element/html.js
  var require_html = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _name = require_name();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var VirtualDOMHTMLElement = /* @__PURE__ */ function(VirtualDOMElement) {
      _inherits(VirtualDOMHTMLElement2, VirtualDOMElement);
      function VirtualDOMHTMLElement2(tagName, props) {
        _classCallCheck(this, VirtualDOMHTMLElement2);
        var domElement = document.createElement(tagName);
        return _possibleConstructorReturn(this, _getPrototypeOf(VirtualDOMHTMLElement2).call(this, props, domElement));
      }
      _createClass(VirtualDOMHTMLElement2, [
        {
          key: "isAttributeName",
          value: function isAttributeName(name) {
            return (0, _name).isHTMLAttributeName(name);
          }
        }
      ]);
      return VirtualDOMHTMLElement2;
    }(_element.default);
    exports.default = VirtualDOMHTMLElement;
  });

  // lib/element/virtualDOMNode/element/svg.js
  var require_svg = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _name = require_name();
    var _constants = require_constants();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var VirtualDOMSVGElement = /* @__PURE__ */ function(VirtualDOMElement) {
      _inherits(VirtualDOMSVGElement2, VirtualDOMElement);
      function VirtualDOMSVGElement2(tagName, props) {
        _classCallCheck(this, VirtualDOMSVGElement2);
        var domElement = document.createElementNS(_constants.HTTP_WWW_W3_ORG_2000_SVG, tagName);
        return _possibleConstructorReturn(this, _getPrototypeOf(VirtualDOMSVGElement2).call(this, props, domElement));
      }
      _createClass(VirtualDOMSVGElement2, [
        {
          key: "isAttributeName",
          value: function isAttributeName(name) {
            return (0, _name).isSVGAttributeName(name);
          }
        }
      ]);
      return VirtualDOMSVGElement2;
    }(_element.default);
    exports.default = VirtualDOMSVGElement;
  });

  // lib/react.js
  var require_react2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element());
    var _reactClass = _interopRequireDefault2(require_reactClass());
    var _reactComponent = _interopRequireDefault2(require_reactComponent());
    var _class = _interopRequireDefault2(require_class());
    var _function = _interopRequireDefault2(require_function());
    var _component = _interopRequireDefault2(require_component());
    var _textElement = _interopRequireDefault2(require_textElement());
    var _html = _interopRequireDefault2(require_html());
    var _svg = _interopRequireDefault2(require_svg());
    var _array = require_array();
    var _name = require_name();
    var _constants = require_constants();
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function createClass(object) {
      return _reactClass.default.create(object);
    }
    function createElement(firstArgument, properties) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }
      var element = null;
      if (firstArgument !== void 0) {
        var children = childrenFromRemainingArguments(remainingArguments), props = Object.assign({}, properties, {
          children
        });
        if (false) {
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.STRING) {
          var tagName = firstArgument, virtualDOMElement = (0, _name).isSVGTagName(tagName) ? new _svg.default(tagName, props) : new _html.default(tagName, props);
          element = virtualDOMElement;
        } else if (_instanceof(firstArgument, _reactClass.default)) {
          var reactClass = firstArgument, reactClassElement = new _class.default(reactClass, props);
          element = reactClassElement;
          var mixins = reactClass.mixins;
          assignMixins(mixins, element);
        } else if (isSubclassOf(firstArgument, _reactComponent.default)) {
          var ReactComponent = firstArgument, reactComponent = new ReactComponent(), reactComponentElement = new _component.default(reactComponent, props);
          element = reactComponentElement;
          assignReactComponentMixins(ReactComponent, element);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.FUNCTION) {
          var reactFunction = firstArgument, reactFunctionElement = new _function.default(reactFunction, props);
          element = reactFunctionElement;
        }
      }
      return element;
    }
    var Component = _reactComponent.default;
    var React = {
      Component,
      createClass,
      createElement
    };
    var _default = React;
    exports.default = _default;
    function childrenFromRemainingArguments(remainingArguments) {
      remainingArguments = (0, _array).flatten(remainingArguments);
      var children = [];
      remainingArguments.forEach(function(childArgument) {
        var child;
        if (childArgument) {
          if (isSubclassOf(childArgument.constructor, _element.default)) {
            child = childArgument;
          } else {
            var text = childArgument, virtualDOMTextElement = new _textElement.default(text);
            child = virtualDOMTextElement;
          }
          children.push(child);
        }
      });
      return children;
    }
    function assignReactComponentMixins(reactComponent, element) {
      var mixins = reactComponent.mixins;
      reactComponent = Object.getPrototypeOf(reactComponent);
      if (reactComponent !== _reactComponent.default) {
        assignReactComponentMixins(reactComponent, element);
      }
      assignMixins(mixins, element);
    }
    function assignMixins(mixins, element) {
      if (mixins) {
        mixins.forEach(function(mixin) {
          var name = mixin.name;
          element[name] = mixin.bind(element);
        });
      }
    }
    function isSubclassOf(argument, Class) {
      var subclass = false;
      if (argument.name === Class.name) {
        subclass = true;
      } else {
        argument = Object.getPrototypeOf(argument);
        if (argument !== null) {
          subclass = isSubclassOf(argument, Class);
        }
      }
      return subclass;
    }
  });

  // lib/reactDOM.js
  var require_reactDOM = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _virtualDOMNode = _interopRequireDefault2(require_virtualDOMNode());
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ReactDOM = /* @__PURE__ */ function() {
      function ReactDOM2() {
        _classCallCheck(this, ReactDOM2);
      }
      _createClass(ReactDOM2, null, [
        {
          key: "render",
          value: function render(element, parentDOMElement) {
            var parent = _virtualDOMNode.default.fromDOMElement(parentDOMElement), reference = null, context = {};
            element.mount(parent, reference, context);
          }
        }
      ]);
      return ReactDOM2;
    }();
    exports.default = ReactDOM;
  });

  // lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "React", {
      enumerable: true,
      get: function() {
        return _react.default;
      }
    });
    Object.defineProperty(exports, "ReactDOM", {
      enumerable: true,
      get: function() {
        return _reactDOM.default;
      }
    });
    var _react = _interopRequireDefault2(require_react2());
    var _reactDOM = _interopRequireDefault2(require_reactDOM());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // lib/example/reduxApp/redux.js
  var require_redux = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.combineReducers = exports.createStore = void 0;
    var createStore = function(reducer) {
      var state, listeners = [];
      var getState = function() {
        return state;
      };
      var dispatch = function(action) {
        state = reducer(state, action);
        listeners.forEach(function(listener) {
          return listener();
        });
      };
      var subscribe = function(listener) {
        listeners.push(listener);
        return function() {
          unsubscribe(listener);
        };
      };
      var unsubscribe = function(l) {
        listeners = listeners.filter(function(listener) {
          return listener !== l;
        });
      };
      dispatch();
      return {
        getState,
        dispatch,
        subscribe,
        unsubscribe
      };
    };
    exports.createStore = createStore;
    var combineReducers = function(reducers) {
      return function(param, action) {
        var state = param === void 0 ? {} : param;
        var keys = Object.keys(reducers), nextState1 = keys.reduce(function(nextState, key) {
          var reducer = reducers[key];
          nextState[key] = reducer(state[key], action);
          return nextState;
        }, {});
        return nextState1;
      };
    };
    exports.combineReducers = combineReducers;
  });

  // lib/example/reduxApp/constants.js
  var require_constants2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SET_VISIBILITY_FILTER = exports.SHOW_COMPLETED = exports.EMPTY_STRING = exports.LINE_THROUGH = exports.TOGGLE_TODO = exports.SHOW_ACTIVE = exports.SHOW_ALL = exports.ADD_TODO = exports.NONE = exports.ROOT = void 0;
    var ROOT = "root";
    exports.ROOT = ROOT;
    var NONE = "none";
    exports.NONE = NONE;
    var ADD_TODO = "ADD_TODO";
    exports.ADD_TODO = ADD_TODO;
    var SHOW_ALL = "SHOW_ALL";
    exports.SHOW_ALL = SHOW_ALL;
    var SHOW_ACTIVE = "SHOW_ACTIVE";
    exports.SHOW_ACTIVE = SHOW_ACTIVE;
    var TOGGLE_TODO = "TOGGLE_TODO";
    exports.TOGGLE_TODO = TOGGLE_TODO;
    var LINE_THROUGH = "line-through";
    exports.LINE_THROUGH = LINE_THROUGH;
    var EMPTY_STRING = "";
    exports.EMPTY_STRING = EMPTY_STRING;
    var SHOW_COMPLETED = "SHOW_COMPLETED";
    exports.SHOW_COMPLETED = SHOW_COMPLETED;
    var SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
    exports.SET_VISIBILITY_FILTER = SET_VISIBILITY_FILTER;
  });

  // lib/example/reduxApp/reducer/todos.js
  var require_todos = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = todos1;
    var _constants = require_constants2();
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    function todos1(param, param1) {
      var state = param === void 0 ? [] : param, action = param1 === void 0 ? {} : param1;
      var type = action.type;
      var todos = state;
      switch (type) {
        case _constants.ADD_TODO:
          todos = addTodoToTodos(todos, action);
          break;
        case _constants.TOGGLE_TODO:
          todos = toggleTodos(todos, action);
          break;
      }
      state = todos;
      return state;
    }
    function addTodoToTodos(todos, action) {
      var id = action.id, text = action.text, completed = false, todo = {
        id,
        text,
        completed
      };
      todos = _toConsumableArray(todos).concat([
        todo
      ]);
      return todos;
    }
    function toggleTodos(todos, action) {
      var id = action.id;
      todos = todos.map(function(todo) {
        if (todo.id === id) {
          var completed = todo.completed;
          completed = !completed;
          todo.completed = completed;
        }
        return todo;
      });
      return todos;
    }
  });

  // lib/example/reduxApp/reducer/visibilityFilter.js
  var require_visibilityFilter = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = visibilityFilter1;
    var _constants = require_constants2();
    function visibilityFilter1(param, param1) {
      var state = param === void 0 ? _constants.SHOW_ALL : param, action = param1 === void 0 ? {} : param1;
      var type = action.type;
      switch (type) {
        case _constants.SET_VISIBILITY_FILTER:
          var visibilityFilter = action.visibilityFilter;
          state = visibilityFilter;
          break;
      }
      return state;
    }
  });

  // lib/example/reduxApp/reducer.js
  var require_reducer = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _redux = require_redux();
    var _todos = _interopRequireDefault2(require_todos());
    var _visibilityFilter = _interopRequireDefault2(require_visibilityFilter());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var reducer = (0, _redux).combineReducers({
      todos: _todos.default,
      visibilityFilter: _visibilityFilter.default
    });
    var _default = reducer;
    exports.default = _default;
  });

  // lib/example/reduxApp/component/filterLink.js
  var require_filterLink = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = require_lib();
    var _constants = require_constants2();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var Component1 = _index.React.Component;
    var FilterLink = /* @__PURE__ */ function(Component) {
      _inherits(FilterLink2, Component);
      function FilterLink2() {
        _classCallCheck(this, FilterLink2);
        return _possibleConstructorReturn(this, _getPrototypeOf(FilterLink2).apply(this, arguments));
      }
      _createClass(FilterLink2, [
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this = this;
            var _context = this.context, store = _context.store;
            this.unsubscribe = store.subscribe(function() {
              return _this.forceUpdate();
            });
          }
        },
        {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.unsubscribe();
          }
        },
        {
          key: "render",
          value: function render() {
            var _context = this.context, store = _context.store, state = store.getState(), visibilityFilter1 = state.visibilityFilter, _props = this.props, children = _props.children, filter = _props.filter, active = filter === visibilityFilter1;
            if (active) {
              return /* @__PURE__ */ _index.React.createElement("span", null, children);
            }
            return /* @__PURE__ */ _index.React.createElement("a", {
              href: "#",
              className: "filter",
              onClick: function(event) {
                event.preventDefault();
                var type = _constants.SET_VISIBILITY_FILTER, visibilityFilter = filter, action = {
                  type,
                  visibilityFilter
                };
                store.dispatch(action);
              }
            }, children);
          }
        }
      ]);
      return FilterLink2;
    }(Component1);
    exports.default = FilterLink;
  });

  // lib/example/reduxApp/component/footer.js
  var require_footer = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = require_lib();
    var _filterLink = _interopRequireDefault2(require_filterLink());
    var _constants = require_constants2();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Footer = function(props, context) {
      return _index.React.createElement("p", null, "Show: ", /* @__PURE__ */ _index.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ALL
      }, "All"), " - ", /* @__PURE__ */ _index.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ACTIVE
      }, "Active"), " - ", /* @__PURE__ */ _index.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_COMPLETED
      }, "Completed"));
    };
    var _default = Footer;
    exports.default = _default;
  });

  // lib/example/reduxApp/component/addTodo.js
  var require_addTodo = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = require_lib();
    var _constants = require_constants2();
    var id = 0;
    var inputDOMElement;
    var AddTodo = function(props, context) {
      var store = context.store;
      return /* @__PURE__ */ _index.React.createElement("div", null, /* @__PURE__ */ _index.React.createElement("input", {
        ref: function(domElement) {
          inputDOMElement = domElement;
        }
      }), /* @__PURE__ */ _index.React.createElement("button", {
        onClick: function() {
          var type = _constants.ADD_TODO, text = inputDOMElement.value, action = {
            type,
            text,
            id
          };
          id++;
          store.dispatch(action);
          inputDOMElement.value = _constants.EMPTY_STRING;
        }
      }, "Add todo"));
    };
    var _default = AddTodo;
    exports.default = _default;
  });

  // lib/example/reduxApp/component/todoListItem.js
  var require_todoListItem = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = require_lib();
    var _constants = require_constants2();
    var TodoListItem = function(props, context) {
      var clickHandler = props.clickHandler, completed = props.completed, text = props.text, textDecoration = completed ? _constants.LINE_THROUGH : _constants.NONE, style = {
        textDecoration
      };
      return /* @__PURE__ */ _index.React.createElement("li", {
        style,
        onClick: clickHandler
      }, text);
    };
    var _default = TodoListItem;
    exports.default = _default;
  });

  // lib/example/reduxApp/component/todoListItems.js
  var require_todoListItems = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = require_lib();
    var _todoListItem = _interopRequireDefault2(require_todoListItem());
    var _constants = require_constants2();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var Component1 = _index.React.Component;
    var TodoListItems = /* @__PURE__ */ function(Component) {
      _inherits(TodoListItems2, Component);
      function TodoListItems2() {
        _classCallCheck(this, TodoListItems2);
        return _possibleConstructorReturn(this, _getPrototypeOf(TodoListItems2).apply(this, arguments));
      }
      _createClass(TodoListItems2, [
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this = this;
            var _context = this.context, store = _context.store;
            this.unsubscribe = store.subscribe(function() {
              return _this.forceUpdate();
            });
          }
        },
        {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.unsubscribe();
          }
        },
        {
          key: "render",
          value: function render() {
            var _context = this.context, store = _context.store, state = store.getState(), todos = state.todos, visibilityFilter = state.visibilityFilter, visibleTodos = getVisibleTodos(todos, visibilityFilter), items = visibleTodos.map(function(visibleTodo) {
              var id = visibleTodo.id, text = visibleTodo.text, completed = visibleTodo.completed;
              return /* @__PURE__ */ _index.React.createElement(_todoListItem.default, {
                text,
                completed,
                clickHandler: function() {
                  var type = _constants.TOGGLE_TODO, action = {
                    type,
                    id
                  };
                  store.dispatch(action);
                }
              });
            });
            return items;
          }
        }
      ]);
      return TodoListItems2;
    }(Component1);
    exports.default = TodoListItems;
    var getVisibleTodos = function(todos, visibilityFilter) {
      var visibleTodos;
      switch (visibilityFilter) {
        case _constants.SHOW_ALL:
          visibleTodos = todos;
          break;
        case _constants.SHOW_ACTIVE:
          visibleTodos = todos.filter(function(todo) {
            var completed = todo.completed, active = !completed;
            return active;
          });
          break;
        case _constants.SHOW_COMPLETED:
          visibleTodos = todos.filter(function(todo) {
            var completed = todo.completed;
            return completed;
          });
          break;
      }
      return visibleTodos;
    };
  });

  // lib/example/reduxApp/component/todoList.js
  var require_todoList = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = require_lib();
    var _todoListItems = _interopRequireDefault2(require_todoListItems());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TodoList = function(props, context) {
      return _index.React.createElement("ul", null, /* @__PURE__ */ _index.React.createElement(_todoListItems.default, null));
    };
    var _default = TodoList;
    exports.default = _default;
  });

  // lib/example/reduxApp/component/todoApp.js
  var require_todoApp = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = require_lib();
    var _footer = _interopRequireDefault2(require_footer());
    var _addTodo = _interopRequireDefault2(require_addTodo());
    var _todoList = _interopRequireDefault2(require_todoList());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TodoApp = function(props, context) {
      return _index.React.createElement("div", null, /* @__PURE__ */ _index.React.createElement(_addTodo.default, null), /* @__PURE__ */ _index.React.createElement(_todoList.default, null), /* @__PURE__ */ _index.React.createElement(_footer.default, null));
    };
    var _default = TodoApp;
    exports.default = _default;
  });

  // lib/example/reduxApp/component/provider.js
  var require_provider = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = require_lib();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var Component1 = _index.React.Component;
    var Provider = /* @__PURE__ */ function(Component) {
      _inherits(Provider2, Component);
      function Provider2() {
        _classCallCheck(this, Provider2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Provider2).apply(this, arguments));
      }
      _createClass(Provider2, [
        {
          key: "getChildContext",
          value: function getChildContext(context) {
            var _props = this.props, store = _props.store, childContext = {
              store
            };
            return childContext;
          }
        },
        {
          key: "render",
          value: function render() {
            var _props = this.props, children = _props.children;
            return children;
          }
        }
      ]);
      return Provider2;
    }(Component1);
    exports.default = Provider;
  });

  // lib/example/reduxApp.js
  var require_reduxApp = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = reduxApp;
    var _index = require_lib();
    var _redux = require_redux();
    var _reducer = _interopRequireDefault2(require_reducer());
    var _todoApp = _interopRequireDefault2(require_todoApp());
    var _provider = _interopRequireDefault2(require_provider());
    var _constants = require_constants2();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function reduxApp() {
      var store = (0, _redux).createStore(_reducer.default), rootDOMElement = document.getElementById(_constants.ROOT);
      _index.ReactDOM.render(/* @__PURE__ */ _index.React.createElement(_provider.default, {
        store
      }, /* @__PURE__ */ _index.React.createElement(_todoApp.default, null)), rootDOMElement);
    }
  });

  // lib/example/vanillaApp/comment.js
  var require_comment = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault2(require_react2());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Comment = _react.default.createClass({
      render: function render(update) {
        return /* @__PURE__ */ _react.default.createElement("div", {
          className: "comment"
        }, /* @__PURE__ */ _react.default.createElement("p", null, this.props.message));
      },
      componentDidMount: function componentDidMount() {
        var message = this.props.message;
        console.log("Comment mounted with message: '".concat(message, "'."));
      },
      componentWillUnmount: function componentWillUnmount() {
        var message = this.props.message;
        console.log("Comment unmounted with message: '".concat(message, "'."));
      },
      displayName: "Comment"
    });
    var _default = Comment;
    exports.default = _default;
  });

  // lib/example/vanillaApp/commentsList.js
  var require_commentsList = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault2(require_react2());
    var _comment = _interopRequireDefault2(require_comment());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var CommentsList = _react.default.createClass({
      getInitialState: function() {
        var messages = [
          "Hello, world!",
          "Hello world again..."
        ], state = {
          messages
        };
        return state;
      },
      componentDidMount: function componentDidMount() {
        console.log("Comments list mounted.");
      },
      render: function render(update) {
        var state = this.getState(), messages = state.messages, comments = messages.map(function(message) {
          return _react.default.createElement(_comment.default, {
            message
          });
        });
        return /* @__PURE__ */ _react.default.createElement("div", {
          className: "comments-list"
        }, comments);
      },
      displayName: "CommentsList"
    });
    var _default = CommentsList;
    exports.default = _default;
  });

  // lib/example/vanillaApp/constants.js
  var require_constants3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TIMEOUT = exports.ROOT = void 0;
    var ROOT = "root";
    exports.ROOT = ROOT;
    var TIMEOUT = 1e3;
    exports.TIMEOUT = TIMEOUT;
  });

  // lib/example/vanillaApp.js
  var require_vanillaApp = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = vanillaApp;
    var _react = _interopRequireDefault2(require_react2());
    var _reactDOM = _interopRequireDefault2(require_reactDOM());
    var _commentsList = _interopRequireDefault2(require_commentsList());
    var _constants = require_constants3();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function vanillaApp() {
      var commentsList = /* @__PURE__ */ _react.default.createElement(_commentsList.default, null), rootDOMElement = document.getElementById(_constants.ROOT);
      _reactDOM.default.render(commentsList, rootDOMElement);
      setTimeout(function() {
        var messages = [
          "Hello world yet again!!!"
        ], state = {
          messages
        };
        commentsList.setState(state);
      }, _constants.TIMEOUT);
    }
  });

  // lib/examples.js
  "use strict";
  var _reduxApp = _interopRequireDefault(require_reduxApp());
  var _vanillaApp = _interopRequireDefault(require_vanillaApp());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  Object.assign(window, {
    reduxApp: _reduxApp.default,
    vanillaApp: _vanillaApp.default
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3V0aWxpdGllcy9hcnJheS5qcyIsICJzcmMvZWxlbWVudC5qcyIsICJzcmMvcmVhY3RDbGFzcy5qcyIsICJzcmMvcmVhY3RDb21wb25lbnQuanMiLCAic3JjL21peGlucy9yZWFjdEVsZW1lbnQuanMiLCAic3JjL2VsZW1lbnQvcmVhY3QuanMiLCAic3JjL2VsZW1lbnQvcmVhY3QvY2xhc3MuanMiLCAic3JjL2VsZW1lbnQvcmVhY3QvZnVuY3Rpb24uanMiLCAic3JjL2VsZW1lbnQvcmVhY3QvY29tcG9uZW50LmpzIiwgInNyYy9lbGVtZW50L3ZpcnR1YWxET01Ob2RlLmpzIiwgInNyYy9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL3RleHRFbGVtZW50LmpzIiwgInNyYy9jb25zdGFudHMuanMiLCAic3JjL21peGlucy92aXJ0dWFsRE9NRWxlbWVudC5qcyIsICJzcmMvZWxlbWVudC92aXJ0dWFsRE9NTm9kZS9lbGVtZW50LmpzIiwgInNyYy91dGlsaXRpZXMvbmFtZS5qcyIsICJzcmMvZWxlbWVudC92aXJ0dWFsRE9NTm9kZS9lbGVtZW50L2h0bWwuanMiLCAic3JjL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC9zdmcuanMiLCAic3JjL3JlYWN0LmpzIiwgInNyYy9yZWFjdERPTS5qcyIsICJzcmMvaW5kZXguanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvcmVkdXguanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29uc3RhbnRzLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdG9kb3MuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvcmVkdWNlci92aXNpYmlsaXR5RmlsdGVyLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29tcG9uZW50L2ZpbHRlckxpbmsuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvYWRkVG9kby5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW1zLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdC5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0FwcC5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXIuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAuanMiLCAic3JjL2V4YW1wbGUvdmFuaWxsYUFwcC9jb21tZW50LmpzIiwgInNyYy9leGFtcGxlL3ZhbmlsbGFBcHAvY29tbWVudHNMaXN0LmpzIiwgInNyYy9leGFtcGxlL3ZhbmlsbGFBcHAvY29uc3RhbnRzLmpzIiwgInNyYy9leGFtcGxlL3ZhbmlsbGFBcHAuanMiLCAic3JjL2V4YW1wbGVzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKChhcnJheSwgZWxlbWVudCkgPT4ge1xuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KGVsZW1lbnQpOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIGFycmF5O1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbWFpbmluZyhlbGVtZW50LCBhcnJheSkge1xuICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIGNvbnN0IGluZGV4ID0gaW5kZXhPZihlbGVtZW50LCBhcnJheSk7XG5cbiAgcmV0dXJuIGFycmF5LnNsaWNlKGluZGV4ICsgMSk7XG59XG5cbmZ1bmN0aW9uIGluZGV4T2YoZWxlbWVudCwgYXJyYXkpIHtcbiAgbGV0IGluZGV4ID0gbnVsbDtcblxuICBhcnJheS5zb21lKChjdXJyZW50RWxlbWVudCwgY3VycmVudEVsZW1lbnRJbmRleCkgPT4ge1xuICAgIGlmIChjdXJyZW50RWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgaW5kZXggPSBjdXJyZW50RWxlbWVudEluZGV4O1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpbmRleDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAgLy8vXG4gIH1cblxuICBnZXRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICBnZXRGaXJzdENoaWxkKCkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGZpcnN0Q2hpbGQ7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIGNoaWxkcmVuKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBudWxsO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0Q2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucykge1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyO1xuXG4gICAgaWYgKGdldEluaXRpYWxTdGF0ZSkgeyB0aGlzLmdldEluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZTsgfVxuICAgIGlmIChnZXRDaGlsZENvbnRleHQpIHsgdGhpcy5nZXRDaGlsZENvbnRleHQgPSBnZXRDaGlsZENvbnRleHQ7IH1cbiAgICBpZiAoY29tcG9uZW50RGlkTW91bnQpIHsgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50OyB9XG4gICAgaWYgKGNvbXBvbmVudFdpbGxVbm1vdW50KSB7IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSBjb21wb25lbnRXaWxsVW5tb3VudDsgfVxuXG4gICAgdGhpcy5taXhpbnMgPSBtaXhpbnM7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKG9iamVjdCkge1xuICAgIGNvbnN0IHsgcmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMgfSA9IG9iamVjdDtcblxuICAgIHJldHVybiBuZXcgUmVhY3RDbGFzcyhyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucyk7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RDb21wb25lbnQge1xuXG5cblxuXG5cblxuXG5cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIFxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICBcbiAgfVxuIFxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuICB9XG5cblxuXG5cblxuXG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmdldEF0dHJpYnV0ZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5jbGVhckF0dHJpYnV0ZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnJlbW92ZUF0dHJpYnV0ZShuYW1lKVxufVxuXG5mdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQXR0cmlidXRlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLmFkZENsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5oYXNDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzc2VzKGNsYXNzTmFtZXMpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmhhc0NsYXNzZXMoY2xhc3NOYW1lcyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3NlcygpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuY2xlYXJDbGFzc2VzKCk7XG59XG5cbmZ1bmN0aW9uIGdldFRhZ05hbWUoKSB7XG4gIHJldHVybiBudWxsOyAgLy8vXG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmdldFN0eWxlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRTdHlsZShuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5zZXRTdHlsZShuYW1lLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0QXR0cmlidXRlLFxuICBnZXRBdHRyaWJ1dGUsXG4gIGNsZWFyQXR0cmlidXRlLFxuICBhZGRBdHRyaWJ1dGUsXG4gIHJlbW92ZUF0dHJpYnV0ZSxcbiAgaGFzQXR0cmlidXRlLFxuICBzZXRDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzcyxcbiAgaGFzQ2xhc3MsXG4gIGhhc0NsYXNzZXMsXG4gIGNsZWFyQ2xhc3NlcyxcbiAgZ2V0VGFnTmFtZSxcbiAgZ2V0U3R5bGUsXG4gIHNldFN0eWxlXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgcmVhY3RFbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcmVhY3RFbGVtZW50XCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZSwgcmVtYWluaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQgPSB1bmRlZmluZWQ7IC8vL1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIoKSk7XG5cbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICByZW1vdW50KHVwZGF0ZSkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCkpO1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7ICAvLy9cbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShuZXdTdGF0ZSkge1xuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5zdGF0ZTsgIC8vL1xuXG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24ob2xkU3RhdGUsIG5ld1N0YXRlKTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgdGhpcy5yZW1vdW50KHVwZGF0ZSk7XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVhY3RFbGVtZW50LnByb3RvdHlwZSwgcmVhY3RFbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDsgLy8vXG5cbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgcmVtYWluaW5nQ2hpbGRyZW4gPSByZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKChyZWZlcmVuY2UsIHJlbWFpbmluZ0NoaWxkKSA9PiB7XG4gICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nQ2hpbGRET01FbGVtZW50ID0gcmVtYWluaW5nQ2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBpZiAocmVtYWluaW5nQ2hpbGRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHJlbWFpbmluZ0NoaWxkOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gbnVsbDtcblxuICAgICAgICBwYXJlbnQgPSByZW1haW5pbmdDaGlsZDsgIC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdEVsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RDbGFzc0VsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENsYXNzLCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3M7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLnJlbmRlci5jYWxsKHRoaXMsIHVwZGF0ZSk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5nZXRJbml0aWFsU3RhdGUuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5nZXRDaGlsZENvbnRleHQuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudERpZE1vdW50LmNhbGwodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuXG5cblxuXG4gIH1cbiBcbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24odGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuIFxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0Q29tcG9uZW50RWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q29tcG9uZW50LCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RDb21wb25lbnQgPSByZWFjdENvbXBvbmVudDtcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LnJlbmRlci5jYWxsKHRoaXMsIHVwZGF0ZSk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQuZ2V0SW5pdGlhbFN0YXRlLmNhbGwodGhpcyk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LmdldENoaWxkQ29udGV4dC5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnREaWRNb3VudC5jYWxsKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnRXaWxsVW5tb3VudC5jYWxsKHRoaXMpO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcnR1YWxET01Ob2RlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBkb21FbGVtZW50KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuICAgIFxuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgY2hpbGRyZW4pO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudChwYXJlbnQpLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSk7XG5cbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudCgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdLFxuICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpcnR1YWxET01Ob2RlID0gbmV3IFZpcnR1YWxET01Ob2RlKHByb3BzLCBkb21FbGVtZW50KTtcblxuICAgIHJldHVybiB2aXJ0dWFsRE9NTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJlbnRET01FbGVtZW50KHBhcmVudCkge1xuICBsZXQgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRET01FbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VET01FbGVtZW50ID0gKHJlZmVyZW5jZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UuZ2V0RE9NRWxlbWVudCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiByZWZlcmVuY2VET01FbGVtZW50O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTU5vZGUgZnJvbSBcIi4uL3ZpcnR1YWxET01Ob2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcnR1YWxET01UZXh0RWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01Ob2RlIHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSxcbiAgICAgICAgICBjaGlsZHJlbiA9IFtdLFxuICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICB9O1xuXG4gICAgc3VwZXIocHJvcHMsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG4gIH1cbiAgXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGdldFRleHQoKSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSxcbiAgICAgICAgICB0ZXh0ID0gbm9kZVZhbHVlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGV4dDsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlID0gbm9kZVZhbHVlO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBGT1IgPSBcImZvclwiO1xuZXhwb3J0IGNvbnN0IENMQVNTID0gXCJjbGFzc1wiO1xuZXhwb3J0IGNvbnN0IFNUUklORyA9IFwic3RyaW5nXCI7XG5leHBvcnQgY29uc3QgT0JKRUNUID0gXCJvYmplY3RcIjtcbmV4cG9ydCBjb25zdCBCT09MRUFOID0gXCJib29sZWFuXCI7XG5leHBvcnQgY29uc3QgRlVOQ1RJT04gPSBcImZ1bmN0aW9uXCI7XG5leHBvcnQgY29uc3QgSFRNTF9GT1IgPSBcImh0bWxGb3JcIjtcbmV4cG9ydCBjb25zdCBDTEFTU19OQU1FID0gXCJjbGFzc05hbWVcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IEhUVFBfV1dXX1czX09SR18yMDAwX1NWRyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRk9SLCBDTEFTUywgT0JKRUNULCBCT09MRUFOLCBDTEFTU19OQU1FLCBIVE1MX0ZPUiwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgPT09IENMQVNTX05BTUUpIHtcbiAgICBuYW1lID0gQ0xBU1M7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gSFRNTF9GT1IpIHtcbiAgICBuYW1lID0gRk9SO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gT0JKRUNUKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBCT09MRUFOKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzc2VzKGNsYXNzTmFtZXMpIHsgcmV0dXJuIGNsYXNzTmFtZXMuZXZlcnkoKGNsYXNzTmFtZSkgPT4gdGhpcy5oYXNDbGFzcyhjbGFzc05hbWUpKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuZnVuY3Rpb24gZ2V0VGFnTmFtZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC50YWdOYW1lOyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTsgfVxuXG5mdW5jdGlvbiBzZXRTdHlsZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTsgfVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldEF0dHJpYnV0ZSxcbiAgZ2V0QXR0cmlidXRlLFxuICBjbGVhckF0dHJpYnV0ZSxcbiAgYWRkQXR0cmlidXRlLFxuICByZW1vdmVBdHRyaWJ1dGUsXG4gIGhhc0F0dHJpYnV0ZSxcbiAgc2V0Q2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlQ2xhc3MsXG4gIGhhc0NsYXNzLFxuICBoYXNDbGFzc2VzLFxuICBjbGVhckNsYXNzZXMsXG4gIGdldFRhZ05hbWUsXG4gIGdldFN0eWxlLFxuICBzZXRTdHlsZVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpcnR1YWxET01Ob2RlIGZyb20gXCIuLi92aXJ0dWFsRE9NTm9kZVwiO1xuXG5pbXBvcnQgdmlydHVhbERPTUVsZW1lbnRNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy92aXJ0dWFsRE9NRWxlbWVudFwiO1xuXG5jbGFzcyBWaXJ0dWFsRE9NRWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01Ob2RlIHtcbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpKTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCkpO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgYXBwbHlQcm9wcygpIHtcbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpO1xuXG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzW25hbWVdO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgICAgdGhpcy5zZXRIYW5kbGVyKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0F0dHJpYnV0ZU5hbWUobmFtZSkpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInJlZlwiKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWU7IC8vL1xuICAgICAgICBcbiAgICAgICAgY2FsbGJhY2sodGhpcy5kb21FbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldEhhbmRsZXIobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgIGhhbmRsZXIpO1xuICB9XG5cblx0aXNIYW5kbGVyTmFtZShuYW1lKSB7XG5cdFx0cmV0dXJuIG5hbWUubWF0Y2goL15vbi8pO1xuXHR9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlydHVhbERPTUVsZW1lbnQucHJvdG90eXBlLCB2aXJ0dWFsRE9NRWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFZpcnR1YWxET01FbGVtZW50O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdUYWdOYW1lKHRhZ05hbWUpIHtcbiAgcmV0dXJuIHN2Z1RhZ05hbWVzLmluY2x1ZGVzKHRhZ05hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcmV0dXJuIHN2Z0F0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNIVE1MQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBodG1sQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbmNvbnN0IHN2Z1RhZ05hbWVzID0gW1xuICAgICAgICBcImFsdEdseXBoXCIsIFwiYW5pbWF0ZVwiLCBcImFuaW1hdGVDb2xvclwiLCBcImFuaW1hdGVNb3Rpb25cIiwgXCJhbmltYXRlVHJhbnNmb3JtXCIsIFwiYW5pbWF0aW9uXCIsIFwiYXVkaW9cIixcbiAgICAgICAgXCJjaXJjbGVcIiwgXCJjbGlwUGF0aFwiLCBcImNvbG9yLXByb2ZpbGVcIiwgXCJjdXJzb3JcIixcbiAgICAgICAgXCJkZWZzXCIsIFwiZGVzY1wiLCBcImRpc2NhcmRcIixcbiAgICAgICAgXCJlbGxpcHNlXCIsXG4gICAgICAgIFwiZmVCbGVuZFwiLCBcImZlQ29sb3JNYXRyaXhcIiwgXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIsIFwiZmVDb21wb3NpdGVcIiwgXCJmZUNvbnZvbHZlTWF0cml4XCIsIFwiZmVEaWZmdXNlTGlnaHRpbmdcIiwgXCJmZURpc3BsYWNlbWVudE1hcFwiLCBcImZlRGlzdGFudExpZ2h0XCIsIFwiZmVEcm9wU2hhZG93XCIsIFwiZmVGbG9vZFwiLCBcImZlRnVuY0FcIiwgXCJmZUZ1bmNCXCIsIFwiZmVGdW5jR1wiLCBcImZlRnVuY1JcIiwgXCJmZUdhdXNzaWFuQmx1clwiLCBcImZlSW1hZ2VcIiwgXCJmZU1lcmdlXCIsIFwiZmVNZXJnZU5vZGVcIiwgXCJmZU1vcnBob2xvZ3lcIiwgXCJmZU9mZnNldFwiLCBcImZlUG9pbnRMaWdodFwiLCBcImZlU3BlY3VsYXJMaWdodGluZ1wiLCBcImZlU3BvdExpZ2h0XCIsIFwiZmVUaWxlXCIsIFwiZmVUdXJidWxlbmNlXCIsIFwiZmlsdGVyXCIsIFwiZm9udFwiLCBcImZvbnQtZmFjZVwiLCBcImZvbnQtZmFjZS1mb3JtYXRcIiwgXCJmb250LWZhY2UtbmFtZVwiLCBcImZvbnQtZmFjZS11cmlcIiwgXCJmb3JlaWduT2JqZWN0XCIsXG4gICAgICAgIFwiZ1wiLCBcImdseXBoXCIsIFwiZ2x5cGhSZWZcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGF0Y2hcIiwgXCJoYXRjaHBhdGhcIiwgXCJoa2VyblwiLFxuICAgICAgICBcImltYWdlXCIsIFwibGluZVwiLCBcImxpbmVhckdyYWRpZW50XCIsXG4gICAgICAgIFwibGlzdGVuZXJcIixcbiAgICAgICAgXCJtYXJrZXJcIiwgXCJtYXNrXCIsIFwibWVzaFwiLCBcIm1lc2hncmFkaWVudFwiLCBcIm1lc2hwYXRjaFwiLCBcIm1lc2hyb3dcIiwgXCJtZXRhZGF0YVwiLCBcIm1pc3NpbmctZ2x5cGhcIiwgXCJtcGF0aFwiLFxuICAgICAgICBcInBhdGhcIiwgXCJwYXR0ZXJuXCIsIFwicG9seWdvblwiLCBcInBvbHlsaW5lXCIsIFwicHJlZmV0Y2hcIixcbiAgICAgICAgXCJyYWRpYWxHcmFkaWVudFwiLCBcInJlY3RcIixcbiAgICAgICAgXCJzY3JpcHRcIiwgXCJzZXRcIiwgXCJzb2xpZGNvbG9yXCIsIFwic3RvcFwiLCBcInN0eWxlXCIsIFwic3ZnXCIsIFwic3dpdGNoXCIsIFwic3ltYm9sXCIsXG4gICAgICAgIFwidGJyZWFrXCIsIFwidGV4dFwiLCBcInRleHRBcmVhXCIsIFwidGV4dFBhdGhcIiwgXCJ0aXRsZVwiLCBcInRyZWZcIiwgXCJ0c3BhblwiLFxuICAgICAgICBcInVua25vd25cIiwgXCJ1c2VcIixcbiAgICAgICAgXCJ2aWRlb1wiLCBcInZpZXdcIiwgXCJ2a2VyblwiXG4gICAgICBdLFxuICAgICAgc3ZnQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZW50LWhlaWdodFwiLCBcImFjY3VtdWxhdGVcIiwgXCJhZGRpdGl2ZVwiLCBcImFsaWdubWVudC1iYXNlbGluZVwiLCBcImFscGhhYmV0aWNcIiwgXCJhbXBsaXR1ZGVcIiwgXCJhcmFiaWMtZm9ybVwiLCBcImFzY2VudFwiLCBcImF0dHJpYnV0ZU5hbWVcIiwgXCJhdHRyaWJ1dGVUeXBlXCIsIFwiYXppbXV0aFwiLFxuICAgICAgICBcImJhbmR3aWR0aFwiLCBcImJhc2VGcmVxdWVuY3lcIiwgXCJiYXNlUHJvZmlsZVwiLCBcImJhc2VsaW5lLXNoaWZ0XCIsIFwiYmJveFwiLCBcImJlZ2luXCIsIFwiYmlhc1wiLCBcImJ5XCIsXG4gICAgICAgIFwiY2FsY01vZGVcIiwgXCJjYXAtaGVpZ2h0XCIsIFwiY2xpcFwiLCBcImNsYXNzTmFtZVwiLCBcImNsaXAtcGF0aFwiLCBcImNsaXAtcnVsZVwiLCBcImNsaXBQYXRoVW5pdHNcIiwgXCJjb2xvclwiLCBcImNvbG9yLWludGVycG9sYXRpb25cIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnNcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY29sb3ItcmVuZGVyaW5nXCIsIFwiY29udGVudFNjcmlwdFR5cGVcIiwgXCJjb250ZW50U3R5bGVUeXBlXCIsIFwiY3Jvc3NvcmlnaW5cIiwgXCJjdXJzb3JcIiwgXCJjeFwiLCBcImN5XCIsXG4gICAgICAgIFwiZFwiLCBcImRlZmF1bHRBY3Rpb25cIiwgXCJkZXNjZW50XCIsIFwiZGlmZnVzZUNvbnN0YW50XCIsIFwiZGlyZWN0aW9uXCIsIFwiZGlzcGxheVwiLCBcImRpdmlzb3JcIiwgXCJkb21pbmFudC1iYXNlbGluZVwiLCBcImRvd25sb2FkXCIsIFwiZHVyXCIsIFwiZHhcIiwgXCJkeVwiLFxuICAgICAgICBcImVkZ2VNb2RlXCIsIFwiZWRpdGFibGVcIiwgXCJlbGV2YXRpb25cIiwgXCJlbmFibGUtYmFja2dyb3VuZFwiLCBcImVuZFwiLCBcImV2ZW50XCIsIFwiZXhwb25lbnRcIiwgXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXG4gICAgICAgIFwiZmlsbFwiLCBcImZpbGwtb3BhY2l0eVwiLCBcImZpbGwtcnVsZVwiLCBcImZpbHRlclwiLCBcImZpbHRlclJlc1wiLCBcImZpbHRlclVuaXRzXCIsIFwiZmxvb2QtY29sb3JcIiwgXCJmbG9vZC1vcGFjaXR5XCIsIFwiZm9jdXNIaWdobGlnaHRcIiwgXCJmb2N1c2FibGVcIiwgXCJmb250LWZhbWlseVwiLCBcImZvbnQtc2l6ZVwiLCBcImZvbnQtc2l6ZS1hZGp1c3RcIiwgXCJmb250LXN0cmV0Y2hcIiwgXCJmb250LXN0eWxlXCIsIFwiZm9udC12YXJpYW50XCIsIFwiZm9udC13ZWlnaHRcIiwgXCJmb3JtYXRcIiwgXCJmclwiLCBcImZyb21cIiwgXCJmeFwiLCBcImZ5XCIsXG4gICAgICAgIFwiZzFcIiwgXCJnMlwiLCBcImdseXBoLW5hbWVcIiwgXCJnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWxcIiwgXCJnbHlwaFJlZlwiLCBcImdyYWRpZW50VHJhbnNmb3JtXCIsIFwiZ3JhZGllbnRVbml0c1wiLFxuICAgICAgICBcImhhbmRsZXJcIiwgXCJoYW5naW5nXCIsIFwiaGF0Y2hDb250ZW50VW5pdHNcIiwgXCJoYXRjaFVuaXRzXCIsIFwiaGVpZ2h0XCIsIFwiaG9yaXotYWR2LXhcIiwgXCJob3Jpei1vcmlnaW4teFwiLCBcImhvcml6LW9yaWdpbi15XCIsIFwiaHJlZlwiLCBcImhyZWZsYW5nXCIsXG4gICAgICAgIFwiaWRcIiwgXCJpZGVvZ3JhcGhpY1wiLCBcImltYWdlLXJlbmRlcmluZ1wiLCBcImluXCIsIFwiaW4yXCIsIFwiaW5pdGlhbFZpc2liaWxpdHlcIiwgXCJpbnRlcmNlcHRcIixcbiAgICAgICAgXCJrXCIsIFwiazFcIiwgXCJrMlwiLCBcImszXCIsIFwiazRcIiwgXCJrZXJuZWxNYXRyaXhcIiwgXCJrZXJuZWxVbml0TGVuZ3RoXCIsIFwia2VybmluZ1wiLCBcImtleVBvaW50c1wiLCBcImtleVNwbGluZXNcIiwgXCJrZXlUaW1lc1wiLFxuICAgICAgICBcImxlbmd0aEFkanVzdFwiLCBcImxldHRlci1zcGFjaW5nXCIsIFwibGlnaHRpbmctY29sb3JcIiwgXCJsaW1pdGluZ0NvbmVBbmdsZVwiLCBcImxvY2FsXCIsXG4gICAgICAgIFwibWFya2VyLWVuZFwiLCBcIm1hcmtlci1taWRcIiwgXCJtYXJrZXItc3RhcnRcIiwgXCJtYXJrZXJIZWlnaHRcIiwgXCJtYXJrZXJVbml0c1wiLCBcIm1hcmtlcldpZHRoXCIsIFwibWFza1wiLCBcIm1hc2tDb250ZW50VW5pdHNcIiwgXCJtYXNrVW5pdHNcIiwgXCJtYXRoZW1hdGljYWxcIiwgXCJtYXhcIiwgXCJtZWRpYVwiLCBcIm1lZGlhQ2hhcmFjdGVyRW5jb2RpbmdcIiwgXCJtZWRpYUNvbnRlbnRFbmNvZGluZ3NcIiwgXCJtZWRpYVNpemVcIiwgXCJtZWRpYVRpbWVcIiwgXCJtZXRob2RcIiwgXCJtaW5cIiwgXCJtb2RlXCIsXG4gICAgICAgIFwibmFtZVwiLCBcIm5hdi1kb3duXCIsIFwibmF2LWRvd24tbGVmdFwiLCBcIm5hdi1kb3duLXJpZ2h0XCIsIFwibmF2LWxlZnRcIiwgXCJuYXYtbmV4dFwiLCBcIm5hdi1wcmV2XCIsIFwibmF2LXJpZ2h0XCIsIFwibmF2LXVwXCIsIFwibmF2LXVwLWxlZnRcIiwgXCJuYXYtdXAtcmlnaHRcIiwgXCJudW1PY3RhdmVzXCIsXG4gICAgICAgIFwib2JzZXJ2ZXJcIiwgXCJvZmZzZXRcIiwgXCJvcGFjaXR5XCIsIFwib3BlcmF0b3JcIiwgXCJvcmRlclwiLCBcIm9yaWVudFwiLCBcIm9yaWVudGF0aW9uXCIsIFwib3JpZ2luXCIsIFwib3ZlcmZsb3dcIiwgXCJvdmVybGF5XCIsIFwib3ZlcmxpbmUtcG9zaXRpb25cIiwgXCJvdmVybGluZS10aGlja25lc3NcIixcbiAgICAgICAgXCJwYW5vc2UtMVwiLCBcInBhdGhcIiwgXCJwYXRoTGVuZ3RoXCIsIFwicGF0dGVybkNvbnRlbnRVbml0c1wiLCBcInBhdHRlcm5UcmFuc2Zvcm1cIiwgXCJwYXR0ZXJuVW5pdHNcIiwgXCJwaGFzZVwiLCBcInBpdGNoXCIsIFwicGxheWJhY2tPcmRlclwiLCBcInBsYXliYWNrb3JkZXJcIiwgXCJwb2ludGVyLWV2ZW50c1wiLCBcInBvaW50c1wiLCBcInBvaW50c0F0WFwiLCBcInBvaW50c0F0WVwiLCBcInBvaW50c0F0WlwiLCBcInByZXNlcnZlQWxwaGFcIiwgXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwicHJpbWl0aXZlVW5pdHNcIiwgXCJwcm9wYWdhdGVcIixcbiAgICAgICAgXCJyXCIsIFwicmFkaXVzXCIsIFwicmVmWFwiLCBcInJlZllcIiwgXCJyZW5kZXJpbmctaW50ZW50XCIsIFwicmVwZWF0Q291bnRcIiwgXCJyZXBlYXREdXJcIiwgXCJyZXF1aXJlZEV4dGVuc2lvbnNcIiwgXCJyZXF1aXJlZEZlYXR1cmVzXCIsIFwicmVxdWlyZWRGb250c1wiLCBcInJlcXVpcmVkRm9ybWF0c1wiLCBcInJlc3RhcnRcIiwgXCJyZXN1bHRcIiwgXCJyb3RhdGVcIiwgXCJyeFwiLCBcInJ5XCIsXG4gICAgICAgIFwic2NhbGVcIiwgXCJzZWVkXCIsIFwic2hhcGUtcmVuZGVyaW5nXCIsIFwic2lkZVwiLCBcInNsb3BlXCIsIFwic25hcHNob3RUaW1lXCIsIFwic3BhY2luZ1wiLCBcInNwZWN1bGFyQ29uc3RhbnRcIiwgXCJzcGVjdWxhckV4cG9uZW50XCIsIFwic3ByZWFkTWV0aG9kXCIsIFwic3JjXCIsIFwic3RhcnRPZmZzZXRcIiwgXCJzdGREZXZpYXRpb25cIiwgXCJzdGVtaFwiLCBcInN0ZW12XCIsIFwic3RpdGNoVGlsZXNcIiwgXCJzdG9wLWNvbG9yXCIsIFwic3RvcC1vcGFjaXR5XCIsIFwic3RyaWtldGhyb3VnaC1wb3NpdGlvblwiLCBcInN0cmlrZXRocm91Z2gtdGhpY2tuZXNzXCIsIFwic3RyaW5nXCIsIFwic3Ryb2tlXCIsIFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcInN0cm9rZS1kYXNob2Zmc2V0XCIsIFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJzdHJva2UtbGluZWpvaW5cIiwgXCJzdHJva2UtbWl0ZXJsaW1pdFwiLCBcInN0cm9rZS1vcGFjaXR5XCIsIFwic3Ryb2tlLXdpZHRoXCIsIFwic3R5bGVcIiwgXCJzdXJmYWNlU2NhbGVcIiwgXCJzeW5jQmVoYXZpb3JcIiwgXCJzeW5jQmVoYXZpb3JEZWZhdWx0XCIsIFwic3luY01hc3RlclwiLCBcInN5bmNUb2xlcmFuY2VcIiwgXCJzeW5jVG9sZXJhbmNlRGVmYXVsdFwiLCBcInN5c3RlbUxhbmd1YWdlXCIsXG4gICAgICAgIFwidGFibGVWYWx1ZXNcIiwgXCJ0YXJnZXRcIiwgXCJ0YXJnZXRYXCIsIFwidGFyZ2V0WVwiLCBcInRleHQtYW5jaG9yXCIsIFwidGV4dC1kZWNvcmF0aW9uXCIsIFwidGV4dC1yZW5kZXJpbmdcIiwgXCJ0ZXh0TGVuZ3RoXCIsIFwidGltZWxpbmVCZWdpblwiLCBcInRpbWVsaW5lYmVnaW5cIiwgXCJ0aXRsZVwiLCBcInRvXCIsIFwidHJhbnNmb3JtXCIsIFwidHJhbnNmb3JtQmVoYXZpb3JcIiwgXCJ0eXBlXCIsXG4gICAgICAgIFwidTFcIiwgXCJ1MlwiLCBcInVuZGVybGluZS1wb3NpdGlvblwiLCBcInVuZGVybGluZS10aGlja25lc3NcIiwgXCJ1bmljb2RlXCIsIFwidW5pY29kZS1iaWRpXCIsIFwidW5pY29kZS1yYW5nZVwiLCBcInVuaXRzLXBlci1lbVwiLFxuICAgICAgICBcInYtYWxwaGFiZXRpY1wiLCBcInYtaGFuZ2luZ1wiLCBcInYtaWRlb2dyYXBoaWNcIiwgXCJ2LW1hdGhlbWF0aWNhbFwiLCBcInZhbHVlc1wiLCBcInZlcnNpb25cIiwgXCJ2ZXJ0LWFkdi15XCIsIFwidmVydC1vcmlnaW4teFwiLCBcInZlcnQtb3JpZ2luLXlcIiwgXCJ2aWV3Qm94XCIsIFwidmlld1RhcmdldFwiLCBcInZpc2liaWxpdHlcIixcbiAgICAgICAgXCJ3aWR0aFwiLCBcIndpZHRoc1wiLCBcIndvcmQtc3BhY2luZ1wiLCBcIndyaXRpbmctbW9kZVwiLFxuICAgICAgICBcInhcIiwgXCJ4LWhlaWdodFwiLCBcIngxXCIsIFwieDJcIiwgXCJ4Q2hhbm5lbFNlbGVjdG9yXCIsXG4gICAgICAgIFwieVwiLCBcInkxXCIsIFwieTJcIiwgXCJ5Q2hhbm5lbFNlbGVjdG9yXCIsXG4gICAgICAgIFwielwiLCBcInpvb21BbmRQYW5cIlxuICAgICAgXSxcbiAgICAgIGh0bWxBdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgICAgXCJhY2NlcHRcIiwgXCJhY2NlcHRDaGFyc2V0XCIsIFwiYWNjZXNzS2V5XCIsIFwiYWN0aW9uXCIsIFwiYWxsb3dcIiwgXCJhbGxvd0Z1bGxTY3JlZW5cIiwgXCJhbGxvd1RyYW5zcGFyZW5jeVwiLCBcImFsdFwiLCBcImFzeW5jXCIsIFwiYXV0b0NvbXBsZXRlXCIsIFwiYXV0b0ZvY3VzXCIsIFwiYXV0b1BsYXlcIixcbiAgICAgICAgXCJjYXB0dXJlXCIsIFwiY2VsbFBhZGRpbmdcIiwgXCJjZWxsU3BhY2luZ1wiLCBcImNoYWxsZW5nZVwiLCBcImNoYXJTZXRcIiwgXCJjaGVja2VkXCIsIFwiY2l0ZVwiLCBcImNsYXNzSURcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xTcGFuXCIsIFwiY29sc1wiLCBcImNvbnRlbnRcIiwgXCJjb250ZW50RWRpdGFibGVcIiwgXCJjb250ZXh0TWVudVwiLCBcImNvbnRyb2xzXCIsIFwiY29vcmRzXCIsIFwiY3Jvc3NPcmlnaW5cIixcbiAgICAgICAgXCJkYXRhXCIsIFwiZGF0ZVRpbWVcIiwgXCJkZWZhdWx0XCIsIFwiZGVmZXJcIiwgXCJkaXJcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiZHJhZ2dhYmxlXCIsXG4gICAgICAgIFwiZW5jVHlwZVwiLFxuICAgICAgICBcImZvcm1cIiwgXCJmb3JtQWN0aW9uXCIsIFwiZm9ybUVuY1R5cGVcIiwgXCJmb3JtTWV0aG9kXCIsIFwiZm9ybU5vVmFsaWRhdGVcIiwgXCJmb3JtVGFyZ2V0XCIsIFwiZnJhbWVCb3JkZXJcIixcbiAgICAgICAgXCJoZWFkZXJzXCIsIFwiaGVpZ2h0XCIsIFwiaGlkZGVuXCIsIFwiaGlnaFwiLCBcImhyZWZcIiwgXCJocmVmTGFuZ1wiLCBcImh0bWxGb3JcIiwgXCJodHRwRXF1aXZcIixcbiAgICAgICAgXCJpY29uXCIsIFwiaWRcIiwgXCJpbnB1dE1vZGVcIiwgXCJpbnRlZ3JpdHlcIiwgXCJpc1wiLFxuICAgICAgICBcImtleVBhcmFtc1wiLCBcImtleVR5cGVcIiwgXCJraW5kXCIsXG4gICAgICAgIFwibGFiZWxcIiwgXCJsYW5nXCIsIFwibGlzdFwiLCBcImxvb3BcIiwgXCJsb3dcIixcbiAgICAgICAgXCJtYW5pZmVzdFwiLCBcIm1hcmdpbkhlaWdodFwiLCBcIm1hcmdpbldpZHRoXCIsIFwibWF4XCIsIFwibWF4TGVuZ3RoXCIsIFwibWVkaWFcIiwgXCJtZWRpYUdyb3VwXCIsIFwibWV0aG9kXCIsIFwibWluXCIsIFwibWluTGVuZ3RoXCIsIFwibXVsdGlwbGVcIiwgXCJtdXRlZFwiLFxuICAgICAgICBcIm5hbWVcIiwgXCJub1ZhbGlkYXRlXCIsIFwibm9uY2VcIixcbiAgICAgICAgXCJvcGVuXCIsIFwib3B0aW11bVwiLFxuICAgICAgICBcInBhdHRlcm5cIiwgXCJwbGFjZWhvbGRlclwiLCBcInBvc3RlclwiLCBcInByZWxvYWRcIiwgXCJwcm9maWxlXCIsXG4gICAgICAgIFwicmFkaW9Hcm91cFwiLCBcInJlYWRPbmx5XCIsIFwicmVsXCIsIFwicmVxdWlyZWRcIiwgXCJyZXZlcnNlZFwiLCBcInJvbGVcIiwgXCJyb3dTcGFuXCIsIFwicm93c1wiLFxuICAgICAgICBcInNhbmRib3hcIiwgXCJzY29wZVwiLCBcInNjb3BlZFwiLCBcInNjcm9sbGluZ1wiLCBcInNlYW1sZXNzXCIsIFwic2VsZWN0ZWRcIiwgXCJzaGFwZVwiLCBcInNpemVcIiwgXCJzaXplc1wiLCBcInNwYW5cIiwgXCJzcGVsbENoZWNrXCIsIFwic3JjXCIsIFwic3JjRG9jXCIsIFwic3JjTGFuZ1wiLCBcInNyY1NldFwiLCBcInN0YXJ0XCIsIFwic3RlcFwiLCBcInN0eWxlXCIsIFwic3VtbWFyeVwiLFxuICAgICAgICBcInRhYkluZGV4XCIsIFwidGFyZ2V0XCIsIFwidGl0bGVcIiwgXCJ0eXBlXCIsXG4gICAgICAgIFwidXNlTWFwXCIsXG4gICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgXCJ3aWR0aFwiLFxuICAgICAgICBcIndtb2RlXCIsXG4gICAgICAgIFwid3JhcFwiXG4gICAgICBdO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTUVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaXJ0dWFsRE9NSFRNTEVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBpc0F0dHJpYnV0ZU5hbWUobmFtZSkge1xuICAgIHJldHVybiBpc0hUTUxBdHRyaWJ1dGVOYW1lKG5hbWUpO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaXJ0dWFsRE9NRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBpc1NWR0F0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IEhUVFBfV1dXX1czX09SR18yMDAwX1NWRyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlydHVhbERPTVNWR0VsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhIVFRQX1dXV19XM19PUkdfMjAwMF9TVkcsIHRhZ05hbWUpO1xuXG4gICAgc3VwZXIocHJvcHMsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgaXNBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gaXNTVkdBdHRyaWJ1dGVOYW1lKG5hbWUpO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCBSZWFjdENsYXNzIGZyb20gXCIuL3JlYWN0Q2xhc3NcIjtcbmltcG9ydCBSZWFjdENvbXBvbmVudCBmcm9tIFwiLi9yZWFjdENvbXBvbmVudFwiO1xuaW1wb3J0IFJlYWN0Q2xhc3NFbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvcmVhY3QvY2xhc3NcIjtcbmltcG9ydCBSZWFjdEZ1bmN0aW9uRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L3JlYWN0L2Z1bmN0aW9uXCI7XG5pbXBvcnQgUmVhY3RDb21wb25lbnRFbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvcmVhY3QvY29tcG9uZW50XCI7XG5pbXBvcnQgVmlydHVhbERPTVRleHRFbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvdGV4dEVsZW1lbnRcIjtcbmltcG9ydCBWaXJ0dWFsRE9NSFRNTEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZS9lbGVtZW50L2h0bWxcIjtcbmltcG9ydCBWaXJ0dWFsRE9NU1ZHRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQvc3ZnXCI7XG5cbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICByZXR1cm4gUmVhY3RDbGFzcy5jcmVhdGUob2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkcmVuRnJvbVJlbWFpbmluZ0FyZ3VtZW50cyhyZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydGllcywge1xuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gU1RSSU5HKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgdmlydHVhbERPTUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWaXJ0dWFsRE9NU1ZHRWxlbWVudCh0YWdOYW1lLCBwcm9wcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZpcnR1YWxET01IVE1MRWxlbWVudCh0YWdOYW1lLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSB2aXJ0dWFsRE9NRWxlbWVudCAvLy9cbiAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICBjb25zdCByZWFjdENsYXNzID0gZmlyc3RBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICByZWFjdENsYXNzRWxlbWVudCA9IG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENsYXNzRWxlbWVudDsgIC8vL1xuXG4gICAgICBjb25zdCB7IG1peGlucyB9ID0gcmVhY3RDbGFzcztcblxuICAgICAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgUmVhY3RDb21wb25lbnQpKSB7XG4gICAgICBjb25zdCBSZWFjdENvbXBvbmVudCA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50KCksXG4gICAgICAgICAgICByZWFjdENvbXBvbmVudEVsZW1lbnQgPSBuZXcgUmVhY3RDb21wb25lbnRFbGVtZW50KHJlYWN0Q29tcG9uZW50LCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENvbXBvbmVudEVsZW1lbnQ7ICAvLy9cblxuICAgICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnQsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgICBjb25zdCByZWFjdEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RGdW5jdGlvbkVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RGdW5jdGlvbkVsZW1lbnQ7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBDb21wb25lbnQgPSBSZWFjdENvbXBvbmVudCwgLy8vXG4gICAgICBSZWFjdCA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBjcmVhdGVDbGFzcyxcbiAgICAgICAgY3JlYXRlRWxlbWVudFxuICAgICAgfTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRnJvbVJlbWFpbmluZ0FyZ3VtZW50cyhyZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgcmVtYWluaW5nQXJndW1lbnRzID0gZmxhdHRlbihyZW1haW5pbmdBcmd1bWVudHMpOyAvLy9cblxuICBjb25zdCBjaGlsZHJlbiA9IFtdO1xuXG4gIHJlbWFpbmluZ0FyZ3VtZW50cy5mb3JFYWNoKChjaGlsZEFyZ3VtZW50KSA9PiB7XG4gICAgbGV0IGNoaWxkO1xuXG4gICAgaWYgKGNoaWxkQXJndW1lbnQpIHsgIC8vL1xuICAgICAgaWYgKGlzU3ViY2xhc3NPZihjaGlsZEFyZ3VtZW50LmNvbnN0cnVjdG9yLCBFbGVtZW50KSkgeyAvLy9cbiAgICAgICAgY2hpbGQgPSBjaGlsZEFyZ3VtZW50OyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXh0ID0gY2hpbGRBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICAgIHZpcnR1YWxET01UZXh0RWxlbWVudCA9IG5ldyBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgICAgY2hpbGQgPSB2aXJ0dWFsRE9NVGV4dEVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhyZWFjdENvbXBvbmVudCwgZWxlbWVudCkge1xuICBjb25zdCB7IG1peGlucyB9ID0gcmVhY3RDb21wb25lbnQ7XG5cbiAgcmVhY3RDb21wb25lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocmVhY3RDb21wb25lbnQpOyAvLy9cblxuICBpZiAocmVhY3RDb21wb25lbnQgIT09IFJlYWN0Q29tcG9uZW50KSB7XG4gICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMocmVhY3RDb21wb25lbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpIHtcbiAgaWYgKG1peGlucykge1xuICAgIG1peGlucy5mb3JFYWNoKChtaXhpbikgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBtaXhpbjtcblxuICAgICAgZWxlbWVudFtuYW1lXSA9IG1peGluLmJpbmQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgc3ViY2xhc3MgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICBzdWJjbGFzcyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCAhPT0gbnVsbCkge1xuICAgICAgc3ViY2xhc3MgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ViY2xhc3M7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaXJ0dWFsRE9NTm9kZSBmcm9tIFwiLi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0RE9NIHtcbiAgc3RhdGljIHJlbmRlcihlbGVtZW50LCBwYXJlbnRET01FbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50ID0gVmlydHVhbERPTU5vZGUuZnJvbURPTUVsZW1lbnQocGFyZW50RE9NRWxlbWVudCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0ge307XG5cbiAgICBlbGVtZW50Lm1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KTtcbiAgfVxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFjdCB9IGZyb20gXCIuL3JlYWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0RE9NIH0gZnJvbSBcIi4vcmVhY3RET01cIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVN0b3JlID0gKHJlZHVjZXIpID0+IHtcbiAgbGV0IHN0YXRlLFxuICAgICAgbGlzdGVuZXJzID0gW107XG5cbiAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoKSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICB1bnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdW5zdWJzY3JpYmUgPSAobCkgPT4ge1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKGxpc3RlbmVyKSA9PiB7XG4gICAgICByZXR1cm4gKGxpc3RlbmVyICE9PSBsKTtcbiAgICB9KTtcbiAgfTtcblxuICBkaXNwYXRjaCgpO1xuXG4gIHJldHVybiB7IGdldFN0YXRlLCBkaXNwYXRjaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9IChyZWR1Y2VycykgPT4ge1xuICByZXR1cm4gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2VycyksXG4gICAgICAgICAgbmV4dFN0YXRlID0ga2V5cy5yZWR1Y2UoKG5leHRTdGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcblxuICAgICAgICAgICAgbmV4dFN0YXRlW2tleV0gPSByZWR1Y2VyKHN0YXRlW2tleV0sIGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgfTtcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBST09UID0gXCJyb290XCI7XG5leHBvcnQgY29uc3QgTk9ORSA9ICdub25lJztcbmV4cG9ydCBjb25zdCBBRERfVE9ETyA9IFwiQUREX1RPRE9cIjtcbmV4cG9ydCBjb25zdCBTSE9XX0FMTCA9IFwiU0hPV19BTExcIjtcbmV4cG9ydCBjb25zdCBTSE9XX0FDVElWRSA9IFwiU0hPV19BQ1RJVkVcIjtcbmV4cG9ydCBjb25zdCBUT0dHTEVfVE9ETyA9IFwiVE9HR0xFX1RPRE9cIjtcbmV4cG9ydCBjb25zdCBMSU5FX1RIUk9VR0ggPSBcImxpbmUtdGhyb3VnaFwiO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5leHBvcnQgY29uc3QgU0hPV19DT01QTEVURUQgPSBcIlNIT1dfQ09NUExFVEVEXCI7XG5leHBvcnQgY29uc3QgU0VUX1ZJU0lCSUxJVFlfRklMVEVSID0gXCJTRVRfVklTSUJJTElUWV9GSUxURVJcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQUREX1RPRE8sIFRPR0dMRV9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvcyhzdGF0ZSA9IFtdLCBhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBsZXQgdG9kb3MgPSBzdGF0ZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFERF9UT0RPIDpcbiAgICAgIHRvZG9zID0gYWRkVG9kb1RvVG9kb3ModG9kb3MsIGFjdGlvbik7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBUT0dHTEVfVE9ETyA6XG4gICAgICB0b2RvcyA9IHRvZ2dsZVRvZG9zKHRvZG9zLCBhY3Rpb24pO1xuXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlID0gdG9kb3M7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvVG9Ub2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQsIHRleHQgfSA9IGFjdGlvbixcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2UsXG4gICAgICAgIHRvZG8gPSB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWRcbiAgICAgICAgfTtcblxuICB0b2RvcyA9IFtcbiAgICAuLi50b2RvcyxcbiAgICB0b2RvXG4gIF07XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQgfSA9IGFjdGlvbjtcblxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgbGV0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aXNpYmlsaXR5RmlsdGVyKHN0YXRlID0gU0hPV19BTEwsIGFjdGlvbiA9IHt9KSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIDpcbiAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gYWN0aW9uO1xuXG4gICAgICBzdGF0ZSA9IHZpc2liaWxpdHlGaWx0ZXI7XG5cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1eFwiO1xuXG5pbXBvcnQgdG9kb3MgZnJvbSBcIi4vcmVkdWNlci90b2Rvc1wiO1xuaW1wb3J0IHZpc2liaWxpdHlGaWx0ZXIgZnJvbSBcIi4vcmVkdWNlci92aXNpYmlsaXR5RmlsdGVyXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB0b2RvcyxcbiAgdmlzaWJpbGl0eUZpbHRlclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyTGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjdGl2ZSA9IChmaWx0ZXIgPT09IHZpc2liaWxpdHlGaWx0ZXIpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlclwiXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgIGNvbnN0IHR5cGUgPSBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IEZpbHRlckxpbmsgZnJvbSBcIi4vZmlsdGVyTGlua1wiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBGb290ZXIgPSAocHJvcHMsIGNvbnRleHQpID0+XG5cbiAgPHA+XG4gICAge1wiU2hvdzogXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FMTH0+QWxsPC9GaWx0ZXJMaW5rPlxuICAgIHtcIiAtIFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BQ1RJVkV9PkFjdGl2ZTwvRmlsdGVyTGluaz5cbiAgICB7XCIgLSBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQ09NUExFVEVEfT5Db21wbGV0ZWQ8L0ZpbHRlckxpbms+XG4gIDwvcD5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgeyBBRERfVE9ETywgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5sZXQgaWQgPSAwLFxuICAgIGlucHV0RE9NRWxlbWVudDtcblxuY29uc3QgQWRkVG9kbyA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICBjb25zdCB7IHN0b3JlIH0gPSBjb250ZXh0O1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgPGlucHV0IHJlZj17KGRvbUVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgaW5wdXRET01FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgICAgICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gQUREX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGlucHV0RE9NRWxlbWVudC52YWx1ZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWQrKztcblxuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgICAgICAgICBpbnB1dERPTUVsZW1lbnQudmFsdWUgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgQWRkIHRvZG9cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRUb2RvO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHsgTk9ORSwgTElORV9USFJPVUdIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBUb2RvTGlzdEl0ZW0gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjbGlja0hhbmRsZXIsIGNvbXBsZXRlZCwgdGV4dCB9ID0gcHJvcHMsXG4gICAgICAgIHRleHREZWNvcmF0aW9uID0gY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTElORV9USFJPVUdIIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOT05FLFxuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvblxuICAgICAgICB9O1xuXG4gIHJldHVybiAoXG5cbiAgICA8bGkgc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9PlxuICAgICAge3RleHR9XG4gICAgPC9saT5cbiAgKTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3RJdGVtO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFRvZG9MaXN0SXRlbSBmcm9tIFwiLi90b2RvTGlzdEl0ZW1cIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNIT1dfQUNUSVZFLCBTSE9XX0NPTVBMRVRFRCwgVE9HR0xFX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3RJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIgfSA9IHN0YXRlLFxuICAgICAgICAgIHZpc2libGVUb2RvcyA9IGdldFZpc2libGVUb2Rvcyh0b2RvcywgdmlzaWJpbGl0eUZpbHRlciksXG4gICAgICAgICAgaXRlbXMgPSB2aXNpYmxlVG9kb3MubWFwKCh2aXNpYmxlVG9kbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBpZCwgdGV4dCwgY29tcGxldGVkIH0gPSB2aXNpYmxlVG9kbztcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXtjb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBUT0dHTEVfVE9ETyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG59XG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgdmlzaWJpbGl0eUZpbHRlcikgPT4ge1xuICBsZXQgdmlzaWJsZVRvZG9zO1xuXG4gIHN3aXRjaCAodmlzaWJpbGl0eUZpbHRlcikge1xuICAgIGNhc2UgU0hPV19BTEw6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2RvcztcblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQUNUSVZFOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvLFxuICAgICAgICAgICAgICBhY3RpdmUgPSAhY29tcGxldGVkO1xuXG4gICAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQ09NUExFVEVEOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQ7XG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdmlzaWJsZVRvZG9zO1xufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBUb2RvTGlzdEl0ZW1zIGZyb20gXCIuL3RvZG9MaXN0SXRlbXNcIjtcblxuY29uc3QgVG9kb0xpc3QgPSAocHJvcHMsIGNvbnRleHQpID0+XG5cbiAgPHVsPlxuICAgIDxUb2RvTGlzdEl0ZW1zLz5cbiAgPC91bD5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgQWRkVG9kbyBmcm9tIFwiLi9hZGRUb2RvXCI7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vdG9kb0xpc3RcIjtcblxuY29uc3QgVG9kb0FwcCA9IChwcm9wcywgY29udGV4dCkgPT5cblxuICA8ZGl2PlxuICAgIDxBZGRUb2RvLz5cbiAgICA8VG9kb0xpc3QvPlxuICAgIDxGb290ZXIvPlxuICA8L2Rpdj5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvQXBwO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB7XG4gICAgICAgICAgICBzdG9yZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gY2hpbGRDb250ZXh0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NIH0gZnJvbSBcIi4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCIuL3JlZHV4QXBwL3JlZHV4XCI7XG5cbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuL3JlZHV4QXBwL3JlZHVjZXJcIjtcbmltcG9ydCBUb2RvQXBwIGZyb20gXCIuL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvQXBwXCI7XG5pbXBvcnQgUHJvdmlkZXIgZnJvbSBcIi4vcmVkdXhBcHAvY29tcG9uZW50L3Byb3ZpZGVyXCI7XG5cbmltcG9ydCB7IFJPT1QgfSBmcm9tIFwiLi9yZWR1eEFwcC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdXhBcHAoKSB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciksXG4gICAgICAgIHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUk9PVCk7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFRvZG9BcHAvPlxuICAgICAgPC9Qcm92aWRlcj5cblxuICAgICxcbiAgICByb290RE9NRWxlbWVudFxuICApO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcIi4uLy4uL3JlYWN0XCI7XG5cbmNvbnN0IENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24odXBkYXRlKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgIGNvbnNvbGUubG9nKGBDb21tZW50IG1vdW50ZWQgd2l0aCBtZXNzYWdlOiAnJHttZXNzYWdlfScuYClcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgIGNvbnNvbGUubG9nKGBDb21tZW50IHVubW91bnRlZCB3aXRoIG1lc3NhZ2U6ICcke21lc3NhZ2V9Jy5gKVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCIuLi8uLi9yZWFjdFwiO1xuXG5pbXBvcnQgQ29tbWVudCBmcm9tIFwiLi9jb21tZW50XCI7XG5cbmNvbnN0IENvbW1lbnRzTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgXCJIZWxsbywgd29ybGQhXCIsXG4gICAgICAgICAgICBcIkhlbGxvIHdvcmxkIGFnYWluLi4uXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbW1lbnRzIGxpc3QgbW91bnRlZC5cIilcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgbWVzc2FnZXMgfSA9IHN0YXRlLFxuICAgICAgICAgIGNvbW1lbnRzID0gbWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PlxuXG4gICAgICAgICAgICA8Q29tbWVudCBtZXNzYWdlPXttZXNzYWdlfSAvPlxuXG4gICAgICAgICAgKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHMtbGlzdFwiPlxuICAgICAgICB7Y29tbWVudHN9XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50c0xpc3Q7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBST09UID0gXCJyb290XCI7XG5leHBvcnQgY29uc3QgVElNRU9VVCA9IDEwMDA7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwiLi4vcmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwiLi4vcmVhY3RET01cIjtcblxuaW1wb3J0IENvbW1lbnRzTGlzdCBmcm9tIFwiLi92YW5pbGxhQXBwL2NvbW1lbnRzTGlzdFwiO1xuXG5pbXBvcnQgeyBST09ULCBUSU1FT1VUIH0gZnJvbSBcIi4vdmFuaWxsYUFwcC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFuaWxsYUFwcCgpIHtcbiAgY29uc3QgY29tbWVudHNMaXN0ID1cblxuICAgICAgICAgIDxDb21tZW50c0xpc3QvPlxuXG4gICAgICAgICxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChST09UKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgY29tbWVudHNMaXN0LFxuICAgIHJvb3RET01FbGVtZW50XG4gICk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICBcIkhlbGxvIHdvcmxkIHlldCBhZ2FpbiEhIVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2VzXG4gICAgICAgICAgfTtcblxuICAgIGNvbW1lbnRzTGlzdC5zZXRTdGF0ZShzdGF0ZSk7XG4gIH0sIFRJTUVPVVQpO1xufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJlZHV4QXBwIGZyb20gXCIuL2V4YW1wbGUvcmVkdXhBcHBcIjtcbmltcG9ydCB2YW5pbGxhQXBwIGZyb20gXCIuL2V4YW1wbGUvdmFuaWxsYUFwcFwiO1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywge1xuICByZWR1eEFwcCxcbiAgdmFuaWxsYUFwcFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBQUE7Ozs7O1lBRWdCLFFBQUE7WUFFQSxVQUFBO1lBUUEsWUFBQTtZQVFBLFlBQUE7Ozs7Ozs7O21CQWxCTSxPQUFPO0FBQUUsYUFBTyxNQUFNOztxQkFFcEIsUUFBTztBQUM3QixhQUFPLE9BQU0sT0FBTyxTQUFDLE9BQU8sU0FBWTtBQUN0QyxnQkFBUSxNQUFNLE9BQU87QUFFckIsZUFBTztTQUNOOzt1QkFHcUIsZ0JBQWdCO0FBQ3hDLHVCQUFpQixrQkFBa0I7QUFFbkMsYUFBUSxZQUFBLGdCQUEwQixTQUN4QixpQkFDRTtRQUFDOzs7dUJBR1csU0FBUyxPQUFPO0FBQ3hDLFVBQUksWUFBWSxNQUFNO0FBQ3BCLGVBQU87O0FBR1QsVUFBTSxRQUFRLFFBQVEsU0FBUztBQUUvQixhQUFPLE1BQU0sTUFBTSxRQUFROztxQkFHWixTQUFTLE9BQU87QUFDL0IsVUFBSSxRQUFRO0FBRVosWUFBTSxLQUFLLFNBQUMsZ0JBQWdCLHFCQUF3QjtBQUNsRCxZQUFJLG1CQUFtQixTQUFTO0FBQzlCLGtCQUFRO0FBRVIsaUJBQU87OztBQUlY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
