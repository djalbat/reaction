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

    element.data('jsxElement', this);

    this.element = element;

    this.componentDidMount = null;

    if (childJSXElements) {
      this.appendChildJSXElements(childJSXElements);
    }
  }

  _createClass(JSXElement, [{
    key: 'setComponentDidMount',
    value: function setComponentDidMount(componentDidMount) {
      this.componentDidMount = componentDidMount;
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      console.log(JSON.stringify(state, null, '\t'));
    }
  }, {
    key: 'getComponentDidMount',
    value: function getComponentDidMount() {
      return this.componentDidMount;
    }
  }, {
    key: 'getElement',
    value: function getElement() {
      return this.element;
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

        this.mount();
      }
    }
  }, {
    key: 'mount',
    value: function mount() {
      var childJSXElements = this.childJSXElements();

      childJSXElements.forEach(function (childJSXElement) {
        childJSXElement.mount();
      });

      if (this.componentDidMount) {
        this.componentDidMount();
      }
    }
  }, {
    key: 'childJSXElements',
    value: function childJSXElements() {
      var childElements = this.element.childElements(),
          childJSXElements = childElements.reduce(function (childJSXElements, childElement) {
        var childJSXElement = childElement.data('jsxElement');

        if (childJSXElement) {
          childJSXElements.push(childJSXElement);
        }

        return childJSXElements;
      }, []);

      return childJSXElements;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLFNBQVMsUUFBUSxRQUFSLENBQVQ7SUFDQSxVQUFVLE9BQU8sT0FBUDs7QUFFZCxJQUFJLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCOztJQUVFO0FBQ0osV0FESSxVQUNKLENBQVksaUJBQVosRUFBK0IsZ0JBQS9CLEVBQWlEOzBCQUQ3QyxZQUM2Qzs7QUFDL0MsUUFBSSxVQUFVLGlCQUFDLFlBQTZCLE9BQTdCLEdBQ2IsaUJBRFk7QUFFVixRQUFJLE9BQUosQ0FBWSxpQkFBWixDQUZVLENBRGlDOztBQUsvQyxZQUFRLElBQVIsQ0FBYSxZQUFiLEVBQTJCLElBQTNCLEVBTCtDOztBQU8vQyxTQUFLLE9BQUwsR0FBZSxPQUFmLENBUCtDOztBQVMvQyxTQUFLLGlCQUFMLEdBQXlCLElBQXpCLENBVCtDOztBQVcvQyxRQUFJLGdCQUFKLEVBQXNCO0FBQ3BCLFdBQUssc0JBQUwsQ0FBNEIsZ0JBQTVCLEVBRG9CO0tBQXRCO0dBWEY7O2VBREk7O3lDQWlCaUIsbUJBQW1CO0FBQ3RDLFdBQUssaUJBQUwsR0FBeUIsaUJBQXpCLENBRHNDOzs7OzZCQUkvQixPQUFPO0FBQ2QsY0FBUSxHQUFSLENBQVksS0FBSyxTQUFMLENBQWUsS0FBZixFQUFzQixJQUF0QixFQUE0QixJQUE1QixDQUFaLEVBRGM7Ozs7MkNBSU87QUFDckIsYUFBTyxLQUFLLGlCQUFMLENBRGM7Ozs7aUNBSVY7QUFDWCxhQUFPLEtBQUssT0FBTCxDQURJOzs7OzJCQUlOLG9CQUFvQjtBQUN6QixVQUFJLE9BQU8sa0JBQVAsS0FBOEIsUUFBOUIsRUFBd0M7QUFDMUMsWUFBSSxTQUFTLGtCQUFUOztBQURzQyxZQUcxQyxDQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLE1BQXBCLEVBSDBDO09BQTVDLE1BSU87QUFDTCxZQUFJLGFBQWEsa0JBQWI7O0FBQ0Esa0JBQVUsV0FBVyxVQUFYLEVBQVYsQ0FGQzs7QUFJTCxhQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLE9BQXBCLEVBSks7O0FBTUwsYUFBSyxLQUFMLEdBTks7T0FKUDs7Ozs0QkFjTTtBQUNOLFVBQUksbUJBQW1CLEtBQUssZ0JBQUwsRUFBbkIsQ0FERTs7QUFHTix1QkFBaUIsT0FBakIsQ0FBeUIsVUFBUyxlQUFULEVBQTBCO0FBQ2pELHdCQUFnQixLQUFoQixHQURpRDtPQUExQixDQUF6QixDQUhNOztBQU9OLFVBQUksS0FBSyxpQkFBTCxFQUF3QjtBQUMxQixhQUFLLGlCQUFMLEdBRDBCO09BQTVCOzs7O3VDQUtpQjtBQUNqQixVQUFJLGdCQUFnQixLQUFLLE9BQUwsQ0FBYSxhQUFiLEVBQWhCO1VBQ0EsbUJBQW1CLGNBQWMsTUFBZCxDQUFxQixVQUFTLGdCQUFULEVBQTJCLFlBQTNCLEVBQXlDO0FBQy9FLFlBQUksa0JBQWtCLGFBQWEsSUFBYixDQUFrQixZQUFsQixDQUFsQixDQUQyRTs7QUFHL0UsWUFBSSxlQUFKLEVBQXFCO0FBQ25CLDJCQUFpQixJQUFqQixDQUFzQixlQUF0QixFQURtQjtTQUFyQjs7QUFJQSxlQUFPLGdCQUFQLENBUCtFO09BQXpDLEVBUXJDLEVBUmdCLENBQW5CLENBRmE7O0FBWWpCLGFBQU8sZ0JBQVAsQ0FaaUI7Ozs7MkNBZUksa0JBQWtCO0FBQ3ZDLHVCQUFpQixPQUFqQixDQUF5QixVQUFTLGVBQVQsRUFBMEI7QUFDakQsWUFBSSwyQkFBMkIsS0FBM0IsRUFBa0M7QUFDcEMsY0FBSSxtQkFBbUIsZUFBbkI7O0FBRGdDLGNBR3BDLENBQUssc0JBQUwsQ0FBNEIsZ0JBQTVCLEVBSG9DO1NBQXRDLE1BSU8sSUFBSSwyQkFBMkIsVUFBM0IsRUFBdUM7QUFDaEQsY0FBSSxVQUFVLGdCQUFnQixVQUFoQixFQUFWLENBRDRDOztBQUdoRCxlQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLE9BQXBCLEVBSGdEO1NBQTNDLE1BSUEsSUFBSSwyQkFBMkIsY0FBM0IsRUFBMkM7QUFDcEQsY0FBSSxzQkFBc0IsZUFBdEI7O0FBQ0EsaUJBQU8sb0JBQW9CLE9BQXBCLEVBQVAsQ0FGZ0Q7O0FBSXBELGVBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsSUFBcEIsRUFKb0Q7U0FBL0MsTUFLQSxJQUFJLDJCQUEyQixVQUEzQixFQUF1QztBQUNoRCxlQUFLLE1BQUwsQ0FBWSxlQUFaLEVBRGdEO1NBQTNDO09BZGdCLENBaUJ2QixJQWpCdUIsQ0FpQmxCLElBakJrQixDQUF6QixFQUR1Qzs7OzttQ0FxQm5CLFlBQVk7QUFDaEMsVUFBSSxVQUFVLFFBQVEsY0FBUixDQUF1QixVQUF2QixDQUFWLENBRDRCOztBQUdoQyxhQUFPLElBQUksVUFBSixDQUFlLE9BQWYsQ0FBUCxDQUhnQzs7OztTQWhHOUI7OztBQXVHTixPQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoianN4RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIEVsZW1lbnQgPSBlYXN5dWkuRWxlbWVudDtcblxudmFyIEpTWFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hUZXh0RWxlbWVudCcpO1xuXG5jbGFzcyBKU1hFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudE9yU2VsZWN0b3IsIGNoaWxkSlNYRWxlbWVudHMpIHtcbiAgICB2YXIgZWxlbWVudCA9IChlbGVtZW50T3JTZWxlY3RvciBpbnN0YW5jZW9mIEVsZW1lbnQpID9cbiAgICAgIGVsZW1lbnRPclNlbGVjdG9yIDogIC8vL1xuICAgICAgICBuZXcgRWxlbWVudChlbGVtZW50T3JTZWxlY3Rvcik7XG5cbiAgICBlbGVtZW50LmRhdGEoJ2pzeEVsZW1lbnQnLCB0aGlzKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gbnVsbDtcblxuICAgIGlmIChjaGlsZEpTWEVsZW1lbnRzKSB7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkSlNYRWxlbWVudHMoY2hpbGRKU1hFbGVtZW50cyk7XG4gICAgfVxuICB9XG4gIFxuICBzZXRDb21wb25lbnREaWRNb3VudChjb21wb25lbnREaWRNb3VudCkge1xuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSBjb21wb25lbnREaWRNb3VudDsgICAgXG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHN0YXRlLCBudWxsLCAnXFx0JykpXG4gIH1cblxuICBnZXRDb21wb25lbnREaWRNb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnREaWRNb3VudDtcbiAgfVxuICBcbiAgZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG5cbiAgYXBwZW5kKGpzeEVsZW1lbnRPclN0cmluZykge1xuICAgIGlmICh0eXBlb2YganN4RWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHN0cmluZyA9IGpzeEVsZW1lbnRPclN0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBqc3hFbGVtZW50ID0ganN4RWxlbWVudE9yU3RyaW5nLCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGpzeEVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuXG4gICAgICB0aGlzLm1vdW50KCk7XG4gICAgfVxuICB9XG5cbiAgbW91bnQoKSB7XG4gICAgdmFyIGNoaWxkSlNYRWxlbWVudHMgPSB0aGlzLmNoaWxkSlNYRWxlbWVudHMoKTtcblxuICAgIGNoaWxkSlNYRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEpTWEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkSlNYRWxlbWVudC5tb3VudCgpO1xuICAgIH0pO1xuICAgIFxuICAgIGlmICh0aGlzLmNvbXBvbmVudERpZE1vdW50KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRKU1hFbGVtZW50cygpIHtcbiAgICB2YXIgY2hpbGRFbGVtZW50cyA9IHRoaXMuZWxlbWVudC5jaGlsZEVsZW1lbnRzKCksXG4gICAgICAgIGNoaWxkSlNYRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZShmdW5jdGlvbihjaGlsZEpTWEVsZW1lbnRzLCBjaGlsZEVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgY2hpbGRKU1hFbGVtZW50ID0gY2hpbGRFbGVtZW50LmRhdGEoJ2pzeEVsZW1lbnQnKTtcblxuICAgICAgICAgIGlmIChjaGlsZEpTWEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNoaWxkSlNYRWxlbWVudHMucHVzaChjaGlsZEpTWEVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjaGlsZEpTWEVsZW1lbnRzO1xuICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gY2hpbGRKU1hFbGVtZW50cztcbiAgfVxuXG4gIGFwcGVuZENoaWxkSlNYRWxlbWVudHMoY2hpbGRKU1hFbGVtZW50cykge1xuICAgIGNoaWxkSlNYRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEpTWEVsZW1lbnQpIHtcbiAgICAgIGlmIChjaGlsZEpTWEVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB2YXIgY2hpbGRKU1hFbGVtZW50cyA9IGNoaWxkSlNYRWxlbWVudDsgLy8vXG5cbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZEpTWEVsZW1lbnRzKGNoaWxkSlNYRWxlbWVudHMpO1xuICAgICAgfSBlbHNlIGlmIChjaGlsZEpTWEVsZW1lbnQgaW5zdGFuY2VvZiBKU1hFbGVtZW50KSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gY2hpbGRKU1hFbGVtZW50LmdldEVsZW1lbnQoKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgfSBlbHNlIGlmIChjaGlsZEpTWEVsZW1lbnQgaW5zdGFuY2VvZiBKU1hUZXh0RWxlbWVudCkge1xuICAgICAgICB2YXIgY2hpbGRKU1hUZXh0RWxlbWVudCA9IGNoaWxkSlNYRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgdGV4dCA9IGNoaWxkSlNYVGV4dEVsZW1lbnQuZ2V0VGV4dCgpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQodGV4dCk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkSlNYRWxlbWVudCBpbnN0YW5jZW9mIEpTWEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoY2hpbGRKU1hFbGVtZW50KVxuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgdmFyIGVsZW1lbnQgPSBFbGVtZW50LmZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuICAgIFxuICAgIHJldHVybiBuZXcgSlNYRWxlbWVudChlbGVtZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTWEVsZW1lbnQ7XG4iXX0=
