'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var ComponentElement = function (_Element) {
  _inherits(ComponentElement, _Element);

  function ComponentElement(reactComponent, properties, children) {
    _classCallCheck(this, ComponentElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ComponentElement).call(this, properties, children));

    _this.reactComponent = reactComponent;

    _this.element = _this.render();
    return _this;
  }

  _createClass(ComponentElement, [{
    key: 'render',
    value: function render() {
      return this.reactComponent.render.apply(this.instance);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactComponent.componentDidMount.apply(this.instance);
    }
  }]);

  return ComponentElement;
}(Element);

module.exports = ComponentElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9jb21wb25lbnRFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSSxVQUFVLFFBQVEsV0FBUixDQUFWOztJQUVFOzs7QUFDSixXQURJLGdCQUNKLENBQVksY0FBWixFQUE0QixVQUE1QixFQUF3QyxRQUF4QyxFQUFrRDswQkFEOUMsa0JBQzhDOzt1RUFEOUMsNkJBRUksWUFBWSxXQUQ4Qjs7QUFHaEQsVUFBSyxjQUFMLEdBQXNCLGNBQXRCLENBSGdEOztBQUtoRCxVQUFLLE9BQUwsR0FBZSxNQUFLLE1BQUwsRUFBZixDQUxnRDs7R0FBbEQ7O2VBREk7OzZCQVNLO0FBQ1AsYUFBTyxLQUFLLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBMkIsS0FBM0IsQ0FBaUMsS0FBSyxRQUFMLENBQXhDLENBRE87Ozs7d0NBSVc7QUFDbEIsV0FBSyxjQUFMLENBQW9CLGlCQUFwQixDQUFzQyxLQUF0QyxDQUE0QyxLQUFLLFFBQUwsQ0FBNUMsQ0FEa0I7Ozs7U0FiaEI7RUFBeUI7O0FBa0IvQixPQUFPLE9BQVAsR0FBaUIsZ0JBQWpCIiwiZmlsZSI6ImNvbXBvbmVudEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIENvbXBvbmVudEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDb21wb25lbnQsIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgc3VwZXIocHJvcGVydGllcywgY2hpbGRyZW4pO1xuXG4gICAgdGhpcy5yZWFjdENvbXBvbmVudCA9IHJlYWN0Q29tcG9uZW50O1xuICAgIFxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQucmVuZGVyLmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnREaWRNb3VudC5hcHBseSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudEVsZW1lbnQ7XG4iXX0=