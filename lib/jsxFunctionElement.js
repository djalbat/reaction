'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSXBaseElement = require('./jsxBaseElement');

var JSXFunctionElement = function (_JSXBaseElement) {
  _inherits(JSXFunctionElement, _JSXBaseElement);

  function JSXFunctionElement(reactFunction, properties, children) {
    _classCallCheck(this, JSXFunctionElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JSXFunctionElement).call(this, properties, children));

    _this.reactFunction = reactFunction;

    _this.render();
    return _this;
  }

  _createClass(JSXFunctionElement, [{
    key: 'render',
    value: function render() {
      this.jsxElement = this.reactFunction(this._ref);
    }
  }]);

  return JSXFunctionElement;
}(JSXBaseElement);

module.exports = JSXFunctionElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hGdW5jdGlvbkVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCOztJQUVFOzs7QUFDSixXQURJLGtCQUNKLENBQVksYUFBWixFQUEyQixVQUEzQixFQUF1QyxRQUF2QyxFQUFpRDswQkFEN0Msb0JBQzZDOzt1RUFEN0MsK0JBRUksWUFBWSxXQUQ2Qjs7QUFHL0MsVUFBSyxhQUFMLEdBQXFCLGFBQXJCLENBSCtDOztBQUsvQyxVQUFLLE1BQUwsR0FMK0M7O0dBQWpEOztlQURJOzs2QkFTSztBQUNQLFdBQUssVUFBTCxHQUFrQixLQUFLLGFBQUwsQ0FBbUIsS0FBSyxJQUFMLENBQXJDLENBRE87Ozs7U0FUTDtFQUEyQjs7QUFjakMsT0FBTyxPQUFQLEdBQWlCLGtCQUFqQiIsImZpbGUiOiJqc3hGdW5jdGlvbkVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBKU1hCYXNlRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4QmFzZUVsZW1lbnQnKTtcblxuY2xhc3MgSlNYRnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgSlNYQmFzZUVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdEZ1bmN0aW9uLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICAgIHN1cGVyKHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcblxuICAgIHRoaXMucmVhY3RGdW5jdGlvbiA9IHJlYWN0RnVuY3Rpb247XG4gICAgXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuanN4RWxlbWVudCA9IHRoaXMucmVhY3RGdW5jdGlvbih0aGlzLl9yZWYpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYRnVuY3Rpb25FbGVtZW50O1xuIl19