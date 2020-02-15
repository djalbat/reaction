'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('../react');

var ReactComponentElement = function (_ReactElement) {
  _inherits(ReactComponentElement, _ReactElement);

  function ReactComponentElement(reactComponent, props) {
    _classCallCheck(this, ReactComponentElement);

    var _this = _possibleConstructorReturn(this, (ReactComponentElement.__proto__ || Object.getPrototypeOf(ReactComponentElement)).call(this, props));

    _this.reactComponent = reactComponent;

    var initialState = _this.getInitialState();

    _this.setInitialState(initialState);
    return _this;
  }

  _createClass(ReactComponentElement, [{
    key: 'render',
    value: function render(update) {
      return this.reactComponent.render.call(this, update);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return this.reactComponent.getInitialState.call(this);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return this.reactComponent.getChildContext.call(this, context);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount(domElement) {
      this.reactComponent.componentDidMount.call(this, domElement);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reactComponent.componentWillUnmount.call(this);
    }
  }]);

  return ReactComponentElement;
}(ReactElement);

module.exports = ReactComponentElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L3JlYWN0L2NvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJSZWFjdEVsZW1lbnQiLCJyZXF1aXJlIiwiUmVhY3RDb21wb25lbnRFbGVtZW50IiwicmVhY3RDb21wb25lbnQiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImdldEluaXRpYWxTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInVwZGF0ZSIsInJlbmRlciIsImNhbGwiLCJjb250ZXh0IiwiZ2V0Q2hpbGRDb250ZXh0IiwiZG9tRWxlbWVudCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsVUFBUixDQUFyQjs7SUFFTUMscUI7OztBQUNKLGlDQUFZQyxjQUFaLEVBQTRCQyxLQUE1QixFQUFtQztBQUFBOztBQUFBLDhJQUMzQkEsS0FEMkI7O0FBR2pDLFVBQUtELGNBQUwsR0FBc0JBLGNBQXRCOztBQUVBLFFBQU1FLGVBQWUsTUFBS0MsZUFBTCxFQUFyQjs7QUFFQSxVQUFLQyxlQUFMLENBQXFCRixZQUFyQjtBQVBpQztBQVFsQzs7OzsyQkFFTUcsTSxFQUFRO0FBQ2IsYUFBTyxLQUFLTCxjQUFMLENBQW9CTSxNQUFwQixDQUEyQkMsSUFBM0IsQ0FBZ0MsSUFBaEMsRUFBc0NGLE1BQXRDLENBQVA7QUFDRDs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtMLGNBQUwsQ0FBb0JHLGVBQXBCLENBQW9DSSxJQUFwQyxDQUF5QyxJQUF6QyxDQUFQO0FBQ0Q7OztvQ0FFZUMsTyxFQUFTO0FBQ3ZCLGFBQU8sS0FBS1IsY0FBTCxDQUFvQlMsZUFBcEIsQ0FBb0NGLElBQXBDLENBQXlDLElBQXpDLEVBQStDQyxPQUEvQyxDQUFQO0FBQ0Q7OztzQ0FFaUJFLFUsRUFBWTtBQUM1QixXQUFLVixjQUFMLENBQW9CVyxpQkFBcEIsQ0FBc0NKLElBQXRDLENBQTJDLElBQTNDLEVBQWlERyxVQUFqRDtBQUNEOzs7MkNBRXNCO0FBQ3JCLFdBQUtWLGNBQUwsQ0FBb0JZLG9CQUFwQixDQUF5Q0wsSUFBekMsQ0FBOEMsSUFBOUM7QUFDRDs7OztFQTdCaUNWLFk7O0FBZ0NwQ2dCLE9BQU9DLE9BQVAsR0FBaUJmLHFCQUFqQiIsImZpbGUiOiJjb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4uL3JlYWN0Jyk7XG5cbmNsYXNzIFJlYWN0Q29tcG9uZW50RWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q29tcG9uZW50LCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RDb21wb25lbnQgPSByZWFjdENvbXBvbmVudDtcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LnJlbmRlci5jYWxsKHRoaXMsIHVwZGF0ZSk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQuZ2V0SW5pdGlhbFN0YXRlLmNhbGwodGhpcyk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LmdldENoaWxkQ29udGV4dC5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoZG9tRWxlbWVudCkge1xuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQuY2FsbCh0aGlzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50RWxlbWVudDtcbiJdfQ==