'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(domElement) {
    _classCallCheck(this, Element);

    this.domElement = domElement;
  }

  _createClass(Element, [{
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
    key: 'remove',
    value: function remove() {
      this.domElement.parentElement.removeChild(this.domElement);
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
    key: 'empty',
    value: function empty() {
      while (this.domElement.firstChild) {
        this.domElement.removeChild(this.domElement.firstChild);
      }
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }]);

  return Element;
}();

module.exports = Element;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTTtBQUNKLFdBREksT0FDSixDQUFZLFVBQVosRUFBd0I7MEJBRHBCLFNBQ29COztBQUN0QixTQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FEc0I7R0FBeEI7O2VBREk7OzBCQUtFLFFBQVE7QUFDWixhQUFPLE1BQVAsQ0FBYyxJQUFkLEVBRFk7Ozs7NEJBSU4saUJBQWlCO0FBQ3ZCLHNCQUFnQixXQUFoQixDQUE0QixJQUE1QixFQUR1Qjs7Ozs4QkFJZjtBQUNSLFdBQUssTUFBTCxHQURROzs7OzZCQUlEO0FBQ1AsV0FBSyxVQUFMLENBQWdCLGFBQWhCLENBQThCLFdBQTlCLENBQTBDLEtBQUssVUFBTCxDQUExQyxDQURPOzs7OzJCQUlGLE9BQU87QUFDWixVQUFJLGtCQUFrQixNQUFNLGFBQU4sRUFBbEIsQ0FEUTs7QUFHWixXQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsZUFBNUIsRUFIWTs7OztnQ0FNRixpQkFBaUI7QUFDM0IsVUFBSSw0QkFBNEIsZ0JBQWdCLGFBQWhCLEVBQTVCLENBRHVCOztBQUczQixXQUFLLFVBQUwsQ0FBZ0IsYUFBaEIsQ0FBOEIsWUFBOUIsQ0FBMkMseUJBQTNDLEVBQXNFLEtBQUssVUFBTCxDQUFnQixXQUFoQixDQUF0RSxDQUgyQjs7Ozs0QkFNckI7QUFDTixhQUFPLEtBQUssVUFBTCxDQUFnQixVQUFoQixFQUE0QjtBQUNqQyxhQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsS0FBSyxVQUFMLENBQWdCLFVBQWhCLENBQTVCLENBRGlDO09BQW5DOzs7O29DQUtjO0FBQ2QsYUFBTyxLQUFLLFVBQUwsQ0FETzs7OztTQXZDWjs7O0FBNENOLE9BQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnQpIHtcbiAgICBwYXJlbnQuYXBwZW5kKHRoaXMpO1xuICB9XG4gIFxuICByZW1vdW50KHByZXZpb3VzU2libGluZykge1xuICAgIHByZXZpb3VzU2libGluZy5hcHBlbmRBZnRlcih0aGlzKTtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGNoaWxkKSB7XG4gICAgdmFyIGNoaWxkRE9NRWxlbWVudCA9IGNoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kQWZ0ZXIocHJldmlvdXNTaWJsaW5nKSB7XG4gICAgdmFyIHByZXZpb3VzU2libGluZ0RPTUVsZW1lbnQgPSBwcmV2aW91c1NpYmxpbmcuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHByZXZpb3VzU2libGluZ0RPTUVsZW1lbnQsIHRoaXMuZG9tRWxlbWVudC5uZXh0U2libGluZyk7XG4gIH1cblxuICBlbXB0eSgpIHtcbiAgICB3aGlsZSAodGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcbiJdfQ==