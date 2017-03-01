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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXNwbGF5RWxlbWVudC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkRpc3BsYXlFbGVtZW50IiwiZGlzcGxheU5hbWUiLCJwcm9wcyIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnQiLCJyZWZlcmVuY2UiLCJjb250ZXh0IiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsImNoaWxkQ29udGV4dCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwibW91bnQiLCJhcHBseVByb3BzIiwidW5tb3VudCIsInByb3BOYW1lcyIsIk9iamVjdCIsImtleXMiLCJwcm9wTmFtZSIsInByb3BWYWx1ZSIsImNhbGxiYWNrIiwiZ2V0RE9NRWxlbWVudCIsInByb3BOYW1lSXNIYW5kbGVyTmFtZSIsImV2ZW50TmFtZSIsImV2ZW50TmFtZUZyb21Qcm9wZXJ0eU5hbWUiLCJoYW5kbGVyIiwic2V0SGFuZGxlciIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVWYWx1ZSIsInNldEF0dHJpYnV0ZSIsImJpbmQiLCJzdGFydCIsInJlbW92ZUNvdW50IiwiYWRkZWRDaGlsZHJlbiIsImFkZGVkQ2hpbGQiLCJyZW1vdmVkQ2hpbGRyZW4iLCJzcGxpY2UiLCJyZW1vdmVkQ2hpbGQiLCJJbmZpbml0eSIsInNwbGljZUNoaWxkcmVuIiwiaW5kZXgiLCJpbmRleE9mIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1hdGNoIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7O0lBRU1DLGM7OztBQUNKLDBCQUFZQyxXQUFaLEVBQXlCQyxLQUF6QixFQUFnQztBQUFBOztBQUM5QixRQUFNQyxhQUFhQyxTQUFTQyxhQUFULENBQXVCSixXQUF2QixDQUFuQjs7QUFEOEIsMkhBR3hCRSxVQUh3QixFQUdaRCxLQUhZO0FBSS9COzs7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TSxjQUFMLENBQW9CUixLQUFwQixFQUEyQkMsV0FBM0IsRUFBd0NDLGFBQXhDLEVBQXVENUIsT0FBdkQ7QUFDRDtBQUNGOzs7O0VBNUYwQlYsTzs7QUErRjdCK0MsT0FBT0MsT0FBUCxHQUFpQjlDLGNBQWpCOztBQUVBLFNBQVN5QixxQkFBVCxDQUErQkosUUFBL0IsRUFBeUM7QUFDdkMsU0FBT0EsU0FBUzBCLEtBQVQsQ0FBZSxLQUFmLENBQVA7QUFDRDs7QUFFRCxTQUFTcEIseUJBQVQsQ0FBbUNOLFFBQW5DLEVBQTZDO0FBQzNDLFNBQU9BLFNBQVMyQixXQUFULEVBQVA7QUFDRCIsImZpbGUiOiJkaXNwbGF5RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBEaXNwbGF5RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihkaXNwbGF5TmFtZSwgcHJvcHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkaXNwbGF5TmFtZSk7XG5cbiAgICBzdXBlcihkb21FbGVtZW50LCBwcm9wcyk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcblxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcHBseVByb3BzKCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGNvbnN0IHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpO1xuXG4gICAgcHJvcE5hbWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcE5hbWUpIHtcbiAgICAgIGNvbnN0IHByb3BWYWx1ZSA9IHRoaXMucHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmIChwcm9wTmFtZSA9PT0gJ3JlZicpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBwcm9wVmFsdWUsXG4gICAgICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgICBjYWxsYmFjayhkb21FbGVtZW50KVxuICAgICAgfSBlbHNlIGlmIChwcm9wTmFtZUlzSGFuZGxlck5hbWUocHJvcE5hbWUpKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGV2ZW50TmFtZUZyb21Qcm9wZXJ0eU5hbWUocHJvcE5hbWUpLFxuICAgICAgICAgICAgICBoYW5kbGVyID0gcHJvcFZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0SGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IHByb3BOYW1lLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHByb3BWYWx1ZTtcblxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVDb3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIGFkZGVkQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihhZGRlZENoaWxkKSB7XG4gICAgICBhZGRlZENoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbW92ZWRDaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4uc3BsaWNlKHN0YXJ0LCByZW1vdmVDb3VudCwgYWRkZWRDaGlsZHJlbik7XG5cbiAgICByZW1vdmVkQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihyZW1vdmVkQ2hpbGQpIHtcbiAgICAgIHJlbW92ZWRDaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gSW5maW5pdHksXG4gICAgICAgICAgcmVtb3ZlQ291bnQgPSAwLFxuICAgICAgICAgIGFkZGVkQ2hpbGRyZW4gPSBbY2hpbGRdO1xuXG4gICAgdGhpcy5zcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQpO1xuICB9XG5cbiAgcmVtb3ZlQ2hpbGQoY2hpbGQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCxcbiAgICAgICAgICAgIHJlbW92ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGFkZGVkQ2hpbGRyZW4gPSBbXTtcblxuICAgICAgdGhpcy5zcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BsYXlFbGVtZW50O1xuXG5mdW5jdGlvbiBwcm9wTmFtZUlzSGFuZGxlck5hbWUocHJvcE5hbWUpIHtcbiAgcmV0dXJuIHByb3BOYW1lLm1hdGNoKC9eb24vKTtcbn1cblxuZnVuY3Rpb24gZXZlbnROYW1lRnJvbVByb3BlcnR5TmFtZShwcm9wTmFtZSkge1xuICByZXR1cm4gcHJvcE5hbWUudG9Mb3dlckNhc2UoKTtcbn1cbiJdfQ==