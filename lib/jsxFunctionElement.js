'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSXElement = require('./jsxElement');

var JSXFunctionElement = function (_JSXElement) {
  _inherits(JSXFunctionElement, _JSXElement);

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
      var _ref = this.instance.props; ///

      this.jsxElement = this.reactFunction(_ref);
    }
  }]);

  return JSXFunctionElement;
}(JSXElement);

module.exports = JSXFunctionElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hGdW5jdGlvbkVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLGFBQWEsUUFBUSxjQUFSLENBQWI7O0lBRUU7OztBQUNKLFdBREksa0JBQ0osQ0FBWSxhQUFaLEVBQTJCLFVBQTNCLEVBQXVDLFFBQXZDLEVBQWlEOzBCQUQ3QyxvQkFDNkM7O3VFQUQ3QywrQkFFSSxZQUFZLFdBRDZCOztBQUcvQyxVQUFLLGFBQUwsR0FBcUIsYUFBckIsQ0FIK0M7O0FBSy9DLFVBQUssTUFBTCxHQUwrQzs7R0FBakQ7O2VBREk7OzZCQVNLO0FBQ1AsVUFBSSxPQUFPLEtBQUssUUFBTCxDQUFjLEtBQWQ7O0FBREosVUFHUCxDQUFLLFVBQUwsR0FBa0IsS0FBSyxhQUFMLENBQW1CLElBQW5CLENBQWxCLENBSE87Ozs7U0FUTDtFQUEyQjs7QUFnQmpDLE9BQU8sT0FBUCxHQUFpQixrQkFBakIiLCJmaWxlIjoianN4RnVuY3Rpb25FbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSlNYRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4RWxlbWVudCcpO1xuXG5jbGFzcyBKU1hGdW5jdGlvbkVsZW1lbnQgZXh0ZW5kcyBKU1hFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuICAgIFxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgX3JlZiA9IHRoaXMuaW5zdGFuY2UucHJvcHM7IC8vL1xuXG4gICAgdGhpcy5qc3hFbGVtZW50ID0gdGhpcy5yZWFjdEZ1bmN0aW9uKF9yZWYpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYRnVuY3Rpb25FbGVtZW50O1xuIl19