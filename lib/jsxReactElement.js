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

      props.children = this.childJSXElements; ///;

      return instance;
    }
  }]);

  return JSXReactElement;
}();

module.exports = JSXReactElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hSZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxlQUNKLENBQVksVUFBWixFQUF3QixVQUF4QixFQUFvQyxnQkFBcEMsRUFBc0Q7MEJBRGxELGlCQUNrRDs7QUFDcEQsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBRG9EO0FBRXBELFNBQUssVUFBTCxHQUFrQixVQUFsQixDQUZvRDtBQUdwRCxTQUFLLGdCQUFMLEdBQXdCLGdCQUF4QixDQUhvRDs7QUFLcEQsUUFBSSxrQkFBa0IsV0FBVyxrQkFBWCxFQUFsQjtRQUNBLGVBQWUsaUJBQWYsQ0FOZ0Q7O0FBUXBELFNBQUssS0FBTCxHQUFhLFlBQWI7O0FBUm9ELFFBVXBELENBQUssVUFBTCxHQUFrQixTQUFsQjtBQVZvRCxRQVdwRCxDQUFLLGdCQUFMLEdBQXdCLFNBQXhCO0FBWG9ELEdBQXREOztlQURJOzswQkFlRSxrQkFBa0I7QUFDdEIsV0FBSyxnQkFBTCxHQUF3QixnQkFBeEIsQ0FEc0I7O0FBR3RCLFdBQUssTUFBTCxHQUhzQjs7QUFLdEIsV0FBSyxPQUFMLEdBTHNCOztBQU90QixXQUFLLGlCQUFMLEdBUHNCOzs7OzZCQVVmLE9BQU87QUFDZCxXQUFLLEtBQUwsR0FBYSxLQUFiLENBRGM7O0FBR2QsV0FBSyxVQUFMLENBQWdCLE1BQWhCLEdBSGM7O0FBS2QsV0FBSyxNQUFMLEdBTGM7O0FBT2QsV0FBSyxPQUFMLEdBUGM7Ozs7OEJBVU47QUFDUixXQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBc0IsS0FBSyxnQkFBTCxDQUF0QixDQURROzs7OzZCQUlEO0FBQ1AsVUFBSSxhQUFhLEtBQUssVUFBTDtVQUNiLFNBQVMsV0FBVyxTQUFYLEVBQVQ7VUFDQSxjQUFjLFdBQVcsY0FBWCxFQUFkO1VBQ0EsV0FBVyxLQUFLLFFBQUwsRUFBWCxDQUpHOztBQU1QLGVBQVMsV0FBVCxHQUF1QixXQUF2QixDQU5POztBQVFQLFdBQUssVUFBTCxHQUFrQixPQUFPLEtBQVAsQ0FBYSxRQUFiLENBQWxCLENBUk87Ozs7d0NBV1c7QUFDbEIsVUFBSSxhQUFhLEtBQUssVUFBTDtVQUNiLG9CQUFvQixXQUFXLG9CQUFYLEVBQXBCO1VBQ0EsV0FBVyxLQUFLLFFBQUwsRUFBWCxDQUhjOztBQUtsQix3QkFBa0IsS0FBbEIsQ0FBd0IsUUFBeEIsRUFMa0I7Ozs7K0JBUVQ7QUFDVCxVQUFJLFFBQVEsS0FBSyxVQUFMLElBQW1CLEVBQW5COztBQUNSLGNBQVEsS0FBSyxLQUFMO1VBQ1IsV0FBVztBQUNULGVBQU8sS0FBUDtBQUNBLGVBQU8sS0FBUDtPQUZGLENBSEs7O0FBUVQsWUFBTSxRQUFOLEdBQWlCLEtBQUssZ0JBQUw7O0FBUlIsYUFVRixRQUFQLENBVlM7Ozs7U0ExRFA7OztBQXdFTixPQUFPLE9BQVAsR0FBaUIsZUFBakIiLCJmaWxlIjoianN4UmVhY3RFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBKU1hSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENsYXNzLCBwcm9wZXJ0aWVzLCBjaGlsZEpTWEVsZW1lbnRzKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzID0gcmVhY3RDbGFzcztcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMuY2hpbGRKU1hFbGVtZW50cyA9IGNoaWxkSlNYRWxlbWVudHM7XG5cbiAgICB2YXIgZ2V0SW5pdGlhbFN0YXRlID0gcmVhY3RDbGFzcy5nZXRHZXRJbml0aWFsU3RhdGUoKSxcbiAgICAgICAgaW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlOyAgLy8vXG5cbiAgICB0aGlzLmpzeEVsZW1lbnQgPSB1bmRlZmluZWQ7ICAvLy9cbiAgICB0aGlzLnBhcmVudEpTWEVsZW1lbnQgPSB1bmRlZmluZWQ7ICAvLy9cbiAgfVxuICBcbiAgbW91bnQocGFyZW50SlNYRWxlbWVudCkge1xuICAgIHRoaXMucGFyZW50SlNYRWxlbWVudCA9IHBhcmVudEpTWEVsZW1lbnQ7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIFxuICAgIHRoaXMucmVtb3VudCgpO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLmpzeEVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICByZW1vdW50KCkge1xuICAgIHRoaXMuanN4RWxlbWVudC5tb3VudCh0aGlzLnBhcmVudEpTWEVsZW1lbnQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciByZWFjdENsYXNzID0gdGhpcy5yZWFjdENsYXNzLFxuICAgICAgICByZW5kZXIgPSByZWFjdENsYXNzLmdldFJlbmRlcigpLFxuICAgICAgICBkaXNwbGF5TmFtZSA9IHJlYWN0Q2xhc3MuZ2V0RGlzcGxheU5hbWUoKSxcbiAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG5cbiAgICBpbnN0YW5jZS5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuXG4gICAgdGhpcy5qc3hFbGVtZW50ID0gcmVuZGVyLmFwcGx5KGluc3RhbmNlKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciByZWFjdENsYXNzID0gdGhpcy5yZWFjdENsYXNzLFxuICAgICAgICBjb21wb25lbnREaWRNb3VudCA9IHJlYWN0Q2xhc3MuZ2V0Q29tcG9uZW50RGlkTW91bnQoKSxcbiAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG5cbiAgICBjb21wb25lbnREaWRNb3VudC5hcHBseShpbnN0YW5jZSk7XG4gIH1cblxuICBpbnN0YW5jZSgpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BlcnRpZXMgfHwge30sICAvLy9cbiAgICAgICAgc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH07XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRKU1hFbGVtZW50czsgLy8vO1xuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYUmVhY3RFbGVtZW50O1xuIl19