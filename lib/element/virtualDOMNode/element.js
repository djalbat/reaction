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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnQuanMiXSwibmFtZXMiOlsiVmlydHVhbERPTUVsZW1lbnQiLCJwYXJlbnQiLCJyZWZlcmVuY2UiLCJjb250ZXh0IiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsImNoaWxkQ29udGV4dCIsImNoaWxkcmVuIiwiZ2V0Q2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJtb3VudCIsImFwcGx5UHJvcHMiLCJ1bm1vdW50IiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwicHJvcHMiLCJuYW1lIiwidmFsdWUiLCJpc0hhbmRsZXJOYW1lIiwic2V0SGFuZGxlciIsImlzQXR0cmlidXRlTmFtZSIsInNldEF0dHJpYnV0ZSIsImNhbGxiYWNrIiwiZG9tRWxlbWVudCIsImV2ZW50VHlwZSIsInN1YnN0ciIsInRvTG93ZXJDYXNlIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYXRjaCIsIlZpcnR1YWxET01Ob2RlIiwiYXNzaWduIiwicHJvdG90eXBlIiwidmlydHVhbERPTUVsZW1lbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxpQjs7Ozs7Ozs7Ozs7OzswQkFDRUMsTSxFQUFRQyxTLEVBQVdDLE8sRUFBUztBQUNoQyxtRkFBWUYsTUFBWixFQUFvQkMsU0FBcEI7O0FBRUEsVUFBTUUsV0FBVyxHQUFHLElBQXBCO0FBQUEsVUFDTUMsY0FBYyxHQUFHLElBRHZCO0FBQUEsVUFFTUMsWUFBWSxHQUFHSCxPQUZyQjtBQUFBLFVBR01JLFFBQVEsR0FBRyxLQUFLQyxXQUFMLEVBSGpCO0FBS0FELE1BQUFBLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixVQUFDQyxLQUFEO0FBQUEsZUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlQLFdBQVosRUFBeUJDLGNBQXpCLEVBQXlDQyxZQUF6QyxDQUFYO0FBQUEsT0FBakI7QUFFQSxXQUFLTSxVQUFMO0FBQ0Q7Ozs0QkFFT1QsTyxFQUFTO0FBQ2YsVUFBTUcsWUFBWSxHQUFHSCxPQUFyQjtBQUFBLFVBQ01JLFFBQVEsR0FBRyxLQUFLQyxXQUFMLEVBRGpCO0FBR0FELE1BQUFBLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixVQUFDQyxLQUFEO0FBQUEsZUFBV0EsS0FBSyxDQUFDRyxPQUFOLENBQWNQLFlBQWQsQ0FBWDtBQUFBLE9BQWpCOztBQUVBO0FBQ0Q7OztpQ0FFWTtBQUFBOztBQUNYLFVBQU1RLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0MsS0FBakIsQ0FBZDtBQUVBSCxNQUFBQSxLQUFLLENBQUNMLE9BQU4sQ0FBYyxVQUFDUyxJQUFELEVBQVU7QUFDdEIsWUFBTUMsS0FBSyxHQUFHLEtBQUksQ0FBQ0YsS0FBTCxDQUFXQyxJQUFYLENBQWQ7O0FBRUEsWUFBSSxLQUFKLEVBQVcsQ0FFVixDQUZELE1BRU8sSUFBSSxLQUFJLENBQUNFLGFBQUwsQ0FBbUJGLElBQW5CLENBQUosRUFBOEI7QUFDbkMsVUFBQSxLQUFJLENBQUNHLFVBQUwsQ0FBZ0JILElBQWhCLEVBQXNCQyxLQUF0QjtBQUNELFNBRk0sTUFFQSxJQUFJLEtBQUksQ0FBQ0csZUFBTCxDQUFxQkosSUFBckIsQ0FBSixFQUFnQztBQUNyQyxVQUFBLEtBQUksQ0FBQ0ssWUFBTCxDQUFrQkwsSUFBbEIsRUFBd0JDLEtBQXhCO0FBQ0QsU0FGTSxNQUVBLElBQUlELElBQUksS0FBSyxLQUFiLEVBQW9CO0FBQ3pCLGNBQU1NLFFBQVEsR0FBR0wsS0FBakIsQ0FEeUIsQ0FDRDs7QUFFeEJLLFVBQUFBLFFBQVEsQ0FBQyxLQUFJLENBQUNDLFVBQU4sQ0FBUjtBQUNEO0FBQ0YsT0FkRDtBQWVEOzs7K0JBRVVQLEksRUFBTUMsSyxFQUFPO0FBQ3RCLFVBQU1PLFNBQVMsR0FBR1IsSUFBSSxDQUFDUyxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLEVBQWxCO0FBQUEsVUFBZ0Q7QUFDMUNDLE1BQUFBLE9BQU8sR0FBR1YsS0FEaEIsQ0FEc0IsQ0FFRTs7QUFFeEIsV0FBS00sVUFBTCxDQUFnQkssZ0JBQWhCLENBQWlDSixTQUFqQyxFQUE2Q0csT0FBN0M7QUFDRDs7O2tDQUVZWCxJLEVBQU07QUFDbkIsYUFBT0EsSUFBSSxDQUFDYSxLQUFMLENBQVcsS0FBWCxDQUFQO0FBQ0E7Ozs7RUFwRDhCQywwQjs7QUF1RGhDakIsTUFBTSxDQUFDa0IsTUFBUCxDQUFjakMsaUJBQWlCLENBQUNrQyxTQUFoQyxFQUEyQ0MsNkJBQTNDO2VBRWVuQyxpQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTU5vZGUgZnJvbSBcIi4uL3ZpcnR1YWxET01Ob2RlXCI7XG5cbmltcG9ydCB2aXJ0dWFsRE9NRWxlbWVudE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL3ZpcnR1YWxET01FbGVtZW50XCI7XG5cbmNsYXNzIFZpcnR1YWxET01FbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTU5vZGUge1xuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcblxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCkpO1xuXG4gICAgdGhpcy5hcHBseVByb3BzKCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG5cbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHNbbmFtZV07XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNIYW5kbGVyTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEhhbmRsZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwicmVmXCIpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB2YWx1ZTsgLy8vXG4gICAgICAgIFxuICAgICAgICBjYWxsYmFjayh0aGlzLmRvbUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAgaGFuZGxlcik7XG4gIH1cblxuXHRpc0hhbmRsZXJOYW1lKG5hbWUpIHtcblx0XHRyZXR1cm4gbmFtZS5tYXRjaCgvXm9uLyk7XG5cdH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaXJ0dWFsRE9NRWxlbWVudC5wcm90b3R5cGUsIHZpcnR1YWxET01FbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgVmlydHVhbERPTUVsZW1lbnQ7XG4iXX0=