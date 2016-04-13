'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXRenderedElement = function () {
  function JSXRenderedElement(reactClass, childJSXElements, properties) {
    _classCallCheck(this, JSXRenderedElement);

    this.reactClass = reactClass;
    this.childJSXElements = childJSXElements;
    this.properties = properties;

    this.parentJSXElement = null;

    this.element = null;
  }

  _createClass(JSXRenderedElement, [{
    key: 'render',
    value: function render(parentJSXElement) {
      var reactClass = this.reactClass,
          getInitialState = reactClass.getInitialState || defaultGetInitialState,
          initialState = getInitialState();

      this.state = initialState;

      this.parentJSXElement = parentJSXElement;

      this.renderElement();
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.remove();

      this.renderElement();
    }
  }, {
    key: 'renderElement',
    value: function renderElement() {
      var parentJSXElement = this.parentJSXElement,
          reactClass = this.reactClass,
          children = this.childJSXElements,
          ///
      props = this.properties || {},
          ///
      state = this.state;

      props.children = children;

      var render = reactClass.render,
          instance = {
        props: props,
        state: state
      },
          jsxElement = render.apply(instance); ///

      this.element = jsxElement.element; ///

      parentJSXElement.append(jsxElement);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.element.remove();
    }
  }]);

  return JSXRenderedElement;
}();

module.exports = JSXRenderedElement;

function defaultGetInitialState() {
  var initialState = {};

  return initialState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hSZW5kZXJlZEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxrQkFDSixDQUFZLFVBQVosRUFBd0IsZ0JBQXhCLEVBQTBDLFVBQTFDLEVBQXNEOzBCQURsRCxvQkFDa0Q7O0FBQ3BELFNBQUssVUFBTCxHQUFrQixVQUFsQixDQURvRDtBQUVwRCxTQUFLLGdCQUFMLEdBQXdCLGdCQUF4QixDQUZvRDtBQUdwRCxTQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FIb0Q7O0FBS3BELFNBQUssZ0JBQUwsR0FBd0IsSUFBeEIsQ0FMb0Q7O0FBT3BELFNBQUssT0FBTCxHQUFlLElBQWYsQ0FQb0Q7R0FBdEQ7O2VBREk7OzJCQVdHLGtCQUFrQjtBQUN2QixVQUFJLGFBQWEsS0FBSyxVQUFMO1VBQ2Isa0JBQWtCLFdBQVcsZUFBWCxJQUE4QixzQkFBOUI7VUFDbEIsZUFBZSxpQkFBZixDQUhtQjs7QUFLdkIsV0FBSyxLQUFMLEdBQWEsWUFBYixDQUx1Qjs7QUFPdkIsV0FBSyxnQkFBTCxHQUF3QixnQkFBeEIsQ0FQdUI7O0FBU3ZCLFdBQUssYUFBTCxHQVR1Qjs7Ozs2QkFZaEIsT0FBTztBQUNkLFdBQUssS0FBTCxHQUFhLEtBQWIsQ0FEYzs7QUFHZCxXQUFLLE1BQUwsR0FIYzs7QUFLZCxXQUFLLGFBQUwsR0FMYzs7OztvQ0FRQTtBQUNkLFVBQUksbUJBQW1CLEtBQUssZ0JBQUw7VUFDbkIsYUFBYSxLQUFLLFVBQUw7VUFDYixXQUFXLEtBQUssZ0JBQUw7O0FBQ1gsY0FBUSxLQUFLLFVBQUwsSUFBbUIsRUFBbkI7O0FBQ1IsY0FBUSxLQUFLLEtBQUwsQ0FMRTs7QUFPZCxZQUFNLFFBQU4sR0FBaUIsUUFBakIsQ0FQYzs7QUFTZCxVQUFJLFNBQVMsV0FBVyxNQUFYO1VBQ1QsV0FBVztBQUNULGVBQU8sS0FBUDtBQUNBLGVBQU8sS0FBUDtPQUZGO1VBSUEsYUFBYSxPQUFPLEtBQVAsQ0FBYSxRQUFiLENBQWI7O0FBZFUsVUFnQmQsQ0FBSyxPQUFMLEdBQWUsV0FBVyxPQUFYOztBQWhCRCxzQkFrQmQsQ0FBaUIsTUFBakIsQ0FBd0IsVUFBeEIsRUFsQmM7Ozs7NkJBcUJQO0FBQ1AsV0FBSyxPQUFMLENBQWEsTUFBYixHQURPOzs7O1NBcERMOzs7QUF5RE4sT0FBTyxPQUFQLEdBQWlCLGtCQUFqQjs7QUFFQSxTQUFTLHNCQUFULEdBQWtDO0FBQ2hDLE1BQUksZUFBZSxFQUFmLENBRDRCOztBQUdoQyxTQUFPLFlBQVAsQ0FIZ0M7Q0FBbEMiLCJmaWxlIjoianN4UmVuZGVyZWRFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBKU1hSZW5kZXJlZEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENsYXNzLCBjaGlsZEpTWEVsZW1lbnRzLCBwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzID0gcmVhY3RDbGFzcztcbiAgICB0aGlzLmNoaWxkSlNYRWxlbWVudHMgPSBjaGlsZEpTWEVsZW1lbnRzO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG5cbiAgICB0aGlzLnBhcmVudEpTWEVsZW1lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgfVxuICBcbiAgcmVuZGVyKHBhcmVudEpTWEVsZW1lbnQpIHtcbiAgICB2YXIgcmVhY3RDbGFzcyA9IHRoaXMucmVhY3RDbGFzcyxcbiAgICAgICAgZ2V0SW5pdGlhbFN0YXRlID0gcmVhY3RDbGFzcy5nZXRJbml0aWFsU3RhdGUgfHwgZGVmYXVsdEdldEluaXRpYWxTdGF0ZSxcbiAgICAgICAgaW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXG4gICAgdGhpcy5wYXJlbnRKU1hFbGVtZW50ID0gcGFyZW50SlNYRWxlbWVudDtcblxuICAgIHRoaXMucmVuZGVyRWxlbWVudCgpO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5yZW5kZXJFbGVtZW50KCk7XG4gIH1cblxuICByZW5kZXJFbGVtZW50KCkge1xuICAgIHZhciBwYXJlbnRKU1hFbGVtZW50ID0gdGhpcy5wYXJlbnRKU1hFbGVtZW50LFxuICAgICAgICByZWFjdENsYXNzID0gdGhpcy5yZWFjdENsYXNzLFxuICAgICAgICBjaGlsZHJlbiA9IHRoaXMuY2hpbGRKU1hFbGVtZW50cywgLy8vXG4gICAgICAgIHByb3BzID0gdGhpcy5wcm9wZXJ0aWVzIHx8IHt9LCAgLy8vXG4gICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgdmFyIHJlbmRlciA9IHJlYWN0Q2xhc3MucmVuZGVyLFxuICAgICAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH0sXG4gICAgICAgIGpzeEVsZW1lbnQgPSByZW5kZXIuYXBwbHkoaW5zdGFuY2UpOyAvLy9cblxuICAgIHRoaXMuZWxlbWVudCA9IGpzeEVsZW1lbnQuZWxlbWVudDsgIC8vL1xuXG4gICAgcGFyZW50SlNYRWxlbWVudC5hcHBlbmQoanN4RWxlbWVudCk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYUmVuZGVyZWRFbGVtZW50O1xuXG5mdW5jdGlvbiBkZWZhdWx0R2V0SW5pdGlhbFN0YXRlKCkge1xuICB2YXIgaW5pdGlhbFN0YXRlID0ge307XG4gIFxuICByZXR1cm4gaW5pdGlhbFN0YXRlO1xufVxuIl19
