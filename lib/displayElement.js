'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseElement = require('./baseElement');

var DisplayElement = function (_BaseElement) {
  _inherits(DisplayElement, _BaseElement);

  function DisplayElement(domElementOrDisplayName, properties, children) {
    _classCallCheck(this, DisplayElement);

    var domElement;

    if (typeof domElementOrDisplayName === 'string') {
      var displayName = domElementOrDisplayName; ///

      domElement = document.createElement(displayName);
    } else {
      domElement = domElementOrDisplayName; ///
    }

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayElement).call(this, domElement));

    _this.addPropertiesToBaseElement(properties);

    children.forEach(function (child) {
      child.mount(this); ///
    }.bind(_this));
    return _this;
  }

  _createClass(DisplayElement, [{
    key: 'addPropertiesToBaseElement',
    value: function addPropertiesToBaseElement(properties) {
      if (properties === null) {
        return;
      }

      var domElement = this.getDOMElement(),
          propertyNames = Object.keys(properties);

      propertyNames.forEach(function (propertyName) {
        var propertyValue = properties[propertyName],
            attributeName,
            attributeValue;

        if (false) {} else if (propertyName === 'ref') {
          var callback = propertyValue,
              ///
          ref = domElement; ///

          callback(ref);
        } else if (beginsWith(propertyName, 'on')) {
          var onevent = lowercase(propertyName),
              ///
          handler = propertyValue; ///

          domElement[onevent] = handler;
        } else if (typeof propertyValue === 'string') {
          attributeName = attributeNameFromPropertyName(propertyName);
          attributeValue = propertyValue; ///

          domElement.setAttribute(attributeName, attributeValue);
        } else if ((typeof propertyValue === 'undefined' ? 'undefined' : _typeof(propertyValue)) === 'object') {
          attributeName = propertyName; ///

          var keys = Object.keys(propertyValue); ///
          keys.forEach(function (key) {
            var value = propertyValue[key];

            domElement[attributeName][key] = value;
          });
        } else {
          ///
        }
      });
    }
  }], [{
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      var properties = null,
          children = [];

      return new DisplayElement(domElement, properties, children);
    }
  }]);

  return DisplayElement;
}(BaseElement);

module.exports = DisplayElement;

function attributeNameFromPropertyName(propertyName) {
  switch (propertyName) {
    case 'className':
      return 'class';

    case 'htmlFor':
      return 'for';
  }

  return propertyName; ///
}

function lowercase(string) {
  return string.toLowerCase();
}

function beginsWith(string, beginningString) {
  var regExp = new RegExp('^' + beginningString),
      matches = string.match(regExp);

  return !!matches; ///
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9kaXNwbGF5RWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxjQUFjLFFBQVEsZUFBUixDQUFkOztJQUVFOzs7QUFDSixXQURJLGNBQ0osQ0FBWSx1QkFBWixFQUFxQyxVQUFyQyxFQUFpRCxRQUFqRCxFQUEyRDswQkFEdkQsZ0JBQ3VEOztBQUN6RCxRQUFJLFVBQUosQ0FEeUQ7O0FBR3pELFFBQUksT0FBTyx1QkFBUCxLQUFtQyxRQUFuQyxFQUE2QztBQUMvQyxVQUFJLGNBQWMsdUJBQWQ7O0FBRDJDLGdCQUcvQyxHQUFhLFNBQVMsYUFBVCxDQUF1QixXQUF2QixDQUFiLENBSCtDO0tBQWpELE1BSU87QUFDTCxtQkFBYSx1QkFBYjtBQURLLEtBSlA7O3VFQUpFLDJCQVlJLGFBWG1EOztBQWF6RCxVQUFLLDBCQUFMLENBQWdDLFVBQWhDLEVBYnlEOztBQWV6RCxhQUFTLE9BQVQsQ0FBaUIsVUFBUyxLQUFULEVBQWdCO0FBQy9CLFlBQU0sS0FBTixDQUFZLElBQVo7QUFEK0IsS0FBaEIsQ0FFZixJQUZlLE9BQWpCLEVBZnlEOztHQUEzRDs7ZUFESTs7K0NBcUJ1QixZQUFZO0FBQ3JDLFVBQUksZUFBZSxJQUFmLEVBQXFCO0FBQ3ZCLGVBRHVCO09BQXpCOztBQUlBLFVBQUksYUFBYSxLQUFLLGFBQUwsRUFBYjtVQUNBLGdCQUFnQixPQUFPLElBQVAsQ0FBWSxVQUFaLENBQWhCLENBTmlDOztBQVFyQyxvQkFBYyxPQUFkLENBQXNCLFVBQVUsWUFBVixFQUF3QjtBQUM1QyxZQUFJLGdCQUFnQixXQUFXLFlBQVgsQ0FBaEI7WUFDQSxhQURKO1lBRUksY0FGSixDQUQ0Qzs7QUFLNUMsWUFBSSxLQUFKLEVBQVcsRUFBWCxNQUVPLElBQUksaUJBQWlCLEtBQWpCLEVBQXdCO0FBQ2pDLGNBQUksV0FBVyxhQUFYOztBQUNBLGdCQUFNLFVBQU47O0FBRjZCLGtCQUlqQyxDQUFTLEdBQVQsRUFKaUM7U0FBNUIsTUFLQSxJQUFJLFdBQVcsWUFBWCxFQUF5QixJQUF6QixDQUFKLEVBQW9DO0FBQ3pDLGNBQUksVUFBVSxVQUFVLFlBQVYsQ0FBVjs7QUFDQSxvQkFBVSxhQUFWOztBQUZxQyxvQkFJekMsQ0FBVyxPQUFYLElBQXNCLE9BQXRCLENBSnlDO1NBQXBDLE1BS0EsSUFBSSxPQUFPLGFBQVAsS0FBeUIsUUFBekIsRUFBbUM7QUFDNUMsMEJBQWdCLDhCQUE4QixZQUE5QixDQUFoQixDQUQ0QztBQUU1QywyQkFBaUIsYUFBakI7O0FBRjRDLG9CQUk1QyxDQUFXLFlBQVgsQ0FBd0IsYUFBeEIsRUFBdUMsY0FBdkMsRUFKNEM7U0FBdkMsTUFLQSxJQUFJLFFBQU8scUVBQVAsS0FBeUIsUUFBekIsRUFBbUM7QUFDNUMsMEJBQWdCLFlBQWhCOztBQUQ0QyxjQUd4QyxPQUFPLE9BQU8sSUFBUCxDQUFZLGFBQVosQ0FBUDtBQUh3QyxjQUk1QyxDQUFLLE9BQUwsQ0FBYSxVQUFTLEdBQVQsRUFBYztBQUN6QixnQkFBSSxRQUFRLGNBQWMsR0FBZCxDQUFSLENBRHFCOztBQUd6Qix1QkFBVyxhQUFYLEVBQTBCLEdBQTFCLElBQWlDLEtBQWpDLENBSHlCO1dBQWQsQ0FBYixDQUo0QztTQUF2QyxNQVNBOztTQVRBO09BdEJhLENBQXRCLENBUnFDOzs7O21DQTZDakIsWUFBWTtBQUNoQyxVQUFJLGFBQWEsSUFBYjtVQUNBLFdBQVcsRUFBWCxDQUY0Qjs7QUFJaEMsYUFBTyxJQUFJLGNBQUosQ0FBbUIsVUFBbkIsRUFBK0IsVUFBL0IsRUFBMkMsUUFBM0MsQ0FBUCxDQUpnQzs7OztTQWxFOUI7RUFBdUI7O0FBMEU3QixPQUFPLE9BQVAsR0FBaUIsY0FBakI7O0FBRUEsU0FBUyw2QkFBVCxDQUF1QyxZQUF2QyxFQUFxRDtBQUNuRCxVQUFRLFlBQVI7QUFDRSxTQUFLLFdBQUw7QUFDRSxhQUFPLE9BQVAsQ0FERjs7QUFERixTQUlPLFNBQUw7QUFDRSxhQUFPLEtBQVAsQ0FERjtBQUpGLEdBRG1EOztBQVNuRCxTQUFPLFlBQVA7QUFUbUQsQ0FBckQ7O0FBWUEsU0FBUyxTQUFULENBQW1CLE1BQW5CLEVBQTJCO0FBQ3pCLFNBQU8sT0FBTyxXQUFQLEVBQVAsQ0FEeUI7Q0FBM0I7O0FBSUEsU0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCLGVBQTVCLEVBQTZDO0FBQzNDLE1BQUksU0FBUyxJQUFJLE1BQUosQ0FBVyxNQUFNLGVBQU4sQ0FBcEI7TUFDQSxVQUFVLE9BQU8sS0FBUCxDQUFhLE1BQWIsQ0FBVixDQUZ1Qzs7QUFJM0MsU0FBTyxDQUFDLENBQUMsT0FBRDtBQUptQyxDQUE3QyIsImZpbGUiOiJkaXNwbGF5RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEJhc2VFbGVtZW50ID0gcmVxdWlyZSgnLi9iYXNlRWxlbWVudCcpO1xuXG5jbGFzcyBEaXNwbGF5RWxlbWVudCBleHRlbmRzIEJhc2VFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudE9yRGlzcGxheU5hbWUsIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgdmFyIGRvbUVsZW1lbnQ7XG5cbiAgICBpZiAodHlwZW9mIGRvbUVsZW1lbnRPckRpc3BsYXlOYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gZG9tRWxlbWVudE9yRGlzcGxheU5hbWU7ICAvLy9cblxuICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGlzcGxheU5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21FbGVtZW50ID0gZG9tRWxlbWVudE9yRGlzcGxheU5hbWU7IC8vL1xuICAgIH1cbiAgICBcbiAgICBzdXBlcihkb21FbGVtZW50KTtcblxuICAgIHRoaXMuYWRkUHJvcGVydGllc1RvQmFzZUVsZW1lbnQocHJvcGVydGllcyk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudCh0aGlzKTsgIC8vL1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbiAgXG4gIGFkZFByb3BlcnRpZXNUb0Jhc2VFbGVtZW50KHByb3BlcnRpZXMpIHtcbiAgICBpZiAocHJvcGVydGllcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgIHByb3BlcnR5TmFtZXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKTtcblxuICAgIHByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICB2YXIgcHJvcGVydHlWYWx1ZSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eU5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHByb3BlcnR5VmFsdWUsIC8vL1xuICAgICAgICAgICAgcmVmID0gZG9tRWxlbWVudDsgLy8vXG4gICAgICAgIFxuICAgICAgICBjYWxsYmFjayhyZWYpXG4gICAgICB9IGVsc2UgaWYgKGJlZ2luc1dpdGgocHJvcGVydHlOYW1lLCAnb24nKSkge1xuICAgICAgICB2YXIgb25ldmVudCA9IGxvd2VyY2FzZShwcm9wZXJ0eU5hbWUpLCAgLy8vXG4gICAgICAgICAgICBoYW5kbGVyID0gcHJvcGVydHlWYWx1ZTsgIC8vL1xuXG4gICAgICAgIGRvbUVsZW1lbnRbb25ldmVudF0gPSBoYW5kbGVyO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcGVydHlWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZU5hbWVGcm9tUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gcHJvcGVydHlWYWx1ZTsgLy8vXG5cbiAgICAgICAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcGVydHlWYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYXR0cmlidXRlTmFtZSA9IHByb3BlcnR5TmFtZTsgLy8vXG5cbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0eVZhbHVlKTsgLy8vXG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBwcm9wZXJ0eVZhbHVlW2tleV07XG5cbiAgICAgICAgICBkb21FbGVtZW50W2F0dHJpYnV0ZU5hbWVdW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLy9cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBudWxsLFxuICAgICAgICBjaGlsZHJlbiA9IFtdO1xuICAgIFxuICAgIHJldHVybiBuZXcgRGlzcGxheUVsZW1lbnQoZG9tRWxlbWVudCwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzcGxheUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZU5hbWVGcm9tUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSkge1xuICBzd2l0Y2ggKHByb3BlcnR5TmFtZSkge1xuICAgIGNhc2UgJ2NsYXNzTmFtZSc6XG4gICAgICByZXR1cm4gJ2NsYXNzJztcblxuICAgIGNhc2UgJ2h0bWxGb3InOlxuICAgICAgcmV0dXJuICdmb3InO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5TmFtZTsgIC8vL1xufVxuXG5mdW5jdGlvbiBsb3dlcmNhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gYmVnaW5zV2l0aChzdHJpbmcsIGJlZ2lubmluZ1N0cmluZykge1xuICB2YXIgcmVnRXhwID0gbmV3IFJlZ0V4cCgnXicgKyBiZWdpbm5pbmdTdHJpbmcpLFxuICAgICAgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaChyZWdFeHApO1xuXG4gIHJldHVybiAhIW1hdGNoZXM7IC8vL1xufVxuIl19