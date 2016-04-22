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

    _this.instance.displayName = reactClass.getDisplayName();
    _this.instance.state = reactClass.getInitialState(); ///

    _this.reactClass = reactClass;

    _this.element = _this.render();
    return _this;
  }

  _createClass(ClassElement, [{
    key: 'setState',
    value: function setState(state) {
      this.instance.state = state;

      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      return this.reactClass.render.apply(this.instance);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9jbGFzc0VsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFVBQVUsUUFBUSxXQUFSLENBQVY7O0lBRUU7OztBQUNKLFdBREksWUFDSixDQUFZLFVBQVosRUFBd0IsVUFBeEIsRUFBb0MsUUFBcEMsRUFBOEM7MEJBRDFDLGNBQzBDOzt1RUFEMUMseUJBRUksWUFBWSxXQUQwQjs7QUFHNUMsVUFBSyxRQUFMLENBQWMsV0FBZCxHQUE0QixXQUFXLGNBQVgsRUFBNUIsQ0FINEM7QUFJNUMsVUFBSyxRQUFMLENBQWMsS0FBZCxHQUFzQixXQUFXLGVBQVgsRUFBdEI7O0FBSjRDLFNBTTVDLENBQUssVUFBTCxHQUFrQixVQUFsQixDQU40Qzs7QUFRNUMsVUFBSyxPQUFMLEdBQWUsTUFBSyxNQUFMLEVBQWYsQ0FSNEM7O0dBQTlDOztlQURJOzs2QkFZSyxPQUFPO0FBQ2QsV0FBSyxRQUFMLENBQWMsS0FBZCxHQUFzQixLQUF0QixDQURjOztBQUdkLFdBQUssV0FBTCxHQUhjOzs7OzZCQU1QO0FBQ1AsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBdUIsS0FBdkIsQ0FBNkIsS0FBSyxRQUFMLENBQXBDLENBRE87Ozs7d0NBSVc7QUFDbEIsV0FBSyxVQUFMLENBQWdCLGlCQUFoQixDQUFrQyxLQUFsQyxDQUF3QyxLQUFLLFFBQUwsQ0FBeEMsQ0FEa0I7Ozs7U0F0QmhCO0VBQXFCOztBQTJCM0IsT0FBTyxPQUFQLEdBQWlCLFlBQWpCIiwiZmlsZSI6ImNsYXNzRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgQ2xhc3NFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgc3VwZXIocHJvcGVydGllcywgY2hpbGRyZW4pO1xuXG4gICAgdGhpcy5pbnN0YW5jZS5kaXNwbGF5TmFtZSA9IHJlYWN0Q2xhc3MuZ2V0RGlzcGxheU5hbWUoKTtcbiAgICB0aGlzLmluc3RhbmNlLnN0YXRlID0gcmVhY3RDbGFzcy5nZXRJbml0aWFsU3RhdGUoKTsgLy8vXG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5pbnN0YW5jZS5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudERpZE1vdW50LmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xhc3NFbGVtZW50O1xuIl19