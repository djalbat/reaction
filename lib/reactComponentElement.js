'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactComponentElement = function (_ReactElement) {
  _inherits(ReactComponentElement, _ReactElement);

  function ReactComponentElement(reactComponent, properties, children) {
    _classCallCheck(this, ReactComponentElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactComponentElement).call(this, properties, children));

    _this.reactComponent = reactComponent;
    return _this;
  }

  _createClass(ReactComponentElement, [{
    key: 'render',
    value: function render(context) {
      this.instance.context = context;

      return this.reactComponent.render.apply(this.instance);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount(context) {
      this.instance.context = context;

      this.reactComponent.componentDidMount.apply(this.instance);
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount(context) {
      this.instance.context = context;

      this.reactComponent.componentWillUnMount.apply(this.instance);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactComponent.getChildContext.apply(this.instance);
    }
  }]);

  return ReactComponentElement;
}(ReactElement);

module.exports = ReactComponentElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENvbXBvbmVudEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLGVBQWUsUUFBUSxnQkFBUixDQUFmOztJQUVFOzs7QUFDSixXQURJLHFCQUNKLENBQVksY0FBWixFQUE0QixVQUE1QixFQUF3QyxRQUF4QyxFQUFrRDswQkFEOUMsdUJBQzhDOzt1RUFEOUMsa0NBRUksWUFBWSxXQUQ4Qjs7QUFPaEQsVUFBSyxjQUFMLEdBQXNCLGNBQXRCLENBUGdEOztHQUFsRDs7ZUFESTs7MkJBV0csU0FBUztBQUNkLFdBQUssUUFBTCxDQUFjLE9BQWQsR0FBd0IsT0FBeEIsQ0FEYzs7QUFHZCxhQUFPLEtBQUssY0FBTCxDQUFvQixNQUFwQixDQUEyQixLQUEzQixDQUFpQyxLQUFLLFFBQUwsQ0FBeEMsQ0FIYzs7OztzQ0FNRSxTQUFTO0FBQ3pCLFdBQUssUUFBTCxDQUFjLE9BQWQsR0FBd0IsT0FBeEIsQ0FEeUI7O0FBR3pCLFdBQUssY0FBTCxDQUFvQixpQkFBcEIsQ0FBc0MsS0FBdEMsQ0FBNEMsS0FBSyxRQUFMLENBQTVDLENBSHlCOzs7O3lDQU1OLFNBQVM7QUFDNUIsV0FBSyxRQUFMLENBQWMsT0FBZCxHQUF3QixPQUF4QixDQUQ0Qjs7QUFHNUIsV0FBSyxjQUFMLENBQW9CLG9CQUFwQixDQUF5QyxLQUF6QyxDQUErQyxLQUFLLFFBQUwsQ0FBL0MsQ0FINEI7Ozs7c0NBTVo7QUFDaEIsYUFBTyxLQUFLLGNBQUwsQ0FBb0IsZUFBcEIsQ0FBb0MsS0FBcEMsQ0FBMEMsS0FBSyxRQUFMLENBQWpELENBRGdCOzs7O1NBN0JkO0VBQThCOztBQWtDcEMsT0FBTyxPQUFQLEdBQWlCLHFCQUFqQiIsImZpbGUiOiJyZWFjdENvbXBvbmVudEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdENvbXBvbmVudEVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENvbXBvbmVudCwgcHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgXG4gICAgXG4gICAgXG4gICAgXG5cbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50ID0gcmVhY3RDb21wb25lbnQ7XG4gIH1cblxuICByZW5kZXIoY29udGV4dCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQucmVuZGVyLmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoY29udGV4dCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50LmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVuTW91bnQoY29udGV4dCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVbk1vdW50LmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LmdldENoaWxkQ29udGV4dC5hcHBseSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50RWxlbWVudDtcbiJdfQ==