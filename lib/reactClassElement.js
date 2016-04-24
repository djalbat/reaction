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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactClassElement).call(this, props));

    _this.reactClass = reactClass;
    return _this;
  }

  _createClass(ReactClassElement, [{
    key: 'render',
    value: function render() {
      return this.reactClass.render.apply(this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENsYXNzRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUksZUFBZSxRQUFRLGdCQUFSLENBQWY7O0lBRUU7OztBQUNKLFdBREksaUJBQ0osQ0FBWSxVQUFaLEVBQXdCLEtBQXhCLEVBQStCOzBCQUQzQixtQkFDMkI7O3VFQUQzQiw4QkFFSSxRQUR1Qjs7QUFHN0IsVUFBSyxVQUFMLEdBQWtCLFVBQWxCLENBSDZCOztHQUEvQjs7ZUFESTs7NkJBT0s7QUFDUCxhQUFPLEtBQUssVUFBTCxDQUFnQixNQUFoQixDQUF1QixLQUF2QixDQUE2QixJQUE3QixDQUFQLENBRE87Ozs7c0NBSVM7QUFDaEIsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsZUFBaEIsQ0FBZ0MsS0FBaEMsQ0FBc0MsSUFBdEMsQ0FBUCxDQURnQjs7Ozt3Q0FJRTtBQUNsQixXQUFLLFVBQUwsQ0FBZ0IsaUJBQWhCLENBQWtDLEtBQWxDLENBQXdDLElBQXhDLEVBRGtCOzs7OzJDQUlHO0FBQ3JCLFdBQUssVUFBTCxDQUFnQixvQkFBaEIsQ0FBcUMsS0FBckMsQ0FBMkMsSUFBM0MsRUFEcUI7Ozs7U0FuQm5CO0VBQTBCOztBQXdCaEMsT0FBTyxPQUFQLEdBQWlCLGlCQUFqQiIsImZpbGUiOiJyZWFjdENsYXNzRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0Q2xhc3NFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0Q2hpbGRDb250ZXh0LmFwcGx5KHRoaXMpO1xuICB9XG4gXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnREaWRNb3VudC5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnRXaWxsVW5tb3VudC5hcHBseSh0aGlzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q2xhc3NFbGVtZW50O1xuIl19