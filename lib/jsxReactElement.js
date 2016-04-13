'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXReactElement = function () {
  function JSXReactElement(reactClass, properties) {
    _classCallCheck(this, JSXReactElement);

    this.reactClass = reactClass;
    this.properties = properties;

    this.jsxElement = null;

    this.parentJSXElement = null;
  }

  _createClass(JSXReactElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      var reactClass = this.reactClass,
          getInitialState = reactClass.getGetInitialState(),
          initialState = getInitialState();

      this.state = initialState;

      this.render();

      this.jsxElement.mount(parentJSXElement);

      this.parentJSXElement = parentJSXElement;
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.jsxElement.remove();

      this.render();

      var parentJSXElement = this.parentJSXElement;

      this.jsxElement.mount(parentJSXElement); ///
    }
  }, {
    key: 'render',
    value: function render() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hSZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxlQUNKLENBQVksVUFBWixFQUF3QixVQUF4QixFQUFvQzswQkFEaEMsaUJBQ2dDOztBQUNsQyxTQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FEa0M7QUFFbEMsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBRmtDOztBQUlsQyxTQUFLLFVBQUwsR0FBa0IsSUFBbEIsQ0FKa0M7O0FBTWxDLFNBQUssZ0JBQUwsR0FBd0IsSUFBeEIsQ0FOa0M7R0FBcEM7O2VBREk7OzBCQVVFLGtCQUFrQjtBQUN0QixVQUFJLGFBQWEsS0FBSyxVQUFMO1VBQ2Isa0JBQWtCLFdBQVcsa0JBQVgsRUFBbEI7VUFDQSxlQUFlLGlCQUFmLENBSGtCOztBQUt0QixXQUFLLEtBQUwsR0FBYSxZQUFiLENBTHNCOztBQU90QixXQUFLLE1BQUwsR0FQc0I7O0FBU3RCLFdBQUssVUFBTCxDQUFnQixLQUFoQixDQUFzQixnQkFBdEIsRUFUc0I7O0FBV3RCLFdBQUssZ0JBQUwsR0FBd0IsZ0JBQXhCLENBWHNCOzs7OzZCQWNmLE9BQU87QUFDZCxXQUFLLEtBQUwsR0FBYSxLQUFiLENBRGM7O0FBR2QsV0FBSyxVQUFMLENBQWdCLE1BQWhCLEdBSGM7O0FBS2QsV0FBSyxNQUFMLEdBTGM7O0FBT2QsVUFBSSxtQkFBbUIsS0FBSyxnQkFBTCxDQVBUOztBQVNkLFdBQUssVUFBTCxDQUFnQixLQUFoQixDQUFzQixnQkFBdEI7QUFUYzs7OzZCQVlQO0FBQ1AsVUFBSSxRQUFRLEtBQUssVUFBTCxJQUFtQixFQUFuQjs7QUFDUixjQUFRLEtBQUssS0FBTDs7OztBQUZMLFVBTUgsYUFBYSxLQUFLLFVBQUw7VUFDYixTQUFTLFdBQVcsU0FBWCxFQUFUO1VBQ0EsV0FBVztBQUNULGVBQU8sS0FBUDtBQUNBLGVBQU8sS0FBUDtPQUZGLENBUkc7O0FBYVAsV0FBSyxVQUFMLEdBQWtCLE9BQU8sS0FBUCxDQUFhLFFBQWIsQ0FBbEIsQ0FiTzs7OztTQXBDTDs7O0FBcUROLE9BQU8sT0FBUCxHQUFpQixlQUFqQiIsImZpbGUiOiJqc3hSZWFjdEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEpTWFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG5cbiAgICB0aGlzLmpzeEVsZW1lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5wYXJlbnRKU1hFbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudEpTWEVsZW1lbnQpIHtcbiAgICB2YXIgcmVhY3RDbGFzcyA9IHRoaXMucmVhY3RDbGFzcyxcbiAgICAgICAgZ2V0SW5pdGlhbFN0YXRlID0gcmVhY3RDbGFzcy5nZXRHZXRJbml0aWFsU3RhdGUoKSxcbiAgICAgICAgaW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICAgIHRoaXMuanN4RWxlbWVudC5tb3VudChwYXJlbnRKU1hFbGVtZW50KTtcblxuICAgIHRoaXMucGFyZW50SlNYRWxlbWVudCA9IHBhcmVudEpTWEVsZW1lbnQ7XG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMuanN4RWxlbWVudC5yZW1vdmUoKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICB2YXIgcGFyZW50SlNYRWxlbWVudCA9IHRoaXMucGFyZW50SlNYRWxlbWVudDtcblxuICAgIHRoaXMuanN4RWxlbWVudC5tb3VudChwYXJlbnRKU1hFbGVtZW50KTsgIC8vL1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcGVydGllcyB8fCB7fSwgIC8vL1xuICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgXG4gICAgLy8gcHJvcHMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkSlNYRWxlbWVudHM7IC8vLztcblxuICAgIHZhciByZWFjdENsYXNzID0gdGhpcy5yZWFjdENsYXNzLFxuICAgICAgICByZW5kZXIgPSByZWFjdENsYXNzLmdldFJlbmRlcigpLFxuICAgICAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH07IFxuXG4gICAgdGhpcy5qc3hFbGVtZW50ID0gcmVuZGVyLmFwcGx5KGluc3RhbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTWFJlYWN0RWxlbWVudDtcbiJdfQ==
