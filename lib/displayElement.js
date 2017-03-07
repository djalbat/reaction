'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var DisplayElement = function (_Element) {
  _inherits(DisplayElement, _Element);

  function DisplayElement(tagName, props) {
    _classCallCheck(this, DisplayElement);

    var domElement = document.createElement(tagName);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXNwbGF5RWxlbWVudC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkRpc3BsYXlFbGVtZW50IiwidGFnTmFtZSIsInByb3BzIiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInBhcmVudCIsInJlZmVyZW5jZSIsImNvbnRleHQiLCJjaGlsZFBhcmVudCIsImNoaWxkUmVmZXJlbmNlIiwiY2hpbGRDb250ZXh0IiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJtb3VudCIsImFwcGx5UHJvcHMiLCJ1bm1vdW50IiwicHJvcE5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsInByb3BOYW1lIiwicHJvcFZhbHVlIiwiY2FsbGJhY2siLCJnZXRET01FbGVtZW50IiwiaXNQcm9wTmFtZUhhbmRsZXJOYW1lIiwiZXZlbnRUeXBlIiwiZXZlbnRUeXBlRnJvbVByb3BlcnR5TmFtZSIsImhhbmRsZXIiLCJzZXRFdmVudEhhbmRsZXIiLCJhdHRyaWJ1dGVOYW1lIiwiYXR0cmlidXRlVmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJiaW5kIiwic3RhcnQiLCJyZW1vdmVkQ2hpbGRyZW5Db3VudCIsImFkZGVkQ2hpbGRyZW4iLCJhZGRlZENoaWxkIiwiYXJncyIsImNvbmNhdCIsInJlbW92ZWRDaGlsZHJlbiIsIkFycmF5IiwicHJvdG90eXBlIiwic3BsaWNlIiwiYXBwbHkiLCJyZW1vdmVkQ2hpbGQiLCJJbmZpbml0eSIsInNwbGljZUNoaWxkcmVuIiwiaW5kZXgiLCJpbmRleE9mIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1hdGNoIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7O0lBRU1DLGM7OztBQUNKLDBCQUFZQyxPQUFaLEVBQXFCQyxLQUFyQixFQUE0QjtBQUFBOztBQUMxQixRQUFNQyxhQUFhQyxTQUFTQyxh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QUwsQ0FBY3FDLE9BQWQsQ0FBc0JuQyxLQUF0QixDQUFkOztBQUVBLFVBQUlrQyxRQUFRLENBQUMsQ0FBYixFQUFnQjtBQUNkLFlBQU1kLFFBQVFjLEtBQWQ7QUFBQSxZQUNNYix1QkFBdUIsQ0FEN0I7QUFBQSxZQUVNQyxnQkFBZ0IsRUFGdEI7O0FBSUEsYUFBS1csY0FBTCxDQUFvQmIsS0FBcEIsRUFBMkJDLG9CQUEzQixFQUFpREMsYUFBakQsRUFBZ0U1QixPQUFoRTtBQUNEO0FBQ0Y7Ozs7RUE3RjBCVixPOztBQWdHN0JvRCxPQUFPQyxPQUFQLEdBQWlCbkQsY0FBakI7O0FBRUEsU0FBU3lCLHFCQUFULENBQStCSixRQUEvQixFQUF5QztBQUN2QyxTQUFPQSxTQUFTK0IsS0FBVCxDQUFlLEtBQWYsQ0FBUDtBQUNEOztBQUVELFNBQVN6Qix5QkFBVCxDQUFtQ04sUUFBbkMsRUFBNkM7QUFDM0MsU0FBT0EsU0FBU2dDLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUJDLFdBQW5CLEVBQVA7QUFDRCIsImZpbGUiOiJkaXNwbGF5RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBEaXNwbGF5RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgc3VwZXIoZG9tRWxlbWVudCwgcHJvcHMpO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgYXBwbHlQcm9wcygpIHtcbiAgICBjb25zdCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcblxuICAgIHByb3BOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3BOYW1lKSB7XG4gICAgICBjb25zdCBwcm9wVmFsdWUgPSB0aGlzLnByb3BzW3Byb3BOYW1lXTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gcHJvcFZhbHVlLFxuICAgICAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgICAgY2FsbGJhY2soZG9tRWxlbWVudClcbiAgICAgIH0gZWxzZSBpZiAoaXNQcm9wTmFtZUhhbmRsZXJOYW1lKHByb3BOYW1lKSkge1xuICAgICAgICBjb25zdCBldmVudFR5cGUgPSBldmVudFR5cGVGcm9tUHJvcGVydHlOYW1lKHByb3BOYW1lKSxcbiAgICAgICAgICAgICAgaGFuZGxlciA9IHByb3BWYWx1ZTtcblxuICAgICAgICB0aGlzLnNldEV2ZW50SGFuZGxlcihldmVudFR5cGUsIGhhbmRsZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IHByb3BOYW1lLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHByb3BWYWx1ZTtcblxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVkQ2hpbGRyZW5Db3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIGFkZGVkQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihhZGRlZENoaWxkKSB7XG4gICAgICBhZGRlZENoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIHJlbW92ZWRDaGlsZHJlbkNvdW50XS5jb25jYXQoYWRkZWRDaGlsZHJlbiksXG4gICAgICAgICAgcmVtb3ZlZENoaWxkcmVuID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseSh0aGlzLmNoaWxkcmVuLCBhcmdzKTtcblxuICAgIHJlbW92ZWRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKHJlbW92ZWRDaGlsZCkge1xuICAgICAgcmVtb3ZlZENoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZENoaWxkKGNoaWxkLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBJbmZpbml0eSxcbiAgICAgICAgICByZW1vdmVkQ2hpbGRyZW5Db3VudCA9IDAsXG4gICAgICAgICAgYWRkZWRDaGlsZHJlbiA9IFtjaGlsZF07XG5cbiAgICB0aGlzLnNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVkQ2hpbGRyZW5Db3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCk7XG4gIH1cblxuICByZW1vdmVDaGlsZChjaGlsZCwgY29udGV4dCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LFxuICAgICAgICAgICAgcmVtb3ZlZENoaWxkcmVuQ291bnQgPSAxLFxuICAgICAgICAgICAgYWRkZWRDaGlsZHJlbiA9IFtdO1xuXG4gICAgICB0aGlzLnNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVkQ2hpbGRyZW5Db3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzcGxheUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGlzUHJvcE5hbWVIYW5kbGVyTmFtZShwcm9wTmFtZSkge1xuICByZXR1cm4gcHJvcE5hbWUubWF0Y2goL15vbi8pO1xufVxuXG5mdW5jdGlvbiBldmVudFR5cGVGcm9tUHJvcGVydHlOYW1lKHByb3BOYW1lKSB7XG4gIHJldHVybiBwcm9wTmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKTtcbn1cbiJdfQ==