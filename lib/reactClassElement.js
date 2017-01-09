'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactClassElement = function (_ReactElement) {
  _inherits(ReactClassElement, _ReactElement);

  function ReactClassElement(reactClass, props) {
    _classCallCheck(this, ReactClassElement);

    var _this = _possibleConstructorReturn(this, (ReactClassElement.__proto__ || Object.getPrototypeOf(ReactClassElement)).call(this, props));

    _this.reactClass = reactClass;

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(ReactClassElement, [{
    key: 'render',
    value: function render() {
      return this.reactClass.render.apply(this);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return this.reactClass.getInitialState.apply(this);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactClass.getChildContext.apply(this);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactClass.componentDidMount.apply(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reactClass.componentWillUnmount.apply(this);
    }
  }]);

  return ReactClassElement;
}(ReactElement);

module.exports = ReactClassElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdENsYXNzRWxlbWVudC5qcyJdLCJuYW1lcyI6WyJSZWFjdEVsZW1lbnQiLCJyZXF1aXJlIiwiUmVhY3RDbGFzc0VsZW1lbnQiLCJyZWFjdENsYXNzIiwicHJvcHMiLCJzdGF0ZSIsImdldEluaXRpYWxTdGF0ZSIsInJlbmRlciIsImFwcGx5IiwiZ2V0Q2hpbGRDb250ZXh0IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxnQkFBUixDQUFuQjs7SUFFTUMsaUI7OztBQUNKLDZCQUFZQyxVQUFaLEVBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBLHNJQUN2QkEsS0FEdUI7O0FBRzdCLFVBQUtELFVBQUwsR0FBa0JBLFVBQWxCOztBQUVBLFVBQUtFLEtBQUwsR0FBYSxNQUFLQyxlQUFMLEVBQWI7QUFMNkI7QUFNOUI7Ozs7NkJBRVE7QUFDUCxhQUFPLEtBQUtILFVBQUwsQ0FBZ0JJLE1BQWhCLENBQXVCQyxLQUF2QixDQUE2QixJQUE3QixDQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLTCxVQUFMLENBQWdCRyxlQUFoQixDQUFnQ0UsS0FBaEMsQ0FBc0MsSUFBdEMsQ0FBUDtBQUNEOzs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0wsVUFBTCxDQUFnQk0sZUFBaEIsQ0FBZ0NELEtBQWhDLENBQXNDLElBQXRDLENBQVA7QUFDRDs7O3dDQUVtQjtBQUNsQixXQUFLTCxVQUFMLENBQWdCTyxpQkFBaEIsQ0FBa0NGLEtBQWxDLENBQXdDLElBQXhDO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0wsVUFBTCxDQUFnQlEsb0JBQWhCLENBQXFDSCxLQUFyQyxDQUEyQyxJQUEzQztBQUNEOzs7O0VBM0I2QlIsWTs7QUE4QmhDWSxPQUFPQyxPQUFQLEdBQWlCWCxpQkFBakIiLCJmaWxlIjoicmVhY3RDbGFzc0VsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdENsYXNzRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENsYXNzID0gcmVhY3RDbGFzcztcblxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0SW5pdGlhbFN0YXRlLmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0Q2hpbGRDb250ZXh0LmFwcGx5KHRoaXMpO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50RGlkTW91bnQuYXBwbHkodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50V2lsbFVubW91bnQuYXBwbHkodGhpcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzRWxlbWVudDtcbiJdfQ==