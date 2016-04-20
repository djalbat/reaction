'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSXDOMElement = require('./jsxDOMElement'),
    JSXBaseElement = require('./jsxBaseElement');

var JSXTextElement = function (_JSXBaseElement) {
  _inherits(JSXTextElement, _JSXBaseElement);

  function JSXTextElement(text) {
    _classCallCheck(this, JSXTextElement);

    var properties = {},
        children = [];

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JSXTextElement).call(this, properties, children));

    var domElement = document.createTextNode(text);

    _this.jsxElement = JSXDOMElement.fromDOMElement(domElement);
    return _this;
  }

  _createClass(JSXTextElement, [{
    key: 'render',
    value: function render() {}
  }]);

  return JSXTextElement;
}(JSXBaseElement);

module.exports = JSXTextElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hUZXh0RWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUksZ0JBQWdCLFFBQVEsaUJBQVIsQ0FBaEI7SUFDQSxpQkFBaUIsUUFBUSxrQkFBUixDQUFqQjs7SUFFRTs7O0FBQ0osV0FESSxjQUNKLENBQVksSUFBWixFQUFrQjswQkFEZCxnQkFDYzs7QUFDaEIsUUFBTSxhQUFhLEVBQWI7UUFDQSxXQUFXLEVBQVgsQ0FGVTs7dUVBRGQsMkJBS0ksWUFBWSxXQUpGOztBQU1oQixRQUFJLGFBQWEsU0FBUyxjQUFULENBQXdCLElBQXhCLENBQWIsQ0FOWTs7QUFRaEIsVUFBSyxVQUFMLEdBQWtCLGNBQWMsY0FBZCxDQUE2QixVQUE3QixDQUFsQixDQVJnQjs7R0FBbEI7O2VBREk7OzZCQVlLOzs7U0FaTDtFQUF1Qjs7QUFpQjdCLE9BQU8sT0FBUCxHQUFpQixjQUFqQiIsImZpbGUiOiJqc3hUZXh0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEpTWERPTUVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeERPTUVsZW1lbnQnKSxcbiAgICBKU1hCYXNlRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4QmFzZUVsZW1lbnQnKTtcblxuY2xhc3MgSlNYVGV4dEVsZW1lbnQgZXh0ZW5kcyBKU1hCYXNlRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0ge30sXG4gICAgICAgICAgY2hpbGRyZW4gPSBbXTtcbiAgICBcbiAgICBzdXBlcihwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG5cbiAgICB2YXIgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xuXG4gICAgdGhpcy5qc3hFbGVtZW50ID0gSlNYRE9NRWxlbWVudC5mcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYVGV4dEVsZW1lbnQ7XG4iXX0=