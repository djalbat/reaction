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

    // element.data('jsxElement', this);

    this.element = element;

    this.childJSXElements = childJSXElements;

    this.componentDidMount = null;

    this.render();
  }

  _createClass(JSXElement, [{
    key: 'setComponentDidMount',
    value: function setComponentDidMount(componentDidMount) {
      this.componentDidMount = componentDidMount;
    }
  }, {
    key: 'setState',
    value: function setState(state) {}
  }, {
    key: 'getElement',
    value: function getElement() {
      return this.element;
    }
  }, {
    key: 'getComponentDidMount',
    value: function getComponentDidMount() {
      return this.componentDidMount;
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
    key: 'mount',
    value: function mount() {
      // var childJSXElements = this.childJSXElements();
      //
      // childJSXElements.forEach(function(childJSXElement) {
      //   childJSXElement.mount();
      // });

      this.childJSXElements.forEach(function (childJSXElement) {
        childJSXElement.mount();
      });

      if (this.componentDidMount) {
        this.componentDidMount();
      }
    }

    // childJSXElements() {
    //   var childElements = this.element.childElements(),
    //       childJSXElements = childElements.reduce(function(childJSXElements, childElement) {
    //         var childJSXElement = childElement.data('jsxElement');
    //
    //         if (childJSXElement) {
    //           childJSXElements.push(childJSXElement);
    //         }
    //
    //         return childJSXElements;
    //       }, []);
    //
    //   return childJSXElements;
    // }

  }, {
    key: 'render',
    value: function render() {
      if (this.childJSXElements !== undefined) {
        this.appendChildJSXElements(this.childJSXElements);
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
      var element = Element.fromDOMElement(domElement);

      return new JSXElement(element);
    }
  }]);

  return JSXElement;
}();

module.exports = JSXElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLFNBQVMsUUFBUSxRQUFSLENBQVQ7SUFDQSxVQUFVLE9BQU8sT0FBUDs7QUFFZCxJQUFJLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCOztJQUVFO0FBQ0osV0FESSxVQUNKLENBQVksaUJBQVosRUFBK0IsZ0JBQS9CLEVBQWlEOzBCQUQ3QyxZQUM2Qzs7QUFDL0MsUUFBSSxVQUFVLGlCQUFDLFlBQTZCLE9BQTdCLEdBQ2IsaUJBRFk7QUFFVixRQUFJLE9BQUosQ0FBWSxpQkFBWixDQUZVOzs7O0FBRGlDLFFBTy9DLENBQUssT0FBTCxHQUFlLE9BQWYsQ0FQK0M7O0FBUy9DLFNBQUssZ0JBQUwsR0FBd0IsZ0JBQXhCLENBVCtDOztBQVcvQyxTQUFLLGlCQUFMLEdBQXlCLElBQXpCLENBWCtDOztBQWEvQyxTQUFLLE1BQUwsR0FiK0M7R0FBakQ7O2VBREk7O3lDQWlCaUIsbUJBQW1CO0FBQ3RDLFdBQUssaUJBQUwsR0FBeUIsaUJBQXpCLENBRHNDOzs7OzZCQUkvQixPQUFPOzs7aUNBSUg7QUFDWCxhQUFPLEtBQUssT0FBTCxDQURJOzs7OzJDQUlVO0FBQ3JCLGFBQU8sS0FBSyxpQkFBTCxDQURjOzs7OzJCQUloQixvQkFBb0I7QUFDekIsVUFBSSxPQUFPLGtCQUFQLEtBQThCLFFBQTlCLEVBQXdDO0FBQzFDLFlBQUksU0FBUyxrQkFBVDs7QUFEc0MsWUFHMUMsQ0FBSyxPQUFMLENBQWEsTUFBYixDQUFvQixNQUFwQixFQUgwQztPQUE1QyxNQUlPO0FBQ0wsWUFBSSxhQUFhLGtCQUFiOztBQUNBLGtCQUFVLFdBQVcsVUFBWCxFQUFWLENBRkM7O0FBSUwsYUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixPQUFwQixFQUpLO09BSlA7Ozs7NEJBWU07Ozs7Ozs7QUFPTixXQUFLLGdCQUFMLENBQXNCLE9BQXRCLENBQThCLFVBQVMsZUFBVCxFQUEwQjtBQUN0RCx3QkFBZ0IsS0FBaEIsR0FEc0Q7T0FBMUIsQ0FBOUIsQ0FQTTs7QUFXTixVQUFJLEtBQUssaUJBQUwsRUFBd0I7QUFDMUIsYUFBSyxpQkFBTCxHQUQwQjtPQUE1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBb0JPO0FBQ1AsVUFBSSxLQUFLLGdCQUFMLEtBQTBCLFNBQTFCLEVBQXFDO0FBQ3ZDLGFBQUssc0JBQUwsQ0FBNEIsS0FBSyxnQkFBTCxDQUE1QixDQUR1QztPQUF6Qzs7OzsyQ0FLcUIsa0JBQWtCO0FBQ3ZDLHVCQUFpQixPQUFqQixDQUF5QixVQUFTLGVBQVQsRUFBMEI7QUFDakQsWUFBSSwyQkFBMkIsS0FBM0IsRUFBa0M7QUFDcEMsY0FBSSxtQkFBbUIsZUFBbkI7O0FBRGdDLGNBR3BDLENBQUssc0JBQUwsQ0FBNEIsZ0JBQTVCLEVBSG9DO1NBQXRDLE1BSU8sSUFBSSwyQkFBMkIsVUFBM0IsRUFBdUM7QUFDaEQsY0FBSSxVQUFVLGdCQUFnQixVQUFoQixFQUFWLENBRDRDOztBQUdoRCxlQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLE9BQXBCLEVBSGdEO1NBQTNDLE1BSUEsSUFBSSwyQkFBMkIsY0FBM0IsRUFBMkM7QUFDcEQsY0FBSSxzQkFBc0IsZUFBdEI7O0FBQ0EsaUJBQU8sb0JBQW9CLE9BQXBCLEVBQVAsQ0FGZ0Q7O0FBSXBELGVBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsSUFBcEIsRUFKb0Q7U0FBL0MsTUFLQSxJQUFJLDJCQUEyQixVQUEzQixFQUF1QztBQUNoRCxlQUFLLE1BQUwsQ0FBWSxlQUFaLEVBRGdEO1NBQTNDO09BZGdCLENBaUJ2QixJQWpCdUIsQ0FpQmxCLElBakJrQixDQUF6QixFQUR1Qzs7OzttQ0FxQm5CLFlBQVk7QUFDaEMsVUFBSSxVQUFVLFFBQVEsY0FBUixDQUF1QixVQUF2QixDQUFWLENBRDRCOztBQUdoQyxhQUFPLElBQUksVUFBSixDQUFlLE9BQWYsQ0FBUCxDQUhnQzs7OztTQXhHOUI7OztBQStHTixPQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoianN4RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIEVsZW1lbnQgPSBlYXN5dWkuRWxlbWVudDtcblxudmFyIEpTWFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hUZXh0RWxlbWVudCcpO1xuXG5jbGFzcyBKU1hFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudE9yU2VsZWN0b3IsIGNoaWxkSlNYRWxlbWVudHMpIHtcbiAgICB2YXIgZWxlbWVudCA9IChlbGVtZW50T3JTZWxlY3RvciBpbnN0YW5jZW9mIEVsZW1lbnQpID9cbiAgICAgIGVsZW1lbnRPclNlbGVjdG9yIDogIC8vL1xuICAgICAgICBuZXcgRWxlbWVudChlbGVtZW50T3JTZWxlY3Rvcik7XG5cbiAgICAvLyBlbGVtZW50LmRhdGEoJ2pzeEVsZW1lbnQnLCB0aGlzKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICB0aGlzLmNoaWxkSlNYRWxlbWVudHMgPSBjaGlsZEpTWEVsZW1lbnRzO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IG51bGw7XG4gICAgXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICBcbiAgc2V0Q29tcG9uZW50RGlkTW91bnQoY29tcG9uZW50RGlkTW91bnQpIHtcbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gY29tcG9uZW50RGlkTW91bnQ7ICAgIFxuICB9XG4gIFxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIFxuICB9XG5cbiAgZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RGlkTW91bnQ7XG4gIH1cbiAgXG4gIGFwcGVuZChqc3hFbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGpzeEVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBqc3hFbGVtZW50T3JTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIganN4RWxlbWVudCA9IGpzeEVsZW1lbnRPclN0cmluZywgIC8vL1xuICAgICAgICAgIGVsZW1lbnQgPSBqc3hFbGVtZW50LmdldEVsZW1lbnQoKTtcblxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBtb3VudCgpIHtcbiAgICAvLyB2YXIgY2hpbGRKU1hFbGVtZW50cyA9IHRoaXMuY2hpbGRKU1hFbGVtZW50cygpO1xuICAgIC8vXG4gICAgLy8gY2hpbGRKU1hFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkSlNYRWxlbWVudCkge1xuICAgIC8vICAgY2hpbGRKU1hFbGVtZW50Lm1vdW50KCk7XG4gICAgLy8gfSk7XG5cbiAgICB0aGlzLmNoaWxkSlNYRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEpTWEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkSlNYRWxlbWVudC5tb3VudCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY29tcG9uZW50RGlkTW91bnQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICB9XG4gIH1cblxuICAvLyBjaGlsZEpTWEVsZW1lbnRzKCkge1xuICAvLyAgIHZhciBjaGlsZEVsZW1lbnRzID0gdGhpcy5lbGVtZW50LmNoaWxkRWxlbWVudHMoKSxcbiAgLy8gICAgICAgY2hpbGRKU1hFbGVtZW50cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkSlNYRWxlbWVudHMsIGNoaWxkRWxlbWVudCkge1xuICAvLyAgICAgICAgIHZhciBjaGlsZEpTWEVsZW1lbnQgPSBjaGlsZEVsZW1lbnQuZGF0YSgnanN4RWxlbWVudCcpO1xuICAvL1xuICAvLyAgICAgICAgIGlmIChjaGlsZEpTWEVsZW1lbnQpIHtcbiAgLy8gICAgICAgICAgIGNoaWxkSlNYRWxlbWVudHMucHVzaChjaGlsZEpTWEVsZW1lbnQpO1xuICAvLyAgICAgICAgIH1cbiAgLy9cbiAgLy8gICAgICAgICByZXR1cm4gY2hpbGRKU1hFbGVtZW50cztcbiAgLy8gICAgICAgfSwgW10pO1xuICAvL1xuICAvLyAgIHJldHVybiBjaGlsZEpTWEVsZW1lbnRzO1xuICAvLyB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmNoaWxkSlNYRWxlbWVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5hcHBlbmRDaGlsZEpTWEVsZW1lbnRzKHRoaXMuY2hpbGRKU1hFbGVtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgYXBwZW5kQ2hpbGRKU1hFbGVtZW50cyhjaGlsZEpTWEVsZW1lbnRzKSB7XG4gICAgY2hpbGRKU1hFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkSlNYRWxlbWVudCkge1xuICAgICAgaWYgKGNoaWxkSlNYRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciBjaGlsZEpTWEVsZW1lbnRzID0gY2hpbGRKU1hFbGVtZW50OyAvLy9cblxuICAgICAgICB0aGlzLmFwcGVuZENoaWxkSlNYRWxlbWVudHMoY2hpbGRKU1hFbGVtZW50cyk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkSlNYRWxlbWVudCBpbnN0YW5jZW9mIEpTWEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBjaGlsZEpTWEVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkSlNYRWxlbWVudCBpbnN0YW5jZW9mIEpTWFRleHRFbGVtZW50KSB7XG4gICAgICAgIHZhciBjaGlsZEpTWFRleHRFbGVtZW50ID0gY2hpbGRKU1hFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICB0ZXh0ID0gY2hpbGRKU1hUZXh0RWxlbWVudC5nZXRUZXh0KCk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0ZXh0KTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGRKU1hFbGVtZW50IGluc3RhbmNlb2YgSlNYRWxlbWVudCkge1xuICAgICAgICB0aGlzLmFwcGVuZChjaGlsZEpTWEVsZW1lbnQpXG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICB2YXIgZWxlbWVudCA9IEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG4gICAgXG4gICAgcmV0dXJuIG5ldyBKU1hFbGVtZW50KGVsZW1lbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYRWxlbWVudDtcbiJdfQ==
