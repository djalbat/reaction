'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXTextElement = function () {
  function JSXTextElement(text) {
    _classCallCheck(this, JSXTextElement);

    this.text = text;

    this.parentJSXElement = undefined; ///
  }

  _createClass(JSXTextElement, [{
    key: 'getElement',
    value: function getElement() {
      var element = this.text; ///

      return element;
    }
  }, {
    key: 'mount',
    value: function mount(parentJSXElement) {
      parentJSXElement.append(this);
    }
  }]);

  return JSXTextElement;
}();

module.exports = JSXTextElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hUZXh0RWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU07QUFDSixXQURJLGNBQ0osQ0FBWSxJQUFaLEVBQWtCOzBCQURkLGdCQUNjOztBQUNoQixTQUFLLElBQUwsR0FBWSxJQUFaLENBRGdCOztBQUdoQixTQUFLLGdCQUFMLEdBQXdCLFNBQXhCO0FBSGdCLEdBQWxCOztlQURJOztpQ0FPUztBQUNYLFVBQUksVUFBVSxLQUFLLElBQUw7O0FBREgsYUFHSixPQUFQLENBSFc7Ozs7MEJBTVAsa0JBQWtCO0FBQ3RCLHVCQUFpQixNQUFqQixDQUF3QixJQUF4QixFQURzQjs7OztTQWJwQjs7O0FBa0JOLE9BQU8sT0FBUCxHQUFpQixjQUFqQiIsImZpbGUiOiJqc3hUZXh0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgSlNYVGV4dEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICBcbiAgICB0aGlzLnBhcmVudEpTWEVsZW1lbnQgPSB1bmRlZmluZWQ7ICAvLy9cbiAgfVxuXG4gIGdldEVsZW1lbnQoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnRleHQ7ICAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50SlNYRWxlbWVudCkge1xuICAgIHBhcmVudEpTWEVsZW1lbnQuYXBwZW5kKHRoaXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYVGV4dEVsZW1lbnQ7XG4iXX0=