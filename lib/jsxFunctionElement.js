'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXFunctionElement = function () {
  function JSXFunctionElement(reactFunction, properties, childJSXElements) {
    _classCallCheck(this, JSXFunctionElement);

    this.reactFunction = reactFunction;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    this.jsxElement = undefined; ///

    this.parentJSXElement = undefined; ///
  }

  _createClass(JSXFunctionElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.parentJSXElement = parentJSXElement;

      this.render();

      this.remount();
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref = this.properties; ///

      _ref.children = this.childJSXElements; ///

      this.jsxElement = this.reactFunction(_ref);
    }
  }, {
    key: 'remount',
    value: function remount() {
      this.jsxElement.mount(this.parentJSXElement);
    }
  }]);

  return JSXFunctionElement;
}();

module.exports = JSXFunctionElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hGdW5jdGlvbkVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxrQkFDSixDQUFZLGFBQVosRUFBMkIsVUFBM0IsRUFBdUMsZ0JBQXZDLEVBQXlEOzBCQURyRCxvQkFDcUQ7O0FBQ3ZELFNBQUssYUFBTCxHQUFxQixhQUFyQixDQUR1RDtBQUV2RCxTQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FGdUQ7QUFHdkQsU0FBSyxnQkFBTCxHQUF3QixnQkFBeEIsQ0FIdUQ7O0FBS3ZELFNBQUssVUFBTCxHQUFrQixTQUFsQjs7QUFMdUQsUUFPdkQsQ0FBSyxnQkFBTCxHQUF3QixTQUF4QjtBQVB1RCxHQUF6RDs7ZUFESTs7MEJBV0Usa0JBQWtCO0FBQ3RCLFdBQUssZ0JBQUwsR0FBd0IsZ0JBQXhCLENBRHNCOztBQUd0QixXQUFLLE1BQUwsR0FIc0I7O0FBS3RCLFdBQUssT0FBTCxHQUxzQjs7Ozs2QkFRZjtBQUNQLFVBQUksT0FBTyxLQUFLLFVBQUw7O0FBREosVUFHUCxDQUFLLFFBQUwsR0FBZ0IsS0FBSyxnQkFBTDs7QUFIVCxVQUtQLENBQUssVUFBTCxHQUFrQixLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBbEIsQ0FMTzs7Ozs4QkFRQztBQUNSLFdBQUssVUFBTCxDQUFnQixLQUFoQixDQUFzQixLQUFLLGdCQUFMLENBQXRCLENBRFE7Ozs7U0EzQk47OztBQWdDTixPQUFPLE9BQVAsR0FBaUIsa0JBQWpCIiwiZmlsZSI6ImpzeEZ1bmN0aW9uRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgSlNYRnVuY3Rpb25FbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cykge1xuICAgIHRoaXMucmVhY3RGdW5jdGlvbiA9IHJlYWN0RnVuY3Rpb247XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB0aGlzLmNoaWxkSlNYRWxlbWVudHMgPSBjaGlsZEpTWEVsZW1lbnRzO1xuXG4gICAgdGhpcy5qc3hFbGVtZW50ID0gdW5kZWZpbmVkOyAgLy8vXG5cbiAgICB0aGlzLnBhcmVudEpTWEVsZW1lbnQgPSB1bmRlZmluZWQ7ICAvLy9cbiAgfVxuICBcbiAgbW91bnQocGFyZW50SlNYRWxlbWVudCkge1xuICAgIHRoaXMucGFyZW50SlNYRWxlbWVudCA9IHBhcmVudEpTWEVsZW1lbnQ7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIFxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBfcmVmID0gdGhpcy5wcm9wZXJ0aWVzOyAvLy9cblxuICAgIF9yZWYuY2hpbGRyZW4gPSB0aGlzLmNoaWxkSlNYRWxlbWVudHM7IC8vL1xuXG4gICAgdGhpcy5qc3hFbGVtZW50ID0gdGhpcy5yZWFjdEZ1bmN0aW9uKF9yZWYpO1xuICB9XG5cbiAgcmVtb3VudCgpIHtcbiAgICB0aGlzLmpzeEVsZW1lbnQubW91bnQodGhpcy5wYXJlbnRKU1hFbGVtZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTWEZ1bmN0aW9uRWxlbWVudDtcbiJdfQ==