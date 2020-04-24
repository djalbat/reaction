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

var Element = require("../element");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpcnR1YWxET01Ob2RlLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiVmlydHVhbERPTU5vZGUiLCJwcm9wcyIsImRvbUVsZW1lbnQiLCJwYXJlbnQiLCJyZWZlcmVuY2UiLCJjaGlsZHJlbiIsImdldENoaWxkcmVuIiwicGFyZW50RE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsInJlZmVyZW5jZURPTUVsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJ2aXJ0dWFsRE9NTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRET01FbGVtZW50IiwiZ2V0UGFyZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBdkI7O0lBRU1DLGM7Ozs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUJDLFVBQW5CLEVBQStCO0FBQUE7O0FBQUE7O0FBQzdCLDhCQUFNRCxLQUFOO0FBRUEsVUFBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFINkI7QUFJOUI7Ozs7b0NBRWU7QUFDZCxhQUFPLEtBQUtBLFVBQVo7QUFDRDs7OzBCQUVLQyxNLEVBQVFDLFMsRUFBVztBQUN2QixVQUFNQyxRQUFRLEdBQUcsS0FBS0MsV0FBTCxFQUFqQjs7QUFFQSxnRkFBWUgsTUFBWixFQUFvQkUsUUFBcEI7O0FBRUFFLE1BQUFBLGdCQUFnQixDQUFDSixNQUFELENBQWhCLENBQXlCSyxZQUF6QixDQUFzQyxLQUFLTixVQUEzQyxFQUF1RE8sbUJBQW1CLENBQUNMLFNBQUQsQ0FBMUU7QUFFQSxhQUFPLEtBQUtGLFVBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsV0FBS0EsVUFBTCxDQUFnQlEsYUFBaEIsQ0FBOEJDLFdBQTlCLENBQTBDLEtBQUtULFVBQS9DOztBQUVBO0FBQ0Q7OzttQ0FFcUJBLFUsRUFBWTtBQUNoQyxVQUFNRyxRQUFRLEdBQUcsRUFBakI7QUFBQSxVQUNNSixLQUFLLEdBQUc7QUFDTkksUUFBQUEsUUFBUSxFQUFSQTtBQURNLE9BRGQ7QUFBQSxVQUlNTyxjQUFjLEdBQUcsSUFBSVosY0FBSixDQUFtQkMsS0FBbkIsRUFBMEJDLFVBQTFCLENBSnZCO0FBTUEsYUFBT1UsY0FBUDtBQUNEOzs7O0VBbkMwQmQsTzs7QUFzQzdCZSxNQUFNLENBQUNDLE9BQVAsR0FBaUJkLGNBQWpCOztBQUVBLFNBQVNPLGdCQUFULENBQTBCSixNQUExQixFQUFrQztBQUNoQyxNQUFJSSxnQkFBZ0IsR0FBR0osTUFBTSxDQUFDWSxhQUFQLEVBQXZCOztBQUVBLFNBQU9SLGdCQUFnQixLQUFLLElBQTVCLEVBQWtDO0FBQ2hDSixJQUFBQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ2EsU0FBUCxFQUFUO0FBRUFULElBQUFBLGdCQUFnQixHQUFHSixNQUFNLENBQUNZLGFBQVAsRUFBbkI7QUFDRDs7QUFFRCxTQUFPUixnQkFBUDtBQUNEOztBQUVELFNBQVNFLG1CQUFULENBQTZCTCxTQUE3QixFQUF3QztBQUN0QyxNQUFNSyxtQkFBbUIsR0FBSUwsU0FBUyxLQUFLLElBQWYsR0FDRUEsU0FBUyxDQUFDVyxhQUFWLEVBREYsR0FFSSxJQUZoQztBQUlBLFNBQU9OLG1CQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoXCIuLi9lbGVtZW50XCIpO1xuXG5jbGFzcyBWaXJ0dWFsRE9NTm9kZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgZG9tRWxlbWVudCkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICBcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQocGFyZW50KS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aXJ0dWFsRE9NTm9kZSA9IG5ldyBWaXJ0dWFsRE9NTm9kZShwcm9wcywgZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gdmlydHVhbERPTU5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsRE9NTm9kZTtcblxuZnVuY3Rpb24gcGFyZW50RE9NRWxlbWVudChwYXJlbnQpIHtcbiAgbGV0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RE9NRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpIHtcbiAgY29uc3QgcmVmZXJlbmNlRE9NRWxlbWVudCA9IChyZWZlcmVuY2UgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlLmdldERPTUVsZW1lbnQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcmVmZXJlbmNlRE9NRWxlbWVudDtcbn1cbiJdfQ==