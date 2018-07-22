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
    key: 'fromObject',
    value: function fromObject(object) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdENsYXNzLmpzIl0sIm5hbWVzIjpbIlJlYWN0Q2xhc3MiLCJyZW5kZXIiLCJnZXRJbml0aWFsU3RhdGUiLCJnZXRDaGlsZENvbnRleHQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwibWl4aW5zIiwiY29udGV4dCIsIm9iamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsVTtBQUNKLHNCQUFZQyxNQUFaLEVBQW9CQyxlQUFwQixFQUFxQ0MsZUFBckMsRUFBc0RDLGlCQUF0RCxFQUF5RUMsb0JBQXpFLEVBQStGQyxNQUEvRixFQUF1RztBQUFBOztBQUNyRyxTQUFLTCxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsUUFBSUMsZUFBSixFQUFxQjtBQUFFLFdBQUtBLGVBQUwsR0FBdUJBLGVBQXZCO0FBQXlDO0FBQ2hFLFFBQUlDLGVBQUosRUFBcUI7QUFBRSxXQUFLQSxlQUFMLEdBQXVCQSxlQUF2QjtBQUF5QztBQUNoRSxRQUFJQyxpQkFBSixFQUF1QjtBQUFFLFdBQUtBLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFBNkM7QUFDdEUsUUFBSUMsb0JBQUosRUFBMEI7QUFBRSxXQUFLQSxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBQW1EOztBQUUvRSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OztzQ0FFaUI7QUFDaEIsYUFBTyxFQUFQO0FBQ0Q7OztvQ0FFZUMsTyxFQUFTO0FBQ3ZCLGFBQU9BLE9BQVA7QUFDRDs7O3dDQUVtQixDQUVuQjs7OzJDQUVzQixDQUV0Qjs7OytCQUVpQkMsTSxFQUFRO0FBQUEsVUFDaEJQLE1BRGdCLEdBQzhFTyxNQUQ5RSxDQUNoQlAsTUFEZ0I7QUFBQSxVQUNSQyxlQURRLEdBQzhFTSxNQUQ5RSxDQUNSTixlQURRO0FBQUEsVUFDU0MsZUFEVCxHQUM4RUssTUFEOUUsQ0FDU0wsZUFEVDtBQUFBLFVBQzBCQyxpQkFEMUIsR0FDOEVJLE1BRDlFLENBQzBCSixpQkFEMUI7QUFBQSxVQUM2Q0Msb0JBRDdDLEdBQzhFRyxNQUQ5RSxDQUM2Q0gsb0JBRDdDO0FBQUEsVUFDbUVDLE1BRG5FLEdBQzhFRSxNQUQ5RSxDQUNtRUYsTUFEbkU7OztBQUd4QixhQUFPLElBQUlOLFVBQUosQ0FBZUMsTUFBZixFQUF1QkMsZUFBdkIsRUFBd0NDLGVBQXhDLEVBQXlEQyxpQkFBekQsRUFBNEVDLG9CQUE1RSxFQUFrR0MsTUFBbEcsQ0FBUDtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQlYsVUFBakIiLCJmaWxlIjoicmVhY3RDbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zKSB7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXI7XG5cbiAgICBpZiAoZ2V0SW5pdGlhbFN0YXRlKSB7IHRoaXMuZ2V0SW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlOyB9XG4gICAgaWYgKGdldENoaWxkQ29udGV4dCkgeyB0aGlzLmdldENoaWxkQ29udGV4dCA9IGdldENoaWxkQ29udGV4dDsgfVxuICAgIGlmIChjb21wb25lbnREaWRNb3VudCkgeyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gY29tcG9uZW50RGlkTW91bnQ7IH1cbiAgICBpZiAoY29tcG9uZW50V2lsbFVubW91bnQpIHsgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9IGNvbXBvbmVudFdpbGxVbm1vdW50OyB9XG5cbiAgICB0aGlzLm1peGlucyA9IG1peGlucztcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgIGNvbnN0IHsgcmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMgfSA9IG9iamVjdDtcblxuICAgIHJldHVybiBuZXcgUmVhY3RDbGFzcyhyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuIl19