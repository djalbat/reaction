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
    return _this;
  }

  _createClass(ReactFunctionElement, [{
    key: 'render',
    value: function render(context) {

      return this.reactFunction(this.instance.props, context);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount(context) {
      if (this.reactFunction.componentDidMount) {
        this.reactFunction.componentDidMount(this.instance.props, context);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount(context) {
      if (this.reactFunction.componentWillUnmount) {
        this.reactFunction.componentWillUnmount(this.instance.props, context);
      }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      if (this.reactFunction.getChildContext) {
        return this.reactFunction.getChildContext(this.instance.props);
      }
    }
  }]);

  return ReactFunctionElement;
}(ReactElement);

module.exports = ReactFunctionElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdEZ1bmN0aW9uRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUksZUFBZSxRQUFRLGdCQUFSLENBQWY7O0lBRUU7OztBQUNKLFdBREksb0JBQ0osQ0FBWSxhQUFaLEVBQTJCLFVBQTNCLEVBQXVDLFFBQXZDLEVBQWlEOzBCQUQ3QyxzQkFDNkM7O3VFQUQ3QyxpQ0FFSSxZQUFZLFdBRDZCOztBQUcvQyxVQUFLLGFBQUwsR0FBcUIsYUFBckIsQ0FIK0M7O0dBQWpEOztlQURJOzsyQkFPRyxTQUFTOztBQUdkLGFBQU8sS0FBSyxhQUFMLENBQW1CLEtBQUssUUFBTCxDQUFjLEtBQWQsRUFBcUIsT0FBeEMsQ0FBUCxDQUhjOzs7O3NDQU1FLFNBQVM7QUFDekIsVUFBSSxLQUFLLGFBQUwsQ0FBbUIsaUJBQW5CLEVBQXNDO0FBQ3hDLGFBQUssYUFBTCxDQUFtQixpQkFBbkIsQ0FBcUMsS0FBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixPQUExRCxFQUR3QztPQUExQzs7Ozt5Q0FLbUIsU0FBUztBQUM1QixVQUFJLEtBQUssYUFBTCxDQUFtQixvQkFBbkIsRUFBeUM7QUFDM0MsYUFBSyxhQUFMLENBQW1CLG9CQUFuQixDQUF3QyxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQXFCLE9BQTdELEVBRDJDO09BQTdDOzs7O3NDQUtnQjtBQUNoQixVQUFJLEtBQUssYUFBTCxDQUFtQixlQUFuQixFQUFvQztBQUN0QyxlQUFPLEtBQUssYUFBTCxDQUFtQixlQUFuQixDQUFtQyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQTFDLENBRHNDO09BQXhDOzs7O1NBMUJFO0VBQTZCOztBQWdDbkMsT0FBTyxPQUFQLEdBQWlCLG9CQUFqQiIsImZpbGUiOiJyZWFjdEZ1bmN0aW9uRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuICB9XG4gIFxuICByZW5kZXIoY29udGV4dCkge1xuICAgIFxuXG4gICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbih0aGlzLmluc3RhbmNlLnByb3BzLCBjb250ZXh0KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KGNvbnRleHQpIHtcbiAgICBpZiAodGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudERpZE1vdW50KSB7XG4gICAgICB0aGlzLnJlYWN0RnVuY3Rpb24uY29tcG9uZW50RGlkTW91bnQodGhpcy5pbnN0YW5jZS5wcm9wcywgY29udGV4dCk7XG4gICAgfVxuICB9XG4gIFxuICBjb21wb25lbnRXaWxsVW5tb3VudChjb250ZXh0KSB7XG4gICAgaWYgKHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnRXaWxsVW5tb3VudCkge1xuICAgICAgdGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudFdpbGxVbm1vdW50KHRoaXMuaW5zdGFuY2UucHJvcHMsIGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICBpZiAodGhpcy5yZWFjdEZ1bmN0aW9uLmdldENoaWxkQ29udGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbi5nZXRDaGlsZENvbnRleHQodGhpcy5pbnN0YW5jZS5wcm9wcyk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RGdW5jdGlvbkVsZW1lbnQ7XG4iXX0=