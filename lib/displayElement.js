'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var DisplayElement = function (_Element) {
  _inherits(DisplayElement, _Element);

  function DisplayElement(displayNameOrDOMElement, properties, children) {
    _classCallCheck(this, DisplayElement);

    var domElement = typeof displayNameOrDOMElement === 'string' ? document.createElement(displayNameOrDOMElement) : ///
    displayNameOrDOMElement; ///

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayElement).call(this, domElement));

    _this.properties = properties;

    _this.children = children;
    return _this;
  }

  _createClass(DisplayElement, [{
    key: 'mount',
    value: function mount(parent) {
      _get(Object.getPrototypeOf(DisplayElement.prototype), 'mount', this).call(this, parent);

      this.children.forEach(function (child) {
        child.mount(this);
      }.bind(this));

      this.applyProperties();
    }
  }, {
    key: 'remount',
    value: function remount(previousSibling) {
      _get(Object.getPrototypeOf(DisplayElement.prototype), 'remount', this).call(this, previousSibling);

      this.children.forEach(function (child) {
        child.mount(this);
      }.bind(this));

      this.applyProperties();
    }
  }, {
    key: 'remove',
    value: function remove() {
      ///

      _get(Object.getPrototypeOf(DisplayElement.prototype), 'remove', this).call(this);
    }
  }, {
    key: 'applyProperties',
    value: function applyProperties() {
      if (this.properties === null) {
        return;
      }

      var domElement = this.getDOMElement(),
          propertyNames = Object.keys(this.properties);

      propertyNames.forEach(function (propertyName) {
        var propertyValue = this.properties[propertyName],
            attributeName,
            attributeValue;

        if (false) {} else if (propertyName === 'ref') {
          var callback = propertyValue,
              ///
          ref = domElement; ///

          callback(ref);
        } else if (beginsWith(propertyName, 'on')) {
          var handlerName = lowercase(propertyName),
              ///
          handler = propertyValue; ///

          domElement[handlerName] = handler;
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
      }.bind(this));
    }
  }]);

  return DisplayElement;
}(Element);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9kaXNwbGF5RWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFVBQVUsUUFBUSxXQUFSLENBQVY7O0lBRUU7OztBQUNKLFdBREksY0FDSixDQUFZLHVCQUFaLEVBQXFDLFVBQXJDLEVBQWlELFFBQWpELEVBQTJEOzBCQUR2RCxnQkFDdUQ7O0FBQ3pELFFBQUksYUFBYSxPQUFRLHVCQUFQLEtBQW1DLFFBQW5DLEdBQ0MsU0FBUyxhQUFULENBQXVCLHVCQUF2QixDQURGO0FBRUksMkJBRko7O0FBRHdDLHVFQUR2RCwyQkFNSSxhQUxtRDs7QUFPekQsVUFBSyxVQUFMLEdBQWtCLFVBQWxCLENBUHlEOztBQVN6RCxVQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FUeUQ7O0dBQTNEOztlQURJOzswQkFhRSxRQUFRO0FBQ1osaUNBZEUscURBY1UsT0FBWixDQURZOztBQUdaLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sS0FBTixDQUFZLElBQVosRUFEb0M7T0FBaEIsQ0FFcEIsSUFGb0IsQ0FFZixJQUZlLENBQXRCLEVBSFk7O0FBT1osV0FBSyxlQUFMLEdBUFk7Ozs7NEJBVU4saUJBQWlCO0FBQ3ZCLGlDQXhCRSx1REF3QlksZ0JBQWQsQ0FEdUI7O0FBR3ZCLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sS0FBTixDQUFZLElBQVosRUFEb0M7T0FBaEIsQ0FFcEIsSUFGb0IsQ0FFZixJQUZlLENBQXRCLEVBSHVCOztBQU92QixXQUFLLGVBQUwsR0FQdUI7Ozs7NkJBVWhCOzs7QUFHUCxpQ0FwQ0UscURBb0NGLENBSE87Ozs7c0NBTVM7QUFDaEIsVUFBSSxLQUFLLFVBQUwsS0FBb0IsSUFBcEIsRUFBMEI7QUFDNUIsZUFENEI7T0FBOUI7O0FBSUEsVUFBSSxhQUFhLEtBQUssYUFBTCxFQUFiO1VBQ0EsZ0JBQWdCLE9BQU8sSUFBUCxDQUFZLEtBQUssVUFBTCxDQUE1QixDQU5ZOztBQVFoQixvQkFBYyxPQUFkLENBQXNCLFVBQVUsWUFBVixFQUF3QjtBQUM1QyxZQUFJLGdCQUFnQixLQUFLLFVBQUwsQ0FBZ0IsWUFBaEIsQ0FBaEI7WUFDQSxhQURKO1lBRUksY0FGSixDQUQ0Qzs7QUFLNUMsWUFBSSxLQUFKLEVBQVcsRUFBWCxNQUVPLElBQUksaUJBQWlCLEtBQWpCLEVBQXdCO0FBQ2pDLGNBQUksV0FBVyxhQUFYOztBQUNBLGdCQUFNLFVBQU47O0FBRjZCLGtCQUlqQyxDQUFTLEdBQVQsRUFKaUM7U0FBNUIsTUFLQSxJQUFJLFdBQVcsWUFBWCxFQUF5QixJQUF6QixDQUFKLEVBQW9DO0FBQ3pDLGNBQUksY0FBYyxVQUFVLFlBQVYsQ0FBZDs7QUFDQSxvQkFBVSxhQUFWOztBQUZxQyxvQkFJekMsQ0FBVyxXQUFYLElBQTBCLE9BQTFCLENBSnlDO1NBQXBDLE1BS0EsSUFBSSxPQUFPLGFBQVAsS0FBeUIsUUFBekIsRUFBbUM7QUFDNUMsMEJBQWdCLDhCQUE4QixZQUE5QixDQUFoQixDQUQ0QztBQUU1QywyQkFBaUIsYUFBakI7O0FBRjRDLG9CQUk1QyxDQUFXLFlBQVgsQ0FBd0IsYUFBeEIsRUFBdUMsY0FBdkMsRUFKNEM7U0FBdkMsTUFLQSxJQUFJLFFBQU8scUVBQVAsS0FBeUIsUUFBekIsRUFBbUM7QUFDNUMsMEJBQWdCLFlBQWhCOztBQUQ0QyxjQUd4QyxPQUFPLE9BQU8sSUFBUCxDQUFZLGFBQVosQ0FBUDtBQUh3QyxjQUk1QyxDQUFLLE9BQUwsQ0FBYSxVQUFTLEdBQVQsRUFBYztBQUN6QixnQkFBSSxRQUFRLGNBQWMsR0FBZCxDQUFSLENBRHFCOztBQUd6Qix1QkFBVyxhQUFYLEVBQTBCLEdBQTFCLElBQWlDLEtBQWpDLENBSHlCO1dBQWQsQ0FBYixDQUo0QztTQUF2QyxNQVNBOztTQVRBO09BdEJhLENBa0NwQixJQWxDb0IsQ0FrQ2YsSUFsQ2UsQ0FBdEIsRUFSZ0I7Ozs7U0F2Q2Q7RUFBdUI7O0FBcUY3QixPQUFPLE9BQVAsR0FBaUIsY0FBakI7O0FBRUEsU0FBUyw2QkFBVCxDQUF1QyxZQUF2QyxFQUFxRDtBQUNuRCxVQUFRLFlBQVI7QUFDRSxTQUFLLFdBQUw7QUFDRSxhQUFPLE9BQVAsQ0FERjs7QUFERixTQUlPLFNBQUw7QUFDRSxhQUFPLEtBQVAsQ0FERjtBQUpGLEdBRG1EOztBQVNuRCxTQUFPLFlBQVA7QUFUbUQsQ0FBckQ7O0FBWUEsU0FBUyxTQUFULENBQW1CLE1BQW5CLEVBQTJCO0FBQ3pCLFNBQU8sT0FBTyxXQUFQLEVBQVAsQ0FEeUI7Q0FBM0I7O0FBSUEsU0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCLGVBQTVCLEVBQTZDO0FBQzNDLE1BQUksU0FBUyxJQUFJLE1BQUosQ0FBVyxNQUFNLGVBQU4sQ0FBcEI7TUFDQSxVQUFVLE9BQU8sS0FBUCxDQUFhLE1BQWIsQ0FBVixDQUZ1Qzs7QUFJM0MsU0FBTyxDQUFDLENBQUMsT0FBRDtBQUptQyxDQUE3QyIsImZpbGUiOiJkaXNwbGF5RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgRGlzcGxheUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZGlzcGxheU5hbWVPckRPTUVsZW1lbnQsIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSAodHlwZW9mIGRpc3BsYXlOYW1lT3JET01FbGVtZW50ID09PSAnc3RyaW5nJykgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkaXNwbGF5TmFtZU9yRE9NRWxlbWVudCkgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZU9yRE9NRWxlbWVudDsgLy8vXG4gICAgXG4gICAgc3VwZXIoZG9tRWxlbWVudCk7XG4gICAgXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KHRoaXMpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmFwcGx5UHJvcGVydGllcygpO1xuICB9XG5cbiAgcmVtb3VudChwcmV2aW91c1NpYmxpbmcpIHtcbiAgICBzdXBlci5yZW1vdW50KHByZXZpb3VzU2libGluZyk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KHRoaXMpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmFwcGx5UHJvcGVydGllcygpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIC8vL1xuICAgIFxuICAgIHN1cGVyLnJlbW92ZSgpO1xuICB9XG5cbiAgYXBwbHlQcm9wZXJ0aWVzKCkge1xuICAgIGlmICh0aGlzLnByb3BlcnRpZXMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wZXJ0aWVzKTtcblxuICAgIHByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICB2YXIgcHJvcGVydHlWYWx1ZSA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWU7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHByb3BlcnR5TmFtZSA9PT0gJ3JlZicpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gcHJvcGVydHlWYWx1ZSwgLy8vXG4gICAgICAgICAgICByZWYgPSBkb21FbGVtZW50OyAvLy9cbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKHJlZilcbiAgICAgIH0gZWxzZSBpZiAoYmVnaW5zV2l0aChwcm9wZXJ0eU5hbWUsICdvbicpKSB7XG4gICAgICAgIHZhciBoYW5kbGVyTmFtZSA9IGxvd2VyY2FzZShwcm9wZXJ0eU5hbWUpLCAgLy8vXG4gICAgICAgICAgICBoYW5kbGVyID0gcHJvcGVydHlWYWx1ZTsgIC8vL1xuXG4gICAgICAgIGRvbUVsZW1lbnRbaGFuZGxlck5hbWVdID0gaGFuZGxlcjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BlcnR5VmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGVOYW1lRnJvbVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHByb3BlcnR5VmFsdWU7IC8vL1xuXG4gICAgICAgIGRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BlcnR5VmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eU5hbWU7IC8vL1xuXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydHlWYWx1ZSk7IC8vL1xuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gcHJvcGVydHlWYWx1ZVtrZXldO1xuXG4gICAgICAgICAgZG9tRWxlbWVudFthdHRyaWJ1dGVOYW1lXVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8vXG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BsYXlFbGVtZW50O1xuXG5mdW5jdGlvbiBhdHRyaWJ1dGVOYW1lRnJvbVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgc3dpdGNoIChwcm9wZXJ0eU5hbWUpIHtcbiAgICBjYXNlICdjbGFzc05hbWUnOlxuICAgICAgcmV0dXJuICdjbGFzcyc7XG5cbiAgICBjYXNlICdodG1sRm9yJzpcbiAgICAgIHJldHVybiAnZm9yJztcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eU5hbWU7ICAvLy9cbn1cblxuZnVuY3Rpb24gbG93ZXJjYXNlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGJlZ2luc1dpdGgoc3RyaW5nLCBiZWdpbm5pbmdTdHJpbmcpIHtcbiAgdmFyIHJlZ0V4cCA9IG5ldyBSZWdFeHAoJ14nICsgYmVnaW5uaW5nU3RyaW5nKSxcbiAgICAgIG1hdGNoZXMgPSBzdHJpbmcubWF0Y2gocmVnRXhwKTtcblxuICByZXR1cm4gISFtYXRjaGVzOyAvLy9cbn1cbiJdfQ==