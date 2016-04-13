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
          componentDidMount = properties['componentDidMount'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTTtBQUNKLFdBREksVUFDSixDQUFZLE1BQVosRUFBb0IsV0FBcEIsRUFBaUMsZUFBakMsRUFBa0QsaUJBQWxELEVBQXFFOzBCQURqRSxZQUNpRTs7QUFDbkUsU0FBSyxNQUFMLEdBQWMsTUFBZCxDQURtRTtBQUVuRSxTQUFLLFdBQUwsR0FBbUIsV0FBbkIsQ0FGbUU7QUFHbkUsU0FBSyxlQUFMLEdBQXVCLGVBQXZCLENBSG1FO0FBSW5FLFNBQUssaUJBQUwsR0FBeUIsaUJBQXpCLENBSm1FO0dBQXJFOztlQURJOztnQ0FRUTtBQUNWLGFBQU8sS0FBSyxNQUFMLENBREc7Ozs7cUNBSUs7QUFDZixhQUFPLEtBQUssV0FBTCxDQURROzs7O3lDQUlJO0FBQ25CLGFBQU8sS0FBSyxlQUFMLENBRFk7Ozs7MkNBSUU7QUFDckIsYUFBTyxLQUFLLGlCQUFMLENBRGM7Ozs7bUNBSUQsWUFBWTtBQUNoQyxVQUFJLFNBQVMsV0FBVyxRQUFYLENBQVQ7VUFDQSxjQUFjLFdBQVcsYUFBWCxDQUFkO1VBQ0Esa0JBQWtCLFdBQVcsaUJBQVgsS0FBaUMsc0JBQWpDO1VBQ2xCLG9CQUFvQixXQUFXLG1CQUFYLENBQXBCO1VBQ0EsYUFBYSxJQUFJLFVBQUosQ0FBZSxNQUFmLEVBQXVCLFdBQXZCLEVBQW9DLGVBQXBDLEVBQXFELGlCQUFyRCxDQUFiLENBTDRCOztBQU9oQyxhQUFPLFVBQVAsQ0FQZ0M7Ozs7U0F4QjlCOzs7QUFtQ04sT0FBTyxPQUFQLEdBQWlCLFVBQWpCOztBQUVBLFNBQVMsc0JBQVQsR0FBa0M7QUFDaEMsTUFBSSxlQUFlLEVBQWYsQ0FENEI7O0FBR2hDLFNBQU8sWUFBUCxDQUhnQztDQUFsQyIsImZpbGUiOiJyZWFjdENsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWFjdENsYXNzIHtcbiAgY29uc3RydWN0b3IocmVuZGVyLCBkaXNwbGF5TmFtZSwgZ2V0SW5pdGlhbFN0YXRlLCBjb21wb25lbnREaWRNb3VudCkge1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyO1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICB0aGlzLmdldEluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZTtcbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gY29tcG9uZW50RGlkTW91bnQ7XG4gIH1cbiAgXG4gIGdldFJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXI7XG4gIH1cblxuICBnZXREaXNwbGF5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5TmFtZTtcbiAgfVxuXG4gIGdldEdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbml0aWFsU3RhdGU7XG4gIH1cbiAgXG4gIGdldENvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudERpZE1vdW50O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHZhciByZW5kZXIgPSBwcm9wZXJ0aWVzWydyZW5kZXInXSxcbiAgICAgICAgZGlzcGxheU5hbWUgPSBwcm9wZXJ0aWVzWydkaXNwbGF5TmFtZSddLFxuICAgICAgICBnZXRJbml0aWFsU3RhdGUgPSBwcm9wZXJ0aWVzWydnZXRJbml0aWFsU3RhdGUnXSB8fCBkZWZhdWx0R2V0SW5pdGlhbFN0YXRlLFxuICAgICAgICBjb21wb25lbnREaWRNb3VudCA9IHByb3BlcnRpZXNbJ2NvbXBvbmVudERpZE1vdW50J10sXG4gICAgICAgIHJlYWN0Q2xhc3MgPSBuZXcgUmVhY3RDbGFzcyhyZW5kZXIsIGRpc3BsYXlOYW1lLCBnZXRJbml0aWFsU3RhdGUsIGNvbXBvbmVudERpZE1vdW50KTtcbiAgICBcbiAgICByZXR1cm4gcmVhY3RDbGFzcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q2xhc3M7XG5cbmZ1bmN0aW9uIGRlZmF1bHRHZXRJbml0aWFsU3RhdGUoKSB7XG4gIHZhciBpbml0aWFsU3RhdGUgPSB7fTtcblxuICByZXR1cm4gaW5pdGlhbFN0YXRlO1xufVxuIl19
