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
        } else if (isPropNameHandlerName(propName)) {
          var eventType = eventTypeFromPropertyName(propName),
              handler = propValue;

          this.setEventHandler(eventType, handler);
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

function isPropNameHandlerName(propName) {
  return propName.match(/^on/);
}

function eventTypeFromPropertyName(propName) {
  return propName.substr(2).toLowerCase();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXNwbGF5RWxlbWVudC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkRpc3BsYXlFbGVtZW50IiwiZGlzcGxheU5hbWUiLCJwcm9wcyIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnQiLCJyZWZlcmVuY2UiLCJjb250ZXh0IiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsImNoaWxkQ29udGV4dCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwibW91bnQiLCJhcHBseVByb3BzIiwidW5tb3VudCIsInByb3BOYW1lcyIsIk9iamVjdCIsImtleXMiLCJwcm9wTmFtZSIsInByb3BWYWx1ZSIsImNhbGxiYWNrIiwiZ2V0RE9NRWxlbWVudCIsImlzUHJvcE5hbWVIYW5kbGVyTmFtZSIsImV2ZW50VHlwZSIsImV2ZW50VHlwZUZyb21Qcm9wZXJ0eU5hbWUiLCJoYW5kbGVyIiwic2V0RXZlbnRIYW5kbGVyIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZVZhbHVlIiwic2V0QXR0cmlidXRlIiwiYmluZCIsInN0YXJ0IiwicmVtb3ZlZENoaWxkcmVuQ291bnQiLCJhZGRlZENoaWxkcmVuIiwiYWRkZWRDaGlsZCIsImFyZ3MiLCJjb25jYXQiLCJyZW1vdmVkQ2hpbGRyZW4iLCJBcnJheSIsInByb3RvdHlwZSIsInNwbGljZSIsImFwcGx5IiwicmVtb3ZlZENoaWxkIiwiSW5maW5pdHkiLCJzcGxpY2VDaGlsZHJlbiIsImluZGV4IiwiaW5kZXhPZiIsIm1vZHVsZSIsImV4cG9ydHMiLCJtYXRjaCIsInN1YnN0ciIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCOztJQUVNQyxjOzs7QUFDSiwwQkFBWUMsV0FBWixFQUF5QkMsS0FBekIsRUFBZ0M7QUFBQTs7QUFDOUIsUUFBTUMsYUFBYUMsU0FB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QyxRQUFMLENBQWNxQyxPQUFkLENBQXNCbkMsS0FBdEIsQ0FBZDs7QUFFQSxVQUFJa0MsUUFBUSxDQUFDLENBQWIsRUFBZ0I7QUFDZCxZQUFNZCxRQUFRYyxLQUFkO0FBQUEsWUFDTWIsdUJBQXVCLENBRDdCO0FBQUEsWUFFTUMsZ0JBQWdCLEVBRnRCOztBQUlBLGFBQUtXLGNBQUwsQ0FBb0JiLEtBQXBCLEVBQTJCQyxvQkFBM0IsRUFBaURDLGFBQWpELEVBQWdFNUIsT0FBaEU7QUFDRDtBQUNGOzs7O0VBN0YwQlYsTzs7QUFnRzdCb0QsT0FBT0MsT0FBUCxHQUFpQm5ELGNBQWpCOztBQUVBLFNBQVN5QixxQkFBVCxDQUErQkosUUFBL0IsRUFBeUM7QUFDdkMsU0FBT0EsU0FBUytCLEtBQVQsQ0FBZSxLQUFmLENBQVA7QUFDRDs7QUFFRCxTQUFTekIseUJBQVQsQ0FBbUNOLFFBQW5DLEVBQTZDO0FBQzNDLFNBQU9BLFNBQVNnQyxNQUFULENBQWdCLENBQWhCLEVBQW1CQyxXQUFuQixFQUFQO0FBQ0QiLCJmaWxlIjoiZGlzcGxheUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgRGlzcGxheUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZGlzcGxheU5hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGlzcGxheU5hbWUpO1xuXG4gICAgc3VwZXIoZG9tRWxlbWVudCwgcHJvcHMpO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgYXBwbHlQcm9wcygpIHtcbiAgICBjb25zdCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcblxuICAgIHByb3BOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3BOYW1lKSB7XG4gICAgICBjb25zdCBwcm9wVmFsdWUgPSB0aGlzLnByb3BzW3Byb3BOYW1lXTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gcHJvcFZhbHVlLFxuICAgICAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgICAgY2FsbGJhY2soZG9tRWxlbWVudClcbiAgICAgIH0gZWxzZSBpZiAoaXNQcm9wTmFtZUhhbmRsZXJOYW1lKHByb3BOYW1lKSkge1xuICAgICAgICBjb25zdCBldmVudFR5cGUgPSBldmVudFR5cGVGcm9tUHJvcGVydHlOYW1lKHByb3BOYW1lKSxcbiAgICAgICAgICAgICAgaGFuZGxlciA9IHByb3BWYWx1ZTtcblxuICAgICAgICB0aGlzLnNldEV2ZW50SGFuZGxlcihldmVudFR5cGUsIGhhbmRsZXIpO1xuICAgICAgfSBlbHNlIHsgIFxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gcHJvcE5hbWUsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gcHJvcFZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZWRDaGlsZHJlbkNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgYWRkZWRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGFkZGVkQ2hpbGQpIHtcbiAgICAgIGFkZGVkQ2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXJncyA9IFtzdGFydCwgcmVtb3ZlZENoaWxkcmVuQ291bnRdLmNvbmNhdChhZGRlZENoaWxkcmVuKSxcbiAgICAgICAgICByZW1vdmVkQ2hpbGRyZW4gPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KHRoaXMuY2hpbGRyZW4sIGFyZ3MpO1xuXG4gICAgcmVtb3ZlZENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24ocmVtb3ZlZENoaWxkKSB7XG4gICAgICByZW1vdmVkQ2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2hpbGQoY2hpbGQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGFydCA9IEluZmluaXR5LFxuICAgICAgICAgIHJlbW92ZWRDaGlsZHJlbkNvdW50ID0gMCxcbiAgICAgICAgICBhZGRlZENoaWxkcmVuID0gW2NoaWxkXTtcblxuICAgIHRoaXMuc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZWRDaGlsZHJlbkNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJlbW92ZUNoaWxkKGNoaWxkLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsXG4gICAgICAgICAgICByZW1vdmVkQ2hpbGRyZW5Db3VudCA9IDEsXG4gICAgICAgICAgICBhZGRlZENoaWxkcmVuID0gW107XG5cbiAgICAgIHRoaXMuc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZWRDaGlsZHJlbkNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNwbGF5RWxlbWVudDtcblxuZnVuY3Rpb24gaXNQcm9wTmFtZUhhbmRsZXJOYW1lKHByb3BOYW1lKSB7XG4gIHJldHVybiBwcm9wTmFtZS5tYXRjaCgvXm9uLyk7XG59XG5cbmZ1bmN0aW9uIGV2ZW50VHlwZUZyb21Qcm9wZXJ0eU5hbWUocHJvcE5hbWUpIHtcbiAgcmV0dXJuIHByb3BOYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpO1xufVxuIl19