'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = function () {
  function ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins) {
    _classCallCheck(this, ReactClass);

    this.render = render;

    if (getInitialState) {
      this.getInitialState = getInitialState;
    }
    if (getChildContext) {
      this.getChildContext = getChildContext;
    }
    if (componentDidMount) {
      this.componentDidMount = componentDidMount;
    }
    if (componentWillUnmount) {
      this.componentWillUnmount = componentWillUnmount;
    }

    this.mixins = mixins;
  }

  _createClass(ReactClass, [{
    key: 'getInitialState',
    value: function getInitialState() {
      return {};
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return context;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }], [{
    key: 'create',
    value: function create(object) {
      var render = object.render,
          getInitialState = object.getInitialState,
          getChildContext = object.getChildContext,
          componentDidMount = object.componentDidMount,
          componentWillUnmount = object.componentWillUnmount,
          mixins = object.mixins;


      return new ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins);
    }
  }]);

  return ReactClass;
}();

module.exports = ReactClass;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdENsYXNzLmpzIl0sIm5hbWVzIjpbIlJlYWN0Q2xhc3MiLCJyZW5kZXIiLCJnZXRJbml0aWFsU3RhdGUiLCJnZXRDaGlsZENvbnRleHQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwibWl4aW5zIiwiY29udGV4dCIsIm9iamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsVTtBQUNKLHNCQUFZQyxNQUFaLEVBQW9CQyxlQUFwQixFQUFxQ0MsZUFBckMsRUFBc0RDLGlCQUF0RCxFQUF5RUMsb0JBQXpFLEVBQStGQyxNQUEvRixFQUF1RztBQUFBOztBQUNyRyxTQUFLTCxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsUUFBSUMsZUFBSixFQUFxQjtBQUFFLFdBQUtBLGVBQUwsR0FBdUJBLGVBQXZCO0FBQXlDO0FBQ2hFLFFBQUlDLGVBQUosRUFBcUI7QUFBRSxXQUFLQSxlQUFMLEdBQXVCQSxlQUF2QjtBQUF5QztBQUNoRSxRQUFJQyxpQkFBSixFQUF1QjtBQUFFLFdBQUtBLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFBNkM7QUFDdEUsUUFBSUMsb0JBQUosRUFBMEI7QUFBRSxXQUFLQSxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBQW1EOztBQUUvRSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OztzQ0FFaUI7QUFDaEIsYUFBTyxFQUFQO0FBQ0Q7OztvQ0FFZUMsTyxFQUFTO0FBQ3ZCLGFBQU9BLE9BQVA7QUFDRDs7O3dDQUVtQixDQUVuQjs7OzJDQUVzQixDQUV0Qjs7OzJCQUVhQyxNLEVBQVE7QUFBQSxVQUNaUCxNQURZLEdBQ2tGTyxNQURsRixDQUNaUCxNQURZO0FBQUEsVUFDSkMsZUFESSxHQUNrRk0sTUFEbEYsQ0FDSk4sZUFESTtBQUFBLFVBQ2FDLGVBRGIsR0FDa0ZLLE1BRGxGLENBQ2FMLGVBRGI7QUFBQSxVQUM4QkMsaUJBRDlCLEdBQ2tGSSxNQURsRixDQUM4QkosaUJBRDlCO0FBQUEsVUFDaURDLG9CQURqRCxHQUNrRkcsTUFEbEYsQ0FDaURILG9CQURqRDtBQUFBLFVBQ3VFQyxNQUR2RSxHQUNrRkUsTUFEbEYsQ0FDdUVGLE1BRHZFOzs7QUFHcEIsYUFBTyxJQUFJTixVQUFKLENBQWVDLE1BQWYsRUFBdUJDLGVBQXZCLEVBQXdDQyxlQUF4QyxFQUF5REMsaUJBQXpELEVBQTRFQyxvQkFBNUUsRUFBa0dDLE1BQWxHLENBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJWLFVBQWpCIiwiZmlsZSI6InJlYWN0Q2xhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlYWN0Q2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucykge1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyO1xuXG4gICAgaWYgKGdldEluaXRpYWxTdGF0ZSkgeyB0aGlzLmdldEluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZTsgfVxuICAgIGlmIChnZXRDaGlsZENvbnRleHQpIHsgdGhpcy5nZXRDaGlsZENvbnRleHQgPSBnZXRDaGlsZENvbnRleHQ7IH1cbiAgICBpZiAoY29tcG9uZW50RGlkTW91bnQpIHsgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50OyB9XG4gICAgaWYgKGNvbXBvbmVudFdpbGxVbm1vdW50KSB7IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSBjb21wb25lbnRXaWxsVW5tb3VudDsgfVxuXG4gICAgdGhpcy5taXhpbnMgPSBtaXhpbnM7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKG9iamVjdCkge1xuICAgIGNvbnN0IHsgcmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMgfSA9IG9iamVjdDtcblxuICAgIHJldHVybiBuZXcgUmVhY3RDbGFzcyhyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuIl19