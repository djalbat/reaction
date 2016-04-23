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

    if (!reactFunction.componentDidMount) {
      reactFunction.componentDidMount = defaultComponentDidMount;
    }
    if (!reactFunction.componentWillUnmount) {
      reactFunction.componentWillUnmount = defaultComponentWillUnmount;
    }
    if (!reactFunction.getChildContext) {
      reactFunction.getChildContext = defaultGetChildContext;
    }

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

      this.reactFunction(this.instance.props, context);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount(context) {

      this.reactFunction(this.instance.props, context);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactFunction.getChildContext(this.instance.props);
    }
  }]);

  return ReactFunctionElement;
}(ReactElement);

module.exports = ReactFunctionElement;

function defaultComponentDidMount() {}
function defaultComponentWillUnmount() {}
function defaultGetChildContext() {
  return undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdEZ1bmN0aW9uRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUksZUFBZSxRQUFRLGdCQUFSLENBQWY7O0lBRUU7OztBQUNKLFdBREksb0JBQ0osQ0FBWSxhQUFaLEVBQTJCLFVBQTNCLEVBQXVDLFFBQXZDLEVBQWlEOzBCQUQ3QyxzQkFDNkM7O3VFQUQ3QyxpQ0FFSSxZQUFZLFdBRDZCOztBQUcvQyxRQUFJLENBQUMsY0FBYyxpQkFBZCxFQUFpQztBQUFFLG9CQUFjLGlCQUFkLEdBQWtDLHdCQUFsQyxDQUFGO0tBQXRDO0FBQ0EsUUFBSSxDQUFDLGNBQWMsb0JBQWQsRUFBb0M7QUFBRSxvQkFBYyxvQkFBZCxHQUFxQywyQkFBckMsQ0FBRjtLQUF6QztBQUNBLFFBQUksQ0FBQyxjQUFjLGVBQWQsRUFBK0I7QUFBRSxvQkFBYyxlQUFkLEdBQWdDLHNCQUFoQyxDQUFGO0tBQXBDOztBQUVBLFVBQUssYUFBTCxHQUFxQixhQUFyQixDQVArQzs7R0FBakQ7O2VBREk7OzJCQVdHLFNBQVM7O0FBR2QsYUFBTyxLQUFLLGFBQUwsQ0FBbUIsS0FBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixPQUF4QyxDQUFQLENBSGM7Ozs7c0NBTUUsU0FBUzs7QUFHekIsV0FBSyxhQUFMLENBQW1CLEtBQUssUUFBTCxDQUFjLEtBQWQsRUFBcUIsT0FBeEMsRUFIeUI7Ozs7eUNBTU4sU0FBUzs7QUFHNUIsV0FBSyxhQUFMLENBQW1CLEtBQUssUUFBTCxDQUFjLEtBQWQsRUFBcUIsT0FBeEMsRUFINEI7Ozs7c0NBTVo7QUFDaEIsYUFBTyxLQUFLLGFBQUwsQ0FBbUIsZUFBbkIsQ0FBbUMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUExQyxDQURnQjs7OztTQTdCZDtFQUE2Qjs7QUFrQ25DLE9BQU8sT0FBUCxHQUFpQixvQkFBakI7O0FBRUEsU0FBUyx3QkFBVCxHQUFvQyxFQUFwQztBQUNBLFNBQVMsMkJBQVQsR0FBdUMsRUFBdkM7QUFDQSxTQUFTLHNCQUFULEdBQWtDO0FBQUUsU0FBTyxTQUFQLENBQUY7Q0FBbEMiLCJmaWxlIjoicmVhY3RGdW5jdGlvbkVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdEZ1bmN0aW9uRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0RnVuY3Rpb24sIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgc3VwZXIocHJvcGVydGllcywgY2hpbGRyZW4pO1xuXG4gICAgaWYgKCFyZWFjdEZ1bmN0aW9uLmNvbXBvbmVudERpZE1vdW50KSB7IHJlYWN0RnVuY3Rpb24uY29tcG9uZW50RGlkTW91bnQgPSBkZWZhdWx0Q29tcG9uZW50RGlkTW91bnQ7IH1cbiAgICBpZiAoIXJlYWN0RnVuY3Rpb24uY29tcG9uZW50V2lsbFVubW91bnQpIHsgcmVhY3RGdW5jdGlvbi5jb21wb25lbnRXaWxsVW5tb3VudCA9IGRlZmF1bHRDb21wb25lbnRXaWxsVW5tb3VudDsgfVxuICAgIGlmICghcmVhY3RGdW5jdGlvbi5nZXRDaGlsZENvbnRleHQpIHsgcmVhY3RGdW5jdGlvbi5nZXRDaGlsZENvbnRleHQgPSBkZWZhdWx0R2V0Q2hpbGRDb250ZXh0OyB9XG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuICB9XG4gIFxuICByZW5kZXIoY29udGV4dCkge1xuXG5cbiAgICByZXR1cm4gdGhpcy5yZWFjdEZ1bmN0aW9uKHRoaXMuaW5zdGFuY2UucHJvcHMsIGNvbnRleHQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoY29udGV4dCkge1xuXG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24odGhpcy5pbnN0YW5jZS5wcm9wcywgY29udGV4dCk7XG4gIH1cbiAgXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KGNvbnRleHQpIHtcbiAgICBcblxuICAgIHRoaXMucmVhY3RGdW5jdGlvbih0aGlzLmluc3RhbmNlLnByb3BzLCBjb250ZXh0KTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdEZ1bmN0aW9uLmdldENoaWxkQ29udGV4dCh0aGlzLmluc3RhbmNlLnByb3BzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RnVuY3Rpb25FbGVtZW50O1xuXG5mdW5jdGlvbiBkZWZhdWx0Q29tcG9uZW50RGlkTW91bnQoKSB7fVxuZnVuY3Rpb24gZGVmYXVsdENvbXBvbmVudFdpbGxVbm1vdW50KCkge31cbmZ1bmN0aW9uIGRlZmF1bHRHZXRDaGlsZENvbnRleHQoKSB7IHJldHVybiB1bmRlZmluZWQ7IH1cbiJdfQ==