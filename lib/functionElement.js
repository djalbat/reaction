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

    _this.element = _this.render();
    return _this;
  }

  _createClass(FunctionElement, [{
    key: 'render',
    value: function render() {
      var _ref = this.instance.props; ////

      return this.reactFunction(_ref);
    }
  }]);

  return FunctionElement;
}(Element);

module.exports = FunctionElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9mdW5jdGlvbkVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFVBQVUsUUFBUSxXQUFSLENBQVY7O0lBRUU7OztBQUNKLFdBREksZUFDSixDQUFZLGFBQVosRUFBMkIsVUFBM0IsRUFBdUMsUUFBdkMsRUFBaUQ7MEJBRDdDLGlCQUM2Qzs7dUVBRDdDLDRCQUVJLFlBQVksV0FENkI7O0FBRy9DLFVBQUssYUFBTCxHQUFxQixhQUFyQixDQUgrQzs7QUFLL0MsVUFBSyxPQUFMLEdBQWUsTUFBSyxNQUFMLEVBQWYsQ0FMK0M7O0dBQWpEOztlQURJOzs2QkFTSztBQUNQLFVBQUksT0FBTyxLQUFLLFFBQUwsQ0FBYyxLQUFkOztBQURKLGFBR0EsS0FBSyxhQUFMLENBQW1CLElBQW5CLENBQVAsQ0FITzs7OztTQVRMO0VBQXdCOztBQWdCOUIsT0FBTyxPQUFQLEdBQWlCLGVBQWpCIiwiZmlsZSI6ImZ1bmN0aW9uRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgRnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0RnVuY3Rpb24sIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgc3VwZXIocHJvcGVydGllcywgY2hpbGRyZW4pO1xuXG4gICAgdGhpcy5yZWFjdEZ1bmN0aW9uID0gcmVhY3RGdW5jdGlvbjtcbiAgICBcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnJlbmRlcigpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgdmFyIF9yZWYgPSB0aGlzLmluc3RhbmNlLnByb3BzOyAvLy8vXG5cbiAgICByZXR1cm4gdGhpcy5yZWFjdEZ1bmN0aW9uKF9yZWYpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb25FbGVtZW50O1xuIl19