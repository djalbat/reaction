'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VirtualDOMNode = require('../virtualDOMNode');

var VirtualDOMTextElement = function (_VirtualDOMNode) {
  _inherits(VirtualDOMTextElement, _VirtualDOMNode);

  function VirtualDOMTextElement(text) {
    _classCallCheck(this, VirtualDOMTextElement);

    var domElement = document.createTextNode(text),
        children = [],
        props = {
      children: children
    };

    return _possibleConstructorReturn(this, (VirtualDOMTextElement.__proto__ || Object.getPrototypeOf(VirtualDOMTextElement)).call(this, props, domElement));
  }

  _createClass(VirtualDOMTextElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(VirtualDOMTextElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMTextElement.prototype), 'mount', this).call(this, parent, reference);
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      _get(VirtualDOMTextElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMTextElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'getText',
    value: function getText() {
      var domElement = this.getDOMElement(),
          text = domElement.nodeValue; ///

      return text;
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      var domElement = this.getDOMElement();

      domElement.nodeValue = text;
    }
  }]);

  return VirtualDOMTextElement;
}(VirtualDOMNode);

module.exports = VirtualDOMTextElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL3RleHRFbGVtZW50LmpzIl0sIm5hbWVzIjpbIlZpcnR1YWxET01Ob2RlIiwicmVxdWlyZSIsIlZpcnR1YWxET01UZXh0RWxlbWVudCIsInRleHQiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImNoaWxkcmVuIiwicHJvcHMiLCJwYXJlbnQiLCJyZWZlcmVuY2UiLCJjb250ZXh0IiwiZ2V0RE9NRWxlbWVudCIsIm5vZGVWYWx1ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUJDLFFBQVEsbUJBQVIsQ0FBdkI7O0lBRU1DLHFCOzs7QUFDSixpQ0FBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixRQUFNQyxhQUFhQyxTQUFTQyxjQUFULENBQXdCSCxJQUF4QixDQUFuQjtBQUFBLFFBQ01JLFdBQVcsRUFEakI7QUFBQSxRQUVNQyxRQUFRO0FBQ05ELGdCQUFVQTtBQURKLEtBRmQ7O0FBRGdCLHlJQU9WQyxLQVBVLEVBT0hKLFVBUEc7QUFRakI7Ozs7MEJBRUtLLE0sRUFBUUMsUyxFQUFXQyxPLEVBQVM7QUFDaEMsMElBQVlGLE1BQVosRUFBb0JDLFNBQXBCO0FBQ0Q7Ozs0QkFFT0MsTyxFQUFTO0FBQ2Y7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBTVAsYUFBYSxLQUFLUSxhQUFMLEVBQW5CO0FBQUEsVUFDTVQsT0FBT0MsV0FBV1MsU0FEeEIsQ0FEUSxDQUUyQjs7QUFFbkMsYUFBT1YsSUFBUDtBQUNEOzs7NEJBRU9BLEksRUFBTTtBQUNaLFVBQU1DLGFBQWEsS0FBS1EsYUFBTCxFQUFuQjs7QUFFQVIsaUJBQVdTLFNBQVgsR0FBdUJWLElBQXZCO0FBQ0Q7Ozs7RUE5QmlDSCxjOztBQWlDcENjLE9BQU9DLE9BQVAsR0FBaUJiLHFCQUFqQiIsImZpbGUiOiJ0ZXh0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVmlydHVhbERPTU5vZGUgPSByZXF1aXJlKCcuLi92aXJ0dWFsRE9NTm9kZScpO1xuXG5jbGFzcyBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICAgIH07XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcbiAgfVxuICBcbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgdGV4dCA9IGRvbUVsZW1lbnQubm9kZVZhbHVlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgZG9tRWxlbWVudC5ub2RlVmFsdWUgPSB0ZXh0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTVRleHRFbGVtZW50O1xuIl19