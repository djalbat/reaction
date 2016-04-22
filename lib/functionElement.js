'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var FunctionElement = function (_Element) {
  _inherits(FunctionElement, _Element);

  function FunctionElement(reactFunction, properties, children) {
    _classCallCheck(this, FunctionElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FunctionElement).call(this, properties, children));

    _this.reactFunction = reactFunction;

    _this.render();
    return _this;
  }

  _createClass(FunctionElement, [{
    key: 'render',
    value: function render() {
      var _ref = this.instance.props; ////

      this.element = this.reactFunction(_ref);
    }
  }]);

  return FunctionElement;
}(Element);

module.exports = FunctionElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9mdW5jdGlvbkVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFVBQVUsUUFBUSxXQUFSLENBQVY7O0lBRUU7OztBQUNKLFdBREksZUFDSixDQUFZLGFBQVosRUFBMkIsVUFBM0IsRUFBdUMsUUFBdkMsRUFBaUQ7MEJBRDdDLGlCQUM2Qzs7dUVBRDdDLDRCQUVJLFlBQVksV0FENkI7O0FBRy9DLFVBQUssYUFBTCxHQUFxQixhQUFyQixDQUgrQzs7QUFLL0MsVUFBSyxNQUFMLEdBTCtDOztHQUFqRDs7ZUFESTs7NkJBU0s7QUFDUCxVQUFJLE9BQU8sS0FBSyxRQUFMLENBQWMsS0FBZDs7QUFESixVQUdQLENBQUssT0FBTCxHQUFlLEtBQUssYUFBTCxDQUFtQixJQUFuQixDQUFmLENBSE87Ozs7U0FUTDtFQUF3Qjs7QUFnQjlCLE9BQU8sT0FBUCxHQUFpQixlQUFqQiIsImZpbGUiOiJmdW5jdGlvbkVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIEZ1bmN0aW9uRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdEZ1bmN0aW9uLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICAgIHN1cGVyKHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcblxuICAgIHRoaXMucmVhY3RGdW5jdGlvbiA9IHJlYWN0RnVuY3Rpb247XG4gICAgXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHZhciBfcmVmID0gdGhpcy5pbnN0YW5jZS5wcm9wczsgLy8vL1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5yZWFjdEZ1bmN0aW9uKF9yZWYpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb25FbGVtZW50O1xuIl19