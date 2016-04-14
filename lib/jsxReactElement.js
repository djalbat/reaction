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

      var reactClass = this.reactClass,
          componentDidMount = reactClass.getComponentDidMount(),
          instance = this.instance();

      componentDidMount.apply(instance);
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
    key: 'remount',
    value: function remount() {
      this.jsxElement.mount(this.parentJSXElement);
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
    key: 'instance',
    value: function instance() {
      var props = this.properties || {},
          ///
      state = this.state,
          instance = {
        props: props,
        state: state
      };

      props.children = this.childJSXElements; ///;

      return instance;
    }
  }]);

  return JSXReactElement;
}();

module.exports = JSXReactElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hSZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxlQUNKLENBQVksVUFBWixFQUF3QixVQUF4QixFQUFvQyxnQkFBcEMsRUFBc0Q7MEJBRGxELGlCQUNrRDs7QUFDcEQsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBRG9EO0FBRXBELFNBQUssVUFBTCxHQUFrQixVQUFsQixDQUZvRDtBQUdwRCxTQUFLLGdCQUFMLEdBQXdCLGdCQUF4QixDQUhvRDs7QUFLcEQsUUFBSSxrQkFBa0IsV0FBVyxrQkFBWCxFQUFsQjtRQUNBLGVBQWUsaUJBQWYsQ0FOZ0Q7O0FBUXBELFNBQUssS0FBTCxHQUFhLFlBQWI7O0FBUm9ELFFBVXBELENBQUssVUFBTCxHQUFrQixTQUFsQjtBQVZvRCxRQVdwRCxDQUFLLGdCQUFMLEdBQXdCLFNBQXhCO0FBWG9ELEdBQXREOztlQURJOzswQkFlRSxrQkFBa0I7QUFDdEIsV0FBSyxnQkFBTCxHQUF3QixnQkFBeEIsQ0FEc0I7O0FBR3RCLFdBQUssTUFBTCxHQUhzQjs7QUFLdEIsV0FBSyxPQUFMLEdBTHNCOztBQU90QixVQUFJLGFBQWEsS0FBSyxVQUFMO1VBQ2Isb0JBQW9CLFdBQVcsb0JBQVgsRUFBcEI7VUFDQSxXQUFXLEtBQUssUUFBTCxFQUFYLENBVGtCOztBQVd0Qix3QkFBa0IsS0FBbEIsQ0FBd0IsUUFBeEIsRUFYc0I7Ozs7NkJBY2YsT0FBTztBQUNkLFdBQUssS0FBTCxHQUFhLEtBQWIsQ0FEYzs7QUFHZCxXQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsR0FIYzs7QUFLZCxXQUFLLE1BQUwsR0FMYzs7QUFPZCxXQUFLLE9BQUwsR0FQYzs7Ozs4QkFVTjtBQUNSLFdBQUssVUFBTCxDQUFnQixLQUFoQixDQUFzQixLQUFLLGdCQUFMLENBQXRCLENBRFE7Ozs7NkJBSUQ7QUFDUCxVQUFJLGFBQWEsS0FBSyxVQUFMO1VBQ2IsU0FBUyxXQUFXLFNBQVgsRUFBVDtVQUNBLGNBQWMsV0FBVyxjQUFYLEVBQWQ7VUFDQSxXQUFXLEtBQUssUUFBTCxFQUFYLENBSkc7O0FBTVAsZUFBUyxXQUFULEdBQXVCLFdBQXZCLENBTk87O0FBUVAsV0FBSyxVQUFMLEdBQWtCLE9BQU8sS0FBUCxDQUFhLFFBQWIsQ0FBbEIsQ0FSTzs7OzsrQkFXRTtBQUNULFVBQUksUUFBUSxLQUFLLFVBQUwsSUFBbUIsRUFBbkI7O0FBQ1IsY0FBUSxLQUFLLEtBQUw7VUFDUixXQUFXO0FBQ1QsZUFBTyxLQUFQO0FBQ0EsZUFBTyxLQUFQO09BRkYsQ0FISzs7QUFRVCxZQUFNLFFBQU4sR0FBaUIsS0FBSyxnQkFBTDs7QUFSUixhQVVGLFFBQVAsQ0FWUzs7OztTQXREUDs7O0FBb0VOLE9BQU8sT0FBUCxHQUFpQixlQUFqQiIsImZpbGUiOiJqc3hSZWFjdEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEpTWFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5jaGlsZEpTWEVsZW1lbnRzID0gY2hpbGRKU1hFbGVtZW50cztcblxuICAgIHZhciBnZXRJbml0aWFsU3RhdGUgPSByZWFjdENsYXNzLmdldEdldEluaXRpYWxTdGF0ZSgpLFxuICAgICAgICBpbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7ICAvLy9cblxuICAgIHRoaXMuanN4RWxlbWVudCA9IHVuZGVmaW5lZDsgIC8vL1xuICAgIHRoaXMucGFyZW50SlNYRWxlbWVudCA9IHVuZGVmaW5lZDsgIC8vL1xuICB9XG4gIFxuICBtb3VudChwYXJlbnRKU1hFbGVtZW50KSB7XG4gICAgdGhpcy5wYXJlbnRKU1hFbGVtZW50ID0gcGFyZW50SlNYRWxlbWVudDtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgXG4gICAgdGhpcy5yZW1vdW50KCk7XG5cbiAgICB2YXIgcmVhY3RDbGFzcyA9IHRoaXMucmVhY3RDbGFzcyxcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQgPSByZWFjdENsYXNzLmdldENvbXBvbmVudERpZE1vdW50KCksXG4gICAgICAgIGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZSgpO1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQuYXBwbHkoaW5zdGFuY2UpO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLmpzeEVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICByZW1vdW50KCkge1xuICAgIHRoaXMuanN4RWxlbWVudC5tb3VudCh0aGlzLnBhcmVudEpTWEVsZW1lbnQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciByZWFjdENsYXNzID0gdGhpcy5yZWFjdENsYXNzLFxuICAgICAgICByZW5kZXIgPSByZWFjdENsYXNzLmdldFJlbmRlcigpLFxuICAgICAgICBkaXNwbGF5TmFtZSA9IHJlYWN0Q2xhc3MuZ2V0RGlzcGxheU5hbWUoKSxcbiAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG5cbiAgICBpbnN0YW5jZS5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuXG4gICAgdGhpcy5qc3hFbGVtZW50ID0gcmVuZGVyLmFwcGx5KGluc3RhbmNlKTtcbiAgfVxuXG4gIGluc3RhbmNlKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcGVydGllcyB8fCB7fSwgIC8vL1xuICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgIGluc3RhbmNlID0ge1xuICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgICAgfTtcblxuICAgIHByb3BzLmNoaWxkcmVuID0gdGhpcy5jaGlsZEpTWEVsZW1lbnRzOyAvLy87XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBKU1hSZWFjdEVsZW1lbnQ7XG4iXX0=
