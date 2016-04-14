'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXReactElement = function () {
  function JSXReactElement(reactClass, properties, childJSXElements) {
    _classCallCheck(this, JSXReactElement);

    this.reactClass = reactClass;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

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

      props.children = this.childJSXElements; ///;

      var reactClass = this.reactClass,
          render = reactClass.getRender(),
          displayName = reactClass.getDisplayName(),
          instance = {
        props: props,
        state: state,
        displayName: displayName
      };

      this.jsxElement = render.apply(instance);
    }
  }]);

  return JSXReactElement;
}();

module.exports = JSXReactElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hSZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxlQUNKLENBQVksVUFBWixFQUF3QixVQUF4QixFQUFvQyxnQkFBcEMsRUFBc0Q7MEJBRGxELGlCQUNrRDs7QUFDcEQsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBRG9EO0FBRXBELFNBQUssVUFBTCxHQUFrQixVQUFsQixDQUZvRDtBQUdwRCxTQUFLLGdCQUFMLEdBQXdCLGdCQUF4QixDQUhvRDs7QUFLcEQsU0FBSyxVQUFMLEdBQWtCLElBQWxCLENBTG9EOztBQU9wRCxTQUFLLGdCQUFMLEdBQXdCLElBQXhCLENBUG9EO0dBQXREOztlQURJOzswQkFXRSxrQkFBa0I7QUFDdEIsVUFBSSxhQUFhLEtBQUssVUFBTDtVQUNiLGtCQUFrQixXQUFXLGtCQUFYLEVBQWxCO1VBQ0EsZUFBZSxpQkFBZixDQUhrQjs7QUFLdEIsV0FBSyxLQUFMLEdBQWEsWUFBYixDQUxzQjs7QUFPdEIsV0FBSyxNQUFMLEdBUHNCOztBQVN0QixXQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBc0IsZ0JBQXRCLEVBVHNCOztBQVd0QixXQUFLLGdCQUFMLEdBQXdCLGdCQUF4QixDQVhzQjs7Ozs2QkFjZixPQUFPO0FBQ2QsV0FBSyxLQUFMLEdBQWEsS0FBYixDQURjOztBQUdkLFdBQUssVUFBTCxDQUFnQixNQUFoQixHQUhjOztBQUtkLFdBQUssTUFBTCxHQUxjOztBQU9kLFVBQUksbUJBQW1CLEtBQUssZ0JBQUwsQ0FQVDs7QUFTZCxXQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBc0IsZ0JBQXRCO0FBVGM7Ozs2QkFZUDtBQUNQLFVBQUksUUFBUSxLQUFLLFVBQUwsSUFBbUIsRUFBbkI7O0FBQ1IsY0FBUSxLQUFLLEtBQUwsQ0FGTDs7QUFJUCxZQUFNLFFBQU4sR0FBaUIsS0FBSyxnQkFBTDs7QUFKVixVQU1ILGFBQWEsS0FBSyxVQUFMO1VBQ2IsU0FBUyxXQUFXLFNBQVgsRUFBVDtVQUNBLGNBQWMsV0FBVyxjQUFYLEVBQWQ7VUFDQSxXQUFXO0FBQ1QsZUFBTyxLQUFQO0FBQ0EsZUFBTyxLQUFQO0FBQ0EscUJBQWEsV0FBYjtPQUhGLENBVEc7O0FBZVAsV0FBSyxVQUFMLEdBQWtCLE9BQU8sS0FBUCxDQUFhLFFBQWIsQ0FBbEIsQ0FmTzs7OztTQXJDTDs7O0FBd0ROLE9BQU8sT0FBUCxHQUFpQixlQUFqQiIsImZpbGUiOiJqc3hSZWFjdEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEpTWFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5jaGlsZEpTWEVsZW1lbnRzID0gY2hpbGRKU1hFbGVtZW50cztcblxuICAgIHRoaXMuanN4RWxlbWVudCA9IG51bGw7XG5cbiAgICB0aGlzLnBhcmVudEpTWEVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgbW91bnQocGFyZW50SlNYRWxlbWVudCkge1xuICAgIHZhciByZWFjdENsYXNzID0gdGhpcy5yZWFjdENsYXNzLFxuICAgICAgICBnZXRJbml0aWFsU3RhdGUgPSByZWFjdENsYXNzLmdldEdldEluaXRpYWxTdGF0ZSgpLFxuICAgICAgICBpbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgdGhpcy5qc3hFbGVtZW50Lm1vdW50KHBhcmVudEpTWEVsZW1lbnQpO1xuXG4gICAgdGhpcy5wYXJlbnRKU1hFbGVtZW50ID0gcGFyZW50SlNYRWxlbWVudDtcbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5qc3hFbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICAgIHZhciBwYXJlbnRKU1hFbGVtZW50ID0gdGhpcy5wYXJlbnRKU1hFbGVtZW50O1xuXG4gICAgdGhpcy5qc3hFbGVtZW50Lm1vdW50KHBhcmVudEpTWEVsZW1lbnQpOyAgLy8vXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wZXJ0aWVzIHx8IHt9LCAgLy8vXG4gICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBcbiAgICBwcm9wcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRKU1hFbGVtZW50czsgLy8vO1xuXG4gICAgdmFyIHJlYWN0Q2xhc3MgPSB0aGlzLnJlYWN0Q2xhc3MsXG4gICAgICAgIHJlbmRlciA9IHJlYWN0Q2xhc3MuZ2V0UmVuZGVyKCksXG4gICAgICAgIGRpc3BsYXlOYW1lID0gcmVhY3RDbGFzcy5nZXREaXNwbGF5TmFtZSgpLFxuICAgICAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZVxuICAgICAgICB9OyBcblxuICAgIHRoaXMuanN4RWxlbWVudCA9IHJlbmRlci5hcHBseShpbnN0YW5jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBKU1hSZWFjdEVsZW1lbnQ7XG4iXX0=
