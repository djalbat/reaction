'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    Element = easyui.Element;

var JSXTextElement = require('./jsxTextElement');

var JSXElement = function () {
  function JSXElement(elementOrSelector, childJSXElements) {
    _classCallCheck(this, JSXElement);

    var element = elementOrSelector instanceof Element ? elementOrSelector : ///
    new Element(elementOrSelector);

    this.element = element;

    this.appendChildJSXElements(childJSXElements);
  }

  _createClass(JSXElement, [{
    key: 'getElement',
    value: function getElement() {
      return this.element;
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.element.remove();
    }
  }, {
    key: 'append',
    value: function append(jsxElementOrString) {
      if (typeof jsxElementOrString === 'string') {
        var string = jsxElementOrString; ///

        this.element.append(string);
      } else {
        var jsxElement = jsxElementOrString,
            ///
        element = jsxElement.getElement();

        this.element.append(element);
      }
    }
  }, {
    key: 'appendChildJSXElements',
    value: function appendChildJSXElements(childJSXElements) {
      childJSXElements.forEach(function (childJSXElement) {
        if (childJSXElement instanceof Array) {
          var childJSXElements = childJSXElement; ///

          this.appendChildJSXElements(childJSXElements);
        } else if (childJSXElement instanceof JSXElement) {
          var element = childJSXElement.getElement();

          this.element.append(element);
        } else if (childJSXElement instanceof JSXTextElement) {
          var childJSXTextElement = childJSXElement,
              ///
          text = childJSXTextElement.getText();

          this.element.append(text);
        } else if (childJSXElement instanceof JSXElement) {
          this.append(childJSXElement);
        }
      }.bind(this));
    }
  }], [{
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      var element = Element.fromDOMElement(domElement),
          childJSXElements = [];

      return new JSXElement(element, childJSXElements);
    }
  }]);

  return JSXElement;
}();

module.exports = JSXElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLFNBQVMsUUFBUSxRQUFSLENBQVQ7SUFDQSxVQUFVLE9BQU8sT0FBUDs7QUFFZCxJQUFJLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCOztJQUVFO0FBQ0osV0FESSxVQUNKLENBQVksaUJBQVosRUFBK0IsZ0JBQS9CLEVBQWlEOzBCQUQ3QyxZQUM2Qzs7QUFDL0MsUUFBSSxVQUFVLGlCQUFDLFlBQTZCLE9BQTdCLEdBQ2IsaUJBRFk7QUFFVixRQUFJLE9BQUosQ0FBWSxpQkFBWixDQUZVLENBRGlDOztBQUsvQyxTQUFLLE9BQUwsR0FBZSxPQUFmLENBTCtDOztBQU8vQyxTQUFLLHNCQUFMLENBQTRCLGdCQUE1QixFQVArQztHQUFqRDs7ZUFESTs7aUNBV1M7QUFDWCxhQUFPLEtBQUssT0FBTCxDQURJOzs7OzZCQUlKO0FBQ1AsV0FBSyxPQUFMLENBQWEsTUFBYixHQURPOzs7OzJCQUlGLG9CQUFvQjtBQUN6QixVQUFJLE9BQU8sa0JBQVAsS0FBOEIsUUFBOUIsRUFBd0M7QUFDMUMsWUFBSSxTQUFTLGtCQUFUOztBQURzQyxZQUcxQyxDQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLE1BQXBCLEVBSDBDO09BQTVDLE1BSU87QUFDTCxZQUFJLGFBQWEsa0JBQWI7O0FBQ0Esa0JBQVUsV0FBVyxVQUFYLEVBQVYsQ0FGQzs7QUFJTCxhQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLE9BQXBCLEVBSks7T0FKUDs7OzsyQ0FZcUIsa0JBQWtCO0FBQ3ZDLHVCQUFpQixPQUFqQixDQUF5QixVQUFTLGVBQVQsRUFBMEI7QUFDakQsWUFBSSwyQkFBMkIsS0FBM0IsRUFBa0M7QUFDcEMsY0FBSSxtQkFBbUIsZUFBbkI7O0FBRGdDLGNBR3BDLENBQUssc0JBQUwsQ0FBNEIsZ0JBQTVCLEVBSG9DO1NBQXRDLE1BSU8sSUFBSSwyQkFBMkIsVUFBM0IsRUFBdUM7QUFDaEQsY0FBSSxVQUFVLGdCQUFnQixVQUFoQixFQUFWLENBRDRDOztBQUdoRCxlQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLE9BQXBCLEVBSGdEO1NBQTNDLE1BSUEsSUFBSSwyQkFBMkIsY0FBM0IsRUFBMkM7QUFDcEQsY0FBSSxzQkFBc0IsZUFBdEI7O0FBQ0EsaUJBQU8sb0JBQW9CLE9BQXBCLEVBQVAsQ0FGZ0Q7O0FBSXBELGVBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsSUFBcEIsRUFKb0Q7U0FBL0MsTUFLQSxJQUFJLDJCQUEyQixVQUEzQixFQUF1QztBQUNoRCxlQUFLLE1BQUwsQ0FBWSxlQUFaLEVBRGdEO1NBQTNDO09BZGdCLENBaUJ2QixJQWpCdUIsQ0FpQmxCLElBakJrQixDQUF6QixFQUR1Qzs7OzttQ0FxQm5CLFlBQVk7QUFDaEMsVUFBSSxVQUFVLFFBQVEsY0FBUixDQUF1QixVQUF2QixDQUFWO1VBQ0EsbUJBQW1CLEVBQW5CLENBRjRCOztBQUloQyxhQUFPLElBQUksVUFBSixDQUFlLE9BQWYsRUFBd0IsZ0JBQXhCLENBQVAsQ0FKZ0M7Ozs7U0FyRDlCOzs7QUE2RE4sT0FBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6ImpzeEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBFbGVtZW50ID0gZWFzeXVpLkVsZW1lbnQ7XG5cbnZhciBKU1hUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vanN4VGV4dEVsZW1lbnQnKTtcblxuY2xhc3MgSlNYRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRPclNlbGVjdG9yLCBjaGlsZEpTWEVsZW1lbnRzKSB7XG4gICAgdmFyIGVsZW1lbnQgPSAoZWxlbWVudE9yU2VsZWN0b3IgaW5zdGFuY2VvZiBFbGVtZW50KSA/XG4gICAgICBlbGVtZW50T3JTZWxlY3RvciA6ICAvLy9cbiAgICAgICAgbmV3IEVsZW1lbnQoZWxlbWVudE9yU2VsZWN0b3IpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIHRoaXMuYXBwZW5kQ2hpbGRKU1hFbGVtZW50cyhjaGlsZEpTWEVsZW1lbnRzKTtcbiAgfVxuICBcbiAgZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIGFwcGVuZChqc3hFbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGpzeEVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBqc3hFbGVtZW50T3JTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIganN4RWxlbWVudCA9IGpzeEVsZW1lbnRPclN0cmluZywgIC8vL1xuICAgICAgICAgIGVsZW1lbnQgPSBqc3hFbGVtZW50LmdldEVsZW1lbnQoKTtcblxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhcHBlbmRDaGlsZEpTWEVsZW1lbnRzKGNoaWxkSlNYRWxlbWVudHMpIHtcbiAgICBjaGlsZEpTWEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRKU1hFbGVtZW50KSB7XG4gICAgICBpZiAoY2hpbGRKU1hFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdmFyIGNoaWxkSlNYRWxlbWVudHMgPSBjaGlsZEpTWEVsZW1lbnQ7IC8vL1xuXG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGRKU1hFbGVtZW50cyhjaGlsZEpTWEVsZW1lbnRzKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGRKU1hFbGVtZW50IGluc3RhbmNlb2YgSlNYRWxlbWVudCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGNoaWxkSlNYRWxlbWVudC5nZXRFbGVtZW50KCk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGRKU1hFbGVtZW50IGluc3RhbmNlb2YgSlNYVGV4dEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGNoaWxkSlNYVGV4dEVsZW1lbnQgPSBjaGlsZEpTWEVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHRleHQgPSBjaGlsZEpTWFRleHRFbGVtZW50LmdldFRleHQoKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRleHQpO1xuICAgICAgfSBlbHNlIGlmIChjaGlsZEpTWEVsZW1lbnQgaW5zdGFuY2VvZiBKU1hFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGNoaWxkSlNYRWxlbWVudClcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICB2YXIgZWxlbWVudCA9IEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCksXG4gICAgICAgIGNoaWxkSlNYRWxlbWVudHMgPSBbXTtcbiAgICBcbiAgICByZXR1cm4gbmV3IEpTWEVsZW1lbnQoZWxlbWVudCwgY2hpbGRKU1hFbGVtZW50cyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBKU1hFbGVtZW50O1xuIl19
