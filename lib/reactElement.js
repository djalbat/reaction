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
    value: function forceUpdate() {
      this.remount();
    }
  }, {
    key: 'addChild',
    value: function addChild(child) {
      var start = 0,
          deleteCount = 0;

      this.children.splice(start, deleteCount, child);

      var childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext(this.context);

      child.mount(childParent, childReference, childContext);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      var index = this.children.indexOf(child);

      if (index > -1) {
        var childContext = this.getChildContext(this.context);

        child.unmount(childContext);

        var start = index,
            deleteCount = 1;

        this.children.splice(start, deleteCount);
      }
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.remount();
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
    key: 'clearClasses',
    value: function clearClasses() {
      var firstChild = first(this.children);

      firstChild.clearClasses();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOlsiaGVscGVycyIsInJlcXVpcmUiLCJFbGVtZW50IiwiUmVhY3RFbGVtZW50IiwicHJvcHMiLCJkb21FbGVtZW50Iiwic3RhdGUiLCJ1bmRlZmluZWQiLCJjb250ZXh0IiwicGFyZW50IiwicmVmZXJlbmNlIiwiY2hpbGRyZW4iLCJndWFyYW50ZWVBcnJheSIsInJlbmRlciIsImNoaWxkUGFyZW50IiwiY2hpbGRSZWZlcmVuY2UiLCJjaGlsZENvbnRleHQiLCJnZXRDaGlsZENvbnRleHQiLCJmb3JFYWNoIiwiY2hpbGQiLCJtb3VudCIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0Q2hpbGRSZWZlcmVuY2UiLCJ1bm1vdW50IiwiYmluZCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3VudCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJpbmRleCIsImluZGV4T2YiLCJuYW1lIiwidmFsdWUiLCJmaXJzdENoaWxkIiwiZmlyc3QiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsInNldENsYXNzIiwiY2xlYXJDbGFzc2VzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiZ2V0UGFyZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsImZpbmRSZWZlcmVuY2UiLCJwYXJlbnRET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImdldENoaWxkcmVuIiwicmVtYWluaW5nQ2hpbGRyZW4iLCJyZW1haW5pbmciLCJyZWR1Y2UiLCJyZW1haW5pbmdDaGlsZCIsInJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxXQUFSLENBRGhCOztJQUdNRSxZOzs7QUFD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LENBQVo7QUFDRDtBQUNGOztBQUVELFdBQU9ULFNBQVA7QUFDRCxHQWZNLEVBZUosSUFmSSxDQUFQO0FBZ0JEOztBQUVELFNBQVN5QixLQUFULENBQWVzQixLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicmVhY3RFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBoZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzJyksXG4gICAgICBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsO1xuXG4gICAgc3VwZXIoZG9tRWxlbWVudCwgcHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuY29udGV4dCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBoZWxwZXJzLmd1YXJhbnRlZUFycmF5KHRoaXMucmVuZGVyKCkpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gcmVmZXJlbmNlLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTsgXG4gIH1cblxuICByZW1vdW50KCkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpIHx8IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGhlbHBlcnMuZ3VhcmFudGVlQXJyYXkodGhpcy5yZW5kZXIoKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgICBcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIGFkZENoaWxkKGNoaWxkKSB7XG4gICAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgY2hpbGQpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCk7XG5cbiAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gIH1cblxuICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpO1xuXG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIHJldHVybiBmaXJzdENoaWxkLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIHJldHVybiBmaXJzdENoaWxkLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLmNsZWFyQXR0cmlidXRlKG5hbWUpO1xuICB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgZmlyc3RDaGlsZC5zZXRDbGFzcyhjbGFzc05hbWUpO1xuICB9XG5cbiAgY2xlYXJDbGFzc2VzKCkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQuY2xlYXJDbGFzc2VzKCk7XG4gIH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLmFkZENsYXNzKGNsYXNzTmFtZSk7XG4gIH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG4gIH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSk7XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpcztcblxuICAgIHJldHVybiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGxldCByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpLFxuICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKChyZWZlcmVuY2UgPT09IG51bGwpICYmIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSkge1xuICAgIGNoaWxkID0gcGFyZW50O1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgcmVtYWluaW5nQ2hpbGRyZW4gPSBoZWxwZXJzLnJlbWFpbmluZyhjaGlsZCwgY2hpbGRyZW4pO1xuXG4gIHJldHVybiByZW1haW5pbmdDaGlsZHJlbi5yZWR1Y2UoZnVuY3Rpb24ocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCA9IHJlbWFpbmluZ0NoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgaWYgKHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSByZW1haW5pbmdDaGlsZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gbnVsbDtcbiAgICAgICAgcGFyZW50ID0gcmVtYWluaW5nQ2hpbGQ7XG5cbiAgICAgICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBudWxsKTtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbiJdfQ==