'use strict';

///var easyui = require('easyui'),
///    Element = easyui.Element;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = require('./element'),
    JSXTextElement = require('./jsxTextElement');

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
  }]);

  return JSXElement;
}();

module.exports = JSXElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFLQSxJQUFJLFVBQVUsUUFBUSxXQUFSLENBQVY7SUFDQSxpQkFBaUIsUUFBUSxrQkFBUixDQUFqQjs7SUFFRTtBQUNKLFdBREksVUFDSixDQUFZLGlCQUFaLEVBQStCLGdCQUEvQixFQUFpRDswQkFEN0MsWUFDNkM7O0FBQy9DLFFBQUksVUFBVSxpQkFBQyxZQUE2QixPQUE3QixHQUNiLGlCQURZO0FBRVYsUUFBSSxPQUFKLENBQVksaUJBQVosQ0FGVSxDQURpQzs7QUFLL0MsWUFBUSxJQUFSLENBQWEsWUFBYixFQUEyQixJQUEzQixFQUwrQzs7QUFPL0MsU0FBSyxPQUFMLEdBQWUsT0FBZixDQVArQzs7QUFTL0MsU0FBSyxpQkFBTCxHQUF5QixJQUF6QixDQVQrQzs7QUFXL0MsUUFBSSxnQkFBSixFQUFzQjtBQUNwQixXQUFLLHNCQUFMLENBQTRCLGdCQUE1QixFQURvQjtLQUF0QjtHQVhGOztlQURJOzt5Q0FpQmlCLG1CQUFtQjtBQUN0QyxXQUFLLGlCQUFMLEdBQXlCLGlCQUF6QixDQURzQzs7Ozs2QkFJL0IsT0FBTztBQUNkLGNBQVEsR0FBUixDQUFZLEtBQUssU0FBTCxDQUFlLEtBQWYsRUFBc0IsSUFBdEIsRUFBNEIsSUFBNUIsQ0FBWixFQURjOzs7OzJDQUlPO0FBQ3JCLGFBQU8sS0FBSyxpQkFBTCxDQURjOzs7O2lDQUlWO0FBQ1gsYUFBTyxLQUFLLE9BQUwsQ0FESTs7OzsyQkFJTixvQkFBb0I7QUFDekIsVUFBSSxPQUFPLGtCQUFQLEtBQThCLFFBQTlCLEVBQXdDO0FBQzFDLFlBQUksU0FBUyxrQkFBVDs7QUFEc0MsWUFHMUMsQ0FBSyxPQUFMLENBQWEsTUFBYixDQUFvQixNQUFwQixFQUgwQztPQUE1QyxNQUlPO0FBQ0wsWUFBSSxhQUFhLGtCQUFiOztBQUNBLGtCQUFVLFdBQVcsVUFBWCxFQUFWLENBRkM7O0FBSUwsYUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixPQUFwQixFQUpLOztBQU1MLGFBQUssS0FBTCxHQU5LO09BSlA7Ozs7NEJBY007QUFDTixVQUFJLG1CQUFtQixLQUFLLGdCQUFMLEVBQW5CLENBREU7O0FBR04sdUJBQWlCLE9BQWpCLENBQXlCLFVBQVMsZUFBVCxFQUEwQjtBQUNqRCx3QkFBZ0IsS0FBaEIsR0FEaUQ7T0FBMUIsQ0FBekIsQ0FITTs7QUFPTixVQUFJLEtBQUssaUJBQUwsRUFBd0I7QUFDMUIsYUFBSyxpQkFBTCxHQUQwQjtPQUE1Qjs7Ozt1Q0FLaUI7QUFDakIsVUFBSSxnQkFBZ0IsS0FBSyxPQUFMLENBQWEsYUFBYixFQUFoQjtVQUNBLG1CQUFtQixjQUFjLE1BQWQsQ0FBcUIsVUFBUyxnQkFBVCxFQUEyQixZQUEzQixFQUF5QztBQUMvRSxZQUFJLGtCQUFrQixhQUFhLElBQWIsQ0FBa0IsWUFBbEIsQ0FBbEIsQ0FEMkU7O0FBRy9FLFlBQUksZUFBSixFQUFxQjtBQUNuQiwyQkFBaUIsSUFBakIsQ0FBc0IsZUFBdEIsRUFEbUI7U0FBckI7O0FBSUEsZUFBTyxnQkFBUCxDQVArRTtPQUF6QyxFQVFyQyxFQVJnQixDQUFuQixDQUZhOztBQVlqQixhQUFPLGdCQUFQLENBWmlCOzs7OzJDQWVJLGtCQUFrQjtBQUN2Qyx1QkFBaUIsT0FBakIsQ0FBeUIsVUFBUyxlQUFULEVBQTBCO0FBQ2pELFlBQUksMkJBQTJCLEtBQTNCLEVBQWtDO0FBQ3BDLGNBQUksbUJBQW1CLGVBQW5COztBQURnQyxjQUdwQyxDQUFLLHNCQUFMLENBQTRCLGdCQUE1QixFQUhvQztTQUF0QyxNQUlPLElBQUksMkJBQTJCLFVBQTNCLEVBQXVDO0FBQ2hELGNBQUksVUFBVSxnQkFBZ0IsVUFBaEIsRUFBVixDQUQ0Qzs7QUFHaEQsZUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixPQUFwQixFQUhnRDtTQUEzQyxNQUlBLElBQUksMkJBQTJCLGNBQTNCLEVBQTJDO0FBQ3BELGNBQUksc0JBQXNCLGVBQXRCOztBQUNBLGlCQUFPLG9CQUFvQixPQUFwQixFQUFQLENBRmdEOztBQUlwRCxlQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLElBQXBCLEVBSm9EO1NBQS9DLE1BS0EsSUFBSSwyQkFBMkIsVUFBM0IsRUFBdUM7QUFDaEQsZUFBSyxNQUFMLENBQVksZUFBWixFQURnRDtTQUEzQztPQWRnQixDQWlCdkIsSUFqQnVCLENBaUJsQixJQWpCa0IsQ0FBekIsRUFEdUM7Ozs7U0EzRXJDOzs7QUFpR04sT0FBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6ImpzeEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8vL3ZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbi8vLyAgICBFbGVtZW50ID0gZWFzeXVpLkVsZW1lbnQ7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgSlNYVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeFRleHRFbGVtZW50Jyk7XG5cbmNsYXNzIEpTWEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50T3JTZWxlY3RvciwgY2hpbGRKU1hFbGVtZW50cykge1xuICAgIHZhciBlbGVtZW50ID0gKGVsZW1lbnRPclNlbGVjdG9yIGluc3RhbmNlb2YgRWxlbWVudCkgP1xuICAgICAgZWxlbWVudE9yU2VsZWN0b3IgOiAgLy8vXG4gICAgICAgIG5ldyBFbGVtZW50KGVsZW1lbnRPclNlbGVjdG9yKTtcblxuICAgIGVsZW1lbnQuZGF0YSgnanN4RWxlbWVudCcsIHRoaXMpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSBudWxsO1xuXG4gICAgaWYgKGNoaWxkSlNYRWxlbWVudHMpIHtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGRKU1hFbGVtZW50cyhjaGlsZEpTWEVsZW1lbnRzKTtcbiAgICB9XG4gIH1cbiAgXG4gIHNldENvbXBvbmVudERpZE1vdW50KGNvbXBvbmVudERpZE1vdW50KSB7XG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50OyAgICBcbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc3RhdGUsIG51bGwsICdcXHQnKSlcbiAgfVxuXG4gIGdldENvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudERpZE1vdW50O1xuICB9XG4gIFxuICBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cblxuICBhcHBlbmQoanN4RWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBqc3hFbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0ganN4RWxlbWVudE9yU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGpzeEVsZW1lbnQgPSBqc3hFbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICBlbGVtZW50ID0ganN4RWxlbWVudC5nZXRFbGVtZW50KCk7XG5cbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG5cbiAgICAgIHRoaXMubW91bnQoKTtcbiAgICB9XG4gIH1cblxuICBtb3VudCgpIHtcbiAgICB2YXIgY2hpbGRKU1hFbGVtZW50cyA9IHRoaXMuY2hpbGRKU1hFbGVtZW50cygpO1xuXG4gICAgY2hpbGRKU1hFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkSlNYRWxlbWVudCkge1xuICAgICAgY2hpbGRKU1hFbGVtZW50Lm1vdW50KCk7XG4gICAgfSk7XG4gICAgXG4gICAgaWYgKHRoaXMuY29tcG9uZW50RGlkTW91bnQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEpTWEVsZW1lbnRzKCkge1xuICAgIHZhciBjaGlsZEVsZW1lbnRzID0gdGhpcy5lbGVtZW50LmNoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgY2hpbGRKU1hFbGVtZW50cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkSlNYRWxlbWVudHMsIGNoaWxkRWxlbWVudCkge1xuICAgICAgICAgIHZhciBjaGlsZEpTWEVsZW1lbnQgPSBjaGlsZEVsZW1lbnQuZGF0YSgnanN4RWxlbWVudCcpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkSlNYRWxlbWVudCkge1xuICAgICAgICAgICAgY2hpbGRKU1hFbGVtZW50cy5wdXNoKGNoaWxkSlNYRWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNoaWxkSlNYRWxlbWVudHM7XG4gICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBjaGlsZEpTWEVsZW1lbnRzO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGRKU1hFbGVtZW50cyhjaGlsZEpTWEVsZW1lbnRzKSB7XG4gICAgY2hpbGRKU1hFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkSlNYRWxlbWVudCkge1xuICAgICAgaWYgKGNoaWxkSlNYRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciBjaGlsZEpTWEVsZW1lbnRzID0gY2hpbGRKU1hFbGVtZW50OyAvLy9cblxuICAgICAgICB0aGlzLmFwcGVuZENoaWxkSlNYRWxlbWVudHMoY2hpbGRKU1hFbGVtZW50cyk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkSlNYRWxlbWVudCBpbnN0YW5jZW9mIEpTWEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBjaGlsZEpTWEVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkSlNYRWxlbWVudCBpbnN0YW5jZW9mIEpTWFRleHRFbGVtZW50KSB7XG4gICAgICAgIHZhciBjaGlsZEpTWFRleHRFbGVtZW50ID0gY2hpbGRKU1hFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICB0ZXh0ID0gY2hpbGRKU1hUZXh0RWxlbWVudC5nZXRUZXh0KCk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0ZXh0KTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGRKU1hFbGVtZW50IGluc3RhbmNlb2YgSlNYRWxlbWVudCkge1xuICAgICAgICB0aGlzLmFwcGVuZChjaGlsZEpTWEVsZW1lbnQpXG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTWEVsZW1lbnQ7XG4iXX0=
