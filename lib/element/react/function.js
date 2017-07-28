'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('../react');

var ReactFunctionElement = function (_ReactElement) {
  _inherits(ReactFunctionElement, _ReactElement);

  function ReactFunctionElement(reactFunction, props) {
    _classCallCheck(this, ReactFunctionElement);

    var _this = _possibleConstructorReturn(this, (ReactFunctionElement.__proto__ || Object.getPrototypeOf(ReactFunctionElement)).call(this, props));

    _this.reactFunction = reactFunction;

    var initialState = _this.getInitialState();

    _this.setInitialState(initialState);
    return _this;
  }

  _createClass(ReactFunctionElement, [{
    key: 'render',
    value: function render() {
      return this.reactFunction(this.props, this.context);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return undefined;
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return undefined;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.reactFunction.componentDidMount) {
        this.reactFunction.componentDidMount(this.props, this.context);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.reactFunction.componentWillUnmount) {
        this.reactFunction.componentWillUnmount(this.props, this.context);
      }
    }
  }]);

  return ReactFunctionElement;
}(ReactElement);

module.exports = ReactFunctionElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L3JlYWN0L2Z1bmN0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0RWxlbWVudCIsInJlcXVpcmUiLCJSZWFjdEZ1bmN0aW9uRWxlbWVudCIsInJlYWN0RnVuY3Rpb24iLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImdldEluaXRpYWxTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsImNvbnRleHQiLCJ1bmRlZmluZWQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLFVBQVIsQ0FBckI7O0lBRU1DLG9COzs7QUFDSixnQ0FBWUMsYUFBWixFQUEyQkMsS0FBM0IsRUFBa0M7QUFBQTs7QUFBQSw0SUFDMUJBLEtBRDBCOztBQUdoQyxVQUFLRCxhQUFMLEdBQXFCQSxhQUFyQjs7QUFFQSxRQUFNRSxlQUFlLE1BQUtDLGVBQUwsRUFBckI7O0FBRUEsVUFBS0MsZUFBTCxDQUFxQkYsWUFBckI7QUFQZ0M7QUFRakM7Ozs7NkJBRVE7QUFDUCxhQUFPLEtBQUtGLGFBQUwsQ0FBbUIsS0FBS0MsS0FBeEIsRUFBK0IsS0FBS0ksT0FBcEMsQ0FBUDtBQUNEOzs7c0NBRWlCO0FBQ2hCLGFBQU9DLFNBQVA7QUFDRDs7O29DQUVlRCxPLEVBQVM7QUFDdkIsYUFBT0MsU0FBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQUksS0FBS04sYUFBTCxDQUFtQk8saUJBQXZCLEVBQTBDO0FBQ3hDLGFBQUtQLGFBQUwsQ0FBbUJPLGlCQUFuQixDQUFxQyxLQUFLTixLQUExQyxFQUFpRCxLQUFLSSxPQUF0RDtBQUNEO0FBQ0Y7OzsyQ0FFc0I7QUFDckIsVUFBSSxLQUFLTCxhQUFMLENBQW1CUSxvQkFBdkIsRUFBNkM7QUFDM0MsYUFBS1IsYUFBTCxDQUFtQlEsb0JBQW5CLENBQXdDLEtBQUtQLEtBQTdDLEVBQW9ELEtBQUtJLE9BQXpEO0FBQ0Q7QUFDRjs7OztFQWpDZ0NSLFk7O0FBb0NuQ1ksT0FBT0MsT0FBUCxHQUFpQlgsb0JBQWpCIiwiZmlsZSI6ImZ1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuLi9yZWFjdCcpO1xuXG5jbGFzcyBSZWFjdEZ1bmN0aW9uRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0RnVuY3Rpb24sIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdEZ1bmN0aW9uID0gcmVhY3RGdW5jdGlvbjtcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG4gXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdEZ1bmN0aW9uKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnJlYWN0RnVuY3Rpb24uY29tcG9uZW50RGlkTW91bnQpIHtcbiAgICAgIHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnREaWRNb3VudCh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cbiAgfVxuIFxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG4gICAgICB0aGlzLnJlYWN0RnVuY3Rpb24uY29tcG9uZW50V2lsbFVubW91bnQodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEZ1bmN0aW9uRWxlbWVudDtcbiJdfQ==