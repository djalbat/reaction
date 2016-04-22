'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSXDOMElement = require('./jsxDOMElement');

var JSXDisplayElement = function (_JSXDOMElement) {
  _inherits(JSXDisplayElement, _JSXDOMElement);

  function JSXDisplayElement(refOrDisplayName, properties, children) {
    _classCallCheck(this, JSXDisplayElement);

    var ref;

    if (typeof refOrDisplayName === 'string') {
      var displayName = refOrDisplayName; ///

      ref = document.createElement(displayName);
    } else {
      ref = refOrDisplayName; ///
    }

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JSXDisplayElement).call(this, ref));

    _this.addPropertiesToDOMElement(properties);

    children.forEach(function (child) {
      child.mount(this); ///
    }.bind(_this));
    return _this;
  }

  _createClass(JSXDisplayElement, [{
    key: 'addPropertiesToDOMElement',
    value: function addPropertiesToDOMElement(properties) {
      if (properties === null) {
        return;
      }

      var ref = this.getRef(),
          propertyNames = Object.keys(properties);

      propertyNames.forEach(function (propertyName) {
        var propertyValue = properties[propertyName],
            attributeName,
            attributeValue;

        if (false) {} else if (propertyName === 'ref') {
          var callback = propertyValue; ///

          callback(ref);
        } else if (beginsWith(propertyName, 'on')) {
          var onevent = lowercase(propertyName),
              ///
          handler = propertyValue; ///

          ref[onevent] = handler;
        } else if (typeof propertyValue === 'string') {
          attributeName = attributeNameFromPropertyName(propertyName);
          attributeValue = propertyValue; ///

          ref.setAttribute(attributeName, attributeValue);
        } else if ((typeof propertyValue === 'undefined' ? 'undefined' : _typeof(propertyValue)) === 'object') {
          attributeName = propertyName; ///

          var keys = Object.keys(propertyValue); ///
          keys.forEach(function (key) {
            var value = propertyValue[key];

            ref[attributeName][key] = value;
          });
        } else {
          ///
        }
      });
    }
  }], [{
    key: 'fromRef',
    value: function fromRef(ref) {
      var properties = null,
          children = [];

      return new JSXDisplayElement(ref, properties, children);
    }
  }]);

  return JSXDisplayElement;
}(JSXDOMElement);

module.exports = JSXDisplayElement;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hEaXNwbGF5RWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxnQkFBZ0IsUUFBUSxpQkFBUixDQUFoQjs7SUFFRTs7O0FBQ0osV0FESSxpQkFDSixDQUFZLGdCQUFaLEVBQThCLFVBQTlCLEVBQTBDLFFBQTFDLEVBQW9EOzBCQURoRCxtQkFDZ0Q7O0FBQ2xELFFBQUksR0FBSixDQURrRDs7QUFHbEQsUUFBSSxPQUFPLGdCQUFQLEtBQTRCLFFBQTVCLEVBQXNDO0FBQ3hDLFVBQUksY0FBYyxnQkFBZDs7QUFEb0MsU0FHeEMsR0FBTSxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBTixDQUh3QztLQUExQyxNQUlPO0FBQ0wsWUFBTSxnQkFBTjtBQURLLEtBSlA7O3VFQUpFLDhCQVlJLE1BWDRDOztBQWFsRCxVQUFLLHlCQUFMLENBQStCLFVBQS9CLEVBYmtEOztBQWVsRCxhQUFTLE9BQVQsQ0FBaUIsVUFBUyxLQUFULEVBQWdCO0FBQy9CLFlBQU0sS0FBTixDQUFZLElBQVo7QUFEK0IsS0FBaEIsQ0FFZixJQUZlLE9BQWpCLEVBZmtEOztHQUFwRDs7ZUFESTs7OENBcUJzQixZQUFZO0FBQ3BDLFVBQUksZUFBZSxJQUFmLEVBQXFCO0FBQ3ZCLGVBRHVCO09BQXpCOztBQUlBLFVBQUksTUFBTSxLQUFLLE1BQUwsRUFBTjtVQUNBLGdCQUFnQixPQUFPLElBQVAsQ0FBWSxVQUFaLENBQWhCLENBTmdDOztBQVFwQyxvQkFBYyxPQUFkLENBQXNCLFVBQVUsWUFBVixFQUF3QjtBQUM1QyxZQUFJLGdCQUFnQixXQUFXLFlBQVgsQ0FBaEI7WUFDQSxhQURKO1lBRUksY0FGSixDQUQ0Qzs7QUFLNUMsWUFBSSxLQUFKLEVBQVcsRUFBWCxNQUVPLElBQUksaUJBQWlCLEtBQWpCLEVBQXdCO0FBQ2pDLGNBQUksV0FBVyxhQUFYOztBQUQ2QixrQkFHakMsQ0FBUyxHQUFULEVBSGlDO1NBQTVCLE1BSUEsSUFBSSxXQUFXLFlBQVgsRUFBeUIsSUFBekIsQ0FBSixFQUFvQztBQUN6QyxjQUFJLFVBQVUsVUFBVSxZQUFWLENBQVY7O0FBQ0Esb0JBQVUsYUFBVjs7QUFGcUMsYUFJekMsQ0FBSSxPQUFKLElBQWUsT0FBZixDQUp5QztTQUFwQyxNQUtBLElBQUksT0FBTyxhQUFQLEtBQXlCLFFBQXpCLEVBQW1DO0FBQzVDLDBCQUFnQiw4QkFBOEIsWUFBOUIsQ0FBaEIsQ0FENEM7QUFFNUMsMkJBQWlCLGFBQWpCOztBQUY0QyxhQUk1QyxDQUFJLFlBQUosQ0FBaUIsYUFBakIsRUFBZ0MsY0FBaEMsRUFKNEM7U0FBdkMsTUFLQSxJQUFJLFFBQU8scUVBQVAsS0FBeUIsUUFBekIsRUFBbUM7QUFDNUMsMEJBQWdCLFlBQWhCOztBQUQ0QyxjQUd4QyxPQUFPLE9BQU8sSUFBUCxDQUFZLGFBQVosQ0FBUDtBQUh3QyxjQUk1QyxDQUFLLE9BQUwsQ0FBYSxVQUFTLEdBQVQsRUFBYztBQUN6QixnQkFBSSxRQUFRLGNBQWMsR0FBZCxDQUFSLENBRHFCOztBQUd6QixnQkFBSSxhQUFKLEVBQW1CLEdBQW5CLElBQTBCLEtBQTFCLENBSHlCO1dBQWQsQ0FBYixDQUo0QztTQUF2QyxNQVNBOztTQVRBO09BckJhLENBQXRCLENBUm9DOzs7OzRCQTRDdkIsS0FBSztBQUNsQixVQUFJLGFBQWEsSUFBYjtVQUNBLFdBQVcsRUFBWCxDQUZjOztBQUlsQixhQUFPLElBQUksaUJBQUosQ0FBc0IsR0FBdEIsRUFBMkIsVUFBM0IsRUFBdUMsUUFBdkMsQ0FBUCxDQUprQjs7OztTQWpFaEI7RUFBMEI7O0FBeUVoQyxPQUFPLE9BQVAsR0FBaUIsaUJBQWpCOztBQUVBLFNBQVMsNkJBQVQsQ0FBdUMsWUFBdkMsRUFBcUQ7QUFDbkQsVUFBUSxZQUFSO0FBQ0UsU0FBSyxXQUFMO0FBQ0UsYUFBTyxPQUFQLENBREY7O0FBREYsU0FJTyxTQUFMO0FBQ0UsYUFBTyxLQUFQLENBREY7QUFKRixHQURtRDs7QUFTbkQsU0FBTyxZQUFQO0FBVG1ELENBQXJEOztBQVlBLFNBQVMsU0FBVCxDQUFtQixNQUFuQixFQUEyQjtBQUN6QixTQUFPLE9BQU8sV0FBUCxFQUFQLENBRHlCO0NBQTNCOztBQUlBLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QixlQUE1QixFQUE2QztBQUMzQyxNQUFJLFNBQVMsSUFBSSxNQUFKLENBQVcsTUFBTSxlQUFOLENBQXBCO01BQ0EsVUFBVSxPQUFPLEtBQVAsQ0FBYSxNQUFiLENBQVYsQ0FGdUM7O0FBSTNDLFNBQU8sQ0FBQyxDQUFDLE9BQUQ7QUFKbUMsQ0FBN0MiLCJmaWxlIjoianN4RGlzcGxheUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBKU1hET01FbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hET01FbGVtZW50Jyk7XG5cbmNsYXNzIEpTWERpc3BsYXlFbGVtZW50IGV4dGVuZHMgSlNYRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlZk9yRGlzcGxheU5hbWUsIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgdmFyIHJlZjtcblxuICAgIGlmICh0eXBlb2YgcmVmT3JEaXNwbGF5TmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHJlZk9yRGlzcGxheU5hbWU7ICAvLy9cblxuICAgICAgcmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkaXNwbGF5TmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZiA9IHJlZk9yRGlzcGxheU5hbWU7IC8vL1xuICAgIH1cbiAgICBcbiAgICBzdXBlcihyZWYpO1xuXG4gICAgdGhpcy5hZGRQcm9wZXJ0aWVzVG9ET01FbGVtZW50KHByb3BlcnRpZXMpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQodGhpcyk7ICAvLy9cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG4gIFxuICBhZGRQcm9wZXJ0aWVzVG9ET01FbGVtZW50KHByb3BlcnRpZXMpIHtcbiAgICBpZiAocHJvcGVydGllcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciByZWYgPSB0aGlzLmdldFJlZigpLFxuICAgICAgICBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XG5cbiAgICBwcm9wZXJ0eU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgdmFyIHByb3BlcnR5VmFsdWUgPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAocHJvcGVydHlOYW1lID09PSAncmVmJykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBwcm9wZXJ0eVZhbHVlOyAvLy9cblxuICAgICAgICBjYWxsYmFjayhyZWYpXG4gICAgICB9IGVsc2UgaWYgKGJlZ2luc1dpdGgocHJvcGVydHlOYW1lLCAnb24nKSkge1xuICAgICAgICB2YXIgb25ldmVudCA9IGxvd2VyY2FzZShwcm9wZXJ0eU5hbWUpLCAgLy8vXG4gICAgICAgICAgICBoYW5kbGVyID0gcHJvcGVydHlWYWx1ZTsgIC8vL1xuXG4gICAgICAgIHJlZltvbmV2ZW50XSA9IGhhbmRsZXI7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wZXJ0eVZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlTmFtZUZyb21Qcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBwcm9wZXJ0eVZhbHVlOyAvLy9cblxuICAgICAgICByZWYuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BlcnR5VmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eU5hbWU7IC8vL1xuXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydHlWYWx1ZSk7IC8vL1xuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gcHJvcGVydHlWYWx1ZVtrZXldO1xuXG4gICAgICAgICAgcmVmW2F0dHJpYnV0ZU5hbWVdW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLy9cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVmKHJlZikge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgY2hpbGRyZW4gPSBbXTtcbiAgICBcbiAgICByZXR1cm4gbmV3IEpTWERpc3BsYXlFbGVtZW50KHJlZiwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYRGlzcGxheUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZU5hbWVGcm9tUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSkge1xuICBzd2l0Y2ggKHByb3BlcnR5TmFtZSkge1xuICAgIGNhc2UgJ2NsYXNzTmFtZSc6XG4gICAgICByZXR1cm4gJ2NsYXNzJztcblxuICAgIGNhc2UgJ2h0bWxGb3InOlxuICAgICAgcmV0dXJuICdmb3InO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5TmFtZTsgIC8vL1xufVxuXG5mdW5jdGlvbiBsb3dlcmNhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gYmVnaW5zV2l0aChzdHJpbmcsIGJlZ2lubmluZ1N0cmluZykge1xuICB2YXIgcmVnRXhwID0gbmV3IFJlZ0V4cCgnXicgKyBiZWdpbm5pbmdTdHJpbmcpLFxuICAgICAgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaChyZWdFeHApO1xuXG4gIHJldHVybiAhIW1hdGNoZXM7IC8vL1xufVxuIl19