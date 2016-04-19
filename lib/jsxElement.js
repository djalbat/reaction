'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    Element = easyui.Element;

var JSXElement = function () {
  function JSXElement(elementOrElementName, properties, childJSXElements) {
    _classCallCheck(this, JSXElement);

    var element;

    if (elementOrElementName instanceof Element) {
      element = elementOrElementName; ///
    } else {
        var elementName = elementOrElementName,
            ///
        elementHTML = '<' + elementName + '/>';

        element = Element.fromHTML(elementHTML);
      }

    this.element = element;

    this.properties = properties;

    this.childJSXElements = childJSXElements;

    this.addPropertiesToElement();
  }

  _createClass(JSXElement, [{
    key: 'getElement',
    value: function getElement() {
      return this.element;
    }
  }, {
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.childJSXElements.forEach(function (childJSXElement) {
        childJSXElement.mount(this);
      }.bind(this));

      parentJSXElement.append(this);
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
    key: 'remove',
    value: function remove() {
      this.element.remove();
    }
  }, {
    key: 'empty',
    value: function empty() {
      this.element.empty();
    }
  }, {
    key: 'addPropertiesToElement',
    value: function addPropertiesToElement() {
      if (this.properties === null) {
        return;
      }

      var propertyNames = Object.keys(this.properties);

      propertyNames.forEach(function (propertyName) {
        var propertyValue = this.properties[propertyName];

        if (propertyName === 'ref') {
          var callback = propertyValue,
              ///
          domElement = this.element.$element[0],
              ///
          ref = domElement; ///

          callback(ref);
        } else {
          if (typeof propertyValue === 'function') {
            if (beginsWith(propertyName, 'on')) {
              var events = propertyName.substring(2).toLowerCase(),
                  ///
              handler = propertyValue; ///

              this.element.on(events, handler);
            }
          } else {
            var attributeName,
                attributeValue = propertyValue;

            switch (propertyName) {
              case 'className':
                attributeName = 'class';
                break;

              case 'htmlFor':
                attributeName = 'for';
                break;

              default:
                attributeName = propertyName;
                break;
            }

            if ((typeof attributeValue === 'undefined' ? 'undefined' : _typeof(attributeValue)) === 'object') {
              this.addObjectAttribute(attributeName, attributeValue);
            } else {
              this.element.addAttribute(attributeName, attributeValue);
            }
          }
        }
      }.bind(this));
    }
  }, {
    key: 'addObjectAttribute',
    value: function addObjectAttribute(attributeName, attributeValue) {
      var domElement = this.element.$element[0],
          ///
      keys = Object.keys(attributeValue);

      keys.forEach(function (key) {
        var value = attributeValue[key];

        domElement[attributeName][key] = value;
      });
    }
  }], [{
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      var element = Element.fromDOMElement(domElement),
          properties = null,
          childJSXElements = [];

      return new JSXElement(element, properties, childJSXElements);
    }
  }]);

  return JSXElement;
}();

module.exports = JSXElement;

function beginsWith(string, beginningString) {
  var regExp = new RegExp('^' + beginningString),
      matches = string.match(regExp);

  return !!matches; ///
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQUksU0FBUyxRQUFRLFFBQVIsQ0FBVDtJQUNBLFVBQVUsT0FBTyxPQUFQOztJQUVSO0FBQ0osV0FESSxVQUNKLENBQVksb0JBQVosRUFBa0MsVUFBbEMsRUFBOEMsZ0JBQTlDLEVBQWdFOzBCQUQ1RCxZQUM0RDs7QUFDOUQsUUFBSSxPQUFKLENBRDhEOztBQUc5RCxRQUFJLGdDQUFnQyxPQUFoQyxFQUF5QztBQUMzQyxnQkFBVSxvQkFBVjtBQUQyQyxLQUE3QyxNQUVPO0FBQ0wsWUFBSSxjQUFjLG9CQUFkOztBQUNBLHNCQUFjLE1BQU0sV0FBTixHQUFvQixJQUFwQixDQUZiOztBQUlMLGtCQUFVLFFBQVEsUUFBUixDQUFpQixXQUFqQixDQUFWLENBSks7T0FGUDs7QUFTQSxTQUFLLE9BQUwsR0FBZSxPQUFmLENBWjhEOztBQWM5RCxTQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FkOEQ7O0FBZ0I5RCxTQUFLLGdCQUFMLEdBQXdCLGdCQUF4QixDQWhCOEQ7O0FBa0I5RCxTQUFLLHNCQUFMLEdBbEI4RDtHQUFoRTs7ZUFESTs7aUNBc0JTO0FBQ1gsYUFBTyxLQUFLLE9BQUwsQ0FESTs7OzswQkFJUCxrQkFBa0I7QUFDdEIsV0FBSyxnQkFBTCxDQUFzQixPQUF0QixDQUE4QixVQUFTLGVBQVQsRUFBMEI7QUFDdEQsd0JBQWdCLEtBQWhCLENBQXNCLElBQXRCLEVBRHNEO09BQTFCLENBRTVCLElBRjRCLENBRXZCLElBRnVCLENBQTlCLEVBRHNCOztBQUt0Qix1QkFBaUIsTUFBakIsQ0FBd0IsSUFBeEIsRUFMc0I7Ozs7MkJBUWpCLG9CQUFvQjtBQUN6QixVQUFJLE9BQU8sa0JBQVAsS0FBOEIsUUFBOUIsRUFBd0M7QUFDMUMsWUFBSSxTQUFTLGtCQUFUOztBQURzQyxZQUcxQyxDQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLE1BQXBCLEVBSDBDO09BQTVDLE1BSU87QUFDTCxZQUFJLGFBQWEsa0JBQWI7O0FBQ0Esa0JBQVUsV0FBVyxVQUFYLEVBQVYsQ0FGQzs7QUFJTCxhQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLE9BQXBCLEVBSks7T0FKUDs7Ozs2QkFZTztBQUFFLFdBQUssT0FBTCxDQUFhLE1BQWIsR0FBRjs7Ozs0QkFFRDtBQUFFLFdBQUssT0FBTCxDQUFhLEtBQWIsR0FBRjs7Ozs2Q0FFaUI7QUFDdkIsVUFBSSxLQUFLLFVBQUwsS0FBb0IsSUFBcEIsRUFBMEI7QUFDNUIsZUFENEI7T0FBOUI7O0FBSUEsVUFBSSxnQkFBZ0IsT0FBTyxJQUFQLENBQVksS0FBSyxVQUFMLENBQTVCLENBTG1COztBQU92QixvQkFBYyxPQUFkLENBQXNCLFVBQVUsWUFBVixFQUF3QjtBQUM1QyxZQUFJLGdCQUFnQixLQUFLLFVBQUwsQ0FBZ0IsWUFBaEIsQ0FBaEIsQ0FEd0M7O0FBRzVDLFlBQUksaUJBQWlCLEtBQWpCLEVBQXdCO0FBQzFCLGNBQUksV0FBVyxhQUFYOztBQUNBLHVCQUFhLEtBQUssT0FBTCxDQUFhLFFBQWIsQ0FBc0IsQ0FBdEIsQ0FBYjs7QUFDQSxnQkFBTSxVQUFOOztBQUhzQixrQkFLMUIsQ0FBUyxHQUFULEVBTDBCO1NBQTVCLE1BTU87QUFDTCxjQUFJLE9BQU8sYUFBUCxLQUF5QixVQUF6QixFQUFxQztBQUN2QyxnQkFBSSxXQUFXLFlBQVgsRUFBeUIsSUFBekIsQ0FBSixFQUFvQztBQUNsQyxrQkFBSSxTQUFTLGFBQWEsU0FBYixDQUF1QixDQUF2QixFQUEwQixXQUExQixFQUFUOztBQUNBLHdCQUFVLGFBQVY7O0FBRjhCLGtCQUlsQyxDQUFLLE9BQUwsQ0FBYSxFQUFiLENBQWdCLE1BQWhCLEVBQXdCLE9BQXhCLEVBSmtDO2FBQXBDO1dBREYsTUFPTztBQUNMLGdCQUFJLGFBQUo7Z0JBQ0ksaUJBQWlCLGFBQWpCLENBRkM7O0FBSUwsb0JBQVEsWUFBUjtBQUNFLG1CQUFLLFdBQUw7QUFDRSxnQ0FBZ0IsT0FBaEIsQ0FERjtBQUVFLHNCQUZGOztBQURGLG1CQUtPLFNBQUw7QUFDRSxnQ0FBZ0IsS0FBaEIsQ0FERjtBQUVFLHNCQUZGOztBQUxGO0FBVUksZ0NBQWdCLFlBQWhCLENBREY7QUFFRSxzQkFGRjtBQVRGLGFBSks7O0FBa0JMLGdCQUFJLFFBQU8sdUVBQVAsS0FBMEIsUUFBMUIsRUFBb0M7QUFDdEMsbUJBQUssa0JBQUwsQ0FBd0IsYUFBeEIsRUFBdUMsY0FBdkMsRUFEc0M7YUFBeEMsTUFFTztBQUNMLG1CQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLGFBQTFCLEVBQXlDLGNBQXpDLEVBREs7YUFGUDtXQXpCRjtTQVBGO09BSG9CLENBMENwQixJQTFDb0IsQ0EwQ2YsSUExQ2UsQ0FBdEIsRUFQdUI7Ozs7dUNBb0ROLGVBQWUsZ0JBQWdCO0FBQ2hELFVBQUksYUFBYSxLQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXNCLENBQXRCLENBQWI7O0FBQ0EsYUFBTyxPQUFPLElBQVAsQ0FBWSxjQUFaLENBQVAsQ0FGNEM7O0FBSWhELFdBQUssT0FBTCxDQUFhLFVBQVMsR0FBVCxFQUFjO0FBQ3pCLFlBQUksUUFBUSxlQUFlLEdBQWYsQ0FBUixDQURxQjs7QUFHekIsbUJBQVcsYUFBWCxFQUEwQixHQUExQixJQUFpQyxLQUFqQyxDQUh5QjtPQUFkLENBQWIsQ0FKZ0Q7Ozs7bUNBVzVCLFlBQVk7QUFDaEMsVUFBSSxVQUFVLFFBQVEsY0FBUixDQUF1QixVQUF2QixDQUFWO1VBQ0EsYUFBYSxJQUFiO1VBQ0EsbUJBQW1CLEVBQW5CLENBSDRCOztBQUtoQyxhQUFPLElBQUksVUFBSixDQUFlLE9BQWYsRUFBd0IsVUFBeEIsRUFBb0MsZ0JBQXBDLENBQVAsQ0FMZ0M7Ozs7U0FsSDlCOzs7QUEySE4sT0FBTyxPQUFQLEdBQWlCLFVBQWpCOztBQUVBLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QixlQUE1QixFQUE2QztBQUMzQyxNQUFJLFNBQVMsSUFBSSxNQUFKLENBQVcsTUFBTSxlQUFOLENBQXBCO01BQ0EsVUFBVSxPQUFPLEtBQVAsQ0FBYSxNQUFiLENBQVYsQ0FGdUM7O0FBSTNDLFNBQU8sQ0FBQyxDQUFDLE9BQUQ7QUFKbUMsQ0FBN0MiLCJmaWxlIjoianN4RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIEVsZW1lbnQgPSBlYXN5dWkuRWxlbWVudDtcblxuY2xhc3MgSlNYRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRPckVsZW1lbnROYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZEpTWEVsZW1lbnRzKSB7XG4gICAgdmFyIGVsZW1lbnQ7XG5cbiAgICBpZiAoZWxlbWVudE9yRWxlbWVudE5hbWUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudE9yRWxlbWVudE5hbWU7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZWxlbWVudE5hbWUgPSBlbGVtZW50T3JFbGVtZW50TmFtZSwgLy8vXG4gICAgICAgICAgZWxlbWVudEhUTUwgPSAnPCcgKyBlbGVtZW50TmFtZSArICcvPic7XG5cbiAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21IVE1MKGVsZW1lbnRIVE1MKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICBcbiAgICB0aGlzLmNoaWxkSlNYRWxlbWVudHMgPSBjaGlsZEpTWEVsZW1lbnRzO1xuXG4gICAgdGhpcy5hZGRQcm9wZXJ0aWVzVG9FbGVtZW50KCk7XG4gIH1cbiAgXG4gIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudEpTWEVsZW1lbnQpIHtcbiAgICB0aGlzLmNoaWxkSlNYRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEpTWEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkSlNYRWxlbWVudC5tb3VudCh0aGlzKTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgcGFyZW50SlNYRWxlbWVudC5hcHBlbmQodGhpcyk7XG4gIH1cblxuICBhcHBlbmQoanN4RWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBqc3hFbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0ganN4RWxlbWVudE9yU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGpzeEVsZW1lbnQgPSBqc3hFbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICBlbGVtZW50ID0ganN4RWxlbWVudC5nZXRFbGVtZW50KCk7XG5cbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKCkgeyB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7IH1cblxuICBlbXB0eSgpIHsgdGhpcy5lbGVtZW50LmVtcHR5KCk7IH1cblxuICBhZGRQcm9wZXJ0aWVzVG9FbGVtZW50KCkge1xuICAgIGlmICh0aGlzLnByb3BlcnRpZXMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcGVydGllcyk7XG5cbiAgICBwcm9wZXJ0eU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgdmFyIHByb3BlcnR5VmFsdWUgPSB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblxuICAgICAgaWYgKHByb3BlcnR5TmFtZSA9PT0gJ3JlZicpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gcHJvcGVydHlWYWx1ZSwgLy8vXG4gICAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5lbGVtZW50LiRlbGVtZW50WzBdLCAgLy8vXG4gICAgICAgICAgICByZWYgPSBkb21FbGVtZW50OyAvLy9cblxuICAgICAgICBjYWxsYmFjayhyZWYpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIHByb3BlcnR5VmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpZiAoYmVnaW5zV2l0aChwcm9wZXJ0eU5hbWUsICdvbicpKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRzID0gcHJvcGVydHlOYW1lLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gcHJvcGVydHlWYWx1ZTsgIC8vL1xuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub24oZXZlbnRzLCBoYW5kbGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gcHJvcGVydHlWYWx1ZTtcblxuICAgICAgICAgIHN3aXRjaCAocHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdjbGFzc05hbWUnOlxuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gJ2NsYXNzJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2h0bWxGb3InOlxuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gJ2Zvcic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlOYW1lO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZVZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhpcy5hZGRPYmplY3RBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYWRkT2JqZWN0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuJGVsZW1lbnRbMF0sICAvLy9cbiAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZVZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlW2tleV07XG5cbiAgICAgIGRvbUVsZW1lbnRbYXR0cmlidXRlTmFtZV1ba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICB2YXIgZWxlbWVudCA9IEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBudWxsLFxuICAgICAgICBjaGlsZEpTWEVsZW1lbnRzID0gW107XG4gICAgXG4gICAgcmV0dXJuIG5ldyBKU1hFbGVtZW50KGVsZW1lbnQsIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYRWxlbWVudDtcblxuZnVuY3Rpb24gYmVnaW5zV2l0aChzdHJpbmcsIGJlZ2lubmluZ1N0cmluZykge1xuICB2YXIgcmVnRXhwID0gbmV3IFJlZ0V4cCgnXicgKyBiZWdpbm5pbmdTdHJpbmcpLFxuICAgICAgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaChyZWdFeHApO1xuXG4gIHJldHVybiAhIW1hdGNoZXM7IC8vL1xufVxuIl19