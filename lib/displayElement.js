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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXNwbGF5RWxlbWVudC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkRpc3BsYXlFbGVtZW50IiwiZGlzcGxheU5hbWUiLCJwcm9wcyIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnQiLCJyZWZlcmVuY2UiLCJjb250ZXh0IiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsImNoaWxkQ29udGV4dCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwibW91bnQiLCJhcHBseVByb3BzIiwidW5tb3VudCIsInByb3BOYW1lcyIsIk9iamVjdCIsImtleXMiLCJwcm9wTmFtZSIsInByb3BWYWx1ZSIsImNhbGxiYWNrIiwiZ2V0RE9NRWxlbWVudCIsInByb3BOYW1lSXNIYW5kbGVyTmFtZSIsImV2ZW50TmFtZSIsImV2ZW50TmFtZUZyb21Qcm9wZXJ0eU5hbWUiLCJoYW5kbGVyIiwic2V0SGFuZGxlciIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVWYWx1ZSIsInNldEF0dHJpYnV0ZSIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwibWF0Y2giLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjs7SUFFTUMsYzs7O0FBQ0osMEJBQVlDLFdBQVosRUFBeUJDLEtBQXpCLEVBQWdDO0FBQUE7O0FBQzlCLFFBQU1DLGFBQWFDLFNBQVNDLGFBQVQsQ0FBdUJKLFdBQXZCLENBQW5COztBQUQ4QiwySEFHeEJFLFVBSHdCLEVBR1pELEtBSFk7QUFJL0I7Ozs7MEJBRUtJLE0sRUFBUUMsUyxFQUFXQyxPLEVBQVM7QUFDaEMsNEhBQVlGLE1BQVosRUFBb0JDLFNBQXBCOztBQUVBLFVBQU1FLGNBQWMsSUFBcEI7QUFBQSxVQUNNQyxpQkFBaUIsSUFEdkI7QUFBQSxVQUVNQyxlQUFlSCxPQUZyQjs7QUFJQSxXQUFLSSxRQUFMLENBQWNDLE9BQWQsQ0FBc0IsVUFBU0MsS0FBVCxFQUFnQjtBQUNwQ0EsY0FBTUMsS0FBTixDQUFZTixXQUFaLEVBQXlCQyxjQUF6QixFQUF5Q0MsWUFBekM7QUFDRCxPQUZEOztBQUlBLFdBQUtLLFVBQUw7QUFDRDs7OzRCQUVPUixPLEVBQVM7QUFDZixVQUFNRyxlQUFlSCxPQUFyQjs7QUFFQSxXQUFLSSxRQUFMLENBQWNDLE9BQWQsQ0FBc0IsVUFBU0MsS0FBVCxFQUFnQjtBQUNwQ0EsY0FBTUcsT0FBTixDQUFjTixZQUFkO0FBQ0QsT0FGRDs7QUFJQTtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNTyxZQUFZQyxPQUFPQyxJQUFQLENBQVksS0FBS2xCLEtBQWpCLENBQWxCOztBQUVBZ0IsZ0JBQVVMLE9BQVYsQ0FBa0IsVUFBU1EsUUFBVCxFQUFtQjtBQUNuQyxZQUFNQyxZQUFZLEtBQUtwQixLQUFMLENBQVdtQixRQUFYLENBQWxCOztBQUVBLFlBQUksS0FBSixFQUFXLENBRVYsQ0FGRCxNQUVPLElBQUlBLGFBQWEsS0FBakIsRUFBd0I7QUFDN0IsY0FBTUUsV0FBV0QsU0FBakI7QUFBQSxjQUNNbkIsYUFBYSxLQUFLcUIsYUFBTCxFQURuQjs7QUFHQUQsbUJBQVNwQixVQUFUO0FBQ0QsU0FMTSxNQUtBLElBQUlzQixzQkFBc0JKLFFBQXRCLENBQUosRUFBcUM7QUFDMUMsY0FBTUssWUFBWUMsMEJBQTBCTixRQUExQixDQUFsQjtBQUFBLGNBQ01PLFVBQVVOLFNBRGhCOztBQUdBLGVBQUtPLFVBQUwsQ0FBZ0JILFNBQWhCLEVBQTJCRSxPQUEzQjtBQUNELFNBTE0sTUFLQTtBQUNMLGNBQU1FLGdCQUFnQlQsUUFBdEI7QUFBQSxjQUNNVSxpQkFBaUJULFNBRHZCOztBQUdBLGVBQUtVLFlBQUwsQ0FBa0JGLGFBQWxCLEVBQWlDQyxjQUFqQztBQUNEO0FBQ0YsT0FyQmlCLENBcUJoQkUsSUFyQmdCLENBcUJYLElBckJXLENBQWxCO0FBc0JEOzs7O0VBeEQwQm5DLE87O0FBMkQ3Qm9DLE9BQU9DLE9BQVAsR0FBaUJuQyxjQUFqQjs7QUFFQSxTQUFTeUIscUJBQVQsQ0FBK0JKLFFBQS9CLEVBQXlDO0FBQ3ZDLFNBQU9BLFNBQVNlLEtBQVQsQ0FBZSxLQUFmLENBQVA7QUFDRDs7QUFFRCxTQUFTVCx5QkFBVCxDQUFtQ04sUUFBbkMsRUFBNkM7QUFDM0MsU0FBT0EsU0FBU2dCLFdBQVQsRUFBUDtBQUNEIiwiZmlsZSI6ImRpc3BsYXlFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIERpc3BsYXlFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXlOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGRpc3BsYXlOYW1lKTtcblxuICAgIHN1cGVyKGRvbUVsZW1lbnQsIHByb3BzKTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFwcGx5UHJvcHMoKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGFwcGx5UHJvcHMoKSB7XG4gICAgY29uc3QgcHJvcE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG5cbiAgICBwcm9wTmFtZXMuZm9yRWFjaChmdW5jdGlvbihwcm9wTmFtZSkge1xuICAgICAgY29uc3QgcHJvcFZhbHVlID0gdGhpcy5wcm9wc1twcm9wTmFtZV07XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHByb3BOYW1lID09PSAncmVmJykge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHByb3BWYWx1ZSxcbiAgICAgICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICAgIGNhbGxiYWNrKGRvbUVsZW1lbnQpXG4gICAgICB9IGVsc2UgaWYgKHByb3BOYW1lSXNIYW5kbGVyTmFtZShwcm9wTmFtZSkpIHtcbiAgICAgICAgY29uc3QgZXZlbnROYW1lID0gZXZlbnROYW1lRnJvbVByb3BlcnR5TmFtZShwcm9wTmFtZSksXG4gICAgICAgICAgICAgIGhhbmRsZXIgPSBwcm9wVmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZXRIYW5kbGVyKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gcHJvcE5hbWUsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gcHJvcFZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzcGxheUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHByb3BOYW1lSXNIYW5kbGVyTmFtZShwcm9wTmFtZSkge1xuICByZXR1cm4gcHJvcE5hbWUubWF0Y2goL15vbi8pO1xufVxuXG5mdW5jdGlvbiBldmVudE5hbWVGcm9tUHJvcGVydHlOYW1lKHByb3BOYW1lKSB7XG4gIHJldHVybiBwcm9wTmFtZS50b0xvd2VyQ2FzZSgpO1xufVxuIl19