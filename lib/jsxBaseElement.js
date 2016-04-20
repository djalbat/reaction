'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXBaseElement = function () {
  function JSXBaseElement(properties, children) {
    _classCallCheck(this, JSXBaseElement);

    var props = Object.assign({}, properties, { children: children }),
        forceUpdate = this.forceUpdate.bind(this);

    this.instance = Object.assign({}, { props: props }, { forceUpdate: forceUpdate });

    this.jsxElement = undefined; ///
  }

  _createClass(JSXBaseElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.jsxElement.mount(parentJSXElement);

      this.componentDidMount();
    }
  }, {
    key: 'remount',
    value: function remount(oldJSXElement) {
      this.jsxElement.remount(oldJSXElement);
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.componentWillUnmount();

      this.jsxElement.unmount();
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      var oldJSXElement = this.jsxElement;

      this.render();

      this.remount(oldJSXElement);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.jsxElement.remove();
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(jsxElement) {
      this.jsxElement.appendAfter(jsxElement);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }]);

  return JSXBaseElement;
}();

module.exports = JSXBaseElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hCYXNlRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU07QUFDSixXQURJLGNBQ0osQ0FBWSxVQUFaLEVBQXdCLFFBQXhCLEVBQWtDOzBCQUQ5QixnQkFDOEI7O0FBQ2hDLFFBQU0sUUFBUSxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLFVBQWxCLEVBQThCLEVBQUMsVUFBVSxRQUFWLEVBQS9CLENBQVI7UUFDQSxjQUFjLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUFkLENBRjBCOztBQUloQyxTQUFLLFFBQUwsR0FBZ0IsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixFQUFDLE9BQU8sS0FBUCxFQUFuQixFQUFrQyxFQUFDLGFBQWEsV0FBYixFQUFuQyxDQUFoQixDQUpnQzs7QUFNaEMsU0FBSyxVQUFMLEdBQWtCLFNBQWxCO0FBTmdDLEdBQWxDOztlQURJOzswQkFVRSxrQkFBa0I7QUFDdEIsV0FBSyxVQUFMLENBQWdCLEtBQWhCLENBQXNCLGdCQUF0QixFQURzQjs7QUFHdEIsV0FBSyxpQkFBTCxHQUhzQjs7Ozs0QkFNaEIsZUFBZTtBQUNyQixXQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBd0IsYUFBeEIsRUFEcUI7Ozs7OEJBSWI7QUFDUixXQUFLLG9CQUFMLEdBRFE7O0FBR1IsV0FBSyxVQUFMLENBQWdCLE9BQWhCLEdBSFE7Ozs7a0NBTUk7QUFDWixVQUFJLGdCQUFnQixLQUFLLFVBQUwsQ0FEUjs7QUFHWixXQUFLLE1BQUwsR0FIWTs7QUFLWixXQUFLLE9BQUwsQ0FBYSxhQUFiLEVBTFk7Ozs7NkJBUUw7QUFDUCxXQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsR0FETzs7OztnQ0FJRyxZQUFZO0FBQ3RCLFdBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixVQUE1QixFQURzQjs7Ozt3Q0FJSjs7OzJDQUlHOzs7U0E5Q25COzs7QUFtRE4sT0FBTyxPQUFQLEdBQWlCLGNBQWpCIiwiZmlsZSI6ImpzeEJhc2VFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBKU1hCYXNlRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7Y2hpbGRyZW46IGNoaWxkcmVufSksXG4gICAgICAgICAgZm9yY2VVcGRhdGUgPSB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmluc3RhbmNlID0gT2JqZWN0LmFzc2lnbih7fSwge3Byb3BzOiBwcm9wc30sIHtmb3JjZVVwZGF0ZTogZm9yY2VVcGRhdGV9KTtcblxuICAgIHRoaXMuanN4RWxlbWVudCA9IHVuZGVmaW5lZDsgIC8vL1xuICB9XG4gIFxuICBtb3VudChwYXJlbnRKU1hFbGVtZW50KSB7XG4gICAgdGhpcy5qc3hFbGVtZW50Lm1vdW50KHBhcmVudEpTWEVsZW1lbnQpO1xuICAgIFxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgfVxuXG4gIHJlbW91bnQob2xkSlNYRWxlbWVudCkge1xuICAgIHRoaXMuanN4RWxlbWVudC5yZW1vdW50KG9sZEpTWEVsZW1lbnQpO1xuICB9XG4gIFxuICB1bm1vdW50KCkge1xuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgICBcbiAgICB0aGlzLmpzeEVsZW1lbnQudW5tb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUoKSB7XG4gICAgdmFyIG9sZEpTWEVsZW1lbnQgPSB0aGlzLmpzeEVsZW1lbnQ7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgdGhpcy5yZW1vdW50KG9sZEpTWEVsZW1lbnQpXG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5qc3hFbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgYXBwZW5kQWZ0ZXIoanN4RWxlbWVudCkge1xuICAgIHRoaXMuanN4RWxlbWVudC5hcHBlbmRBZnRlcihqc3hFbGVtZW50KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYQmFzZUVsZW1lbnQ7XG4iXX0=