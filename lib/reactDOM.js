'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = require('./element');

var ReactDOM = function () {
  function ReactDOM() {
    _classCallCheck(this, ReactDOM);
  }

  _createClass(ReactDOM, null, [{
    key: 'render',
    value: function render(element, parentDOMElement) {
      var parent = Element.fromDOMElement(parentDOMElement),
          reference = null,
          context = undefined;

      element.mount(parent, reference, context);
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdERPTS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlJlYWN0RE9NIiwiZWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJwYXJlbnQiLCJmcm9tRE9NRWxlbWVudCIsInJlZmVyZW5jZSIsImNvbnRleHQiLCJ1bmRlZmluZWQiLCJtb3VudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7O0lBRU1DLFE7Ozs7Ozs7MkJBQ1VDLE8sRUFBU0MsZ0IsRUFBa0I7QUFDdkMsVUFBTUMsU0FBU0wsUUFBUU0sY0FBUixDQUF1QkYsZ0JBQXZCLENBQWY7QUFBQSxVQUNNRyxZQUFZLElBRGxCO0FBQUEsVUFFTUMsVUFBVUMsU0FGaEI7O0FBSUFOLGNBQVFPLEtBQVIsQ0FBY0wsTUFBZCxFQUFzQkUsU0FBdEIsRUFBaUNDLE9BQWpDO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCVixRQUFqQiIsImZpbGUiOiJyZWFjdERPTS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdERPTSB7XG4gIHN0YXRpYyByZW5kZXIoZWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudCA9IEVsZW1lbnQuZnJvbURPTUVsZW1lbnQocGFyZW50RE9NRWxlbWVudCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gdW5kZWZpbmVkO1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcbiJdfQ==