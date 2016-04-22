'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(domElement) {
    _classCallCheck(this, Element);

    this.domElement = domElement;
  }

  _createClass(Element, [{
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
    key: 'remount',
    value: function remount(previousSibling) {
      previousSibling.appendAfter(this);
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

      this.domElement.parentElement.insertBefore(previousSiblingDOMElement, this.domElement.nextSibling);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.domElement.parentElement.removeChild(this.domElement);
    }
  }, {
    key: 'empty',
    value: function empty() {
      while (this.domElement.firstChild) {
        this.domElement.removeChild(this.domElement.firstChild);
      }
    }
  }]);

  return Element;
}();

module.exports = Element;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTTtBQUNKLFdBREksT0FDSixDQUFZLFVBQVosRUFBd0I7MEJBRHBCLFNBQ29COztBQUN0QixTQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FEc0I7R0FBeEI7O2VBREk7O29DQUtZO0FBQ2QsYUFBTyxLQUFLLFVBQUwsQ0FETzs7OzswQkFJVixRQUFRO0FBQ1osYUFBTyxNQUFQLENBQWMsSUFBZCxFQURZOzs7OzRCQUlOLGlCQUFpQjtBQUN2QixzQkFBZ0IsV0FBaEIsQ0FBNEIsSUFBNUIsRUFEdUI7Ozs7OEJBSWY7QUFDUixXQUFLLE1BQUwsR0FEUTs7OzsyQkFJSCxPQUFPO0FBQ1osVUFBSSxrQkFBa0IsTUFBTSxhQUFOLEVBQWxCLENBRFE7O0FBR1osV0FBSyxVQUFMLENBQWdCLFdBQWhCLENBQTRCLGVBQTVCLEVBSFk7Ozs7Z0NBTUYsaUJBQWlCO0FBQzNCLFVBQUksNEJBQTRCLGdCQUFnQixhQUFoQixFQUE1QixDQUR1Qjs7QUFHM0IsV0FBSyxVQUFMLENBQWdCLGFBQWhCLENBQThCLFlBQTlCLENBQTJDLHlCQUEzQyxFQUFzRSxLQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBdEUsQ0FIMkI7Ozs7NkJBTXBCO0FBQ1AsV0FBSyxVQUFMLENBQWdCLGFBQWhCLENBQThCLFdBQTlCLENBQTBDLEtBQUssVUFBTCxDQUExQyxDQURPOzs7OzRCQUlEO0FBQ04sYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsVUFBaEIsRUFBNEI7QUFDakMsYUFBSyxVQUFMLENBQWdCLFdBQWhCLENBQTRCLEtBQUssVUFBTCxDQUFnQixVQUFoQixDQUE1QixDQURpQztPQUFuQzs7OztTQXRDRTs7O0FBNENOLE9BQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnQpIHtcbiAgICBwYXJlbnQuYXBwZW5kKHRoaXMpO1xuICB9XG4gIFxuICByZW1vdW50KHByZXZpb3VzU2libGluZykge1xuICAgIHByZXZpb3VzU2libGluZy5hcHBlbmRBZnRlcih0aGlzKTtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxuXG4gIGFwcGVuZChjaGlsZCkge1xuICAgIHZhciBjaGlsZERPTUVsZW1lbnQgPSBjaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZEFmdGVyKHByZXZpb3VzU2libGluZykge1xuICAgIHZhciBwcmV2aW91c1NpYmxpbmdET01FbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShwcmV2aW91c1NpYmxpbmdET01FbGVtZW50LCB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG4gIH1cblxuICBlbXB0eSgpIHtcbiAgICB3aGlsZSAodGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcbiJdfQ==