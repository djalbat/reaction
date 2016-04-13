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
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var render = properties['render'],
          displayName = properties['displayName'],
          getInitialState = properties['getInitialState'] || defaultGetInitialState,
          componentDidMount = properties['componentDidMount'] || defaultComponentDidMount,
          reactClass = new ReactClass(render, displayName, getInitialState, componentDidMount);

      return reactClass;
    }
  }]);

  return ReactClass;
}();

module.exports = ReactClass;

function defaultGetInitialState() {
  var initialState = {};

  return initialState;
}

function defaultComponentDidMount() {}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTTtBQUNKLFdBREksVUFDSixDQUFZLE1BQVosRUFBb0IsV0FBcEIsRUFBaUMsZUFBakMsRUFBa0QsaUJBQWxELEVBQXFFOzBCQURqRSxZQUNpRTs7QUFDbkUsU0FBSyxNQUFMLEdBQWMsTUFBZCxDQURtRTtBQUVuRSxTQUFLLFdBQUwsR0FBbUIsV0FBbkIsQ0FGbUU7QUFHbkUsU0FBSyxlQUFMLEdBQXVCLGVBQXZCLENBSG1FO0FBSW5FLFNBQUssaUJBQUwsR0FBeUIsaUJBQXpCLENBSm1FO0dBQXJFOztlQURJOztnQ0FRUTtBQUNWLGFBQU8sS0FBSyxNQUFMLENBREc7Ozs7cUNBSUs7QUFDZixhQUFPLEtBQUssV0FBTCxDQURROzs7O3lDQUlJO0FBQ25CLGFBQU8sS0FBSyxlQUFMLENBRFk7Ozs7MkNBSUU7QUFDckIsYUFBTyxLQUFLLGlCQUFMLENBRGM7Ozs7bUNBSUQsWUFBWTtBQUNoQyxVQUFJLFNBQVMsV0FBVyxRQUFYLENBQVQ7VUFDQSxjQUFjLFdBQVcsYUFBWCxDQUFkO1VBQ0Esa0JBQWtCLFdBQVcsaUJBQVgsS0FBaUMsc0JBQWpDO1VBQ2xCLG9CQUFvQixXQUFXLG1CQUFYLEtBQW1DLHdCQUFuQztVQUNwQixhQUFhLElBQUksVUFBSixDQUFlLE1BQWYsRUFBdUIsV0FBdkIsRUFBb0MsZUFBcEMsRUFBcUQsaUJBQXJELENBQWIsQ0FMNEI7O0FBT2hDLGFBQU8sVUFBUCxDQVBnQzs7OztTQXhCOUI7OztBQW1DTixPQUFPLE9BQVAsR0FBaUIsVUFBakI7O0FBRUEsU0FBUyxzQkFBVCxHQUFrQztBQUNoQyxNQUFJLGVBQWUsRUFBZixDQUQ0Qjs7QUFHaEMsU0FBTyxZQUFQLENBSGdDO0NBQWxDOztBQU1BLFNBQVMsd0JBQVQsR0FBb0MsRUFBcEMiLCJmaWxlIjoicmVhY3RDbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZGlzcGxheU5hbWUsIGdldEluaXRpYWxTdGF0ZSwgY29tcG9uZW50RGlkTW91bnQpIHtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlcjtcbiAgICB0aGlzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgdGhpcy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7XG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50O1xuICB9XG4gIFxuICBnZXRSZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyO1xuICB9XG5cbiAgZ2V0RGlzcGxheU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheU5hbWU7XG4gIH1cblxuICBnZXRHZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SW5pdGlhbFN0YXRlO1xuICB9XG4gIFxuICBnZXRDb21wb25lbnREaWRNb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnREaWRNb3VudDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB2YXIgcmVuZGVyID0gcHJvcGVydGllc1sncmVuZGVyJ10sXG4gICAgICAgIGRpc3BsYXlOYW1lID0gcHJvcGVydGllc1snZGlzcGxheU5hbWUnXSxcbiAgICAgICAgZ2V0SW5pdGlhbFN0YXRlID0gcHJvcGVydGllc1snZ2V0SW5pdGlhbFN0YXRlJ10gfHwgZGVmYXVsdEdldEluaXRpYWxTdGF0ZSxcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQgPSBwcm9wZXJ0aWVzWydjb21wb25lbnREaWRNb3VudCddIHx8IGRlZmF1bHRDb21wb25lbnREaWRNb3VudCxcbiAgICAgICAgcmVhY3RDbGFzcyA9IG5ldyBSZWFjdENsYXNzKHJlbmRlciwgZGlzcGxheU5hbWUsIGdldEluaXRpYWxTdGF0ZSwgY29tcG9uZW50RGlkTW91bnQpO1xuICAgIFxuICAgIHJldHVybiByZWFjdENsYXNzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzcztcblxuZnVuY3Rpb24gZGVmYXVsdEdldEluaXRpYWxTdGF0ZSgpIHtcbiAgdmFyIGluaXRpYWxTdGF0ZSA9IHt9O1xuXG4gIHJldHVybiBpbml0aWFsU3RhdGU7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRDb21wb25lbnREaWRNb3VudCgpIHtcbiAgXG59Il19
