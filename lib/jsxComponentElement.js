'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXComponentElement = function () {
  function JSXComponentElement(reactComponent, properties, childJSXElements) {
    _classCallCheck(this, JSXComponentElement);

    this.reactComponent = reactComponent;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    this.jsxElement = undefined; ///

    this.parentJSXElement = undefined; ///
  }

  _createClass(JSXComponentElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.parentJSXElement = parentJSXElement;

      this.render();

      this.remount();
    }
  }, {
    key: 'render',
    value: function render() {
      var instance = this.instance();

      this.jsxElement = this.reactComponent.render.apply(instance);
    }
  }, {
    key: 'remount',
    value: function remount() {
      this.jsxElement.mount(this.parentJSXElement);
    }
  }, {
    key: 'instance',
    value: function instance() {
      var props = this.properties || {},
          ///
      instance = {
        props: props
      };

      instance.children = this.childJSXElements; ///

      return instance;
    }
  }]);

  return JSXComponentElement;
}();

module.exports = JSXComponentElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hDb21wb25lbnRFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTTtBQUNKLFdBREksbUJBQ0osQ0FBWSxjQUFaLEVBQTRCLFVBQTVCLEVBQXdDLGdCQUF4QyxFQUEwRDswQkFEdEQscUJBQ3NEOztBQUN4RCxTQUFLLGNBQUwsR0FBc0IsY0FBdEIsQ0FEd0Q7QUFFeEQsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBRndEO0FBR3hELFNBQUssZ0JBQUwsR0FBd0IsZ0JBQXhCLENBSHdEOztBQUt4RCxTQUFLLFVBQUwsR0FBa0IsU0FBbEI7O0FBTHdELFFBT3hELENBQUssZ0JBQUwsR0FBd0IsU0FBeEI7QUFQd0QsR0FBMUQ7O2VBREk7OzBCQVdFLGtCQUFrQjtBQUN0QixXQUFLLGdCQUFMLEdBQXdCLGdCQUF4QixDQURzQjs7QUFHdEIsV0FBSyxNQUFMLEdBSHNCOztBQUt0QixXQUFLLE9BQUwsR0FMc0I7Ozs7NkJBUWY7QUFDUCxVQUFJLFdBQVcsS0FBSyxRQUFMLEVBQVgsQ0FERzs7QUFHUCxXQUFLLFVBQUwsR0FBa0IsS0FBSyxjQUFMLENBQW9CLE1BQXBCLENBQTJCLEtBQTNCLENBQWlDLFFBQWpDLENBQWxCLENBSE87Ozs7OEJBTUM7QUFDUixXQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBc0IsS0FBSyxnQkFBTCxDQUF0QixDQURROzs7OytCQUlDO0FBQ1QsVUFBSSxRQUFRLEtBQUssVUFBTCxJQUFtQixFQUFuQjs7QUFDUixpQkFBVztBQUNULGVBQU8sS0FBUDtPQURGLENBRks7O0FBTVQsZUFBUyxRQUFULEdBQW9CLEtBQUssZ0JBQUw7O0FBTlgsYUFRRixRQUFQLENBUlM7Ozs7U0E3QlA7OztBQXlDTixPQUFPLE9BQVAsR0FBaUIsbUJBQWpCIiwiZmlsZSI6ImpzeENvbXBvbmVudEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEpTWENvbXBvbmVudEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENvbXBvbmVudCwgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cykge1xuICAgIHRoaXMucmVhY3RDb21wb25lbnQgPSByZWFjdENvbXBvbmVudDtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMuY2hpbGRKU1hFbGVtZW50cyA9IGNoaWxkSlNYRWxlbWVudHM7XG5cbiAgICB0aGlzLmpzeEVsZW1lbnQgPSB1bmRlZmluZWQ7ICAvLy9cblxuICAgIHRoaXMucGFyZW50SlNYRWxlbWVudCA9IHVuZGVmaW5lZDsgIC8vL1xuICB9XG4gIFxuICBtb3VudChwYXJlbnRKU1hFbGVtZW50KSB7XG4gICAgdGhpcy5wYXJlbnRKU1hFbGVtZW50ID0gcGFyZW50SlNYRWxlbWVudDtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZSgpO1xuICAgIFxuICAgIHRoaXMuanN4RWxlbWVudCA9IHRoaXMucmVhY3RDb21wb25lbnQucmVuZGVyLmFwcGx5KGluc3RhbmNlKTtcbiAgfVxuXG4gIHJlbW91bnQoKSB7XG4gICAgdGhpcy5qc3hFbGVtZW50Lm1vdW50KHRoaXMucGFyZW50SlNYRWxlbWVudCk7XG4gIH1cblxuICBpbnN0YW5jZSgpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BlcnRpZXMgfHwge30sICAvLy9cbiAgICAgICAgaW5zdGFuY2UgPSB7XG4gICAgICAgICAgcHJvcHM6IHByb3BzXG4gICAgICAgIH07XG5cbiAgICBpbnN0YW5jZS5jaGlsZHJlbiA9IHRoaXMuY2hpbGRKU1hFbGVtZW50czsgLy8vXG4gICAgXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYQ29tcG9uZW50RWxlbWVudDtcbiJdfQ==