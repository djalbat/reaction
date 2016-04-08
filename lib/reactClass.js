'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = function () {
  function ReactClass(render, displayName, getInitialState, componentDidMount) {
    _classCallCheck(this, ReactClass);

    this.render = render;
    this.displayName = displayName;
    this.getInitialState = getInitialState;
    this.componentDidMount = componentDidMount;
  }

  _createClass(ReactClass, [{
    key: 'getRender',
    value: function getRender() {
      return this.render;
    }
  }, {
    key: 'getDisplayName',
    value: function getDisplayName() {
      return this.displayName;
    }
  }, {
    key: 'getGetInitialState',
    value: function getGetInitialState() {
      return this.getInitialState;
    }
  }, {
    key: 'getComponentDidMount',
    value: function getComponentDidMount() {
      return this.componentDidMount;
    }
  }, {
    key: 'instance',
    value: function instance(properties, children) {
      var getInitialState = this.getGetInitialState(),
          initialState = getInitialState ? getInitialState() : {},
          ///
      props = properties === null ? {} : properties; ///

      props.children = children;

      var state = initialState,
          ///
      instance = {
        props: props,
        state: state
      };

      return instance;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var render = properties['render'],
          displayName = properties['displayName'],
          getInitialState = properties['getInitialState'],
          componentDidMount = properties['componentDidMount'],
          reactClass = new ReactClass(render, displayName, getInitialState, componentDidMount);

      return reactClass;
    }
  }]);

  return ReactClass;
}();

module.exports = ReactClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTTtBQUNKLFdBREksVUFDSixDQUFZLE1BQVosRUFBb0IsV0FBcEIsRUFBaUMsZUFBakMsRUFBa0QsaUJBQWxELEVBQXFFOzBCQURqRSxZQUNpRTs7QUFDbkUsU0FBSyxNQUFMLEdBQWMsTUFBZCxDQURtRTtBQUVuRSxTQUFLLFdBQUwsR0FBbUIsV0FBbkIsQ0FGbUU7QUFHbkUsU0FBSyxlQUFMLEdBQXVCLGVBQXZCLENBSG1FO0FBSW5FLFNBQUssaUJBQUwsR0FBeUIsaUJBQXpCLENBSm1FO0dBQXJFOztlQURJOztnQ0FRUTtBQUNWLGFBQU8sS0FBSyxNQUFMLENBREc7Ozs7cUNBSUs7QUFDZixhQUFPLEtBQUssV0FBTCxDQURROzs7O3lDQUlJO0FBQ25CLGFBQU8sS0FBSyxlQUFMLENBRFk7Ozs7MkNBSUU7QUFDckIsYUFBTyxLQUFLLGlCQUFMLENBRGM7Ozs7NkJBSWQsWUFBWSxVQUFVO0FBQzdCLFVBQUksa0JBQWtCLEtBQUssa0JBQUwsRUFBbEI7VUFDQSxlQUFlLGtCQUFrQixpQkFBbEIsR0FBc0MsRUFBdEM7O0FBQ2YsY0FBUSxVQUFDLEtBQWUsSUFBZixHQUF1QixFQUF4QixHQUE2QixVQUE3Qjs7QUFIaUIsV0FLN0IsQ0FBTSxRQUFOLEdBQWlCLFFBQWpCLENBTDZCOztBQU83QixVQUFJLFFBQVEsWUFBUjs7QUFDQSxpQkFBVztBQUNULGVBQU8sS0FBUDtBQUNBLGVBQU8sS0FBUDtPQUZGLENBUnlCOztBQWE3QixhQUFPLFFBQVAsQ0FiNkI7Ozs7bUNBZ0JULFlBQVk7QUFDaEMsVUFBSSxTQUFTLFdBQVcsUUFBWCxDQUFUO1VBQ0EsY0FBYyxXQUFXLGFBQVgsQ0FBZDtVQUNBLGtCQUFrQixXQUFXLGlCQUFYLENBQWxCO1VBQ0Esb0JBQW9CLFdBQVcsbUJBQVgsQ0FBcEI7VUFDQSxhQUFhLElBQUksVUFBSixDQUFlLE1BQWYsRUFBdUIsV0FBdkIsRUFBb0MsZUFBcEMsRUFBcUQsaUJBQXJELENBQWIsQ0FMNEI7O0FBT2hDLGFBQU8sVUFBUCxDQVBnQzs7OztTQXhDOUI7OztBQW1ETixPQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoicmVhY3RDbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZGlzcGxheU5hbWUsIGdldEluaXRpYWxTdGF0ZSwgY29tcG9uZW50RGlkTW91bnQpIHtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlcjtcbiAgICB0aGlzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgdGhpcy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7XG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50O1xuICB9XG4gIFxuICBnZXRSZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyO1xuICB9XG5cbiAgZ2V0RGlzcGxheU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheU5hbWU7XG4gIH1cblxuICBnZXRHZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SW5pdGlhbFN0YXRlO1xuICB9XG4gIFxuICBnZXRDb21wb25lbnREaWRNb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnREaWRNb3VudDtcbiAgfVxuXG4gIGluc3RhbmNlKHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgdmFyIGdldEluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0R2V0SW5pdGlhbFN0YXRlKCksXG4gICAgICAgIGluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSA/IGdldEluaXRpYWxTdGF0ZSgpIDoge30sIC8vL1xuICAgICAgICBwcm9wcyA9IChwcm9wZXJ0aWVzID09PSBudWxsKSA/IHt9IDogcHJvcGVydGllczsgIC8vL1xuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgIHZhciBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgIC8vL1xuICAgICAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIHJlbmRlciA9IHByb3BlcnRpZXNbJ3JlbmRlciddLFxuICAgICAgICBkaXNwbGF5TmFtZSA9IHByb3BlcnRpZXNbJ2Rpc3BsYXlOYW1lJ10sXG4gICAgICAgIGdldEluaXRpYWxTdGF0ZSA9IHByb3BlcnRpZXNbJ2dldEluaXRpYWxTdGF0ZSddLFxuICAgICAgICBjb21wb25lbnREaWRNb3VudCA9IHByb3BlcnRpZXNbJ2NvbXBvbmVudERpZE1vdW50J10sXG4gICAgICAgIHJlYWN0Q2xhc3MgPSBuZXcgUmVhY3RDbGFzcyhyZW5kZXIsIGRpc3BsYXlOYW1lLCBnZXRJbml0aWFsU3RhdGUsIGNvbXBvbmVudERpZE1vdW50KTtcbiAgICBcbiAgICByZXR1cm4gcmVhY3RDbGFzcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q2xhc3M7XG4iXX0=
