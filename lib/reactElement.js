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
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.remount();
    }
  }, {
    key: 'addChild',
    value: function addChild(child) {
      var start = Infinity,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOlsiaGVscGVycyIsInJlcXVpcmUiLCJFbGVtZW50IiwiUmVhY3RFbGVtZW50IiwicHJvcHMiLCJkb21FbGVtZW50Iiwic3RhdGUiLCJ1bmRlZmluZWQiLCJjb250ZXh0IiwicGFyZW50IiwicmVmZXJlbmNlIiwiY2hpbGRyZW4iLCJndWFyYW50ZWVBcnJheSIsInJlbmRlciIsImNoaWxkUGFyZW50IiwiY2hpbGRSZWZlcmVuY2UiLCJjaGlsZENvbnRleHQiLCJnZXRDaGlsZENvbnRleHQiLCJmb3JFYWNoIiwiY2hpbGQiLCJtb3VudCIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0Q2hpbGRSZWZlcmVuY2UiLCJ1bm1vdW50IiwiYmluZCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3VudCIsInN0YXJ0IiwiSW5maW5pdHkiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImluZGV4IiwiaW5kZXhPZiIsIm5hbWUiLCJ2YWx1ZSIsImZpcnN0Q2hpbGQiLCJmaXJzdCIsInNldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsImNsZWFyQXR0cmlidXRlIiwiY2xhc3NOYW1lIiwic2V0Q2xhc3MiLCJjbGVhckNsYXNzZXMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidG9nZ2xlQ2xhc3MiLCJnZXRQYXJlbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmluZFJlZmVyZW5jZSIsInBhcmVudERPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZ2V0Q2hpbGRyZW4iLCJyZW1haW5pbmdDaGlsZHJlbiIsInJlbWFpbmluZyIsInJlZHVjZSIsInJlbWFpbmluZ0NoaWxkIiwicmVtYWluaW5nQ2hpbGRET01FbGVtZW50IiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxVQUFVRCxRQUFRLFdBQVIsQ0FEaEI7O0lB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RUFBc0JVLEtBQXRCLENBQVo7QUFDRDtBQUNGOztBQUVELFdBQU9ULFNBQVA7QUFDRCxHQWZNLEVBZUosSUFmSSxDQUFQO0FBZ0JEOztBQUVELFNBQVMwQixLQUFULENBQWVzQixLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicmVhY3RFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBoZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzJyksXG4gICAgICBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsO1xuXG4gICAgc3VwZXIoZG9tRWxlbWVudCwgcHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuY29udGV4dCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBoZWxwZXJzLmd1YXJhbnRlZUFycmF5KHRoaXMucmVuZGVyKCkpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gcmVmZXJlbmNlLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTsgXG4gIH1cblxuICByZW1vdW50KCkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpIHx8IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGhlbHBlcnMuZ3VhcmFudGVlQXJyYXkodGhpcy5yZW5kZXIoKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgICBcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gSW5maW5pdHksXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBjaGlsZCk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSB0aGlzLmdldENoaWxkUmVmZXJlbmNlKCksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQodGhpcy5jb250ZXh0KTtcblxuICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgfVxuXG4gIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCk7XG5cbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcblxuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCxcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICB9XG4gIH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gIH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgZmlyc3RDaGlsZC5jbGVhckF0dHJpYnV0ZShuYW1lKTtcbiAgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLmNsZWFyQ2xhc3NlcygpO1xuICB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgZmlyc3RDaGlsZC5hZGRDbGFzcyhjbGFzc05hbWUpO1xuICB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgZmlyc3RDaGlsZC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuICB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgZmlyc3RDaGlsZC50b2dnbGVDbGFzcyhjbGFzc05hbWUpO1xuICB9XG5cbiAgZ2V0Q2hpbGRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnQoKSxcbiAgICAgICAgICBjaGlsZCA9IHRoaXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gaGVscGVycy5yZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uKHJlZmVyZW5jZSwgcmVtYWluaW5nQ2hpbGQpIHtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkO1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG4iXX0=