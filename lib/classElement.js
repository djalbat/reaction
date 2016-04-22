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

    _this.element = _this.render();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9jbGFzc0VsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFVBQVUsUUFBUSxXQUFSLENBQVY7O0lBRUU7OztBQUNKLFdBREksWUFDSixDQUFZLFVBQVosRUFBd0IsVUFBeEIsRUFBb0MsUUFBcEMsRUFBOEM7MEJBRDFDLGNBQzBDOzt1RUFEMUMseUJBRUksWUFBWSxXQUQwQjs7QUFHNUMsVUFBSyxVQUFMLEdBQWtCLFVBQWxCLENBSDRDOztBQUs1QyxRQUFJLGNBQWMsV0FBVyxjQUFYLEVBQWQ7UUFDQSxRQUFRLFdBQVcsZUFBWCxFQUFSOztBQU53QyxTQVE1QyxDQUFLLFFBQUwsR0FBZ0IsT0FBTyxNQUFQLENBQWMsTUFBSyxRQUFMLEVBQWU7QUFDM0MsbUJBQWEsV0FBYjtBQUNBLGFBQU8sS0FBUDtLQUZjLENBQWhCLENBUjRDOztBQWE1QyxVQUFLLE9BQUwsR0FBZSxNQUFLLE1BQUwsRUFBZixDQWI0Qzs7R0FBOUM7O2VBREk7OzZCQWlCSyxPQUFPO0FBQ2QsV0FBSyxRQUFMLEdBQWdCLE9BQU8sTUFBUCxDQUFjLEtBQUssUUFBTCxFQUFlO0FBQzNDLGVBQU8sS0FBUDtPQURjLENBQWhCLENBRGM7O0FBS2QsV0FBSyxXQUFMLEdBTGM7Ozs7NkJBUVA7QUFDUCxhQUFPLEtBQUssVUFBTCxDQUFnQixNQUFoQixDQUF1QixLQUF2QixDQUE2QixLQUFLLFFBQUwsQ0FBcEMsQ0FETzs7Ozt3Q0FJVztBQUNsQixXQUFLLFVBQUwsQ0FBZ0IsaUJBQWhCLENBQWtDLEtBQWxDLENBQXdDLEtBQUssUUFBTCxDQUF4QyxDQURrQjs7OztTQTdCaEI7RUFBcUI7O0FBa0MzQixPQUFPLE9BQVAsR0FBaUIsWUFBakIiLCJmaWxlIjoiY2xhc3NFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBDbGFzc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuXG4gICAgdmFyIGRpc3BsYXlOYW1lID0gcmVhY3RDbGFzcy5nZXREaXNwbGF5TmFtZSgpLFxuICAgICAgICBzdGF0ZSA9IHJlYWN0Q2xhc3MuZ2V0SW5pdGlhbFN0YXRlKCk7IC8vL1xuXG4gICAgdGhpcy5pbnN0YW5jZSA9IE9iamVjdC5hc3NpZ24odGhpcy5pbnN0YW5jZSwge1xuICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lLFxuICAgICAgc3RhdGU6IHN0YXRlXG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gT2JqZWN0LmFzc2lnbih0aGlzLmluc3RhbmNlLCB7XG4gICAgICBzdGF0ZTogc3RhdGVcbiAgICB9KTtcblxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLnJlbmRlci5hcHBseSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnREaWRNb3VudC5hcHBseSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENsYXNzRWxlbWVudDtcbiJdfQ==