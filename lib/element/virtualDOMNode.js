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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpcnR1YWxET01Ob2RlLmpzIl0sIm5hbWVzIjpbIlZpcnR1YWxET01Ob2RlIiwicHJvcHMiLCJkb21FbGVtZW50IiwicGFyZW50IiwicmVmZXJlbmNlIiwiY2hpbGRyZW4iLCJnZXRDaGlsZHJlbiIsInBhcmVudERPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJyZWZlcmVuY2VET01FbGVtZW50IiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwidmlydHVhbERPTU5vZGUiLCJFbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsImdldERPTUVsZW1lbnQiLCJnZXRQYXJlbnQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsYzs7Ozs7QUFDSiwwQkFBWUMsS0FBWixFQUFtQkMsVUFBbkIsRUFBK0I7QUFBQTs7QUFBQTs7QUFDN0IsOEJBQU1ELEtBQU47QUFFQSxVQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUg2QjtBQUk5Qjs7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0EsVUFBWjtBQUNEOzs7MEJBRUtDLE0sRUFBUUMsUyxFQUFXO0FBQ3ZCLFVBQU1DLFFBQVEsR0FBRyxLQUFLQyxXQUFMLEVBQWpCOztBQUVBLGdGQUFZSCxNQUFaLEVBQW9CRSxRQUFwQjs7QUFFQUUsTUFBQUEsZ0JBQWdCLENBQUNKLE1BQUQsQ0FBaEIsQ0FBeUJLLFlBQXpCLENBQXNDLEtBQUtOLFVBQTNDLEVBQXVETyxtQkFBbUIsQ0FBQ0wsU0FBRCxDQUExRTtBQUVBLGFBQU8sS0FBS0YsVUFBWjtBQUNEOzs7OEJBRVM7QUFDUixXQUFLQSxVQUFMLENBQWdCUSxhQUFoQixDQUE4QkMsV0FBOUIsQ0FBMEMsS0FBS1QsVUFBL0M7O0FBRUE7QUFDRDs7O21DQUVxQkEsVSxFQUFZO0FBQ2hDLFVBQU1HLFFBQVEsR0FBRyxFQUFqQjtBQUFBLFVBQ01KLEtBQUssR0FBRztBQUNOSSxRQUFBQSxRQUFRLEVBQVJBO0FBRE0sT0FEZDtBQUFBLFVBSU1PLGNBQWMsR0FBRyxJQUFJWixjQUFKLENBQW1CQyxLQUFuQixFQUEwQkMsVUFBMUIsQ0FKdkI7QUFNQSxhQUFPVSxjQUFQO0FBQ0Q7Ozs7RUFuQzBCQyxtQjs7QUFzQzdCQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJmLGNBQWpCOztBQUVBLFNBQVNPLGdCQUFULENBQTBCSixNQUExQixFQUFrQztBQUNoQyxNQUFJSSxnQkFBZ0IsR0FBR0osTUFBTSxDQUFDYSxhQUFQLEVBQXZCOztBQUVBLFNBQU9ULGdCQUFnQixLQUFLLElBQTVCLEVBQWtDO0FBQ2hDSixJQUFBQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ2MsU0FBUCxFQUFUO0FBRUFWLElBQUFBLGdCQUFnQixHQUFHSixNQUFNLENBQUNhLGFBQVAsRUFBbkI7QUFDRDs7QUFFRCxTQUFPVCxnQkFBUDtBQUNEOztBQUVELFNBQVNFLG1CQUFULENBQTZCTCxTQUE3QixFQUF3QztBQUN0QyxNQUFNSyxtQkFBbUIsR0FBSUwsU0FBUyxLQUFLLElBQWYsR0FDRUEsU0FBUyxDQUFDWSxhQUFWLEVBREYsR0FFSSxJQUZoQztBQUlBLFNBQU9QLG1CQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuY2xhc3MgVmlydHVhbERPTU5vZGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBwYXJlbnRET01FbGVtZW50KHBhcmVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpKTtcblxuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlydHVhbERPTU5vZGUgPSBuZXcgVmlydHVhbERPTU5vZGUocHJvcHMsIGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHZpcnR1YWxET01Ob2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTU5vZGU7XG5cbmZ1bmN0aW9uIHBhcmVudERPTUVsZW1lbnQocGFyZW50KSB7XG4gIGxldCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudERPTUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZURPTUVsZW1lbnQgPSAocmVmZXJlbmNlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZS5nZXRET01FbGVtZW50KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZURPTUVsZW1lbnQ7XG59XG4iXX0=