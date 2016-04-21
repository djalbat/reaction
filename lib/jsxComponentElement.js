'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSXElement = require('./jsxElement');

var JSXComponentElement = function (_JSXElement) {
  _inherits(JSXComponentElement, _JSXElement);

  function JSXComponentElement(reactComponent, properties, children) {
    _classCallCheck(this, JSXComponentElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JSXComponentElement).call(this, properties, children));

    _this.reactComponent = reactComponent;

    _this.render();
    return _this;
  }

  _createClass(JSXComponentElement, [{
    key: 'render',
    value: function render() {
      this.jsxElement = this.reactComponent.render.apply(this.instance);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactComponent.componentDidMount.apply(this.instance);
    }
  }]);

  return JSXComponentElement;
}(JSXElement);

module.exports = JSXComponentElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hDb21wb25lbnRFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiOztJQUVFOzs7QUFDSixXQURJLG1CQUNKLENBQVksY0FBWixFQUE0QixVQUE1QixFQUF3QyxRQUF4QyxFQUFrRDswQkFEOUMscUJBQzhDOzt1RUFEOUMsZ0NBRUksWUFBWSxXQUQ4Qjs7QUFHaEQsVUFBSyxjQUFMLEdBQXNCLGNBQXRCLENBSGdEOztBQUtoRCxVQUFLLE1BQUwsR0FMZ0Q7O0dBQWxEOztlQURJOzs2QkFTSztBQUNQLFdBQUssVUFBTCxHQUFrQixLQUFLLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBMkIsS0FBM0IsQ0FBaUMsS0FBSyxRQUFMLENBQW5ELENBRE87Ozs7d0NBSVc7QUFDbEIsV0FBSyxjQUFMLENBQW9CLGlCQUFwQixDQUFzQyxLQUF0QyxDQUE0QyxLQUFLLFFBQUwsQ0FBNUMsQ0FEa0I7Ozs7U0FiaEI7RUFBNEI7O0FBa0JsQyxPQUFPLE9BQVAsR0FBaUIsbUJBQWpCIiwiZmlsZSI6ImpzeENvbXBvbmVudEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBKU1hFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hFbGVtZW50Jyk7XG5cbmNsYXNzIEpTWENvbXBvbmVudEVsZW1lbnQgZXh0ZW5kcyBKU1hFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDb21wb25lbnQsIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgc3VwZXIocHJvcGVydGllcywgY2hpbGRyZW4pO1xuXG4gICAgdGhpcy5yZWFjdENvbXBvbmVudCA9IHJlYWN0Q29tcG9uZW50O1xuICAgIFxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5qc3hFbGVtZW50ID0gdGhpcy5yZWFjdENvbXBvbmVudC5yZW5kZXIuYXBwbHkodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50LmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYQ29tcG9uZW50RWxlbWVudDtcbiJdfQ==