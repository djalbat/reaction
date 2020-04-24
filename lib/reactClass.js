"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = ReactClass;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0Q2xhc3MuanMiXSwibmFtZXMiOlsiUmVhY3RDbGFzcyIsInJlbmRlciIsImdldEluaXRpYWxTdGF0ZSIsImdldENoaWxkQ29udGV4dCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJtaXhpbnMiLCJjb250ZXh0Iiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTtBQUNuQixzQkFBWUMsTUFBWixFQUFvQkMsZUFBcEIsRUFBcUNDLGVBQXJDLEVBQXNEQyxpQkFBdEQsRUFBeUVDLG9CQUF6RSxFQUErRkMsTUFBL0YsRUFBdUc7QUFBQTs7QUFDckcsU0FBS0wsTUFBTCxHQUFjQSxNQUFkOztBQUVBLFFBQUlDLGVBQUosRUFBcUI7QUFBRSxXQUFLQSxlQUFMLEdBQXVCQSxlQUF2QjtBQUF5Qzs7QUFDaEUsUUFBSUMsZUFBSixFQUFxQjtBQUFFLFdBQUtBLGVBQUwsR0FBdUJBLGVBQXZCO0FBQXlDOztBQUNoRSxRQUFJQyxpQkFBSixFQUF1QjtBQUFFLFdBQUtBLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFBNkM7O0FBQ3RFLFFBQUlDLG9CQUFKLEVBQTBCO0FBQUUsV0FBS0Esb0JBQUwsR0FBNEJBLG9CQUE1QjtBQUFtRDs7QUFFL0UsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7c0NBRWlCO0FBQ2hCLGFBQU8sRUFBUDtBQUNEOzs7b0NBRWVDLE8sRUFBUztBQUN2QixhQUFPQSxPQUFQO0FBQ0Q7Ozt3Q0FFbUIsQ0FFbkI7OzsyQ0FFc0IsQ0FFdEI7OzsyQkFFYUMsTSxFQUFRO0FBQUEsVUFDWlAsTUFEWSxHQUNrRk8sTUFEbEYsQ0FDWlAsTUFEWTtBQUFBLFVBQ0pDLGVBREksR0FDa0ZNLE1BRGxGLENBQ0pOLGVBREk7QUFBQSxVQUNhQyxlQURiLEdBQ2tGSyxNQURsRixDQUNhTCxlQURiO0FBQUEsVUFDOEJDLGlCQUQ5QixHQUNrRkksTUFEbEYsQ0FDOEJKLGlCQUQ5QjtBQUFBLFVBQ2lEQyxvQkFEakQsR0FDa0ZHLE1BRGxGLENBQ2lESCxvQkFEakQ7QUFBQSxVQUN1RUMsTUFEdkUsR0FDa0ZFLE1BRGxGLENBQ3VFRixNQUR2RTtBQUdwQixhQUFPLElBQUlOLFVBQUosQ0FBZUMsTUFBZixFQUF1QkMsZUFBdkIsRUFBd0NDLGVBQXhDLEVBQXlEQyxpQkFBekQsRUFBNEVDLG9CQUE1RSxFQUFrR0MsTUFBbEcsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0Q2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucykge1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyO1xuXG4gICAgaWYgKGdldEluaXRpYWxTdGF0ZSkgeyB0aGlzLmdldEluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZTsgfVxuICAgIGlmIChnZXRDaGlsZENvbnRleHQpIHsgdGhpcy5nZXRDaGlsZENvbnRleHQgPSBnZXRDaGlsZENvbnRleHQ7IH1cbiAgICBpZiAoY29tcG9uZW50RGlkTW91bnQpIHsgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50OyB9XG4gICAgaWYgKGNvbXBvbmVudFdpbGxVbm1vdW50KSB7IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSBjb21wb25lbnRXaWxsVW5tb3VudDsgfVxuXG4gICAgdGhpcy5taXhpbnMgPSBtaXhpbnM7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKG9iamVjdCkge1xuICAgIGNvbnN0IHsgcmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMgfSA9IG9iamVjdDtcblxuICAgIHJldHVybiBuZXcgUmVhY3RDbGFzcyhyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucyk7XG4gIH1cbn1cbiJdfQ==