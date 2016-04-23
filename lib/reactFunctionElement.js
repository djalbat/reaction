'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactFunctionElement = function (_ReactElement) {
  _inherits(ReactFunctionElement, _ReactElement);

  function ReactFunctionElement(reactFunction, props, children) {
    _classCallCheck(this, ReactFunctionElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactFunctionElement).call(this, props, children));

    _this.reactFunction = reactFunction;
    return _this;
  }

  _createClass(ReactFunctionElement, [{
    key: 'render',
    value: function render(context) {

      return this.reactFunction(this.instance.props, this.instance.children, context);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount(context) {
      if (this.reactFunction.componentDidMount) {
        this.reactFunction.componentDidMount(this.instance.props, this.instance.children, context);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount(context) {
      if (this.reactFunction.componentWillUnmount) {
        this.reactFunction.componentWillUnmount(this.instance.props, this.instance.children, context);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdEZ1bmN0aW9uRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUksZUFBZSxRQUFRLGdCQUFSLENBQWY7O0lBRUU7OztBQUNKLFdBREksb0JBQ0osQ0FBWSxhQUFaLEVBQTJCLEtBQTNCLEVBQWtDLFFBQWxDLEVBQTRDOzBCQUR4QyxzQkFDd0M7O3VFQUR4QyxpQ0FFSSxPQUFPLFdBRDZCOztBQUcxQyxVQUFLLGFBQUwsR0FBcUIsYUFBckIsQ0FIMEM7O0dBQTVDOztlQURJOzsyQkFPRyxTQUFTOztBQUdkLGFBQU8sS0FBSyxhQUFMLENBQW1CLEtBQUssUUFBTCxDQUFjLEtBQWQsRUFBcUIsS0FBSyxRQUFMLENBQWMsUUFBZCxFQUF3QixPQUFoRSxDQUFQLENBSGM7Ozs7c0NBTUUsU0FBUztBQUN6QixVQUFJLEtBQUssYUFBTCxDQUFtQixpQkFBbkIsRUFBc0M7QUFDeEMsYUFBSyxhQUFMLENBQW1CLGlCQUFuQixDQUFxQyxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQXFCLEtBQUssUUFBTCxDQUFjLFFBQWQsRUFBd0IsT0FBbEYsRUFEd0M7T0FBMUM7Ozs7eUNBS21CLFNBQVM7QUFDNUIsVUFBSSxLQUFLLGFBQUwsQ0FBbUIsb0JBQW5CLEVBQXlDO0FBQzNDLGFBQUssYUFBTCxDQUFtQixvQkFBbkIsQ0FBd0MsS0FBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixLQUFLLFFBQUwsQ0FBYyxRQUFkLEVBQXdCLE9BQXJGLEVBRDJDO09BQTdDOzs7O3NDQUtnQjtBQUNoQixVQUFJLEtBQUssYUFBTCxDQUFtQixlQUFuQixFQUFvQztBQUN0QyxlQUFPLEtBQUssYUFBTCxDQUFtQixlQUFuQixDQUFtQyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQTFDLENBRHNDO09BQXhDOzs7O1NBMUJFO0VBQTZCOztBQWdDbkMsT0FBTyxPQUFQLEdBQWlCLG9CQUFqQiIsImZpbGUiOiJyZWFjdEZ1bmN0aW9uRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgc3VwZXIocHJvcHMsIGNoaWxkcmVuKTtcblxuICAgIHRoaXMucmVhY3RGdW5jdGlvbiA9IHJlYWN0RnVuY3Rpb247XG4gIH1cbiAgXG4gIHJlbmRlcihjb250ZXh0KSB7XG4gICAgXG5cbiAgICByZXR1cm4gdGhpcy5yZWFjdEZ1bmN0aW9uKHRoaXMuaW5zdGFuY2UucHJvcHMsIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4sIGNvbnRleHQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoY29udGV4dCkge1xuICAgIGlmICh0aGlzLnJlYWN0RnVuY3Rpb24uY29tcG9uZW50RGlkTW91bnQpIHtcbiAgICAgIHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnREaWRNb3VudCh0aGlzLmluc3RhbmNlLnByb3BzLCB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLCBjb250ZXh0KTtcbiAgICB9XG4gIH1cbiAgXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KGNvbnRleHQpIHtcbiAgICBpZiAodGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG4gICAgICB0aGlzLnJlYWN0RnVuY3Rpb24uY29tcG9uZW50V2lsbFVubW91bnQodGhpcy5pbnN0YW5jZS5wcm9wcywgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbiwgY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIGlmICh0aGlzLnJlYWN0RnVuY3Rpb24uZ2V0Q2hpbGRDb250ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFjdEZ1bmN0aW9uLmdldENoaWxkQ29udGV4dCh0aGlzLmluc3RhbmNlLnByb3BzKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEZ1bmN0aW9uRWxlbWVudDtcbiJdfQ==