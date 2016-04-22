'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisplayElement = require('./displayElement');

var ReactDOM = function () {
  function ReactDOM() {
    _classCallCheck(this, ReactDOM);
  }

  _createClass(ReactDOM, null, [{
    key: 'render',
    value: function render(element, parentDOMElement) {
      var properties = null,
          children = [],
          parentElement = new DisplayElement(parentDOMElement, properties, children);

      parentElement.empty();

      element.mount(parentElement); ///
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdERPTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxpQkFBaUIsUUFBUSxrQkFBUixDQUFqQjs7SUFFRTs7Ozs7OzsyQkFDVSxTQUFTLGtCQUFrQjtBQUN2QyxVQUFJLGFBQWEsSUFBYjtVQUNBLFdBQVcsRUFBWDtVQUNBLGdCQUFnQixJQUFJLGNBQUosQ0FBbUIsZ0JBQW5CLEVBQXFDLFVBQXJDLEVBQWlELFFBQWpELENBQWhCLENBSG1DOztBQUt2QyxvQkFBYyxLQUFkLEdBTHVDOztBQU92QyxjQUFRLEtBQVIsQ0FBYyxhQUFkO0FBUHVDOzs7U0FEckM7OztBQVlOLE9BQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJyZWFjdERPTS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIERpc3BsYXlFbGVtZW50ID0gcmVxdWlyZSgnLi9kaXNwbGF5RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdERPTSB7XG4gIHN0YXRpYyByZW5kZXIoZWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IG5ldyBEaXNwbGF5RWxlbWVudChwYXJlbnRET01FbGVtZW50LCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG5cbiAgICBwYXJlbnRFbGVtZW50LmVtcHR5KCk7XG5cbiAgICBlbGVtZW50Lm1vdW50KHBhcmVudEVsZW1lbnQpOyAvLy9cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuIl19