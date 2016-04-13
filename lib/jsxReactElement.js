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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hSZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxlQUNKLENBQVksVUFBWixFQUF3QixVQUF4QixFQUFvQyxnQkFBcEMsRUFBc0Q7MEJBRGxELGlCQUNrRDs7QUFDcEQsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBRG9EO0FBRXBELFNBQUssVUFBTCxHQUFrQixVQUFsQixDQUZvRDtBQUdwRCxTQUFLLGdCQUFMLEdBQXdCLGdCQUF4QixDQUhvRDs7QUFLcEQsU0FBSyxVQUFMLEdBQWtCLElBQWxCLENBTG9EOztBQU9wRCxTQUFLLGdCQUFMLEdBQXdCLElBQXhCLENBUG9EO0dBQXREOztlQURJOzswQkFXRSxrQkFBa0I7QUFDdEIsVUFBSSxhQUFhLEtBQUssVUFBTDtVQUNiLGtCQUFrQixXQUFXLGtCQUFYLEVBQWxCO1VBQ0EsZUFBZSxpQkFBZixDQUhrQjs7QUFLdEIsV0FBSyxLQUFMLEdBQWEsWUFBYixDQUxzQjs7QUFPdEIsV0FBSyxNQUFMLEdBUHNCOztBQVN0QixXQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBc0IsZ0JBQXRCLEVBVHNCOztBQVd0QixXQUFLLGdCQUFMLEdBQXdCLGdCQUF4QixDQVhzQjs7Ozs2QkFjZixPQUFPO0FBQ2QsV0FBSyxLQUFMLEdBQWEsS0FBYixDQURjOztBQUdkLFdBQUssVUFBTCxDQUFnQixNQUFoQixHQUhjOztBQUtkLFdBQUssTUFBTCxHQUxjOztBQU9kLFVBQUksbUJBQW1CLEtBQUssZ0JBQUwsQ0FQVDs7QUFTZCxXQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBc0IsZ0JBQXRCO0FBVGM7Ozs2QkFZUDtBQUNQLFVBQUksUUFBUSxLQUFLLFVBQUwsSUFBbUIsRUFBbkI7O0FBQ1IsY0FBUSxLQUFLLEtBQUwsQ0FGTDs7QUFJUCxZQUFNLFFBQU4sR0FBaUIsS0FBSyxnQkFBTDs7QUFKVixVQU1ILGFBQWEsS0FBSyxVQUFMO1VBQ2IsU0FBUyxXQUFXLFNBQVgsRUFBVDtVQUNBLFdBQVc7QUFDVCxlQUFPLEtBQVA7QUFDQSxlQUFPLEtBQVA7T0FGRixDQVJHOztBQWFQLFdBQUssVUFBTCxHQUFrQixPQUFPLEtBQVAsQ0FBYSxRQUFiLENBQWxCLENBYk87Ozs7U0FyQ0w7OztBQXNETixPQUFPLE9BQVAsR0FBaUIsZUFBakIiLCJmaWxlIjoianN4UmVhY3RFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBKU1hSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENsYXNzLCBwcm9wZXJ0aWVzLCBjaGlsZEpTWEVsZW1lbnRzKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzID0gcmVhY3RDbGFzcztcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMuY2hpbGRKU1hFbGVtZW50cyA9IGNoaWxkSlNYRWxlbWVudHM7XG5cbiAgICB0aGlzLmpzeEVsZW1lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5wYXJlbnRKU1hFbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudEpTWEVsZW1lbnQpIHtcbiAgICB2YXIgcmVhY3RDbGFzcyA9IHRoaXMucmVhY3RDbGFzcyxcbiAgICAgICAgZ2V0SW5pdGlhbFN0YXRlID0gcmVhY3RDbGFzcy5nZXRHZXRJbml0aWFsU3RhdGUoKSxcbiAgICAgICAgaW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICAgIHRoaXMuanN4RWxlbWVudC5tb3VudChwYXJlbnRKU1hFbGVtZW50KTtcblxuICAgIHRoaXMucGFyZW50SlNYRWxlbWVudCA9IHBhcmVudEpTWEVsZW1lbnQ7XG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMuanN4RWxlbWVudC5yZW1vdmUoKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICB2YXIgcGFyZW50SlNYRWxlbWVudCA9IHRoaXMucGFyZW50SlNYRWxlbWVudDtcblxuICAgIHRoaXMuanN4RWxlbWVudC5tb3VudChwYXJlbnRKU1hFbGVtZW50KTsgIC8vL1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcGVydGllcyB8fCB7fSwgIC8vL1xuICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgXG4gICAgcHJvcHMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkSlNYRWxlbWVudHM7IC8vLztcblxuICAgIHZhciByZWFjdENsYXNzID0gdGhpcy5yZWFjdENsYXNzLFxuICAgICAgICByZW5kZXIgPSByZWFjdENsYXNzLmdldFJlbmRlcigpLFxuICAgICAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH07IFxuXG4gICAgdGhpcy5qc3hFbGVtZW50ID0gcmVuZGVyLmFwcGx5KGluc3RhbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTWFJlYWN0RWxlbWVudDtcbiJdfQ==
