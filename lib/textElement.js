'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var TextElement = function (_Element) {
  _inherits(TextElement, _Element);

  function TextElement(text) {
    _classCallCheck(this, TextElement);

    var domElement = document.createTextNode(text),
        children = [],
        props = {
      children: children
    };

    return _possibleConstructorReturn(this, (TextElement.__proto__ || Object.getPrototypeOf(TextElement)).call(this, domElement, props));
  }

  _createClass(TextElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(TextElement.prototype.__proto__ || Object.getPrototypeOf(TextElement.prototype), 'mount', this).call(this, parent, reference);
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      _get(TextElement.prototype.__proto__ || Object.getPrototypeOf(TextElement.prototype), 'unmount', this).call(this);
    }
  }]);

  return TextElement;
}(Element);

module.exports = TextElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi90ZXh0RWxlbWVudC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlRleHRFbGVtZW50IiwidGV4dCIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiY2hpbGRyZW4iLCJwcm9wcyIsInBhcmVudCIsInJlZmVyZW5jZSIsImNvbnRleHQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCOztJQUVNQyxXOzs7QUFDSix1QkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixRQUFNQyxhQUFhQyxTQUFTQyxjQUFULENBQXdCSCxJQUF4QixDQUFuQjtBQUFBLFFBQ01JLFdBQVcsRUFEakI7QUFBQSxRQUVNQyxRQUFRO0FBQ05ELGdCQUFVQTtBQURKLEtBRmQ7O0FBRGdCLHFIQU9WSCxVQVBVLEVBT0VJLEtBUEY7QUFRakI7Ozs7MEJBRUtDLE0sRUFBUUMsUyxFQUFXQyxPLEVBQVM7QUFDaEMsc0hBQVlGLE1BQVosRUFBb0JDLFNBQXBCO0FBQ0Q7Ozs0QkFFT0MsTyxFQUFTO0FBQ2Y7QUFDRDs7OztFQWpCdUJYLE87O0FBb0IxQlksT0FBT0MsT0FBUCxHQUFpQlgsV0FBakIiLCJmaWxlIjoidGV4dEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgVGV4dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSxcbiAgICAgICAgICBjaGlsZHJlbiA9IFtdLFxuICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgICAgfTtcblxuICAgIHN1cGVyKGRvbUVsZW1lbnQsIHByb3BzKTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuICB9XG4gIFxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0RWxlbWVudDtcbiJdfQ==