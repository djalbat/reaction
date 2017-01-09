'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactFunctionElement = function (_ReactElement) {
  _inherits(ReactFunctionElement, _ReactElement);

  function ReactFunctionElement(reactFunction, props) {
    _classCallCheck(this, ReactFunctionElement);

    var _this = _possibleConstructorReturn(this, (ReactFunctionElement.__proto__ || Object.getPrototypeOf(ReactFunctionElement)).call(this, props));

    _this.reactFunction = reactFunction;

    _this.state = _this.getInitialState();
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
      if (this.reactFunction.getInitialState) {
        return this.reactFunction.getInitialState(this.props, this.context);
      }

      return {};
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      if (this.reactFunction.getChildContext) {
        return this.reactFunction.getChildContext(this.props, this.context);
      }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdEZ1bmN0aW9uRWxlbWVudC5qcyJdLCJuYW1lcyI6WyJSZWFjdEVsZW1lbnQiLCJyZXF1aXJlIiwiUmVhY3RGdW5jdGlvbkVsZW1lbnQiLCJyZWFjdEZ1bmN0aW9uIiwicHJvcHMiLCJzdGF0ZSIsImdldEluaXRpYWxTdGF0ZSIsImNvbnRleHQiLCJnZXRDaGlsZENvbnRleHQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGdCQUFSLENBQXJCOztJQUVNQyxvQjs7O0FBQ0osZ0NBQVlDLGFBQVosRUFBMkJDLEtBQTNCLEVBQWtDO0FBQUE7O0FBQUEsNElBQzFCQSxLQUQwQjs7QUFHaEMsVUFBS0QsYUFBTCxHQUFxQkEsYUFBckI7O0FBRUEsVUFBS0UsS0FBTCxHQUFhLE1BQUtDLGVBQUwsRUFBYjtBQUxnQztBQU1qQzs7Ozs2QkFFUTtBQUNQLGFBQU8sS0FBS0gsYUFBTCxDQUFtQixLQUFLQyxLQUF4QixFQUErQixLQUFLRyxPQUFwQyxDQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBSSxLQUFLSixhQUFMLENBQW1CRyxlQUF2QixFQUF3QztBQUN0QyxlQUFPLEtBQUtILGFBQUwsQ0FBbUJHLGVBQW5CLENBQW1DLEtBQUtGLEtBQXhDLEVBQStDLEtBQUtHLE9BQXBELENBQVA7QUFDRDs7QUFFRCxhQUFPLEVBQVA7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFJLEtBQUtKLGFBQUwsQ0FBbUJLLGVBQXZCLEVBQXdDO0FBQ3RDLGVBQU8sS0FBS0wsYUFBTCxDQUFtQkssZUFBbkIsQ0FBbUMsS0FBS0osS0FBeEMsRUFBK0MsS0FBS0csT0FBcEQsQ0FBUDtBQUNEO0FBQ0Y7Ozt3Q0FFbUI7QUFDbEIsVUFBSSxLQUFLSixhQUFMLENBQW1CTSxpQkFBdkIsRUFBMEM7QUFDeEMsYUFBS04sYUFBTCxDQUFtQk0saUJBQW5CLENBQXFDLEtBQUtMLEtBQTFDLEVBQWlELEtBQUtHLE9BQXREO0FBQ0Q7QUFDRjs7OzJDQUVzQjtBQUNyQixVQUFJLEtBQUtKLGFBQUwsQ0FBbUJPLG9CQUF2QixFQUE2QztBQUMzQyxhQUFLUCxhQUFMLENBQW1CTyxvQkFBbkIsQ0FBd0MsS0FBS04sS0FBN0MsRUFBb0QsS0FBS0csT0FBekQ7QUFDRDtBQUNGOzs7O0VBckNnQ1AsWTs7QUF3Q25DVyxPQUFPQyxPQUFQLEdBQWlCVixvQkFBakIiLCJmaWxlIjoicmVhY3RGdW5jdGlvbkVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cbiBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24odGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5yZWFjdEZ1bmN0aW9uLmdldEluaXRpYWxTdGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbi5nZXRJbml0aWFsU3RhdGUodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgaWYgKHRoaXMucmVhY3RGdW5jdGlvbi5nZXRDaGlsZENvbnRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24uZ2V0Q2hpbGRDb250ZXh0KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnREaWRNb3VudCkge1xuICAgICAgdGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudERpZE1vdW50KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnJlYWN0RnVuY3Rpb24uY29tcG9uZW50V2lsbFVubW91bnQpIHtcbiAgICAgIHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnRXaWxsVW5tb3VudCh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RnVuY3Rpb25FbGVtZW50O1xuIl19