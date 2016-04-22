'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactClassElement = function (_ReactElement) {
  _inherits(ReactClassElement, _ReactElement);

  function ReactClassElement(reactClass, properties, children) {
    _classCallCheck(this, ReactClassElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactClassElement).call(this, properties, children));

    _this.instance.displayName = reactClass.getDisplayName();

    _this.instance.state = reactClass.getInitialState(); ///

    _this.reactClass = reactClass;
    return _this;
  }

  _createClass(ReactClassElement, [{
    key: 'render',
    value: function render(context) {
      this.instance.context = context;

      return this.reactClass.render.apply(this.instance);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount(context) {
      this.instance.context = context;

      this.reactClass.componentDidMount.apply(this.instance);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount(context) {
      this.instance.context = context;

      this.reactClass.componentWillUnmount.apply(this.instance);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactClass.getChildContext();
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.instance.state = state;

      this.forceUpdate();
    }
  }]);

  return ReactClassElement;
}(ReactElement);

module.exports = ReactClassElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENsYXNzRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUksZUFBZSxRQUFRLGdCQUFSLENBQWY7O0lBRUU7OztBQUNKLFdBREksaUJBQ0osQ0FBWSxVQUFaLEVBQXdCLFVBQXhCLEVBQW9DLFFBQXBDLEVBQThDOzBCQUQxQyxtQkFDMEM7O3VFQUQxQyw4QkFFSSxZQUFZLFdBRDBCOztBQUc1QyxVQUFLLFFBQUwsQ0FBYyxXQUFkLEdBQTRCLFdBQVcsY0FBWCxFQUE1QixDQUg0Qzs7QUFLNUMsVUFBSyxRQUFMLENBQWMsS0FBZCxHQUFzQixXQUFXLGVBQVgsRUFBdEI7O0FBTDRDLFNBTzVDLENBQUssVUFBTCxHQUFrQixVQUFsQixDQVA0Qzs7R0FBOUM7O2VBREk7OzJCQVdHLFNBQVM7QUFDZCxXQUFLLFFBQUwsQ0FBYyxPQUFkLEdBQXdCLE9BQXhCLENBRGM7O0FBR2QsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBdUIsS0FBdkIsQ0FBNkIsS0FBSyxRQUFMLENBQXBDLENBSGM7Ozs7c0NBTUUsU0FBUztBQUN6QixXQUFLLFFBQUwsQ0FBYyxPQUFkLEdBQXdCLE9BQXhCLENBRHlCOztBQUd6QixXQUFLLFVBQUwsQ0FBZ0IsaUJBQWhCLENBQWtDLEtBQWxDLENBQXdDLEtBQUssUUFBTCxDQUF4QyxDQUh5Qjs7Ozt5Q0FNTixTQUFTO0FBQzVCLFdBQUssUUFBTCxDQUFjLE9BQWQsR0FBd0IsT0FBeEIsQ0FENEI7O0FBRzVCLFdBQUssVUFBTCxDQUFnQixvQkFBaEIsQ0FBcUMsS0FBckMsQ0FBMkMsS0FBSyxRQUFMLENBQTNDLENBSDRCOzs7O3NDQU1aO0FBQ2hCLGFBQU8sS0FBSyxVQUFMLENBQWdCLGVBQWhCLEVBQVAsQ0FEZ0I7Ozs7NkJBSVQsT0FBTztBQUNkLFdBQUssUUFBTCxDQUFjLEtBQWQsR0FBc0IsS0FBdEIsQ0FEYzs7QUFHZCxXQUFLLFdBQUwsR0FIYzs7OztTQWpDWjtFQUEwQjs7QUF3Q2hDLE9BQU8sT0FBUCxHQUFpQixpQkFBakIiLCJmaWxlIjoicmVhY3RDbGFzc0VsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdENsYXNzRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgc3VwZXIocHJvcGVydGllcywgY2hpbGRyZW4pO1xuXG4gICAgdGhpcy5pbnN0YW5jZS5kaXNwbGF5TmFtZSA9IHJlYWN0Q2xhc3MuZ2V0RGlzcGxheU5hbWUoKTtcbiAgICBcbiAgICB0aGlzLmluc3RhbmNlLnN0YXRlID0gcmVhY3RDbGFzcy5nZXRJbml0aWFsU3RhdGUoKTsgLy8vXG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuICB9XG5cbiAgcmVuZGVyKGNvbnRleHQpIHtcbiAgICB0aGlzLmluc3RhbmNlLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIFxuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG4gXG4gIGNvbXBvbmVudERpZE1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmluc3RhbmNlLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudERpZE1vdW50LmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoY29udGV4dCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50V2lsbFVubW91bnQuYXBwbHkodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5nZXRDaGlsZENvbnRleHQoKTtcbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5pbnN0YW5jZS5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzc0VsZW1lbnQ7XG4iXX0=