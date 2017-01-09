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

    return _possibleConstructorReturn(this, (DisplayElement.__proto__ || Object.getPrototypeOf(DisplayElement)).call(this, domElement, props));
  }

  _createClass(DisplayElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(DisplayElement.prototype.__proto__ || Object.getPrototypeOf(DisplayElement.prototype), 'mount', this).call(this, parent, reference);

      var childParent = this,
          childReference = null,
          childContext = context;

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      });

      this.applyProps();
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      var childContext = context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      _get(DisplayElement.prototype.__proto__ || Object.getPrototypeOf(DisplayElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'applyProps',
    value: function applyProps() {
      var propNames = Object.keys(this.props);

      propNames.forEach(function (propName) {
        var propValue = this.props[propName];

        if (false) {} else if (propName === 'ref') {
          var callback = propValue,
              domElement = this.getDOMElement();

          callback(domElement);
        } else if (propNameIsHandlerName(propName)) {
          var eventName = eventNameFromPropertyName(propName),
              handler = propValue;

          this.setHandler(eventName, handler);
        } else {
          var attributeName = propName,
              attributeValue = propValue;

          this.setAttribute(attributeName, attributeValue);
        }
      }.bind(this));
    }
  }]);

  return DisplayElement;
}(Element);

module.exports = DisplayElement;

function propNameIsHandlerName(propName) {
  return propName.match(/^on/);
}

function eventNameFromPropertyName(propName) {
  return propName.toLowerCase();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXNwbGF5RWxlbWVudC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkRpc3BsYXlFbGVtZW50IiwiZGlzcGxheU5hbWUiLCJwcm9wcyIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnQiLCJyZWZlcmVuY2UiLCJjb250ZXh0IiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsImNoaWxkQ29udGV4dCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwibW91bnQiLCJhcHBseVByb3BzIiwidW5tb3VudCIsInByb3BOYW1lcyIsIk9iamVjdCIsImtleXMiLCJwcm9wTmFtZSIsInByb3BWYWx1ZSIsImNhbGxiYWNrIiwiZ2V0RE9NRWxlbWVudCIsInByb3BOYW1lSXNIYW5kbGVyTmFtZSIsImV2ZW50TmFtZSIsImV2ZW50TmFtZUZyb21Qcm9wZXJ0eU5hbWUiLCJoYW5kbGVyIiwic2V0SGFuZGxlciIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVWYWx1ZSIsInNldEF0dHJpYnV0ZSIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwibWF0Y2giLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjs7SUFFTUMsYzs7O0FBQ0osMEJBQVlDLFdBQVosRUFBeUJDLEtBQXpCLEVBQWdDO0FBQUE7O0FBQzlCLFFBQU1DLGFBQWFDLFNBQVNDLGFBQVQsQ0FBdUJKLFdBQXZCLENBQW5COztBQUQ4QiwySEFHeEJFLFVBSHdCLEVBR1pELEtBSFk7QUFJL0I7Ozs7MEJBRUtJLE0sRUFBUUMsUyxFQUFXQyxPLEVBQVM7QUFDaEMsNEhBQVlGLE1BQVosRUFBb0JDLFNBQXBCOztBQUVBLFVBQU1FLGNBQWMsSUFBcEI7QUFBQSxVQUNNQyxpQkFBaUIsSUFEdkI7QUFBQSxVQUVNQyxlQUFlSCxPQUZyQjs7QUFJQSxXQUFLSSxRQUFMLENBQWNDLE9BQWQsQ0FBc0IsVUFBU0MsS0FBVCxFQUFnQjtBQUNwQ0EsY0FBTUMsS0FBTixDQUFZTixXQUFaLEVBQXlCQyxjQUF6QixFQUF5Q0MsWUFBekM7QUFDRCxPQUZEOztBQUlBLFdBQUtLLFVBQUw7QUFDRDs7OzRCQUVPUixPLEVBQVM7QUFDZixVQUFNRyxlQUFlSCxPQUFyQjs7QUFFQSxXQUFLSSxRQUFMLENBQWNDLE9BQWQsQ0FBc0IsVUFBU0MsS0FBVCxFQUFnQjtBQUNwQ0EsY0FBTUcsT0FBTixDQUFjTixZQUFkO0FBQ0QsT0FGRDs7QUFJQTtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJTyxZQUFZQyxPQUFPQyxJQUFQLENBQVksS0FBS2xCLEtBQWpCLENBQWhCOztBQUVBZ0IsZ0JBQVVMLE9BQVYsQ0FBa0IsVUFBU1EsUUFBVCxFQUFtQjtBQUNuQyxZQUFJQyxZQUFZLEtBQUtwQixLQUFMLENBQVdtQixRQUFYLENBQWhCOztBQUVBLFlBQUksS0FBSixFQUFXLENBRVYsQ0FGRCxNQUVPLElBQUlBLGFBQWEsS0FBakIsRUFBd0I7QUFDN0IsY0FBSUUsV0FBV0QsU0FBZjtBQUFBLGNBQ0luQixhQUFhLEtBQUtxQixhQUFMLEVBRGpCOztBQUdBRCxtQkFBU3BCLFVBQVQ7QUFDRCxTQUxNLE1BS0EsSUFBSXNCLHNCQUFzQkosUUFBdEIsQ0FBSixFQUFxQztBQUMxQyxjQUFJSyxZQUFZQywwQkFBMEJOLFFBQTFCLENBQWhCO0FBQUEsY0FDSU8sVUFBVU4sU0FEZDs7QUFHQSxlQUFLTyxVQUFMLENBQWdCSCxTQUFoQixFQUEyQkUsT0FBM0I7QUFDRCxTQUxNLE1BS0E7QUFDTCxjQUFJRSxnQkFBZ0JULFFBQXBCO0FBQUEsY0FDSVUsaUJBQWlCVCxTQURyQjs7QUFHQSxlQUFLVSxZQUFMLENBQWtCRixhQUFsQixFQUFpQ0MsY0FBakM7QUFDRDtBQUNGLE9BckJpQixDQXFCaEJFLElBckJnQixDQXFCWCxJQXJCVyxDQUFsQjtBQXNCRDs7OztFQXhEMEJuQyxPOztBQTJEN0JvQyxPQUFPQyxPQUFQLEdBQWlCbkMsY0FBakI7O0FBRUEsU0FBU3lCLHFCQUFULENBQStCSixRQUEvQixFQUF5QztBQUN2QyxTQUFPQSxTQUFTZSxLQUFULENBQWUsS0FBZixDQUFQO0FBQ0Q7O0FBRUQsU0FBU1QseUJBQVQsQ0FBbUNOLFFBQW5DLEVBQTZDO0FBQzNDLFNBQU9BLFNBQVNnQixXQUFULEVBQVA7QUFDRCIsImZpbGUiOiJkaXNwbGF5RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBEaXNwbGF5RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihkaXNwbGF5TmFtZSwgcHJvcHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkaXNwbGF5TmFtZSk7XG5cbiAgICBzdXBlcihkb21FbGVtZW50LCBwcm9wcyk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcblxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcHBseVByb3BzKCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIHZhciBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcblxuICAgIHByb3BOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3BOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gdGhpcy5wcm9wc1twcm9wTmFtZV07XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHByb3BOYW1lID09PSAncmVmJykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBwcm9wVmFsdWUsXG4gICAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgICAgY2FsbGJhY2soZG9tRWxlbWVudClcbiAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWVJc0hhbmRsZXJOYW1lKHByb3BOYW1lKSkge1xuICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnROYW1lRnJvbVByb3BlcnR5TmFtZShwcm9wTmFtZSksXG4gICAgICAgICAgICBoYW5kbGVyID0gcHJvcFZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0SGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSBwcm9wTmFtZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gcHJvcFZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzcGxheUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHByb3BOYW1lSXNIYW5kbGVyTmFtZShwcm9wTmFtZSkge1xuICByZXR1cm4gcHJvcE5hbWUubWF0Y2goL15vbi8pO1xufVxuXG5mdW5jdGlvbiBldmVudE5hbWVGcm9tUHJvcGVydHlOYW1lKHByb3BOYW1lKSB7XG4gIHJldHVybiBwcm9wTmFtZS50b0xvd2VyQ2FzZSgpO1xufVxuIl19