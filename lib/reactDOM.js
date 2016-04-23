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
      var props = null,
          children = [],
          parentElement = new DisplayElement(parentDOMElement, props, children);

      parentElement.empty();

      element.mount(parentElement); ///
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdERPTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxpQkFBaUIsUUFBUSxrQkFBUixDQUFqQjs7SUFFRTs7Ozs7OzsyQkFDVSxTQUFTLGtCQUFrQjtBQUN2QyxVQUFJLFFBQVEsSUFBUjtVQUNBLFdBQVcsRUFBWDtVQUNBLGdCQUFnQixJQUFJLGNBQUosQ0FBbUIsZ0JBQW5CLEVBQXFDLEtBQXJDLEVBQTRDLFFBQTVDLENBQWhCLENBSG1DOztBQUt2QyxvQkFBYyxLQUFkLEdBTHVDOztBQU92QyxjQUFRLEtBQVIsQ0FBYyxhQUFkO0FBUHVDOzs7U0FEckM7OztBQVlOLE9BQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJyZWFjdERPTS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIERpc3BsYXlFbGVtZW50ID0gcmVxdWlyZSgnLi9kaXNwbGF5RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdERPTSB7XG4gIHN0YXRpYyByZW5kZXIoZWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCkge1xuICAgIHZhciBwcm9wcyA9IG51bGwsXG4gICAgICAgIGNoaWxkcmVuID0gW10sXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBuZXcgRGlzcGxheUVsZW1lbnQocGFyZW50RE9NRWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKTtcblxuICAgIHBhcmVudEVsZW1lbnQuZW1wdHkoKTtcblxuICAgIGVsZW1lbnQubW91bnQocGFyZW50RWxlbWVudCk7IC8vL1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG4iXX0=