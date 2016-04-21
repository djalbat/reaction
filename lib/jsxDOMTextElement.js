'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXDOMTextElement = function () {
  function JSXDOMTextElement(text) {
    _classCallCheck(this, JSXDOMTextElement);

    this.element = text; ///
  }

  _createClass(JSXDOMTextElement, [{
    key: 'getElement',
    value: function getElement() {
      return this.element;
    }
  }, {
    key: 'mount',
    value: function mount(parentJSXElement) {
      parentJSXElement.append(this);
    }
  }, {
    key: 'update',
    value: function update(oldJSXElement) {
      oldJSXElement.appendAfter(this);

      oldJSXElement.remove();
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.remove();
    }
  }, {
    key: 'append',
    value: function append(jsxElement) {
      var element = jsxElement.getElement();

      this.element.append(element);
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(jsxElement) {
      var element = jsxElement.getElement();

      this.element.appendAfter(element);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.element.remove();
    }
  }, {
    key: 'empty',
    value: function empty() {
      this.element.empty();
    }
  }]);

  return JSXDOMTextElement;
}();

module.exports = JSXDOMTextElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hET01UZXh0RWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU07QUFDSixXQURJLGlCQUNKLENBQVksSUFBWixFQUFrQjswQkFEZCxtQkFDYzs7QUFDaEIsU0FBSyxPQUFMLEdBQWUsSUFBZjtBQURnQixHQUFsQjs7ZUFESTs7aUNBS1M7QUFDWCxhQUFPLEtBQUssT0FBTCxDQURJOzs7OzBCQUlQLGtCQUFrQjtBQUN0Qix1QkFBaUIsTUFBakIsQ0FBd0IsSUFBeEIsRUFEc0I7Ozs7MkJBSWpCLGVBQWU7QUFDcEIsb0JBQWMsV0FBZCxDQUEwQixJQUExQixFQURvQjs7QUFHcEIsb0JBQWMsTUFBZCxHQUhvQjs7Ozs4QkFNWjtBQUNSLFdBQUssTUFBTCxHQURROzs7OzJCQUlILFlBQVk7QUFDakIsVUFBSSxVQUFVLFdBQVcsVUFBWCxFQUFWLENBRGE7O0FBR2pCLFdBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsT0FBcEIsRUFIaUI7Ozs7Z0NBTVAsWUFBWTtBQUN0QixVQUFJLFVBQVUsV0FBVyxVQUFYLEVBQVYsQ0FEa0I7O0FBR3RCLFdBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsT0FBekIsRUFIc0I7Ozs7NkJBTWY7QUFBRSxXQUFLLE9BQUwsQ0FBYSxNQUFiLEdBQUY7Ozs7NEJBRUQ7QUFBRSxXQUFLLE9BQUwsQ0FBYSxLQUFiLEdBQUY7Ozs7U0FyQ0o7OztBQXdDTixPQUFPLE9BQVAsR0FBaUIsaUJBQWpCIiwiZmlsZSI6ImpzeERPTVRleHRFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBKU1hET01UZXh0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSB0ZXh0OyAvLy9cbiAgfVxuICBcbiAgZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50SlNYRWxlbWVudCkge1xuICAgIHBhcmVudEpTWEVsZW1lbnQuYXBwZW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlKG9sZEpTWEVsZW1lbnQpIHtcbiAgICBvbGRKU1hFbGVtZW50LmFwcGVuZEFmdGVyKHRoaXMpO1xuXG4gICAgb2xkSlNYRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxuXG4gIGFwcGVuZChqc3hFbGVtZW50KSB7XG4gICAgdmFyIGVsZW1lbnQgPSBqc3hFbGVtZW50LmdldEVsZW1lbnQoKTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmRBZnRlcihqc3hFbGVtZW50KSB7XG4gICAgdmFyIGVsZW1lbnQgPSBqc3hFbGVtZW50LmdldEVsZW1lbnQoKTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRBZnRlcihlbGVtZW50KTtcbiAgfVxuXG4gIHJlbW92ZSgpIHsgdGhpcy5lbGVtZW50LnJlbW92ZSgpOyB9XG5cbiAgZW1wdHkoKSB7IHRoaXMuZWxlbWVudC5lbXB0eSgpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYRE9NVGV4dEVsZW1lbnQ7XG4iXX0=