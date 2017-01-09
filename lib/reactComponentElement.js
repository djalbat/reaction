'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactComponentElement = function (_ReactElement) {
  _inherits(ReactComponentElement, _ReactElement);

  function ReactComponentElement(reactComponent, props) {
    _classCallCheck(this, ReactComponentElement);

    var _this = _possibleConstructorReturn(this, (ReactComponentElement.__proto__ || Object.getPrototypeOf(ReactComponentElement)).call(this, props));

    _this.reactComponent = reactComponent;

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(ReactComponentElement, [{
    key: 'render',
    value: function render() {
      return this.reactComponent.render.apply(this);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return this.reactComponent.getInitialState.apply(this);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactComponent.getChildContext.apply(this);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactComponent.componentDidMount.apply(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reactComponent.componentWillUnmount.apply(this);
    }
  }]);

  return ReactComponentElement;
}(ReactElement);

module.exports = ReactComponentElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdENvbXBvbmVudEVsZW1lbnQuanMiXSwibmFtZXMiOlsiUmVhY3RFbGVtZW50IiwicmVxdWlyZSIsIlJlYWN0Q29tcG9uZW50RWxlbWVudCIsInJlYWN0Q29tcG9uZW50IiwicHJvcHMiLCJzdGF0ZSIsImdldEluaXRpYWxTdGF0ZSIsInJlbmRlciIsImFwcGx5IiwiZ2V0Q2hpbGRDb250ZXh0IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxnQkFBUixDQUFyQjs7SUFFTUMscUI7OztBQUNKLGlDQUFZQyxjQUFaLEVBQTRCQyxLQUE1QixFQUFtQztBQUFBOztBQUFBLDhJQUMzQkEsS0FEMkI7O0FBR2pDLFVBQUtELGNBQUwsR0FBc0JBLGNBQXRCOztBQUVBLFVBQUtFLEtBQUwsR0FBYSxNQUFLQyxlQUFMLEVBQWI7QUFMaUM7QUFNbEM7Ozs7NkJBRVE7QUFDUCxhQUFPLEtBQUtILGNBQUwsQ0FBb0JJLE1BQXBCLENBQTJCQyxLQUEzQixDQUFpQyxJQUFqQyxDQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLTCxjQUFMLENBQW9CRyxlQUFwQixDQUFvQ0UsS0FBcEMsQ0FBMEMsSUFBMUMsQ0FBUDtBQUNEOzs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0wsY0FBTCxDQUFvQk0sZUFBcEIsQ0FBb0NELEtBQXBDLENBQTBDLElBQTFDLENBQVA7QUFDRDs7O3dDQUVtQjtBQUNsQixXQUFLTCxjQUFMLENBQW9CTyxpQkFBcEIsQ0FBc0NGLEtBQXRDLENBQTRDLElBQTVDO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0wsY0FBTCxDQUFvQlEsb0JBQXBCLENBQXlDSCxLQUF6QyxDQUErQyxJQUEvQztBQUNEOzs7O0VBM0JpQ1IsWTs7QUE4QnBDWSxPQUFPQyxPQUFQLEdBQWlCWCxxQkFBakIiLCJmaWxlIjoicmVhY3RDb21wb25lbnRFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdENvbXBvbmVudEVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENvbXBvbmVudCwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50ID0gcmVhY3RDb21wb25lbnQ7XG5cbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5yZW5kZXIuYXBwbHkodGhpcyk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQuZ2V0SW5pdGlhbFN0YXRlLmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LmdldENoaWxkQ29udGV4dC5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQuYXBwbHkodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVbm1vdW50LmFwcGx5KHRoaXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDb21wb25lbnRFbGVtZW50O1xuIl19