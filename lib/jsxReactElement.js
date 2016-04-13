'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXReactElement = function () {
  function JSXReactElement(reactClass, properties) {
    _classCallCheck(this, JSXReactElement);

    this.reactClass = reactClass;
    this.properties = properties;

    this.jsxElement = null;
  }

  _createClass(JSXReactElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      var reactClass = this.reactClass,
          getInitialState = reactClass.getGetInitialState(),
          initialState = getInitialState();

      this.state = initialState;

      this.update();

      this.jsxElement.mount(parentJSXElement);
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.remove();

      this.update();
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.jsxElement.remove();
    }
  }, {
    key: 'update',
    value: function update() {
      var props = this.properties || {},
          ///
      state = this.state;

      // props.children = this.childJSXElements; ///;

      var reactClass = this.reactClass,
          render = reactClass.getRender(),
          instance = {
        props: props,
        state: state
      };

      this.jsxElement = render.apply(instance);
    }
  }]);

  return JSXReactElement;
}();

module.exports = JSXReactElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hSZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxlQUNKLENBQVksVUFBWixFQUF3QixVQUF4QixFQUFvQzswQkFEaEMsaUJBQ2dDOztBQUNsQyxTQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FEa0M7QUFFbEMsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBRmtDOztBQUlsQyxTQUFLLFVBQUwsR0FBa0IsSUFBbEIsQ0FKa0M7R0FBcEM7O2VBREk7OzBCQVFFLGtCQUFrQjtBQUN0QixVQUFJLGFBQWEsS0FBSyxVQUFMO1VBQ2Isa0JBQWtCLFdBQVcsa0JBQVgsRUFBbEI7VUFDQSxlQUFlLGlCQUFmLENBSGtCOztBQUt0QixXQUFLLEtBQUwsR0FBYSxZQUFiLENBTHNCOztBQU90QixXQUFLLE1BQUwsR0FQc0I7O0FBU3RCLFdBQUssVUFBTCxDQUFnQixLQUFoQixDQUFzQixnQkFBdEIsRUFUc0I7Ozs7NkJBWWYsT0FBTztBQUNkLFdBQUssS0FBTCxHQUFhLEtBQWIsQ0FEYzs7QUFHZCxXQUFLLE1BQUwsR0FIYzs7QUFLZCxXQUFLLE1BQUwsR0FMYzs7Ozs2QkFRUDtBQUFFLFdBQUssVUFBTCxDQUFnQixNQUFoQixHQUFGOzs7OzZCQUVBO0FBQ1AsVUFBSSxRQUFRLEtBQUssVUFBTCxJQUFtQixFQUFuQjs7QUFDUixjQUFRLEtBQUssS0FBTDs7OztBQUZMLFVBTUgsYUFBYSxLQUFLLFVBQUw7VUFDYixTQUFTLFdBQVcsU0FBWCxFQUFUO1VBQ0EsV0FBVztBQUNULGVBQU8sS0FBUDtBQUNBLGVBQU8sS0FBUDtPQUZGLENBUkc7O0FBYVAsV0FBSyxVQUFMLEdBQWtCLE9BQU8sS0FBUCxDQUFhLFFBQWIsQ0FBbEIsQ0FiTzs7OztTQTlCTDs7O0FBK0NOLE9BQU8sT0FBUCxHQUFpQixlQUFqQiIsImZpbGUiOiJqc3hSZWFjdEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEpTWFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG5cbiAgICB0aGlzLmpzeEVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgbW91bnQocGFyZW50SlNYRWxlbWVudCkge1xuICAgIHZhciByZWFjdENsYXNzID0gdGhpcy5yZWFjdENsYXNzLFxuICAgICAgICBnZXRJbml0aWFsU3RhdGUgPSByZWFjdENsYXNzLmdldEdldEluaXRpYWxTdGF0ZSgpLFxuICAgICAgICBpbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgdGhpcy5qc3hFbGVtZW50Lm1vdW50KHBhcmVudEpTWEVsZW1lbnQpO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW92ZSgpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHsgdGhpcy5qc3hFbGVtZW50LnJlbW92ZSgpOyB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcGVydGllcyB8fCB7fSwgIC8vL1xuICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgXG4gICAgLy8gcHJvcHMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkSlNYRWxlbWVudHM7IC8vLztcblxuICAgIHZhciByZWFjdENsYXNzID0gdGhpcy5yZWFjdENsYXNzLFxuICAgICAgICByZW5kZXIgPSByZWFjdENsYXNzLmdldFJlbmRlcigpLFxuICAgICAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH07IFxuXG4gICAgdGhpcy5qc3hFbGVtZW50ID0gcmVuZGVyLmFwcGx5KGluc3RhbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTWFJlYWN0RWxlbWVudDtcbiJdfQ==
