'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var helpers = require('../helpers'),
    Element = require('../element');

var ReactElement = function (_Element) {
  _inherits(ReactElement, _Element);

  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    var _this = _possibleConstructorReturn(this, (ReactElement.__proto__ || Object.getPrototypeOf(ReactElement)).call(this, props));

    _this.state = undefined; ///

    _this.context = undefined;
    return _this;
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent);

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
    key: 'getDOMElement',
    value: function getDOMElement() {
      return null;
    }
  }, {
    key: 'getTagName',
    value: function getTagName() {
      return undefined;
    }
  }, {
    key: 'setInitialState',
    value: function setInitialState(initialState) {
      this.state = initialState; ///
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.remount();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3JlYWN0LmpzIl0sIm5hbWVzIjpbImhlbHBlcnMiLCJyZXF1aXJlIiwiRWxlbWVudCIsIlJlYWN0RWxlbWVudCIsInByb3BzIiwic3RhdGUiLCJ1bmRlZmluZWQiLCJjb250ZXh0IiwicGFyZW50IiwicmVmZXJlbmNlIiwiY2hpbGRyZW4iLCJndWFyYW50ZWVBcnJheSIsInJlbmRlciIsImNoaWxkUGFyZW50IiwiY2hpbGRSZWZlcmVuY2UiLCJjaGlsZENvbnRleHQiLCJnZXRDaGlsZENvbnRleHQiLCJmb3JFYWNoIiwiY2hpbGQiLCJtb3VudCIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0Q2hpbGRSZWZlcmVuY2UiLCJ1bm1vdW50IiwiYmluZCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiaW5pdGlhbFN0YXRlIiwicmVtb3VudCIsInVwZGF0ZSIsInN0YXJ0IiwicmVtb3ZlQ291bnQiLCJhZGRlZENoaWxkcmVuIiwiZmlyc3RDaGlsZCIsImZpcnN0Iiwic3BsaWNlQ2hpbGRyZW4iLCJhZGRDaGlsZCIsInJlbW92ZUNoaWxkIiwibmFtZSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJzZXRDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwiY2xlYXJDbGFzc2VzIiwiZ2V0UGFyZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsImZpbmRSZWZlcmVuY2UiLCJwYXJlbnRET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImdldENoaWxkcmVuIiwicmVtYWluaW5nQ2hpbGRyZW4iLCJyZW1haW5pbmciLCJyZWR1Y2UiLCJyZW1haW5pbmdDaGlsZCIsInJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZ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QUFDcEMsTUFBTVIsV0FBV0YsT0FBTzhDLFdBQVAsRUFBakI7QUFBQSxNQUNNQyxvQkFBb0J2RCxRQUFRd0QsU0FBUixDQUFrQnRDLEtBQWxCLEVBQXlCUixRQUF6QixDQUQxQjs7QUFHQSxTQUFPNkMsa0JBQWtCRSxNQUFsQixDQUF5QixVQUFTaEQsU0FBVCxFQUFvQmlELGNBQXBCLEVBQW9DO0FBQ2xFLFFBQUlqRCxjQUFjLElBQWxCLEVBQXdCO0FBQ3RCLFVBQU1rRCwyQkFBMkJELGVBQWVMLGFBQWYsRUFBakM7O0FBRUEsVUFBSU0sNkJBQTZCLElBQWpDLEVBQXVDO0FBQ3JDbEQsb0JBQVlpRCxjQUFaO0FBQ0QsT0FGRCxNQUVPO0FBQ0x4QyxnQkFBUSxJQUFSO0FBQ0FWLGlCQUFTa0QsY0FBVDs7QUFFQWpELG9CQUFZMEMsY0FBYzNDLE1BQWQsRUFBc0JVLEtBQXRCLENBQVo7QUFDRDtBQUNGOztBQUVELFdBQU9ULFNBQVA7QUFDRCxHQWZNLEVBZUosSUFmSSxDQUFQO0FBZ0JEOztBQUVELFNBQVN1QixLQUFULENBQWU0QixLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGhlbHBlcnMgPSByZXF1aXJlKCcuLi9oZWxwZXJzJyksXG4gICAgICBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCk7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGhlbHBlcnMuZ3VhcmFudGVlQXJyYXkodGhpcy5yZW5kZXIoKSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSByZWZlcmVuY2UsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpOyBcbiAgfVxuXG4gIHJlbW91bnQoKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCkgfHwgdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gaGVscGVycy5ndWFyYW50ZWVBcnJheSh0aGlzLnJlbmRlcigpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuICAgIFxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRUYWdOYW1lKCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgXG4gIHNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlOyAgLy8vXG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgaWYgKHVwZGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnJlbmRlcih1cGRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW91bnQoKTtcbiAgICB9XG4gIH1cblxuICBzcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQgPSB0aGlzLmNvbnRleHQpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbiksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIGZpcnN0Q2hpbGQuc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZUNvdW50LCBhZGRlZENoaWxkcmVuLCBjaGlsZENvbnRleHQpO1xuICB9XG5cbiAgYWRkQ2hpbGQoY2hpbGQsIGNvbnRleHQgPSB0aGlzLmNvbnRleHQpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbiksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIGZpcnN0Q2hpbGQuYWRkQ2hpbGQoY2hpbGQsIGNoaWxkQ29udGV4dCk7XG4gIH1cblxuICByZW1vdmVDaGlsZChjaGlsZCwgY29udGV4dCA9IHRoaXMuY29udGV4dCkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0O1xuXG4gICAgZmlyc3RDaGlsZC5yZW1vdmVDaGlsZChjaGlsZCwgY2hpbGRDb250ZXh0KTtcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIHJldHVybiBmaXJzdENoaWxkLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIHJldHVybiBmaXJzdENoaWxkLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLmNsZWFyQXR0cmlidXRlKG5hbWUpO1xuICB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgZmlyc3RDaGlsZC5zZXRDbGFzcyhjbGFzc05hbWUpO1xuICB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgZmlyc3RDaGlsZC5hZGRDbGFzcyhjbGFzc05hbWUpO1xuICB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgZmlyc3RDaGlsZC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuICB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgZmlyc3RDaGlsZC50b2dnbGVDbGFzcyhjbGFzc05hbWUpO1xuICB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQ2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLmNsZWFyQ2xhc3NlcygpO1xuICB9XG5cbiAgZ2V0Q2hpbGRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnQoKSxcbiAgICAgICAgICBjaGlsZCA9IHRoaXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gaGVscGVycy5yZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uKHJlZmVyZW5jZSwgcmVtYWluaW5nQ2hpbGQpIHtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkO1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG4iXX0=