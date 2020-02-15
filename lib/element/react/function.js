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

    return _this;
  }

  _createClass(ReactFunctionElement, [{
    key: 'render',
    value: function render(update) {
      return this.reactFunction(this.props, this.context, this);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      ///
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return context;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount(domElement) {
      ///
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      ///
    }
  }]);

  return ReactFunctionElement;
}(ReactElement);

module.exports = ReactFunctionElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L3JlYWN0L2Z1bmN0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0RWxlbWVudCIsInJlcXVpcmUiLCJSZWFjdEZ1bmN0aW9uRWxlbWVudCIsInJlYWN0RnVuY3Rpb24iLCJwcm9wcyIsInVwZGF0ZSIsImNvbnRleHQiLCJkb21FbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLFVBQVIsQ0FBckI7O0lBRU1DLG9COzs7QUFDSixnQ0FBWUMsYUFBWixFQUEyQkMsS0FBM0IsRUFBa0M7QUFBQTs7QUFBQSw0SUFDMUJBLEtBRDBCOztBQUdoQyxVQUFLRCxhQUFMLEdBQXFCQSxhQUFyQjs7QUFIZ0M7QUFRakM7Ozs7MkJBRU1FLE0sRUFBUTtBQUNiLGFBQU8sS0FBS0YsYUFBTCxDQUFtQixLQUFLQyxLQUF4QixFQUErQixLQUFLRSxPQUFwQyxFQUE2QyxJQUE3QyxDQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEI7QUFDRDs7O29DQUVlQSxPLEVBQVM7QUFDdkIsYUFBT0EsT0FBUDtBQUNEOzs7c0NBRWlCQyxVLEVBQVk7QUFDNUI7QUFDRDs7OzJDQUVzQjtBQUNyQjtBQUNEOzs7O0VBN0JnQ1AsWTs7QUFnQ25DUSxPQUFPQyxPQUFQLEdBQWlCUCxvQkFBakIiLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4uL3JlYWN0Jyk7XG5cbmNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuXG5cblxuXG4gIH1cbiBcbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24odGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudChkb21FbGVtZW50KSB7XG4gICAgLy8vXG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEZ1bmN0aW9uRWxlbWVudDtcbiJdfQ==