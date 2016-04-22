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
    value: function mount(parent) {
      parent.append(this);
    }
  }, {
    key: 'update',
    value: function update(previous) {
      previous.appendAfter(this);

      previous.remove();
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.remove();
    }
  }, {
    key: 'append',
    value: function append(child) {
      var childDOMElement = child.getDOMElement();

      this.domElement.appendChild(childDOMElement);
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(previousSibling) {
      var previousSiblingDOMElement = previousSibling.getDOMElement();

      this.domElement.parentNode.insertBefore(previousSiblingDOMElement, this.domElement.nextSibling);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.domElement.parentNode.removeChild(this.domElement);
    }
  }, {
    key: 'empty',
    value: function empty() {
      var firstChild = this.domElement.firstChild;

      while (firstChild) {
        this.domElement.removeChild(firstChild);

        firstChild = this.domElement.firstChild;
      }
    }
  }]);

  return BaseElement;
}();

module.exports = BaseElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9iYXNlRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU07QUFDSixXQURJLFdBQ0osQ0FBWSxVQUFaLEVBQXdCOzBCQURwQixhQUNvQjs7QUFDdEIsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBRHNCO0dBQXhCOztlQURJOztvQ0FLWTtBQUNkLGFBQU8sS0FBSyxVQUFMLENBRE87Ozs7MEJBSVYsUUFBUTtBQUNaLGFBQU8sTUFBUCxDQUFjLElBQWQsRUFEWTs7OzsyQkFJUCxVQUFVO0FBQ2YsZUFBUyxXQUFULENBQXFCLElBQXJCLEVBRGU7O0FBR2YsZUFBUyxNQUFULEdBSGU7Ozs7OEJBTVA7QUFDUixXQUFLLE1BQUwsR0FEUTs7OzsyQkFJSCxPQUFPO0FBQ1osVUFBSSxrQkFBa0IsTUFBTSxhQUFOLEVBQWxCLENBRFE7O0FBR1osV0FBSyxVQUFMLENBQWdCLFdBQWhCLENBQTRCLGVBQTVCLEVBSFk7Ozs7Z0NBTUYsaUJBQWlCO0FBQzNCLFVBQUksNEJBQTRCLGdCQUFnQixhQUFoQixFQUE1QixDQUR1Qjs7QUFHM0IsV0FBSyxVQUFMLENBQWdCLFVBQWhCLENBQTJCLFlBQTNCLENBQXdDLHlCQUF4QyxFQUFtRSxLQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBbkUsQ0FIMkI7Ozs7NkJBTXBCO0FBQ1AsV0FBSyxVQUFMLENBQWdCLFVBQWhCLENBQTJCLFdBQTNCLENBQXVDLEtBQUssVUFBTCxDQUF2QyxDQURPOzs7OzRCQUlEO0FBQ04sVUFBSSxhQUFhLEtBQUssVUFBTCxDQUFnQixVQUFoQixDQURYOztBQUdOLGFBQU8sVUFBUCxFQUFtQjtBQUNqQixhQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsVUFBNUIsRUFEaUI7O0FBR2pCLHFCQUFhLEtBQUssVUFBTCxDQUFnQixVQUFoQixDQUhJO09BQW5COzs7O1NBMUNFOzs7QUFrRE4sT0FBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6ImJhc2VFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBCYXNlRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50KSB7XG4gICAgcGFyZW50LmFwcGVuZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZShwcmV2aW91cykge1xuICAgIHByZXZpb3VzLmFwcGVuZEFmdGVyKHRoaXMpO1xuXG4gICAgcHJldmlvdXMucmVtb3ZlKCk7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gIH1cblxuICBhcHBlbmQoY2hpbGQpIHtcbiAgICB2YXIgY2hpbGRET01FbGVtZW50ID0gY2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmRBZnRlcihwcmV2aW91c1NpYmxpbmcpIHtcbiAgICB2YXIgcHJldmlvdXNTaWJsaW5nRE9NRWxlbWVudCA9IHByZXZpb3VzU2libGluZy5nZXRET01FbGVtZW50KCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocHJldmlvdXNTaWJsaW5nRE9NRWxlbWVudCwgdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpOyBcbiAgfVxuXG4gIGVtcHR5KCkge1xuICAgIHZhciBmaXJzdENoaWxkID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG4gICAgXG4gICAgd2hpbGUgKGZpcnN0Q2hpbGQpIHsgXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZmlyc3RDaGlsZCk7XG5cbiAgICAgIGZpcnN0Q2hpbGQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgICB9IFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZUVsZW1lbnQ7XG4iXX0=