'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXFunctionElement = function () {
  function JSXFunctionElement(reactFunction, properties, childJSXElements) {
    _classCallCheck(this, JSXFunctionElement);

    this.reactFunction = reactFunction;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    var initialState = {}; ///

    this.state = initialState; ///

    this.jsxElement = undefined; ///
    this.parentJSXElement = undefined; ///
  }

  _createClass(JSXFunctionElement, [{
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
      var reactFunction = this.reactFunction,
          properties = this.properties;

      this.jsxElement = reactFunction(properties);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      ///
    }
  }]);

  return JSXFunctionElement;
}();

module.exports = JSXFunctionElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hGdW5jdGlvbkVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxrQkFDSixDQUFZLGFBQVosRUFBMkIsVUFBM0IsRUFBdUMsZ0JBQXZDLEVBQXlEOzBCQURyRCxvQkFDcUQ7O0FBQ3ZELFNBQUssYUFBTCxHQUFxQixhQUFyQixDQUR1RDtBQUV2RCxTQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FGdUQ7QUFHdkQsU0FBSyxnQkFBTCxHQUF3QixnQkFBeEIsQ0FIdUQ7O0FBS3ZELFFBQUksZUFBZSxFQUFmOztBQUxtRCxRQU92RCxDQUFLLEtBQUwsR0FBYSxZQUFiOztBQVB1RCxRQVN2RCxDQUFLLFVBQUwsR0FBa0IsU0FBbEI7QUFUdUQsUUFVdkQsQ0FBSyxnQkFBTCxHQUF3QixTQUF4QjtBQVZ1RCxHQUF6RDs7ZUFESTs7MEJBY0Usa0JBQWtCO0FBQ3RCLFdBQUssZ0JBQUwsR0FBd0IsZ0JBQXhCLENBRHNCOztBQUd0QixXQUFLLE1BQUwsR0FIc0I7O0FBS3RCLFdBQUssT0FBTCxHQUxzQjs7QUFPdEIsV0FBSyxpQkFBTCxHQVBzQjs7Ozs2QkFVZixPQUFPO0FBQ2QsV0FBSyxLQUFMLEdBQWEsS0FBYixDQURjOztBQUdkLFdBQUssVUFBTCxDQUFnQixNQUFoQixHQUhjOztBQUtkLFdBQUssTUFBTCxHQUxjOztBQU9kLFdBQUssT0FBTCxHQVBjOzs7OzhCQVVOO0FBQ1IsV0FBSyxVQUFMLENBQWdCLEtBQWhCLENBQXNCLEtBQUssZ0JBQUwsQ0FBdEIsQ0FEUTs7Ozs2QkFJRDtBQUNQLFVBQUksZ0JBQWdCLEtBQUssYUFBTDtVQUNoQixhQUFhLEtBQUssVUFBTCxDQUZWOztBQUlQLFdBQUssVUFBTCxHQUFrQixjQUFjLFVBQWQsQ0FBbEIsQ0FKTzs7Ozt3Q0FPVzs7Ozs7U0E3Q2hCOzs7QUFrRE4sT0FBTyxPQUFQLEdBQWlCLGtCQUFqQiIsImZpbGUiOiJqc3hGdW5jdGlvbkVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEpTWEZ1bmN0aW9uRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0RnVuY3Rpb24sIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpIHtcbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5jaGlsZEpTWEVsZW1lbnRzID0gY2hpbGRKU1hFbGVtZW50cztcblxuICAgIHZhciBpbml0aWFsU3RhdGUgPSB7fTsgIC8vL1xuXG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTsgIC8vL1xuXG4gICAgdGhpcy5qc3hFbGVtZW50ID0gdW5kZWZpbmVkOyAgLy8vXG4gICAgdGhpcy5wYXJlbnRKU1hFbGVtZW50ID0gdW5kZWZpbmVkOyAgLy8vXG4gIH1cbiAgXG4gIG1vdW50KHBhcmVudEpTWEVsZW1lbnQpIHtcbiAgICB0aGlzLnBhcmVudEpTWEVsZW1lbnQgPSBwYXJlbnRKU1hFbGVtZW50O1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICBcbiAgICB0aGlzLnJlbW91bnQoKTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5qc3hFbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgcmVtb3VudCgpIHtcbiAgICB0aGlzLmpzeEVsZW1lbnQubW91bnQodGhpcy5wYXJlbnRKU1hFbGVtZW50KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgcmVhY3RGdW5jdGlvbiA9IHRoaXMucmVhY3RGdW5jdGlvbixcbiAgICAgICAgcHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHRoaXMuanN4RWxlbWVudCA9IHJlYWN0RnVuY3Rpb24ocHJvcGVydGllcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLy9cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTWEZ1bmN0aW9uRWxlbWVudDtcbiJdfQ==