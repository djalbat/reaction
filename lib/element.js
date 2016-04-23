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

      return this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTTtBQUNKLFdBREksT0FDSixDQUFZLFVBQVosRUFBd0I7MEJBRHBCLFNBQ29COztBQUN0QixTQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FEc0I7R0FBeEI7O2VBREk7OzBCQUtFLFFBQVE7QUFDWixhQUFPLE1BQVAsQ0FBYyxJQUFkLEVBRFk7Ozs7NEJBSU4saUJBQWlCO0FBQ3ZCLHNCQUFnQixXQUFoQixDQUE0QixJQUE1QixFQUR1Qjs7QUFHdkIsYUFBTyxJQUFQLENBSHVCOzs7OzhCQU1mO0FBQ1IsV0FBSyxNQUFMLEdBRFE7Ozs7NkJBSUQ7QUFDUCxXQUFLLFVBQUwsQ0FBZ0IsYUFBaEIsQ0FBOEIsV0FBOUIsQ0FBMEMsS0FBSyxVQUFMLENBQTFDLENBRE87Ozs7MkJBSUYsT0FBTztBQUNaLFVBQUksa0JBQWtCLE1BQU0sYUFBTixFQUFsQixDQURROztBQUdaLFdBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixlQUE1QixFQUhZOzs7O2dDQU1GLGlCQUFpQjtBQUMzQixVQUFJLDRCQUE0QixnQkFBZ0IsYUFBaEIsRUFBNUIsQ0FEdUI7O0FBRzNCLFdBQUssVUFBTCxDQUFnQixhQUFoQixDQUE4QixZQUE5QixDQUEyQyx5QkFBM0MsRUFBc0UsS0FBSyxVQUFMLENBQWdCLFdBQWhCLENBQXRFLENBSDJCOzs7OzRCQU1yQjtBQUNOLGFBQU8sS0FBSyxVQUFMLENBQWdCLFVBQWhCLEVBQTRCO0FBQ2pDLGFBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixLQUFLLFVBQUwsQ0FBZ0IsVUFBaEIsQ0FBNUIsQ0FEaUM7T0FBbkM7Ozs7b0NBS2M7QUFDZCxhQUFPLEtBQUssVUFBTCxDQURPOzs7O1NBekNaOzs7QUE4Q04sT0FBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6ImVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmQodGhpcyk7XG4gIH1cbiAgXG4gIHJlbW91bnQocHJldmlvdXNTaWJsaW5nKSB7XG4gICAgcHJldmlvdXNTaWJsaW5nLmFwcGVuZEFmdGVyKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChjaGlsZCkge1xuICAgIHZhciBjaGlsZERPTUVsZW1lbnQgPSBjaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZEFmdGVyKHByZXZpb3VzU2libGluZykge1xuICAgIHZhciBwcmV2aW91c1NpYmxpbmdET01FbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShwcmV2aW91c1NpYmxpbmdET01FbGVtZW50LCB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICB9XG5cbiAgZW1wdHkoKSB7XG4gICAgd2hpbGUgKHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG4iXX0=