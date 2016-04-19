'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXReactElement = function () {
  function JSXReactElement(reactClass, properties, childJSXElements) {
    _classCallCheck(this, JSXReactElement);

    this.reactClass = reactClass;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    var getInitialState = reactClass.getGetInitialState(),
        initialState = getInitialState();

    this.state = initialState; ///

    this.jsxElement = undefined; ///

    this.parentJSXElement = undefined; ///
  }

  _createClass(JSXReactElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.parentJSXElement = parentJSXElement;

      this.render();

      this.remount();

      this.componentDidMount();
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.jsxElement.remove();

      this.render();

      this.remount();
    }
  }, {
    key: 'render',
    value: function render() {
      var reactClass = this.reactClass,
          render = reactClass.getRender(),
          displayName = reactClass.getDisplayName(),
          instance = this.instance();

      instance.displayName = displayName;

      this.jsxElement = render.apply(instance);
    }
  }, {
    key: 'remount',
    value: function remount() {
      this.jsxElement.mount(this.parentJSXElement);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var reactClass = this.reactClass,
          componentDidMount = reactClass.getComponentDidMount(),
          instance = this.instance();

      componentDidMount.apply(instance);
    }
  }, {
    key: 'instance',
    value: function instance() {
      var props = this.properties || {},
          ///
      state = this.state,
          instance = {
        props: props,
        state: state
      };

      props.children = this.childJSXElements; ///

      return instance;
    }
  }]);

  return JSXReactElement;
}();

module.exports = JSXReactElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hSZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxlQUNKLENBQVksVUFBWixFQUF3QixVQUF4QixFQUFvQyxnQkFBcEMsRUFBc0Q7MEJBRGxELGlCQUNrRDs7QUFDcEQsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBRG9EO0FBRXBELFNBQUssVUFBTCxHQUFrQixVQUFsQixDQUZvRDtBQUdwRCxTQUFLLGdCQUFMLEdBQXdCLGdCQUF4QixDQUhvRDs7QUFLcEQsUUFBSSxrQkFBa0IsV0FBVyxrQkFBWCxFQUFsQjtRQUNBLGVBQWUsaUJBQWYsQ0FOZ0Q7O0FBUXBELFNBQUssS0FBTCxHQUFhLFlBQWI7O0FBUm9ELFFBVXBELENBQUssVUFBTCxHQUFrQixTQUFsQjs7QUFWb0QsUUFZcEQsQ0FBSyxnQkFBTCxHQUF3QixTQUF4QjtBQVpvRCxHQUF0RDs7ZUFESTs7MEJBZ0JFLGtCQUFrQjtBQUN0QixXQUFLLGdCQUFMLEdBQXdCLGdCQUF4QixDQURzQjs7QUFHdEIsV0FBSyxNQUFMLEdBSHNCOztBQUt0QixXQUFLLE9BQUwsR0FMc0I7O0FBT3RCLFdBQUssaUJBQUwsR0FQc0I7Ozs7NkJBVWYsT0FBTztBQUNkLFdBQUssS0FBTCxHQUFhLEtBQWIsQ0FEYzs7QUFHZCxXQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsR0FIYzs7QUFLZCxXQUFLLE1BQUwsR0FMYzs7QUFPZCxXQUFLLE9BQUwsR0FQYzs7Ozs2QkFVUDtBQUNQLFVBQUksYUFBYSxLQUFLLFVBQUw7VUFDYixTQUFTLFdBQVcsU0FBWCxFQUFUO1VBQ0EsY0FBYyxXQUFXLGNBQVgsRUFBZDtVQUNBLFdBQVcsS0FBSyxRQUFMLEVBQVgsQ0FKRzs7QUFNUCxlQUFTLFdBQVQsR0FBdUIsV0FBdkIsQ0FOTzs7QUFRUCxXQUFLLFVBQUwsR0FBa0IsT0FBTyxLQUFQLENBQWEsUUFBYixDQUFsQixDQVJPOzs7OzhCQVdDO0FBQ1IsV0FBSyxVQUFMLENBQWdCLEtBQWhCLENBQXNCLEtBQUssZ0JBQUwsQ0FBdEIsQ0FEUTs7Ozt3Q0FJVTtBQUNsQixVQUFJLGFBQWEsS0FBSyxVQUFMO1VBQ2Isb0JBQW9CLFdBQVcsb0JBQVgsRUFBcEI7VUFDQSxXQUFXLEtBQUssUUFBTCxFQUFYLENBSGM7O0FBS2xCLHdCQUFrQixLQUFsQixDQUF3QixRQUF4QixFQUxrQjs7OzsrQkFRVDtBQUNULFVBQUksUUFBUSxLQUFLLFVBQUwsSUFBbUIsRUFBbkI7O0FBQ1IsY0FBUSxLQUFLLEtBQUw7VUFDUixXQUFXO0FBQ1QsZUFBTyxLQUFQO0FBQ0EsZUFBTyxLQUFQO09BRkYsQ0FISzs7QUFRVCxZQUFNLFFBQU4sR0FBaUIsS0FBSyxnQkFBTDs7QUFSUixhQVVGLFFBQVAsQ0FWUzs7OztTQTNEUDs7O0FBeUVOLE9BQU8sT0FBUCxHQUFpQixlQUFqQiIsImZpbGUiOiJqc3hSZWFjdEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEpTWFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5jaGlsZEpTWEVsZW1lbnRzID0gY2hpbGRKU1hFbGVtZW50cztcblxuICAgIHZhciBnZXRJbml0aWFsU3RhdGUgPSByZWFjdENsYXNzLmdldEdldEluaXRpYWxTdGF0ZSgpLFxuICAgICAgICBpbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7ICAvLy9cblxuICAgIHRoaXMuanN4RWxlbWVudCA9IHVuZGVmaW5lZDsgIC8vL1xuICAgIFxuICAgIHRoaXMucGFyZW50SlNYRWxlbWVudCA9IHVuZGVmaW5lZDsgIC8vL1xuICB9XG4gIFxuICBtb3VudChwYXJlbnRKU1hFbGVtZW50KSB7XG4gICAgdGhpcy5wYXJlbnRKU1hFbGVtZW50ID0gcGFyZW50SlNYRWxlbWVudDtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgXG4gICAgdGhpcy5yZW1vdW50KCk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMuanN4RWxlbWVudC5yZW1vdmUoKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgcmVhY3RDbGFzcyA9IHRoaXMucmVhY3RDbGFzcyxcbiAgICAgICAgcmVuZGVyID0gcmVhY3RDbGFzcy5nZXRSZW5kZXIoKSxcbiAgICAgICAgZGlzcGxheU5hbWUgPSByZWFjdENsYXNzLmdldERpc3BsYXlOYW1lKCksXG4gICAgICAgIGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZSgpO1xuXG4gICAgaW5zdGFuY2UuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcblxuICAgIHRoaXMuanN4RWxlbWVudCA9IHJlbmRlci5hcHBseShpbnN0YW5jZSk7XG4gIH1cblxuICByZW1vdW50KCkge1xuICAgIHRoaXMuanN4RWxlbWVudC5tb3VudCh0aGlzLnBhcmVudEpTWEVsZW1lbnQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIHJlYWN0Q2xhc3MgPSB0aGlzLnJlYWN0Q2xhc3MsXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50ID0gcmVhY3RDbGFzcy5nZXRDb21wb25lbnREaWRNb3VudCgpLFxuICAgICAgICBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UoKTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50LmFwcGx5KGluc3RhbmNlKTtcbiAgfVxuXG4gIGluc3RhbmNlKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcGVydGllcyB8fCB7fSwgIC8vL1xuICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgIGluc3RhbmNlID0ge1xuICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgICAgfTtcblxuICAgIHByb3BzLmNoaWxkcmVuID0gdGhpcy5jaGlsZEpTWEVsZW1lbnRzOyAvLy9cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTWFJlYWN0RWxlbWVudDtcbiJdfQ==