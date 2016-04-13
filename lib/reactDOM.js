'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXElement = require('./jsxElement');

var ReactDOM = function () {
  function ReactDOM() {
    _classCallCheck(this, ReactDOM);
  }

  _createClass(ReactDOM, null, [{
    key: 'render',
    value: function render(jsxElement, parentDOMElement) {
      var parentJSXElement = JSXElement.fromDOMElement(parentDOMElement);

      jsxElement.render(parentJSXElement); ///
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdERPTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiOztJQUVFOzs7Ozs7OzJCQUNVLFlBQVksa0JBQWtCO0FBQzFDLFVBQUksbUJBQW1CLFdBQVcsY0FBWCxDQUEwQixnQkFBMUIsQ0FBbkIsQ0FEc0M7O0FBRzFDLGlCQUFXLE1BQVgsQ0FBa0IsZ0JBQWxCO0FBSDBDOzs7U0FEeEM7OztBQVFOLE9BQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJyZWFjdERPTS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEpTWEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGpzeEVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICB2YXIgcGFyZW50SlNYRWxlbWVudCA9IEpTWEVsZW1lbnQuZnJvbURPTUVsZW1lbnQocGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICBqc3hFbGVtZW50LnJlbmRlcihwYXJlbnRKU1hFbGVtZW50KTsgLy8vXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcbiJdfQ==
