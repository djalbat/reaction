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
      return this.reactClass.getChildContext.apply(this.instance);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENsYXNzRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUksZUFBZSxRQUFRLGdCQUFSLENBQWY7O0lBRUU7OztBQUNKLFdBREksaUJBQ0osQ0FBWSxVQUFaLEVBQXdCLFVBQXhCLEVBQW9DLFFBQXBDLEVBQThDOzBCQUQxQyxtQkFDMEM7O3VFQUQxQyw4QkFFSSxZQUFZLFdBRDBCOztBQUc1QyxVQUFLLFFBQUwsQ0FBYyxXQUFkLEdBQTRCLFdBQVcsY0FBWCxFQUE1QixDQUg0Qzs7QUFLNUMsVUFBSyxRQUFMLENBQWMsS0FBZCxHQUFzQixXQUFXLGVBQVgsRUFBdEI7O0FBTDRDLFNBTzVDLENBQUssVUFBTCxHQUFrQixVQUFsQixDQVA0Qzs7R0FBOUM7O2VBREk7OzJCQVdHLFNBQVM7QUFDZCxXQUFLLFFBQUwsQ0FBYyxPQUFkLEdBQXdCLE9BQXhCLENBRGM7O0FBR2QsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBdUIsS0FBdkIsQ0FBNkIsS0FBSyxRQUFMLENBQXBDLENBSGM7Ozs7c0NBTUUsU0FBUztBQUN6QixXQUFLLFFBQUwsQ0FBYyxPQUFkLEdBQXdCLE9BQXhCLENBRHlCOztBQUd6QixXQUFLLFVBQUwsQ0FBZ0IsaUJBQWhCLENBQWtDLEtBQWxDLENBQXdDLEtBQUssUUFBTCxDQUF4QyxDQUh5Qjs7Ozt5Q0FNTixTQUFTO0FBQzVCLFdBQUssUUFBTCxDQUFjLE9BQWQsR0FBd0IsT0FBeEIsQ0FENEI7O0FBRzVCLFdBQUssVUFBTCxDQUFnQixvQkFBaEIsQ0FBcUMsS0FBckMsQ0FBMkMsS0FBSyxRQUFMLENBQTNDLENBSDRCOzs7O3NDQU1aO0FBQ2hCLGFBQU8sS0FBSyxVQUFMLENBQWdCLGVBQWhCLENBQWdDLEtBQWhDLENBQXNDLEtBQUssUUFBTCxDQUE3QyxDQURnQjs7Ozs2QkFJVCxPQUFPO0FBQ2QsV0FBSyxRQUFMLENBQWMsS0FBZCxHQUFzQixLQUF0QixDQURjOztBQUdkLFdBQUssV0FBTCxHQUhjOzs7O1NBakNaO0VBQTBCOztBQXdDaEMsT0FBTyxPQUFQLEdBQWlCLGlCQUFqQiIsImZpbGUiOiJyZWFjdENsYXNzRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0Q2xhc3NFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG5cbiAgICB0aGlzLmluc3RhbmNlLmRpc3BsYXlOYW1lID0gcmVhY3RDbGFzcy5nZXREaXNwbGF5TmFtZSgpO1xuICAgIFxuICAgIHRoaXMuaW5zdGFuY2Uuc3RhdGUgPSByZWFjdENsYXNzLmdldEluaXRpYWxTdGF0ZSgpOyAvLy9cblxuICAgIHRoaXMucmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3M7XG4gIH1cblxuICByZW5kZXIoY29udGV4dCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5yZW5kZXIuYXBwbHkodGhpcy5pbnN0YW5jZSk7XG4gIH1cbiBcbiAgY29tcG9uZW50RGlkTW91bnQoY29udGV4dCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50RGlkTW91bnQuYXBwbHkodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5pbnN0YW5jZS5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnRXaWxsVW5tb3VudC5hcHBseSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldENoaWxkQ29udGV4dC5hcHBseSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5pbnN0YW5jZS5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzc0VsZW1lbnQ7XG4iXX0=