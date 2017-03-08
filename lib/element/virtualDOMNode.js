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
    key: 'mount',
    value: function mount(parent, reference) {
      _get(VirtualDOMNode.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMNode.prototype), 'mount', this).call(this, parent);

      parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.domElement.parentElement.removeChild(this.domElement);

      _get(VirtualDOMNode.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMNode.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiVmlydHVhbERPTU5vZGUiLCJwcm9wcyIsImRvbUVsZW1lbnQiLCJwYXJlbnQiLCJyZWZlcmVuY2UiLCJwYXJlbnRET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwicmVmZXJlbmNlRE9NRWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImNoaWxkcmVuIiwidmlydHVhbERPTU5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0RE9NRWxlbWVudCIsImdldFBhcmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjs7SUFFTUMsYzs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUJDLFVBQW5CLEVBQStCO0FBQUE7O0FBQUEsZ0lBQ3ZCRCxLQUR1Qjs7QUFHN0IsVUFBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFINkI7QUFJOUI7Ozs7MEJBRUtDLE0sRUFBUUMsUyxFQUFXO0FBQ3ZCLDRIQUFZRCxNQUFaOztBQUVBRSx1QkFBaUJGLE1BQWpCLEVBQXlCRyxZQUF6QixDQUFzQyxLQUFLSixVQUEzQyxFQUF1REssb0JBQW9CSCxTQUFwQixDQUF2RDtBQUNEOzs7OEJBRVM7QUFDUixXQUFLRixVQUFMLENBQWdCTSxhQUFoQixDQUE4QkMsV0FBOUIsQ0FBMEMsS0FBS1AsVUFBL0M7O0FBRUE7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLQSxVQUFaO0FBQ0Q7OzttQ0FFcUJBLFUsRUFBWTtBQUNoQyxVQUFNUSxXQUFXLEVBQWpCO0FBQUEsVUFDTVQsUUFBUTtBQUNOUyxrQkFBVUE7QUFESixPQURkO0FBQUEsVUFJTUMsaUJBQWlCLElBQUlYLGNBQUosQ0FBbUJDLEtBQW5CLEVBQTBCQyxVQUExQixDQUp2Qjs7QUFNQSxhQUFPUyxjQUFQO0FBQ0Q7Ozs7RUEvQjBCYixPOztBQWtDN0JjLE9BQU9DLE9BQVAsR0FBaUJiLGNBQWpCOztBQUVBLFNBQVNLLGdCQUFULENBQTBCRixNQUExQixFQUFrQztBQUNoQyxNQUFJRSxtQkFBbUJGLE9BQU9XLGFBQVAsRUFBdkI7O0FBRUEsU0FBT1QscUJBQXFCLElBQTVCLEVBQWtDO0FBQ2hDRixhQUFTQSxPQUFPWSxTQUFQLEVBQVQ7O0FBRUFWLHVCQUFtQkYsT0FBT1csYUFBUCxFQUFuQjtBQUNEOztBQUVELFNBQU9ULGdCQUFQO0FBQ0Q7O0FBRUQsU0FBU0UsbUJBQVQsQ0FBNkJILFNBQTdCLEVBQXdDO0FBQ3RDLE1BQU1HLHNCQUF1QkgsY0FBYyxJQUFmLEdBQ0VBLFVBQVVVLGFBQVYsRUFERixHQUVJLElBRmhDOztBQUlBLFNBQU9QLG1CQUFQO0FBQ0QiLCJmaWxlIjoidmlydHVhbERPTU5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7IFxuXG5jbGFzcyBWaXJ0dWFsRE9NTm9kZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgZG9tRWxlbWVudCkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudChwYXJlbnQpLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSk7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpcnR1YWxET01Ob2RlID0gbmV3IFZpcnR1YWxET01Ob2RlKHByb3BzLCBkb21FbGVtZW50KTtcblxuICAgIHJldHVybiB2aXJ0dWFsRE9NTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxET01Ob2RlO1xuXG5mdW5jdGlvbiBwYXJlbnRET01FbGVtZW50KHBhcmVudCkge1xuICBsZXQgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRET01FbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VET01FbGVtZW50ID0gKHJlZmVyZW5jZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UuZ2V0RE9NRWxlbWVudCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiByZWZlcmVuY2VET01FbGVtZW50O1xufVxuIl19