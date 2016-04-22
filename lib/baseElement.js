'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseElement = function () {
  function BaseElement(domElement) {
    _classCallCheck(this, BaseElement);

    this.domElement = domElement;
  }

  _createClass(BaseElement, [{
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'mount',
    value: function mount(parentElement) {
      parentElement.append(this);
    }
  }, {
    key: 'update',
    value: function update(oldElement) {
      oldElement.appendAfter(this);

      oldElement.remove();
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.remove();
    }
  }, {
    key: 'append',
    value: function append(element) {
      var domElement = element.getDOMElement();

      this.domElement.appendChild(domElement);
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(element) {
      var domElement = element.getDOMElement();

      this.domElement.parentNode.insertBefore(domElement, this.domElement.nextSibling);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.domElement.parentNode.removeChild(this.domElement);
    }
  }, {
    key: 'empty',
    value: function empty() {
      while (this.domElement.firstChild) {
        this.domElement.removeChild(this.domElement.firstChild);
      }
    }
  }]);

  return BaseElement;
}();

module.exports = BaseElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9iYXNlRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU07QUFDSixXQURJLFdBQ0osQ0FBWSxVQUFaLEVBQXdCOzBCQURwQixhQUNvQjs7QUFDdEIsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBRHNCO0dBQXhCOztlQURJOztvQ0FLWTtBQUNkLGFBQU8sS0FBSyxVQUFMLENBRE87Ozs7MEJBSVYsZUFBZTtBQUNuQixvQkFBYyxNQUFkLENBQXFCLElBQXJCLEVBRG1COzs7OzJCQUlkLFlBQVk7QUFDakIsaUJBQVcsV0FBWCxDQUF1QixJQUF2QixFQURpQjs7QUFHakIsaUJBQVcsTUFBWCxHQUhpQjs7Ozs4QkFNVDtBQUNSLFdBQUssTUFBTCxHQURROzs7OzJCQUlILFNBQVM7QUFDZCxVQUFJLGFBQWEsUUFBUSxhQUFSLEVBQWIsQ0FEVTs7QUFHZCxXQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsVUFBNUIsRUFIYzs7OztnQ0FNSixTQUFTO0FBQ25CLFVBQUksYUFBYSxRQUFRLGFBQVIsRUFBYixDQURlOztBQUduQixXQUFLLFVBQUwsQ0FBZ0IsVUFBaEIsQ0FBMkIsWUFBM0IsQ0FBd0MsVUFBeEMsRUFBb0QsS0FBSyxVQUFMLENBQWdCLFdBQWhCLENBQXBELENBSG1COzs7OzZCQU1aO0FBQUUsV0FBSyxVQUFMLENBQWdCLFVBQWhCLENBQTJCLFdBQTNCLENBQXVDLEtBQUssVUFBTCxDQUF2QyxDQUFGOzs7OzRCQUVEO0FBQUUsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsVUFBaEIsRUFBNEI7QUFBRSxhQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsS0FBSyxVQUFMLENBQWdCLFVBQWhCLENBQTVCLENBQUY7T0FBbkM7Ozs7U0FyQ047OztBQXdDTixPQUFPLE9BQVAsR0FBaUIsV0FBakIiLCJmaWxlIjoiYmFzZUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEJhc2VFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnRFbGVtZW50KSB7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGUob2xkRWxlbWVudCkge1xuICAgIG9sZEVsZW1lbnQuYXBwZW5kQWZ0ZXIodGhpcyk7XG5cbiAgICBvbGRFbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgdW5tb3VudCgpIHtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICB2YXIgZG9tRWxlbWVudCA9IGVsZW1lbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kQWZ0ZXIoZWxlbWVudCkge1xuICAgIHZhciBkb21FbGVtZW50ID0gZWxlbWVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHsgdGhpcy5kb21FbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTsgfVxuXG4gIGVtcHR5KCkgeyB3aGlsZSAodGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkKTsgfSB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZUVsZW1lbnQ7XG4iXX0=