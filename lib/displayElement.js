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

    var domElement = typeof displayNameOrDOMElement === 'string' ? document.createElement(displayNameOrDOMElement) : displayNameOrDOMElement;

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayElement).call(this, domElement));

    _this.properties = properties;

    _this.children = children;
    return _this;
  }

  _createClass(DisplayElement, [{
    key: 'mount',
    value: function mount(parent, context) {
      _get(Object.getPrototypeOf(DisplayElement.prototype), 'mount', this).call(this, parent);

      this.children.forEach(function (child) {
        child.mount(this, context);
      }.bind(this));

      this.applyProperties();
    }
  }, {
    key: 'remount',
    value: function remount(previousSibling, context) {
      _get(Object.getPrototypeOf(DisplayElement.prototype), 'remount', this).call(this, previousSibling);

      this.children.forEach(function (child) {
        child.mount(this, context);
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
              ref = domElement;

          callback(ref);
        } else if (beginsWith(propertyName, 'on')) {
          var handlerName = lowercase(propertyName),
              handler = propertyValue;

          domElement[handlerName] = handler;
        } else if (typeof propertyValue === 'string') {
          attributeName = attributeNameFromPropertyName(propertyName);
          attributeValue = propertyValue;

          domElement.setAttribute(attributeName, attributeValue);
        } else if ((typeof propertyValue === 'undefined' ? 'undefined' : _typeof(propertyValue)) === 'object') {
          attributeName = propertyName;

          var keys = Object.keys(propertyValue);
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

  return propertyName;
}

function lowercase(string) {
  return string.toLowerCase();
}

function beginsWith(string, beginningString) {
  var regExp = new RegExp('^' + beginningString),
      matches = string.match(regExp);

  return !!matches; ///
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9kaXNwbGF5RWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFVBQVUsUUFBUSxXQUFSLENBQVY7O0lBRUU7OztBQUNKLFdBREksY0FDSixDQUFZLHVCQUFaLEVBQXFDLFVBQXJDLEVBQWlELFFBQWpELEVBQTJEOzBCQUR2RCxnQkFDdUQ7O0FBQ3pELFFBQUksYUFBYSxPQUFRLHVCQUFQLEtBQW1DLFFBQW5DLEdBQ0MsU0FBUyxhQUFULENBQXVCLHVCQUF2QixDQURGLEdBRUksdUJBRkosQ0FEd0M7O3VFQUR2RCwyQkFNSSxhQUxtRDs7QUFPekQsVUFBSyxVQUFMLEdBQWtCLFVBQWxCLENBUHlEOztBQVN6RCxVQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FUeUQ7O0dBQTNEOztlQURJOzswQkFhRSxRQUFRLFNBQVM7QUFDckIsaUNBZEUscURBY1UsT0FBWixDQURxQjs7QUFHckIsV0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixVQUFTLEtBQVQsRUFBZ0I7QUFDcEMsY0FBTSxLQUFOLENBQVksSUFBWixFQUFrQixPQUFsQixFQURvQztPQUFoQixDQUVwQixJQUZvQixDQUVmLElBRmUsQ0FBdEIsRUFIcUI7O0FBT3JCLFdBQUssZUFBTCxHQVBxQjs7Ozs0QkFVZixpQkFBaUIsU0FBUztBQUNoQyxpQ0F4QkUsdURBd0JZLGdCQUFkLENBRGdDOztBQUdoQyxXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQVMsS0FBVCxFQUFnQjtBQUNwQyxjQUFNLEtBQU4sQ0FBWSxJQUFaLEVBQWtCLE9BQWxCLEVBRG9DO09BQWhCLENBRXBCLElBRm9CLENBRWYsSUFGZSxDQUF0QixFQUhnQzs7QUFPaEMsV0FBSyxlQUFMLEdBUGdDOzs7OzZCQVV6Qjs7O0FBR1AsaUNBcENFLHFEQW9DRixDQUhPOzs7O3NDQU1TO0FBQ2hCLFVBQUksS0FBSyxVQUFMLEtBQW9CLElBQXBCLEVBQTBCO0FBQzVCLGVBRDRCO09BQTlCOztBQUlBLFVBQUksYUFBYSxLQUFLLGFBQUwsRUFBYjtVQUNBLGdCQUFnQixPQUFPLElBQVAsQ0FBWSxLQUFLLFVBQUwsQ0FBNUIsQ0FOWTs7QUFRaEIsb0JBQWMsT0FBZCxDQUFzQixVQUFVLFlBQVYsRUFBd0I7QUFDNUMsWUFBSSxnQkFBZ0IsS0FBSyxVQUFMLENBQWdCLFlBQWhCLENBQWhCO1lBQ0EsYUFESjtZQUVJLGNBRkosQ0FENEM7O0FBSzVDLFlBQUksS0FBSixFQUFXLEVBQVgsTUFFTyxJQUFJLGlCQUFpQixLQUFqQixFQUF3QjtBQUNqQyxjQUFJLFdBQVcsYUFBWDtjQUNBLE1BQU0sVUFBTixDQUY2Qjs7QUFJakMsbUJBQVMsR0FBVCxFQUppQztTQUE1QixNQUtBLElBQUksV0FBVyxZQUFYLEVBQXlCLElBQXpCLENBQUosRUFBb0M7QUFDekMsY0FBSSxjQUFjLFVBQVUsWUFBVixDQUFkO2NBQ0EsVUFBVSxhQUFWLENBRnFDOztBQUl6QyxxQkFBVyxXQUFYLElBQTBCLE9BQTFCLENBSnlDO1NBQXBDLE1BS0EsSUFBSSxPQUFPLGFBQVAsS0FBeUIsUUFBekIsRUFBbUM7QUFDNUMsMEJBQWdCLDhCQUE4QixZQUE5QixDQUFoQixDQUQ0QztBQUU1QywyQkFBaUIsYUFBakIsQ0FGNEM7O0FBSTVDLHFCQUFXLFlBQVgsQ0FBd0IsYUFBeEIsRUFBdUMsY0FBdkMsRUFKNEM7U0FBdkMsTUFLQSxJQUFJLFFBQU8scUVBQVAsS0FBeUIsUUFBekIsRUFBbUM7QUFDNUMsMEJBQWdCLFlBQWhCLENBRDRDOztBQUc1QyxjQUFJLE9BQU8sT0FBTyxJQUFQLENBQVksYUFBWixDQUFQLENBSHdDO0FBSTVDLGVBQUssT0FBTCxDQUFhLFVBQVMsR0FBVCxFQUFjO0FBQ3pCLGdCQUFJLFFBQVEsY0FBYyxHQUFkLENBQVIsQ0FEcUI7O0FBR3pCLHVCQUFXLGFBQVgsRUFBMEIsR0FBMUIsSUFBaUMsS0FBakMsQ0FIeUI7V0FBZCxDQUFiLENBSjRDO1NBQXZDLE1BU0E7O1NBVEE7T0F0QmEsQ0FrQ3BCLElBbENvQixDQWtDZixJQWxDZSxDQUF0QixFQVJnQjs7OztTQXZDZDtFQUF1Qjs7QUFxRjdCLE9BQU8sT0FBUCxHQUFpQixjQUFqQjs7QUFFQSxTQUFTLDZCQUFULENBQXVDLFlBQXZDLEVBQXFEO0FBQ25ELFVBQVEsWUFBUjtBQUNFLFNBQUssV0FBTDtBQUNFLGFBQU8sT0FBUCxDQURGOztBQURGLFNBSU8sU0FBTDtBQUNFLGFBQU8sS0FBUCxDQURGO0FBSkYsR0FEbUQ7O0FBU25ELFNBQU8sWUFBUCxDQVRtRDtDQUFyRDs7QUFZQSxTQUFTLFNBQVQsQ0FBbUIsTUFBbkIsRUFBMkI7QUFDekIsU0FBTyxPQUFPLFdBQVAsRUFBUCxDQUR5QjtDQUEzQjs7QUFJQSxTQUFTLFVBQVQsQ0FBb0IsTUFBcEIsRUFBNEIsZUFBNUIsRUFBNkM7QUFDM0MsTUFBSSxTQUFTLElBQUksTUFBSixDQUFXLE1BQU0sZUFBTixDQUFwQjtNQUNBLFVBQVUsT0FBTyxLQUFQLENBQWEsTUFBYixDQUFWLENBRnVDOztBQUkzQyxTQUFPLENBQUMsQ0FBQyxPQUFEO0FBSm1DLENBQTdDIiwiZmlsZSI6ImRpc3BsYXlFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBEaXNwbGF5RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihkaXNwbGF5TmFtZU9yRE9NRWxlbWVudCwgcHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICB2YXIgZG9tRWxlbWVudCA9ICh0eXBlb2YgZGlzcGxheU5hbWVPckRPTUVsZW1lbnQgPT09ICdzdHJpbmcnKSA/IFxuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGRpc3BsYXlOYW1lT3JET01FbGVtZW50KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVPckRPTUVsZW1lbnQ7XG4gICAgXG4gICAgc3VwZXIoZG9tRWxlbWVudCk7XG4gICAgXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KHRoaXMsIGNvbnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmFwcGx5UHJvcGVydGllcygpO1xuICB9XG5cbiAgcmVtb3VudChwcmV2aW91c1NpYmxpbmcsIGNvbnRleHQpIHtcbiAgICBzdXBlci5yZW1vdW50KHByZXZpb3VzU2libGluZyk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KHRoaXMsIGNvbnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmFwcGx5UHJvcGVydGllcygpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIC8vL1xuICAgIFxuICAgIHN1cGVyLnJlbW92ZSgpO1xuICB9XG5cbiAgYXBwbHlQcm9wZXJ0aWVzKCkge1xuICAgIGlmICh0aGlzLnByb3BlcnRpZXMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wZXJ0aWVzKTtcblxuICAgIHByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICB2YXIgcHJvcGVydHlWYWx1ZSA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWU7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHByb3BlcnR5TmFtZSA9PT0gJ3JlZicpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gcHJvcGVydHlWYWx1ZSxcbiAgICAgICAgICAgIHJlZiA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIFxuICAgICAgICBjYWxsYmFjayhyZWYpXG4gICAgICB9IGVsc2UgaWYgKGJlZ2luc1dpdGgocHJvcGVydHlOYW1lLCAnb24nKSkge1xuICAgICAgICB2YXIgaGFuZGxlck5hbWUgPSBsb3dlcmNhc2UocHJvcGVydHlOYW1lKSxcbiAgICAgICAgICAgIGhhbmRsZXIgPSBwcm9wZXJ0eVZhbHVlO1xuXG4gICAgICAgIGRvbUVsZW1lbnRbaGFuZGxlck5hbWVdID0gaGFuZGxlcjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BlcnR5VmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGVOYW1lRnJvbVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHByb3BlcnR5VmFsdWU7XG5cbiAgICAgICAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcGVydHlWYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYXR0cmlidXRlTmFtZSA9IHByb3BlcnR5TmFtZTtcblxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnR5VmFsdWUpO1xuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gcHJvcGVydHlWYWx1ZVtrZXldO1xuXG4gICAgICAgICAgZG9tRWxlbWVudFthdHRyaWJ1dGVOYW1lXVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8vXG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BsYXlFbGVtZW50O1xuXG5mdW5jdGlvbiBhdHRyaWJ1dGVOYW1lRnJvbVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgc3dpdGNoIChwcm9wZXJ0eU5hbWUpIHtcbiAgICBjYXNlICdjbGFzc05hbWUnOlxuICAgICAgcmV0dXJuICdjbGFzcyc7XG5cbiAgICBjYXNlICdodG1sRm9yJzpcbiAgICAgIHJldHVybiAnZm9yJztcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eU5hbWU7XG59XG5cbmZ1bmN0aW9uIGxvd2VyY2FzZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBiZWdpbnNXaXRoKHN0cmluZywgYmVnaW5uaW5nU3RyaW5nKSB7XG4gIHZhciByZWdFeHAgPSBuZXcgUmVnRXhwKCdeJyArIGJlZ2lubmluZ1N0cmluZyksXG4gICAgICBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKHJlZ0V4cCk7XG5cbiAgcmV0dXJuICEhbWF0Y2hlczsgLy8vXG59XG4iXX0=