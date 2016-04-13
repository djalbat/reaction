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
          getInitialState = properties['getInitialState'],
          componentDidMount = properties['componentDidMount'],
          reactClass = new ReactClass(render, displayName, getInitialState, componentDidMount);

      return reactClass;
    }
  }]);

  return ReactClass;
}();

module.exports = ReactClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTTtBQUNKLFdBREksVUFDSixDQUFZLE1BQVosRUFBb0IsV0FBcEIsRUFBaUMsZUFBakMsRUFBa0QsaUJBQWxELEVBQXFFOzBCQURqRSxZQUNpRTs7QUFDbkUsU0FBSyxNQUFMLEdBQWMsTUFBZCxDQURtRTtBQUVuRSxTQUFLLFdBQUwsR0FBbUIsV0FBbkIsQ0FGbUU7QUFHbkUsU0FBSyxlQUFMLEdBQXVCLGVBQXZCLENBSG1FO0FBSW5FLFNBQUssaUJBQUwsR0FBeUIsaUJBQXpCLENBSm1FO0dBQXJFOztlQURJOztnQ0FRUTtBQUNWLGFBQU8sS0FBSyxNQUFMLENBREc7Ozs7cUNBSUs7QUFDZixhQUFPLEtBQUssV0FBTCxDQURROzs7O3lDQUlJO0FBQ25CLGFBQU8sS0FBSyxlQUFMLENBRFk7Ozs7MkNBSUU7QUFDckIsYUFBTyxLQUFLLGlCQUFMLENBRGM7Ozs7bUNBSUQsWUFBWTtBQUNoQyxVQUFJLFNBQVMsV0FBVyxRQUFYLENBQVQ7VUFDQSxjQUFjLFdBQVcsYUFBWCxDQUFkO1VBQ0Esa0JBQWtCLFdBQVcsaUJBQVgsQ0FBbEI7VUFDQSxvQkFBb0IsV0FBVyxtQkFBWCxDQUFwQjtVQUNBLGFBQWEsSUFBSSxVQUFKLENBQWUsTUFBZixFQUF1QixXQUF2QixFQUFvQyxlQUFwQyxFQUFxRCxpQkFBckQsQ0FBYixDQUw0Qjs7QUFPaEMsYUFBTyxVQUFQLENBUGdDOzs7O1NBeEI5Qjs7O0FBbUNOLE9BQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJyZWFjdENsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWFjdENsYXNzIHtcbiAgY29uc3RydWN0b3IocmVuZGVyLCBkaXNwbGF5TmFtZSwgZ2V0SW5pdGlhbFN0YXRlLCBjb21wb25lbnREaWRNb3VudCkge1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyO1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICB0aGlzLmdldEluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZTtcbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gY29tcG9uZW50RGlkTW91bnQ7XG4gIH1cbiAgXG4gIGdldFJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXI7XG4gIH1cblxuICBnZXREaXNwbGF5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5TmFtZTtcbiAgfVxuXG4gIGdldEdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbml0aWFsU3RhdGU7XG4gIH1cbiAgXG4gIGdldENvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudERpZE1vdW50O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHZhciByZW5kZXIgPSBwcm9wZXJ0aWVzWydyZW5kZXInXSxcbiAgICAgICAgZGlzcGxheU5hbWUgPSBwcm9wZXJ0aWVzWydkaXNwbGF5TmFtZSddLFxuICAgICAgICBnZXRJbml0aWFsU3RhdGUgPSBwcm9wZXJ0aWVzWydnZXRJbml0aWFsU3RhdGUnXSxcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQgPSBwcm9wZXJ0aWVzWydjb21wb25lbnREaWRNb3VudCddLFxuICAgICAgICByZWFjdENsYXNzID0gbmV3IFJlYWN0Q2xhc3MocmVuZGVyLCBkaXNwbGF5TmFtZSwgZ2V0SW5pdGlhbFN0YXRlLCBjb21wb25lbnREaWRNb3VudCk7XG4gICAgXG4gICAgcmV0dXJuIHJlYWN0Q2xhc3M7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuIl19
