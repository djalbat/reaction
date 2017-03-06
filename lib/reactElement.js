'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var helpers = require('./helpers'),
    Element = require('./element');

var ReactElement = function (_Element) {
  _inherits(ReactElement, _Element);

  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    var domElement = null;

    var _this = _possibleConstructorReturn(this, (ReactElement.__proto__ || Object.getPrototypeOf(ReactElement)).call(this, domElement, props));

    _this.state = undefined;

    _this.context = undefined;
    return _this;
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent, reference);

      this.context = context;

      this.children = helpers.guaranteeArray(this.render());

      var childParent = this,
          childReference = reference,
          childContext = this.getChildContext(context) || context;

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      });

      this.componentDidMount();
    }
  }, {
    key: 'remount',
    value: function remount() {
      var childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext(this.context) || this.context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      this.children = helpers.guaranteeArray(this.render());

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      }.bind(this));
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.context = context;

      this.componentWillUnmount();

      var childContext = this.getChildContext(context) || context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate(update) {
      if (update !== undefined) {
        this.render(update);
      } else {
        this.remount();
      }
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.remount();
    }
  }, {
    key: 'spliceChildren',
    value: function spliceChildren(start, removeCount, addedChildren) {
      var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.context;

      var firstChild = first(this.children),
          childContext = this.getChildContext(context) || context;

      firstChild.spliceChildren(start, removeCount, addedChildren, childContext);
    }
  }, {
    key: 'addChild',
    value: function addChild(child) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

      var firstChild = first(this.children),
          childContext = this.getChildContext(context) || context;

      firstChild.addChild(child, childContext);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

      var firstChild = first(this.children),
          childContext = this.getChildContext(context) || context;

      firstChild.removeChild(child, childContext);
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(name, value) {
      var firstChild = first(this.children);

      return firstChild.setAttribute(name, value);
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      var firstChild = first(this.children);

      return firstChild.getAttribute(name);
    }
  }, {
    key: 'clearAttribute',
    value: function clearAttribute(name) {
      var firstChild = first(this.children);

      firstChild.clearAttribute(name);
    }
  }, {
    key: 'setClass',
    value: function setClass(className) {
      var firstChild = first(this.children);

      firstChild.setClass(className);
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      var firstChild = first(this.children);

      firstChild.addClass(className);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      var firstChild = first(this.children);

      firstChild.removeClass(className);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(className) {
      var firstChild = first(this.children);

      firstChild.toggleClass(className);
    }
  }, {
    key: 'hasClass',
    value: function hasClass(className) {
      var firstChild = first(this.children);

      return firstChild.hasClass(className);
    }
  }, {
    key: 'clearClasses',
    value: function clearClasses() {
      var firstChild = first(this.children);

      firstChild.clearClasses();
    }
  }, {
    key: 'getChildReference',
    value: function getChildReference() {
      var parent = this.getParent(),
          child = this;

      return reference(parent, child);
    }
  }]);

  return ReactElement;
}(Element);

module.exports = ReactElement;

function reference(parent, child) {
  var reference = findReference(parent, child),
      parentDOMElement = parent.getDOMElement();

  while (reference === null && parentDOMElement === null) {
    child = parent;
    parent = parent.getParent();

    reference = findReference(parent, child);
    parentDOMElement = parent.getDOMElement();
  }

  return reference;
}

function findReference(parent, child) {
  var children = parent.getChildren(),
      remainingChildren = helpers.remaining(child, children);

  return remainingChildren.reduce(function (reference, remainingChild) {
    if (reference === null) {
      var remainingChildDOMElement = remainingChild.getDOMElement();

      if (remainingChildDOMElement !== null) {
        reference = remainingChild;
      } else {
        child = null;
        parent = remainingChild;

        reference = findReference(parent, child);
      }
    }

    return reference;
  }, null);
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOlsiaGVscGVycyIsInJlcXVpcmUiLCJFbGVtZW50IiwiUmVhY3RFbGVtZW50IiwicHJvcHMiLCJkb21FbGVtZW50Iiwic3RhdGUiLCJ1bmRlZmluZWQiLCJjb250ZXh0IiwicGFyZW50IiwicmVmZXJlbmNlIiwiY2hpbGRyZW4iLCJndWFyYW50ZWVBcnJheSIsInJlbmRlciIsImNoaWxkUGFyZW50IiwiY2hpbGRSZWZlcmVuY2UiLCJjaGlsZENvbnRleHQiLCJnZXRDaGlsZENvbnRleHQiLCJmb3JFYWNoIiwiY2hpbGQiLCJtb3VudCIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0Q2hpbGRSZWZlcmVuY2UiLCJ1bm1vdW50IiwiYmluZCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwidXBkYXRlIiwicmVtb3VudCIsInN0YXJ0IiwicmVtb3ZlQ291bnQiLCJhZGRlZENoaWxkcmVuIiwiZmlyc3RDaGlsZCIsImZpcnN0Iiwic3BsaWNlQ2hpbGRyZW4iLCJhZGRDaGlsZCIsInJlbW92ZUNoaWxkIiwibmFtZSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJzZXRDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwiY2xlYXJDbGFzc2VzIiwiZ2V0UGFyZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsImZpbmRSZWZlcmVuY2UiLCJwYXJlbnRET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImdldENoaWxkcmVuIiwicmVtYWluaW5nQ2hpbGRyZW4iLCJyZW1haW5pbmciLCJyZWR1Y2UiLCJyZW1haW5pbmdDaGlsZCIsInJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENB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QXpCLENBRDFCOztBQUdBLFNBQU80QyxrQkFBa0JFLE1BQWxCLENBQXlCLFVBQVMvQyxTQUFULEVBQW9CZ0QsY0FBcEIsRUFBb0M7QUFDbEUsUUFBSWhELGNBQWMsSUFBbEIsRUFBd0I7QUFDdEIsVUFBTWlELDJCQUEyQkQsZUFBZUwsYUFBZixFQUFqQzs7QUFFQSxVQUFJTSw2QkFBNkIsSUFBakMsRUFBdUM7QUFDckNqRCxvQkFBWWdELGNBQVo7QUFDRCxPQUZELE1BRU87QUFDTHZDLGdCQUFRLElBQVI7QUFDQVYsaUJBQVNpRCxjQUFUOztBQUVBaEQsb0JBQVl5QyxjQUFjMUMsTUFBZCxFQUFzQlUsS0FBdEIsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsV0FBT1QsU0FBUDtBQUNELEdBZk0sRUFlSixJQWZJLENBQVA7QUFnQkQ7O0FBRUQsU0FBU3NCLEtBQVQsQ0FBZTRCLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJyZWFjdEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGhlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMnKSxcbiAgICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG51bGw7XG5cbiAgICBzdXBlcihkb21FbGVtZW50LCBwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGhlbHBlcnMuZ3VhcmFudGVlQXJyYXkodGhpcy5yZW5kZXIoKSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSByZWZlcmVuY2UsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpOyBcbiAgfVxuXG4gIHJlbW91bnQoKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCkgfHwgdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gaGVscGVycy5ndWFyYW50ZWVBcnJheSh0aGlzLnJlbmRlcigpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuICAgIFxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKHVwZGF0ZSkge1xuICAgIGlmICh1cGRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5yZW5kZXIodXBkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdW50KCk7XG4gICAgfVxuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIHNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVDb3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCA9IHRoaXMuY29udGV4dCkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0O1xuXG4gICAgZmlyc3RDaGlsZC5zcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNoaWxkQ29udGV4dCk7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZCwgY29udGV4dCA9IHRoaXMuY29udGV4dCkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0O1xuXG4gICAgZmlyc3RDaGlsZC5hZGRDaGlsZChjaGlsZCwgY2hpbGRDb250ZXh0KTtcbiAgfVxuXG4gIHJlbW92ZUNoaWxkKGNoaWxkLCBjb250ZXh0ID0gdGhpcy5jb250ZXh0KSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICBmaXJzdENoaWxkLnJlbW92ZUNoaWxkKGNoaWxkLCBjaGlsZENvbnRleHQpO1xuICB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIGZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIGZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQuY2xlYXJBdHRyaWJ1dGUobmFtZSk7XG4gIH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLnNldENsYXNzKGNsYXNzTmFtZSk7XG4gIH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLmFkZENsYXNzKGNsYXNzTmFtZSk7XG4gIH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG4gIH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSk7XG4gIH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZC5oYXNDbGFzcyhjbGFzc05hbWUpO1xuICB9XG5cbiAgY2xlYXJDbGFzc2VzKCkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQuY2xlYXJDbGFzc2VzKCk7XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpcztcblxuICAgIHJldHVybiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGxldCByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpLFxuICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKChyZWZlcmVuY2UgPT09IG51bGwpICYmIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSkge1xuICAgIGNoaWxkID0gcGFyZW50O1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgcmVtYWluaW5nQ2hpbGRyZW4gPSBoZWxwZXJzLnJlbWFpbmluZyhjaGlsZCwgY2hpbGRyZW4pO1xuXG4gIHJldHVybiByZW1haW5pbmdDaGlsZHJlbi5yZWR1Y2UoZnVuY3Rpb24ocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCA9IHJlbWFpbmluZ0NoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgaWYgKHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSByZW1haW5pbmdDaGlsZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gbnVsbDtcbiAgICAgICAgcGFyZW50ID0gcmVtYWluaW5nQ2hpbGQ7XG5cbiAgICAgICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBudWxsKTtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbiJdfQ==