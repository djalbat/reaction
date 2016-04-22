'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var ClassElement = function (_Element) {
  _inherits(ClassElement, _Element);

  function ClassElement(reactClass, properties, children) {
    _classCallCheck(this, ClassElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClassElement).call(this, properties, children));

    _this.reactClass = reactClass;

    var displayName = reactClass.getDisplayName(),
        state = reactClass.getInitialState(); ///

    _this.instance = Object.assign(_this.instance, {
      displayName: displayName,
      state: state
    });

    _this.render();
    return _this;
  }

  _createClass(ClassElement, [{
    key: 'setState',
    value: function setState(state) {
      this.instance = Object.assign(this.instance, {
        state: state
      });

      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      this.element = this.reactClass.render.apply(this.instance);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactClass.componentDidMount.apply(this.instance);
    }
  }]);

  return ClassElement;
}(Element);

module.exports = ClassElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9jbGFzc0VsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFVBQVUsUUFBUSxXQUFSLENBQVY7O0lBRUU7OztBQUNKLFdBREksWUFDSixDQUFZLFVBQVosRUFBd0IsVUFBeEIsRUFBb0MsUUFBcEMsRUFBOEM7MEJBRDFDLGNBQzBDOzt1RUFEMUMseUJBRUksWUFBWSxXQUQwQjs7QUFHNUMsVUFBSyxVQUFMLEdBQWtCLFVBQWxCLENBSDRDOztBQUs1QyxRQUFJLGNBQWMsV0FBVyxjQUFYLEVBQWQ7UUFDQSxRQUFRLFdBQVcsZUFBWCxFQUFSOztBQU53QyxTQVE1QyxDQUFLLFFBQUwsR0FBZ0IsT0FBTyxNQUFQLENBQWMsTUFBSyxRQUFMLEVBQWU7QUFDM0MsbUJBQWEsV0FBYjtBQUNBLGFBQU8sS0FBUDtLQUZjLENBQWhCLENBUjRDOztBQWE1QyxVQUFLLE1BQUwsR0FiNEM7O0dBQTlDOztlQURJOzs2QkFpQkssT0FBTztBQUNkLFdBQUssUUFBTCxHQUFnQixPQUFPLE1BQVAsQ0FBYyxLQUFLLFFBQUwsRUFBZTtBQUMzQyxlQUFPLEtBQVA7T0FEYyxDQUFoQixDQURjOztBQUtkLFdBQUssV0FBTCxHQUxjOzs7OzZCQVFQO0FBQ1AsV0FBSyxPQUFMLEdBQWUsS0FBSyxVQUFMLENBQWdCLE1BQWhCLENBQXVCLEtBQXZCLENBQTZCLEtBQUssUUFBTCxDQUE1QyxDQURPOzs7O3dDQUlXO0FBQ2xCLFdBQUssVUFBTCxDQUFnQixpQkFBaEIsQ0FBa0MsS0FBbEMsQ0FBd0MsS0FBSyxRQUFMLENBQXhDLENBRGtCOzs7O1NBN0JoQjtFQUFxQjs7QUFrQzNCLE9BQU8sT0FBUCxHQUFpQixZQUFqQiIsImZpbGUiOiJjbGFzc0VsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIENsYXNzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENsYXNzLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICAgIHN1cGVyKHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcblxuICAgIHRoaXMucmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3M7XG5cbiAgICB2YXIgZGlzcGxheU5hbWUgPSByZWFjdENsYXNzLmdldERpc3BsYXlOYW1lKCksXG4gICAgICAgIHN0YXRlID0gcmVhY3RDbGFzcy5nZXRJbml0aWFsU3RhdGUoKTsgLy8vXG5cbiAgICB0aGlzLmluc3RhbmNlID0gT2JqZWN0LmFzc2lnbih0aGlzLmluc3RhbmNlLCB7XG4gICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXG4gICAgICBzdGF0ZTogc3RhdGVcbiAgICB9KTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBPYmplY3QuYXNzaWduKHRoaXMuaW5zdGFuY2UsIHtcbiAgICAgIHN0YXRlOiBzdGF0ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucmVhY3RDbGFzcy5yZW5kZXIuYXBwbHkodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50RGlkTW91bnQuYXBwbHkodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDbGFzc0VsZW1lbnQ7XG4iXX0=