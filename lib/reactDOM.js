'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXDisplayElement = require('./jsxDisplayElement');

var ReactDOM = function () {
  function ReactDOM() {
    _classCallCheck(this, ReactDOM);
  }

  _createClass(ReactDOM, null, [{
    key: 'render',
    value: function render(jsxElement, parentDOMElement) {
      var parentJSXElement = JSXDisplayElement.fromDOMElement(parentDOMElement);

      parentJSXElement.empty();

      jsxElement.mount(parentJSXElement); ///
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdERPTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxvQkFBb0IsUUFBUSxxQkFBUixDQUFwQjs7SUFFRTs7Ozs7OzsyQkFDVSxZQUFZLGtCQUFrQjtBQUMxQyxVQUFJLG1CQUFtQixrQkFBa0IsY0FBbEIsQ0FBaUMsZ0JBQWpDLENBQW5CLENBRHNDOztBQUcxQyx1QkFBaUIsS0FBakIsR0FIMEM7O0FBSzFDLGlCQUFXLEtBQVgsQ0FBaUIsZ0JBQWpCO0FBTDBDOzs7U0FEeEM7OztBQVVOLE9BQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJyZWFjdERPTS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEpTWERpc3BsYXlFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hEaXNwbGF5RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdERPTSB7XG4gIHN0YXRpYyByZW5kZXIoanN4RWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCkge1xuICAgIHZhciBwYXJlbnRKU1hFbGVtZW50ID0gSlNYRGlzcGxheUVsZW1lbnQuZnJvbURPTUVsZW1lbnQocGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICBwYXJlbnRKU1hFbGVtZW50LmVtcHR5KCk7XG5cbiAgICBqc3hFbGVtZW50Lm1vdW50KHBhcmVudEpTWEVsZW1lbnQpOyAvLy9cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuIl19