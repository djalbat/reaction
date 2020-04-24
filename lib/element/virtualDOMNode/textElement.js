"use strict";

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

var VirtualDOMNode = require("../virtualDOMNode");

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
}(VirtualDOMNode);

module.exports = VirtualDOMTextElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRFbGVtZW50LmpzIl0sIm5hbWVzIjpbIlZpcnR1YWxET01Ob2RlIiwicmVxdWlyZSIsIlZpcnR1YWxET01UZXh0RWxlbWVudCIsInRleHQiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImNoaWxkcmVuIiwicHJvcHMiLCJwYXJlbnQiLCJyZWZlcmVuY2UiLCJjb250ZXh0Iiwibm9kZVZhbHVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLE9BQU8sQ0FBQyxtQkFBRCxDQUE5Qjs7SUFFTUMscUI7Ozs7O0FBQ0osaUNBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsUUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JILElBQXhCLENBQW5CO0FBQUEsUUFDTUksUUFBUSxHQUFHLEVBRGpCO0FBQUEsUUFFTUMsS0FBSyxHQUFHO0FBQ05ELE1BQUFBLFFBQVEsRUFBUkE7QUFETSxLQUZkO0FBRGdCLDZCQU9WQyxLQVBVLEVBT0hKLFVBUEc7QUFRakI7Ozs7MEJBRUtLLE0sRUFBUUMsUyxFQUFXQyxPLEVBQVM7QUFDaEMsdUZBQVlGLE1BQVosRUFBb0JDLFNBQXBCO0FBQ0Q7Ozs0QkFFT0MsTyxFQUFTO0FBQ2Y7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBTUMsU0FBUyxHQUFHLEtBQUtSLFVBQUwsQ0FBZ0JRLFNBQWxDO0FBQUEsVUFDTVQsSUFBSSxHQUFHUyxTQURiLENBRFEsQ0FFZ0I7O0FBRXhCLGFBQU9ULElBQVA7QUFDRDs7OzRCQUVPQSxJLEVBQU07QUFDWixVQUFNUyxTQUFTLEdBQUdULElBQWxCLENBRFksQ0FDWTs7QUFFeEIsV0FBS0MsVUFBTCxDQUFnQlEsU0FBaEIsR0FBNEJBLFNBQTVCO0FBQ0Q7Ozs7RUE5QmlDWixjOztBQWlDcENhLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQloscUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFZpcnR1YWxET01Ob2RlID0gcmVxdWlyZShcIi4uL3ZpcnR1YWxET01Ob2RlXCIpO1xuXG5jbGFzcyBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuICB9XG4gIFxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxET01UZXh0RWxlbWVudDtcbiJdfQ==