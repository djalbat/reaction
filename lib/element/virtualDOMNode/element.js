"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _virtualDOMNode = _interopRequireDefault(require("../virtualDOMNode"));

var _virtualDOMElement = require("../../mixins/virtualDOMElement");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VirtualDOMElement = /*#__PURE__*/function (_VirtualDOMNode) {
  _inherits(VirtualDOMElement, _VirtualDOMNode);

  var _super = _createSuper(VirtualDOMElement);

  function VirtualDOMElement() {
    var _this;

    _classCallCheck(this, VirtualDOMElement);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "setAttribute", _virtualDOMElement.setAttribute);

    _defineProperty(_assertThisInitialized(_this), "getAttribute", _virtualDOMElement.getAttribute);

    _defineProperty(_assertThisInitialized(_this), "clearAttribute", _virtualDOMElement.clearAttribute);

    _defineProperty(_assertThisInitialized(_this), "addAttribute", _virtualDOMElement.addAttribute);

    _defineProperty(_assertThisInitialized(_this), "removeAttribute", _virtualDOMElement.removeAttribute);

    _defineProperty(_assertThisInitialized(_this), "hasAttribute", _virtualDOMElement.hasAttribute);

    _defineProperty(_assertThisInitialized(_this), "setClass", _virtualDOMElement.setClass);

    _defineProperty(_assertThisInitialized(_this), "addClass", _virtualDOMElement.addClass);

    _defineProperty(_assertThisInitialized(_this), "removeClass", _virtualDOMElement.removeClass);

    _defineProperty(_assertThisInitialized(_this), "toggleClass", _virtualDOMElement.toggleClass);

    _defineProperty(_assertThisInitialized(_this), "hasClass", _virtualDOMElement.hasClass);

    _defineProperty(_assertThisInitialized(_this), "hasClasses", _virtualDOMElement.hasClasses);

    _defineProperty(_assertThisInitialized(_this), "clearClasses", _virtualDOMElement.clearClasses);

    _defineProperty(_assertThisInitialized(_this), "getTagName", _virtualDOMElement.getTagName);

    _defineProperty(_assertThisInitialized(_this), "setStyle", _virtualDOMElement.setStyle);

    return _this;
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
      var _this2 = this;

      var names = Object.keys(this.props);
      names.forEach(function (name) {
        var value = _this2.props[name];

        if (false) {} else if (_this2.isHandlerName(name)) {
          _this2.setHandler(name, value);
        } else if (_this2.isAttributeName(name)) {
          _this2.setAttribute(name, value);
        } else if (name === "ref") {
          var callback = value; ///

          callback(_this2.domElement);
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

exports["default"] = VirtualDOMElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnQuanMiXSwibmFtZXMiOlsiVmlydHVhbERPTUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImFkZEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImhhc0F0dHJpYnV0ZSIsInNldENsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJoYXNDbGFzc2VzIiwiY2xlYXJDbGFzc2VzIiwiZ2V0VGFnTmFtZSIsInNldFN0eWxlIiwicGFyZW50IiwicmVmZXJlbmNlIiwiY29udGV4dCIsImNoaWxkUGFyZW50IiwiY2hpbGRSZWZlcmVuY2UiLCJjaGlsZENvbnRleHQiLCJjaGlsZHJlbiIsImdldENoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwibW91bnQiLCJhcHBseVByb3BzIiwidW5tb3VudCIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsInByb3BzIiwibmFtZSIsInZhbHVlIiwiaXNIYW5kbGVyTmFtZSIsInNldEhhbmRsZXIiLCJpc0F0dHJpYnV0ZU5hbWUiLCJjYWxsYmFjayIsImRvbUVsZW1lbnQiLCJldmVudFR5cGUiLCJzdWJzdHIiLCJ0b0xvd2VyQ2FzZSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwibWF0Y2giLCJWaXJ0dWFsRE9NTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQnFCQSxpQjs7Ozs7Ozs7Ozs7Ozs7OzttRUFDSkMsK0I7O21FQUNBQywrQjs7cUVBQ0VDLGlDOzttRUFDRkMsK0I7O3NFQUNHQyxrQzs7bUVBQ0hDLCtCOzsrREFDSkMsMkI7OytEQUNBQywyQjs7a0VBQ0dDLDhCOztrRUFDQUMsOEI7OytEQUNIQywyQjs7aUVBQ0VDLDZCOzttRUFDRUMsK0I7O2lFQUNGQyw2Qjs7K0RBQ0ZDLDJCOzs7Ozs7OzBCQUVMQyxNLEVBQVFDLFMsRUFBV0MsTyxFQUFTO0FBQ2hDLG1GQUFZRixNQUFaLEVBQW9CQyxTQUFwQjs7QUFFQSxVQUFNRSxXQUFXLEdBQUcsSUFBcEI7QUFBQSxVQUNNQyxjQUFjLEdBQUcsSUFEdkI7QUFBQSxVQUVNQyxZQUFZLEdBQUdILE9BRnJCO0FBQUEsVUFHTUksUUFBUSxHQUFHLEtBQUtDLFdBQUwsRUFIakI7QUFLQUQsTUFBQUEsUUFBUSxDQUFDRSxPQUFULENBQWlCLFVBQUNDLEtBQUQ7QUFBQSxlQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVAsV0FBWixFQUF5QkMsY0FBekIsRUFBeUNDLFlBQXpDLENBQVg7QUFBQSxPQUFqQjtBQUVBLFdBQUtNLFVBQUw7QUFDRDs7OzRCQUVPVCxPLEVBQVM7QUFDZixVQUFNRyxZQUFZLEdBQUdILE9BQXJCO0FBQUEsVUFDTUksUUFBUSxHQUFHLEtBQUtDLFdBQUwsRUFEakI7QUFHQUQsTUFBQUEsUUFBUSxDQUFDRSxPQUFULENBQWlCLFVBQUNDLEtBQUQ7QUFBQSxlQUFXQSxLQUFLLENBQUNHLE9BQU4sQ0FBY1AsWUFBZCxDQUFYO0FBQUEsT0FBakI7O0FBRUE7QUFDRDs7O2lDQUVZO0FBQUE7O0FBQ1gsVUFBTVEsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLQyxLQUFqQixDQUFkO0FBRUFILE1BQUFBLEtBQUssQ0FBQ0wsT0FBTixDQUFjLFVBQUNTLElBQUQsRUFBVTtBQUN0QixZQUFNQyxLQUFLLEdBQUcsTUFBSSxDQUFDRixLQUFMLENBQVdDLElBQVgsQ0FBZDs7QUFFQSxZQUFJLEtBQUosRUFBVyxDQUVWLENBRkQsTUFFTyxJQUFJLE1BQUksQ0FBQ0UsYUFBTCxDQUFtQkYsSUFBbkIsQ0FBSixFQUE4QjtBQUNuQyxVQUFBLE1BQUksQ0FBQ0csVUFBTCxDQUFnQkgsSUFBaEIsRUFBc0JDLEtBQXRCO0FBQ0QsU0FGTSxNQUVBLElBQUksTUFBSSxDQUFDRyxlQUFMLENBQXFCSixJQUFyQixDQUFKLEVBQWdDO0FBQ3JDLFVBQUEsTUFBSSxDQUFDaEMsWUFBTCxDQUFrQmdDLElBQWxCLEVBQXdCQyxLQUF4QjtBQUNELFNBRk0sTUFFQSxJQUFJRCxJQUFJLEtBQUssS0FBYixFQUFvQjtBQUN6QixjQUFNSyxRQUFRLEdBQUdKLEtBQWpCLENBRHlCLENBQ0Q7O0FBRXhCSSxVQUFBQSxRQUFRLENBQUMsTUFBSSxDQUFDQyxVQUFOLENBQVI7QUFDRDtBQUNGLE9BZEQ7QUFlRDs7OytCQUVVTixJLEVBQU1DLEssRUFBTztBQUN0QixVQUFNTSxTQUFTLEdBQUdQLElBQUksQ0FBQ1EsTUFBTCxDQUFZLENBQVosRUFBZUMsV0FBZixFQUFsQjtBQUFBLFVBQWdEO0FBQzFDQyxNQUFBQSxPQUFPLEdBQUdULEtBRGhCLENBRHNCLENBRUU7O0FBRXhCLFdBQUtLLFVBQUwsQ0FBZ0JLLGdCQUFoQixDQUFpQ0osU0FBakMsRUFBNkNHLE9BQTdDO0FBQ0Q7OztrQ0FFWVYsSSxFQUFNO0FBQ25CLGFBQU9BLElBQUksQ0FBQ1ksS0FBTCxDQUFXLEtBQVgsQ0FBUDtBQUNBOzs7O0VBcEU2Q0MsMEIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpcnR1YWxET01Ob2RlIGZyb20gXCIuLi92aXJ0dWFsRE9NTm9kZVwiO1xuXG5pbXBvcnQgeyBzZXRBdHRyaWJ1dGUsXG4gICAgICAgICBnZXRBdHRyaWJ1dGUsXG4gICAgICAgICBjbGVhckF0dHJpYnV0ZSxcbiAgICAgICAgIGFkZEF0dHJpYnV0ZSxcbiAgICAgICAgIHJlbW92ZUF0dHJpYnV0ZSxcbiAgICAgICAgIGhhc0F0dHJpYnV0ZSxcbiAgICAgICAgIHNldENsYXNzLFxuICAgICAgICAgYWRkQ2xhc3MsXG4gICAgICAgICByZW1vdmVDbGFzcyxcbiAgICAgICAgIHRvZ2dsZUNsYXNzLFxuICAgICAgICAgaGFzQ2xhc3MsXG4gICAgICAgICBoYXNDbGFzc2VzLFxuICAgICAgICAgY2xlYXJDbGFzc2VzLFxuICAgICAgICAgZ2V0VGFnTmFtZSxcbiAgICAgICAgIHNldFN0eWxlIH0gZnJvbSBcIi4uLy4uL21peGlucy92aXJ0dWFsRE9NRWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaXJ0dWFsRE9NRWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01Ob2RlIHtcbiAgc2V0QXR0cmlidXRlID0gc2V0QXR0cmlidXRlO1xuICBnZXRBdHRyaWJ1dGUgPSBnZXRBdHRyaWJ1dGU7XG4gIGNsZWFyQXR0cmlidXRlID0gY2xlYXJBdHRyaWJ1dGU7XG4gIGFkZEF0dHJpYnV0ZSA9IGFkZEF0dHJpYnV0ZTtcbiAgcmVtb3ZlQXR0cmlidXRlID0gcmVtb3ZlQXR0cmlidXRlO1xuICBoYXNBdHRyaWJ1dGUgPSBoYXNBdHRyaWJ1dGU7XG4gIHNldENsYXNzID0gc2V0Q2xhc3M7XG4gIGFkZENsYXNzID0gYWRkQ2xhc3M7XG4gIHJlbW92ZUNsYXNzID0gcmVtb3ZlQ2xhc3M7XG4gIHRvZ2dsZUNsYXNzID0gdG9nZ2xlQ2xhc3M7XG4gIGhhc0NsYXNzID0gaGFzQ2xhc3M7XG4gIGhhc0NsYXNzZXMgPSBoYXNDbGFzc2VzO1xuICBjbGVhckNsYXNzZXMgPSBjbGVhckNsYXNzZXM7XG4gIGdldFRhZ05hbWUgPSBnZXRUYWdOYW1lO1xuICBzZXRTdHlsZSA9IHNldFN0eWxlO1xuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KSk7XG5cbiAgICB0aGlzLmFwcGx5UHJvcHMoKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGFwcGx5UHJvcHMoKSB7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcblxuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wc1tuYW1lXTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0hhbmRsZXJOYW1lKG5hbWUpKSB7XG4gICAgICAgIHRoaXMuc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBdHRyaWJ1dGVOYW1lKG5hbWUpKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJyZWZcIikge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHZhbHVlOyAvLy9cbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRIYW5kbGVyKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsICBoYW5kbGVyKTtcbiAgfVxuXG5cdGlzSGFuZGxlck5hbWUobmFtZSkge1xuXHRcdHJldHVybiBuYW1lLm1hdGNoKC9eb24vKTtcblx0fVxufVxuIl19