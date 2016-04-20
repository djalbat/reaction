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

    var children = childJSXElements; ///

    this._ref = Object.assign({}, this.properties, { children: children });

    this.render();
  }

  _createClass(JSXFunctionElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.jsxElement.mount(parentJSXElement);
    }
  }, {
    key: 'remount',
    value: function remount(oldJSXElement) {
      this.jsxElement.remount(oldJSXElement);
    }
  }, {
    key: 'render',
    value: function render() {
      this.jsxElement = this.reactFunction(this._ref);
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
  }]);

  return JSXFunctionElement;
}();

module.exports = JSXFunctionElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hGdW5jdGlvbkVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxrQkFDSixDQUFZLGFBQVosRUFBMkIsVUFBM0IsRUFBdUMsZ0JBQXZDLEVBQXlEOzBCQURyRCxvQkFDcUQ7O0FBQ3ZELFNBQUssYUFBTCxHQUFxQixhQUFyQixDQUR1RDtBQUV2RCxTQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FGdUQ7QUFHdkQsU0FBSyxnQkFBTCxHQUF3QixnQkFBeEIsQ0FIdUQ7O0FBS3ZELFNBQUssVUFBTCxHQUFrQixTQUFsQjs7QUFMdUQsUUFPakQsV0FBVyxnQkFBWDs7QUFQaUQsUUFTdkQsQ0FBSyxJQUFMLEdBQVksT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLLFVBQUwsRUFBaUIsRUFBQyxVQUFVLFFBQVYsRUFBcEMsQ0FBWixDQVR1RDs7QUFXdkQsU0FBSyxNQUFMLEdBWHVEO0dBQXpEOztlQURJOzswQkFlRSxrQkFBa0I7QUFDdEIsV0FBSyxVQUFMLENBQWdCLEtBQWhCLENBQXNCLGdCQUF0QixFQURzQjs7Ozs0QkFJaEIsZUFBZTtBQUNyQixXQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBd0IsYUFBeEIsRUFEcUI7Ozs7NkJBSWQ7QUFDUCxXQUFLLFVBQUwsR0FBa0IsS0FBSyxhQUFMLENBQW1CLEtBQUssSUFBTCxDQUFyQyxDQURPOzs7OzZCQUlBO0FBQ1AsV0FBSyxVQUFMLENBQWdCLE1BQWhCLEdBRE87Ozs7Z0NBSUcsWUFBWTtBQUN0QixXQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsVUFBNUIsRUFEc0I7Ozs7U0EvQnBCOzs7QUFvQ04sT0FBTyxPQUFQLEdBQWlCLGtCQUFqQiIsImZpbGUiOiJqc3hGdW5jdGlvbkVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEpTWEZ1bmN0aW9uRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0RnVuY3Rpb24sIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpIHtcbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5jaGlsZEpTWEVsZW1lbnRzID0gY2hpbGRKU1hFbGVtZW50cztcblxuICAgIHRoaXMuanN4RWxlbWVudCA9IHVuZGVmaW5lZDsgIC8vL1xuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZEpTWEVsZW1lbnRzOyAvLy9cbiAgICBcbiAgICB0aGlzLl9yZWYgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BlcnRpZXMsIHtjaGlsZHJlbjogY2hpbGRyZW59KTtcbiAgICBcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG4gIFxuICBtb3VudChwYXJlbnRKU1hFbGVtZW50KSB7XG4gICAgdGhpcy5qc3hFbGVtZW50Lm1vdW50KHBhcmVudEpTWEVsZW1lbnQpO1xuICB9XG5cbiAgcmVtb3VudChvbGRKU1hFbGVtZW50KSB7XG4gICAgdGhpcy5qc3hFbGVtZW50LnJlbW91bnQob2xkSlNYRWxlbWVudCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5qc3hFbGVtZW50ID0gdGhpcy5yZWFjdEZ1bmN0aW9uKHRoaXMuX3JlZik7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5qc3hFbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgYXBwZW5kQWZ0ZXIoanN4RWxlbWVudCkge1xuICAgIHRoaXMuanN4RWxlbWVudC5hcHBlbmRBZnRlcihqc3hFbGVtZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTWEZ1bmN0aW9uRWxlbWVudDtcbiJdfQ==