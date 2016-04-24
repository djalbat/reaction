'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var TextElement = function (_Element) {
  _inherits(TextElement, _Element);

  function TextElement(text, props) {
    _classCallCheck(this, TextElement);

    var domElement = document.createTextNode(text);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextElement).call(this, domElement, props));
  }

  _createClass(TextElement, [{
    key: 'mount',
    value: function mount(parent, sibling, context) {
      _get(Object.getPrototypeOf(TextElement.prototype), 'mount', this).call(this, parent, sibling);

      return this;
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      _get(Object.getPrototypeOf(TextElement.prototype), 'unmount', this).call(this);
    }
  }]);

  return TextElement;
}(Element);

module.exports = TextElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS90ZXh0RWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxVQUFVLFFBQVEsV0FBUixDQUFWOztJQUVFOzs7QUFDSixXQURJLFdBQ0osQ0FBWSxJQUFaLEVBQWtCLEtBQWxCLEVBQXlCOzBCQURyQixhQUNxQjs7QUFDdkIsUUFBSSxhQUFhLFNBQVMsY0FBVCxDQUF3QixJQUF4QixDQUFiLENBRG1COztrRUFEckIsd0JBSUksWUFBWSxRQUhLO0dBQXpCOztlQURJOzswQkFPRSxRQUFRLFNBQVMsU0FBUztBQUM5QixpQ0FSRSxrREFRVSxRQUFRLFFBQXBCLENBRDhCOztBQUc5QixhQUFPLElBQVAsQ0FIOEI7Ozs7NEJBTXhCLFNBQVM7QUFDZixpQ0FkRSxtREFjRixDQURlOzs7O1NBYmI7RUFBb0I7O0FBa0IxQixPQUFPLE9BQVAsR0FBaUIsV0FBakIiLCJmaWxlIjoidGV4dEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFRleHRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQsIHByb3BzKSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcblxuICAgIHN1cGVyKGRvbUVsZW1lbnQsIHByb3BzKTtcbiAgfVxuICBcbiAgbW91bnQocGFyZW50LCBzaWJsaW5nLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCBzaWJsaW5nKTtcbiAgICBcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBcbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dEVsZW1lbnQ7XG4iXX0=