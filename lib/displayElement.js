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
    value: function mount(parent, reference, context) {
      _get(Object.getPrototypeOf(DisplayElement.prototype), 'mount', this).call(this, parent, reference);

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

      _get(Object.getPrototypeOf(DisplayElement.prototype), 'unmount', this).call(this);
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
    value: function spliceChildren(start, removeCount, addedChildren, context) {
      var childParent = this,
          childReference = null,
          childContext = context;

      addedChildren.forEach(function (addedChild) {
        addedChild.mount(childParent, childReference, childContext);
      });

      var removedChildren = this.children.splice(start, removeCount, addedChildren);

      removedChildren.forEach(function (removedChild) {
        removedChild.unmount(childContext);
      });
    }
  }, {
    key: 'addChild',
    value: function addChild(child, context) {
      var start = Infinity,
          removeCount = 0,
          addedChildren = [child];

      this.spliceChildren(start, removeCount, addedChildren, context);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child, context) {
      var index = this.children.indexOf(child);

      if (index > -1) {
        var start = index,
            removeCount = 1,
            addedChildren = [];

        this.spliceChildren(start, removeCount, addedChildren, context);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXNwbGF5RWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxVQUFVLFFBQVEsV0FBUixDQUFWOztJQUVBOzs7QUFDSixXQURJLGNBQ0osQ0FBWSxXQUFaLEVBQXlCLEtBQXpCLEVBQWdDOzBCQUQ1QixnQkFDNEI7O0FBQzlCLFFBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBYixDQUR3Qjs7a0VBRDVCLDJCQUlJLFlBQVksUUFIWTtHQUFoQzs7ZUFESTs7MEJBT0UsUUFBUSxXQUFXLFNBQVM7QUFDaEMsaUNBUkUscURBUVUsUUFBUSxVQUFwQixDQURnQzs7QUFHaEMsVUFBTSxjQUFjLElBQWQ7VUFDQSxpQkFBaUIsSUFBakI7VUFDQSxlQUFlLE9BQWYsQ0FMMEI7O0FBT2hDLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sS0FBTixDQUFZLFdBQVosRUFBeUIsY0FBekIsRUFBeUMsWUFBekMsRUFEb0M7T0FBaEIsQ0FBdEIsQ0FQZ0M7O0FBV2hDLFdBQUssVUFBTCxHQVhnQzs7Ozs0QkFjMUIsU0FBUztBQUNmLFVBQU0sZUFBZSxPQUFmLENBRFM7O0FBR2YsV0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixVQUFTLEtBQVQsRUFBZ0I7QUFDcEMsY0FBTSxPQUFOLENBQWMsWUFBZCxFQURvQztPQUFoQixDQUF0QixDQUhlOztBQU9mLGlDQTVCRSxzREE0QkYsQ0FQZTs7OztpQ0FVSjtBQUNYLFVBQU0sWUFBWSxPQUFPLElBQVAsQ0FBWSxLQUFLLEtBQUwsQ0FBeEIsQ0FESzs7QUFHWCxnQkFBVSxPQUFWLENBQWtCLFVBQVMsUUFBVCxFQUFtQjtBQUNuQyxZQUFNLFlBQVksS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFaLENBRDZCOztBQUduQyxZQUFJLEtBQUosRUFBVyxFQUFYLE1BRU8sSUFBSSxhQUFhLEtBQWIsRUFBb0I7QUFDN0IsY0FBTSxXQUFXLFNBQVg7Y0FDQSxhQUFhLEtBQUssYUFBTCxFQUFiLENBRnVCOztBQUk3QixtQkFBUyxVQUFULEVBSjZCO1NBQXhCLE1BS0EsSUFBSSxzQkFBc0IsUUFBdEIsQ0FBSixFQUFxQztBQUMxQyxjQUFNLFlBQVksMEJBQTBCLFFBQTFCLENBQVo7Y0FDQSxVQUFVLFNBQVYsQ0FGb0M7O0FBSTFDLGVBQUssVUFBTCxDQUFnQixTQUFoQixFQUEyQixPQUEzQixFQUowQztTQUFyQyxNQUtBO0FBQ0wsY0FBTSxnQkFBZ0IsUUFBaEI7Y0FDQSxpQkFBaUIsU0FBakIsQ0FGRDs7QUFJTCxlQUFLLFlBQUwsQ0FBa0IsYUFBbEIsRUFBaUMsY0FBakMsRUFKSztTQUxBO09BVlMsQ0FxQmhCLElBckJnQixDQXFCWCxJQXJCVyxDQUFsQixFQUhXOzs7O21DQTJCRSxPQUFPLGFBQWEsZUFBZSxTQUFTO0FBQ3pELFVBQU0sY0FBYyxJQUFkO1VBQ0EsaUJBQWlCLElBQWpCO1VBQ0EsZUFBZSxPQUFmLENBSG1EOztBQUt6RCxvQkFBYyxPQUFkLENBQXNCLFVBQVMsVUFBVCxFQUFxQjtBQUN6QyxtQkFBVyxLQUFYLENBQWlCLFdBQWpCLEVBQThCLGNBQTlCLEVBQThDLFlBQTlDLEVBRHlDO09BQXJCLENBQXRCLENBTHlEOztBQVN6RCxVQUFNLGtCQUFrQixLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQTRCLFdBQTVCLEVBQXlDLGFBQXpDLENBQWxCLENBVG1EOztBQVd6RCxzQkFBZ0IsT0FBaEIsQ0FBd0IsVUFBUyxZQUFULEVBQXVCO0FBQzdDLHFCQUFhLE9BQWIsQ0FBcUIsWUFBckIsRUFENkM7T0FBdkIsQ0FBeEIsQ0FYeUQ7Ozs7NkJBZ0JsRCxPQUFPLFNBQVM7QUFDdkIsVUFBTSxRQUFRLFFBQVI7VUFDQSxjQUFjLENBQWQ7VUFDQSxnQkFBZ0IsQ0FBQyxLQUFELENBQWhCLENBSGlCOztBQUt2QixXQUFLLGNBQUwsQ0FBb0IsS0FBcEIsRUFBMkIsV0FBM0IsRUFBd0MsYUFBeEMsRUFBdUQsT0FBdkQsRUFMdUI7Ozs7Z0NBUWIsT0FBTyxTQUFTO0FBQzFCLFVBQU0sUUFBUSxLQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLEtBQXRCLENBQVIsQ0FEb0I7O0FBRzFCLFVBQUksUUFBUSxDQUFDLENBQUQsRUFBSTtBQUNkLFlBQU0sUUFBUSxLQUFSO1lBQ0EsY0FBYyxDQUFkO1lBQ0EsZ0JBQWdCLEVBQWhCLENBSFE7O0FBS2QsYUFBSyxjQUFMLENBQW9CLEtBQXBCLEVBQTJCLFdBQTNCLEVBQXdDLGFBQXhDLEVBQXVELE9BQXZELEVBTGM7T0FBaEI7Ozs7U0FyRkU7RUFBdUI7O0FBK0Y3QixPQUFPLE9BQVAsR0FBaUIsY0FBakI7O0FBRUEsU0FBUyxxQkFBVCxDQUErQixRQUEvQixFQUF5QztBQUN2QyxTQUFPLFNBQVMsS0FBVCxDQUFlLEtBQWYsQ0FBUCxDQUR1QztDQUF6Qzs7QUFJQSxTQUFTLHlCQUFULENBQW1DLFFBQW5DLEVBQTZDO0FBQzNDLFNBQU8sU0FBUyxXQUFULEVBQVAsQ0FEMkM7Q0FBN0MiLCJmaWxlIjoiZGlzcGxheUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgRGlzcGxheUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZGlzcGxheU5hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGlzcGxheU5hbWUpO1xuXG4gICAgc3VwZXIoZG9tRWxlbWVudCwgcHJvcHMpO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgYXBwbHlQcm9wcygpIHtcbiAgICBjb25zdCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcblxuICAgIHByb3BOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3BOYW1lKSB7XG4gICAgICBjb25zdCBwcm9wVmFsdWUgPSB0aGlzLnByb3BzW3Byb3BOYW1lXTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gcHJvcFZhbHVlLFxuICAgICAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgICAgY2FsbGJhY2soZG9tRWxlbWVudClcbiAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWVJc0hhbmRsZXJOYW1lKHByb3BOYW1lKSkge1xuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBldmVudE5hbWVGcm9tUHJvcGVydHlOYW1lKHByb3BOYW1lKSxcbiAgICAgICAgICAgICAgaGFuZGxlciA9IHByb3BWYWx1ZTtcblxuICAgICAgICB0aGlzLnNldEhhbmRsZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBwcm9wTmFtZSxcbiAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBwcm9wVmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBzcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICBhZGRlZENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oYWRkZWRDaGlsZCkge1xuICAgICAgYWRkZWRDaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW1vdmVkQ2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLnNwbGljZShzdGFydCwgcmVtb3ZlQ291bnQsIGFkZGVkQ2hpbGRyZW4pO1xuXG4gICAgcmVtb3ZlZENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24ocmVtb3ZlZENoaWxkKSB7XG4gICAgICByZW1vdmVkQ2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2hpbGQoY2hpbGQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGFydCA9IEluZmluaXR5LFxuICAgICAgICAgIHJlbW92ZUNvdW50ID0gMCxcbiAgICAgICAgICBhZGRlZENoaWxkcmVuID0gW2NoaWxkXTtcblxuICAgIHRoaXMuc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZUNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJlbW92ZUNoaWxkKGNoaWxkLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsXG4gICAgICAgICAgICByZW1vdmVDb3VudCA9IDEsXG4gICAgICAgICAgICBhZGRlZENoaWxkcmVuID0gW107XG5cbiAgICAgIHRoaXMuc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZUNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNwbGF5RWxlbWVudDtcblxuZnVuY3Rpb24gcHJvcE5hbWVJc0hhbmRsZXJOYW1lKHByb3BOYW1lKSB7XG4gIHJldHVybiBwcm9wTmFtZS5tYXRjaCgvXm9uLyk7XG59XG5cbmZ1bmN0aW9uIGV2ZW50TmFtZUZyb21Qcm9wZXJ0eU5hbWUocHJvcE5hbWUpIHtcbiAgcmV0dXJuIHByb3BOYW1lLnRvTG93ZXJDYXNlKCk7XG59XG4iXX0=