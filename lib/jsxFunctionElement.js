'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXFunctionElement = function () {
  function JSXFunctionElement(reactFunction, _ref) {
    _classCallCheck(this, JSXFunctionElement);

    this.reactFunction = reactFunction;
    this._ref = _ref;

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
      this.jsxElement = this.reactFunction(this._ref);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hGdW5jdGlvbkVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxrQkFDSixDQUFZLGFBQVosRUFBMkIsSUFBM0IsRUFBaUM7MEJBRDdCLG9CQUM2Qjs7QUFDL0IsU0FBSyxhQUFMLEdBQXFCLGFBQXJCLENBRCtCO0FBRS9CLFNBQUssSUFBTCxHQUFZLElBQVosQ0FGK0I7O0FBSS9CLFNBQUssVUFBTCxHQUFrQixTQUFsQjs7QUFKK0IsUUFNL0IsQ0FBSyxnQkFBTCxHQUF3QixTQUF4QjtBQU4rQixHQUFqQzs7ZUFESTs7MEJBVUUsa0JBQWtCO0FBQ3RCLFdBQUssZ0JBQUwsR0FBd0IsZ0JBQXhCLENBRHNCOztBQUd0QixXQUFLLE1BQUwsR0FIc0I7O0FBS3RCLFdBQUssT0FBTCxHQUxzQjs7Ozs2QkFRZjtBQUNQLFdBQUssVUFBTCxHQUFrQixLQUFLLGFBQUwsQ0FBbUIsS0FBSyxJQUFMLENBQXJDLENBRE87Ozs7OEJBSUM7QUFDUixXQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBc0IsS0FBSyxnQkFBTCxDQUF0QixDQURROzs7O1NBdEJOOzs7QUEyQk4sT0FBTyxPQUFQLEdBQWlCLGtCQUFqQiIsImZpbGUiOiJqc3hGdW5jdGlvbkVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEpTWEZ1bmN0aW9uRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0RnVuY3Rpb24sIF9yZWYpIHtcbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuICAgIHRoaXMuX3JlZiA9IF9yZWY7XG5cbiAgICB0aGlzLmpzeEVsZW1lbnQgPSB1bmRlZmluZWQ7ICAvLy9cblxuICAgIHRoaXMucGFyZW50SlNYRWxlbWVudCA9IHVuZGVmaW5lZDsgIC8vL1xuICB9XG4gIFxuICBtb3VudChwYXJlbnRKU1hFbGVtZW50KSB7XG4gICAgdGhpcy5wYXJlbnRKU1hFbGVtZW50ID0gcGFyZW50SlNYRWxlbWVudDtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5qc3hFbGVtZW50ID0gdGhpcy5yZWFjdEZ1bmN0aW9uKHRoaXMuX3JlZik7XG4gIH1cblxuICByZW1vdW50KCkge1xuICAgIHRoaXMuanN4RWxlbWVudC5tb3VudCh0aGlzLnBhcmVudEpTWEVsZW1lbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYRnVuY3Rpb25FbGVtZW50O1xuIl19