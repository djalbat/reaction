"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReactClass = /*#__PURE__*/function () {
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
    key: "getInitialState",
    value: function getInitialState() {
      return {};
    }
  }, {
    key: "getChildContext",
    value: function getChildContext(context) {
      return context;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }], [{
    key: "create",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0Q2xhc3MuanMiXSwibmFtZXMiOlsiUmVhY3RDbGFzcyIsInJlbmRlciIsImdldEluaXRpYWxTdGF0ZSIsImdldENoaWxkQ29udGV4dCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJtaXhpbnMiLCJjb250ZXh0Iiwib2JqZWN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0lBRU1BLFU7QUFDSixzQkFBWUMsTUFBWixFQUFvQkMsZUFBcEIsRUFBcUNDLGVBQXJDLEVBQXNEQyxpQkFBdEQsRUFBeUVDLG9CQUF6RSxFQUErRkMsTUFBL0YsRUFBdUc7QUFBQTs7QUFDckcsU0FBS0wsTUFBTCxHQUFjQSxNQUFkOztBQUVBLFFBQUlDLGVBQUosRUFBcUI7QUFBRSxXQUFLQSxlQUFMLEdBQXVCQSxlQUF2QjtBQUF5Qzs7QUFDaEUsUUFBSUMsZUFBSixFQUFxQjtBQUFFLFdBQUtBLGVBQUwsR0FBdUJBLGVBQXZCO0FBQXlDOztBQUNoRSxRQUFJQyxpQkFBSixFQUF1QjtBQUFFLFdBQUtBLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFBNkM7O0FBQ3RFLFFBQUlDLG9CQUFKLEVBQTBCO0FBQUUsV0FBS0Esb0JBQUwsR0FBNEJBLG9CQUE1QjtBQUFtRDs7QUFFL0UsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7c0NBRWlCO0FBQ2hCLGFBQU8sRUFBUDtBQUNEOzs7b0NBRWVDLE8sRUFBUztBQUN2QixhQUFPQSxPQUFQO0FBQ0Q7Ozt3Q0FFbUIsQ0FFbkI7OzsyQ0FFc0IsQ0FFdEI7OzsyQkFFYUMsTSxFQUFRO0FBQUEsVUFDWlAsTUFEWSxHQUNrRk8sTUFEbEYsQ0FDWlAsTUFEWTtBQUFBLFVBQ0pDLGVBREksR0FDa0ZNLE1BRGxGLENBQ0pOLGVBREk7QUFBQSxVQUNhQyxlQURiLEdBQ2tGSyxNQURsRixDQUNhTCxlQURiO0FBQUEsVUFDOEJDLGlCQUQ5QixHQUNrRkksTUFEbEYsQ0FDOEJKLGlCQUQ5QjtBQUFBLFVBQ2lEQyxvQkFEakQsR0FDa0ZHLE1BRGxGLENBQ2lESCxvQkFEakQ7QUFBQSxVQUN1RUMsTUFEdkUsR0FDa0ZFLE1BRGxGLENBQ3VFRixNQUR2RTtBQUdwQixhQUFPLElBQUlOLFVBQUosQ0FBZUMsTUFBZixFQUF1QkMsZUFBdkIsRUFBd0NDLGVBQXhDLEVBQXlEQyxpQkFBekQsRUFBNEVDLG9CQUE1RSxFQUFrR0MsTUFBbEcsQ0FBUDtBQUNEOzs7Ozs7QUFHSEcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixVQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jbGFzcyBSZWFjdENsYXNzIHtcbiAgY29uc3RydWN0b3IocmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMpIHtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlcjtcblxuICAgIGlmIChnZXRJbml0aWFsU3RhdGUpIHsgdGhpcy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7IH1cbiAgICBpZiAoZ2V0Q2hpbGRDb250ZXh0KSB7IHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gZ2V0Q2hpbGRDb250ZXh0OyB9XG4gICAgaWYgKGNvbXBvbmVudERpZE1vdW50KSB7IHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSBjb21wb25lbnREaWRNb3VudDsgfVxuICAgIGlmIChjb21wb25lbnRXaWxsVW5tb3VudCkgeyB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gY29tcG9uZW50V2lsbFVubW91bnQ7IH1cblxuICAgIHRoaXMubWl4aW5zID0gbWl4aW5zO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShvYmplY3QpIHtcbiAgICBjb25zdCB7IHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zIH0gPSBvYmplY3Q7XG5cbiAgICByZXR1cm4gbmV3IFJlYWN0Q2xhc3MocmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzcztcbiJdfQ==