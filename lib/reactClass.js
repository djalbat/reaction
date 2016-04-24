'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = function () {
  function ReactClass(displayName, render, getChildContext, componentDidMount, componentWillUnmount) {
    _classCallCheck(this, ReactClass);

    this.displayName = displayName;

    if (render) {
      this.render = render;
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
  }

  _createClass(ReactClass, [{
    key: 'render',
    value: function render() {
      return undefined;
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return undefined;
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
      var displayName = object['displayName'],
          render = object['render'],
          getChildContext = object['getChildContext'],
          componentDidMount = object['componentDidMount'],
          componentWillUnmount = object['componentWillUnmount'];

      return new ReactClass(displayName, render, getChildContext, componentDidMount, componentWillUnmount);
    }
  }]);

  return ReactClass;
}();

module.exports = ReactClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTTtBQUNKLFdBREksVUFDSixDQUFZLFdBQVosRUFBeUIsTUFBekIsRUFBaUMsZUFBakMsRUFBa0QsaUJBQWxELEVBQXFFLG9CQUFyRSxFQUEyRjswQkFEdkYsWUFDdUY7O0FBQ3pGLFNBQUssV0FBTCxHQUFtQixXQUFuQixDQUR5Rjs7QUFHekYsUUFBSSxNQUFKLEVBQVk7QUFBRSxXQUFLLE1BQUwsR0FBYyxNQUFkLENBQUY7S0FBWjtBQUNBLFFBQUksZUFBSixFQUFxQjtBQUFFLFdBQUssZUFBTCxHQUF1QixlQUF2QixDQUFGO0tBQXJCO0FBQ0EsUUFBSSxpQkFBSixFQUF1QjtBQUFFLFdBQUssaUJBQUwsR0FBeUIsaUJBQXpCLENBQUY7S0FBdkI7QUFDQSxRQUFJLG9CQUFKLEVBQTBCO0FBQUUsV0FBSyxvQkFBTCxHQUE0QixvQkFBNUIsQ0FBRjtLQUExQjtHQU5GOztlQURJOzs2QkFVSztBQUNQLGFBQU8sU0FBUCxDQURPOzs7O3NDQUlTO0FBQ2hCLGFBQU8sU0FBUCxDQURnQjs7Ozt3Q0FJRTs7OzJDQUlHOzs7K0JBSUwsUUFBUTtBQUN4QixVQUFJLGNBQWMsT0FBTyxhQUFQLENBQWQ7VUFDQSxTQUFTLE9BQU8sUUFBUCxDQUFUO1VBQ0Esa0JBQWtCLE9BQU8saUJBQVAsQ0FBbEI7VUFDQSxvQkFBb0IsT0FBTyxtQkFBUCxDQUFwQjtVQUNBLHVCQUF1QixPQUFPLHNCQUFQLENBQXZCLENBTG9COztBQU94QixhQUFPLElBQUksVUFBSixDQUFlLFdBQWYsRUFBNEIsTUFBNUIsRUFBb0MsZUFBcEMsRUFBcUQsaUJBQXJELEVBQXdFLG9CQUF4RSxDQUFQLENBUHdCOzs7O1NBMUJ0Qjs7O0FBcUNOLE9BQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJyZWFjdENsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWFjdENsYXNzIHtcbiAgY29uc3RydWN0b3IoZGlzcGxheU5hbWUsIHJlbmRlciwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQpIHtcbiAgICB0aGlzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgXG4gICAgaWYgKHJlbmRlcikgeyB0aGlzLnJlbmRlciA9IHJlbmRlcjsgfVxuICAgIGlmIChnZXRDaGlsZENvbnRleHQpIHsgdGhpcy5nZXRDaGlsZENvbnRleHQgPSBnZXRDaGlsZENvbnRleHQ7IH1cbiAgICBpZiAoY29tcG9uZW50RGlkTW91bnQpIHsgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50OyB9XG4gICAgaWYgKGNvbXBvbmVudFdpbGxVbm1vdW50KSB7IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSBjb21wb25lbnRXaWxsVW5tb3VudDsgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuICB9XG5cbiAgc3RhdGljIGZyb21PYmplY3Qob2JqZWN0KSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gb2JqZWN0WydkaXNwbGF5TmFtZSddLFxuICAgICAgICByZW5kZXIgPSBvYmplY3RbJ3JlbmRlciddLFxuICAgICAgICBnZXRDaGlsZENvbnRleHQgPSBvYmplY3RbJ2dldENoaWxkQ29udGV4dCddLFxuICAgICAgICBjb21wb25lbnREaWRNb3VudCA9IG9iamVjdFsnY29tcG9uZW50RGlkTW91bnQnXSxcbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQgPSBvYmplY3RbJ2NvbXBvbmVudFdpbGxVbm1vdW50J107XG4gICAgXG4gICAgcmV0dXJuIG5ldyBSZWFjdENsYXNzKGRpc3BsYXlOYW1lLCByZW5kZXIsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q2xhc3M7XG4iXX0=