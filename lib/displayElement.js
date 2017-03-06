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
  }, {
    key: 'spliceChildren',
    value: function spliceChildren(start, removedChildrenCount, addedChildren, context) {
      var childParent = this,
          childReference = null,
          childContext = context;

      addedChildren.forEach(function (addedChild) {
        addedChild.mount(childParent, childReference, childContext);
      });

      var args = [start, removedChildrenCount].concat(addedChildren),
          removedChildren = Array.prototype.splice.apply(this.children, args);

      removedChildren.forEach(function (removedChild) {
        removedChild.unmount(childContext);
      });
    }
  }, {
    key: 'addChild',
    value: function addChild(child, context) {
      var start = Infinity,
          removedChildrenCount = 0,
          addedChildren = [child];

      this.spliceChildren(start, removedChildrenCount, addedChildren, context);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child, context) {
      var index = this.children.indexOf(child);

      if (index > -1) {
        var start = index,
            removedChildrenCount = 1,
            addedChildren = [];

        this.spliceChildren(start, removedChildrenCount, addedChildren, context);
      }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXNwbGF5RWxlbWVudC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkRpc3BsYXlFbGVtZW50IiwiZGlzcGxheU5hbWUiLCJwcm9wcyIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnQiLCJyZWZlcmVuY2UiLCJjb250ZXh0IiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsImNoaWxkQ29udGV4dCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwibW91bnQiLCJhcHBseVByb3BzIiwidW5tb3VudCIsInByb3BOYW1lcyIsIk9iamVjdCIsImtleXMiLCJwcm9wTmFtZSIsInByb3BWYWx1ZSIsImNhbGxiYWNrIiwiZ2V0RE9NRWxlbWVudCIsInByb3BOYW1lSXNIYW5kbGVyTmFtZSIsImV2ZW50TmFtZSIsImV2ZW50TmFtZUZyb21Qcm9wZXJ0eU5hbWUiLCJoYW5kbGVyIiwic2V0SGFuZGxlciIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVWYWx1ZSIsInNldEF0dHJpYnV0ZSIsImJpbmQiLCJzdGFydCIsInJlbW92ZWRDaGlsZHJlbkNvdW50IiwiYWRkZWRDaGlsZHJlbiIsImFkZGVkQ2hpbGQiLCJhcmdzIiwiY29uY2F0IiwicmVtb3ZlZENoaWxkcmVuIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzcGxpY2UiLCJhcHBseSIsInJlbW92ZWRDaGlsZCIsIkluZmluaXR5Iiwic3BsaWNlQ2hpbGRyZW4iLCJpbmRleCIsImluZGV4T2YiLCJtb2R1bGUiLCJleHBvcnRzIiwibWF0Y2giLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjs7SUFFTUMsYzs7O0FBQ0osMEJBQVlDLFdBQVosRUFBeUJDLEtBQXpCLEVBQWdDO0FBQUE7O0FBQzlCLFFBQU1DLGFBQWFDLFNBQVNDLGFBQVQsQ0FBdUJK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T0FBZCxDQUFzQm5DLEtBQXRCLENBQWQ7O0FBRUEsVUFBSWtDLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2QsWUFBTWQsUUFBUWMsS0FBZDtBQUFBLFlBQ01iLHVCQUF1QixDQUQ3QjtBQUFBLFlBRU1DLGdCQUFnQixFQUZ0Qjs7QUFJQSxhQUFLVyxjQUFMLENBQW9CYixLQUFwQixFQUEyQkMsb0JBQTNCLEVBQWlEQyxhQUFqRCxFQUFnRTVCLE9BQWhFO0FBQ0Q7QUFDRjs7OztFQTdGMEJWLE87O0FBZ0c3Qm9ELE9BQU9DLE9BQVAsR0FBaUJuRCxjQUFqQjs7QUFFQSxTQUFTeUIscUJBQVQsQ0FBK0JKLFFBQS9CLEVBQXlDO0FBQ3ZDLFNBQU9BLFNBQVMrQixLQUFULENBQWUsS0FBZixDQUFQO0FBQ0Q7O0FBRUQsU0FBU3pCLHlCQUFULENBQW1DTixRQUFuQyxFQUE2QztBQUMzQyxTQUFPQSxTQUFTZ0MsV0FBVCxFQUFQO0FBQ0QiLCJmaWxlIjoiZGlzcGxheUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgRGlzcGxheUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZGlzcGxheU5hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGlzcGxheU5hbWUpO1xuXG4gICAgc3VwZXIoZG9tRWxlbWVudCwgcHJvcHMpO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgYXBwbHlQcm9wcygpIHtcbiAgICBjb25zdCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcblxuICAgIHByb3BOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3BOYW1lKSB7XG4gICAgICBjb25zdCBwcm9wVmFsdWUgPSB0aGlzLnByb3BzW3Byb3BOYW1lXTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gcHJvcFZhbHVlLFxuICAgICAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgICAgY2FsbGJhY2soZG9tRWxlbWVudClcbiAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWVJc0hhbmRsZXJOYW1lKHByb3BOYW1lKSkge1xuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBldmVudE5hbWVGcm9tUHJvcGVydHlOYW1lKHByb3BOYW1lKSxcbiAgICAgICAgICAgICAgaGFuZGxlciA9IHByb3BWYWx1ZTtcblxuICAgICAgICB0aGlzLnNldEhhbmRsZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBwcm9wTmFtZSxcbiAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBwcm9wVmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBzcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlZENoaWxkcmVuQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICBhZGRlZENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oYWRkZWRDaGlsZCkge1xuICAgICAgYWRkZWRDaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhcmdzID0gW3N0YXJ0LCByZW1vdmVkQ2hpbGRyZW5Db3VudF0uY29uY2F0KGFkZGVkQ2hpbGRyZW4pLFxuICAgICAgICAgIHJlbW92ZWRDaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkodGhpcy5jaGlsZHJlbiwgYXJncyk7XG5cbiAgICByZW1vdmVkQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihyZW1vdmVkQ2hpbGQpIHtcbiAgICAgIHJlbW92ZWRDaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gSW5maW5pdHksXG4gICAgICAgICAgcmVtb3ZlZENoaWxkcmVuQ291bnQgPSAwLFxuICAgICAgICAgIGFkZGVkQ2hpbGRyZW4gPSBbY2hpbGRdO1xuXG4gICAgdGhpcy5zcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlZENoaWxkcmVuQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQpO1xuICB9XG5cbiAgcmVtb3ZlQ2hpbGQoY2hpbGQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCxcbiAgICAgICAgICAgIHJlbW92ZWRDaGlsZHJlbkNvdW50ID0gMSxcbiAgICAgICAgICAgIGFkZGVkQ2hpbGRyZW4gPSBbXTtcblxuICAgICAgdGhpcy5zcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlZENoaWxkcmVuQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BsYXlFbGVtZW50O1xuXG5mdW5jdGlvbiBwcm9wTmFtZUlzSGFuZGxlck5hbWUocHJvcE5hbWUpIHtcbiAgcmV0dXJuIHByb3BOYW1lLm1hdGNoKC9eb24vKTtcbn1cblxuZnVuY3Rpb24gZXZlbnROYW1lRnJvbVByb3BlcnR5TmFtZShwcm9wTmFtZSkge1xuICByZXR1cm4gcHJvcE5hbWUudG9Mb3dlckNhc2UoKTtcbn1cbiJdfQ==