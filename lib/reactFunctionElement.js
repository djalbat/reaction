'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactFunctionElement = function (_ReactElement) {
  _inherits(ReactFunctionElement, _ReactElement);

  function ReactFunctionElement(reactFunction, properties, children) {
    _classCallCheck(this, ReactFunctionElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactFunctionElement).call(this, properties, children));

    _this.reactFunction = reactFunction;

    if (!reactFunction.getChildContext) {
      reactFunction.getChildContext = defaultGetChildContext;
    }
    return _this;
  }

  _createClass(ReactFunctionElement, [{
    key: 'render',
    value: function render(context) {
      return this.reactFunction(this.instance.props, context); ///
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactFunction.getChildContext();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount(context) {
      ///
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount(context) {
      ///
    }
  }]);

  return ReactFunctionElement;
}(ReactElement);

module.exports = ReactFunctionElement;

function defaultGetChildContext() {
  return undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdEZ1bmN0aW9uRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUksZUFBZSxRQUFRLGdCQUFSLENBQWY7O0lBRUU7OztBQUNKLFdBREksb0JBQ0osQ0FBWSxhQUFaLEVBQTJCLFVBQTNCLEVBQXVDLFFBQXZDLEVBQWlEOzBCQUQ3QyxzQkFDNkM7O3VFQUQ3QyxpQ0FFSSxZQUFZLFdBRDZCOztBQUcvQyxVQUFLLGFBQUwsR0FBcUIsYUFBckIsQ0FIK0M7O0FBSy9DLFFBQUksQ0FBQyxjQUFjLGVBQWQsRUFBK0I7QUFDbEMsb0JBQWMsZUFBZCxHQUFnQyxzQkFBaEMsQ0FEa0M7S0FBcEM7aUJBTCtDO0dBQWpEOztlQURJOzsyQkFXRyxTQUFTO0FBQ2QsYUFBTyxLQUFLLGFBQUwsQ0FBbUIsS0FBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixPQUF4QyxDQUFQO0FBRGM7OztzQ0FJRTtBQUNoQixhQUFPLEtBQUssYUFBTCxDQUFtQixlQUFuQixFQUFQLENBRGdCOzs7O3NDQUlBLFNBQVM7Ozs7O3lDQUlOLFNBQVM7Ozs7O1NBdkIxQjtFQUE2Qjs7QUE0Qm5DLE9BQU8sT0FBUCxHQUFpQixvQkFBakI7O0FBRUEsU0FBUyxzQkFBVCxHQUFrQztBQUFFLFNBQU8sU0FBUCxDQUFGO0NBQWxDIiwiZmlsZSI6InJlYWN0RnVuY3Rpb25FbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RGdW5jdGlvbkVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdEZ1bmN0aW9uLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICAgIHN1cGVyKHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICBcbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuXG4gICAgaWYgKCFyZWFjdEZ1bmN0aW9uLmdldENoaWxkQ29udGV4dCkge1xuICAgICAgcmVhY3RGdW5jdGlvbi5nZXRDaGlsZENvbnRleHQgPSBkZWZhdWx0R2V0Q2hpbGRDb250ZXh0O1xuICAgIH1cbiAgfVxuICBcbiAgcmVuZGVyKGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdEZ1bmN0aW9uKHRoaXMuaW5zdGFuY2UucHJvcHMsIGNvbnRleHQpOyAvLy9cbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdEZ1bmN0aW9uLmdldENoaWxkQ29udGV4dCgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoY29udGV4dCkge1xuICAgIC8vL1xuICB9XG4gIFxuICBjb21wb25lbnRXaWxsVW5tb3VudChjb250ZXh0KSB7XG4gICAgLy8vXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEZ1bmN0aW9uRWxlbWVudDtcblxuZnVuY3Rpb24gZGVmYXVsdEdldENoaWxkQ29udGV4dCgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuXG4iXX0=