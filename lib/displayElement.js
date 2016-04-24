'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var DisplayElement = function (_Element) {
  _inherits(DisplayElement, _Element);

  function DisplayElement(displayName, props) {
    _classCallCheck(this, DisplayElement);

    var domElement = document.createElement(displayName);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayElement).call(this, domElement, props));
  }

  _createClass(DisplayElement, [{
    key: 'mount',
    value: function mount(parent, sibling, context) {
      _get(Object.getPrototypeOf(DisplayElement.prototype), 'mount', this).call(this, parent, sibling);

      var childParent = this,
          childSibling = null,
          childContext = context;

      this.children.forEach(function (child) {
        childSibling = child.mount(childParent, childSibling, childContext);
      });

      this.applyProps();

      return this;
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.children.forEach(function (child) {
        child.unmount(context);
      });

      _get(Object.getPrototypeOf(DisplayElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'applyProps',
    value: function applyProps() {
      if (this.props === null) {
        return;
      }

      var propertyNames = Object.keys(this.props);

      propertyNames.forEach(function (propertyName) {
        var propertyValue = this.props[propertyName];

        if (false) {} else if (propertyName === 'ref') {
          var callback = propertyValue,
              domElement = this.getDOMElement();

          callback(domElement);
        } else if (propertyNameIsHandlerName(propertyName)) {
          var eventName = eventNameFromPropertyName(propertyName),
              handler = propertyValue;

          this.setHandler(eventName, handler);
        } else {
          var attributeName = propertyName,
              attributeValue = propertyValue;

          this.setAttribute(attributeName, attributeValue);
        }
      }.bind(this));
    }
  }]);

  return DisplayElement;
}(Element);

module.exports = DisplayElement;

function eventNameFromPropertyName(propertyName) {
  return propertyName.toLowerCase();
}

function propertyNameIsHandlerName(propertyName) {
  return propertyName.match(/^on/);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9kaXNwbGF5RWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxVQUFVLFFBQVEsV0FBUixDQUFWOztJQUVFOzs7QUFDSixXQURJLGNBQ0osQ0FBWSxXQUFaLEVBQXlCLEtBQXpCLEVBQWdDOzBCQUQ1QixnQkFDNEI7O0FBQzlCLFFBQUksYUFBYSxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBYixDQUQwQjs7a0VBRDVCLDJCQUlJLFlBQVksUUFIWTtHQUFoQzs7ZUFESTs7MEJBT0UsUUFBUSxTQUFTLFNBQVM7QUFDOUIsaUNBUkUscURBUVUsUUFBUSxRQUFwQixDQUQ4Qjs7QUFHOUIsVUFBSSxjQUFjLElBQWQ7VUFDQSxlQUFlLElBQWY7VUFDQSxlQUFlLE9BQWYsQ0FMMEI7O0FBTzlCLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLHVCQUFlLE1BQU0sS0FBTixDQUFZLFdBQVosRUFBeUIsWUFBekIsRUFBdUMsWUFBdkMsQ0FBZixDQURvQztPQUFoQixDQUF0QixDQVA4Qjs7QUFXOUIsV0FBSyxVQUFMLEdBWDhCOztBQWE5QixhQUFPLElBQVAsQ0FiOEI7Ozs7NEJBZ0J4QixTQUFTO0FBQ2YsV0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixVQUFTLEtBQVQsRUFBZ0I7QUFDcEMsY0FBTSxPQUFOLENBQWMsT0FBZCxFQURvQztPQUFoQixDQUF0QixDQURlOztBQUtmLGlDQTVCRSxzREE0QkYsQ0FMZTs7OztpQ0FRSjtBQUNYLFVBQUksS0FBSyxLQUFMLEtBQWUsSUFBZixFQUFxQjtBQUN2QixlQUR1QjtPQUF6Qjs7QUFJQSxVQUFJLGdCQUFnQixPQUFPLElBQVAsQ0FBWSxLQUFLLEtBQUwsQ0FBNUIsQ0FMTzs7QUFPWCxvQkFBYyxPQUFkLENBQXNCLFVBQVUsWUFBVixFQUF3QjtBQUM1QyxZQUFJLGdCQUFnQixLQUFLLEtBQUwsQ0FBVyxZQUFYLENBQWhCLENBRHdDOztBQUc1QyxZQUFJLEtBQUosRUFBVyxFQUFYLE1BRU8sSUFBSSxpQkFBaUIsS0FBakIsRUFBd0I7QUFDakMsY0FBSSxXQUFXLGFBQVg7Y0FDQSxhQUFhLEtBQUssYUFBTCxFQUFiLENBRjZCOztBQUlqQyxtQkFBUyxVQUFULEVBSmlDO1NBQTVCLE1BS0EsSUFBSSwwQkFBMEIsWUFBMUIsQ0FBSixFQUE2QztBQUNsRCxjQUFJLFlBQVksMEJBQTBCLFlBQTFCLENBQVo7Y0FDQSxVQUFVLGFBQVYsQ0FGOEM7O0FBSWxELGVBQUssVUFBTCxDQUFnQixTQUFoQixFQUEyQixPQUEzQixFQUprRDtTQUE3QyxNQUtBO0FBQ0wsY0FBSSxnQkFBZ0IsWUFBaEI7Y0FDQSxpQkFBaUIsYUFBakIsQ0FGQzs7QUFJTCxlQUFLLFlBQUwsQ0FBa0IsYUFBbEIsRUFBaUMsY0FBakMsRUFKSztTQUxBO09BVmEsQ0FxQnBCLElBckJvQixDQXFCZixJQXJCZSxDQUF0QixFQVBXOzs7O1NBL0JUO0VBQXVCOztBQStEN0IsT0FBTyxPQUFQLEdBQWlCLGNBQWpCOztBQUVBLFNBQVMseUJBQVQsQ0FBbUMsWUFBbkMsRUFBaUQ7QUFDL0MsU0FBTyxhQUFhLFdBQWIsRUFBUCxDQUQrQztDQUFqRDs7QUFJQSxTQUFTLHlCQUFULENBQW1DLFlBQW5DLEVBQWlEO0FBQy9DLFNBQU8sYUFBYSxLQUFiLENBQW1CLEtBQW5CLENBQVAsQ0FEK0M7Q0FBakQiLCJmaWxlIjoiZGlzcGxheUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIERpc3BsYXlFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXlOYW1lLCBwcm9wcykge1xuICAgIHZhciBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkaXNwbGF5TmFtZSk7XG5cbiAgICBzdXBlcihkb21FbGVtZW50LCBwcm9wcyk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHNpYmxpbmcsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHNpYmxpbmcpO1xuICAgIFxuICAgIHZhciBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgIGNoaWxkU2libGluZyA9IG51bGwsXG4gICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG4gICAgXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZFNpYmxpbmcgPSBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRTaWJsaW5nLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcHBseVByb3BzKCk7XG4gICAgXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGlmICh0aGlzLnByb3BzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BlcnR5TmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcblxuICAgIHByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICB2YXIgcHJvcGVydHlWYWx1ZSA9IHRoaXMucHJvcHNbcHJvcGVydHlOYW1lXTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAocHJvcGVydHlOYW1lID09PSAncmVmJykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBwcm9wZXJ0eVZhbHVlLFxuICAgICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuICAgICAgICBcbiAgICAgICAgY2FsbGJhY2soZG9tRWxlbWVudClcbiAgICAgIH0gZWxzZSBpZiAocHJvcGVydHlOYW1lSXNIYW5kbGVyTmFtZShwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudE5hbWVGcm9tUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSksXG4gICAgICAgICAgICBoYW5kbGVyID0gcHJvcGVydHlWYWx1ZTtcblxuICAgICAgICB0aGlzLnNldEhhbmRsZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBwcm9wZXJ0eVZhbHVlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNwbGF5RWxlbWVudDtcblxuZnVuY3Rpb24gZXZlbnROYW1lRnJvbVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgcmV0dXJuIHByb3BlcnR5TmFtZS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eU5hbWVJc0hhbmRsZXJOYW1lKHByb3BlcnR5TmFtZSkge1xuICByZXR1cm4gcHJvcGVydHlOYW1lLm1hdGNoKC9eb24vKTtcbn1cbiJdfQ==